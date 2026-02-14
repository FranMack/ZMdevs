import { useEffect, useState } from "react";
import { arrows } from "../assets/icons/icons";
import { projectsInfo } from "../assets/projects/projectsInfo";
import { useTranslation } from "../hooks/useTranslation";
import { ScreenSizeContext } from "../context/";
import { useContext } from "react";

function Projects({ refProjects }) {
  const { t } = useTranslation();
  const [projectIndex, setProjectIndex] = useState(0);

  const handleProjectIndex = (index) => {
    setProjectIndex(index);
    setCarrouselIndex(0);
    setNumberOfPhotos(projectsInfo[index].carrousel.length);
  };

  const linkTo = (link) => {
    window.open(link, "_blank");
  };

  const [carrouselIndex, setCarrouselIndex] = useState(0);
  const [numberOfPhotos, setNumberOfPhotos] = useState(
    projectsInfo[projectIndex].carrousel.length
  );

  const [isAnimating, setIsAnimating] = useState(false);

  const handleImageChange = (nextIndex) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCarrouselIndex(nextIndex);
      setIsAnimating(false);
    }, 500); // La duración debe coincidir con la animación CSS
  };
  const nextImage = () => {
    const nextIndex =
      carrouselIndex < numberOfPhotos - 1 ? carrouselIndex + 1 : 0;
    handleImageChange(nextIndex);
  };

  const previousImage = () => {
    const prevIndex =
      carrouselIndex > 0 ? carrouselIndex - 1 : numberOfPhotos - 1;
    handleImageChange(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCarrouselIndex((prevIndex) => (prevIndex + 1) % numberOfPhotos);
    }, 4000);

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, [numberOfPhotos]);

  const { screenWidth } = useContext(ScreenSizeContext);

  return (
    <section className="projects-container">
      <h3 className="projects-section-title">
        {t("projects.title")}
      </h3>

      <div ref={refProjects} className="projects-center-container">
        <div className="projects-internal-center-container">
          {/* <h4>
            {t("projects.subtitle")}
          </h4> */}
          <ul className="projects-list">
            {projectsInfo.map((project, i) => {
              return (
                <li
                  onClick={() => {
                    handleProjectIndex(i);
                  }}
                  className={`projet-item-container ${
                    projectIndex === i ? "projects-list-focus" : ""
                  } `}
                  key={project.name}
                >
                  <strong>{project.name}</strong>
                  <p>{project.type}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="projects-internal-center-container right">
          <div
            className={`image-container ${
              projectsInfo[projectIndex].type === "Mobile app" ? "image-container-mobile" : ""
            }`}
          >
            {screenWidth > 680
              ? projectsInfo[projectIndex].carrousel.map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    alt={`Proyecto ${i}`}
                    className={
                      carrouselIndex === i
                        ? isAnimating
                          ? "active"
                          : "active"
                        : "exiting"
                    }
                  />
                ))
              : projectsInfo[projectIndex].mobileCarrousel.map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    alt={`Proyecto ${i}`}
                    className={`

                  ${
                    carrouselIndex === i
                      ? isAnimating
                        ? "active"
                        : "active"
                      : "exiting"
                  }`}
                  />
                ))}
          </div>
          <div className="bullet-container">
            {projectsInfo[projectIndex].carrousel.map((_, i) => {
              return (
                <div
                  key={i}
                  className={`${
                    carrouselIndex === i ? "bullet-focus" : "bullet"
                  }`}
                ></div>
              );
            })}
          </div>
          <button onClick={previousImage} className="arrow-button left-button">
            {arrows.left}
          </button>
          <button onClick={nextImage} className="arrow-button right-button">
            {arrows.right}
          </button>
          <div className="button-container">
            <button onClick={() => linkTo(projectsInfo[projectIndex].link)}>
              {t("projects.visitSite")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
