// eslint-disable-next-line camelcase
import { order_by } from '../../utils/Analytics_Hasura_Api_Zeus_Client/zeus'

export function mintEventsQuery() {
  return {
    receivedmint_events: [
      {
        limit: 10,
        order_by: [{ transaction_version: order_by.desc }]
      },
      {
        amount: true,
        currency: true,
        key: true,
        receiver: true,
        sequence_number: true,
        transaction_version: true
      }
    ]
  }
}

export function burnEventsQuery() {
  return {
    burn_events: [
      {
        limit: 10,
        order_by: [{ transaction_version: order_by.desc }]
      },
      {
        amount: true,
        currency: true,
        key: true,
        sequence_number: true,
        transaction_version: true,
        address: true
      }
    ]
  }
}

export function paymentEventsQuery() {
  return {
    sentpayment_events: [
      {
        limit: 10,
        order_by: [{ transaction_version: order_by.desc }]
      },
      {
        amount: true,
        currency: true,
        key: true,
        metadata: true,
        receiver: true,
        sender: true,
        sequence_number: true,
        transaction_version: true
      }
    ]
  }
}

export function landingPageQuery() {
  return {
    transactions: [
      {
        limit: 10,
        where: { txn_type: { _eq: 3 } },
        order_by: [{ version: order_by.desc }]
      },
      {
        version: true,
        txn_type: true,
        expiration_timestamp: true,
        commit_timestamp: true,
        status: true,
        sender: true,
      }
    ]
  }
}

export function currencyInCirculationPageQuery(currency : string) {
  return {
    diem_in_circulation_realtime_aggregates: [
      {
        limit: 1,
        where: { currency: { _eq: currency } },
        order_by: [{ timestamp: order_by.desc }]
      },
      {
        currency: true,
        total_net_value: true,
        timestamp: true
      },
    ],
  }
}
