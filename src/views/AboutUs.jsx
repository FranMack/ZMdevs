import franPicture from "../assets/images/fran_profile.png";
import cocoPicture from "../assets/images/coco_profile.png";
function AboutUs({ refAboutUs }) {
  return (
    <>
      <section ref={refAboutUs} className="aboutUs-container">
        <h3 className="section-title">NOSOTROS</h3>

        <article className="aboutUs-intro">
          <p>
            "Somos un equipo de desarrolladores comprometidos con la excelencia en cada línea de código.<br/>Nos destacamos por nuestra capacidad para comprender las necesidades específicas de cada proyecto y adaptarnos rápidamente a los cambios. Creemos en la comunicación abierta y la colaboración estrecha con nuestros clientes en cada etapa del proceso de desarrollo. Nos apasiona crear soluciones innovadoras que cumplan los objetivos de nuestros clientes."
          </p>
        </article>

        <div className="aboutUs-center-container efectoRevealOut">
          <article className="aboutUs-article ">
            <div className="aboutUs-profile">
              <img src={cocoPicture} alt="" />
            </div>
            <h4>Carlos Zaburlin</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At rem
              qui hic illo esse vitae quos! Facilis ullam voluptates
              repellendus, nulla dolores eum error officia repellat consequatur
              accusantium cum blanditiis?
            </p>
          </article>
          <article className="aboutUs-article">
            <div className="aboutUs-profile">
              <img src={franPicture} alt="" />
            </div>
            <h4>Francisco Mackinnon</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At rem
              qui hic illo esse vitae quos! Facilis ullam voluptates
              repellendus, nulla dolores eum error officia repellat consequatur
              accusantium cum blanditiis?
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
