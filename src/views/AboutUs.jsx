import { useContext } from "react";
import { LanguageContext } from "../context";

export function AboutUs({ refAboutUs, refAboutUsTitle, refAboutUsParagraph }) {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <section ref={refAboutUs} className="aboutUs-container">
        <h3 ref={refAboutUsTitle} className="section-title">
          {language === "spanish" ? "Sobre Nosotros" : "About Us"}
        </h3>

        <div ref={refAboutUsParagraph} className="aboutUs-center-container">
          <article>
            <h4>
              {language === "spanish" ? "¿Quienes somos?" : "Who are we?"}?{" "}
            </h4>
            <p>
              {language === "spanish"
                ? "      Somos un equipo de desarrolladores y diseñadores comprometidos con la excelencia. En ZM, combinamos nuestra sólida experiencia en desarrollo de software con un equipo de diseño creativo y experto.Antes reconocidos por nuestra excelencia en programación, ahora ofrecemos una gama completa de servicios para cubrir todas la necesidades de nuestros clientes."
                : "We are a team of developers and designers committed to excellence. At ZM, we combine our solid expertise in software development with a creative and skilled design team. Formerly recognized for our excellence in programming, we now offer a full range of services to meet all our clients' needs."}
            </p>
          </article>
          <article>
            <h4>{language === "spanish" ? " ¿Qué hacemos?" : "What we do?"}</h4>
            <p>
              {language === "spanish"
                ? "Nos especializamos en crear soluciones integrales y personalizadas que abarcan desde el diseño hasta el desarrollo. Entendemos a fondo cada proyecto y nos adaptamos rápidamente a los cambios para asegurar resultados óptimos. La colaboración estrecha con nuestros clientes en cada fase es clave para nuestro enfoque."
                : "We specialize in creating comprehensive and customized solutions that cover everything from design to development. We deeply understand each project and adapt quickly to changes to ensure optimal results. Close collaboration with our clients at every stage is key to our approach."}
            </p>
          </article>
          <article>
            <h4>{language === "spanish" ? "Nuestro objetivo" : "Our goal"}</h4>
            <p>
              {language === "spanish"
                ? " Nuestro objetivo es proporcionar soluciones innovadoras que no solo cumplan, sino que superen los objetivos de nuestros clientes. Nos esforzamos por la excelencia en cada aspecto de nuestros proyectos, garantizando resultados efectivos y creativos."
                : "Our goal is to deliver innovative solutions that not only meet but exceed our clients' objectives. We strive for excellence in every aspect of our projects, ensuring effective and creative results."}
            </p>
          </article>
          <article>
            <h4>
              {language === "spanish" ? "Nuestro propósito" : "Our purpose"}
            </h4>
            <p>
              {language === "spanish"
                ? "      Somos apasionados por crear soluciones que fusionan diseño y tecnología de manera efectiva. Creemos en la comunicación abierta y en la colaboración constante para asegurar el éxito rotundo de cada proyecto que emprendemos."
                : "We are passionate about creating solutions that effectively merge design and technology. We believe in open communication and constant collaboration to ensure the absolute success of every project we undertake."}
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
