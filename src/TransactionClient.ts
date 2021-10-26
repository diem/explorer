import { AnalyticsTransaction } from './api_models/AnalyticsTransaction'
import { LandingPageTransaction } from './LandingPage/LandingPageTransactionModel'
import { getBlockchainTransaction } from './TxnDetailsPage/BlockchainClient'
import { BlockchainTransaction } from './api_models/BlockchainTransaction'
import { DataOrErrors } from './FetchType'
import { postQueryToAnalyticsApi } from './AnalyticsClient'

function getTransactionTypeFromEnum (txnType: number) {
  switch (txnType) {
    case 1:
      return 'BlockMetadata'
    case 2:
      return 'WriteSet'
    case 3:
      return 'UserTransaction'
    case 4:
      return 'Unknown'
  }
}

function getStatusFromEnum (status: number) {
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
  }
}

function transformAnalyticsTransactionIntoTransaction (
  transaction: AnalyticsTransaction
) {
  return {
    version: transaction.version,
    expirationTimestamp: transaction.expiration_timestamp,
    commitTimestamp: transaction.commit_timestamp,
    sender: transaction.sender,
    txnType: getTransactionTypeFromEnum(transaction.txn_type),
    status: getStatusFromEnum(transaction.status)
  }
}

function transformAnalyticsTransactionsOrErrors (
  response: DataOrErrors<{ transactions: AnalyticsTransaction[] }>
): DataOrErrors<{ transactions: LandingPageTransaction[] } | null> {
  if (response.errors) {
    return {
      data: null,
      errors: response.errors
    }
  }
  return {
    errors: null,
    data: {
      transactions: response.data ? response.data.transactions.map(transformAnalyticsTransactionIntoTransaction) : []
    }
  }
}

export async function getTransactions (): Promise<DataOrErrors<{ transactions: LandingPageTransaction[] } | null>> {
  return postQueryToAnalyticsApi<{ transactions: AnalyticsTransaction[] }>(
    'query getTransactions {' +
      '\n  transactions(limit: 10, where: {txn_type: {_eq: 3}}, order_by: {version: desc}) {' +
      '\n    version' +
      '\n    txn_type' +
      '\n    expiration_timestamp' +
      '\n    commit_timestamp' +
      '\n    status' +
      '\n    sender' +
      '\n}\n}\n'
  ).then(transformAnalyticsTransactionsOrErrors)
}

export async function getTransaction (version: string): Promise<DataOrErrors<BlockchainTransaction | null>> {
  return getBlockchainTransaction(version)
}
