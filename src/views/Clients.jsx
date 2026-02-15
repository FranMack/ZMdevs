import { infoClientes } from "../assets/clientes/infoClientes";
import { useTranslation } from "../hooks/useTranslation";

function Clients({ refClients }) {
  const { t } = useTranslation();
  return (
    <>
      <section ref={refClients} className="clients-container ">
        <h3 className="clients-section-title">
          {t("clients.title")}
        </h3>

        <div className="clients-center-container ">
          {infoClientes.map((client, i) => {
            return (
              <div className="client-card" key={i}>
                <img src={client.image} alt={client.name} />
                <p className="client-name">{client.name}</p>
                <span className="client-info">{client.country} · {client.industry}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Clients;
