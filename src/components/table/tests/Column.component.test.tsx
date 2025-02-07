import { render } from '@testing-library/react'
import Column from '../Column.component'
// import '@testing-library/jest-dom'

describe('Column component', () => {
    it('renders without crashing', () => {
        const { getByTestId } = render(<Column id='test-column' />)
        expect(getByTestId('test-column')).toBeInTheDocument()
    })

    it('renders children correctly', () => {
        const { getByText } = render(<Column id='test-column'>Test Content</Column>)
        expect(getByText('Test Content')).toBeInTheDocument()
    })

    it('applies the correct className', () => {
        const { container } = render(<Column id='test-column' className='test-class' />)
        expect(container.firstChild).toHaveClass('test-class')
    })

    it('applies the correct data-test-id', () => {
        const { getByTestId } = render(<Column id='test-column' dataTestId='test-data-id' />)
        expect(getByTestId('test-data-id')).toBeInTheDocument()
    })
})