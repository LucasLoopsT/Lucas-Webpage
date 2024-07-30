import { useState } from 'react'
import {Container} from './styles'
import logo from '../../assets/logo.png'

function Header() {
    const [count, setCount] = useState(0)
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