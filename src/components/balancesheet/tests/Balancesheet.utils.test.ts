import { getReportHeaders, getReportDateRange, getBodyRows } from '../Balancesheet.utils'
import mockBalanceSheet from './balancesheet.mock.data'
import { Row } from '../../../types/Balancesheet'

describe('getReportHeaders', () => {
    it('returns the correct headers from the first entry of the balance sheet', () => {
        const { reportName, reportTitles, reportDate } = getReportHeaders(mockBalanceSheet.Reports)
        expect(reportName).toBe('Balance Sheet')
        expect(reportTitles).toEqual(['Balance Sheet','Demo Org', 'As at 06 February 2025'])
        expect(reportDate).toBe('06 February 2025')
    })
})

describe('getReportDateRange', () => {
    it('returns the correct start and end dates from the first row', () => {
        const { startDate, endDate } = getReportDateRange(mockBalanceSheet.Reports[0].Rows[0])
        expect(startDate).toBe('06 February 2025')
        expect(endDate).toBe('07 February 2024')
    })
    it('returns empty strings for startDate and endDate when row cells are undefined', () => {
        const row: Row = {
          RowType: 'Header',
          Title: '',
          Cells: [],
        }
    
        const { startDate, endDate } = getReportDateRange(row)
        expect(startDate).toBe('')
        expect(endDate).toBe('')
      })
    
      it('returns empty strings if the row is missing entirely', () => {
        // @ts-expect-error test if row is null
        const { startDate, endDate } = getReportDateRange(null)
        expect(startDate).toBe('')
        expect(endDate).toBe('')
      })    
})

describe('getBodyRows', () => {
    it('returns all rows with the RowType of Section', () => {
        const bodyRows = getBodyRows(mockBalanceSheet.Reports[0].Rows)
        expect(bodyRows.length).toBe(1)
        expect(bodyRows[0].Title).toBe('Bank')
    })
})