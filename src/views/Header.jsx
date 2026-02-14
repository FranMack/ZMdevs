import { useContext, useEffect, useState } from "react";
import { headerImages } from "../assets/header/headerInfo";
import logoHeader from "../assets/images/logoHeader.png";
import { LanguageContext } from "../context";

const services = ["Landing Page", "Mobile Apps", "Web Apps", "UX/UI Design"];
const slogans = [
  {
    titulo: "HACÉ CRECER", // Key en español
    subtitulo: "TU NEGOCIO", // Key en español
    title: "GROW", // Key en inglés
    secondaryTitle: "YOUR BUSINESS", // Key en inglés
  },
  {
    titulo: "DESARROLLA LA APP", // Key en español
    subtitulo: "QUE NECESITAS", // Key en español
    title: "DEVELOP THE APP", // Key en inglés
    secondaryTitle: "YOU NEED", // Key en inglés
  },
  {
    titulo: "POSICIONATE", // Key en español
    subtitulo: "EN LA WEB", // Key en español
    title: "POSITION YOURSELF", // Key en inglés
    secondaryTitle: "ON THE WEB", // Key en inglés
  },
  {
    titulo: "AUTOMATIZACIÓN", // Key en español
    subtitulo: "DE PROCESOS", // Key en español
    title: "PROCESS", // Key en inglés
    secondaryTitle: "AUTOMATION", // Key en inglés
  },
];

function Header({ refHeader, windowSize }) {
  const { language } = useContext(LanguageContext);

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

        {slogans.map((item, i) => (
          <div
            key={i}
            className={`header-slogan-container ${
              index === i ? "active" : "exiting"
            }`}
          >
            <h1>
              {language === "spanish" ? `${item.titulo}` : `${item.title}`}
            </h1>
            <h2>
              {language === "spanish"
                ? `${item.subtitulo}`
                : `${item.secondaryTitle}`}
            </h2>
            <figure>
              <img src={logoHeader} alt="logo" />
            </figure>
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
