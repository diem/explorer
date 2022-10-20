// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable camelcase */
import {
  GraphQLTypes,
  order_by,
} from '../../generated/Analytics_Hasura_Api_Zeus_Client/zeus'
import moment from 'moment'
import { KnownCurrency } from './BlockchainRestTypes'
import { getCanonicalAddress } from '../utils'

type CountResult = {
  aggregate: {
    count: number
  }
}

export type MintEvent = GraphQLTypes['receivedmint_events']
export function mintEventsQuery() {
  return {
    receivedmint_events: [
      {
        limit: 300,
        order_by: [{ transaction_version: order_by.desc }],
      },
      {
        amount: true,
        currency: true,
        key: true,
        receiver: true,
        sequence_number: true,
        transaction_version: true,
      },
    ],
  }
}

export type BurnEvent = GraphQLTypes['burn_events']
export function burnEventsQuery() {
  return {
    burn_events: [
      {
        limit: 300,
        order_by: [{ transaction_version: order_by.desc }],
      },
      {
        amount: true,
        currency: true,
        key: true,
        sequence_number: true,
        transaction_version: true,
        address: true,
      },
    ],
  }
}

export type PaymentEvent = GraphQLTypes['sentpayment_events']
export function paymentEventsQuery() {
  return {
    sentpayment_events: [
      {
        limit: 300,
        order_by: [{ transaction_version: order_by.desc }],
      },
      {
        amount: true,
        currency: true,
        key: true,
        metadata: true,
        receiver: true,
        sender: true,
        sequence_number: true,
        transaction_version: true,
      },
    ],
  }
}

export type GasEvent = GraphQLTypes['gas_payments']
export function gasEventsQuery() {
  return {
    gas_payments: [
      {
        limit: 300,
        order_by: [{ version: order_by.desc }],
      },
      {
        commit_timestamp: true,
        currency: true,
        gas_paid: true,
        receiver: true,
        sender: true,
        version: true,
      },
    ],
  }
}

export type PreburnEvent = GraphQLTypes['preburn_events']
export function preburnEventsQuery() {
  return {
    preburn_events: [
      {
        limit: 300,
        order_by: [{ transaction_version: order_by.desc }],
      },
      {
        transaction_version: true,
        commit_timestamp: true,
        address: true,
        amount: true,
        currency: true,
      },
    ],
  }
}

export type AccountcreationEvent = GraphQLTypes['accounts']
export function accountcreationEventsQuery() {
  return {
    accounts: [
      {
        limit: 10,
        order_by: [{ transaction_version: order_by.desc }],
      },
      {
        transaction_version: true,
        sent_events_key: true,
        role: true,
        received_mint_events_key: true,
        received_events_key: true,
        parent_vasp_address: true,
        is_frozen: true,
        indexed_at: true,
        diem_id_domain_events_key: true,
        expiration_time: true,
        delegated_withdrawal_capability: true,
        delegated_key_rotation_capability: true,
        create_account_event_stream_sequence_number: true,
        compliance_key: true,
        address: true,
        base_url: true,
        base_url_rotation_events_key: true,
        authentication_key: true,
        human_name: true,
        compliance_key_rotation_events_key: true,
      },
    ],
  }
}

export type VaspsList = GraphQLTypes['preburn_events']
export function vaspsList() {
  return {
    preburn_events: [
      {
        limit: 300,
        order_by: [{ transaction_version: order_by.desc }],
      },
      {
        transaction_version: true,
        commit_timestamp: true,
        address: true,
        currency: true,
      },
    ],
  }
}

export type AccountBalancesQueryType =
  GraphQLTypes['query_root']['accounts_balances']
export function top10AccountsQuery(currency: KnownCurrency) {
  return {
    accounts_balances: [
      {
        limit: 10,
        where: { currency: { _eq: currency } },
        order_by: [{ balance: order_by.desc }],
      },
      {
        address: true,
        balance: true,
      },
    ],
  }
}

