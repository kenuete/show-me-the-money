import { BalanceSheet as BalanceSheetType } from '../../types/Balancesheet'
import {
  getReportHeaders,
  getReportDateRange,
  getBodyRows,
} from './Balancesheet.utils'
import { TableContainer, TableBody } from '../../components/table'
import BalancesheetTableHeader from './BalancesheetTableHeader.component'
import BalanceSheetTableBody from './BalancesheetTableBody.component'
import { Header } from './Balancesheet.styles'

interface BalanceSheetProps {
  balanceSheet: BalanceSheetType
}

const Balancesheet: React.FC<BalanceSheetProps> = ({ balanceSheet }) => {
  const { reportTitles } = getReportHeaders(balanceSheet)

  const rows = balanceSheet[0].Rows
  const { startDate, endDate } = getReportDateRange(rows[0])
  const bodyRows = getBodyRows(rows)

  return (
    <>
      <Header id='balancesheet-header' data-testid='balancesheet-header'>
        {reportTitles.join(', ')}
      </Header>
      <TableContainer id={'balancesheet-data-table'} columnCount={4}>
        <BalancesheetTableHeader startDate={startDate} endDate={endDate} />
        <TableBody>
          {bodyRows.map((row, index) => {
            return <BalanceSheetTableBody key={index} row={row} />
          })}
        </TableBody>
      </TableContainer>
    </>
  )
}

export default Balancesheet
