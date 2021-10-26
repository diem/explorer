import { Link as RouterLink } from 'react-router-dom'
import React from 'react'

interface LinkProps {
    className: string
    linkPrefix: string | undefined
}
// eslint-disable-next-line react/display-name
export const Link = ({ className, linkPrefix = '/' }: LinkProps) => ({ value }: { value: string }) => {
  return (
        <RouterLink className={`dx-link ${className}`} to={`${linkPrefix}${value}`}>
            {value}
        </RouterLink>
  )
}
Link.displayName = 'DiemExplorerLink'

export function TransactionVersion(props: { value: string }) {
  return Link({ className: 'transaction-link', linkPrefix: '/txn/' })(props)
}
