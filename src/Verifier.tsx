import './App.css';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import {
  toBuffer,
  deserializeReceiveReturnValue,
  serializeUpdateContractParameters,
  ConcordiumGRPCClient,
} from '@concordium/web-sdk';
import sha256 from 'sha256';
import { useGrpcClient, MAINNET, WalletConnectionProps, useConnection, useConnect } from '@concordium/react-components';
import {
  E_SEALING_CONTRACT_NAME,
  E_SEALING_CONTRACT_INDEX,
  E_SEALING_RAW_SCHEMA,
  CONTRACT_SUB_INDEX,
  BROWSER_WALLET,
  WALLET_CONNECT,
} from './constants'
import { WalletConnectionTypeButton } from './WalletConnectorTypeButton';

const ResultStyle = {
  background: "white",
  color: "rgb(3, 21, 57)",
  padding: "0.12em 0.22em",
  borderRadius: "8px",
  fontWeight: "400",
  border: "4px solid rgb(236, 72, 153)",
}

const ButtonStyle = {
  color: "rgb(3, 21, 57)",
  borderRadius: "8px",
  backgroundColor: "white",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "1rem",
  border: "4px solid rgb(236, 72, 153)"
};

const ButtonStyleDisabled = {
  color: "rgb(3, 21, 57)",
  borderRadius: "8px",
  backgroundColor: "white",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "1rem",
  border: "4px solid rgb(236, 72, 153)"
};

const ButtonStyleSelected = {
  color: "black",
  borderRadius: "8px",
  backgroundColor: "#ff80df",
  fontWeight: "600",
  fontSize: "1.2rem",
  border: "4px solid rgb(236, 72, 153)"
};

const InputFieldStyle = {
  backgroundColor: "white",
  color: "rgb(3, 21, 57)",
  borderRadius: "8px",
  // width: "100%",
  margin: "7px 0px 7px 0px",
  padding: "0.4em",
  fontWeight: "600",
  fontSize: "1em",
  border: "4px solid rgb(236, 72, 153)"
};

export const Eseal =  {
  filehash: String,
  issued_to: String,
  issued_by: String,
  cert_type: String,
  tx_hash: String,
  timestamp: String,
  signer: String
};

const Disabled = {
  display: "none"
};

const Enabled = {};

async function getEseal(filehash: string) {
  const result = await fetch(`https://edubukeseal.org/eseal?filehash=${filehash}`); 
  return result;
}

async function viewFile(rpcClient: ConcordiumGRPCClient, fileHashHex: string) {
    const param = serializeUpdateContractParameters(
        E_SEALING_CONTRACT_NAME,
        'getFile',
        fileHashHex,
        toBuffer(E_SEALING_RAW_SCHEMA, 'base64')
    );

    const res = await rpcClient.invokeContract({
        method: `${E_SEALING_CONTRACT_NAME}.getFile`,
        contract: { index: E_SEALING_CONTRACT_INDEX, subindex: CONTRACT_SUB_INDEX },
        parameter: param,
    });

    if (!res || res.tag === 'failure' || !res.returnValue) {
        throw new Error(
            `RPC call 'invokeContract' on method '${E_SEALING_CONTRACT_NAME}.view' of contract '${E_SEALING_CONTRACT_INDEX}' failed`
        );
    }

    const returnValues = deserializeReceiveReturnValue(
        toBuffer(res.returnValue, 'hex'),
        toBuffer(E_SEALING_RAW_SCHEMA, 'base64'),
        E_SEALING_CONTRACT_NAME,
        'getFile',
        2
    );

    if (returnValues.Some !== undefined) {
        return returnValues.Some[0];
    }
    return { timestamp: null, witness: null };
}

