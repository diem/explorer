// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import { Redirect, RouteComponentProps, useHistory } from 'react-router-dom'
import {
  getAccount,
  getAccountTransactions,
} from '../../api_clients/BlockchainRestClient'
import { TransactionVersion } from '../../TableComponents/Link'
import Table, { column } from '../../Table'
import MainWrapper from '../../MainWrapper'
import React, { FormEvent, KeyboardEvent, useEffect, useState } from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import { getCanonicalAddress, getSearchRouteFromSearchTerm } from '../../utils'
import Loadable from '../../Loadable'
import { NoRecords } from '../../TableComponents/NoRecords'
import ObjectPropertiesTable from '../../ObjectPropertiesTable'

const RecentTransactionsTable: React.FC<{ data: any }> = ({
  data,
}) => {
  return (<div>
    {data.length > 0 ? <Table
      columns={[
        column('Version', 'version', TransactionVersion),
        column('Timestamp', 'commitTimestamp'),
        column('Type', 'txnType'),
        column('Status', 'status'),
      ]}
      data={data}
      id='recentTransactions'
    /> : <NoRecords value="Transactions are not available " />
    }</div>
  )
}



interface AccountPageMatch {
  address: string
}

type AccountPageProps = RouteComponentProps<AccountPageMatch>




export default function AccountPage(props: AccountPageProps) {

  const maybeAddress = getCanonicalAddress(props.match.params.address);
  const history = useHistory()
  const [isValid, setIsValid] = useState<boolean>(true);
  const [addresVal, setAddressVal] = useState<any>(maybeAddress.val);

  if (maybeAddress.err) {
    return <Redirect to='/address/not-found' />
  }
  const address = maybeAddress.val

  const [{ getAccountState, getAccountTraansactionState, getAccountTraansactionRawState, roleDetails }, setState] = useState<any>({ getAccountState: { isLoading: true }, getAccountTraansactionState: { isLoading: true }, roleDetails: { isLoading: true }, getAccountTraansactionRawState: { isLoading: true } })


  useEffect(() => {
    /* getRecentTransactions(address).then((result) =>
      setState((oldState: any) => ({
        ...oldState,
        recentTransactionsResponse: result,
      }))
    ) */
    getAccount(address).then((result) => {
      let detailTbl: any;
      if (result.val.result) {
        const res = result.val.result;
        detailTbl = { address: res.address, authentication_key: res.authentication_key, balance: res.balances[0].amount + "~" + res.balances[0].currency, ...res.role, sent_events_key: res.sent_events_key, sequence_number: res.sequence_number, version: res.version }
        delete detailTbl.vasp_domains;
        Object.keys(detailTbl).forEach(key => {
          if (detailTbl[key] === '' || detailTbl[key] === undefined) {
            delete detailTbl[key];
          }
        });
      }
      else {
        detailTbl = {}
      }
      console.log("detailTbl", detailTbl)
      setState((oldState: any) => ({
        ...oldState, roleDetails: detailTbl,
        getAccountState: result.val,
      }))
    }
    )
    getAccountTransactions(address).then((result) => {
      const res = result.val.result;

      const resupdate = res.map((item: any) => {
        return { version: item.version, commitTimestamp: "", txnType: item.transaction.type, status: item.vm_status.type }
      })

      console.log("item", resupdate)
      setState((oldState: any) => ({
        ...oldState,
        getAccountTraansactionState: { val: resupdate },
        getAccountTraansactionRawState: result.val.result
      }))
    }
    )
  }, [addresVal])

  console.log("getAccountState", getAccountState)
  if (
    getAccountState.result === null
  ) {
    return <Redirect to='/address/not-found' />
  }

  function validateSearchTerm(event: FormEvent<HTMLInputElement>) {
    const searchTerm = (event.target as HTMLInputElement).value
    const searchRoute = getSearchRouteFromSearchTerm(searchTerm)
    setIsValid(searchRoute !== null || searchTerm === '')
  }

  function submitSearch(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const searchTerm = (event.target as HTMLInputElement).value
      const searchRoute = getSearchRouteFromSearchTerm(searchTerm);
      setAddressVal(searchTerm)
      if (searchRoute !== null) {
        history.push(searchRoute)
      }
    }
  }

  return (
    <MainWrapper>
      <>

        <h1>Account Details <span className='transactionVal'>({addresVal})</span></h1>

        <InputGroup className='mb-5'>
          <FormControl
            placeholder='Search by Address or Transaction Version'
            aria-label='Search by Address or Transaction Version'
            onInput={validateSearchTerm}
            onKeyPress={submitSearch}
            isInvalid={!isValid}
          />
          <FormControl.Feedback type='invalid'>
            Invalid address or transaction version
          </FormControl.Feedback>
        </InputGroup>
        <Loadable state={roleDetails}>
          {/* <Balances data={[]} /> */}
          <ObjectPropertiesTable object={roleDetails} />
        </Loadable>
        <Loadable state={getAccountTraansactionState}>
          <RecentTransactionsTable data={[]} />
        </Loadable>
        <h2>Account Details Raw Data</h2>
        <Loadable state={getAccountState}>
          <p><pre>{JSON.stringify(getAccountState, null, 2)}</pre></p>
        </Loadable>
        <h2>Transactions  Raw Data</h2>
        <Loadable state={getAccountTraansactionRawState}>
          <p><pre>{JSON.stringify(getAccountTraansactionRawState, null, 2)}</pre></p>
        </Loadable>

      </>
    </MainWrapper >
  )
}
