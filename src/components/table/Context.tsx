import { createContext } from 'react'

export interface TableContextProps {
    columnCount: number;
    gap?: string;
}

export const TableContext = createContext<Pick<TableContextProps, 'gap' | 'columnCount'>| null>(null)
