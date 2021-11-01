import {
  setupIntegrationTestApiServer, setBlockchainRestApiResponse, setBlockchainRestNetworkError
} from '../../test_utils/IntegrationTestApiServerTools'
import { getAccountResources } from './BlockchainRestClient'

const errorResponse = { code: 400, message: 'invalid account address: E58479132486A975C6FF1EF1F' }
const goodResponse = [{ type: { type: 'struct', address: '0x1', module: 'VASP', name: 'ParentVASP', generic_type_params: [] }, value: { num_children: '1784' } }, { type: { type: 'struct', address: '0x1', module: 'Event', name: 'EventHandleGenerator', generic_type_params: [] }, value: { addr: '0xe58479132486a97579eff0ec6ff1ef1f', counter: '4' } }, { type: { type: 'struct', address: '0x1', module: 'Roles', name: 'RoleId', generic_type_params: [] }, value: { role_id: '5' } }, { type: { type: 'struct', address: '0x1', module: 'DiemAccount', name: 'Balance', generic_type_params: [{ type: 'struct', address: '0x1', module: 'XDX', name: 'XDX', generic_type_params: [] }] }, value: { coin: { value: '0' } } }, { type: { type: 'struct', address: '0x1', module: 'DiemAccount', name: 'Balance', generic_type_params: [{ type: 'struct', address: '0x1', module: 'XUS', name: 'XUS', generic_type_params: [] }] }, value: { coin: { value: '13976000000' } } }, { type: { type: 'struct', address: '0x1', module: 'DiemAccount', name: 'DiemAccount', generic_type_params: [] }, value: { authentication_key: '0xeca9a32d2f1e3309e6be33a6a4688d1be58479132486a97579eff0ec6ff1ef1f', key_rotation_capability: { vec: [{ account_address: '0xe58479132486a97579eff0ec6ff1ef1f' }] }, received_events: { counter: '12', guid: '0x0200000000000000e58479132486a97579eff0ec6ff1ef1f' }, sent_events: { counter: '1784', guid: '0x0300000000000000e58479132486a97579eff0ec6ff1ef1f' }, sequence_number: '4518', withdraw_capability: { vec: [{ account_address: '0xe58479132486a97579eff0ec6ff1ef1f' }] } } }, { type: { type: 'struct', address: '0x1', module: 'AccountFreezing', name: 'FreezingBit', generic_type_params: [] }, value: { is_frozen: false } }, { type: { type: 'struct', address: '0x1', module: 'DualAttestation', name: 'Credential', generic_type_params: [] }, value: { base_url: '0x', base_url_rotation_events: { counter: '0', guid: '0x0100000000000000e58479132486a97579eff0ec6ff1ef1f' }, compliance_key_rotation_events: { counter: '0', guid: '0x0000000000000000e58479132486a97579eff0ec6ff1ef1f' }, compliance_public_key: '0x', expiration_date: '18446744073709551615', human_name: '0x4354205641535035' } }]
const fakeAddress = 'theAddressDoesntMatterSinceWereMockingTheServiceWorkersWithMsw'
const path = `/accounts/${fakeAddress}/resources`
const server = setupIntegrationTestApiServer()

describe('Blockchain REST Client', function () {
  it('should pass data through', async function () {
    const expected = { data: goodResponse, errors: null }
    setBlockchainRestApiResponse(server, path, goodResponse)
    const result = await getAccountResources(fakeAddress)
    expect(result).toEqual(expected)
  })
  it('should pass errors through', async function () {
    const expected = { data: null, errors: [{ message: errorResponse.message }] }
    setBlockchainRestApiResponse(server, path, errorResponse)
    const result = await getAccountResources(fakeAddress)
    expect(result).toEqual(expected)
  })

  it('should pass network errors through like any other error', async function () {
    const error = 'The internet went boom 💥'
    const expected = { data: null, errors: [{ message: `FetchError: request to https://fn0api.premainnet.aosdev.diem.com${path} failed, reason: ${error}` }] }
    setBlockchainRestNetworkError(server, path, error)
    const result = await getAccountResources(fakeAddress)
    expect(result).toEqual(expected)
  })
})
