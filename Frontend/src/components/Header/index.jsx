import { Container } from "../../components/Header/styles";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

import logo from "../../assets/logo.png";
import { FaSignOutAlt } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa6";

import { useThemeMode } from "../../context/ThemeModeContext.jsx";

const Header = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const { t, i18n } = useTranslation();
  const { mode, toggleTheme } = useThemeMode();

  function goTo(id) {
    navigate("/");
    setTimeout(() => {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 10);

    const checkbox = document.querySelector("#menu-faketrigger");
    if (checkbox?.checked) {
      checkbox.checked = false;
    }
  }

  function signOut() {
    Cookies.remove("token");
    navigate("/");
  }

  const setLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Container>
      <header>
        <nav>
          <img src={logo} alt="Lucas" />
          <input type="checkbox" id="menu-faketrigger" />
          <div id="menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul>
            <li onClick={() => goTo("#about")}>{t("header.about")}</li>
            <li onClick={() => goTo("#projects")}>{t("header.projects")}</li>
            <li onClick={() => goTo("#contact")}>{t("header.contact")}</li>
            <div className="header-tools" aria-label={t("header.language")}>
            <button
              type="button"
              className="tool-btn theme-toggle"
              onClick={toggleTheme}
              aria-label={t("header.toggleTheme")}
              title={t("header.toggleTheme")}
            >
              {mode === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button
              type="button"
              className={`tool-btn lang-btn ${i18n.language === "en" ? "active" : ""}`}
              onClick={() => setLang("en")}
              aria-pressed={i18n.language === "en"}
              title={t("header.langEn")}
            >
              EN
            </button>
            <button
              type="button"
              className={`tool-btn lang-btn ${i18n.language === "pt" ? "active" : ""}`}
              onClick={() => setLang("pt")}
              aria-pressed={i18n.language === "pt"}
              title={t("header.langPt")}
            >
              PT
            </button>
          </div>
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
