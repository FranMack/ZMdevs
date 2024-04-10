



function ServicesCard({title,description,image}){

    return(<>
    <div className="service-card efectoRevealOut">
        <div className="flip-card">
            <div className="flip-card-front">
    <div className="service-icon-container-front">
            {image}
        </div>
       
        <h2>{title}</h2>
        
        
        
        </div>
        <div className="flip-card-back">
       
        <h2>{title}</h2>
        <p>{description}</p>
        </div>
        </div>
    </div>
    </>)
}
export default ServicesCard;