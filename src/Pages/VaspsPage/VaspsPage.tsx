
import React, { useEffect, useState } from 'react'
import ApiRequestComponent, { FullPageLoadingComponent, PlainErrorComponent } from '../../ApiRequestComponent'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient'
import { FetchError } from '../../api_clients/FetchTypes'
import MainWrapper from '../../MainWrapper'
import { Err, Ok, Result } from 'ts-results'
import { VaspsDetails, vaspsList } from '../../api_clients/AnalyticsQueries'
import Table, { column } from '../../Table'
import { AccountAddress, TransactionVersion } from '../../TableComponents/Link'
import { Form } from 'react-bootstrap'


export function VaspTbl({
    data, vaspRes
}: {
    data: any[], vaspRes: any[]
}) {
    const showPagination = (data: any = [], count: number = 10) => {
        return vaspRes.length > count
    }
    const nameValidate = (data: any) => {
        return <span>No.  {data.row.index + 1} VASP</span>
    }

    return (
        <div>
            <Table
                columns={[
                    column('Name', 'name', nameValidate),
                    column('Address', 'address', AccountAddress),
                    column('Type', 'type'),
                    column('Version Created', 'transaction_version', TransactionVersion),
                    column('Parent Name', 'parent_address')
                ]}
                isPaginated={true}
                pSize={10}
                showPaginationCus={showPagination(data, 10)}
                noOfRec={[10, 25, 50]}
                data={vaspRes}
            /></div>
    )
}



export default function VaspsPage() {

    const [vaspRes, setVaspRes] = useState<any>([] as any);
    const [vaspFilterRes, setVaspFilterRes] = useState<any>([] as any);
    const filtersVal = ['ChildVasp', 'ParentVasp', 'DesignatedDealer'];
    const [filterArr, setFilterArr] = useState<string[]>([...filtersVal]);

    const handleData = async (): Promise<
        Result<any, FetchError[]>
    > => {
        const vaspsListRes =
            await postQueryToAnalyticsApi<VaspsDetails>(vaspsList(), 'vasp_details')
        if (vaspsListRes.err) {
            return Err(
                []
                    // @ts-ignore nulls work in concat -- this will smash together the error arrays then remove nulls
                    .concat(vaspsList.val)
                    .filter((error) => error !== null)
            )
        } else {
            setVaspRes(vaspsListRes.val)
            setVaspFilterRes(vaspsListRes.val)
            return Ok({
                vaspsList: vaspsListRes.val
            })
        }
    }

    const filterObj = (cv: any) => {
        return filterArr.includes(cv.type)
    }
    const checkBoxHandler = async (event: any) => {
        if (event.target.checked) {
            await setFilterArr([...filterArr, event.target.value])
        }
        else {
            await setFilterArr(filterArr.filter((cv: any) => cv !== event.target.value))
        }

    }

    useEffect(() => {
        const filtered = vaspRes.filter(filterObj);
        setVaspFilterRes(filtered);
    }, [filterArr]);
    return (
        <MainWrapper>
            <main>
                <header data-testid='leaderboard-page-header'>
                    <h2>VASPs</h2>
                </header>
                <ApiRequestComponent
                    request={handleData}
                    loadingComponent={<FullPageLoadingComponent />}
                    errorComponent={<PlainErrorComponent />}
                >
                    <div>


                        <div key={`inline-checkbox`} className="mb-3 vasp">
                            {filtersVal.map((row, index) => {
                                return (< Form.Check
                                    key={index}
                                    inline
                                    label={row.replace(/[A-Z]/g, ' $&').trim()}
                                    name={`checkbox-${row}`}
                                    type='checkbox'
                                    id={`inline-checkbox-${row}`}
                                    value={row}
                                    onChange={checkBoxHandler}
                                    checked={filterArr.includes(row)}
                                    data-testid={row}
                                />)
                            })}

                        </div>
                        <VaspTbl data={vaspRes} vaspRes={vaspFilterRes} />
                    </div>
                </ApiRequestComponent>
            </main>

        </MainWrapper>
    )
}

