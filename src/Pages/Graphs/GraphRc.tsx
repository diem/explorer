import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="customTooltip">
                <div className="tooltipDetails">
                    <p className="tr-tooltip-p">Date: <b>{payload[0].payload.transaction_date}</b></p>
                    <p>Total Transactions: <b>{payload[0].payload.count.toLocaleString('en-US')}</b></p>
                </div>
            </div>
        );
    }

    return null;
};
export default function GraphRc({ data, filterData, callApiwithDate }: { data: any, filterData: any, callApiwithDate: any }) {
    const { graphData } = data;


    const [gData, setGData] = useState<any>(graphData);

    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([moment(filterData.fromDt).toDate(), moment(filterData.toDt).toDate()]);
    const [startDate, endDate] = dateRange;
    /* const [startDate, setStartDate] = useState<Date | null>(moment(filterData.fromDt).toDate());
    const [endDate, setEndDate] = useState<Date | null>(moment(filterData.toDt).toDate()); */

    const [maxDt, setMaxDt] = useState<Date | null>(moment().toDate());
    const [dispalayDtRange, setDispalayDtRange] = useState(filterData.dtBtnSel === "Custom");
    const [filterBtnStl, setFilterBtnStl] = useState(filterData.dtBtnSel);
    const [staticDts, setStaticDts] = useState({ ...filterData });

    useEffect(() => {
        setGData(graphData);
        /* callApiwithDt("1M"); */
        /* setStaticDts({ fromDt: moment(graphData[0].transaction_date).format("MMM Do YY"), toDt: moment().format("MMM Do YY") }) */
    }, [graphData]);

    useEffect(() => {
        const nextSixmonthDt = moment(startDate).add(6, 'months')
        const cdc = nextSixmonthDt.isBefore()

        if (cdc) {
            setMaxDt(nextSixmonthDt.toDate())
        }
        else {
            setMaxDt(new Date())
        }

    }, [startDate]);
    /* function customDataFn(fromDt: any, toDt: any) {
        const totlaData = graphData;
        return totlaData.filter((item: any) => {
            return item.timestamp >= fromDt.valueOf() && item.timestamp <= toDt.valueOf()
        }
        );
    } */

    async function callApiwithDt(dt: any | null = null) {
        if (dt === "1M") {
            setFilterBtnStl(dt)
            setDispalayDtRange(false);
            setDateRange([null, null])
            setStaticDts({ toDt: moment().format("MMM Do YY"), fromDt: moment().subtract(1, 'months').format("MMM Do YY") })
            await callApiwithDate({ toDt: moment().format("YYYY-MM-DD"), fromDt: moment().subtract(1, 'months').format("YYYY-MM-DD") }, "1M")
        }
        else if (dt === "3M") {
            setFilterBtnStl(dt)
            setDispalayDtRange(false);
            setDateRange([null, null])
            setStaticDts({ toDt: moment().format("MMM Do YY"), fromDt: moment().subtract(3, 'months').format("MMM Do YY") })
            await callApiwithDate({ toDt: moment().format("YYYY-MM-DD"), fromDt: moment().subtract(3, 'months').format("YYYY-MM-DD") }, "3M")
        }
        /* else if (dt == "All") {
            setFilterBtnStl(dt)
            setDispalayDtRange(false);
            setDateRange([null, null])
            filterDts = { toDt: moment(), fromDt: moment().subtract(36, 'months') }
            setStaticDts({ toDt: moment().format("MMM Do YY"), fromDt: moment(graphData[0].transaction_date).format("MMM Do YY") })
        } */
        else {
            setFilterBtnStl("Custom")
            setStaticDts({ toDt: moment(dt[1]).format("MMM Do YY"), fromDt: moment(dt[0]).format("MMM Do YY") })
            await callApiwithDate({ toDt: moment(dt[1]).format("YYYY-MM-DD"), fromDt: moment(dt[0]).format("YYYY-MM-DD") }, "Custom")
        }


        /* const xx = customDataFn(filterDts.fromDt, filterDts.toDt);
        setGData(xx) */
    }


    function numFormatter(num: any) {
        if (num > 999 && num < 1000000) {
            return (num / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
        } else if (num > 1000000) {
            return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
        } else if (num < 900) {
            return num; // if value < 1000, nothing to do
        }
    }
    function intervalCalculation(gData: any) {
        let intervalVal = 1;
        if (gData.length <= 15) intervalVal = 1;
        else if (gData.length > 15 && gData.length <= 61) intervalVal = 3
        else if (gData.length > 61 && gData.length <= 185) intervalVal = 15
        else if (gData.length > 185 && gData.length <= 366) intervalVal = 30
        else intervalVal = 92
        return intervalVal
    }
    return (
        <div style={{ width: '100%' }}>
            <h2 className='mb-5' >Transaction Volume </h2>
            <div>
                <Container>
                    {/* Stack the columns on mobile by making one full-width and the other half-width */}
                    <Row className="graphFilters">
                        <Col className="graphfilterBtns" xs={12} md={8} >
                            {/* <Button className={filterBtnStl === "All" ? 'active' : ''} variant="light" onClick={() => callApiwithDt("All")}>All</Button> */}
                            <Button className={filterBtnStl === "1M" ? 'active' : ''}
                                variant="light" onClick={() => callApiwithDt("1M")}>Last 30 days</Button>
                            <Button className={filterBtnStl === "3M" ? 'active' : ''} variant="light" onClick={() => callApiwithDt("3M")}>Last 3 Months</Button>
                            <Button className={filterBtnStl === "Custom" ? 'active' : ''} variant="light" onClick={() => {
                                setFilterBtnStl("Custom")
                                setDispalayDtRange(true)
                            }}>Custom</Button>
                            <div>
                                {dispalayDtRange && <div>
                                    <DatePicker
                                        selectsRange={true}
                                        startDate={startDate}
                                        endDate={endDate}
                                        onChange={(update) => {
                                            setDateRange(update);

                                            if (update[1]) callApiwithDt(update)
                                        }}
                                        maxDate={maxDt}
                                        placeholderText={'DD/MM/YYYY - DD/MM/YYYY '}
                                    />
                                </div>}</div>

                        </Col>
                        <Col className="graphStsticDt" xs={12} md={4} >
                            <span>
                                <b>{moment(staticDts.fromDt).format("MMM Do YY")} - {moment(staticDts.toDt).format("MMM Do YY")}</b>
                            </span>
                        </Col>

                    </Row>
                </Container>
            </div>

            <ResponsiveContainer width="100%" height={300} >
                <LineChart width={500} height={350} data={gData} margin={{ top: 0, left: 50, right: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 1" />
                    <XAxis
                        padding={{ left: 30, right: 30 }}
                        dataKey="timestamp"
                        tickFormatter={(newDt) => {
                            const fMate = gData.length < 185 ? 'DD MMM YY' : 'MMM YY'
                            return moment(newDt).format(fMate)
                        }}
                        domain={['dataMin', 'dataMax']}
                        interval={intervalCalculation(gData)}
                    >
                    </XAxis>
                    <YAxis dataKey="count" tickCount={8} tickLine={false} domain={['auto', 'auto']}
                        type="number" tickFormatter={numFormatter} axisLine={false}
                        label={{
                            value: 'Transactions per Day', style: {
                                textAnchor: "middle",
                                fontSize: "1rem",
                                fill: "#39298c",
                            },
                            offset: -20,
                            angle: -90, position: 'insideLeft',
                            margin: { top: 0, left: 10, right: 10, bottom: 0 }
                        }}
                    />
                    <Tooltip content={<CustomTooltip payload={gData} />} />
                    {/* <Legend iconType='remove' margin={{ top: 50, left: 0, right: 0, bottom: 0 }} formatter={renderColorfulLegendText} /> */}
                    <Line strokeWidth={2} type="monotoneX" dataKey="count" stroke="#8884d8" dot={false} />
                </LineChart>
            </ResponsiveContainer>
            {/* <p style={{ textAlign: "center" }}>Dates</p> */}
        </div >
    )
}

