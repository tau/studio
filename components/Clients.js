import Square from './Square'

export default function Clients({clients, max}) {

  if(!max) {
    max = 14;
  }  

  return (
    <>
      <section>
        <section className="content">
          <section className="square-grid">        
            {clients.slice(0, max).map((client, i) => (
              <Square client={client} index={i} />
            ))}
          </section>
        </section>
      </section>
    </>
  );
}