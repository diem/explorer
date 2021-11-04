import { FormControl, InputGroup } from 'react-bootstrap'
import React, { ReactNode } from 'react'
import ApiRequestPage from '../../ApiRequestPage'
import MainWrapper from '../../MainWrapper'
import { LandingPageTransaction } from './LandingPageTransactionModel'
import Table from '../../Table'
import { useHistory } from 'react-router-dom'
import './LandingPage.css'
import { TransactionVersion } from '../../TableComponents/Link'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import {
  AnalyticsTransaction,
  transformAnalyticsTransactionIntoTransaction,
} from '../../api_models/AnalyticsTransaction'
import { DataOrErrors } from '../../api_clients/FetchTypes'

function Wrapper(props: { children: ReactNode }) {
  return (
    <MainWrapper>
      <>
        <h2 className="mb-5" role="note">
          Welcome To Diem Explorer
        </h2>
        <h3 className="mb-2">Recent Transactions</h3>
        {props.children}
      </>
    </MainWrapper>
  )
}

function TransactionTable(props: { transactions: LandingPageTransaction[] }) {
  const columns = [
    { Header: 'Version', accessor: 'version', Cell: TransactionVersion },
    { Header: 'Timestamp', accessor: 'commitTimestamp' },
    { Header: 'Type', accessor: 'txnType' },
    { Header: 'Status', accessor: 'status' },
  ]

  return <Table columns={columns} data={props.transactions} />
}

function LandingPageWithResponse(props: { data: LandingPageTransaction[] }) {
  const history = useHistory()
  function handleSearch(event: any) {
    // Enter Key
    if (event.key === 'Enter') {
      const value = event.target.value.trim().toLowerCase().replace(/^(0x)/, '')
      if (/^\d+$/.test(value)) {
        // Its a txn version
        history.push(`/txn/${value}`)
      } else {
        // Its an address
        history.push(`/address/${value}`)
      }
    }
  }

  return (
    <Wrapper>
      <InputGroup className="mb-5">
        <FormControl
          placeholder="Search by Address / Txn Version"
          aria-label="Search by Address / Txn Version"
          onKeyPress={handleSearch}
        />
      </InputGroup>
      <TransactionTable transactions={props.data} />
    </Wrapper>
  )
}

function transformAnalyticsTransactionsOrErrors(
  response: DataOrErrors<AnalyticsTransaction[]>
): DataOrErrors<LandingPageTransaction[]> {
  if (response.data) {
    return {
      errors: null,
      data: response.data.map(transformAnalyticsTransactionIntoTransaction),
    }
  } else {
    return {
      errors: response.errors,
      data: null,
    }
  }
}

export default function LandingPage() {
  return (
    <ApiRequestPage
      request={() => {
        return postQueryToAnalyticsApi<AnalyticsTransaction[]>(
          'query getTransactions {' +
            '\n  transactions(limit: 10, where: {txn_type: {_eq: 3}}, order_by: {version: desc}) {' +
            '\n    version' +
            '\n    txn_type' +
            '\n    expiration_timestamp' +
            '\n    commit_timestamp' +
            '\n    status' +
            '\n    sender' +
            '\n}\n}\n',
          'transactions'
        ).then(transformAnalyticsTransactionsOrErrors)
      }}
    >
      <LandingPageWithResponse data={[]} />
    </ApiRequestPage>
  )
}
