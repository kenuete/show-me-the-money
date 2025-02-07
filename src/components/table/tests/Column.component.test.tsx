import { render } from '@testing-library/react'
import Column from '../Column.component'
// import '@testing-library/jest-dom'

// wrapper to keep up the semantic of the table
const Wrapper: React.FC<{
  children?: React.ReactNode
  id: string
  className?: string
  dataTestId?: string
}> = ({ children, id, className, dataTestId }) => (
  <table>
    <tbody>
      <tr>
        <Column id={id} className={className} dataTestId={dataTestId || id}>{children}</Column>
      </tr>
    </tbody>
  </table>
)

describe('Column component', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Wrapper id="test-column" />)
    expect(getByTestId('test-column')).toBeInTheDocument()
  })

  it('renders children correctly', () => {
    const { getByText } = render(
      <Wrapper id='test-column'>Test Content</Wrapper>
    )
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  it('applies the correct className', () => {
    const { container } = render(
      <Wrapper id='test-column' className='test-class' />
    )
    expect(container.querySelector('tr > td')).toHaveClass('test-class')
  })

  it('applies the correct data-test-id', () => {
    const { getByTestId } = render(
      <Wrapper id='test-column' dataTestId='test-data-id' />
    )
    expect(getByTestId('test-data-id')).toBeInTheDocument()
  })
})
