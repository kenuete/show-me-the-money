import styled from 'styled-components'

export const TableLayout = styled.table`
  display: grid;
  font-size: 16px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: #00000059 0px 5px 15px;
`

interface RowLayoutProps {
  columnCount: number
  gap?: string
  isHeading?: boolean
  className?: string
}

export const RowLayout = styled.tr.withConfig({
  shouldForwardProp: (prop) =>
    prop !== 'isHeading' && prop !== 'columnCount' && prop !== 'gap',
})<RowLayoutProps>`
  display: grid;
  grid-template-columns: repeat(
    ${(props: RowLayoutProps) => props.columnCount},
    1fr
  );
  gap: ${(props: RowLayoutProps) => props.gap};
  border-bottom: 1px solid #00000020;
  min-height: 44px;
  font-weight: ${(props: RowLayoutProps) =>
    props.isHeading ? 'bold' : 'normal'};
`

interface ColumnStyleProps {
  isHeading?: boolean
  className?: string
}

export const ColumnStyle = styled.td.withConfig({
  shouldForwardProp: (prop) => prop !== 'isHeading',
})<ColumnStyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  font-weight: ${(props: ColumnStyleProps) =>
    props.isHeading ? 'bold' : 'inherit'};
`

export const Thead = styled.thead`
    color: white;
    background-color: #36304A;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`