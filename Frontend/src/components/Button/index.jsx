import {Container} from '../../components/Button/styles'

const Button = ({text, type, ...rest}) => {
    return (
        <Container>
            <button type={type} {...rest}>
                {text}
            </button>
        </Container>
    )
}

export default Button