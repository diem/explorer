export interface AnalyticsTransaction {
    version: number,
    expiration_timestamp: string,
    commit_timestamp: string,
    sender: string,
    txn_type: number
    status: number
}
