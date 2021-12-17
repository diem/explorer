import MainWrapper from '../../MainWrapper'

export const txnNotFoundPageText = 'Transaction not found.'
export default function TxnNotFoundPage() {
  return (
    <MainWrapper>
      <>{txnNotFoundPageText}</>
    </MainWrapper>
  )
}
