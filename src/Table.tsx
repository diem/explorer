import { useTable, useFilters, useSortBy, TableOptions } from 'react-table'
import BTable from 'react-bootstrap/Table'
import React from 'react'

type ColumnWithAccessorDescriptor<T, K extends keyof T> = {
  Header: string
  accessor: K
  Cell?: React.FC<{value: T[K]}>
}

export function column<C>(header: string, accessor: keyof C, cell?: React.FC<{ value: C[typeof accessor] }>) {
  return {
    Header: header,
    accessor,
    Cell: cell,
  }
}

type TableProps<T extends { [key: string]: any }> = {
  columns: ColumnWithAccessorDescriptor<T, keyof T>[]
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
