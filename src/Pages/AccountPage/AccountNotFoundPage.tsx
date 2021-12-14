import MainWrapper from '../../MainWrapper'

export const accountNotFoundPageText =
  'Address is not associated with an account.'
export default function AccountNotFoundPage() {
  return (
    <MainWrapper>
      <>{accountNotFoundPageText}</>
    </MainWrapper>
  )
}
