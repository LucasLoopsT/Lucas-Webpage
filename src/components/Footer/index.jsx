import {Container} from './styles.jsx'
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <Container>
            <footer>
                <img src={logo} alt="Lucas" />
                <hr />
                <p>&copy; 2024 - <a href='https://github.com/LucasLoopsT' target="_blank">@LucasLoopst</a></p>
            </footer> 
        </Container>
    )
}

export default Footer