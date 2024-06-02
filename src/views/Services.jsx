import { servicesArray } from "../assets/our_services/info";
import ServicesCard from "../components/ServicesCard";
import { useContext } from "react";
import { LanguageContext } from "../context/useContext";
function Services({refServices}){

    const { language } = useContext(LanguageContext);

    return(
        <section ref={refServices} className="services-container">
        <h3 className="services-section-title">{language==="spanish" ? "SERVICIOS" :"SERVICES"}</h3>

        
       
        <div className="services-center-container"  >
            
        
            {servicesArray.map((service,i)=>{
                return (
                <ServicesCard key={i} title={language==="spanish" ?service.titleSpanish:service.titleEnglish} description={language==="spanish" ?service.descriptionSpanish:service.descriptionEnglish} image={service.image}/>
            )
            })}
           
     
        </div>

        

    </section>
    )
}

export default Services;