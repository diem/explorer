import React from 'react'
import { TransactionVersion } from '../../TableComponents/Link'
import { TruncatedCell } from '../../TableComponents/TruncatedCell'
import EventPage from './EventPage'

const MintEventsPageProps = {
  query: 'query getMintEvents {\n' +
    '  receivedmint_events(limit: 10, order_by: {transaction_version: desc}) {\n' +
    '    amount\n' +
    '    currency\n' +
    '    key\n' +
    '    receiver\n' +
    '    sequence_number\n' +
    '    transaction_version\n' +
    '  }\n' +
    '}',
  columns: [
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
  ],
  tableName: 'receivedmint_events',
  eventType: 'Mint'
}

const BurnEventsPageProps = {
  query: 'query getBurnEvents {\n' +
    '  burn_events(limit: 10, order_by: {transaction_version: desc}) {\n' +
    '    amount\n' +
    '    currency\n' +
    '    key\n' +
    '    sequence_number\n' +
    '    transaction_version\n' +
    '    address\n' +
    '  }\n' +
    '}',
  columns: [
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
  ],
  tableName: 'burn_events',
  eventType: 'Burn'
}
const PaymentEventsPageProps = {
  query: 'query getPaymentEvents {\n' +
    '  sentpayment_events(order_by: {transaction_version: desc}, limit: 10) {\n' +
    '    amount\n' +
    '    currency\n' +
    '    key\n' +
    '    metadata\n' +
    '    receiver\n' +
    '    sender\n' +
    '    sequence_number\n' +
    '    transaction_version\n' +
    '  }\n' +
    '}',
  columns: [
    { Header: 'Transaction Version', accessor: 'transaction_version', Cell: TransactionVersion },
    { Header: 'Amount', accessor: 'amount' },
    { Header: 'Currency', accessor: 'currency' },
    { Header: 'Key', accessor: 'key', Cell: TruncatedCell },
    { Header: 'Receiver', accessor: 'receiver', Cell: TruncatedCell },
    { Header: 'Sender', accessor: 'sender', Cell: TruncatedCell },
    { Header: 'Sequence Number', accessor: 'sequence_number' },
  ],
  tableName: 'sentpayment_events',
  eventType: 'Payment'
}

const BurnEventsPage = () => {
  return (
    <EventPage { ...BurnEventsPageProps } />
  )
}
const MintEventsPage = () => {
  return (<EventPage { ...MintEventsPageProps } />)
}

const PaymentEventsPage = () => {
  return (<EventPage { ...PaymentEventsPageProps } />)
}
const eventPages = {
  BurnEventsPage: BurnEventsPage,
  MintEventsPage: MintEventsPage,
  PaymentEventsPage: PaymentEventsPage
}

export default eventPages
