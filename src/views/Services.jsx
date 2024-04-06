import { servicesArray } from "../assets/our_services/info";
import ServicesCard from "../components/ServicesCard";
servicesArray
function Services({refServices}){

    return(
        <section ref={refServices} className="services-container">
        <h3 className="services-section-title">SERVICES</h3>

        
       
        <div className="services-center-container"  >
            
        
            {servicesArray.map((service,i)=>{
                return (<ServicesCard key={i} title={service.title} description={service.description} image={service.image}/>)
            })}
           
     
        </div>

        

    </section>
    )
}

export default Services;