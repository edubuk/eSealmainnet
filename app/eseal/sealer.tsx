import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { AiFillInfoCircle, AiOutlineFileText, AiOutlineInfoCircle } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';
import {
  toBuffer,
  deserializeReceiveReturnValue,
  serializeUpdateContractParameters,
  ConcordiumGRPCClient,
  ContractName,
  EntrypointName,
  ReceiveName,
  ContractAddress,
  ReturnValue,
} from '@concordium/web-sdk';
import sha256 from 'sha256';
import {
  useGrpcClient,
  MAINNET,
  WalletConnectionProps,
  useConnection,
  useConnect,
} from '@concordium/react-components'
import { RecFile, register } from "../utils/utils";
import {
  E_SEALING_CONTRACT_NAME,
  E_SEALING_CONTRACT_INDEX,
  E_SEALING_RAW_SCHEMA,
  CONTRACT_SUB_INDEX,
  BROWSER_WALLET,
  WALLET_CONNECT,
} from "../utils/constants";
import { WalletConnectionTypeButton } from "../wallet/wallet";

const ButtonStyle = {
  color: "white",
  borderRadius: "12px",
  backgroundColor: "#1d4ed8",
  cursor: "pointer",
};

const ButtonStyleDisabled = {
  color: "#52525b",
  borderRadius: "12px",
  backgroundColor: "#18181b",
  cursor: "not-allowed",
  display: "none",
};

const Enabled = {};

const Disabled = {
  display: "none",
};

async function viewFile(rpcClient: ConcordiumGRPCClient, fileHashHex: string) {
  const param = serializeUpdateContractParameters(
    ContractName.fromString(E_SEALING_CONTRACT_NAME),
    EntrypointName.fromString('getFile'),
    fileHashHex,
    toBuffer(E_SEALING_RAW_SCHEMA, 'base64')
  );

  const res = await rpcClient.invokeContract({
    method: ReceiveName.fromString(`${E_SEALING_CONTRACT_NAME}.getFile`),
    contract: ContractAddress.create(E_SEALING_CONTRACT_INDEX, CONTRACT_SUB_INDEX),
    parameter: param,
  });

  if (!res || res.tag === 'failure' || !res.returnValue) {
    throw new Error(
      `RPC Call 'invokeContract' on method '${E_SEALING_CONTRACT_NAME}.view' of contract '${E_SEALING_CONTRACT_NAME}' failed`
    );
  }

  const returnValues = deserializeReceiveReturnValue(
    ReturnValue.toBuffer(res.returnValue),
    toBuffer(E_SEALING_RAW_SCHEMA, 'base64'),
    ContractName.fromString(E_SEALING_CONTRACT_NAME),
    EntrypointName.fromString('getFile'),
    2
  );

  if (returnValues.Some !== undefined) {
    return returnValues.Some[0];
  }

  return { filehash: null, timestamp: null, witness: null };
}

async function estimateEnergy(rpcClient: ConcordiumGRPCClient, rec_file: RecFile) {
  const param = serializeUpdateContractParameters(
    ContractName.fromString(E_SEALING_CONTRACT_NAME),
    EntrypointName.fromString('registerFile'),
    rec_file,
    toBuffer(E_SEALING_RAW_SCHEMA, 'base64'),
  );

  const res = await rpcClient.invokeContract({
    method: ReceiveName.fromString(`${E_SEALING_CONTRACT_NAME}.registerFile`),
    contract: ContractAddress.create(E_SEALING_CONTRACT_INDEX, CONTRACT_SUB_INDEX),
    parameter: param,
  });

  if (!res || res.tag === 'failure' || !res.returnValue) {
    throw new Error(
      `RPC Call 'invokeContract' on method '${E_SEALING_CONTRACT_NAME}.registerFile' of contract '${E_SEALING_CONTRACT_NAME}' failed`
    );
  }

  return res.usedEnergy.value;
}

