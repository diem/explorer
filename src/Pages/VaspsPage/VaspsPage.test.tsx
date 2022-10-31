
import '@testing-library/jest-dom'
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { postQueryToAnalyticsApi } from '../../api_clients/AnalyticsClient';
import { Ok } from 'ts-results'
import VaspsPage from "./VaspsPage";
import userEvent from '@testing-library/user-event';

jest.useFakeTimers().setSystemTime(new Date('2021-01-01').getTime())

jest.mock('../../api_clients/AnalyticsClient', () => ({
    postQueryToAnalyticsApi: jest.fn(),
}))

const mockResObj = [{
    name: 'ChildVasp Name',
    address: '2F451567B24A84C62F73644C69371201',
    type: 'ChildVasp',
    transaction_version: 89261,
    parent_address: 'F72A6D8761EF90A4E5D464445612D46E'
},
{
    name: 'ParentVasp Name',
    address: 'A8973F137E10C94792BADFA19FF13383',
    type: 'ParentVasp',
    transaction_version: 89262,
    parent_address: '2D5DE1C60F9190346543013AACB8ACAF'
},
{
    name: 'DesignatedDealer Name',
    address: '841EDD4EA77897F76BE6BBA98762F009',
    type: 'DesignatedDealer',
    transaction_version: 89263,
    parent_address: 'A7B7D67CEE4950F94ECDA79125911EF4'
}]
const renderSubject = async (mockRequest: any) => {
    // @ts-ignore TS is bad at mocking
    postQueryToAnalyticsApi.mockResolvedValue(Ok(mockRequest))

    const returnVal = render(
        <BrowserRouter>
            <VaspsPage />
        </BrowserRouter>
    )

    await waitForElementToBeRemoved(screen.queryByRole('loading'))
    return returnVal;
}


describe('VaspsPage', () => {
    it('should render ', async () => {
        const { container } = await renderSubject(mockResObj)
        const ddVaspChcekBox = screen.getByTestId("DesignatedDealer");
        const childVaspChcekBox = screen.getByTestId("ChildVasp");
        const parentVaspChcekBox = screen.getByTestId("ParentVasp");
        expect(ddVaspChcekBox).toBeInTheDocument();
        expect(ddVaspChcekBox).toBeChecked();
        expect(childVaspChcekBox).toBeInTheDocument();
        expect(childVaspChcekBox).toBeChecked();
        expect(parentVaspChcekBox).toBeInTheDocument();
        expect(parentVaspChcekBox).toBeChecked();
        const trVal = container.querySelectorAll('table');
        expect(trVal.length).toBe(1);
    })
    it('should render data in a table with filters ', async () => {
        const { container } = await renderSubject(mockResObj)
        const ddVaspChcekBox = screen.getByTestId("DesignatedDealer");
        const childVaspChcekBox = screen.getByTestId("ChildVasp");
        userEvent.click(ddVaspChcekBox);
        expect(container.querySelectorAll('tr').length).toBe(3);
        userEvent.click(childVaspChcekBox);
        expect(container.querySelectorAll('tr').length).toBe(2);
    })

});
