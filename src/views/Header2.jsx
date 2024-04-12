import logo1 from "../assets/images/zmDevs.png";
import logoCorto from "../assets/images/zmdevsLogoCorto.png";
import videoFondo from "../assets/videoFondo.mp4";
import imagenFondo from "../assets/carrusel/desk1.jpg";
import Carrusel from "../components/Carrusel";

function Header2({ refHeader, windowSize }) {
  return (
    <>
      <div ref={refHeader} className="header2-container">
        <div className="header2-center-container">
          <div className="header2-logo-container  logoReveal">
            <img
              className="sombraLogo"
              src={windowSize > 678 ? logo1 : logoCorto}
              alt="logo"
            />
          </div>

          {windowSize > 678 && (
            <h3 className="textMotion"> CONVIRTIENDO IDEAS EN CODIGO</h3>
          )}
        </div>
        {/*<img className="header2-fondo" src={imagenFondo} alt="imagen-header" />*/}
      </div>
    </>
  );
}

export default Header2;
