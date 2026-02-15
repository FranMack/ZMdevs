import { useContext, useEffect, useRef, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { WhatsAppContacts } from "./components/WhatsAppContacts";
import { ScreenSizeContext } from "./context/screenSizeContext";
import { AboutUs } from "./views/AboutUs";
import Clients from "./views/Clients";
import Contact from "./views/Contact";
import Header from "./views/Header";
import PrivacyPolicy from "./views/PrivacyPolicy";
import Projects from "./views/Projects";
import Services from "./views/Services";
import TechStack from "./views/TechStack";
import Stats from "./views/Stats";

function HomePage({
  screenWidth,
  scrollHandler,
  scrollToContact,
  itemsNavbar,
  handleShowMobileMenu,
  refMobileMenu,
  openWhatsApp,
  handleWhatsApp,
  refHeader,
  refServices,
  refClients,
  refProjects,
  refAboutUs,
  refAboutUsTitle,
  refAboutUsParagraph,
  refContact,
}) {
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
        {!openWhatsApp && (
          <WhatsAppButton
            handleWhatsApp={handleWhatsApp}
            openWhatsApp={openWhatsApp}
          />
        )}
        <WhatsAppContacts
          handleWhatsApp={handleWhatsApp}
          openWhatsApp={openWhatsApp}
        />
        <Header windowSize={screenWidth} refHeader={refHeader} scrollToContact={scrollToContact} />
        <Services refServices={refServices} />
        <AboutUs
          refAboutUs={refAboutUs}
          refAboutUsTitle={refAboutUsTitle}
          refAboutUsParagraph={refAboutUsParagraph}
        />
        <Clients refClients={refClients} />
        <Projects refProjects={refProjects} />
        <TechStack />
        <Stats />
        <Contact refContact={refContact} />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const navigate = useNavigate();

  //referencias
  const refHeader = useRef();
  const refAboutUs = useRef();
  const refAboutUsTitle = useRef();
  const refAboutUsParagraph = useRef();
  const refServices = useRef();
  const refClients = useRef();
  const refProjects = useRef();
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

  const scrollToContact = () => {
    scrollHandler(refContact);
  };

  const itemsNavbar = [
    { nameKey: "nav.home", ref: refHeader },
    { nameKey: "nav.aboutUs", ref: refAboutUs },
    { nameKey: "nav.services", ref: refServices },
    { nameKey: "nav.clients", ref: refClients },
    { nameKey: "nav.contact", ref: refContact },
  ];

  function scrollHandler2() {
    const triggerBottom = window.innerHeight * 0.9;
    const aboutTitle = refAboutUsTitle?.current;
    const aboutParagraph = refAboutUsParagraph?.current;

    const servicesCards =
      refServices?.current?.querySelectorAll(".service-card");
    /*const projectsCards = refProjects.current.querySelectorAll(".project-card");*/
    const socialMedia = refContact?.current?.querySelector(
      ".contact-social-media",
    );

    const projects = refProjects?.current;
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
    window.addEventListener("scroll", scrollHandler2);
    return () => {
      window.removeEventListener("resize", handleScreenWidth);
      window.removeEventListener("click", handleExitMenu);
      window.removeEventListener("scroll", scrollHandler2);
    };
  }, [showMobileMenu]);

  const [openWhatsApp, setOpenWhatsApp] = useState(false);

  const handleWhatsApp = () => {
    setOpenWhatsApp(!openWhatsApp);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            screenWidth={screenWidth}
            scrollHandler={scrollHandler}
            scrollToContact={scrollToContact}
            itemsNavbar={itemsNavbar}
            handleShowMobileMenu={handleShowMobileMenu}
            refMobileMenu={refMobileMenu}
            openWhatsApp={openWhatsApp}
            handleWhatsApp={handleWhatsApp}
            refHeader={refHeader}
            refServices={refServices}
            refClients={refClients}
            refProjects={refProjects}
            refAboutUs={refAboutUs}
            refAboutUsTitle={refAboutUsTitle}
            refAboutUsParagraph={refAboutUsParagraph}
            refContact={refContact}
          />
        }
      />
      <Route
        path="/privacy"
        element={
          <>
            <PrivacyPolicy />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
