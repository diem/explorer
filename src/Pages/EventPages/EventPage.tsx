// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import ApiRequestComponent from '../../ApiRequestComponent'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import React from 'react'
import MainWrapper from '../../MainWrapper'
import Table from '../../Table'

interface EventPageProps {
  query: Object
  columns: {
    Header: string
    accessor: string
    Cell?: React.FC<{ value: any }>
  }[]
  tableName: string
  eventType: string
}

function EventPageWithResponse({
  data,
  columns,
  eventType,
}: {
  data: any[]
  columns: EventPageProps['columns']
  eventType: EventPageProps['eventType']
}) {
  const showPagination = (data: any = [], count: number = 10) => {
    return data.length > count
  }
  return (
    <MainWrapper>
      <>
        <h3 className='mb-2'>{eventType} Events</h3>
        <Table columns={columns} data={data}
          isPaginated={true}
          pSize={10}
          showPaginationCus={showPagination(data, 10)}
          noOfRec={[10, 25, 50]}
        />
      </>
    </MainWrapper>
  )
}

const EventPage = ({
  query,
  columns,
  tableName,
  eventType,
}: EventPageProps) => {
  return (
    <ApiRequestComponent
      request={() => postQueryToAnalyticsApi(query, tableName)}
    >
      <EventPageWithResponse
        data={[]}
        columns={columns}
        eventType={eventType}
      />
    </ApiRequestComponent>
  )
}

export default EventPage
