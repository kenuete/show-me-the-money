interface TableHeaderProps {
    children?: React.ReactNode
}

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
    return (
        <thead>
            {children}
        </thead>
    )
}

export default TableHeader