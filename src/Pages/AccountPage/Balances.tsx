// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import ObjectPropertiesTable from '../../ObjectPropertiesTable'
import React from 'react'
import {
  BalanceResource,
  getCurrency,
  isBalanceResource,
  KnownCurrency,
  Resource,
} from '../../api_clients/BlockchainRestTypes'

function parseBalancesFromResources(
  resources: Resource[]
): Record<KnownCurrency, string> {
  const balanceResources = resources.filter(
    isBalanceResource
  ) as BalanceResource[]

  return Object.assign(
    {},
    ...balanceResources.map((balance) => {
      const currency = getCurrency(balance)
      const amount = parseInt(balance.value.coin.value)
      return { [currency]: amount }
    })
  )
}

function BalancesTable({
  balances,
}: {
  balances: Record<KnownCurrency, string>
}) {
  return (
    <>
      <h2>Balances</h2>
      <ObjectPropertiesTable object={balances} />
    </>
  )
}

export default function Balances({ data }: { data: Resource[] }) {
  const balances = parseBalancesFromResources(data)
  return (
    <>
      {Object.keys(balances).length > 0 ? (
        <BalancesTable balances={balances} />
      ) : null}
    </>
  )
}
