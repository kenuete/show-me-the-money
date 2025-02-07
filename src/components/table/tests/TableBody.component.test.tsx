import { render } from '@testing-library/react'
import TableBody from '../TableBody.component'

describe('TableBody component', () => {
    it('renders without crashing', () => {
        const { container } = render(<TableBody />)
        expect(container).toBeInTheDocument()
    })

    it('renders children correctly', () => {
        const { getByText } = render(
            <TableBody>
                <tr>
                    <td>Test</td>
                </tr>
            </TableBody>
        )
        expect(getByText('Test')).toBeInTheDocument()
    })
})