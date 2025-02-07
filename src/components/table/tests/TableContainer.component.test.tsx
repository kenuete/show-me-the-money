import { render } from '@testing-library/react'
import TableContainer from '../TableContainer.component'

describe('TableContainer', () => {
    it('renders correctly with required props', () => {
        const { getByTestId } = render(
            <TableContainer id='test-table' columnCount={3}>
                <div>Child</div>
            </TableContainer>
        )
        const tableElement = getByTestId('test-table')
        expect(tableElement).toBeInTheDocument()
    })

    it('applies the className correctly', () => {
        const { getByTestId } = render(
            <TableContainer id='test-table' columnCount={3} className="custom-class">
                <div>Child</div>
            </TableContainer>
        )
        const tableElement = getByTestId('test-table')
        expect(tableElement).toHaveClass('custom-class')
    })

    it('renders children correctly', () => {
        const { getByText } = render(
            <TableContainer id='test-table' columnCount={3}>
                <div>Child</div>
            </TableContainer>
        )
        const childElement = getByText('Child')
        expect(childElement).toBeInTheDocument()
    })
})