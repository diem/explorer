
import React from 'react'
import ApiRequestComponent from '../../ApiRequestComponent'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import { FetchError } from '../../api_clients/FetchTypes'
import MainWrapper from '../../MainWrapper'
import { Err, Ok, Result } from 'ts-results'
import { preburnEventsQuery, vaspsList } from '../../api_clients/AnalyticsQueries'

export default function VaspsPage() {


    const handleData = async (): Promise<
        Result<any, FetchError[]>
    > => {
        const vaspsListRes =
            await postQueryToAnalyticsApi(vaspsList(), 'preburn_events')
        if (vaspsListRes.err) {
            return Err(
                []
                    // @ts-ignore nulls work in concat -- this will smash together the error arrays then remove nulls
                    .concat(vaspsList.val)
                    .filter((error) => error !== null)
            )
        } else {
            return Ok({
                vaspsList: vaspsListRes.val
            })
        }
    }

    return (
        <MainWrapper>
            <main>
                <header data-testid='leaderboard-page-header'>
                    <h2>VASPs</h2>
                </header>
                <ApiRequestComponent
                    request={handleData}
                >
                    <VaspTbl data={[]} />
                </ApiRequestComponent>
            </main>

        </MainWrapper>
    )
}

function VaspTbl({
    data,
}: {
    data: any[]
}) {
    console.log("data", data)
    return (<p></p>)
}
