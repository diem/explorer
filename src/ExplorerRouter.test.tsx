import { render, screen } from '@testing-library/react'
import ExplorerRouter from './ExplorerRouter'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { mockLandingPageText } from './Pages/LandingPage/__mocks__/LandingPage'
import { mockTxnDetailsPageText } from './Pages/TxnDetailsPage/__mocks__/TxnDetailsPage'
import { mockMintEventsPageText, mockBurnEventsPageText, mockPaymentEventsPageText, mockGasEventsPageText } from './Pages/EventPages/__mocks__/EventPages'
import { mockDiemInCirculationPageText } from './Pages/DiemInCirculationPage/__mocks__/DiemInCirculationPage'
import { mockAccountPageText } from './Pages/AccountPage/__mocks__/AccountPage'

jest.mock('./Pages/LandingPage/LandingPage')
jest.mock('./Pages/TxnDetailsPage/TxnDetailsPage')
jest.mock('./Pages/EventPages/EventPages')
jest.mock('./Pages/DiemInCirculationPage/DiemInCirculationPage')
jest.mock('./Pages/AccountPage/AccountPage')

function renderWithRouter(path: string) {
  const history = createMemoryHistory()
  history.push(path)
  return render(
    <Router history={history}>
      <ExplorerRouter />
    </Router>
  )
}

describe('ExplorerRouter', () => {
  it('should render Landing page when path is /', async function () {
    renderWithRouter('/')
    expect(screen.getByRole('main').textContent).toContain(mockLandingPageText)
  })
  it('should render Transaction Details page when path is /txn/{?}', async function () {
    const fakeId = 'some_id'
    renderWithRouter(`/txn/${fakeId}`)
    expect(screen.getByRole('main').textContent).toContain(
      mockTxnDetailsPageText
    )
    expect(screen.getByRole('main').textContent).toContain(fakeId)
  })
  it('should render Mint Events page when path is /events/mint', async function () {
    renderWithRouter('/events/mint')
    expect(screen.getByRole('main').textContent).toContain(
      mockMintEventsPageText
    )
  })
  it('should render Burn Events page when path is /events/burn', async function () {
    renderWithRouter('/events/burn')
    expect(screen.getByRole('main').textContent).toContain(
      mockBurnEventsPageText
    )
  })
  it('should render Payment Events page when path is /events/payment', async function () {
    renderWithRouter('/events/payment')
    expect(screen.getByRole('main').textContent).toContain(
      mockPaymentEventsPageText
    )
  })
  it('should render Gas Events page when path is /events/gas', async function () {
    renderWithRouter('/events/gas')
    expect(screen.getByRole('main').textContent).toContain(
      mockGasEventsPageText
    )
  })
  it('should render Diem In Circulation page when path is /dieminciculation', async function () {
    renderWithRouter('/diemincirculation')
    expect(screen.getByRole('main').textContent).toContain(
      mockDiemInCirculationPageText
    )
  })
  it('should render Account page when path is /address/{?}', async function () {
    const fakeId = 'some_id'
    renderWithRouter(`/address/${fakeId}`)
    expect(screen.getByRole('main').textContent).toContain(mockAccountPageText)
    expect(screen.getByRole('main').textContent).toContain(fakeId)
  })
  it('should render 404 page when path is unknown', async function () {
    renderWithRouter('/not_a_real_url')
    expect(screen.getByRole('main').textContent).toContain('Page not found.')
  })
})
