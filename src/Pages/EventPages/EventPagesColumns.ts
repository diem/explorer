import { TransactionVersion } from '../../TableComponents/Link'
import { TruncatedCell } from '../../TableComponents/TruncatedCell'

export function mintEventsColumn() {
  return [
    {
      Header: 'Transaction Version',
      accessor: 'transaction_version',
      Cell: TransactionVersion,
    },
    {
      Header: 'Amount',
      accessor: 'amount'
    },
    {
      Header: 'Currency',
      accessor: 'currency'
    },
    {
      Header: 'Key',
      accessor: 'key',
      Cell: TruncatedCell
    },
    {
      Header: 'Receiver',
      accessor: 'receiver',
      Cell: TruncatedCell
    },
    {
      Header: 'Sequence Number',
      accessor: 'sequence_number'
    },
  ]
}

export function burnEventsColumn() {
  return [
    {
      Header: 'Transaction Version',
      accessor: 'transaction_version',
      Cell: TransactionVersion,
    },
    {
      Header: 'Amount',
      accessor: 'amount'
    },
    {
      Header: 'Currency',
      accessor: 'currency'
    },
    {
      Header: 'Key',
      accessor: 'key',
      Cell: TruncatedCell
    },
    {
      Header: 'Address',
      accessor: 'address',
      Cell: TruncatedCell
    },
    {
      Header: 'Sequence Number',
      accessor: 'sequence_number'
    },
  ]
}

export function paymentsEventsColumn() {
  return [
    { Header: 'Transaction Version', accessor: 'transaction_version', Cell: TransactionVersion },
    { Header: 'Amount', accessor: 'amount' },
    { Header: 'Currency', accessor: 'currency' },
    { Header: 'Key', accessor: 'key', Cell: TruncatedCell },
    { Header: 'Receiver', accessor: 'receiver', Cell: TruncatedCell },
    { Header: 'Sender', accessor: 'sender', Cell: TruncatedCell },
    { Header: 'Sequence Number', accessor: 'sequence_number' },
  ]
}

export function gasEventsColumn() {
  return [
    { Header: 'Transaction Version', accessor: 'version', Cell: TransactionVersion },
    { Header: 'Timestamp', accessor: 'commit_timestamp', Cell: TransactionVersion },
    { Header: 'Currency', accessor: 'currency' },
    { Header: 'Gas Paid', accessor: 'gas_paid' },
    { Header: 'Receiver', accessor: 'receiver', Cell: TruncatedCell },
    { Header: 'Sender', accessor: 'sender', Cell: TruncatedCell }
  ]
}
