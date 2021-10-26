import React from 'react'
import ReactTooltip from 'react-tooltip'

export function TruncatedCell({ value }: { value: string }) {
  const substringLength = 5
  const firstPart = value.substr(0, substringLength)
  const secondPart = value.substr(value.length - substringLength, substringLength)
  return (
      <>
        <div data-tip={value} style={{ fontFamily: 'monospace' }}>
            {firstPart}...{secondPart}
        </div>
        <ReactTooltip />
      </>
  )
}
