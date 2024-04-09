




function ProjectCard({title,description,image}){

    return(<>
    <div className="project-card revealOutProjectCard">
    <div className="project-icon-container">
            {image}
        </div>
       
        <h2>{title}</h2>
        <p>{description}</p>
        
        
        

    </div>
    </>)
}
export default ProjectCard;