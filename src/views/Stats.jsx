import { useTranslation } from "../hooks/useTranslation";

const stats = [
  { number: "+20", key: "stats.projects" },
  { number: "+3", key: "stats.countries" },
  { number: "+9", key: "stats.years" },
  { number: "100%", key: "stats.clients" },
];

function Stats() {
  const { t } = useTranslation();

  return (
    <section className="stats-container">
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div className="stats-item" key={i}>
            <span className="stats-number">{stat.number}</span>
            <span className="stats-label">{t(stat.key)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
