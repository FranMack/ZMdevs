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
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Clients;
