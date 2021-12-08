import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import { getCanonicalAddress } from '../utils'

interface LinkProps {
  className: string
  linkPrefix: string | undefined
}

export function Link({
  className,
  linkPrefix = '/',
}: LinkProps): React.FC<{ value: string }> {
  // eslint-disable-next-line react/display-name
  return ({ value }: { value: string }) => {
    return (
      <RouterLink
        className={`dx-link ${className}`}
        to={`${linkPrefix}${value}`}
      >
        {value}
      </RouterLink>
    )
  }
}
Link.displayName = 'DiemExplorerLink'

export type TxnVersionProps = { value?: string | number }
export const TransactionVersion: React.FC<TxnVersionProps> = (
  props: TxnVersionProps
) => {
  if (!('value' in props)) {
    return <></>
  }
  return Link({
    className: 'transaction-link',
    linkPrefix: '/txn/',
  })({ ...props, value: props.value!.toString() })
}

export type AccountAddressProps = { value: string | null }
export const AccountAddress: React.FC<AccountAddressProps> = (
  props: AccountAddressProps
) => {
  if (props.value === '' || props.value === null) {
    return <></>
  }

  const maybeAddress = getCanonicalAddress(props.value)

  if (maybeAddress.err) {
    console.error(
      `Unable to get canonical address from: ${props.value}`,
      maybeAddress.val
    )
    return <>{maybeAddress.val}</>
  }

  return Link({
    className: 'address-link',
    linkPrefix: '/address/',
  })({ ...props, value: maybeAddress.val })
}
