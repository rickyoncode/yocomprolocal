import Link from "next/link";
import { data } from "../data/businesses";

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>#YoComproLocal</h1>
        <p className="subtitle">Apoya a los negocios de tu comunidad</p>
      </header>

      <main>
        {data.map(town => (
          <section key={town.town} className="town-section">
            <h2 className="town-title">{town.town}</h2>

            <div className="business-list">
              {town.businesses.map(b => (
                <Link href={`/business/${b.id}`} key={b.id} className="business-link">
                  <div className="business-item">
                    <span className="business-name">{b.name}</span>
                    <span className="arrow">›</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="footer">
        <p>Hecho con amor para nuestra comunidad</p>
      </footer>
    </div>
  );
}
