import { useContext } from "react";
import { LanguageContext } from "../context";
import { translations } from "../i18n/translations";

export function useTranslation() {
  const { language } = useContext(LanguageContext);
  const t = (key) => translations[language]?.[key] || key;
  return { t, language };
}
