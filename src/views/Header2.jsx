import logo1 from "../assets/images/color1.png"
import videoFondo from "../assets/videoFondo.mp4"
import imagenFondo from"../assets/carrusel/desk1.jpg"
import Carrusel from "../components/Carrusel"

function Header2(){
    return(<>
    <div  className="header2-container headerOut">
       

    
        <div className="header2-center-container">
       <div className="header2-logo-container  logoReveal" >
<img className="sombraLogo" src={logo1} alt="logo" />
       </div>
<h3 className="textMotion">TURNING IDEAS INTO CODE</h3>
</div>
<img className="header2-fondo" src={imagenFondo} alt="imagen-header" />

       
    </div>
    
    </>)
}

export default Header2


