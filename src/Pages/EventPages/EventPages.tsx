import React from 'react'
import EventPage from './EventPage'
import {
  burnEventsQuery, gasEventsQuery,
  mintEventsQuery,
  paymentEventsQuery
} from '../../api_clients/AnalyticsQueries'
import { burnEventsColumn, gasEventsColumn, mintEventsColumn, paymentsEventsColumn } from './EventPagesColumns'

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

const eventPages = {
  BurnEventsPage: BurnEventsPage,
  MintEventsPage: MintEventsPage,
  PaymentEventsPage: PaymentEventsPage,
  GasEventsPage: GasEventsPage
}

export default eventPages
