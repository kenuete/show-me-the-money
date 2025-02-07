import { useEffect, useState } from 'react'
import { BalanceSheet, Row as Rowtype } from './types/Balancesheet'

import { TableContainer, Row, Column } from './components/table'

const URL = '/api.xro/2.0/Reports/BalanceSheet'

const App = () => {
  const [balanceSheet, setBalanceSheet] = useState<BalanceSheet>([])

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setBalanceSheet(data.Reports))
  }, [])
  if (!balanceSheet.length) return <h1>Loading...</h1>
  console.log('balanceSheet 1', balanceSheet)
  const { reportName, reportTitles, reportDate } =
    getReportHeaders(balanceSheet)
  const rows = balanceSheet[0].Rows
  const { startDate, endDate } = getReportDateRange(rows[0])
  return (
    <>
      <h1>
        {reportName} {reportTitles} {reportDate}
      </h1>
      <TableContainer id={'balancesheet-data-table'} columnCount={4}>
        {rows.map((row) => {
          switch (row.RowType) {
            case 'Header':
              return (
                <Row id={'balancesheet-data-row-header'} isHeading>
                  <Column id={'balancesheet-data-column-header-category'}>
                    Category
                  </Column>
                  <Column id={'balancesheet-data-column-header-account'}>
                    Account
                  </Column>
                  <Column id={'balancesheet-data-column-header-current'}>
                    {startDate}
                  </Column>
                  <Column id={'balancesheet-data-column-header-comparison'}>
                    {endDate}
                  </Column>
                </Row>
              )
            case 'Section':
              return (
                <>
                <Row id={'balancesheet-data-row-section'}>
                  <Column id={'balancesheet-data-column-section-category'}>
                    {row.Title}
                  </Column>
                </Row>
                {row?.Rows?.map((sectionRow) => {
                  return (
                    <Row id={'balancesheet-data-row-section-row'} isHeading={sectionRow.RowType === 'SummaryRow'}>
                      <Column id={'empty-column'}/>
                      {sectionRow?.Cells?.map(cell => {
                        return (
                          <Column id={'balancesheet-data-column-section-cell'}>
                            {cell.Value}
                          </Column>
                        )
                      })}
                    </Row>
                  )
                })}
                </>
              )
          }
        })}
      </TableContainer>
    </>
  )
}

export default App

export const getReportHeaders = (balanceSheet: BalanceSheet) => {
  console.log('balanceSheet', balanceSheet)
  const report = balanceSheet[0]
  console.log('report', report)
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
