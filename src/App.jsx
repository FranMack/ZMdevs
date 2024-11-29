import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import { WhatsUpButton } from "./components/WhatsUpButton";
import { WhatsUpContacts } from "./components/WhatsUpContacts";
import { ScreenSizeContext } from "./context/screenSize.context";
import { AboutUs2 } from "./views/AboutUs2";
import Clients from "./views/Clients";
import Contact from "./views/Contact";
import Header2 from "./views/Header2";
import Projects from "./views/Projects";
import Services from "./views/Services";

function App() {
  const navigate = useNavigate();

  //referencias
  const refHeader = useRef();
  const refAboutUs = useRef();
  const refAboutUsTitle=useRef()
  const refAboutUsParagraph=useRef()
  const refServices = useRef();
  const refClients = useRef();
  const refProjects=useRef();
  const refContact = useRef();
  const refMobileMenu = useRef();

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
    { nameEnglish: "Home", nameSpanish: "Inicio", ref: refHeader },
    { nameEnglish: "About us", nameSpanish: "Nosotros", ref: refAboutUs },
    { nameEnglish: "Services", nameSpanish: "Servicios", ref: refServices },
    { nameEnglish: "Clients", nameSpanish: "Clientes", ref: refClients },
    { nameEnglish: "Contact", nameSpanish: "Contacto", ref: refContact },
  ];

  window.addEventListener("scroll", scrollHandler2);

  function scrollHandler2() {
    const triggerBottom = window.innerHeight * 0.9;
    const aboutTitle = refAboutUsTitle?.current
    const aboutParagraph=refAboutUsParagraph?.current

    const servicesCards =
      refServices?.current?.querySelectorAll(".service-card");
    /*const projectsCards = refProjects.current.querySelectorAll(".project-card");*/
    const socialMedia = refContact?.current?.querySelector(
      ".contact-social-media"
    );

    const projects=refProjects?.current;
    const contactForm = refContact?.current?.querySelector(".contact-form");

    if (aboutTitle) {
      const topCoordinates = aboutTitle.getBoundingClientRect().top;

      if (topCoordinates < triggerBottom) {
        aboutTitle.classList.add("efectoReveal");
        aboutTitle.classList.remove("efectoRevealOut");
      } else if (topCoordinates > triggerBottom) {
        aboutTitle.classList.add("efectoRevealOut");
        aboutTitle.classList.remove("efectoReveal");
      }
    }

    if (aboutParagraph) {
      const topCoordinates = aboutParagraph.getBoundingClientRect().top;

      if (topCoordinates < triggerBottom) {
        aboutParagraph.classList.add("efectoReveal");
        aboutParagraph.classList.remove("efectoRevealOut");
      } else if (topCoordinates > triggerBottom) {
        aboutParagraph.classList.add("efectoRevealOut");
        aboutParagraph.classList.remove("efectoReveal");
      }
    }



    servicesCards?.forEach((card, i) => {
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

    const clientsCards = refClients?.current?.querySelectorAll(".client-card");

    clientsCards?.forEach((card, i) => {
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


    if (projects) {
      const topCoordinates = projects.getBoundingClientRect().top;

      if (topCoordinates < triggerBottom) {
        projects.classList.add("efectoReveal");
        projects.classList.remove("efectoRevealOut");
      } else if (topCoordinates > triggerBottom) {
        projects.classList.add("efectoRevealOut");
        projects.classList.remove("efectoReveal");
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

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    // Agregar o quitar la clase mobileMenuOpen
    const mobileMenu = refMobileMenu.current;
    if (!showMobileMenu) {
      setShowMobileMenu(true);
      mobileMenu.classList.add("mobileMenuOpen");
    } else {
      mobileMenu.classList.remove("mobileMenuOpen");
      setShowMobileMenu(false);
    }
  };

  const handleExitMenu = (event) => {
    const mobileMenu = refMobileMenu.current;

    if (
      showMobileMenu &&
      event.target.className !== "mobile-menu-container" &&
      event.target.id !== "menu-hamburguesa-icon" &&
      event.target.parentNode.tagName !== "svg"
    ) {
      mobileMenu.classList.remove("mobileMenuOpen");
      setShowMobileMenu(false);
    }
  };

  const { screenWidth, setScreenWidth } = useContext(ScreenSizeContext);

  const handleScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenWidth);
    window.addEventListener("click", handleExitMenu);
    return () => {
      window.removeEventListener("click", handleExitMenu);
      window.addEventListener("resize", handleScreenWidth);
    };
  }, [showMobileMenu]);

  const [openWhatsUp, setOpenWhatsUp] = useState(false);

  const handleWhatsUp = () => {
    setOpenWhatsUp(!openWhatsUp);
  };

  return (
    <>
      {screenWidth > 768 ? (
        <Navbar scrollHandler={scrollHandler} itemsNavbar={itemsNavbar} />
      ) : (
        <MobileNavbar handleShowMobileMenu={handleShowMobileMenu} />
      )}
      <MobileMenu
        refMobileMenu={refMobileMenu}
        scrollHandler={scrollHandler}
        itemsNavbar={itemsNavbar}
        handleShowMobileMenu={handleShowMobileMenu}
      />
      <main>
        {!openWhatsUp && <WhatsUpButton handleWhatsUp={handleWhatsUp} openWhatsUp={openWhatsUp} />}
        <WhatsUpContacts handleWhatsUp={handleWhatsUp} openWhatsUp={openWhatsUp} />
        <Header2 windowSize={screenWidth} refHeader={refHeader} />
        <Services refServices={refServices} />
        <Clients refClients={refClients} />
        <Projects refProjects={refProjects} />
        <AboutUs2 refAboutUs={refAboutUs}  refAboutUsTitle={refAboutUsTitle} refAboutUsParagraph={refAboutUsParagraph}/>
        <Contact refContact={refContact} />
      </main>
      <Footer />
    </>
  );
}

export default App;
