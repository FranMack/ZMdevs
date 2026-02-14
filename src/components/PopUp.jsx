import { useTranslation } from "../hooks/useTranslation";

function PopUp() {
  const { t } = useTranslation();
  return (
    <div className="popUp-container">
      <p>{t("contact.sent")}</p>
    </div>
  );
}

export default PopUp;
