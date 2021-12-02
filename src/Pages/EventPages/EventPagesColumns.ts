import { AccountAddress, TransactionVersion } from '../../TableComponents/Link'
import { TruncatedCell } from '../../TableComponents/TruncatedCell'
import { BooleanCell } from '../../TableComponents/BooleanCell'

export function mintEventsColumn() {
  return [
    {
      Header: 'Transaction Version',
      accessor: 'transaction_version',
      Cell: TransactionVersion,
    },
    {
      Header: 'Amount',
      accessor: 'amount',
    },
    {
      Header: 'Currency',
      accessor: 'currency',
    },
    {
      Header: 'Key',
      accessor: 'key',
      Cell: TruncatedCell,
    },
    {
      Header: 'Receiver',
      accessor: 'receiver',
      Cell: AccountAddress,
    },
    {
      Header: 'Sequence Number',
      accessor: 'sequence_number',
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
      accessor: 'amount',
    },
    {
      Header: 'Currency',
      accessor: 'currency',
    },
    {
      Header: 'Key',
      accessor: 'key',
      Cell: TruncatedCell,
    },
    {
      Header: 'Address',
      accessor: 'address',
      Cell: AccountAddress,
    },
    {
      Header: 'Sequence Number',
      accessor: 'sequence_number',
    },
  ]
}

export function paymentsEventsColumn() {
  return [
    {
      Header: 'Transaction Version',
      accessor: 'transaction_version',
      Cell: TransactionVersion,
    },
    { Header: 'Amount', accessor: 'amount' },
    { Header: 'Currency', accessor: 'currency' },
    { Header: 'Key', accessor: 'key', Cell: TruncatedCell },
    { Header: 'Receiver', accessor: 'receiver', Cell: AccountAddress },
    { Header: 'Sender', accessor: 'sender', Cell: AccountAddress },
    { Header: 'Sequence Number', accessor: 'sequence_number' },
  ]
}

export function gasEventsColumn() {
  return [
    {
      Header: 'Transaction Version',
      accessor: 'version',
      Cell: TransactionVersion,
    },
    {
      Header: 'Timestamp',
      accessor: 'commit_timestamp',
      Cell: TransactionVersion,
    },
    { Header: 'Currency', accessor: 'currency' },
    { Header: 'Gas Paid', accessor: 'gas_paid' },
    { Header: 'Receiver', accessor: 'receiver', Cell: AccountAddress },
    { Header: 'Sender', accessor: 'sender', Cell: AccountAddress },
  ]
}

export function preburnEventsColumn() {
  return [
    {
      Header: 'Transaction Version',
      accessor: 'transaction_version',
      Cell: TransactionVersion,
    },
    {
      Header: 'Timestamp',
      accessor: 'commit_timestamp',
      Cell: TransactionVersion,
    },
    { Header: 'Address', accessor: 'address', Cell: AccountAddress },
    { Header: 'Amount', accessor: 'amount' },
    { Header: 'Currency', accessor: 'currency' },
  ]
}

export function accountcreationEventsColumn() {
  return [
    {
      Header: 'Transaction Version',
      accessor: 'transaction_version',
      Cell: TransactionVersion,
    },
    {
      Header: 'Sent Events Key',
      accessor: 'sent_events_key',
      Cell: TruncatedCell,
    },
    { Header: 'Role', accessor: 'role' },
    {
      Header: 'Received Mint Events Key',
      accessor: 'received_mint_events_key',
      Cell: TruncatedCell,
    },
    {
      Header: 'Received Events Key',
      accessor: 'received_events_key',
      Cell: TruncatedCell,
    },
    {
      Header: 'Parent VASP Address',
      accessor: 'parent_vasp_address',
      Cell: AccountAddress,
    },
    { Header: 'Is Frozen', accessor: 'is_frozen', Cell: BooleanCell },
    { Header: 'Indexed At', accessor: 'indexed_at' },
    {
      Header: 'Diem Id Domain Events Key',
      accessor: 'diem_id_domain_events_key',
    },
    { Header: 'Expiration Time', accessor: 'expiration_time' },
    {
      Header: 'Delegated Withdrawal Capability',
      accessor: 'delegated_withdrawal_capability',
      Cell: BooleanCell,
    },
    {
      Header: 'Delegated Key Rotation Capability',
      accessor: 'delegated_key_rotation_capability',
      Cell: BooleanCell,
    },
    {
      Header: 'Create Account Event Stream Sequence Number',
      accessor: 'create_account_event_stream_sequence_number',
    },
    { Header: 'Compliance Key', accessor: 'compliance_key' },
    { Header: 'Address', accessor: 'address', Cell: AccountAddress },
    { Header: 'Base Url', accessor: 'base_url' },
    {
      Header: 'Base Url Rotation Events Key',
      accessor: 'base_url_rotation_events_key',
      Cell: TruncatedCell,
    },
    {
      Header: 'Authentication Key',
      accessor: 'authentication_key',
      Cell: TruncatedCell,
    },
    { Header: 'Human Name', accessor: 'human_name' },
    {
      Header: 'Compliance Key Rotation Events Key',
      accessor: 'compliance_key_rotation_events_key',
      Cell: TruncatedCell,
    },
  ]
}