export type TransactionsQueryType = GraphQLTypes['query_root']['transactions']
export function transactionsQuery() {
  return {
    transactions: [
      {
        limit: 10,
        where: { txn_type: { _eq: 3 } },
        order_by: [{ version: order_by.desc }],
      },
      {
        version: true,
        txn_type: true,
        expiration_timestamp: true,
        commit_timestamp: true,
        status: true,
        sender: true,
      },
    ],
  }
}

export function LatestMintBurnNetQuery() {
  return {
    diem_in_circulation_realtime_aggregates: [
      {
        limit: 1,
        where: { currency: { _eq: 'XUS' } },
        order_by: [{ timestamp: order_by.desc }],
      },
      {
        total_burn_value: true,
        total_mint_value: true,
        total_net_value: true,
      },
    ],
  }
}

export function transactionsBySenderAddressQuery(senderAddress: string) {
  const canonicalAddress = getCanonicalAddress(senderAddress)
  if (canonicalAddress.err) {
    return { error: canonicalAddress.val }
  }
  return {
    transactions: [
      {
        limit: 10,
        where: { sender: { _eq: canonicalAddress.val } },
        order_by: [{ version: order_by.desc }],
      },
      {
        version: true,
        txn_type: true,
        expiration_timestamp: true,
        commit_timestamp: true,
        status: true,
        sender: true,
      },
    ],
  }
}

export type CurrencyInCirculationPageQueryType = {
  diem_in_circulation_realtime_aggregates:
  | [{ currency: string; total_net_value: number; timestamp: string }]
  | []
}
export function currencyInCirculationPageQuery(currency: KnownCurrency) {
  return {
    diem_in_circulation_realtime_aggregates: [
      {
        limit: 1,
        where: { currency: { _eq: currency } },
        order_by: [{ timestamp: 'desc' }],
      },
      {
        currency: true,
        total_net_value: true,
        timestamp: true,
      },
    ],
  }
}

export type CountTransactionsInLast10MinutesType = CountResult
export function countTransactionsInLast10Minutes() {
  const TEN_MINUTES_AGO = moment.utc().subtract(10, 'minutes').format()
  return {
    transactions_aggregate: [
      {
        order_by: [{ commit_timestamp: order_by.desc }],
        where: { commit_timestamp: { _gt: TEN_MINUTES_AGO } },
      },
      {
        aggregate: {
          count: [{}, true],
        },
      },
    ],
  }
}

export function top10Transactions(currency: KnownCurrency) {
  const TWENTY_FOUR_HOURS_AGO = moment.utc().subtract(1, 'days').format()
  return {
    sentpayment_events: [
      {
        limit: 10,
        where: {
          commit_timestamp: { _gt: TWENTY_FOUR_HOURS_AGO },
          currency: { _eq: currency },
        },
        order_by: [{ amount: order_by.desc }],
      },
      {
        amount: true,
        transaction_version: true,
      },
    ],
  }
}

export type DiemInCirculationHistoryType = {
  diem_in_circulation_dynamic: { timestamp: string; total_net: number }[]
}
export function diemInCirculationHistoryQuery(currency: KnownCurrency) {
  const TODAY = moment().format()
  const ONE_WEEK_AGO = moment().subtract(7, 'days').format()

  return {
    diem_in_circulation_dynamic: [
      {
        where: {
          timestamp: { _gt: ONE_WEEK_AGO, _lt: TODAY },
          currency: { _eq: currency },
        },
        order_by: [{ timestamp: order_by.desc }],
      },
      {
        total_net: true,
        timestamp: true,
      },
    ],
  }
}

export type CountTotalPayments = CountResult
export function totalPaymentsQuery() {
  const EXECUTED_SUCCESSFULLY = 1
  return {
    sentpayment_events_aggregate: [
      {
        where: {
          status: { _eq: EXECUTED_SUCCESSFULLY },
        },
      },
      {
        aggregate: {
          count: [{}, true],
        },
      },
    ],
  }
}