export function Verifier(props: WalletConnectionProps) {
  const { network, activeConnectorType, activeConnector, activeConnectorError, connectedAccounts, genesisHashes } = props;

  const { connection, setConnection, account, genesisHash } = useConnection(connectedAccounts, genesisHashes);

  const { connect, isConnecting, connectError } = useConnect(activeConnector, setConnection);

  const grpcClient = useGrpcClient(MAINNET);

  const [isLoading, setLoading] = useState(false);

  const [getFileError, setGetFileError] = useState('');

  const [fileHashHex, setFileHashHex] = useState('');

  const [selectedFile, setSelectedFile] = useState<File>();

  const [witness, setWitness] = useState('');

  const [timestamp, setTimestamp] = useState('');

  const changeHandler = (event: ChangeEvent) => {
    const test = event.target as HTMLInputElement;

    if (test.files) {
      const file = test.files[0];
      setSelectedFile(file);
    }
  };

  useEffect(() => {
    // View File Record
    if (grpcClient && fileHashHex !== '') {
      viewFile(grpcClient, fileHashHex)
        .then((record) => {
          setGetFileError('');
          setTimestamp(record.timestamp);
          setWitness(record.witness);
        })
        .catch((e) => {
          setGetFileError((e as Error).message);
          setTimestamp('');
          setWitness('');
      });
      getEseal(fileHashHex).then((res) => {
        res.json().then((js_val) => {
          setName(js_val.issued_to);
          setAuthority(js_val.issued_by);
          setCertType(js_val.cert_type);
          setHash(js_val.tx_hash);
          setVerifiedResult('verified');
        }).catch((error) => {
            console.log(`Error: ${error}`);
            setVerifiedResult('unverified');
          })
      });
    }


  }, [grpcClient, fileHashHex]);

  const [verifiedResult, setVerifiedResult] = useState('');
    
  const [name, setName] = useState('');

  const [authority, setAuthority] = useState('');

  const [certType, setCertType] = useState('');

  const [hash, setHash] = useState('');

  const [loadingError, setLoadingError] = useState('');

  const file = useRef<HTMLInputElement | null>(null);

  const [isWaitingForTransaction, setWaitingForUser] = useState(false);

  return (
    <div className="container hero" id="verifier" style={{maxWidth: "340px", paddingTop: "25vh", paddingBottom: "25vh"}}>
      <div style={{border: "4px solid rgb(236, 72, 153)", borderRadius: "8px", maxWidth: "340px"}}>
        <div className="container"><button className="boxtitle" style={{"pointerEvents": "none", "color": "black"}}>Verify Your Certificates</button></div>
        <div className="container" style={{display: "flex", flexDirection: "row", justifyContent: "space-between", columnGap: "10px"}}>
          <WalletConnectionTypeButton
            buttonStyle={ButtonStyle}
            disabledButtonStyle={ButtonStyleDisabled}
            connectorType={BROWSER_WALLET}
            connectorName="Browser Wallet"
            setWaitingForUser={setWaitingForUser}
            connection={connection}
            {...props}
          />
          <WalletConnectionTypeButton
            buttonStyle={ButtonStyle}
            disabledButtonStyle={ButtonStyleDisabled}
            connectorType={WALLET_CONNECT}
            connectorName="Wallet Connect"
            setWaitingForUser={setWaitingForUser}
            connection={connection}
            {...props}
          />
        </div>
        <div className="container" style={{paddingTop: "0em"}}>
          {activeConnectorError && <p style={{ color: 'peach' }}>Connector Error: {activeConnectorError}.</p>}
          {!activeConnectorError && !isWaitingForTransaction && activeConnectorType && !activeConnector && (
              <p>
                  <i>Loading connector...</i>
              </p>
          )}
          {connectError && <p style={{ color: 'peach' }}>Connect Error: {connectError}.</p>}
          {!connection && !isWaitingForTransaction && activeConnectorType && activeConnector && (
              <p>
                  <button style={ButtonStyle} type="button" onClick={connect}>
                      {isConnecting && 'Connecting...'}
                      {!isConnecting && activeConnectorType === BROWSER_WALLET && 'Connect Browser Wallet'}
                      {!isConnecting && activeConnectorType === WALLET_CONNECT && 'Connect Mobile Wallet'}
                  </button>
              </p>
          )}
          {account && (
            <>
              <div style={{fontSize: "1.2em", padding: "0em 0.5em 0.5em 0em", fontWeight: "900"}}>Connected to:</div>
              <button
                style={{background: "white", fontWeight: "400", color: "rgb(3, 21, 57)", border: "4px solid rgb(236, 72, 153)", wordWrap: "break-word"}}
                  className="link"
                  type="button"
                  onClick={() => {
                      window.open(
                          `https://ccdscan.io/?dcount=1&dentity=account&daddress=${account}`,
                          '_blank',
                          'noopener,noreferrer'
                      );
                  }}
              >
                  {account}
              </button>
            </>
          )}
          {genesisHash && genesisHash !== network.genesisHash && (
              <p style={{ color: 'peach' }}>
                  Unexpected genesis hash: Please ensure that your wallet is connected to network{' '}
                  <code>{network.name}</code>.
              </p>
          )}
        </div>
        {account !== undefined && (
          <div className="container" style={{display: "flex", flexDirection: "column", paddingTop: "0em"}}>
            {/* <label> */}
                <p style={{ marginBottom: 0, padding: "0em 0em 0.5em 0em", color: "white", fontWeight: "900" }}>Select a file:</p>
                <input
                    className="input"
                    style={InputFieldStyle}
                    type="file"
                    onChange={changeHandler}
                    ref={file}
                />
            {/* </label> */}
            <div style={{paddingTop: "0.5em"}}>
            <button
              style={ButtonStyle}
              type="button"
              onClick={async () => {
                try {
                  if (selectedFile !== undefined) {
                    setFileHashHex('');
                    setLoading(true);
                    const arrayBuffer = await selectedFile.arrayBuffer();
                    const byteArray = new Uint8Array(arrayBuffer as ArrayBuffer);
                    const newFileHashHex = sha256(byteArray.toString());
                    setFileHashHex(newFileHashHex);
                    setLoadingError('');
                    setLoading(false);
                  } else {
                    // eslint-disable-next-line no-alert
                    alert('Choose a file to compute the file hash');
                  }
                } catch (err) {
                  setLoadingError((err as Error).message);
                }
            }}
            >
              Verify Certificate
            </button>
            </div>
            <div style={authority === '' ? Disabled : Enabled}>
              <p style={{ marginBottom: 0, color: "white", paddingTop: "2vh", paddingBottom: "1vh", fontWeight: "900" }}>File hash of selected certificate:</p>
              {loadingError && <div style={{ color: 'peach' }}>Error: {loadingError}.</div>}
              {isLoading && <div className="loadingText">Loading...</div>}
              {fileHashHex !== '' && <div className="loadingText" style={{wordWrap: "break-word", background: "white", color: "rgb(3, 21, 57)", border: "4px solid rgb(236, 72, 153)", padding: "0.4em", borderRadius: "8px", lineHeight: "1.3em"}}>0x{fileHashHex}</div>}
            </div>
          </div>
        )}
        {!connection && (
          <div className='container'>
            <button style={ButtonStyleDisabled} type="button" disabled>
                Waiting for connection...
            </button>
          </div>
        )}
        {connection && account && verifiedResult !== 'unverified' && (
            <p style={{lineHeight: "1.2"}}>
                {getFileError && <div style={{ color: 'peach' }}>Error: {getFileError}.</div>}
                {!false && witness !== '' && (
                    <div style={{color: "#7303fc", paddingTop: "0em"}} className="container">
                        <div style={{paddingBottom: "0.4em", paddingTop: "0em", color: "white", fontWeight: "900"}}>On-chain Record:</div>
                        <div className="loadingText" style={{padding: "0.4em", borderRadius: "8px", background: "white", color: "rgb(3, 21, 57)", border: "4px solid rgb(236, 72, 153)", wordWrap: "break-word"}}>{witness === null ? 'Not registered' : witness} (witness)</div>
                        <div className="loadingText" style={{paddingTop: "0.4em", lineHeight: "1.5", color: "white", fontWeight: "900"}}>
                            Timestamp: <br /><button style={{background: "white", fontWeight: "400", border: "4px solid rgb(236, 72, 153)", color: "rgb(3, 21, 57)", wordWrap: "break-word"}} >{timestamp === null ? 'Not registered' : timestamp}</button>
                        </div>
                        <div style={{marginTop: "0.5em", color: "white", fontWeight: "900"}}>
                            Certificate Issued To: <button style={{background: "white", fontWeight: "400", border: "4px solid rgb(236, 72, 153)", color: "rgb(3, 21, 57)", wordWrap: "break-word"}} type="button">{name === null ? 'No Name' : name}</button>
                        </div>
                        <div style={{marginTop: "0.5em", color: "white", fontWeight: "900"}}>
                            Issued By: <br /> <button style={{background: "white", fontWeight: "400", border: "4px solid rgb(236, 72, 153)", color: "rgb(3, 21, 57)", wordWrap: "break-word"}} type="button">{authority === null ? 'No Authority' : authority}</button>
                        </div>
                        <div style={{marginTop: "0.5em", color: "white", fontWeight: "900"}}>
                            Certificate Type: <br /> <button style={{background: "white", fontWeight: "400", border: "4px solid rgb(236, 72, 153)", color: "rgb(3, 21, 57)", wordWrap: "break-word"}} type="button">{certType === null ? 'No Certificate Type' : certType}</button>
                        </div>
                        <div style={{marginTop: "0.5em"}}>
                            {
                              <> <span style={{lineHeight: "1.5", color: "white", fontWeight: "900"}}>Transaction Hash:</span><br />
                                <button
                                  style={{background: "white", fontWeight: "400", border: "4px solid rgb(236, 72, 153)", color: "rgb(3, 21, 57)", wordWrap: "break-word"}}
                                    className="link"
                                    type="button"
                                    onClick={() => {
                                        window.open(
                                            `https://ccdscan.io/?dcount=1&dentity=transaction&dhash=${hash}`,
                                            '_blank',
                                            'noopener,noreferrer'
                                        );
                                    }}
                                >
                                    {hash}
                                </button>
                              </>
                            }
                        </div>
                        <div className="container" style={{marginTop: "0.5em", backgroundColor: "#8CFF9E", padding: "0.5em 0.5em", borderRadius: "8px", textAlign: "center", color: "rgb(3, 21, 57)"}}>
                            {hash === null ? '❌ Verification Failed' : '✅ Verified Record'}
                        </div>
                    </div>
                )}
            </p>
        )}
        {verifiedResult === 'unverified' && (
          <div className="container">
          <button style={{background: "#EE6668", borderRadius: "8px", textAlign: "center"}}>Verification Failed ❌</button>
          </div>
        )}
        </div>
      </div>
  )
}

