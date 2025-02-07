import { render, screen } from '@testing-library/react'
import Balancesheet from '../Balancesheet.component'
import mockBalanceSheet from './balancesheet.mock.data'

describe('Balancesheet component', () => {
  it('displays report titles', () => {
    render(<Balancesheet balanceSheet={mockBalanceSheet.Reports} />)
    expect(
      screen.getByText(/Balance Sheet, Demo Org, As at 06 February 2025/i)
    ).toBeInTheDocument()
  })
  it('displays table headers', () => {
    render(<Balancesheet balanceSheet={mockBalanceSheet.Reports} />)
    expect(
      screen.getByTestId('balancesheet-data-column-header-category')
    ).toHaveTextContent('Category')
    expect(
      screen.getByTestId('balancesheet-data-column-header-report-startdate')
    ).toHaveTextContent('06 February 2025')
    expect(
      screen.getByTestId('balancesheet-data-column-header-report-enddate')
    ).toHaveTextContent('07 February 2024')
  })
  mockBalanceSheet.Reports[0].Rows.forEach((row) => {
    if (row.Title) {
      it(`displays ${row.Title} category section`, () => {
        render(<Balancesheet balanceSheet={mockBalanceSheet.Reports} />)
        expect(screen.getByText(row.Title)).toBeInTheDocument()
      })
    }

    if (row.Rows) {
      row.Rows.forEach((sectionRow) => {
        it(`displays ${sectionRow.Cells[0].Value} row`, () => {
          render(<Balancesheet balanceSheet={mockBalanceSheet.Reports} />)
          expect(screen.getByText(sectionRow.Cells[0].Value)).toBeInTheDocument()
        })
      })
    }
  })
})
