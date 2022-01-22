// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react'

export const BooleanCell: React.FC<{ value: boolean }> = ({
  value,
}: {
  value: boolean
}) => <>{String(value)}</>
