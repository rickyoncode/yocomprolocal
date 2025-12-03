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

  const radarEmbed = `https://maps.radar.com/embed/?publishableKey=prj_live_pk_a52452173d95e1bc011a4e4cc350dbb5fc5a293c&center=${business.coords.lat},${business.coords.lng}&zoom=15&marker=${business.coords.lat},${business.coords.lng}`;

  return (
    <div className="container">
      <Link href="/" className="back-link">
        ← Volver
      </Link>

      <div className="business-card">
        <h1 className="business-title">{business.name}</h1>

        <div className="map-container">
          <iframe
            src={radarEmbed}
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

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
