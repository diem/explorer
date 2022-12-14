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
import { Accordion, FormControl, InputGroup } from 'react-bootstrap'
import { getCanonicalAddress, getSearchRouteFromSearchTerm } from '../../utils'
import Loadable from '../../Loadable'
import { NoRecords } from '../../TableComponents/NoRecords'
import ObjectPropertiesTable from '../../ObjectPropertiesTable'

const RecentTransactionsTable: React.FC<{ data: any }> = ({
  data,
}) => {
  function txtTrim(txt: any) {
    return <span className="txtCaptil">{txt.value.replace(/_/g, " ")}</span>

  }
  function dateCon(dt: any) {
    let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    let dt2 = d.setUTCSeconds(Number(dt.value))
    console.log("dt2", new Date(dt2))
    return <span className="txtCaptil">{new Date(dt2).toISOString()}</span>
  }
  const showPagination = (data: any = [], count: number = 10) => {
    return data.length > count
  }

  return (<div>
    {data.length > 0 ? <Table
      isPaginated={true}
      pSize={10}
      showPaginationCus={showPagination(data, 10)}
      noOfRec={[10, 25, 50]}
      columns={[
        column('Version', 'version', TransactionVersion),
        column('Timestamp', 'commitTimestamp', dateCon),
        column('Transaction Type', 'transactionType', txtTrim),
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
  console.log("history", history.location.state);
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
        detailTbl = { address: res.address, authentication_key: res.authentication_key, ...res.role, sent_events_key: res.sent_events_key, sequence_number: res.sequence_number, version: res.version }
        delete detailTbl.vasp_domains;
        Object.keys(detailTbl).forEach(key => {
          console.log("typeof (detailTbl[key])", detailTbl[key])
          console.log("typeof (detailTbl[key])", typeof (detailTbl[key]) !== 'number')
          if (detailTbl[key] === '' || detailTbl[key] === undefined || typeof (detailTbl[key]) !== 'string') {
            if (typeof (detailTbl[key]) !== 'number') {

              delete detailTbl[key];
            }
          }
        });
      }
      else {
        detailTbl = {}
      }
      setState((oldState: any) => ({
        ...oldState, roleDetails: detailTbl,
        getAccountState: result.val,
      }))
    }
    )
    getAccountTransactions(address).then((result) => {
      const res = result.val.result;

      console.log("item", res)
      const resupdate = res.map((item: any) => {
        return { version: item.version, commitTimestamp: item.transaction.expiration_timestamp_secs, txnType: item.transaction.type, status: item.vm_status.type, transactionType: item.transaction.script.type }
      })

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
        history.push(searchRoute, { checkbox: true })
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
        <Loadable state={getAccountState}>
          <Accordion activeKey={getAccountState ? undefined : '0'}>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Account Details Raw Data</Accordion.Header>
              <Accordion.Body>
                <p><pre>{JSON.stringify(getAccountState, null, 2)}</pre></p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        </Loadable>
        <div className="m-20">
          <Loadable state={getAccountTraansactionRawState}>
            <Accordion activeKey={getAccountTraansactionRawState ? undefined : '1'}>
              <Accordion.Item eventKey='1'>
                <Accordion.Header>Transactions  Raw Data</Accordion.Header>
                <Accordion.Body>
                  <p><pre>{JSON.stringify(getAccountTraansactionRawState, null, 2)}</pre></p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Loadable>
        </div>

      </>
    </MainWrapper >
  )
}
