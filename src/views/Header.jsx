import logo1 from "../assets/images/logo1.png"
import videoFondo from "../assets/videoFondo.mp4"

function Header(){
    return(<>
    <div className="header-container headerOut">

    <video className="logoReveal" autoPlay muted loop>
        <source src={videoFondo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className="header-center-container">
       <div className="header-logo-container  logoReveal" >
<img className="sombraLogo" src={logo1} alt="" />
       </div>
<h3 className="textMotion">TURNING IDEAS INTO CODE</h3>
</div>
       
    </div>
    
    </>)
}

export default Header


