import moment from 'moment'
import React from 'react'
import { Err, Ok, Result } from 'ts-results'
import ApiRequestComponent, { FullPageLoadingComponent, PlainErrorComponent } from '../../ApiRequestComponent'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import { transactionsGraph } from '../../api_clients/AnalyticsQueries'
import { FetchError } from '../../api_clients/FetchTypes'
import GraphRc from './GraphRc'



function AttachDatatoGraph(data: any) {
    console.log(data, data)
    return (
        <div>
            < div className="graph-styles" >
                <GraphRc {...data} />
            </div >
        </div>
    );
}


export default function TransactionHistory() {
    const formateGraphData = (vaspsListRes: any) => {

        const resdataforGraph = vaspsListRes.val && vaspsListRes.val.map((item: any) => {
            const updatedRes = { ...item, timestamp: moment(item.transaction_date, "YYYY-MM-DD").valueOf() };
            if (new Date(item.transaction_date).getDate() === 1) {
                updatedRes.tickVal = moment(item.transaction_date).format("MMM  YY");
            }
            return updatedRes
        })
        return resdataforGraph
    }
    const handleData = async (): Promise<
        Result<any, FetchError[]>
    > => {
        const vaspsListRes = await postQueryToAnalyticsApi<any>(transactionsGraph(), 'transactions_graph')
        if (vaspsListRes.err) {
            return Err(
                []
                    // @ts-ignore nulls work in concat -- this will smash together the error arrays then remove nulls
                    .concat(vaspsListRes.val)
                    .filter((error) => error !== null)
            )
        } else {
            /* const ddss: any = []
            const resdd = (vaspsListRes.val).map((item: any) => {
                ddss.push([moment(item.transaction_date, "YYYY-MM-DD").valueOf(), item.count]);
                const updatedRes = { ...item, timestamp: moment(item.transaction_date, "YYYY-MM-DD").valueOf() };
                if (new Date(item.transaction_date).getDate() === 1) {
                    updatedRes.tickVal = moment(item.transaction_date).format("MMM  YY");

                }
                return updatedRes
            }) */
            return Ok({
                graphData: vaspsListRes.val ? formateGraphData(vaspsListRes) : [],

            })
        }
    }
    return (
        <div>
            <ApiRequestComponent
                request={handleData}
                loadingComponent={<FullPageLoadingComponent />}
                errorComponent={<PlainErrorComponent />}
            >
                <AttachDatatoGraph data={{ graphData: [], hcGraphData: [] }} />

            </ApiRequestComponent>
        </div>
    )
}
