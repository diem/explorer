import { FormControl, InputGroup } from 'react-bootstrap'
import React, { ReactNode } from 'react'
import ApiRequestPage from '../ApiRequestPage'
import { getTransactions } from '../TransactionClient'
import MainWrapper from '../MainWrapper'
import { LandingPageTransaction } from './LandingPageTransactionModel'
import Table from '../Table'
import { useHistory } from 'react-router-dom'
import './LandingPage.css'
import { TransactionVersion } from '../TableComponents/Link'

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

function LandingPageWithResponse(props: { data: { transactions: LandingPageTransaction[]} }) {
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
      <TransactionTable transactions={props.data.transactions} />
    </Wrapper>
  )
}

export default function LandingPage() {
  return (
    <ApiRequestPage request={getTransactions}>
      <LandingPageWithResponse data={{ transactions: [] }} />
    </ApiRequestPage>
  )
}
