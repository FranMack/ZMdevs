import { ExitIcon,socialMedia } from "../assets/icons/icons";
function MobileMenu({scrollHandler,itemsNavbar,handleShowMobileMenu}){

    return(<>
    <div className="mobile-menu-container">
        <ExitIcon handleShowMobileMenu={handleShowMobileMenu}/>

        <div className="mobile-menu-list">
        <ul>
          {itemsNavbar.map((item, i) => {
            return <li onClick={()=>{scrollHandler(item.ref)}} key={i}>{item.name}</li>;
          })}
         
        </ul>

      
      </div>
      <div className="mobile-menu-social-media">

      {socialMedia.map((media,i)=>{
        return(
            <div key={i}>
                {media.icon}
            </div>
        )
      })}
      </div>

    </div>
    </>)
}

export default MobileMenu;