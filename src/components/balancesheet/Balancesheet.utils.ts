import { BalanceSheet, Row as Rowtype } from '../../types/Balancesheet'

export const getReportHeaders = (balanceSheet: BalanceSheet) => {
    const report = balanceSheet[0]
    const {
      ReportName: reportName,
      ReportTitles: reportTitles,
      ReportDate: reportDate,
    } = report
    return { reportName, reportTitles, reportDate }
}
  
export const getReportDateRange = (row: Rowtype) => {
    const startDate = row?.Cells?.[1]?.Value ?? ''
    const endDate = row?.Cells?.[2].Value ?? ''
    return { startDate, endDate }
}

export const getHeaderRow = (rows: Rowtype[]) => {
    return rows.find((row) => row.RowType === 'Header')
}

export const getBodyRows = (rows: Rowtype[]) => {
    return rows.filter((row) => row.RowType === 'Section')
}