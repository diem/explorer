import '@testing-library/jest-dom' // provides `expect(...).toBeInTheDocument()`
import TxnDetailsPage from './TxnDetailsPage'
import {
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { getBlockchainTransaction } from '../../api_clients/BlockchainClient'
import { BlockchainTransaction } from '../../api_models/BlockchainTransaction'

jest.mock('../../api_clients/BlockchainClient', () => ({
  ...jest.requireActual('../../api_clients/BlockchainClient'),
  getBlockchainTransaction: jest.fn(),
}))
const mockUserTransaction = {
  bytes:
    '007f7c1917f1191487e3ab429b0dc3b118830f00000000000001e001a11ceb0b010000000701000202020403061004160205181d0735600895011000000001010000020001000003020301010004010300010501060c0108000506080005030a020a020005060c05030a020a020109000b4469656d4163636f756e741257697468647261774361706162696c6974791b657874726163745f77697468647261775f6361706162696c697479087061795f66726f6d1b726573746f72655f77697468647261775f6361706162696c69747900000000000000000000000000000001010104010c0b0011000c050e050a010a020b030b0438000b0511020201070000000000000000000000000000000103585553035855530004034197763c1cc5f25397520530c76e0a860101000000000000000400040040420f0000000000000000000000000003585553d3e7576000000000150020f1910421e2a1433027a7b0e444bed67469b573adba72353ad3cde20b54e1b7a040e7b6730712283f887f52f9dd7bfb9210801c3b1093fe13ca9a5d00f129543cc0eda55d66b2d8214e5acc848626685c6098f9c09a127ee15bbf545ae69495450f',
  events: [],
  gas_used: 511,
  hash: 'f77681996cc577851ed50b588b4de6e7290b615e05625040d24a3ceec7f9c624',
  transaction: {
    chain_id: 21,
    expiration_timestamp_secs: 1616373715,
    gas_currency: 'XUS',
    gas_unit_price: 0,
    max_gas_amount: 1000000,
    public_key:
      'f1910421e2a1433027a7b0e444bed67469b573adba72353ad3cde20b54e1b7a0',
    script: {
      amount: 1,
      arguments: [
        '{ADDRESS: 4197763C1CC5F25397520530C76E0A86}',
        '{U64: 1}',
        '{U8Vector: 0x}',
        '{U8Vector: 0x}',
      ],
      code: 'a11ceb0b010000000701000202020403061004160205181d0735600895011000000001010000020001000003020301010004010300010501060c0108000506080005030a020a020005060c05030a020a020109000b4469656d4163636f756e741257697468647261774361706162696c6974791b657874726163745f77697468647261775f6361706162696c697479087061795f66726f6d1b726573746f72655f77697468647261775f6361706162696c69747900000000000000000000000000000001010104010c0b0011000c050e050a010a020b030b0438000b05110202',
      currency: 'XUS',
      metadata: 'sooo meta',
      metadata_signature: 'Hitchcock goes here',
      receiver: '4197763c1cc5f25397520530c76e0a86',
      type: 'peer_to_peer_with_metadata',
      type_arguments: ['XUS'],
    },
    script_bytes:
      'e001a11ceb0b010000000701000202020403061004160205181d0735600895011000000001010000020001000003020301010004010300010501060c0108000506080005030a020a020005060c05030a020a020109000b4469656d4163636f756e741257697468647261774361706162696c6974791b657874726163745f77697468647261775f6361706162696c697479087061795f66726f6d1b726573746f72655f77697468647261775f6361706162696c69747900000000000000000000000000000001010104010c0b0011000c050e050a010a020b030b0438000b0511020201070000000000000000000000000000000103585553035855530004034197763c1cc5f25397520530c76e0a8601010000000000000004000400',
    script_hash:
      '04ea43107fafc12adcd09f6c68d63e194675d0ce843a7faf7cceb6c813db9d9a',
    secondary_public_keys: [],
    secondary_signature_schemes: [],
    secondary_signatures: [],
    secondary_signers: [],
    sender: '7f7c1917f1191487e3ab429b0dc3b118',
    sequence_number: 3971,
    signature:
      'e7b6730712283f887f52f9dd7bfb9210801c3b1093fe13ca9a5d00f129543cc0eda55d66b2d8214e5acc848626685c6098f9c09a127ee15bbf545ae69495450f',
    signature_scheme: 'Scheme::Ed25519',
    type: 'user',
  },
  version: 66651271,
  vm_status: {
    type: 'executed',
  },
}

const mockMetadataTransaction = {
  bytes:
    '0220acc2e890f996e8d710a56aeddf01e5797f2366616a9d0d349ebc8d784c5c2880e742000000000000d12bbd0af5ce050010003aaee9f2794e4d2863f58e5ba0434f1b8a315ecb5da3bf65324e5c98d7c5d21ee66634a9d307e598a9001c70350f573b4f0b8a914678fd087935cf01b7cc783ec43d8df8e6a8d192cb7db7d88ceaaa49e14093c12d40d8fe9ac2af30bc6fc463e721fbc1999c3c721caedfea9ab00d76e8f447ac03d161366b1c95e3230aa98dba6983cdfdd9577a0220264a4c52ab92d4d3baf2716b09d4f863176dc7798094511281e2e59b01c36da19fd56e067aab257bf8e91862d2d41d0629d9618800b68cf702c43aff3d9ada6a88041bd13fc0a38f4b8de6ef37e84402873b33feedc8dacb8b498a61bddfb9cccc2ddc8ba5ed5d9b97d7f1ca058bcfc035a072e887ed5d9b97d7f1ca058bcfc035a072e887',
  events: [],
  gas_used: 100000000,
  hash: 'c5c969761211f65d41a8a747f66e45309a45e71c03ba915412baabfaea247cea',
  transaction: {
    timestamp_usecs: 1634926726032337,
    type: 'blockmetadata',
  },
  version: 321960031,
  vm_status: {
    type: 'executed',
  },
}

const renderWithTransaction = async (
  txn: BlockchainTransaction = mockUserTransaction
) => {
  // @ts-ignore TS is bad at mocking
  getBlockchainTransaction.mockResolvedValue({
    errors: null,
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

it('should display data in a table for user transactions', async function () {
  await renderWithTransaction()

  expect(document.getElementById('objectPropertiesTable')).not.toEqual(null)
  const detailsTable = document.getElementById('objectPropertiesTable')!
  expect(within(detailsTable).queryByText('Version ID')).toBeInTheDocument()
  expect(within(detailsTable).queryByText('Status')).toBeInTheDocument()
  expect(
    within(detailsTable).queryByText('Transaction Type')
  ).toBeInTheDocument()
  expect(within(detailsTable).queryByText('From')).toBeInTheDocument()
  expect(within(detailsTable).queryByText('To')).toBeInTheDocument()
  expect(within(detailsTable).queryByText('Amount')).toBeInTheDocument()
  expect(within(detailsTable).queryByText('Expiration')).toBeInTheDocument()
  expect(within(detailsTable).queryByText('Currency')).toBeInTheDocument()
  expect(within(detailsTable).queryByText('Metadata')).toBeInTheDocument()
  expect(
    within(detailsTable).queryByText('Metadata Signature')
  ).toBeInTheDocument()
  expect(
    within(detailsTable).queryByText('Sequence Number')
  ).toBeInTheDocument()
  expect(within(detailsTable).queryByText('Gas Used')).toBeInTheDocument()
  expect(within(detailsTable).queryByText('Gas Unit Price')).toBeInTheDocument()
  expect(within(detailsTable).queryByText('Max Gas Amount')).toBeInTheDocument()
  expect(within(detailsTable).queryByText('Public Key')).toBeInTheDocument()
  expect(within(detailsTable).queryByText('Signature')).toBeInTheDocument()
  expect(within(detailsTable).queryByText('Script Hash')).toBeInTheDocument()

  expect(within(detailsTable).queryByText('66651271')).toBeInTheDocument()
  expect(within(detailsTable).queryByText('executed')).toBeInTheDocument()
  expect(within(detailsTable).queryByText('user')).toBeInTheDocument()
  expect(
    within(detailsTable).queryByText('7f7c1917f1191487e3ab429b0dc3b118')
  ).toBeInTheDocument()
  expect(
    within(detailsTable).queryByText('4197763c1cc5f25397520530c76e0a86')
  ).toBeInTheDocument()
  expect(within(detailsTable).queryByText('1')).toBeInTheDocument()
  expect(within(detailsTable).queryByText('1616373715')).toBeInTheDocument()
  expect(within(detailsTable).queryByText('XUS')).toBeInTheDocument()
  expect(within(detailsTable).queryByText('XUS')).toBeInTheDocument()
  expect(within(detailsTable).queryByText('sooo meta')).toBeInTheDocument()
  expect(
    within(detailsTable).queryByText('Hitchcock goes here')
  ).toBeInTheDocument()
  expect(within(detailsTable).queryByText('511')).toBeInTheDocument()
  expect(within(detailsTable).queryByText('0')).toBeInTheDocument()
  expect(within(detailsTable).queryByText('1000000')).toBeInTheDocument()
  expect(
    within(detailsTable).queryByText(
      'f1910421e2a1433027a7b0e444bed67469b573adba72353ad3cde20b54e1b7a0'
    )
  ).toBeInTheDocument()
  expect(
    within(detailsTable).queryByText(
      'e7b6730712283f887f52f9dd7bfb9210801c3b1093fe13ca9a5d00f129543cc0eda55d66b2d8214e5acc848626685c6098f9c09a127ee15bbf545ae69495450f'
    )
  ).toBeInTheDocument()
  expect(
    within(detailsTable).queryByText(
      '04ea43107fafc12adcd09f6c68d63e194675d0ce843a7faf7cceb6c813db9d9a'
    )
  ).toBeInTheDocument()
})

it('should display a helpful message for metadata transactions', async function () {
  await renderWithTransaction(mockMetadataTransaction)
  expect(screen.queryByText('Unsupported Transaction')).toBeInTheDocument()
})
