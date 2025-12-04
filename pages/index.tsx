import Link from "next/link";
import { useEffect } from "react";
import { data } from "../data/businesses";

function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "");
}

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      // Immediately scroll to top to prevent browser's instant jump
      window.scrollTo(0, 0);

      const element = document.getElementById(hash);
      if (element) {
        // Small delay to ensure DOM is ready, then smooth scroll
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>#YoComproLocal</h1>
        <p className="subtitle">Apoya a los negocios de tu comunidad</p>
      </header>

      <main>
        {data.map(town => (
          <section key={town.town} id={normalizeString(town.town)} className="town-section">
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
