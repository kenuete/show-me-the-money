import { render, screen, waitFor } from '@testing-library/react'
import App from './App'
import { getBalancesheetData } from './fetch'
import balanceSheetData from './components/balancesheet/tests/balancesheet.mock.data'
import { BalanceSheet } from './types/Balancesheet'

// Mock getBalancesheetData to control its behavior in tests.
jest.mock('./fetch', () => ({
    getBalancesheetData: jest.fn()
}))

jest.mock('./components/balancesheet/Balancesheet.component', () => () => (
    <div data-testid="balancesheet">Balancesheet Component</div>
))

// Mock the Balancesheet component to prevent rendering its actual implementation.
jest.mock('./components/balancesheet/Balancesheet.component', () => () => (
    <div data-testid="balancesheet">Balancesheet Component</div>
))

describe('App', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('should render loading state', () => {
        render(<App />)
        expect(screen.getByText('Loading...')).toBeInTheDocument()
    })

    it('renders error message on fetch failure', async () => {
        const mockError = 'Failed to fetch data'
    
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