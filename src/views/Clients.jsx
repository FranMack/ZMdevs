import { servicesArray } from "../assets/our_services/info";
import ServicesCard from "../components/ServicesCard";
import { infoClientes } from "../assets/clientes/infoClientes";

function Clients({ refClients }) {
  return (
    <>
      <section ref={refClients} className="clients-container ">
        <h3 className="clients-section-title">CLIENTES</h3>

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
