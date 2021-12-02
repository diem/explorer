import { GraphQLTypes } from '../../../utils/Analytics_Hasura_Api_Zeus_Client/zeus'

export interface TransactionRow {
  version: number
  expirationTimestamp: string | undefined
  commitTimestamp: string
  sender: string | undefined
  txnType: string
  status: string
}

function getTransactionTypeFromEnum(txnType: number) {
  switch (txnType) {
    case 1:
      return 'BlockMetadata'
    case 2:
      return 'WriteSet'
    case 3:
      return 'UserTransaction'
    case 4:
      return 'Unknown'
    default:
      console.error(`Unknown transaction type value: ${txnType}`)
      return 'Unknown'
  }
}

function getStatusFromEnum(status: number) {
  switch (status) {
    case 1:
      return 'Executed'
    case 2:
      return 'OutOfGas'
    case 3:
      return 'MoveAbort'
    case 4:
      return 'ExecutionFailure'
    case 5:
      return 'MiscellaneousError'
    case 6:
      return 'VerificationError'
    case 7:
      return 'DeserializationError'
    case 8:
      return 'PublishingFailure'
    default:
      console.error(`Unknown transaction status value: ${status}`)
      return 'Unknown'
  }
}

export function transformAnalyticsTransactionIntoTransaction(
  transaction: GraphQLTypes['transactions']
): TransactionRow {
  return {
    version: transaction.version,
    expirationTimestamp: transaction.expiration_timestamp,
    commitTimestamp: transaction.commit_timestamp,
    sender: transaction.sender,
    txnType: getTransactionTypeFromEnum(transaction.txn_type),
    status: getStatusFromEnum(transaction.status),
  }
}
