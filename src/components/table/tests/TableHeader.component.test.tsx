import { render } from '@testing-library/react'
import TableHeader from '../TableHeader.component'

import { ReactNode } from 'react'

// wrapper to keep up the semantic of the table
const Wrapper: React.FC<{ children?: ReactNode }> = ({ children }) => (
    <table>
    <TableHeader>
        {children}
    </TableHeader>
    </table>
)

describe('TableHeader', () => {
    it('renders without crashing', () => {
        const { container } = render(<Wrapper />)
        expect(container).toBeInTheDocument()
    })

    it('renders children correctly', () => {
        const { getByText } = render(
            <Wrapper>
                <tr>
                    <th>Header</th>
                </tr>
            </Wrapper>
        )
        expect(getByText('Header')).toBeInTheDocument()
    })
})