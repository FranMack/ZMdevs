import logo from "../assets/images/l3.png";
import { useState } from "react";
import {SpainFlag, UKflag} from "../assets/svg/flags"
function Navbar({scrollHandler,itemsNavbar}) {
 

  const [scrollPosition, setScrolPosition] = useState(0);

  function sizeHandler() {
    setScrolPosition(window.scrollY);
  }

  window.addEventListener("scroll", sizeHandler);

  return (
    <nav
      className={`navbar-container ${scrollPosition > 100 && `navbar-move`} `}
    >
      <div className={` ${scrollPosition > 100 ? `navbar-logo-move`:`navbar-logo`}`}>
        <img src={logo} alt="CFdev" />
      </div>

      <div className="navbar-menu">
        <ul>
          {itemsNavbar.map((item, i) => {
            return <li onClick={()=>{scrollHandler(item.ref)}} key={i}>{item.name}</li>;
          })}
          <li className="flag-container">
          <div className="flag"><SpainFlag/></div>
          <div className="flag"><UKflag/></div>
          </li>
        </ul>

      
      </div>
    </nav>
  );
}

export default Navbar;
