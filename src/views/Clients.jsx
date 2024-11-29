import { useContext } from "react";
import { infoClientes } from "../assets/clientes/infoClientes";
import { LanguageContext } from "../context";

function Clients({ refClients }) {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <section ref={refClients} className="clients-container ">
        <h3 className="clients-section-title">
          {language === "spanish" ? "Confián en nosotros" : "Our Clients"}
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
