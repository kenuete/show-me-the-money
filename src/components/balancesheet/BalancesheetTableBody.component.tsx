import React from 'react'
import { Row, Column } from '../../components/table'
import { Row as BalanceSheetRowType } from '../../types/Balancesheet'

interface BalanceSheetTableBodyProps {
  row: BalanceSheetRowType
}

const BalanceSheetTableBody: React.FC<BalanceSheetTableBodyProps> = ({
  row,
}) => {
  return (
    <>
      <Row id={'balancesheet-data-row-section'}>
        <Column id={'balancesheet-data-column-section-category'}>
          {row.Title}
        </Column>
      </Row>
      {row?.Rows?.map((sectionRow) => {
        return (
          <Row
            id={'balancesheet-data-row-section-row'}
            isHeading={sectionRow.RowType === 'SummaryRow'}
          >
            <Column id={'empty-column'} />
            {sectionRow?.Cells?.map((cell) => {
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

export default BalanceSheetTableBody
