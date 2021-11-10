import React from 'react'

export const BooleanCell: React.FC<{value:boolean}> = ({ value }: { value: boolean }) =>
  (<>{String(value)}</>)
