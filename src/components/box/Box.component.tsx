import styled from 'styled-components'

const BoxWrapper = styled.div`
    border-radius: 4px;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100vh;
`

interface BoxProps {
    children: React.ReactNode
}

const Box: React.FC<BoxProps> = ({ children }) => {
    return (
        <BoxWrapper>
            {children}
        </BoxWrapper>
    )
}

export default Box