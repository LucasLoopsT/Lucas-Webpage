import { useState } from 'react'
import '../Styles/Header.css'
import logo from '../assets/logo.png'

function Header() {
    const [count, setCount] = useState(0)
    return (
        <>
            <nav>
                <img src={logo} alt="Lucas" />
                <ul>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </>
    )
}

export default Header