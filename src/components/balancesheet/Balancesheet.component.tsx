import { BalanceSheet as BalanceSheetType } from '../../types/Balancesheet'
import {
  getReportHeaders,
  getReportDateRange,
  getBodyRows,
} from './Balancesheet.utils'
import { TableContainer, TableBody } from '../../components/table'
import BalancesheetTableHeader from './BalancesheetTableHeader.component'
import BalanceSheetTableBody from './BalancesheetTableBody.component'

interface BalanceSheetProps {
  balanceSheet: BalanceSheetType
}

const Balancesheet: React.FC<BalanceSheetProps> = ({ balanceSheet }) => {
  const { reportName, reportTitles, reportDate } =
    getReportHeaders(balanceSheet)

  const rows = balanceSheet[0].Rows
  const { startDate, endDate } = getReportDateRange(rows[0])
  const bodyRows = getBodyRows(rows)
  
  return (
    <>
      <h1>
        {reportName} {reportTitles} {reportDate}
      </h1>
      <TableContainer id={'balancesheet-data-table'} columnCount={4}>
        <BalancesheetTableHeader startDate={startDate} endDate={endDate} />
        {bodyRows.map((row) => {
          return (
            <TableBody key={row.Title}>
              <BalanceSheetTableBody row={row} />
            </TableBody>
          )
        })}
      </TableContainer>
    </>
  )
}

export default Balancesheet
