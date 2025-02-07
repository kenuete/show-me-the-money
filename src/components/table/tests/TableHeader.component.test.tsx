import { render } from '@testing-library/react'
import TableHeader from '../TableHeader.component'

describe('TableHeader', () => {
    it('renders without crashing', () => {
        const { container } = render(<TableHeader />)
        expect(container).toBeInTheDocument()
    })

    it('renders children correctly', () => {
        const { getByText } = render(
            <TableHeader>
                <tr>
                    <th>Header</th>
                </tr>
            </TableHeader>
        )
        expect(getByText('Header')).toBeInTheDocument()
    })
})