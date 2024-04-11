import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carrusel from "./components/Carrusel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./views/AboutUs";
import Contact from "./views/Contact";
import Header2 from "./views/Header2";
import Services from "./views/Services";
import Clients from "./views/Clients";
import MobileNavbar from "./components/MobileNavbar";
import MobileMenu from "./components/MobileMenu";

function App() {
  const navigate = useNavigate();

  

  //referencias
  const refHeader = useRef();
  const refAboutUs = useRef();
  const refServices = useRef();
  const refClients = useRef();
  const refContact = useRef();
  const refMobileMenu=useRef()

  const scrollHandler = (elemRef) => {
    if (elemRef.current) {
      window.scrollTo({
        top: elemRef.current.offsetTop,
        behavior: "smooth",
      });
    }
    navigate("/");
  };

  const itemsNavbar = [
    { name: "Home", ref: refHeader },
    { name: "Nosotros", ref: refAboutUs },
    { name: "Servicios", ref: refServices },
    { name: "Clientes", ref: refClients },
    { name: "Contacto", ref: refContact },
  ];

  window.addEventListener("scroll", scrollHandler2);

  function scrollHandler2() {
    const triggerBottom = window.innerHeight * 0.9;
    const aboutUsInfo = refAboutUs.current.querySelector(
      ".aboutUs-center-container"
    );
    const servicesCards = refServices.current.querySelectorAll(".service-card");
    /*const projectsCards = refProjects.current.querySelectorAll(".project-card");*/
    const socialMedia = refContact.current.querySelector(
      ".contact-social-media"
    );
    const contactForm = refContact.current.querySelector(".contact-form");

    if (aboutUsInfo) {
      const topCoordinates = aboutUsInfo.getBoundingClientRect().top;

      if (topCoordinates < triggerBottom) {
        aboutUsInfo.classList.add("efectoReveal");
        aboutUsInfo.classList.remove("efectoRevealOut");
      } else if (topCoordinates > triggerBottom) {
        aboutUsInfo.classList.add("efectoRevealOut");
        aboutUsInfo.classList.remove("efectoReveal");
      }
    }

    servicesCards.forEach((card, i) => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom) {
        if (i % 2 === 0) {
          card.classList.add("efectoReveal");
          card.classList.remove("efectoRevealOut");
        } else {
          card.classList.add("efectoReveal2");
          card.classList.remove("efectoRevealOut");
        }
      } else {
        card.classList.remove("efectoReveal");
        card.classList.remove("efectoReveal2");
        card.classList.add("efectoRevealOut");
      }
    });

    const clientsCards = refClients.current.querySelectorAll(
      ".client-card"
    );

    clientsCards.forEach((card, i) => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom) {
        card.classList.add("efectoReveal");
        card.classList.remove("efectoRevealOut");
      } else {
        card.classList.remove("efectoReveal");
        card.classList.add("efectoRevealOut");
      }
    });

    if (socialMedia) {
      const topCoordinates = socialMedia.getBoundingClientRect().top;

      if (topCoordinates < triggerBottom) {
        socialMedia.classList.add("efectoReveal");
        socialMedia.classList.remove("efectoRevealOut");
      } else if (topCoordinates > triggerBottom) {
        socialMedia.classList.add("efectoRevealOut");
        socialMedia.classList.remove("efectoReveal");
      }
    }

    if (contactForm) {
      const topCoordinates = socialMedia.getBoundingClientRect().top;

      if (topCoordinates < triggerBottom) {
        contactForm.classList.add("efectoReveal");
        contactForm.classList.remove("efectoRevealOut");
      } else if (topCoordinates > triggerBottom) {
        contactForm.classList.add("efectoRevealOut");
        contactForm.classList.remove("efectoReveal");
      }
    }
  }

  const [windowSize,setWindowSize]=useState(window.innerWidth);

  
  const handleWindowSize=()=>{
    setWindowSize(window.innerWidth)
  
}
window.addEventListener("resize",handleWindowSize)


const [showMobileMenu,setShowMobileMenu]=useState(false)

const handleShowMobileMenu = () => {

  
  // Agregar o quitar la clase mobileMenuOpen
  const mobileMenu = refMobileMenu.current;
  if(!showMobileMenu){
    setShowMobileMenu(true)
    mobileMenu.classList.add("mobileMenuOpen");

  }

 else{
   mobileMenu.classList.remove("mobileMenuOpen");
    setShowMobileMenu(false)

  }
  
};
  

  return (
    <>
     
     {windowSize>768? (<Navbar scrollHandler={scrollHandler} itemsNavbar={itemsNavbar} />) :(<MobileNavbar handleShowMobileMenu={handleShowMobileMenu} />)}
   <MobileMenu refMobileMenu={refMobileMenu} scrollHandler={scrollHandler} itemsNavbar={itemsNavbar} handleShowMobileMenu={handleShowMobileMenu}/>
      <main>
        <Header2 windowSize={windowSize} refHeader={refHeader} />
        <Carrusel/>
        <AboutUs refAboutUs={refAboutUs} />
        <Services refServices={refServices} />
        <Clients refClients={refClients}/>
        <Contact refContact={refContact} />
      </main>
      <Footer />
    </>
  );
}

export default App;
