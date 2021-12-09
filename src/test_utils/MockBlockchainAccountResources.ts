import {
  BalanceResource,
  DiemAccountResource,
} from '../api_clients/BlockchainRestTypes'

export const xdxBalanceResource: BalanceResource = {
  type: '0x1::DiemAccount::Balance<0x1::XDX::XDX>',
  value: {
    coin: {
      value: '1234',
    },
  },
}
export const xusBalanceResource: BalanceResource = {
  type: '0x1::DiemAccount::Balance<0x1::XUS::XUS>',
  value: {
    coin: {
      value: '5678',
    },
  },
}
export const diemAccountResource: DiemAccountResource = {
  type: '0x1::DiemAccount::DiemAccount',
  value: {
    authentication_key:
      '0x16973acfaa51751234cdaffb3563b665bd3c1801820aa917993888b2fa8d8c0e',
    key_rotation_capability: {
      vec: [
        {
          account_address: '0xbd3c1801820aa917993888b2fa8d8c0e',
        },
      ],
    },
    received_events: {
      counter: '43254',
      guid: '0x0200000000000000bd3c1801820aa917993888b2fa8d8c0e',
    },
    sent_events: {
      counter: '8192',
      guid: '0x0300000000000000bd3c1801820aa917993888b2fa8d8c0e',
    },
    sequence_number: '89647663',
    withdraw_capability: {
      vec: [
        {
          account_address: '0xbd3c1801820aa917993888b2fa8d8c0e',
        },
      ],
    },
  },
}
