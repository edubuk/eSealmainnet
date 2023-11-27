import { createContext } from "react";
import { AccountTransactionType, CcdAmount, ContractAddress, Energy, ReceiveName } from "@concordium/web-sdk";
import { WalletConnection, moduleSchemaFromBase64, } from "@concordium/react-components";
import { E_SEALING_RAW_SCHEMA, E_SEALING_CONTRACT_NAME } from "./constants";

/**
 * Action for registering a new file has in the eSealing smart contract instance
 */

export type RecFile = {
  name: string,
  authority: string,
  cert_type: string,
  filehash: string,
}

export async function register(
  connection: WalletConnection,
  account: string,
  rec_file: RecFile,
  index: bigint,
  subindex: 0n,
  estEnergy: bigint,
) {
  return connection.signAndSendTransaction(
    account,
    AccountTransactionType.Update,
    {
      amount: CcdAmount.fromCcd(0),
      address: ContractAddress.create(index, subindex),
      receiveName: ReceiveName.fromString(`${E_SEALING_CONTRACT_NAME}.registerFile`),
      maxContractExecutionEnergy: Energy.create(estEnergy),
    },
    {
      parameters: rec_file,
      schema: moduleSchemaFromBase64(E_SEALING_RAW_SCHEMA),
    }
  );
}

export function parse_str(byteArrayStr: String) {
  const byteArray = new Uint8Array(byteArrayStr.split(',').map(Number));
  return String.fromCharCode.apply(null, [...byteArray]);
}

/**
 * Global Application state
 */

export type State = {
  isConnected: boolean,
  account: string | undefined,
};

export const state = createContext<State>({ isConnected: false, account: undefined });

export default async function toStr(byteArray: string): Promise<string> {
  const barr = byteArray.split(',');
  const filteredBarr = barr.filter((code) => code !== '0');
  const ascii = await Promise.all(filteredBarr.map((code) => String.fromCharCode(parseInt(code))));
  return ascii.join("");
}
