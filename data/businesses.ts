export interface Business {
  id: string;
  name: string;
  images: string[];
  coords: { lat: number; lng: number };
  phone: string;
  whatsapp: string;
  instagram: string;
  description: string;
}

export interface Town {
  town: string;
  businesses: Business[];
}

export const data: Town[] = [
  {
    town: "Paillaco",
    businesses: [
      {
        id: "n1",
        name: "Panadería Don José",
        images: ["/img/n1-1.jpg", "/img/n1-2.jpg"],
        coords: { lat: -40.072, lng: -72.866 },
        phone: "+56911111111",
        whatsapp: "https://wa.me/56911111111",
        instagram: "https://instagram.com/panaderiadonjose",
        description: "La mejor panadería artesanal de Paillaco. Pan amasado, empanadas y pasteles caseros todos los días."
      },
      {
        id: "n2",
        name: "Ferretería El Martillo",
        images: ["/img/n2-1.jpg"],
        coords: { lat: -40.073, lng: -72.867 },
        phone: "+56922222222",
        whatsapp: "https://wa.me/56922222222",
        instagram: "",
        description: "Todo en herramientas y materiales de construcción. Atención personalizada y los mejores precios."
      },
      {
        id: "n3",
        name: "Verdulería La Huerta",
        images: ["/img/n3-1.jpg", "/img/n3-2.jpg", "/img/n3-3.jpg"],
        coords: { lat: -40.071, lng: -72.865 },
        phone: "+56933333333",
        whatsapp: "https://wa.me/56933333333",
        instagram: "https://instagram.com/lahuertapaillaco",
        description: "Frutas y verduras frescas directo del campo. Productos orgánicos y de temporada."
      }
    ]
  },
  {
    town: "La Unión",
    businesses: [
      {
        id: "n4",
        name: "Restaurante El Fogón",
        images: ["/img/n4-1.jpg", "/img/n4-2.jpg"],
        coords: { lat: -40.293, lng: -73.084 },
        phone: "+56944444444",
        whatsapp: "https://wa.me/56944444444",
        instagram: "https://instagram.com/elfogonlaunion",
        description: "Comida típica chilena. Cazuelas, asados y mariscos frescos. Ambiente familiar."
      },
      {
        id: "n5",
        name: "Librería y Papelería Central",
        images: ["/img/n5-1.jpg"],
        coords: { lat: -40.294, lng: -73.083 },
        phone: "+56955555555",
        whatsapp: "",
        instagram: "",
        description: "Artículos escolares, libros y servicios de fotocopiado. Tu aliado para el estudio."
      }
    ]
  },
  {
    town: "Río Bueno",
    businesses: [
      {
        id: "n6",
        name: "Carnicería Don Pedro",
        images: ["/img/n6-1.jpg", "/img/n6-2.jpg"],
        coords: { lat: -40.333, lng: -72.958 },
        phone: "+56966666666",
        whatsapp: "https://wa.me/56966666666",
        instagram: "https://instagram.com/carniceriadonpedro",
        description: "Carnes de primera calidad. Cortes especiales para asados y parrilladas."
      },
      {
        id: "n7",
        name: "Peluquería Estilo",
        images: ["/img/n7-1.jpg"],
        coords: { lat: -40.332, lng: -72.957 },
        phone: "+56977777777",
        whatsapp: "https://wa.me/56977777777",
        instagram: "https://instagram.com/estiloriobueno",
        description: "Cortes modernos y clásicos. Atención para toda la familia. Reserva tu hora."
      }
    ]
  }
];
