import React from 'react';
import { notification } from 'antd';
// import Link from '../components/Link';
import { CloseOutlined } from '@ant-design/icons';

export function notify({
  message = '',
  description = undefined as any,
  txid = '',
  type = 'info',
  placement = 'bottomLeft',
}) {
  if (txid) {
    //   <Link
    //     external
    //     to={'https://explorer.solana.com/tx/' + txid}
    //     style={{ color: '#0000ff' }}
    //   >
    //     View transaction {txid.slice(0, 8)}...{txid.slice(txid.length - 8)}
    //   </Link>

    description = <></>;
  }
  (notification as any)[type]({
    message: <span style={{ color: 'black' }}>{message}</span>,
    description: (
      <span style={{ color: 'black', opacity: 0.7 }}>{description}</span>
    ),
    placement,
    closable: true,
    closeIcon: <CloseOutlined />,
    style: {
      backgroundColor: 'white',
    },
  });
}

export function notifyerror({
  message = '',
  description = undefined as any,
  txid = '',
  type = 'warning',
  placement = 'bottomLeft',
}) {
  if (txid) {
    //   <Link
    //     external
    //     to={'https://explorer.solana.com/tx/' + txid}
    //     style={{ color: '#0000ff' }}
    //   >
    //     View transaction {txid.slice(0, 8)}...{txid.slice(txid.length - 8)}
    //   </Link>

    description = <></>;
  }
  (notification as any)[type]({
    message: <span style={{ color: 'black' }}>{message}</span>,
    description: (
      <span style={{ color: 'black', opacity: 0.7 }}>{description}</span>
    ),
    placement,
    closable: true,
    closeIcon: <CloseOutlined />,
    style: {
      backgroundColor: 'white',
    },
  });
}
