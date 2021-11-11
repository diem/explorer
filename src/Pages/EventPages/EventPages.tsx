import React from 'react'
import EventPage from './EventPage'
import {
  accountcreationEventsQuery,
  burnEventsQuery, gasEventsQuery,
  mintEventsQuery,
  paymentEventsQuery, preburnEventsQuery
} from '../../api_clients/AnalyticsQueries'
import {
  accountcreationEventsColumn,
  burnEventsColumn,
  gasEventsColumn,
  mintEventsColumn,
  paymentsEventsColumn,
  preburnEventsColumn
} from './EventPagesColumns'

const MintEventsPageProps = {
  query: mintEventsQuery(),
  columns: mintEventsColumn(),
  tableName: 'receivedmint_events',
  eventType: 'Mint'
}

const BurnEventsPageProps = {
  query: burnEventsQuery(),
  columns: burnEventsColumn(),
  tableName: 'burn_events',
  eventType: 'Burn'
}

const PaymentEventsPageProps = {
  query: paymentEventsQuery(),
  columns: paymentsEventsColumn(),
  tableName: 'sentpayment_events',
  eventType: 'Payment'
}

const GasEventsPageProps = {
  query: gasEventsQuery(),
  columns: gasEventsColumn(),
  tableName: 'gas_payments',
  eventType: 'Gas'
}

const PreburnEventsPageProps = {
  query: preburnEventsQuery(),
  columns: preburnEventsColumn(),
  tableName: 'preburns',
  eventType: 'Preburn'
}

const AccountCreationEventsPageProps = {
  query: accountcreationEventsQuery(),
  columns: accountcreationEventsColumn(),
  tableName: 'accounts',
  eventType: 'Account Creation'
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

const GasEventsPage = () => {
  return (<EventPage { ...GasEventsPageProps } />)
}

const PreburnEventsPage = () => {
  return (<EventPage { ...PreburnEventsPageProps } />)
}

const AccountCreationEventsPage = () => {
  return (<EventPage { ...AccountCreationEventsPageProps } />)
}

const eventPages = {
  BurnEventsPage: BurnEventsPage,
  MintEventsPage: MintEventsPage,
  PaymentEventsPage: PaymentEventsPage,
  GasEventsPage: GasEventsPage,
  PreburnEventsPage: PreburnEventsPage,
  AccountCreationEventsPage: AccountCreationEventsPage
}

export default eventPages
