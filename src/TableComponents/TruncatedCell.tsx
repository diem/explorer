// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react'
import ReactTooltip from 'react-tooltip'

export const TruncatedCell: React.FC<{ value: string }> = ({
  value,
}: {
  value: string
}) => {
  if (!value) {
    return <></>
  }
  const substringLength = 5
  const firstPart = value.substr(0, substringLength)
  const secondPart = value.substr(
    value.length - substringLength,
    substringLength
  )
  return (
    <>
      <div
        data-tip
        data-for={value}
        style={{ fontFamily: 'monospace' }}
        data-testid={value}
      >
        {firstPart}...{secondPart}
      </div>
      <ReactTooltip id={value} effect='solid'>
        {value}
      </ReactTooltip>
    </>
  )
}
