import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carrusel from "./components/Carrusel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./views/AboutUs";
import Contact from "./views/Contact";
import Header2 from "./views/Header2";
import Projects from "./views/Projects";
import Services from "./views/Services";

function App() {
  const navigate = useNavigate();

  const [carruselOn, setCarusselOn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCarusselOn(true);
    }, 6000);
  }, []);

  //referencias
  const refHeader = useRef();
  const refAboutUs = useRef();
  const refServices = useRef();
  const refProjects = useRef();
  const refContact = useRef();

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
    { name: "About us", ref: refAboutUs },
    { name: "Services", ref: refServices },
    { name: "Projects", ref: refProjects },
    { name: "Contact us", ref: refContact },
  ];

  window.addEventListener("scroll", scrollHandler2);

  function scrollHandler2() {
    const triggerBottom = window.innerHeight * 0.9;
    const aboutUsInfo = refAboutUs.current.querySelector(
      ".aboutUs-center-container"
    );
    const servicesCards = refServices.current.querySelectorAll(".service-card");
    const projectsCards = refProjects.current.querySelectorAll(".project-card");
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

    projectsCards.forEach((card, i) => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom) {
        card.classList.add("revealProjectCard");
      } else {
        card.classList.remove("revealProjectCard");
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

  return (
    <>
      {carruselOn && (
        <Navbar scrollHandler={scrollHandler} itemsNavbar={itemsNavbar} />
      )}
      <main>
        {carruselOn ? <Carrusel refHeader={refHeader} /> : <Header2 />}

        <AboutUs refAboutUs={refAboutUs} />
        <Services refServices={refServices} />
        <Projects refProjects={refProjects} />
        <Contact refContact={refContact} />
      </main>
      <Footer />
    </>
  );
}

export default App;
