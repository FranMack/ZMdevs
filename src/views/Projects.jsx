import { useRef, useState } from "react";
import { servicesArray } from "../assets/our_services/info";
import { arrows } from "../assets/icons/icons";
import ProjectCard from "../components/ProjectCard";

function Projects({ refProjects }) {
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (scrollDirection) => {
    const scrollAmount = 200; // Ajusta según tus necesidades
    const container = scrollContainerRef.current;

    if (container) {
      if (scrollDirection === "left") {
        container.scrollLeft -= scrollAmount;
        setScrollPosition(container.scrollLeft);
      } else {
        container.scrollLeft += scrollAmount;
        setScrollPosition(container.scrollLeft);
      }
    }
  };

  return (
    <section ref={refProjects} className="projects-container">
      <h3 className="services-section-title" style={{ color: "black" }}>
        CLIENTES
      </h3>

      <div className="horizontal-scroll-container">
        <div className="arrows-left" onClick={() => handleScroll("left")}>
          {arrows.left}
        </div>
        <div className="projects-center-container" ref={scrollContainerRef}>
          {servicesArray.map((service, i) => {
            return (
              <ProjectCard
                key={i}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            );
          })}
        </div>

        <div className="arrows-right" onClick={() => handleScroll("right")}>
          {arrows.right}
        </div>
      </div>
    </section>
  );
}

export default Projects;
