import { Link as RouterLink } from 'react-router-dom'
import React from 'react'

interface LinkProps {
  className: string
  linkPrefix: string | undefined
}

export const Link =
  ({ className, linkPrefix = '/' }: LinkProps) =>
  // eslint-disable-next-line react/display-name
    ({ value }: { value: string }) => {
      return (
        <RouterLink
          className={`dx-link ${className}`}
          to={`${linkPrefix}${value}`}
        >
          {value}
        </RouterLink>
      )
    }
Link.displayName = 'DiemExplorerLink'

export const TransactionVersion: React.FC<{ value?: string | number }> = (props: { value?: string | number }) => {
  if (!('value' in props)) {
    return <></>
  }
  return Link({
    className: 'transaction-link',
    linkPrefix: '/txn/',
  })({ ...props, value: props.value!.toString() })
}

export function AccountAddress(props: { value: string }) {
  return Link({
    className: 'address-link',
    linkPrefix: '/address/',
  })(props)
}
