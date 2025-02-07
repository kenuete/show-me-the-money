import { TableLayout } from './Table.styles'
import { TableContext } from './Context'

interface TableContainerProps {
    id: string;
    dataTestId?: string;
    columnCount: number;
    gap?: string;
    className?: string;
    children?: React.ReactNode;
}

const TableContainer: React.FC<TableContainerProps> = ({
    id,
    dataTestId,
    columnCount,
    gap,
    className,
    children,
}) => {
    return (
        <TableContext.Provider value={{ columnCount, gap }}>
            <TableLayout
                id={id}
                data-test-id={dataTestId || id}
                className={className}
            >
                {children}
            </TableLayout>
        </TableContext.Provider>
    )
}

export default TableContainer