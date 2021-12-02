import { useTable, useFilters, useSortBy, TableOptions } from 'react-table'
import BTable from 'react-bootstrap/Table'
import React from 'react'

export type ColumnWithAccessorDescriptor<T> = {
  Header: string
  accessor: keyof T
  Cell?: React.FC<{value:any}>
}

type TableProps<T> = {
  columns: ColumnWithAccessorDescriptor<T>[]
  data: T[]
  className?: string
  id?: string
}

export default function Table<T>(props: TableProps<T>) {
  const { columns, data, className = '', id = '' } = props

  // @ts-ignore (Tolerate a deficiency in library type)
  const useTableOptions: TableOptions = { columns, data }
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(useTableOptions, useFilters, useSortBy)

  const btableProps = {
    responsive: true,
    bordered: true,
    hover: true,
    ...getTableProps(),
    className: `border ${className}`,
    id: id || undefined,
  }
  return (
    <BTable {...btableProps}>
      <thead>
        {headerGroups.map((headerGroup, hgIndex: number) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            key={`header-group-${hgIndex}`}
          >
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} key={`header-${column.Header}`}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} key={`row-${row.id}`} role="menuitem">
              {row.cells.map((cell, cellIndex) => {
                return (
                  <td {...cell.getCellProps()} key={`cell-${cellIndex}`}>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </BTable>
  )
}
