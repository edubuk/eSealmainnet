import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { AiOutlineFileText } from 'react-icons/ai';
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
} from '@concordium/react-components'
import {
  E_SEALING_CONTRACT_NAME,
  E_SEALING_CONTRACT_INDEX,
  E_SEALING_RAW_SCHEMA,
  CONTRACT_SUB_INDEX,
} from "../utils/constants";
import toStr from "../utils/utils";

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
    // return returnValues.Some[0];
    const vals = returnValues.Some[0];

    const name = await toStr(vals.name.toString());
    const authority = await toStr(vals.authority.toString());
    const cert_type = await toStr(vals.cert_type.toString());
    const filehash = vals.filehash.toString();
    const timestamp = vals.timestamp;
    const witness = vals.witness;

    return { name, authority, cert_type, filehash, timestamp, witness };
  }

  return { name: null, authority: null, cert_type: null, filehash: null, timestamp: null, witness: null };
}

export default function Verifier() {
  const grpcClient = useGrpcClient(MAINNET);

  const [isLoading, setLoading] = useState(false);

  const [getFileError, setGetFileError] = useState('');

  const [fileHashHex, setFileHashHex] = useState('');

  const [fileHashCon, setFileHashCon] = useState('');

  const [issuedTo, setIssuedTo] = useState('');

  const [issuedBy, setIssuedBy] = useState('');

  const [certType, setCertType] = useState('');

  const [selectedFile, setSelectedFile] = useState<File>();

  const [fname, setFname] = useState('');

  const [fext, setFext] = useState('');

  const [witness, setWitness] = useState('');

  const [timestamp, setTimestamp] = useState('');

  const file = useRef<HTMLInputElement | null>(null);

  // const [ans, setAns] = useState(0);

  useEffect(() => {
    if (grpcClient && fileHashHex !== '') {
      viewFile(grpcClient, fileHashHex)
        .then((record) => {
          setGetFileError('');
          if (record.name !== null && record.name !== '') {
            setIssuedTo(record.name);
          }
          if (record.authority !== null && record.authority !== '') {
            setIssuedBy(record.authority);
          }
          if (record.cert_type !== null && record.cert_type !== '') {
            setCertType(record.cert_type);
          }
          setFileHashCon(record.filehash);
          setTimestamp(record.timestamp);
          setWitness(record.witness);
          setLoading(false);
        })
        .catch((e) => {
          setGetFileError((e as Error).message);
          setIssuedTo('');
          setIssuedBy('');
          setCertType('');
          setFileHashCon('');
          setTimestamp('');
          setWitness('');
        });
    }
  }, [grpcClient, fileHashHex]);

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
          fname = fname.slice(0, 5) + "..." + fname.slice(-5,);
        }
        if (splitName.length < 2) {
        } else {
          fext = splitName[splitName.length - 1];
          if (fext.length < 10) {
            fext = "." + fext
          } else {
            fext = "." + fext.slice(0, 5) + "..." + fext.slice(-5, 0);
          }
        }
        setFname(fname);
        setFext(fext);
        setSelectedFile(file);
      } else { }
    }
  }

  return (
    <>
      <div className="subpixel-antialiased">
        <div className="mt-6">
          <form action="#">
            <div className="flex flex-col max-sm:mt-6 sm:mt-8 md:mt-10 lg:mt-12">
              <div className="max-sm:text-lg sm:text-xl md:text-2xl flex flex-row max-sm:flex-col text-emerald-400">
                Upload a file to verify:
                <p className="flex flex-row justify-between">
                  <AiOutlineFileText className="mx-2 mt-1 max-sm:mb-1 subpixel-antialiased text-white" />
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
                      : <button type="button" className="text-red-500 mx-2 mt-1 max-sm:mb-1" onClick={(e) => {
                        e.preventDefault();
                        setSelectedFile(undefined);
                        setIssuedTo('');
                        setIssuedBy('');
                        setCertType('');
                        setFileHashCon('');
                        setTimestamp('');
                        setWitness('');
                      }}>
                        <MdOutlineCancel />
                      </button>
                  }
                </p>
              </div>
              <input
                id="file"
                className="max-sm:text-lg sm:text-xl md:text-2xl w-full mt-2 focus:outline-none border border-transparent text-transparent rounded-xl cursor-pointer bg-transparent placeholder-black block file:rounded-xl file:border-transparent file:bg-blue-400 file:text-black file:w-full p-2"
                type="file"
                onChange={fileChangeHandler}
                ref={file}
                required
              />
            </div>
            <div className="flex flex-col">
              <button
                type="button"
                className="mt-6 bg-emerald-400 text-black rounded-xl p-2 max-sm:text-lg sm:text-xl md:text-2xl"
                onClick={async () => {
                  try {
                    if (selectedFile === undefined) {
                      alert('Please select a file to verify.');
                    } else {
                      setLoading(true);
                      setFileHashCon('');
                      setIssuedTo('');
                      setIssuedBy('');
                      setCertType('');
                      setWitness('');
                      setTimestamp('');
                      setFileHashHex('');
                      const arrayBuffer = await selectedFile.arrayBuffer();
                      const byteArray = new Uint8Array(arrayBuffer as ArrayBuffer);
                      const newFileHashHex = sha256(byteArray.toString());
                      setFileHashHex(newFileHashHex);
                    }
                  } catch {
                    alert('Something Went wrong! Please try refreshing the page, and try again.')
                  }
                }}
              >
                Verify Certificate
              </button>
            </div>
            <div className="mt-4 flex flex-col">
              {
                isLoading
                &&
                (
                  <div className="flex flex-col max-sm:text-lg sm:text-xl md:text-2xl my-6">
                    <span className="p-2 bg-blue-400 text-black rounded-xl text-center">
                      Loading...
                    </span>
                  </div>
                )
              }
              {
                getFileError
                &&
                (
                  <div className="flex flex-col max-sm:text-lg sm:text-xl md:text-2xl my-6">
                    <span className="p-2 bg-red-400 text-black rounded-xl">
                      Error: {getFileError}
                    </span>
                  </div>
                )
              }
              {

                selectedFile !== undefined
                && fileHashCon !== ''
                && issuedTo !== ''
                &&
                <div className="max-sm:text-lg sm:text-xl md:text-2xl mt-4">
                  <h1 className="font-extrabold bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white rounded-xl p-2 text-center max-sm:text-lg sm:text-xl md:text-2xl">
                    Record On Blockchain
                  </h1>
                  <div className="">
                    {
                      issuedTo === ''
                        ? ''
                        : witness !== null && (
                          <div className="text-emerald-400 flex flex-col mt-2">
                            <span>Certificate Issued To:</span>
                            <p className="cursor-default font-mono p-2 mt-2 text-white rounded-xl break-words bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-center">
                              {issuedTo}
                            </p>
                          </div>
                        )
                    }
                  </div>
                  <div className="">
                    {
                      issuedBy === ''
                        ? ''
                        : (
                          <div className="text-emerald-400 flex flex-col mt-2">
                            <span>Certificate Issued By:</span>
                            <p className="cursor-default font-mono p-2 mt-2 text-white rounded-xl break-words bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-center">
                              {issuedBy}
                            </p>
                          </div>
                        )
                    }
                  </div>
                  <div className="">
                    {
                      certType === ''
                        ? ''
                        : (
                          <div className="text-emerald-400 flex flex-col mt-2">
                            <span>Certificate Type:</span>
                            <p className="cursor-default font-mono p-2 mt-2 text-white rounded-xl break-words bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-center">
                              {certType}
                            </p>
                          </div>
                        )
                    }
                  </div>
                  <div className="">
                    {
                      fileHashCon === null
                        ? ''
                        : (
                          <div className="text-emerald-400 flex flex-col mt-2">
                            <span>File Hash on Blockchain:</span>
                            <p className="text-center cursor-default font-mono p-2 mt-2 text-white rounded-xl break-all bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
                              0x{fileHashCon}
                            </p>
                          </div>
                        )
                    }
                  </div>
                  <div className="">
                    {
                      witness === null
                        ? ''
                        : (
                          <div className="text-emerald-400 flex flex-col mt-2">
                            <span>Certificate Issuer Account:</span>
                            <p className="text-center cursor-default font-mono p-2 mt-2 text-white rounded-xl break-all bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
                              {witness}
                            </p>
                          </div>
                        )
                    }
                  </div>
                  <div className="">
                    {
                      timestamp === null
                        ? ''
                        : (
                          <div className="text-emerald-400 flex flex-col mt-2">
                            <span>Timestamp:</span>
                            <p className="text-center cursor-default font-mono p-2 mt-2 text-white break-words rounded-xl bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
                              {timestamp}
                            </p>
                          </div>
                        )
                    }
                  </div>
                  {
                    witness && timestamp &&
                    (
                      <div className="mt-6 flex flex-col max-sm:text-lg sm:text-xl md:text-2xl text-center">
                        <p className="cursor-default bg-emerald-400 break-words text-black rounded-xl p-2" onClick={(e) => { e.preventDefault(); }}>
                          Certificate Successfully Verified!
                        </p>
                        <button
                          type="button"
                          className="bg-emerald-400 text-black rounded-xl p-2 mt-4 break-words"
                          onClick={
                            (e) => {
                              e.preventDefault();
                              setSelectedFile(undefined);
                              setFileHashCon('');
                              setIssuedTo('');
                              setIssuedBy('');
                              setCertType('');
                              setWitness('');
                              setTimestamp('');
                              setFileHashHex('');
                            }
                          }
                        >
                          Click here to verify another certificate
                        </button>
                      </div>
                    )
                  }
                </div>
              }

              {
                witness === null &&
                (
                  <p className="max-sm:text-lg sm:text-xl md:text-2xl bg-red-400 text-black rounded-xl p-2 text-center break-words my-6">
                    Error! Certificate Not Verified!
                  </p>
                )
              }
            </div>
          </form>
        </div >
      </div >
    </>
  );
}


