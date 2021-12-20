import { KnownCurrencyBlockchainAddress } from '../api_clients/BlockchainRestTypes'

export interface TxnEvent {
  key: string
  sequence_number: number
  transaction_number: number
  data: any
}

export interface BlockchainBlockmetadataTxnData extends BlockchainTransaction {
  type: 'blockmetadata'
}

export interface BlockchainUnknownTxnData extends BlockchainTransaction {
  type: 'unknown'
}

export interface BlockchainWritesetTxnData extends BlockchainTransaction {
  type: 'writeset'
}

export interface BlockchainTransactionPayload {
  type: string
  function: string
}

type PayeeArgument = string
type AmountArgument = string

export interface BlockchainP2PTransactionPayload
  extends BlockchainTransactionPayload {
  type: 'script_function_payload'
  function: '0x1::PaymentScripts::peer_to_peer_with_metadata'
  arguments: [
    PayeeArgument,
    AmountArgument,
    string, // ???
    string // ???
  ]
  type_arguments: [KnownCurrencyBlockchainAddress]
}

export interface BlockchainUserTxnData extends BlockchainTransaction {
  type: 'user_transaction'
  state_root_hash: string
  event_root_hash: string
  success: boolean
  max_gas_amount: string
  gas_unit_price: string
  gas_currency_code: string
  expiration_timestamp_secs: string
  sender: string
  sequence_number: string
  payload: BlockchainP2PTransactionPayload
  signature: any
}

export interface BlockchainTransaction {
  type: string
  version: string
  hash?: string
  events: TxnEvent[]
  vm_status?: string
  gas_used?: string
}
