



function ServicesCard({title,description,image}){

    return(<>
    <div className="service-card efectoRevealOut">
        
    <div className="service-icon-container">
            {image}
        </div>
       
        <h2>{title}</h2>
        <p>{description}</p>
        
        
        

    </div>
    </>)
}
export default ServicesCard;