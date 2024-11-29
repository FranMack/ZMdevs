import cocoPicture from "../assets/images/coco_profile.png";
import franPicture from "../assets/images/fran_profile.png";
import { useContext } from "react";
import { LanguageContext } from "../context";

export function CloseIcon({ onClick }) {
  
  return (
    <>
      <svg
        onClick={onClick}
        style={{ cursor: "pointer", marginRight: "6px", marginTop: "6px" }}
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
          fill="#0F0F0F"
        />
      </svg>
    </>
  );
}

export function WhatsUpContacts({ handleWhatsUp,openWhatsUp }) {

  const { language } = useContext(LanguageContext);
  const linkCoco = () => {
    window.open('https://wa.me/5493425906598', '_blank');
   
  };

  const linkFran = () => {
    window.open('https://wa.me/5493424456154', '_blank');
  };
  return (
    <div className={`whats-up-contacts-container ${openWhatsUp ? "active-whats-up":""}`}>
      <div className="auxiliar-close-icon">
        <CloseIcon onClick={handleWhatsUp} />
      </div>
      <h5>{language==="spanish" ?"Horario de Atención: Lun a Vie de 8 a 17hs y Sáb de 8 a 12hs.":"Opening Hours: Mon to Fri from 8 a.m. to 5 p.m. and Sat from 8 a.m. to 12 p.m. (ARG)."}</h5>

      <div onClick={linkCoco} className="whats-up-card">
        <div className="whats-up-card-image-container">
          <img src={cocoPicture} alt="Carlos" />
        </div>
        <div className="whats-up-card-info-container">
          <h4>Carlos</h4>
          <p>{language==="spanish" ? "Enviar mensaje":"Send Message"}</p>
        </div>
      </div>
      <div onClick={linkFran} className="whats-up-card">
        <div className="whats-up-card-image-container">
          <img src={franPicture} alt="Carlos" />
        </div>
        <div className="whats-up-card-info-container">
          <h4>Francisco</h4>
          <p>{language==="spanish" ? "Enviar mensaje":"Send Message"}</p>
        </div>
      </div>
    </div>
  );
}
