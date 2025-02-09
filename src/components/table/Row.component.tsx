import React, { useContext } from 'react'
import { RowLayout } from './Table.styles'
import { TableContext, TableContextProps } from './Context'

interface RowProps {
    id: string;
    dataTestId?: string;
    isHeading?: boolean
    className?: string
    children?: React.ReactNode
    highlight?: boolean
}

const Row: React.FC<RowProps> = ({ id, dataTestId, isHeading, className, children, highlight }) => {
    const { columnCount, gap } = useContext(TableContext) as TableContextProps

    return (
        <RowLayout id={id} data-testid={dataTestId || id} isHeading={isHeading} columnCount={columnCount} gap={gap} className={className} highlight={highlight}>
            {children}
        </RowLayout>
    )
}

export default Row
