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
      <Row id={`balancesheet-data-title-row-section-${row.Title}`}>
        <Column id={`balancesheet-data-title-section-category-${row.Title}`}>
          {row.Title}
        </Column>
      </Row>
      {row?.Rows?.map((sectionRow, index) => {
        return (
          <Row
            id={`balancesheet-data-row-section-${index}`}
            isHeading={sectionRow.RowType === 'SummaryRow'}
            key={index}
          >
            <Column id={'empty-column'} />
            {sectionRow?.Cells?.map((cell, index) => {
              return (
                <Column id={`balancesheet-data-column-section-cell-${index}`} key={index}>
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
