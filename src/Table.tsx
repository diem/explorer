import { useTable, useFilters, useSortBy, TableOptions } from 'react-table'
import BTable from 'react-bootstrap/Table'

type ColumnWithAccessorDescriptor = {
  Header: string
  accessor: string
}

interface TableProps {
  columns: Array<ColumnWithAccessorDescriptor>
  data: any[]
  className?: string
}

export default function Table(props: TableProps) {
  const { columns, data, className = '' } = props

  // @ts-ignore (Tolerate a deficiency in library type)
  const useTableOptions: TableOptions = { columns, data }
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(useTableOptions, useFilters, useSortBy)

  return (
    <BTable
      responsive
      bordered
      hover
      {...getTableProps()}
      className={`border ${className}`}
    >
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
