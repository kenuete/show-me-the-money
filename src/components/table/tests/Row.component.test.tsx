import { render, screen } from '@testing-library/react'
import Row from '../Row.component'
import { TableContext, TableContextProps } from '../Context'

describe('Row Component', () => {
    const mockContext: TableContextProps = {
        columnCount: 3,
        gap: '10px',
    }

    it('renders without crashing', () => {
        render(
            <TableContext.Provider value={mockContext}>
                <Row id="test-row" />
            </TableContext.Provider>
        )
        const row = screen.getByTestId('test-row')
        expect(row).toBeInTheDocument()
    })

    it('accepts and displays children properly', () => {
        render(
            <TableContext.Provider value={mockContext}>
                <Row id="test-row" dataTestId="row">
                    <div data-testid="child">Child element</div>
                </Row>
            </TableContext.Provider>
        )
        expect(screen.getByTestId('child')).toBeInTheDocument()
    })

    it('applies the data-test-id attribute when provided', () => {
        render(
            <TableContext.Provider value={mockContext}>
                <Row id="test-row" dataTestId="custom-id" />
            </TableContext.Provider>
        )
        const row = screen.getByTestId('custom-id')
        expect(row).toHaveAttribute('data-testid', 'custom-id')
    })

    it('sets className and isHeading props', () => {
        render(
            <TableContext.Provider value={mockContext}>
                <Row id="test-row" dataTestId="row" isHeading className="heading-class">
                    Heading Content
                </Row>
            </TableContext.Provider>
        )
        const row = screen.getByTestId('row')
        expect(row).toHaveClass('heading-class')
    })
})