import { Container } from '../../components/Header/styles';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

import logo from '../../assets/logo.png';
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
    const navigate = useNavigate();
    const token = Cookies.get("token");

    function goTo(id) {
        navigate("/");
        setTimeout(() => {
            const element = document.querySelector(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }  
        }, 10);
    }

    function signOut(){
        Cookies.remove("token");
        navigate("/");
    }

    return (
        <Container>
            <header>
                <nav>
                    <img src={logo} alt="Lucas" />
                    <input type="checkbox" id="menu-faketrigger" />
                    <div id='menu'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul>
                        <li onClick={() => goTo("#about")}>About</li>
                        <li onClick={() => goTo("#projects")}>Projects</li>
                        <li onClick={() => goTo("#contact")}>Contact</li>                        
                        {token && (
                            <li>
                                <FaSignOutAlt id="signOut" onClick={signOut} />
                            </li>
                        )}
                    </ul>
                </nav>
            </header>
        </Container>
    );
};

export default Header;
