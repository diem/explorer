// eslint-disable-next-line camelcase
import { GraphQLTypes, order_by } from '../../utils/Analytics_Hasura_Api_Zeus_Client/zeus'

export type mintEventsQueryType = GraphQLTypes['query_root']['receivedmint_events']
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

export type burnEventsQueryType = GraphQLTypes['query_root']['burn_events']
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

export type paymentEventsQueryType = GraphQLTypes['query_root']['sentpayment_events']
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

export type gasEventsQueryType = GraphQLTypes['query_root']['gas_payments']
export function gasEventsQuery() {
  return {
    gas_payments: [
      {
        limit: 10,
        order_by: [{ version: order_by.desc }]
      },
      {
        commit_timestamp: true,
        currency: true,
        gas_paid: true,
        receiver: true,
        sender: true,
        version: true
      }
    ]
  }
}

export type preburnEventsQueryType = GraphQLTypes['query_root']['preburns']
export function preburnEventsQuery() {
  return {
    preburns: [
      {
        limit: 10,
        order_by: [{ version: order_by.desc }]
      },
      {
        version: true,
        commit_timestamp: true,
        amount: true,
        status: true,
        sender: true,
        receiver: true,
        currency: true
      }
    ]
  }
}

export type accountcreationEventsQueryType = GraphQLTypes['query_root']['accounts']
export function accountcreationEventsQuery() {
  return {
    accounts: [
      {
        limit: 10,
        order_by: [{ transaction_version: order_by.desc }]
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
        compliance_key_rotation_events_key: true
      }
    ]
  }
}

export type landingPageQueryType = GraphQLTypes['query_root']['transactions']
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

export type currencyInCirculationPageQueryType = GraphQLTypes['query_root']['diem_in_circulation_realtime_aggregates']
export function currencyInCirculationPageQuery(currency : string) {
  return {
    diem_in_circulation_realtime_aggregates: [
      {
        limit: 1,
        where: { currency: { _eq: currency } },
        order_by: [{ timestamp: 'desc' }]
      },
      {
        currency: true,
        total_net_value: true,
        timestamp: true
      },
    ],
  }
}

export type countTransactionsInLast10MinutesType = number
export function countTransactionsInLast10Minutes() {
  return {}
}
