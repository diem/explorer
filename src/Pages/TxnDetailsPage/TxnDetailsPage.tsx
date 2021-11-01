import ApiRequestPage from '../../ApiRequestPage'
import React from 'react'
import {
  BlockchainTransaction,
  BlockchainUserTxnData,
  PeerToPeerWithMetadataBlockChainScript,
} from '../../api_models/BlockchainTransaction'
import { RouteComponentProps } from 'react-router-dom'
import MainWrapper from '../../MainWrapper'
import BTable from 'react-bootstrap/Table'
import { Accordion, Alert } from 'react-bootstrap'
import JSONPretty from 'react-json-pretty'
import { getBlockchainTransaction } from '../../api_clients/BlockchainJsonRpcClient'

function ObjectPropertiesTable({ object }: { object: Object }) {
  return (
    <BTable
      responsive
      bordered
      hover
      className="border"
      id="objectPropertiesTable"
    >
      <tbody>
        {Object.keys(object).map(function (property) {
          return (
            <tr key={property}>
              <td>{property}</td>
              {/* @ts-ignore (TS doesn't like property accessor syntax) */}
              <td>{object[property]}</td>
            </tr>
          )
        })}
      </tbody>
    </BTable>
  )
}

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

function UserTxnDetailsTable({
  data,
}: {
  data: BlockchainTransaction | undefined
}) {
  const userTxnData = data?.transaction as BlockchainUserTxnData
  const txnScript = userTxnData.script as PeerToPeerWithMetadataBlockChainScript
  const txnForDisplay = {
    'Version ID': data?.version,
    Status: data?.vm_status?.type,
    'Transaction Type': data?.transaction?.type,
    From: userTxnData.sender,
    To: txnScript.receiver,
    Amount: txnScript.amount,
    Expiration: userTxnData.expiration_timestamp_secs,
    Currency: userTxnData.gas_currency,
    Metadata: txnScript.metadata,
    'Metadata Signature': txnScript.metadata_signature,
    'Sequence Number': userTxnData.sequence_number,
    'Gas Used': data?.gas_used,
    'Gas Unit Price': userTxnData.gas_unit_price,
    'Max Gas Amount': userTxnData.max_gas_amount,
    'Public Key': userTxnData.public_key,
    Signature: userTxnData.signature,
    'Script Hash': userTxnData.script_hash,
  }
  return <ObjectPropertiesTable object={txnForDisplay} />
}

function transactionIsSupported(data: BlockchainTransaction | undefined) {
  return !!data && !!data.transaction && data.transaction.type === 'user'
}

function TxnDetailsTable({
  data,
}: {
  data: BlockchainTransaction | undefined
}) {
  return (
    <>
      <h2 className="mb-5" role="note">
        Transaction Details
      </h2>
      {transactionIsSupported(data)
        ? (
          <UserTxnDetailsTable data={data} />
        )
        : (
          <UnsupportedTxnDetailsTable />
        )}
    </>
  )
}

function RawTxn({ data }: { data: BlockchainTransaction | undefined }) {
  return (
    <Accordion activeKey={transactionIsSupported(data) ? undefined : '0'}>
      <Accordion.Item eventKey="0">
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
    <ApiRequestPage
      request={() => {
          return getBlockchainTransaction(props.match.params.version)
        }}
    >
      <TxnDetailsPageWithResponse data={undefined} />
    </ApiRequestPage>
  )
}
