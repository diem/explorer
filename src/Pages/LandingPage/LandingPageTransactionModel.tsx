export interface LandingPageTransaction {
  version: number
  expirationTimestamp: string | undefined
  commitTimestamp: string | undefined
  sender: string | undefined
  txnType: string | undefined
  status: string | undefined
}
