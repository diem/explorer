import BTable from 'react-bootstrap/Table'
import React from 'react'

export default function ObjectPropertiesTable ({ object }: { object: Object }) {
  return (
    <BTable
      responsive
      bordered
      hover
      className="border"
      id="objectPropertiesTable"
    >
      <tbody>
      {Object.keys(object).map(function (property) {
        return (
          <tr key={property}>
            <td>{property}</td>
            {/* @ts-ignore (TS doesn't like property accessor syntax) */}
            <td>{object[property]}</td>
          </tr>
        )
      })}
      </tbody>
    </BTable>
  )
}
