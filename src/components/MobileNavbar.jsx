import {HamburguerMenu} from "../assets/icons/icons"
import logo from "../assets/images/l2.png"
function MobileNavbar({handleShowMobileMenu}){

    return(<>
    <div className="mobile-navbar-container">

<div className="mobile-navbar-logo-container">
    <img src={logo} alt="logo" />
</div>
<HamburguerMenu handleShowMobileMenu={handleShowMobileMenu}/>
    </div>
    </>)
}

export default MobileNavbar