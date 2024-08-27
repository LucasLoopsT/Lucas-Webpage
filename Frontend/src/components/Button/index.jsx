import {Container} from '../../components/Button/styles'

const Button = ({text, type}) => {
    return (
        <Container>
            <button type={type}>{text}</button>
        </Container>
    )
}

export default Button