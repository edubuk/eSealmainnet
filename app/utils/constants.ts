import { BrowserWalletConnector, ephemeralConnectorType, WalletConnectConnector } from "@concordium/react-components";
import { SignClientTypes } from '@walletconnect/types';

export const E_SEALING_CONTRACT_NAME = "eSealing";

export const E_SEALING_CONTRACT_INDEX = 9387n;

export const E_SEALING_RAW_SCHEMA = '//8DAQAAAAgAAABlU2VhbGluZwACAAAABwAAAGdldEZpbGUGHiAAAAAVAgAAAAQAAABOb25lAgQAAABTb21lAQEAAAAUAAYAAAAEAAAAbmFtZRQBAQAAABMyAAAAAgkAAABhdXRob3JpdHkUAQEAAAATMgAAAAIJAAAAY2VydF90eXBlFAEBAAAAEzIAAAACCAAAAGZpbGVoYXNoHiAAAAAJAAAAdGltZXN0YW1wDQcAAAB3aXRuZXNzCxUGAAAACwAAAFBhcnNlUGFyYW1zAgcAAABMb2dGdWxsAgwAAABMb2dNYWxmb3JtZWQCCwAAAE9ubHlBY2NvdW50AhEAAABBbHJlYWR5UmVnaXN0ZXJlZAIIAAAATm90Rm91bmQCDAAAAHJlZ2lzdGVyRmlsZQQUAAQAAAAEAAAAbmFtZRYCCQAAAGF1dGhvcml0eRYCCQAAAGNlcnRfdHlwZRYCCAAAAGZpbGVoYXNoHiAAAAAVBgAAAAsAAABQYXJzZVBhcmFtcwIHAAAATG9nRnVsbAIMAAAATG9nTWFsZm9ybWVkAgsAAABPbmx5QWNjb3VudAIRAAAAQWxyZWFkeVJlZ2lzdGVyZWQCCAAAAE5vdEZvdW5kAgEVAQAAAAwAAABSZWdpc3RyYXRpb24BAQAAABQABgAAAAQAAABuYW1lFAEBAAAAEzIAAAACCQAAAGF1dGhvcml0eRQBAQAAABMyAAAAAgkAAABjZXJ0X3R5cGUUAQEAAAATMgAAAAIJAAAAZmlsZV9oYXNoHiAAAAAHAAAAd2l0bmVzcwsJAAAAdGltZXN0YW1wDQ==';

export const CONTRACT_SUB_INDEX = 0n;

const WALLET_CONNECT_PROJECT_ID = '76324905a70fe5c388bab46d3e0564dc';

const WALLET_CONNECT_OPTS: SignClientTypes.Options = {
  projectId: WALLET_CONNECT_PROJECT_ID,
  metadata: {
    name: 'eSealing mainnet',
    description: 'eSealing',
    url: '#',
    icons: ['https://walletconnect.com/walletconnect-logo.png'],
  },
};

export const BROWSER_WALLET = ephemeralConnectorType(BrowserWalletConnector.create);

export const WALLET_CONNECT = ephemeralConnectorType(
  WalletConnectConnector.create.bind(undefined, WALLET_CONNECT_OPTS)
);

