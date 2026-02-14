import { useTranslation } from "../hooks/useTranslation";

export function AboutUs({ refAboutUs, refAboutUsTitle, refAboutUsParagraph }) {
  const { t } = useTranslation();
  return (
    <>
      <section ref={refAboutUs} className="aboutUs-container">
        <h3 ref={refAboutUsTitle} className="section-title">
          {t("aboutUs.title")}
        </h3>

        <div ref={refAboutUsParagraph} className="aboutUs-center-container">
          <article>
            <h4>{t("aboutUs.whoAreWe")}{" "}</h4>
            <p>{t("aboutUs.whoAreWeText")}</p>
          </article>
          <article>
            <h4>{t("aboutUs.whatWeDo")}</h4>
            <p>{t("aboutUs.whatWeDoText")}</p>
          </article>
          <article>
            <h4>{t("aboutUs.ourGoal")}</h4>
            <p>{t("aboutUs.ourGoalText")}</p>
          </article>
          <article>
            <h4>{t("aboutUs.ourPurpose")}</h4>
            <p>{t("aboutUs.ourPurposeText")}</p>
          </article>
        </div>
      </section>
    </>
  );
}
