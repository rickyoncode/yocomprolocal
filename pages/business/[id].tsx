import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { data, Business } from "../../data/businesses";

interface Props {
  business: Business | null;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.flatMap(t =>
    t.businesses.map(b => ({ params: { id: b.id } }))
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const business = data
    .flatMap(t => t.businesses)
    .find(b => b.id === params?.id) || null;
  return { props: { business } };
};

export default function BusinessCard({ business }: Props) {
  if (!business) {
    return (
      <div className="container">
        <div className="not-found">
          <p>Negocio no encontrado</p>
          <Link href="/" className="back-link">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${business.coords.lat},${business.coords.lng}`;

  return (
    <div className="container">
      <Link href="/" className="back-link">
        ← Volver
      </Link>

      <div className="business-card">
        <h1 className="business-title">{business.name}</h1>

        {business.address && (
          <p className="business-address">{business.address}</p>
        )}

        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="map-container">
          <img
            src={`/img/maps/${business.id}.png`}
            alt={`Mapa de ${business.name}`}
            className="map-image"
            loading="lazy"
          />
          <span className="map-overlay">Ver en Google Maps</span>
        </a>

        <div className="contact-links">
          {business.phone && (
            <a href={`tel:${business.phone}`} className="contact-link phone">
              <span className="icon">📞</span>
              <span>Llamar</span>
            </a>
          )}
          {business.whatsapp && (
            <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-link whatsapp">
              <span className="icon">💬</span>
              <span>WhatsApp</span>
            </a>
          )}
          {business.instagram && (
            <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="contact-link instagram">
              <span className="icon">📸</span>
              <span>Instagram</span>
            </a>
          )}
        </div>

        {business.description && (
          <div className="description">
            <h3>Descripción</h3>
            <p>{business.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
