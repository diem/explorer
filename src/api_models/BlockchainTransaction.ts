export interface TxnEvent {
  key: string
  sequence_number: string
  type: string
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
  payload: any
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
