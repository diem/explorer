import ApiRequestPage from '../../ApiRequestPage'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import React from 'react'
import MainWrapper from '../../MainWrapper'
import Table from '../../Table'

interface EventPageProps {
  query: string
  columns: {
    Header: string,
    accessor: string,
    Cell?: React.FC<{value:string}>
  }[]
  tableName: string
  eventType: string
}

function EventPageWithResponse({ data, columns, eventType }: { data: any[], columns: EventPageProps['columns'], eventType: EventPageProps['eventType'] }) {
  return (
    <MainWrapper>
      <>
        <h3 className="mb-2">{eventType} Events</h3>
        <Table columns={columns} data={data} />
      </>
    </MainWrapper>
  )
}

const EventPage = ({ query, columns, tableName, eventType }: EventPageProps) => {
  return (
    <ApiRequestPage
      request={() =>
        postQueryToAnalyticsApi(query, tableName)
      }
    >
      <EventPageWithResponse data={[]} columns={columns} eventType={eventType} />
    </ApiRequestPage>
  )
}

export default EventPage
