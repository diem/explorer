// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import { Redirect, RouteComponentProps, useHistory } from 'react-router-dom'
import {
  getAccount,
  getAccountTransactions,
} from '../../api_clients/BlockchainRestClient'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import {
  transactionsBySenderAddressQuery,
  TransactionsQueryType,
} from '../../api_clients/AnalyticsQueries'
import {
  FetchError
} from '../../api_clients/FetchTypes'
import { TransactionVersion } from '../../TableComponents/Link'
import Table, { column } from '../../Table'
import MainWrapper from '../../MainWrapper'
import React, { FormEvent, KeyboardEvent, useEffect, useState } from 'react'
import Balances from './Balances'
import { Card, FormControl, InputGroup } from 'react-bootstrap'
import {
  DiemAccountResource,
  isDiemAccountResource,
  Resource,
} from '../../api_clients/BlockchainRestTypes'
import {
  TransactionRow,
  transformAnalyticsTransactionIntoTransaction,
} from '../../models/TransactionModel'
import { getCanonicalAddress, getSearchRouteFromSearchTerm } from '../../utils'
import Loadable, { LoadingState } from '../../Loadable'
import { Err, Ok, Result } from 'ts-results'
import { ResponseError, ResponseErrorType } from '../../api_clients/FetchBroker'
import { NoRecords } from '../../TableComponents/NoRecords'
import ObjectPropertiesTable from '../../ObjectPropertiesTable'

const RecentTransactionsTable: React.FC<{ data: TransactionRow[] }> = ({
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
    /> : <NoRecords value="  Recent Transactions are not available " />
    }</div>
  )
}


function SequenceNumber({ data }: { data: DiemAccountResource | null }) {
  if (!data) {
    return <></>
  }
  return (
    <Card className='mb-5'>
      <Card.Header>Sequence Number</Card.Header>
      <Card.Body id='sequenceNumber'>{data.value.sequence_number}</Card.Body>
    </Card>
  )
}

function AuthenticationKey({ data }: { data: DiemAccountResource | null }) {
  if (!data) {
    return <></>
  }
  return (
    <Card className='mb-5'>
      <Card.Header>Authentication Key</Card.Header>
      <Card.Body id='authenticationKey'>
        {data.value.authentication_key}
      </Card.Body>
    </Card>
  )
}

interface AccountPageMatch {
  address: string
}

type AccountPageProps = RouteComponentProps<AccountPageMatch>


const getRecentTransactions = (
  address: string
): Promise<Result<TransactionRow[], FetchError[]>> => {
  return postQueryToAnalyticsApi<TransactionsQueryType>(
    transactionsBySenderAddressQuery(address),
    'transactions'
  ).then((result) => {
    if (result.ok) {
      return Ok(result.val.map(transformAnalyticsTransactionIntoTransaction))
    } else {
      return result
    }
  })
}

const getAccountResourceResponse = (
  result: Result<Resource[], ResponseError>
): LoadingState<DiemAccountResource | null, ResponseError> => {
  if (result.err) return result
  const diemAccountResource = result.val.find(
    isDiemAccountResource
  ) as DiemAccountResource
  return diemAccountResource
    ? Ok(diemAccountResource)
    : Err({
      type: ResponseErrorType.UNHANDLED,
      message: 'Account resource not found',
    })
}



function isNotFoundResponseError<T>(
  loadingState: LoadingState<T, ResponseError> | undefined
): boolean {
  if (!loadingState) return false
  else if ('isLoading' in loadingState) return false
  else if (!loadingState.err) return false
  return loadingState.val.type === ResponseErrorType.NOT_FOUND
}

export default function AccountPage(props: AccountPageProps) {

  const maybeAddress = getCanonicalAddress(props.match.params.address);
  const history = useHistory()
  const [isValid, setIsValid] = useState<boolean>(true);
  const [addresVal, setAddressVal] = useState<any>(maybeAddress.val);

  if (maybeAddress.err) {
    return <Redirect to='/address/not-found' />
  }
  const address = maybeAddress.val

  const [{ getAccountState, getAccountTraansactionState, roleDetails }, setState] = useState<any>({ getAccountState: { isLoading: true }, getAccountTraansactionState: { isLoading: true }, roleDetails: { isLoading: true } })


  useEffect(() => {
    /* getRecentTransactions(address).then((result) =>
      setState((oldState: any) => ({
        ...oldState,
        recentTransactionsResponse: result,
      }))
    ) */
    getAccount(address).then((result) => {
      const res = result.val.result;
      const detailTbl = { address: res.address, authentication_key: res.authentication_key, balance: res.balances[0].amount + "~" + res.balances[0].currency, ...res.role, sent_events_key: res.sent_events_key, sequence_number: res.sequence_number, version: res.version }
      delete detailTbl.vasp_domains;
      Object.keys(detailTbl).forEach(key => {
        if (detailTbl[key] === '' || detailTbl[key] === undefined) {
          delete detailTbl[key];
        }
      });
      console.log("detailTbl", detailTbl)
      setState((oldState: any) => ({
        ...oldState, roleDetails: detailTbl,
        getAccountState: result.val,
      }))
    }
    )
    getAccountTransactions(address).then((result) => {
      setState((oldState: any) => ({
        ...oldState,
        getAccountTraansactionState: result.val,
      }))
    }
    )
  }, [addresVal])

  if (
    isNotFoundResponseError(getAccountState)
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
        <h2>Account Details Raw Data</h2>
        <Loadable state={getAccountState}>
          <p><pre>{JSON.stringify(getAccountState, null, 2)}</pre></p>
        </Loadable>
        {/* <span><b>Account Address :</b>  {addresVal}</span> */}
        {/* 

        <h2>Recent Transactions</h2>
        <Loadable state={recentTransactionsResponse}>
          <RecentTransactionsTable data={[]} />
        </Loadable>

        <Loadable state={modulesResponse}>
          <SmartContractMethods data={[]} />
        </Loadable>
        <Loadable state={modulesResponse}>
          <SmartContractStructs data={[]} />
        </Loadable>
        <Loadable state={accountResourceResponse} errMsg="SequenceNumber Not available">
          <SequenceNumber data={null} />
        </Loadable>
        <Loadable state={accountResourceResponse} errMsg="AuthenticationKey Not available">
          <AuthenticationKey data={null} />
        </Loadable>
        <Loadable state={accountResourceResponse} errMsg="EventHandlesTable Not available">
          <EventHandlesTable data={null} />
        </Loadable>

        <h2>Raw Resources</h2>
        <Loadable state={resourcesResponse}>
          <JSONPretty data={resourcesResponse} id='rawResources' />
        </Loadable>

        <h2>Raw Smart Contracts</h2>
        <Loadable state={modulesResponse}>
          <JSONPretty data={modulesResponse} id='rawModules' />
        </Loadable> */}
      </>
    </MainWrapper >
  )
}
