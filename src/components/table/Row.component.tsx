import React, { useContext } from 'react'
import { RowLayout } from './Table.styles'
import { TableContext, TableContextProps } from './Context'

interface RowProps {
    id: string;
    dataTestId?: string;
    isHeading?: boolean
    className?: string
    children?: React.ReactNode
}

const Row: React.FC<RowProps> = ({ id, dataTestId, isHeading, className, children }) => {
    const { columnCount, gap } = useContext(TableContext) as TableContextProps

    return (
        <RowLayout id={id} data-test-id={dataTestId} isHeading={isHeading} columnCount={columnCount} gap={gap} className={className}>
            {children}
        </RowLayout>
    )
}

export default Row
