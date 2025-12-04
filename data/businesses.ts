export interface Business {
  id: string;
  name: string;
  images: string[];
  address: string;
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
    town: "Los Lagos",
    businesses: [
      {
        id: "ll2",
        name: "GoMarket",
        images: ["/img/placeholder.jpg"],
        address: "Avenida 11 de Septiembre 117, Los Lagos",
        coords: { lat: -39.8614, lng: -72.8264 },
        phone: "+56957621088",
        whatsapp: "https://wa.me/56957621088",
        instagram: "https://www.instagram.com/gomarket_cl",
        description: "Minimarket en Avenida 11 de Septiembre 117, Los Lagos. Productos locales: Natucrafts, Aguas Newenko, Colmenares Pancul, Mermeladas Flor."
      },
      {
        id: "ll1",
        name: "Minimarket T21",
        images: ["/img/placeholder.jpg"],
        address: "Los Lagos",
        coords: { lat: -39.8614, lng: -72.8264 },
        phone: "",
        whatsapp: "",
        instagram: "",
        description: "Minimarket con productos locales en Los Lagos."
      }
    ]
  },
  {
    town: "Paillaco",
    businesses: [
      {
        id: "p1",
        name: "Restaurante Nueva Estación",
        images: ["/img/placeholder.jpg"],
        address: "18 de Octubre 840, Paillaco",
        coords: { lat: -40.0714, lng: -72.8697 },
        phone: "+56998107350",
        whatsapp: "https://wa.me/56998107350",
        instagram: "https://www.instagram.com/nueva.estacion.cl/",
        description: "Café y restaurante en 18 de Octubre 840, Paillaco. Trabaja con proveedores locales: Aneley Suyai (joyería), Toqui Taller (artesanía en cuero y lana), LaserCraft (grabado y corte láser)."
      }
    ]
  },
  {
    town: "Panguipulli",
    businesses: [
      {
        id: "pg2",
        name: "Almacén Huellahue",
        images: ["/img/placeholder.jpg"],
        address: "Huellahue, Panguipulli",
        coords: { lat: -39.6142, lng: -72.3654 },
        phone: "+56971278140",
        whatsapp: "https://wa.me/56971278140",
        instagram: "https://www.facebook.com/share/14pfLwfnv2/",
        description: "Almacén en Huellahue, Panguipulli. Productos locales: miel, productos de huertas locales, cerveza artesanal, vinagre de manzana. Proveedores: Frutería Coz Coz, Apícola Rena, Llagar de Barría."
      },
      {
        id: "pg1",
        name: "Casa Boqui",
        images: ["/img/placeholder.jpg"],
        address: "José Miguel Carrera 631, Panguipulli",
        coords: { lat: -39.6433, lng: -72.3322 },
        phone: "+56975443804",
        whatsapp: "https://wa.me/56975443804",
        instagram: "https://www.instagram.com/hostalcasaboqui/",
        description: "Emporio y hostal con productos locales: miel, agua, fermentos, encurtidos, artesanía en madera y lana, pizzas, ilustraciones, cerámica en greda."
      }
    ]
  },
  {
    town: "Valdivia",
    businesses: [
      {
        id: "v6",
        name: "Barbudo Growler",
        images: ["/img/placeholder.jpg"],
        address: "Beauchef 641, Valdivia",
        coords: { lat: -39.8185, lng: -73.2456 },
        phone: "+56968756859",
        whatsapp: "https://wa.me/56968756859",
        instagram: "https://www.instagram.com/barbudogrowler",
        description: "Tienda especializada en cervezas artesanales (más de 20 variedades), chocolates, dulces, kombuchas e hidromiel. Ubicado al costado trasero de Mall Plaza Los Ríos."
      },
      {
        id: "v12",
        name: "Bio Despensa",
        images: ["/img/placeholder.jpg"],
        address: "Yungay 768, Valdivia",
        coords: { lat: -39.8142, lng: -73.2459 },
        phone: "+56984692684",
        whatsapp: "https://wa.me/56984692684",
        instagram: "https://www.instagram.com/biodespensa.cl",
        description: "Productos orgánicos y naturales en Yungay 768, Valdivia."
      },
      {
        id: "v7",
        name: "Café Poiesis",
        images: ["/img/placeholder.jpg"],
        address: "Yungay 768, Valdivia",
        coords: { lat: -39.8142, lng: -73.2459 },
        phone: "+56937576440",
        whatsapp: "https://wa.me/56937576440",
        instagram: "https://www.instagram.com/cafepoiesis",
        description: "Café cultural en Yungay 768, Valdivia."
      },
      {
        id: "v13",
        name: "Carnicería Vegana Del Río",
        images: ["/img/placeholder.jpg"],
        address: "Cochrane 489, Valdivia",
        coords: { lat: -39.8138, lng: -73.2465 },
        phone: "+56983704730",
        whatsapp: "https://wa.me/56983704730",
        instagram: "https://www.instagram.com/delrio.carniceriavegana",
        description: "Primera carnicería vegana de Valdivia. Embutidos, seitán y soja para asados. Envíos sustentables con Cargo Cleta."
      },
      {
        id: "v1",
        name: "Casa de Guarda",
        images: ["/img/placeholder.jpg"],
        address: "Valdivia",
        coords: { lat: -39.8142, lng: -73.2459 },
        phone: "",
        whatsapp: "",
        instagram: "https://www.instagram.com/casadeguarda/",
        description: "Emporio dedicado a los productores locales de la región de Los Ríos."
      },
      {
        id: "v11",
        name: "Casa Gawa",
        images: ["/img/placeholder.jpg"],
        address: "Yungay 768, Valdivia",
        coords: { lat: -39.8142, lng: -73.2459 },
        phone: "+56976033544",
        whatsapp: "https://wa.me/56976033544",
        instagram: "https://www.instagram.com/casa_gawa",
        description: "Papelería y artículos de diseño en Yungay 768, Valdivia."
      },
      {
        id: "v10",
        name: "Cosmética Natural Ganesha",
        images: ["/img/placeholder.jpg"],
        address: "Yungay 768, Valdivia",
        coords: { lat: -39.8142, lng: -73.2459 },
        phone: "+56988892155",
        whatsapp: "https://wa.me/56988892155",
        instagram: "https://www.instagram.com/ganeshanatural",
        description: "Cosmética natural y productos de cuidado personal en Yungay 768, Valdivia."
      },
      {
        id: "v2",
        name: "El Granero",
        images: ["/img/placeholder.jpg"],
        address: "Valdivia",
        coords: { lat: -39.8142, lng: -73.2459 },
        phone: "",
        whatsapp: "",
        instagram: "",
        description: "Tienda de productos naturales y locales."
      },
      {
        id: "v5",
        name: "Espacio Colab",
        images: ["/img/placeholder.jpg"],
        address: "Caupolicán 201, Valdivia",
        coords: { lat: -39.8196, lng: -73.2424 },
        phone: "+56934829791",
        whatsapp: "https://wa.me/56934829791",
        instagram: "https://www.instagram.com/comparte.cafe",
        description: "Café y espacio colaborativo en Galería Caupolicán. Productos locales: miel, mermeladas, cuchuflí, alfajores."
      },
      {
        id: "v3",
        name: "La Rotonda",
        images: ["/img/placeholder.jpg"],
        address: "Los Robles 500, Valdivia",
        coords: { lat: -39.8350, lng: -73.2380 },
        phone: "",
        whatsapp: "",
        instagram: "",
        description: "Licorería y comercio local en Valdivia."
      },
      {
        id: "v9",
        name: "Librería Gato Caulle",
        images: ["/img/placeholder.jpg"],
        address: "Yungay 768, Valdivia",
        coords: { lat: -39.8142, lng: -73.2459 },
        phone: "+56961514101",
        whatsapp: "https://wa.me/56961514101",
        instagram: "https://www.instagram.com/gatocaulle",
        description: "Librería independiente en Yungay 768, Valdivia."
      },
      {
        id: "v14",
        name: "Sensorial",
        images: ["/img/placeholder.jpg"],
        address: "Valdivia",
        coords: { lat: -39.8142, lng: -73.2459 },
        phone: "",
        whatsapp: "",
        instagram: "",
        description: "Tienda de productos sensoriales y bienestar en Valdivia."
      },
      {
        id: "v4",
        name: "Teja Market",
        images: ["/img/placeholder.jpg"],
        address: "Los Helechos 500, Isla Teja, Valdivia",
        coords: { lat: -39.8280, lng: -73.2520 },
        phone: "+56632226634",
        whatsapp: "https://wa.me/56995586029",
        instagram: "",
        description: "Supermercado en Isla Teja con productos locales: Nobleza Artesanal, Ají Rey Trebol, Santo Grano Café, Taller Dulce, Valquillo, Cerveza Mad Charlies, Mermeladas Viola, La Granolera, Pastelería Trica, Cecinas Campero."
      },
      {
        id: "v8",
        name: "Trama Taller",
        images: ["/img/placeholder.jpg"],
        address: "Yungay 768, Valdivia",
        coords: { lat: -39.8142, lng: -73.2459 },
        phone: "+56957906606",
        whatsapp: "https://wa.me/56957906606",
        instagram: "https://www.instagram.com/trama.tiendataller",
        description: "Tienda taller de diseño y artesanía en Yungay 768, Valdivia."
      }
    ]
  }
];
