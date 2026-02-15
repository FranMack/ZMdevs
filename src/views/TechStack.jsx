import { techStack } from "../assets/tech/techIcons";
import { useTranslation } from "../hooks/useTranslation";

function TechStack() {
  const { t } = useTranslation();

  return (
    <section className="techstack-container">
      <h3 className="techstack-title">{t("tech.title")}</h3>
      <div className="techstack-groups">
        {techStack.map((group, i) => (
          <div className="techstack-group" key={i}>
            <h4 className="techstack-category">{group.category}</h4>
            <div className="techstack-items">
              {group.items.map((tech, j) => (
                <div className="techstack-item" key={j}>
                  <div className="techstack-icon">{tech.icon}</div>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
