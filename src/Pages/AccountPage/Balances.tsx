import {
  BlockchainAccountResource,
  BlockchainAccountResourceType,
  BlockchainAccountResourceValue
} from '../../api_clients/BlockchainRestClient'
import ObjectPropertiesTable from '../../ObjectPropertiesTable'
import React from 'react'

interface BlockchainAccountBalanceResourceType
  extends BlockchainAccountResourceType {
  // eslint-disable-next-line camelcase
  generic_type_params: { name: string }[]
  name: 'Balance'
}

interface BlockchainAccountBalanceResourceValue
  extends BlockchainAccountResourceValue {
  coin: { value: number }
}

interface BlockchainAccountBalanceResource extends BlockchainAccountResource {
  type: BlockchainAccountBalanceResourceType
  value: BlockchainAccountBalanceResourceValue
}

function parseBalancesFromResources(resources: BlockchainAccountResource[]) {
  const balanceResources = resources.filter((resource) => {
    return (
      resource.type && resource.type.name && resource.type.name === 'Balance'
    )
  }) as BlockchainAccountBalanceResource[]

  const balances = Object.assign(
    {},
    ...balanceResources.map((balance) => ({
      [balance.type.generic_type_params[0].name]: balance.value.coin.value,
    }))
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

export default function Balances({ resources }: {resources: BlockchainAccountResource[]}) {
  const balances = parseBalancesFromResources(resources)
  return (<>
    { Object.keys(balances).length > 0 ? (<BalancesTable balances={balances} />) : null }
  </>)
}