export default function Sealer(props: WalletConnectionProps) {
  const {
    network,
    activeConnectorType,
    activeConnector,
    activeConnectorError,
    connectedAccounts,
    genesisHashes
  } = props;

  const {
    connection,
    setConnection,
    account,
    genesisHash
  } = useConnection(connectedAccounts, genesisHashes);

  const {
    connect,
    isConnecting,
    connectError
  } = useConnect(activeConnector, setConnection);

  const [connWarn, setConnWarn] = useState(false);
  const [nameWarn, setNameWarn] = useState(false);
  const [authWarn, setAuthWarn] = useState(false);
  const [ctypeWarn, setCtypeWarn] = useState(false);
  const [formWarn, setFormWarn] = useState(false);

  const grpcClient = useGrpcClient(MAINNET);

  const [isLoading, setLoading] = useState(false);

  const [getFileError, setGetFileError] = useState('');

  const [fileHashHex, setFileHashHex] = useState('');

  const [hash, setHash] = useState('');

  const [transactionError, setTransactionError] = useState('');

  const [loadingError, setLoadingError] = useState('');

  const [isWaitingForTransaction, setWaitingForUser] = useState(false);

  const [issuedTo, setIssuedTo] = useState('');

  const [fileHashCon, setFileHashCon] = useState('');

  const [issuedBy, setIssuedBy] = useState('');

  const [certType, setCertType] = useState('');

  const [selectedFile, setSelectedFile] = useState<File>();

  const [fname, setFname] = useState('');

  const [fext, setFext] = useState('');

  const [witness, setWitness] = useState('');

  const [timestamp, setTimestamp] = useState('');

  const file = useRef<HTMLInputElement | null>(null);

  const name = useRef<HTMLInputElement | null>(null);

  const authority = useRef<HTMLInputElement | null>(null);

  const cert_type = useRef<HTMLInputElement | null>(null);

  const issuedToChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value.trim();
    setIssuedTo(name);
    setNameWarn(false);
    setFormWarn(false);
  }

  const issuedByChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const authority = event.target.value.trim();
    setIssuedBy(authority);
    setAuthWarn(false);
    setFormWarn(false);
  }

  const certTypeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cert_type = event.target.value.trim();
    setCertType(cert_type);
    setCtypeWarn(false);
    setFormWarn(false);
  }

  useEffect(() => {
    if (grpcClient && fileHashHex !== '') {
      viewFile(grpcClient, fileHashHex)
        .then((record) => {
          setGetFileError('');
          setFileHashCon(record.filehash);
          setTimestamp(record.timestamp);
          setWitness(record.witness);
        })
        .catch((e) => {
          setGetFileError((e as Error).message);
          setTimestamp('');
          setWitness('');
        });
    }
  }, [grpcClient, fileHashHex]);

  useEffect(() => { }, [grpcClient]);

  const fileChangeHandler = (event: ChangeEvent) => {
    const test = event.target as HTMLInputElement;
    if (test.files) {
      if (test.files.length !== 0) {
        const file = test.files[0];
        const fnameorig = file.name;
        const splitName = fnameorig.split('.');
        var fname = splitName[0];
        var fext = "";
        if (fname.length < 10) {
          fname = fname
        } else {
          fname = fname.slice(0, 3) + "..." + fname.slice(-3,);
        }
        if (splitName.length < 2) {
        } else {
          fext = splitName[splitName.length - 1];
          if (fext.length < 10) {
            fext = "." + fext
          } else {
            fext = "." + fext.slice(0, 3) + "..." + fext.slice(-3, 0);
          }
        }
        setFname(fname);
        setFext(fext);
        setSelectedFile(file);
        setFormWarn(false);
      } else { }
    }
  }

  return (
    <>
      <div className="subpixel-antialiased">
        <div className="flex flex-col max-sm:text-lg sm:text-xl md:text-2xl">
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
            connectorName="Mobile Wallet"
            setWaitingForUser={setWaitingForUser}
            connection={connection}
            {...props}
          />
        </div>

        <div>
          {
            !activeConnectorError
            && !isWaitingForTransaction
            && activeConnectorType
            && !activeConnector
            && (
              <p>
                <i>Loading connector...</i>
              </p>
            )
          }
          {
            activeConnectorError
            && <p className="text-black bg-red-500 p-2 mt-4 mb-4 rounded-xl">
              Connector Error: {activeConnectorError}.
            </p>
          }
          {
            !activeConnectorError
            && !isWaitingForTransaction
            && activeConnectorType
            && activeConnector
            && (
              <p style={
                account === undefined
                  ? Enabled
                  : Disabled
              }>
                <button
                  className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white mt-4 rounded-xl w-full py-2 max-sm:text-lg sm:text-xl md:text-2xl"
                  type="button"
                  onClick={connect}
                >
                  {
                    !isConnecting && activeConnectorType === BROWSER_WALLET && 'Connect Browser Wallet'
                  }
                  {
                    !isConnecting && activeConnectorType === WALLET_CONNECT && 'Connect Mobile Wallet'
                  }
                </button>
              </p>
            )
          }
          {
            genesisHash && genesisHash !== network.genesisHash && (
              <p>
                Unexpected genesis hash: Please ensure that your wallet is connected to network{' '}
                <code>
                  {network.name}
                </code>
              </p>
            )
          }
        </div>

        <div className="mt-6 flex flex-col">
          {
            account === undefined
              ? <p className="max-sm:text-lg sm:text-xl md:text-2xl pb-2 text-blue-400">Connected To:</p>
              : <p className="max-sm:text-lg sm:text-xl md:text-2xl pb-2 text-emerald-400">Connected To:</p>

          }
          {
            connWarn === false
              ?
              (
                <button
                  type="button"
                  style={
                    account === undefined
                      ? Enabled
                      : Disabled
                  }
                  className="bg-blue-400 text-black w-full rounded-xl break-words p-2 flex flex-row justify-left text-left"
                >
                  <AiOutlineInfoCircle className="mr-2 mt-1 text-xl font-bold subpixel-antialiased" />
                  <p className="max-sm:text-lg sm:text-xl md:text-2xl">
                    Please Connect to your{' '}
                    <span className="font-extrabold max-sm:text-lg sm:text-xl md:text-2xl">
                      Concordium
                    </span>
                    {' '}wallet
                  </p>
                </button>
              )
              :
              (
                <button
                  type="button"
                  style={
                    account === undefined
                      ? Enabled
                      : Disabled
                  }
                  className="bg-red-400 text-black w-full rounded-xl break-words p-2 flex flex-row justify-left text-left"
                >
                  <AiOutlineInfoCircle className="mr-2 text-2xl font-bold subpixel-antialiased" />
                  <p>
                    Please Connect to your{' '}
                    <span className="font-extrabold">
                      Concordium
                    </span>
                    {' '}wallet
                  </p>
                </button>
              )
          }
          <button
            type="button"
            style={
              account !== undefined
                ? Enabled
                : Disabled
            }
            className="bg-emerald-400 font-mono text-black w-full rounded-xl break-all p-2 max-sm:text-lg sm:text-xl md:text-2xl"
            onClick={
              () => {
                window.open(
                  `https://www.ccdscan.io/?dcount=1&dentity=account&daddress=${account}`,
                  '_blank',
                  'noopener,noreferrer',
                );
              }
            }
          >
            {account}
          </button>
        </div>

        <div className="mt-6">
          <form action="#">
            <div className="flex flex-col">
              <label htmlFor="name" className="max-sm:text-lg sm:text-xl md:text-2xl text-emerald-400">
                Certificate issued to:
              </label>
              {
                nameWarn === false
                  ? (
                    <input
                      id="name"
                      autoComplete="off"
                      className="input mt-2 max-sm:text-lg sm:text-xl md:text-2xl border-b border-zinc-700 bg-transparent caret-blue-400 placeholder:font-normal focus:outline-none text-white placeholder-zinc-600 focus:border-blue-400 focus:placeholder-blue-400 focus:placeholder-opacity-80 px-2 pb-2"
                      type="text"
                      placeholder="Name"
                      onChange={issuedToChangeHandler}
                      ref={name}
                      minLength={1}
                      maxLength={40}
                      required
                    />
                  )
                  :
                  (
                    <input
                      id="name"
                      autoComplete="off"
                      className="input mt-2 max-sm:text-lg sm:text-xl md:text-2xl border-b border-red-400 bg-transparent caret-blue-400 placeholder:font-normal focus:outline-none text-white placeholder-red-400 focus:border-blue-400 focus:placeholder-blue-400 focus:placeholder-opacity-80 px-2 pb-2"
                      type="text"
                      placeholder="Name"
                      onChange={issuedToChangeHandler}
                      ref={name}
                      minLength={1}
                      maxLength={40}
                      required
                    />
                  )
              }
            </div>
            <div className="flex flex-col pt-6">
              <label htmlFor="authority" className="max-sm:text-lg sm:text-xl md:text-2xl text-emerald-400">
                Certificate issued by:
              </label>
              {
                authWarn === false
                  ?
                  (
                    <input
                      id="authority"
                      autoComplete="off"
                      className="input mt-2 max-sm:text-lg sm:text-xl md:text-2xl border-b border-zinc-700 bg-transparent caret-blue-400 placeholder:font-normal focus:outline-none text-white placeholder-zinc-600 focus:border-blue-400 focus:placeholder-blue-400 focus:placeholder-opacity-80 px-2 pb-2"
                      type="text"
                      placeholder="Certifying authority"
                      onChange={issuedByChangeHandler}
                      ref={authority}
                      minLength={1}
                      maxLength={40}
                      required
                    />
                  )
                  :
                  (
                    <input
                      id="authority"
                      autoComplete="off"
                      className="input mt-2 max-sm:text-lg sm:text-xl md:text-2xl border-b border-red-400 bg-transparent caret-blue-400 placeholder:font-normal focus:outline-none text-white placeholder-red-400 focus:border-blue-400 focus:placeholder-blue-400 focus:placeholder-opacity-80 px-2 pb-2"
                      type="text"
                      placeholder="Certifying authority"
                      onChange={issuedByChangeHandler}
                      ref={authority}
                      minLength={1}
                      maxLength={40}
                      required
                    />
                  )
              }
            </div>
            <div className="flex flex-col pt-6">
              <label htmlFor="certtype" className="max-sm:text-lg sm:text-xl md:text-2xl text-emerald-400">
                Certificate type:
              </label>
              {
                ctypeWarn === false
                  ?
                  (
                    < input
                      id="certtype"
                      autoComplete="off"
                      className="input mt-2 max-sm:text-lg sm:text-xl md:text-2xl border-b border-zinc-700 bg-transparent caret-blue-400 placeholder:font-normal focus:outline-none text-white placeholder-zinc-600 focus:border-blue-400 focus:placeholder-blue-400 focus:placeholder-opacity-80 px-2 pb-2"
                      type="text"
                      placeholder="Certificate type"
                      onChange={certTypeChangeHandler}
                      ref={cert_type}
                      minLength={1}
                      maxLength={40}
                      required
                    />
                  )
                  :
                  (
                    < input
                      id="certtype"
                      autoComplete="off"
                      className="input mt-2 max-sm:text-lg sm:text-xl md:text-2xl border-b border-red-400 bg-transparent caret-blue-400 placeholder:font-normal focus:outline-none text-white placeholder-red-400 focus:border-blue-400 focus:placeholder-blue-400 focus:placeholder-opacity-80 px-2 pb-2"
                      type="text"
                      placeholder="Certificate type"
                      onChange={certTypeChangeHandler}
                      ref={cert_type}
                      minLength={1}
                      maxLength={40}
                      required
                    />
                  )
              }
            </div>
            <div className="flex flex-col pt-6">
              <label htmlFor="file" className="max-sm:text-lg sm:text-xl md:text-2xl flex flex-row text-emerald-400">
                Upload file:
                <AiOutlineFileText className="mx-2 mt-1 subpixel-antialiased text-white" />
                <span className="font-normal text-white">
                  {
                    selectedFile === undefined
                      ? ""
                      : `${fname}${fext}`
                  }
                </span>
                {
                  selectedFile === undefined
                    ? <button></button>
                    : <button type="button" className="text-red-500 mx-2 mt-1" onClick={(e) => {
                      e.preventDefault();
                      setSelectedFile(undefined);
                      setFormWarn(true);
                      setFileHashHex('');
                    }}><MdOutlineCancel /></button>
                }
              </label>
              {
                formWarn === false &&
                <input
                  id="file"
                  className="max-sm:text-lg sm:text-xl md:text-2xl w-full mt-2 focus:outline-none border border-transparent text-transparent rounded-xl cursor-pointer bg-transparent placeholder-black block file:rounded-xl file:border-transparent file:bg-blue-400 file:text-black file:w-full p-2"
                  type="file"
                  onChange={fileChangeHandler}
                  ref={file}
                  required
                />
              }
              {
                formWarn === true &&
                <input
                  id="file"
                  className="max-sm:text-lg sm:text-xl md:text-2xl w-full mt-2 focus:outline-none border border-transparent text-transparent rounded-xl cursor-pointer bg-transparent placeholder-black block file:rounded-xl file:border-transparent file:bg-red-400 file:text-black file:w-full p-2"
                  type="file"
                  onChange={fileChangeHandler}
                  ref={file}
                  required
                />
              }
            </div>
            <div className="flex flex-col">
              <button
                type="button"
                className="mt-6 bg-emerald-400 text-black rounded-xl p-2 max-sm:text-lg sm:text-xl md:text-2xl"
                onClick={async () => {
                  try {
                    if (account !== undefined) {
                      if (issuedTo === '') {
                        setNameWarn(true);
                      }

                      if (issuedBy === '') {
                        setAuthWarn(true);
                      }

                      if (certType === '') {
                        setCtypeWarn(true);
                      }

                      if (selectedFile === undefined) {
                        setFormWarn(true);
                      }

                      if (nameWarn === true || authWarn === true || ctypeWarn === true) {
                        setFormWarn(true);
                      }

                      if (nameWarn === false && authWarn === false && ctypeWarn === false && selectedFile !== undefined) {
                        setFileHashHex('');
                        setLoading(true);
                        const arrayBuffer = await selectedFile.arrayBuffer();
                        const byteArray = new Uint8Array(arrayBuffer as ArrayBuffer);
                        const newFileHashHex = sha256(byteArray.toString());
                        setFileHashHex(newFileHashHex);
                        setLoadingError('');
                        setLoading(false);
                        setHash('');
                      }
                    } else {
                      setConnWarn(true);
                    }
                  } catch {
                    setLoadingError("Please make sure that your wallet is connected with the dApp & you have filled out the form and choose a certificate file to eSeal.");
                  }
                }}
              >
                Compute File Hash
              </button>
              <div className="mt-4 max-sm:text-lg sm:text-xl md:text-2xl text-emerald-400">
                <p>
                  File hash of selected file:
                </p>
                <p>
                  {
                    connWarn === false
                      ? ''
                      :
                      (
                        <button
                          type="button"
                          style={
                            account === undefined
                              ? Enabled
                              : Disabled
                          }
                          className="bg-red-400 text-black mt-4 w-full rounded-xl break-words p-2 flex flex-row justify-left text-left transform ease-in-out transition-colors delay-100"
                        >
                          <AiOutlineInfoCircle className="mr-2 text-2xl font-bold subpixel-antialiased mt-1" />
                          <p className="max-sm:text-lg sm:xl md:text-2xl">
                            Please Connect to your{' '}
                            <span className="font-extrabold">
                              Concordium
                            </span>
                            {' '}wallet
                          </p>
                        </button>
                      )
                  }
                </p>
                {loadingError && <div className="bg-red-400 text-black p-2 mt-4 rounded-xl">Error: {loadingError}</div>}
                {isLoading && <div className="bg-blue-400 text-black rounded-xl mt-4 p-2">Loading...</div>}
                {
                  connWarn === true && account === undefined
                    ? ''
                    :
                    (
                      formWarn === false
                        ? (
                          fileHashHex === ''
                          &&
                          <div className="p-2 bg-blue-400 break-words text-black mt-4 rounded-xl text-center">
                            Fillout the form and select a file
                          </div>
                        )
                        :
                        (
                          <div className="p-2 bg-red-400 break-words text-black mt-4 rounded-xl text-center">
                            Fillout the form and select a file
                          </div>
                        )
                    )
                }
                {
                  connection
                  && fileHashHex !== ''
                  && formWarn !== true &&
                  < div className="p-4 font-mono bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white mt-4 rounded-xl break-all max-sm:text-lg sm:text-xl md:text-2xl">
                    0x{fileHashHex}
                  </div>
                }
              </div>
            </div>
            <div className="mt-4 flex flex-col">
              {
                connection
                && account
                && (hash === '')
                &&
                (
                  <div className="mt-4 flex flex-col max-sm:text-lg sm:text-xl md:text-2xl">
                    <button
                      type="button"
                      className="bg-emerald-400 text-black p-2 rounded-xl"
                      onClick={
                        async () => {
                          if (witness !== null && timestamp !== null) {
                            <p className="text-black bg-red-400 p-2 rounded-xl break-words text-center">`This file hash is already registered \n${witness} \n${timestamp}`</p>
                          } else {
                            setHash('');
                            setTransactionError('');
                            setWaitingForUser(true);

                            const rec_file: RecFile = {
                              name: issuedTo,
                              authority: issuedBy,
                              cert_type: certType,
                              filehash: fileHashHex,
                            };

                            var estEnergy = undefined;

                            if (grpcClient) {
                              estEnergy = await estimateEnergy(grpcClient, rec_file);
                            }

                            if (estEnergy !== undefined) {
                              const tx = (true ? register : register)(
                                connection,
                                account,
                                rec_file,
                                E_SEALING_CONTRACT_INDEX,
                                CONTRACT_SUB_INDEX,
                                estEnergy,
                              );

                              tx.then(setHash)
                                .catch((err) => setTransactionError((err as Error).message))
                                .finally(() => setWaitingForUser(false));
                            }
                          }
                        }
                      }
                    >
                      Register File Hash
                    </button>
                  </div>
                )
              }
              {
                connection
                && account
                &&
                (
                  <div>
                    {
                      true
                      &&
                      (
                        <>
                          <div className="mt-4 flex max-sm:flex-col sm:flex-row justify-between max-sm:text-lg sm:text-xl md:text-2xl text-emerald-400">
                            Transaction status:
                          </div>

                          {
                            !hash
                            && transactionError
                            &&
                            (
                              <div className="text-black bg-red-400 p-2 rounded-xl text-center">
                                Error: {transactionError}.
                              </div>
                            )
                          }
                          {
                            hash
                            &&
                            (
                              <div className="flex flex-col mt-4">
                                <button
                                  className="link bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 p-2 rounded-xl break-all max-sm:text-lg sm:text-xl md:text-2xl"
                                  type="button"
                                  onClick={
                                    () => {
                                      window.open(
                                        `https://www.ccdscan.io/?dcount=1&dentity=transaction&dhash=${hash}`,
                                        '_blank',
                                        'noopener,noreferrer'
                                      );
                                    }
                                  }
                                >
                                  0x{hash}
                                </button>
                                <div className="mt-4 flex flex-col max-sm:text-lg sm:text-xl md:text-2xl break-words">
                                  <p className="bg-emerald-400 text-black p-2 rounded-xl text-center">
                                    The file &quot;{fname + fext}&quot; is successfully registered!
                                  </p>
                                  {
                                    name
                                    && authority
                                    && cert_type
                                    &&
                                    (
                                      <button
                                        type="button"
                                        className="bg-emerald-400 text-black break-words p-2 mt-4 rounded-xl max-sm:text-lg sm:text-xl md:text-2xl"
                                        onClick={() => {
                                          if (name.current !== null) {
                                            name.current.value = '';
                                          }
                                          if (authority.current !== null) {
                                            authority.current.value = '';
                                          }
                                          if (cert_type.current !== null) {
                                            cert_type.current.value = '';
                                          }
                                          setIssuedTo('');
                                          setIssuedBy('');
                                          setCertType('');
                                          setSelectedFile(undefined);
                                          setFileHashHex('');
                                          setFormWarn(false);
                                          setHash('');
                                        }}
                                      >
                                        Click here to register a new certificate
                                      </button>
                                    )
                                  }
                                </div>
                              </div>
                            )
                          }
                        </>
                      )
                    }
                    {
                      getFileError
                      &&
                      (
                        <div className="text-black bg-red-400 rounded-xl p-2 text-center">
                          Error: {getFileError}.
                        </div>
                      )
                    }
                  </div>
                )
              }
            </div>
          </form>
        </div >
      </div >
    </>
  );
}


