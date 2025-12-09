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
        coords: { lat: -39.8651458771166, lng: -72.80385343067616 },
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
        coords: { lat: -39.863525627774045, lng: -72.81347168464384 },
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
        coords: { lat: -40.07087109988563, lng: -72.87748900339594 },
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
        coords: { lat: -39.6063667818735, lng: -72.36612500814591 },
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
        coords: { lat: -39.64380654866019, lng: -72.3311145604644 },
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
        coords: { lat: -39.817281279921964, lng: -73.24291846709559 },
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
        coords: { lat: -39.81519184298723, lng: -73.24799756099262 },
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
        coords: { lat: -39.81689466396519, lng: -73.24842680146949 },
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
        coords: { lat: -39.81945406046043, lng: -73.24458051496173 },
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
        coords: { lat: -39.813533971871976, lng: -73.24680614564913 },
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
        coords: { lat: -39.81676558566284, lng: -73.24853946099239 },
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
        coords: { lat: -39.816992583570304, lng: -73.24848077264491 },
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
        coords: { lat: -39.79674487871188, lng: -73.21880844379824 },
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
        coords: { lat: -39.81112062020718, lng: -73.24339425622723 },
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
        coords: { lat: -39.809530717870224, lng: -73.25798312922214 },
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
        coords: { lat: -39.816990841862044, lng: -73.24832362845419 },
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
        coords: { lat: -39.815964254258176, lng: -73.2467915284542 },
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
        coords: { lat: -39.80887234534652, lng: -73.2575376475004 },
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
        coords: { lat: -39.81681123403549, lng: -73.2484302149619 },
        phone: "+56957906606",
        whatsapp: "https://wa.me/56957906606",
        instagram: "https://www.instagram.com/trama.tiendataller",
        description: "Tienda taller de diseño y artesanía en Yungay 768, Valdivia."
      }
    ]
  }
];
