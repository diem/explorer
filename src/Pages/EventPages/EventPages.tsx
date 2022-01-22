// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react'
import EventPage from './EventPage'
import {
  AccountcreationEvent,
  accountcreationEventsQuery,
  BurnEvent,
  burnEventsQuery,
  GasEvent,
  gasEventsQuery,
  MintEvent,
  mintEventsQuery,
  PaymentEvent,
  paymentEventsQuery,
  PreburnEvent,
  preburnEventsQuery,
} from '../../api_clients/AnalyticsQueries'
import { AccountAddress, TransactionVersion } from '../../TableComponents/Link'
import { TruncatedCell } from '../../TableComponents/TruncatedCell'
import { BooleanCell } from '../../TableComponents/BooleanCell'

function column<C>(
  header: string,
  accessor: keyof C,
  cell?: React.FC<{ value: C[typeof accessor] }>
) {
  if (cell === undefined) {
    return {
      Header: header,
      accessor,
    }
  } else {
    return {
      Header: header,
      accessor,
      Cell: cell,
    }
  }
}

const MintEventsPageProps = {
  query: mintEventsQuery(),
  columns: [
    column<MintEvent>(
      'Transaction Version',
      'transaction_version',
      TransactionVersion
    ),
    column<MintEvent>('Amount', 'amount'),
    column<MintEvent>('Currency', 'currency'),
    column<MintEvent>('Key', 'key', TruncatedCell),
    column<MintEvent>('Receiver', 'receiver', AccountAddress),
    column<MintEvent>('Sequence Number', 'sequence_number'),
  ],
  tableName: 'receivedmint_events',
  eventType: 'Mint',
}

const BurnEventsPageProps = {
  query: burnEventsQuery(),
  columns: [
    column<BurnEvent>(
      'Transaction Version',
      'transaction_version',
      TransactionVersion
    ),
    column<BurnEvent>('Amount', 'amount'),
    column<BurnEvent>('Currency', 'currency'),
    column<BurnEvent>('Key', 'key', TruncatedCell),
    column<BurnEvent>('Address', 'address', AccountAddress),
    column<BurnEvent>('Sequence Number', 'sequence_number'),
  ],
  tableName: 'burn_events',
  eventType: 'Burn',
}

const PaymentEventsPageProps = {
  query: paymentEventsQuery(),
  columns: [
    column<PaymentEvent>(
      'Transaction Version',
      'transaction_version',
      TransactionVersion
    ),
    column<PaymentEvent>('Amount', 'amount'),
    column<PaymentEvent>('Currency', 'currency'),
    column<PaymentEvent>('Key', 'key', TruncatedCell),
    column<PaymentEvent>('Receiver', 'receiver', AccountAddress),
    column<PaymentEvent>('Sender', 'sender', AccountAddress),
    column<PaymentEvent>('Sequence Number', 'sequence_number'),
  ],
  tableName: 'sentpayment_events',
  eventType: 'Payment',
}

const GasEventsPageProps = {
  query: gasEventsQuery(),
  columns: [
    column<GasEvent>('Transaction Version', 'version', TransactionVersion),
    column<GasEvent>('Timestamp', 'commit_timestamp'),
    column<GasEvent>('Currency', 'currency'),
    column<GasEvent>('Gas Paid', 'gas_paid'),
    column<GasEvent>('Receiver', 'receiver', AccountAddress),
    column<GasEvent>('Sender', 'sender', AccountAddress),
  ],
  tableName: 'gas_payments',
  eventType: 'Gas',
}

const PreburnEventsPageProps = {
  query: preburnEventsQuery(),
  columns: [
    column<PreburnEvent>(
      'Transaction Version',
      'transaction_version',
      TransactionVersion
    ),
    column<PreburnEvent>('Timestamp', 'commit_timestamp'),
    column<PreburnEvent>('Address', 'address', AccountAddress),
    column<PreburnEvent>('Amount', 'amount'),
    column<PreburnEvent>('Currency', 'currency'),
  ],
  tableName: 'preburn_events',
  eventType: 'Preburn',
}

const AccountCreationEventsPageProps = {
  query: accountcreationEventsQuery(),
  columns: [
    column<AccountcreationEvent>(
      'Transaction Version',
      'transaction_version',
      TransactionVersion
    ),
    column<AccountcreationEvent>(
      'Sent Events Key',
      'sent_events_key',
      TruncatedCell
    ),
    column<AccountcreationEvent>('Role', 'role'),
    column<AccountcreationEvent>(
      'Received Mint Events Key',
      'received_mint_events_key',
      TruncatedCell
    ),
    column<AccountcreationEvent>(
      'Received Events Key',
      'received_events_key',
      TruncatedCell
    ),
    column<AccountcreationEvent>(
      'Parent VASP Address',
      'parent_vasp_address',
      AccountAddress
    ),
    column<AccountcreationEvent>('Is Frozen', 'is_frozen', BooleanCell),
    column<AccountcreationEvent>('Indexed At', 'indexed_at'),
    column<AccountcreationEvent>(
      'Diem Id Domain Events Key',
      'diem_id_domain_events_key'
    ),
    column<AccountcreationEvent>('Expiration Time', 'expiration_time'),
    column<AccountcreationEvent>(
      'Delegated Withdrawal Capability',
      'delegated_withdrawal_capability',
      BooleanCell
    ),
    column<AccountcreationEvent>(
      'Delegated Key Rotation Capability',
      'delegated_key_rotation_capability',
      BooleanCell
    ),
    column<AccountcreationEvent>(
      'Create Account Event Stream Sequence Number',
      'create_account_event_stream_sequence_number'
    ),
    column<AccountcreationEvent>('Compliance Key', 'compliance_key'),
    column<AccountcreationEvent>('Address', 'address', AccountAddress),
    column<AccountcreationEvent>('Base Url', 'base_url'),
    column<AccountcreationEvent>(
      'Base Url Rotation Events Key',
      'base_url_rotation_events_key',
      TruncatedCell
    ),
    column<AccountcreationEvent>(
      'Authentication Key',
      'authentication_key',
      TruncatedCell
    ),
    column<AccountcreationEvent>('Human Name', 'human_name'),
    column<AccountcreationEvent>(
      'Compliance Key Rotation Events Key',
      'compliance_key_rotation_events_key',
      TruncatedCell
    ),
  ],
  tableName: 'accounts',
  eventType: 'Account Creation',
}

const BurnEventsPage = () => {
  return <EventPage {...BurnEventsPageProps} />
}
const MintEventsPage = () => {
  return <EventPage {...MintEventsPageProps} />
}

const PaymentEventsPage = () => {
  return <EventPage {...PaymentEventsPageProps} />
}

const GasEventsPage = () => {
  return <EventPage {...GasEventsPageProps} />
}

const PreburnEventsPage = () => {
  return <EventPage {...PreburnEventsPageProps} />
}

const AccountCreationEventsPage = () => {
  return <EventPage {...AccountCreationEventsPageProps} />
}

const eventPages = {
  BurnEventsPage: BurnEventsPage,
  MintEventsPage: MintEventsPage,
  PaymentEventsPage: PaymentEventsPage,
  GasEventsPage: GasEventsPage,
  PreburnEventsPage: PreburnEventsPage,
  AccountCreationEventsPage: AccountCreationEventsPage,
}

export default eventPages
