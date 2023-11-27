import React, { useCallback } from 'react';
import {
  ConnectorType,
  useWalletConnectorSelector,
  WalletConnection,
  WalletConnectionProps,
} from '@concordium/react-components';

function connectorTypeStyle(baseStyle: any, isSelected: boolean, isConnected: boolean) {
  const style = { ...baseStyle };

  if (isConnected) {
    style.backgroundColor = '#34d399';
    style.color = 'black';
  } else if (isSelected) {
    style.backgroundColor = '#0ea5e9';
    style.color = 'black';
  }

  return style;
}

interface Props extends WalletConnectionProps {
  buttonStyle: any;
  disabledButtonStyle: any;
  connectorType: ConnectorType;
  connectorName: string;
  setWaitingForUser: (v: boolean) => void;
  connection: WalletConnection | undefined;
}

export function WalletConnectionTypeButton(props: Props) {
  const {
    buttonStyle,
    disabledButtonStyle,
    connectorType,
    connectorName,
    setWaitingForUser,
    connection
  } = props;

  const { isSelected, isConnected, isDisabled, select } = useWalletConnectorSelector(
    connectorType,
    connection,
    props,
  );

  const onClick = useCallback(() => {
    setWaitingForUser(false);
    select();
  }, [select]);

  return (
    <button
      style={connectorTypeStyle(isDisabled ? disabledButtonStyle : buttonStyle, isSelected, isConnected)}
      disabled={isDisabled}
      type="button"
      onClick={onClick}
      className="p-4 mt-4"
    >
      {isConnected ? `Disconnect ${connectorName}` : `${connectorName}`}
    </button >
  );
}
