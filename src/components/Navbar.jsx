import { useContext, useEffect, useState } from "react";
import logoBlanco from "../assets/images/logoWhite.png";
import logoColor from "../assets/images/zmdevsCortoGradiente.png";
import { ArgentinaFlag, USAFlag } from "../assets/svg/flags";
import { LanguageContext } from "../context/languageContext";
import { useTranslation } from "../hooks/useTranslation";

function Navbar({ scrollHandler, itemsNavbar }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function sizeHandler() {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener("scroll", sizeHandler);
    return () => window.removeEventListener("scroll", sizeHandler);
  }, []);

  const { language, toggleLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();

  return (
    <nav
      className={`navbar-container  ${scrollPosition > 100 && `navbar-move`} `}
    >
      <div
        className={` ${
          scrollPosition > 100 ? `navbar-logo-move` : `navbar-logo`
        }`}
      >
        <img
          onClick={() => {
            scrollHandler(itemsNavbar[0].ref);
          }}
          src={`${scrollPosition > 100 ? logoColor : logoBlanco}`}
          alt="CFdev"
        />
      </div>

      <div className="navbar-menu">
        <ul>
          {itemsNavbar.map((item, i) => {
            return (
              <li
                onClick={() => {
                  scrollHandler(item.ref);
                }}
                key={i}
              >
                {t(item.nameKey)}
              </li>
            );
          })}
          <li className="flag-container">
            <div
              onClick={toggleLanguage}
              className={language === "spanish" ? "flag flag-focus" : "flag"}
            >
              <ArgentinaFlag />
            </div>
            <div
              onClick={toggleLanguage}
              className={language === "english" ? "flag flag-focus" : "flag"}
            >
              <USAFlag />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
