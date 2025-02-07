import { render } from '@testing-library/react'
import TableBody from '../TableBody.component'

// wrapper to keep up the semantic of the table
const Wrapper: React.FC<{
    children?: React.ReactNode
  }> = ({ children}) => (
    <table>
      <TableBody>
            {children}
      </TableBody>
    </table>
  )

describe('TableBody component', () => {
    it('renders without crashing', () => {
        const { container } = render(<Wrapper />)
        expect(container).toBeInTheDocument()
    })

    it('renders children correctly', () => {
        const { getByText } = render(
            <Wrapper>
                <tr>
                    <td>Test</td>
                </tr>
            </Wrapper>
        )
        expect(getByText('Test')).toBeInTheDocument()
    })
})