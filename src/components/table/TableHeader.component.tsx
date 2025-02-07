import { Thead } from './Table.styles'

interface TableHeaderProps {
    children?: React.ReactNode
}

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
    return (
        <Thead>
            {children}
        </Thead>
    )
}

export default TableHeader