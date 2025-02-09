import { render, screen, waitFor } from '@testing-library/react'
import App from './App'
import { getBalancesheetData } from './fetch'
import balanceSheetData from './components/balancesheet/tests/balancesheet.mock.data'
import { BalanceSheet } from './types/Balancesheet'


jest.mock('./fetch', () => ({
    getBalancesheetData: jest.fn()
}))

jest.mock('./components/balancesheet/Balancesheet.component', () => () => (
    <div data-testid="balancesheet">Balancesheet Component</div>
))

jest.mock('./components/balancesheet/Balancesheet.component', () => () => (
    <div data-testid="balancesheet">Balancesheet Component</div>
))

describe('App', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('should render loading state', () => {
        render(<App />)
        expect(screen.getByTestId('loader')).toBeInTheDocument()
    })

    it('renders error message on fetch failure', async () => {
        const mockError = 'Something went wrong!'
    
        ;(getBalancesheetData as jest.Mock).mockImplementation(({ onFailure }) => {
          onFailure(mockError)
        })
    
        render(<App />)
    
        await waitFor(() => {
          expect(screen.getByText(mockError)).toBeInTheDocument()
        })
      })

      it('renders balance sheet data on successful fetch', async () => {
        const mockData: BalanceSheet = balanceSheetData.Reports
    
        ;(getBalancesheetData as jest.Mock).mockImplementation(({ onSuccess }) => {
          onSuccess(mockData)
        })
    
        render(<App />)
    
        await waitFor(() => {
          expect(screen.getByTestId('balancesheet')).toBeInTheDocument()
        })
      })
    
})