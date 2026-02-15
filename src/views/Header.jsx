import { useEffect, useState } from "react";
import { headerImages } from "../assets/header/headerInfo";
import logoHeader from "../assets/images/logoHeader.png";
import { useTranslation } from "../hooks/useTranslation";

const services = ["Landing Page", "Mobile Apps", "Web Apps", "UX/UI Design"];
const sloganKeys = [
  { title: "header.slogan1.title", subtitle: "header.slogan1.subtitle" },
  { title: "header.slogan2.title", subtitle: "header.slogan2.subtitle" },
  { title: "header.slogan3.title", subtitle: "header.slogan3.subtitle" },
  { title: "header.slogan4.title", subtitle: "header.slogan4.subtitle" },
];

function Header({ refHeader, windowSize, scrollToContact }) {
  const { t } = useTranslation();

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % headerImages.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section ref={refHeader} className="header-container">
      <figure className="header-center-container">
        {headerImages.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`Proyecto ${i}`}
            className={index === i ? "active" : "exiting"}
          />
        ))}

        {sloganKeys.map((item, i) => (
          <div
            key={i}
            className={`header-slogan-container ${
              index === i ? "active" : "exiting"
            }`}
          >
            <h1>{t(item.title)}</h1>
            <h2>{t(item.subtitle)}</h2>
            <figure>
              <img src={logoHeader} alt="logo" />
            </figure>
            <button className="header-cta" onClick={scrollToContact}>
              {t("header.cta")}
            </button>
          </div>
        ))}
      </figure>
      <div className="header-bottom-container">
        {services.map((item, i) => {
          return <p key={i}>{item}</p>;
        })}
      </div>
    </section>
  );
}

export default Header;
