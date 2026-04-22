import { useTranslation } from "react-i18next";
import { Container } from "./styles.jsx";
import logo from "../../assets/logo.png";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <Container>
      <footer>
        <img src={logo} alt="Lucas" />
        <hr />
        <p>
          {t("footer.copyright", { year })}
          <a href="https://github.com/LucasLoopsT" target="_blank" rel="noreferrer">
            @LucasLoopst
          </a>
        </p>
      </footer>
    </Container>
  );
};

export default Footer;
