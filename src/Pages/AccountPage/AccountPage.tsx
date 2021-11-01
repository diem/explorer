import { RouteComponentProps } from 'react-router-dom'

interface AccountPageMatch {
  address: string;
}

interface AccountPageProps extends RouteComponentProps<AccountPageMatch> {}

export default function AccountPage(props: AccountPageProps) {
  return (
    // TODO: Make a test suite for this page
    <>{props.match.params.address}</>
  )
}
