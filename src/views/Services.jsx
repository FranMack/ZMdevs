import { useContext } from "react";
import { servicesArray } from "../assets/our_services/info";
import ServicesCard from "../components/ServicesCard";
import { LanguageContext } from "../context";
function Services({ refServices }) {
  const { language } = useContext(LanguageContext);

  return (
    <section ref={refServices} className="services-container">
      <h3 className="services-section-title">
        {language === "spanish" ? "Servicios" : "Services"}
      </h3>

      <p className="services-section-description">
        {language === "spanish"
          ? "Desarrollamos soluciones de software a medida, desde la conceptualización y validación de ideas hasta la implementación de productos completos, adaptándonos a las necesidades específicas de cada cliente."
          : "We develop custom software solutions, from conceptualization and idea validation to the implementation of complete products, tailored to meet each client's specific needs."}
      </p>

      <div className="services-center-container">
        {servicesArray.map((service, i) => {
          return (
            <ServicesCard
              key={i}
              title={
                language === "spanish"
                  ? service.titleSpanish
                  : service.titleEnglish
              }
              description={
                language === "spanish"
                  ? service.descriptionSpanish
                  : service.descriptionEnglish
              }
              image={service.image}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Services;
