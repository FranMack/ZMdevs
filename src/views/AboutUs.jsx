import cocoPicture from "../assets/images/coco_profile.png";
import franPicture from "../assets/images/fran_profile.png";
import { useContext } from "react";
import { LanguageContext } from "../context/useContext";
function AboutUs({ refAboutUs }) {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <section ref={refAboutUs} className="aboutUs-container">
        <h3 className="section-title">{language==="spanish" ? "NOSOTROS" :"ABOUT US"}</h3>

        <article className="aboutUs-intro">
          <p>
            {language === "spanish" ? (
              <>
                Somos un equipo de desarrolladores comprometidos con la
                excelencia
                <br />
                en cada línea de código.
                <br />
                <br />
                Nos destacamos por nuestra capacidad para comprender las
                necesidades
                <br />
                específicas de cada proyecto y adaptarnos rápidamente a los
                cambios.
                <br />
                <br />
                Creemos en la comunicación abierta y la colaboración estrecha
                con nuestros clientes en cada etapa del proceso de desarrollo.
                Nos apasiona crear soluciones innovadoras que cumplan los
                objetivos de nuestros clientes.
              </>
            ) : (
              <>
                We are a team of developers committed to
                excellence
                <br />
                in every line of code.
                <br />
                <br />
                We stand out for our ability to understand the
                needs
                <br />
                specific to each project and quickly adapt to the
                changes.
                <br />
                <br />
                We believe in open communication and close collaboration
                with our clients at every stage of the development process.
                We are passionate about creating innovative solutions that meet the
                objectives of our clients.
              </>
            )}
          </p>
        </article>

        <div className="aboutUs-center-container efectoRevealOut">
          <article className="aboutUs-article ">
            <div className="aboutUs-profile">
              <img src={cocoPicture} alt="" />
            </div>
            <h4>Carlos Zaburlin</h4>

            {language === "spanish" ? (
    <>
      <p>
          Analista Informatico Universidad Nacional del Litoral.
              <br />
              Co-fundador de ZMDevs, líder apasionado y visionario en el
              <br />
              campo de la consultoría IT.
            </p>
    </>
  ) : (
    <>
     <p>
            Computer Analyst National University of the Litoral.
              <br />
              Co-founder of ZMDevs, passionate and visionary leader in the
              <br />
              field of IT consulting.
            </p>
    </>
  )}
            
          </article>
          <article className="aboutUs-article">
            <div className="aboutUs-profile">
              <img src={franPicture} alt="" />
            </div>
            <h4>Francisco Mackinnon</h4>

            {language === "spanish" ? (
    <>
         <p>
              Ingeniero Civil Universidad Tecnológica Nacional.
              <br />
              Co-fundador de ZMDevs, desarrollador y gestor de proyectos <br />
              con un enfoque meticuloso y orientado a resultados.
            </p>
    </>
  ) : (
    <>
       <p>
           Civil Engineer National Technological University.
              <br />
              ZMDevs co-founder, developer and project manager<br />
              with a meticulous and results-oriented approach.
            </p>
    </>
  )}
      


         
          </article>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
