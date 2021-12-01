// Adapated from https://github.com/diem/diem/blob/master/json-rpc/docs/type_transaction.md#type-transactiondata

import { KnownCurrency } from '../api_clients/BlockchainRestTypes'

export interface TxnEvent {
  key: string
  sequence_number: number
  transaction_number: number
  data: any
}

export interface VMstatus {
  type: string
}

export interface BlockchainScript {
  type: string
  code: string
  arguments: any[]
  type_arguments: any[]
}

export interface UnknownBlockChainScript extends BlockchainScript {
  type: 'unknown'
}

export interface PeerToPeerWithMetadataBlockChainScript
  extends BlockchainScript {
  receiver: string
  amount: number
  currency: KnownCurrency
  metadata: string
  metadata_signature: string
}

export interface BlockchainTxnData {
  type: string
}

export interface BlockchainBlockmetadataTxnData extends BlockchainTxnData {
  type: 'blockmetadata'
  timestamp_usecs: number
}

export interface BlockchainUnknownTxnData extends BlockchainTxnData {
  type: 'unknown'
}

export interface BlockchainWritesetTxnData extends BlockchainTxnData {
  type: 'writeset'
}

export interface BlockchainUserTxnData extends BlockchainTxnData {
  type: 'user'
  sender: string
  signature_scheme: string
  signature: string
  public_key: string
  sequence_number: number
  chain_id: number
  max_gas_amount: number
  gas_unit_price: number
  gas_currency: string
  expiration_timestamp_secs: number
  script_hash: string
  script_bytes: string
  script: BlockchainScript
}

export interface BlockchainTransaction {
  version: number
  transaction?: BlockchainTxnData
  hash?: string
  bytes?: string
  events: TxnEvent[]
  vm_status?: VMstatus
  gas_used?: number
}
