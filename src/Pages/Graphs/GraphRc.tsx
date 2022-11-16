import moment from 'moment'
import React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'



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
export default function GraphRc({ data }: { data: any }) {
    const { graphData } = data

    function numFormatter(num: any) {
        if (num > 999 && num < 1000000) {
            return (num / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
        } else if (num > 1000000) {
            return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
        } else if (num < 900) {
            return num; // if value < 1000, nothing to do
        }
    }
    return (
        <div style={{ width: '100%' }}>
            <h2 className='mb-5' >Transaction Volume </h2>
            <p style={{ textAlign: "right" }}> {moment(graphData[0].timestamp).format('MMM DD ,YYYY')} <b>To</b>  {moment(graphData[graphData.length - 1].timestamp).format('MMM DD ,YYYY')}</p>
            <ResponsiveContainer width="100%" height={300} >
                <LineChart width={500} height={350} data={graphData} margin={{ top: 0, left: 50, right: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 1" />
                    <XAxis
                        padding={{ left: 30, right: 30 }}
                        dataKey="timestamp"
                        tickFormatter={(newDt) => moment(newDt).format('MMM YY')}
                        domain={['dataMin', 'dataMax']}
                        interval={61}
                    >
                    </XAxis>
                    <YAxis dataKey="count" tickCount={7} tickLine={false}
                        type="number" tickFormatter={numFormatter} axisLine={false}
                        label={{
                            value: 'Transactions per Day', style: {
                                textAnchor: "middle",
                                fontSize: "1rem",
                                fill: "#39298c",
                            },
                            offset: -20,
                            angle: -90, position: 'insideLeft', margin: { top: 0, left: 10, right: 10, bottom: 0 }
                        }}
                    />
                    <Tooltip content={<CustomTooltip payload={graphData} />} />
                    {/* <Legend iconType='remove' margin={{ top: 50, left: 0, right: 0, bottom: 0 }} formatter={renderColorfulLegendText} /> */}
                    <Line strokeWidth={2} type="monotoneX" dataKey="count" stroke="#8884d8" dot={false} />
                </LineChart>
            </ResponsiveContainer>
            {/* <p style={{ textAlign: "center" }}>Dates</p> */}
        </div >
    )
}

