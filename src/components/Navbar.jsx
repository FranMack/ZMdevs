import logoColor from "../assets/images/zmdevsCortoGradiente.png";
import logoBlanco from "../assets/images/l8.png";
import { useState } from "react";
import { SpainFlag, UKflag } from "../assets/svg/flags";
import { useContext } from "react";
import { LanguageContext } from "../context/useContext";

function Navbar({ scrollHandler, itemsNavbar }) {
  const [scrollPosition, setScrolPosition] = useState(0);

  function sizeHandler() {
    setScrolPosition(window.scrollY);
  }

  window.addEventListener("scroll", sizeHandler);

  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <nav
      className={`navbar-container navbarReveal ${
        scrollPosition > 100 && `navbar-move`
      } `}
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
                {language==="spanish" ? item.nameSpanish :item.nameEnglish}
              </li>
            );
          })}
          <li className="flag-container">
            <div onClick={toggleLanguage} className={language==="spanish"? "flag flag-focus":"flag"}>
              <SpainFlag />
            </div>
            <div onClick={toggleLanguage} className={language==="english"? "flag flag-focus":"flag"}>
              <UKflag />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
