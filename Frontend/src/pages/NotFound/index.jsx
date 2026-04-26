import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Wrapper } from "./styles.jsx";
import Button from "../../components/Button/index.jsx";

function NotFound() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="Section">
        <div className="card">
          <span className="code" aria-hidden="true">
            404
          </span>
          <h1 className="title">{t("notFound.title")}</h1>
          <p className="desc">{t("notFound.description")}</p>
          <div className="actions">
            <div className="btn-wrap">
              <Button
                type="button"
                text={t("notFound.backHome")}
                onClick={() => navigate("/")}
              />
            </div>
            <div className="btn-wrap">
              <Button
                type="button"
                text={t("notFound.goBack")}
                onClick={() => navigate(-1)}
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default NotFound;
