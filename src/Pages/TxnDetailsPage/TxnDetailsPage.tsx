import ApiRequestComponent from '../../ApiRequestComponent'
import React from 'react'
import {
  BlockchainTransaction,
  BlockchainUserTxnData,
} from '../../api_models/BlockchainTransaction'
import { RouteComponentProps } from 'react-router-dom'
import MainWrapper from '../../MainWrapper'
import { Accordion, Alert } from 'react-bootstrap'
import JSONPretty from 'react-json-pretty'
import { getBlockchainTransaction } from '../../api_clients/BlockchainRestClient'
import ObjectPropertiesTable from '../../ObjectPropertiesTable'
import { AccountAddress } from '../../TableComponents/Link'

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

function UserTxnDetailsTable({ data }: { data: BlockchainUserTxnData }) {
  const txnForDisplay = {
    'Version ID': data.version,
    Status: data.vm_status,
    'Transaction Type': data.type,
    To: AccountAddress({ value: data.payload.arguments[0] }),
    From: AccountAddress({ value: data.sender }),
    Amount: data.payload.arguments[1],
    Expiration: data.expiration_timestamp_secs,
    'Currency Code': data.payload.type_arguments.toString(),
    'Sequence Number': data.sequence_number,
    'Gas Used': data.gas_used,
    'Gas Unit Price': data.gas_unit_price,
    'Max Gas Amount': data.max_gas_amount,
    'Public Key': data.signature.public_key,
    Signature: data.signature.signature,
    'Script Hash': data.hash,
  }
  return <ObjectPropertiesTable object={txnForDisplay} />
}

function transactionIsSupported(data: BlockchainTransaction | undefined) {
  return !!data && data.type === 'user_transaction'
}

function TxnDetailsTable({
  data,
}: {
  data: BlockchainTransaction | undefined
}) {
  return (
    <>
      <h2 className='mb-5' role='note'>
        Transaction Details
      </h2>
      {transactionIsSupported(data) ? (
        <UserTxnDetailsTable data={data as BlockchainUserTxnData} />
      ) : (
        <UnsupportedTxnDetailsTable />
      )}
    </>
  )
}

function RawTxn({ data }: { data: BlockchainTransaction | undefined }) {
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
  data,
}: {
  data: BlockchainTransaction | undefined
}) {
  return (
    <MainWrapper>
      <>
        <TxnDetailsTable data={data} />
        <RawTxn data={data} />
      </>
    </MainWrapper>
  )
}

interface TxnDetailsPageMatch {
  version: string
}

interface TxnDetailsPageProps
  extends RouteComponentProps<TxnDetailsPageMatch> {}

export default function TxnDetailsPage(props: TxnDetailsPageProps) {
  return (
    <ApiRequestComponent
      request={() => {
        return getBlockchainTransaction(props.match.params.version)
      }}
    >
      <TxnDetailsPageWithResponse data={undefined} />
    </ApiRequestComponent>
  )
}
