import { getReportHeaders, getReportDateRange, getBodyRows } from '../Balancesheet.utils'
import mockBalanceSheet from './balancesheet.mock.data'

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
})

describe('getBodyRows', () => {
    it('returns all rows with the RowType of Section', () => {
        const bodyRows = getBodyRows(mockBalanceSheet.Reports[0].Rows)
        expect(bodyRows.length).toBe(1)
        expect(bodyRows[0].Title).toBe('Bank')
    })
})