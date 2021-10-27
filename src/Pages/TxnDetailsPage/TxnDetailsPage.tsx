import ApiRequestPage from '../../ApiRequestPage'
import { getTransaction } from '../../TransactionClient'
import React from 'react'
import {
  BlockchainTransaction,
  BlockchainUserTxnData,
  PeerToPeerWithMetadataBlockChainScript
} from '../../api_models/BlockchainTransaction'
import { RouteComponentProps } from 'react-router-dom'
import MainWrapper from '../../MainWrapper'
import BTable from 'react-bootstrap/Table'

function ObjectPropertiesTable ({ object }: { object: Object }) {
  return (
      <BTable
          responsive
          bordered
          hover
          className="border"
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

function TxnDetailsPageWithResponse ({ data }: { data: BlockchainTransaction | undefined}) {
  const userTxnData = (data?.transaction as BlockchainUserTxnData)
  const txnScript = (userTxnData.script as PeerToPeerWithMetadataBlockChainScript)
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
    'Script Hash': userTxnData.script_hash
  }
  return (
      <MainWrapper>
          <>
              <h2 className="mb-5" role="note">
                  Transaction Details
              </h2>
              <ObjectPropertiesTable object={txnForDisplay} />
          </>
      </MainWrapper>
  )
}

interface TxnDetailsPageMatch {
    version: string;
}

interface TxnDetailsPageProps extends RouteComponentProps<TxnDetailsPageMatch> {}

export default function TxnDetailsPage (props: TxnDetailsPageProps) {
  return (
        <ApiRequestPage request={getTransaction} args={[props.match.params.version]}>
            <TxnDetailsPageWithResponse data={undefined} />
        </ApiRequestPage>
  )
}
