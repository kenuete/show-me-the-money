import { render, screen } from '@testing-library/react'
import Row from '../Row.component'
import { TableContext, TableContextProps } from '../Context'

// wrapper to keep up the semantic of the table
const Wrapper: React.FC<{
    children?: React.ReactNode
    id: string
    className?: string
    dataTestId?: string
    isHeading?: boolean,
  }> = ({ children, id, className, dataTestId, isHeading }) => (
    <table>
      <tbody>
        <Row id={id} dataTestId={dataTestId} isHeading={isHeading} className={className}>
            {children}
        </Row>
      </tbody>
    </table>
  )

describe('Row Component', () => {
    const mockContext: TableContextProps = {
        columnCount: 3,
        gap: '10px',
    }

    it('renders without crashing', () => {
        render(
            <TableContext.Provider value={mockContext}>
                <Wrapper id="test-row" />
            </TableContext.Provider>
        )
        const row = screen.getByTestId('test-row')
        expect(row).toBeInTheDocument()
    })

    it('accepts and displays children properly', () => {
        render(
            <TableContext.Provider value={mockContext}>
                <Wrapper id="test-row" dataTestId="row">
                    <th data-testid="child">Child element</th>
                </Wrapper>
            </TableContext.Provider>
        )
        expect(screen.getByTestId('child')).toBeInTheDocument()
    })

    it('applies the data-test-id attribute when provided', () => {
        render(
            <TableContext.Provider value={mockContext}>
                <Wrapper id="test-row" dataTestId="custom-id" />
            </TableContext.Provider>
        )
        const row = screen.getByTestId('custom-id')
        expect(row).toHaveAttribute('data-testid', 'custom-id')
    })

    it('sets className and isHeading props', () => {
        render(
            <TableContext.Provider value={mockContext}>
                <Wrapper id="test-row" dataTestId="row" isHeading className="heading-class">
                <th data-testid="child">Heading Content</th>
                </Wrapper>
            </TableContext.Provider>
        )
        const row = screen.getByTestId('row')
        expect(row).toHaveClass('heading-class')
    })
})