import { RouteComponentProps } from 'react-router-dom'
import ApiRequestPage from '../../ApiRequestPage'
import {
  BlockchainAccountResource,
  getAccountResources,
  getAccountModules,
  BlockchainAccountResourceType, BlockchainAccountResourceValue
} from '../../api_clients/BlockchainRestClient'
import ObjectPropertiesTable from '../../ObjectPropertiesTable'
import { DataOrErrors} from '../../api_clients/FetchTypes'
import MainWrapper from '../../MainWrapper'
import JSONPretty from 'react-json-pretty'
import React from 'react'
import { Alert } from 'react-bootstrap'

interface BlockchainAccountModule {
  any: any
}

interface AccountPageWithResponseProps {
  resources: BlockchainAccountResource[],
  modules: BlockchainAccountModule[]
}

interface BlockchainAccountBalanceResourceType extends BlockchainAccountResourceType{
  // eslint-disable-next-line camelcase
  generic_type_params: {name: string}[]
  name: 'Balance'
}

interface BlockchainAccountBalanceResourceValue extends BlockchainAccountResourceValue{
  coin: {value: number}
}

interface BlockchainAccountBalanceResource extends BlockchainAccountResource{
  type: BlockchainAccountBalanceResourceType,
  value: BlockchainAccountBalanceResourceValue
}

function parseBalancesFromResources(resources: BlockchainAccountResource[]) {
  const balanceResources = resources.filter((resource) => {
    return resource.type.name === 'Balance'
  }) as BlockchainAccountBalanceResource[]

  const balances = Object.assign(
    {},
    ...balanceResources.map(balance => ({ [balance.type.generic_type_params[0].name]: balance.value.coin.value }))
  )
  return balances
}

function BalancesTable({ balances }: { balances: any }) {
  return (
    <>
      <h2>Balances</h2>
      <ObjectPropertiesTable object={balances} />
    </>
  )
}

function UnsupportedAccountCard () {
  return (
    <Alert variant={'warning'} style={{ width: '30rem' }}>
      <h4>Unsupported Account</h4>
      <p>Diem Explorer is still being built and does not support this type of account yet.</p>
      <p>In the mean time the raw data is displayed here for your convenience</p>
    </Alert>
  )
}

function AccountPageWithResponse({ data }: { data: AccountPageWithResponseProps }) {
  const balances = parseBalancesFromResources(data.resources)

  return (
    <MainWrapper>
      <>
        <h1>Account Details</h1>
        { Object.keys(balances).length > 0
          ? <BalancesTable balances={balances} />
          : <UnsupportedAccountCard />
        }
        <h2>Raw Resources</h2>
        <JSONPretty data={data.resources} id="rawResources" />
        <h2>Raw Smart Contracts</h2>
        <JSONPretty data={data.modules} id="rawModules" />
      </>
    </MainWrapper>
  )
}

interface AccountPageMatch {
  address: string;
}

interface AccountPageProps extends RouteComponentProps<AccountPageMatch> {}

async function getAccountData(address: string): Promise<DataOrErrors<AccountPageWithResponseProps>> {
  const resourcesResponse = await getAccountResources(address)
  const modulesResponse = await getAccountModules(address)
  if (resourcesResponse.errors || modulesResponse.errors) {
    // @ts-ignore nulls work in concat -- this will smash together the error arrays then remove nulls
    const allErrors = [].concat(resourcesResponse.errors).concat(modulesResponse.errors).filter((error) => error !== null)
    return {
      data: null,
      errors: allErrors
    }
  } else {
    return {
      data: {
        resources: resourcesResponse.data!,
        modules: modulesResponse.data!
      },
      errors: null
    }
  }
}

export default function AccountPage(props: AccountPageProps) {
  const nullData = {
    resources: [],
    modules: []
  }
  return (
    <ApiRequestPage request={getAccountData} args={[props.match.params.address]}>
      <AccountPageWithResponse data={nullData} />
    </ApiRequestPage>
  )
}
