// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

export const mockAccountPageText = 'This is account page'
const mockAccountPage = (props: { match: { params: { address: string } } }) => {
  return (
    <div role='main'>
      {props.match.params.address}
      {mockAccountPageText}
    </div>
  )
}
export default mockAccountPage
