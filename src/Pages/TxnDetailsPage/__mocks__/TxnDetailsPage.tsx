export const mockTxnDetailsPageText = 'This is txn details page'
const mockTxnDetailsPage = (props: {
  match: { params: { version: number } }
}) => {
  return (
    <div role="main">
      {props.match.params.version}
      {mockTxnDetailsPageText}
    </div>
  )
}
export default mockTxnDetailsPage
