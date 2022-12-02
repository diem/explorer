// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import ApiRequestComponent, {
  ErrorComponentProps,
  FullPageErrorComponent,
} from '../../ApiRequestComponent'
import React, { FormEvent, KeyboardEvent, useState } from 'react'
import {
  BlockchainTransaction,
} from '../../models/BlockchainTransaction'
import { RouteComponentProps, Redirect, useHistory } from 'react-router-dom'
import MainWrapper from '../../MainWrapper'
import { Accordion, Alert, FormControl, InputGroup } from 'react-bootstrap'
import JSONPretty from 'react-json-pretty'
import { getTransactionDetails } from '../../api_clients/BlockchainRestClient'
import ObjectPropertiesTable from '../../ObjectPropertiesTable'
import { AccountAddress } from '../../TableComponents/Link'
import { ResponseError, ResponseErrorType } from '../../api_clients/FetchBroker'
import { getSearchRouteFromSearchTerm } from '../../utils'

function UnsupportedTxnDetailsTable() {
  return (
    <Alert variant={'warning'} style={{ width: '30rem' }}>
      <h4>Unsupported Transaction</h4>
      <p>
        Diem Explorer is still being built and does not support this type of
        transaction yet.
      </p>
      <p>
        In the mean time the raw data is displayed here for your convenience
      </p>
    </Alert>
  )
}

function UserTxnDetailsTable({ data }: { data: any }) {
  data = data.result[0];
  console.log("data", data)
  const txnForDisplay = {
    'Version ID': data.version,
    Status: data.vm_status.type,
    'Transaction Type': data.transaction.script.type,
    To: AccountAddress({ value: data.transaction.script.receiver }),
    From: AccountAddress({ value: data.transaction.sender }),
    Amount: data.transaction.script.amount,
    Expiration: data.transaction.expiration_timestamp_secs,
    'Currency Code': data.transaction.script.currency,
    'Sequence Number': data.transaction.sequence_number,
    'Gas Used': data.gas_used,
    'Gas Unit Price': data.transaction.gas_unit_price,
    'Max Gas Amount': data.transaction.max_gas_amount,
    'Public Key': data.transaction.public_key,
    Signature: data.transaction.signature,
    'Script Hash': data.hash,
  }
  return <ObjectPropertiesTable object={txnForDisplay} />
}

function transactionIsSupported(data: BlockchainTransaction | null) {
  return true
}

function TxnDetailsTable({ data, version }: { data: any | null, version: string | null }) {


  const history = useHistory();
  const [isValid, setIsValid] = useState<boolean>(true);
  const [addresVal, setAddressVal] = useState<any>(version);

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
    <>
      <h2 className='mb-5' role='note'>
        Transaction Details   <h5 className='transactionVal'>({addresVal})</h5>
      </h2>
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
      {transactionIsSupported(data) ? (
        <UserTxnDetailsTable data={data as any} />
      ) : (
        <UnsupportedTxnDetailsTable />
      )}
    </>
  )
}

function RawTxn({ data }: { data: BlockchainTransaction | null }) {
  return (
    <Accordion activeKey={transactionIsSupported(data) ? undefined : '0'}>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Raw Transaction</Accordion.Header>
        <Accordion.Body>
          <JSONPretty data={data}></JSONPretty>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

function TxnDetailsPageWithResponse({
  data, version
}: {
  data: any | null,
  version: string | null
}) {
  return (
    <MainWrapper>
      <>
        <TxnDetailsTable data={data} version={version} />
        <RawTxn data={data} />
      </>
    </MainWrapper>
  )
}

interface TxnDetailsPageMatch {
  version: string
}

interface TxnDetailsPageProps
  extends RouteComponentProps<TxnDetailsPageMatch> { }

type ErrorProps = ErrorComponentProps<ResponseError | null>

export default function TxnDetailsPage(props: TxnDetailsPageProps) {
  const TxnDetailsErrorComponent: React.FC<ErrorProps> = ({ errors }) => {

    return errors?.type === ResponseErrorType.NOT_FOUND ? (
      <Redirect to='/txn/not-found' />
    ) : (
      <FullPageErrorComponent />
    )
  }
  return (
    <ApiRequestComponent
      request={() => {
        return getTransactionDetails(props.match.params.version);

      }}
      errorComponent={<TxnDetailsErrorComponent errors={null} />}
      refresh={props.match.params.version}
    >
      <TxnDetailsPageWithResponse data={null} version={props.match.params.version} />
    </ApiRequestComponent>
  )
}
