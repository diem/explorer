// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import BTable from 'react-bootstrap/Table'
import React, { ReactChild, ReactElement } from 'react'

interface ObjectPropertiesTableProps {
  object: {
    [key: string]:
    | string
    | number
    | undefined
    | null
    | ReactChild
    | ReactElement
  }
}
export default function ObjectPropertiesTable({
  object,
}: ObjectPropertiesTableProps) {
  function txtrep(txt: any) {
    if (typeof (txt) === "string") {
      return txt.replace(/_/g, " ")
    }
    return txt
  }

  return (
    <BTable
      responsive
      bordered
      hover
      className='border objectPropertiesTable'
      id='objectPropertiesTable'
    >
      <tbody>
        {Object.keys(object).map(function (property) {
          return (
            <tr key={property}>
              <td className="txtCaptil">{property.replace(/_/g, " ")}</td>
              {/* @ts-ignore (TS doesn't like property accessor syntax) */}
              <td className="txtCaptil">{txtrep(object[property])}</td>
            </tr>
          )
        })}
      </tbody>
    </BTable>
  )
}
