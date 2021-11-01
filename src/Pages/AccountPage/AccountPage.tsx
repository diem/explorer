import { RouteComponentProps } from 'react-router-dom'

interface AccountPageMatch {
  address: string;
}

interface AccountPageProps extends RouteComponentProps<AccountPageMatch> {}

export default function AccountPage(props: AccountPageProps) {
  return (
    <>{props.match.params.address}</>
  )
}
