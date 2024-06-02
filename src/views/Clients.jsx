import { servicesArray } from "../assets/our_services/info";
import ServicesCard from "../components/ServicesCard";
import { infoClientes } from "../assets/clientes/infoClientes";
import { useContext } from "react";
import { LanguageContext } from "../context/useContext";

function Clients({ refClients }) {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <section ref={refClients} className="clients-container ">
        <h3 className="clients-section-title">{language==="spanish" ? "CLIENTES" :"CLIENTS"}</h3>

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
