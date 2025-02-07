import {
  TableHeader as TableHeaderContainer,
  Row,
  Column,
} from '../../components/table'

interface BalancesheetTableHeaderProps {
  startDate: string
  endDate: string
}

const BalancesheetTableHeader: React.FC<BalancesheetTableHeaderProps> = ({
  startDate,
  endDate,
}) => {
  return (
    <TableHeaderContainer>
      <Row id={'balancesheet-data-row-header'} isHeading>
        <Column id={'balancesheet-data-column-header-category'}>
          Category
        </Column>
        <Column id={'balancesheet-data-column-header-account'}>Account</Column>
        <Column id={'balancesheet-data-column-header-report-startdate'}>
          {startDate}
        </Column>
        <Column id={'balancesheet-data-column-header-report-enddate'}>
          {endDate}
        </Column>
      </Row>
    </TableHeaderContainer>
  )
}

export default BalancesheetTableHeader
