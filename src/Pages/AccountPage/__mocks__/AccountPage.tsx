export const mockAccountPageText = 'This is account page'
const mockAccountPage = (props: { match: { params: { address: string } } }) => {
  return (
    <div role="main">
      {props.match.params.address}
      {mockAccountPageText}
    </div>
  )
}
export default mockAccountPage
