import { Container } from '../../components/Header/styles';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

import logo from '../../assets/logo.png';
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
    const navigate = useNavigate();
    const token = Cookies.get("token");

    // Função para navegação para About (raiz "/")
    function goToAbout() {
        const element = document.querySelector("#about");
        if (element) {
            navigate("/");
            element.scrollIntoView({ behavior: 'smooth' });
        }    
    }

    // Função para navegação até a seção de Projetos
    function goToProjects() {
        const element = document.querySelector("#projects");
        if (element) {
            navigate("/");
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Função para navegação até a seção de Contato
    function goToContact() {
        const element = document.querySelector("#contact");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
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
                        <li onClick={goToAbout}>About</li>
                        <li onClick={goToProjects}>Projects</li>
                        <li onClick={goToContact}>Contact</li>                        
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
