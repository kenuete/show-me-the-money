import { ColumnStyle } from './Table.styles'

interface ColumnProps {
    id: string;
    dataTestId?: string;
    isHeading?: boolean
    className?: string
    children?: React.ReactNode
}

const Column: React.FC<ColumnProps> = ({ id, dataTestId, isHeading, className, children }) => {
    return (
        <ColumnStyle id={id} data-testid={dataTestId || id} isHeading={isHeading} className={className}>
            {children}
        </ColumnStyle>
    )
}

export default Column
