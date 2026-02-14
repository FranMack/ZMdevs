import { ExitIcon,socialMedia } from "../assets/icons/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../context/";
import { ArgentinaFlag, USAFlag } from "../assets/svg/flags";
function MobileMenu({scrollHandler,itemsNavbar,handleShowMobileMenu,refMobileMenu}){
  const { language, toggleLanguage } = useContext(LanguageContext);
    return(<>
    <div ref={refMobileMenu} className="mobile-menu-container">
        <ExitIcon handleShowMobileMenu={handleShowMobileMenu}/>

        <div className="mobile-menu-list">
        <ul>
          {itemsNavbar.map((item, i) => {
            return <li onClick={()=>{scrollHandler(item.ref)}} key={i}>
              {language==="spanish" ? item.nameSpanish :item.nameEnglish}</li>;
          })}

< li className="flag-mobile-container">
            <div onClick={toggleLanguage} className={language==="spanish"? "flag-mobile flag-mobile-focus":"flag-mobile"}>
              <ArgentinaFlag />
            </div>
            <div onClick={toggleLanguage} className={language==="english"? "flag-mobile flag-mobile-focus":"flag-mobile"}>
              <USAFlag />
            </div>
          </li>
         
        </ul>

      
      </div>
      <div className="mobile-menu-social-media">

      {socialMedia.map((media,i)=>{
        return(
            <Link to={media.link} target="_blank" key={i}>
                {media.icon}
            </Link>
        )
      })}
      </div>

    </div>
    </>)
}

export default MobileMenu;