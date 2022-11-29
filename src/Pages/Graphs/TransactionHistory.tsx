import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Err, Ok, Result } from 'ts-results'
import ApiRequestComponent, { FullPageLoadingComponent, PlainErrorComponent } from '../../ApiRequestComponent'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import { transactionsGraph } from '../../api_clients/AnalyticsQueries'
import { FetchError } from '../../api_clients/FetchTypes'
import GraphRc from './GraphRc'



function AttachDatatoGraph(data: any) {
    return (
        <div>
            < div className="graph-styles" >
                <GraphRc {...data} />
            </div >
        </div>
    );
}


export default function TransactionHistory() {

    const [refreshGraph, setRefreshGraph] = useState(1);
    const [dataFilterval, setDataFilterval] = useState({ toDt: moment().format("YYYY-MM-DD"), fromDt: moment().subtract(1, 'months').format("YYYY-MM-DD") });
    const [filterop, setFilterop] = useState("1M");
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
    const handleData = async (refreshval: any, dataFilter: any | null = null): Promise<
        Result<any, FetchError[]>
    > => {

        const vaspsListRes = await postQueryToAnalyticsApi<any>(transactionsGraph(dataFilter.fromDt, dataFilter.toDt), 'transactions_graph')

        if (vaspsListRes.err) {
            return Err(
                []
                    // @ts-ignore nulls work in concat -- this will smash together the error arrays then remove nulls
                    .concat(vaspsListRes.val)
                    .filter((error) => error !== null)
            )
        } else {
            return Ok({
                graphData: vaspsListRes.val ? formateGraphData(vaspsListRes) : [],
            })
        }
    }
    const callApiwithDate = async (e: any, filterBtnStl: any) => {

        await setFilterop(filterBtnStl)
        await setDataFilterval(e)
        setRefreshGraph(refreshGraph + 1)

    }

    useEffect(() => {

    }, [refreshGraph]);
    return (
        <div>
            <ApiRequestComponent
                request={() => handleData(refreshGraph, dataFilterval)}
                loadingComponent={<FullPageLoadingComponent />}
                errorComponent={<PlainErrorComponent />}
                refresh={refreshGraph}
            >
                <AttachDatatoGraph data={{ graphData: [] }} filterData={{ fromDt: dataFilterval.fromDt, toDt: dataFilterval.toDt, dtBtnSel: filterop }} callApiwithDate={callApiwithDate} />

            </ApiRequestComponent>

        </div>
    )
}
