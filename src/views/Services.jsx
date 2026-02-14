import { servicesArray } from "../assets/our_services/info";
import ServicesCard from "../components/ServicesCard";
import { useTranslation } from "../hooks/useTranslation";

function Services({ refServices }) {
  const { t } = useTranslation();

  return (
    <section ref={refServices} className="services-container">
      <h3 className="services-section-title">
        {t("services.title")}
      </h3>

      <p className="services-section-description">
        {t("services.description")}
      </p>

      <div className="services-center-container">
        {servicesArray.map((service, i) => {
          return (
            <ServicesCard
              key={i}
              title={t(service.titleKey)}
              description={t(service.descriptionKey)}
              image={service.image}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Services;
