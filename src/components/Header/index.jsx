import {Container} from '../../components/Header/styles'
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <Container>
            <header>
                <nav>
                    <img src={logo} alt="Lucas" />
                    <ul>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </Container>
    )
}

export default Header