import { Link } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div className="privacy-policy">
      <div className="privacy-policy-content">
        <h1>{t("privacy.title")}</h1>
        <p className="privacy-policy-updated">{t("privacy.lastUpdated")}</p>
        <p>{t("privacy.intro")}</p>

        <h2>{t("privacy.dataCollection.title")}</h2>
        <p>{t("privacy.dataCollection.text")}</p>
        <ul>
          <li>{t("privacy.dataCollection.item1")}</li>
          <li>{t("privacy.dataCollection.item2")}</li>
          <li>{t("privacy.dataCollection.item3")}</li>
        </ul>
        <p>{t("privacy.dataCollection.text2")}</p>

        <h2>{t("privacy.formspree.title")}</h2>
        <p>{t("privacy.formspree.text")}</p>

        <h2>{t("privacy.analytics.title")}</h2>
        <p>{t("privacy.analytics.text")}</p>
        <ul>
          <li>{t("privacy.analytics.item1")}</li>
          <li>{t("privacy.analytics.item2")}</li>
          <li>{t("privacy.analytics.item3")}</li>
          <li>{t("privacy.analytics.item4")}</li>
        </ul>
        <p>{t("privacy.analytics.text2")}</p>

        <h2>{t("privacy.purpose.title")}</h2>
        <p>{t("privacy.purpose.text")}</p>
        <ul>
          <li>{t("privacy.purpose.item1")}</li>
          <li>{t("privacy.purpose.item2")}</li>
          <li>{t("privacy.purpose.item3")}</li>
        </ul>

        <h2>{t("privacy.rights.title")}</h2>
        <p>{t("privacy.rights.text")}</p>
        <ul>
          <li>{t("privacy.rights.item1")}</li>
          <li>{t("privacy.rights.item2")}</li>
          <li>{t("privacy.rights.item3")}</li>
          <li>{t("privacy.rights.item4")}</li>
        </ul>
        <p>{t("privacy.rights.text2")}</p>
        <p className="privacy-policy-email">carlos@zmdevs.com</p>

        <h2>{t("privacy.contact.title")}</h2>
        <p>{t("privacy.contact.text")}</p>
        <p className="privacy-policy-email">carlos@zmdevs.com</p>

        <Link to="/" className="privacy-policy-back">
          {t("privacy.backToHome")}
        </Link>
      </div>
    </div>
  );
}
