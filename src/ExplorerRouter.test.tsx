import { render, screen } from '@testing-library/react'
import ExplorerRouter from './ExplorerRouter'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { mockLandingPageText } from './LandingPage/__mocks__/LandingPage'
import { mockTxnDetailsPageText } from './TxnDetailsPage/__mocks__/TxnDetailsPage'
import { mockMintEventsPageText } from './MintEventsPage/__mocks__/MintEventsPage'

jest.mock('./LandingPage/LandingPage')
jest.mock('./TxnDetailsPage/TxnDetailsPage')
jest.mock('./MintEventsPage/MintEventsPage')

function renderWithRouter (path: string) {
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
    expect(screen.getByRole('main').textContent).toContain(mockTxnDetailsPageText)
    expect(screen.getByRole('main').textContent).toContain(fakeId)
  })
  it('should render Mint Events page when path is /events/mint', async function () {
    renderWithRouter('/events/mint')
    expect(screen.getByRole('main').textContent).toContain(mockMintEventsPageText)
  })
  it('should render 404 page when path is unknown', async function () {
    renderWithRouter('/not_a_real_url')
    expect(screen.getByRole('main').textContent).toContain('Page not found.')
  })
})
