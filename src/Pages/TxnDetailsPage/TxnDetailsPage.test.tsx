import '@testing-library/jest-dom' // provides `expect(...).toBeInTheDocument()`
import TxnDetailsPage from './TxnDetailsPage'
import {
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { getBlockchainTransaction } from '../../api_clients/BlockchainRestClient'
import {
  BlockchainBlockmetadataTxnData,
  BlockchainTransaction,
  BlockchainUnknownTxnData,
  BlockchainUserTxnData,
  BlockchainWritesetTxnData,
} from '../../api_models/BlockchainTransaction'

jest.mock('../../api_clients/BlockchainRestClient', () => ({
  ...jest.requireActual('../../api_clients/BlockchainRestClient'),
  getBlockchainTransaction: jest.fn(),
}))
const mockUserTransaction: BlockchainUserTxnData = {
  payload: {
    type: 'script_function_payload',
    function: '0x1::PaymentScripts::peer_to_peer_with_metadata',
    arguments: ['4197763c1cc5f25397520530c76e0a86', '1', '0x', '0x'],
    type_arguments: ['0x1::XUS::XUS'],
  },
  type: 'user_transaction',
  version: '66651271',
  hash: 'f77681996cc577851ed50b588b4de6e7290b615e05625040d24a3ceec7f9c624',
  state_root_hash:
    '0x1f822350b6b40193864ca6df51517a50ffa7e295f1a6105c4dcea86bd819e799',
  event_root_hash:
    '0x75f0293b1b56c8a074d6375e47d8e645186df82059c04e55237ef8fe4fb9ad66',
  gas_used: '511',
  success: true,
  vm_status: 'Executed successfully',
  sender: '0x7f7c1917f1191487e3ab429b0dc3b118',
  sequence_number: '3971',
  max_gas_amount: '1000000',
  gas_unit_price: '0',
  gas_currency_code: 'XUS',
  expiration_timestamp_secs: '1616373715',
  signature: {
    type: 'Scheme::Ed25519',
    public_key:
      'f1910421e2a1433027a7b0e444bed67469b573adba72353ad3cde20b54e1b7a0',
    signature:
      'e7b6730712283f887f52f9dd7bfb9210801c3b1093fe13ca9a5d00f129543cc0eda55d66b2d8214e5acc848626685c6098f9c09a127ee15bbf545ae69495450f',
  },
  events: [],
}

const mockUnsupportedTransaction: BlockchainTransaction = {
  type: '',
  events: [],
  gas_used: '100000000',
  hash: 'c5c969761211f65d41a8a747f66e45309a45e71c03ba915412baabfaea247cea',
  version: '321960031',
  vm_status: 'Executed successfully',
}

const renderWithTransaction = async (
  txn: BlockchainTransaction = mockUserTransaction
) => {
  // @ts-ignore TS is bad at mocking
  getBlockchainTransaction.mockResolvedValue({
    data: txn,
  })
  const mockHistory = {
    history: {} as any,
    location: {} as any,
    match: {
      path: '/txn/:version',
      url: '/txn/66651271',
      isExact: true,
      params: {
        version: '66651271',
      },
    },
  }
  render(
    <BrowserRouter>
      <TxnDetailsPage {...mockHistory} />
    </BrowserRouter>
  )
  await waitForElementToBeRemoved(screen.queryByRole('loading'))
}

describe('TxnDetailsPage', function () {
  it('should get data from the BlockchainRestClient', async function () {
    await renderWithTransaction()

    expect(getBlockchainTransaction).toHaveBeenCalledTimes(1)
    expect(getBlockchainTransaction).toHaveBeenCalledWith(
      mockUserTransaction.version.toString()
    )
  })
  describe('Supported Transactions', () => {
    it('should display data in a table for user transactions', async function () {
      await renderWithTransaction()
      expect(document.getElementById('objectPropertiesTable')).not.toEqual(null)
      const detailsTable = document.getElementById('objectPropertiesTable')!
      expect(within(detailsTable).queryByText('Version ID')).toBeInTheDocument()
      expect(within(detailsTable).queryByText('Status')).toBeInTheDocument()
      expect(
        within(detailsTable).queryByText('Transaction Type')
      ).toBeInTheDocument()
      expect(within(detailsTable).queryByText('To')).toBeInTheDocument()
      expect(within(detailsTable).queryByText('From')).toBeInTheDocument()
      expect(within(detailsTable).queryByText('Amount')).toBeInTheDocument()
      expect(within(detailsTable).queryByText('Expiration')).toBeInTheDocument()
      expect(
        within(detailsTable).queryByText('Currency Code')
      ).toBeInTheDocument()
      expect(
        within(detailsTable).queryByText('Sequence Number')
      ).toBeInTheDocument()
      expect(within(detailsTable).queryByText('Gas Used')).toBeInTheDocument()
      expect(
        within(detailsTable).queryByText('Gas Unit Price')
      ).toBeInTheDocument()
      expect(
        within(detailsTable).queryByText('Max Gas Amount')
      ).toBeInTheDocument()
      expect(within(detailsTable).queryByText('Public Key')).toBeInTheDocument()
      expect(within(detailsTable).queryByText('Signature')).toBeInTheDocument()
      expect(
        within(detailsTable).queryByText('Script Hash')
      ).toBeInTheDocument()

      expect(within(detailsTable).queryByText('66651271')).toBeInTheDocument()
      expect(
        within(detailsTable).queryByText('Executed successfully')
      ).toBeInTheDocument()
      expect(
        within(detailsTable).queryByText('user_transaction')
      ).toBeInTheDocument()
      expect(
        within(detailsTable).queryByText('7f7c1917f1191487e3ab429b0dc3b118')
      ).toBeInTheDocument()
      expect(
        within(detailsTable).queryByText('4197763c1cc5f25397520530c76e0a86')
      ).toBeInTheDocument()
      expect(within(detailsTable).queryByText('1')).toBeInTheDocument()
      expect(within(detailsTable).queryByText('1616373715')).toBeInTheDocument()
      expect(
        within(detailsTable).queryByText('0x1::XUS::XUS')
      ).toBeInTheDocument()
      expect(within(detailsTable).queryByText('511')).toBeInTheDocument()
      expect(within(detailsTable).queryByText('0')).toBeInTheDocument()
      expect(within(detailsTable).queryByText('1000000')).toBeInTheDocument()
      expect(
        within(detailsTable).queryByText(
          mockUserTransaction.signature.public_key
        )
      ).toBeInTheDocument()
      expect(
        within(detailsTable).queryByText(
          mockUserTransaction.signature.signature
        )
      ).toBeInTheDocument()
    })
  })

  const metadataTxn: BlockchainBlockmetadataTxnData = {
    ...mockUnsupportedTransaction,
    type: 'blockmetadata',
  }
  const writesetTxn: BlockchainWritesetTxnData = {
    ...mockUnsupportedTransaction,
    type: 'writeset',
  }
  const unknownTxn: BlockchainUnknownTxnData = {
    ...mockUnsupportedTransaction,
    type: 'unknown',
  }
  describe('Unsupported Transactions', () => {
    ;[metadataTxn, writesetTxn, unknownTxn].forEach((txn) => {
      it(`should display a helpful message for ${txn.type} transactions`, async () => {
        await renderWithTransaction(txn)
        expect(
          screen.queryByText('Unsupported Transaction')
        ).toBeInTheDocument()
      })
    })
  })
})
