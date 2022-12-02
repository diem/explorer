// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import { Ok, Err, Result } from 'ts-results'

export function getCanonicalAddress(address: string): Result<string, string> {
  console.log("address", address)
  address = address.trim().toLowerCase()
  address = address.replace(/^(0x)/, '')
  if (!/^[0-9A-F]+$/i.test(address)) {
    return Err(`getCanonicalAddress received Invalid address type : ${address}`)
  }
  if (address.length < 32) {
    // pad with 0s
    address = '0'.repeat(32 - address.length) + address
  }
  return Ok(address)
}
export function getSearchRouteFromSearchTerm(term: string): string | null {
  if (/^[0-9]+$/i.test(term)) {
    return `/txn/${term}`
  }

  const maybeAddress = getCanonicalAddress(term)
  if (maybeAddress.ok) {
    return `/address/${maybeAddress.val}`
  }

  return null
}