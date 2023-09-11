const products = [
  {
    id: 1,
    name: "Crema Cielo",
    category: "Cuidado facial",
    description: "hidratante facial",
    brand: "Kamikaze",
    price: 5800,
    stock: 5,
    img: "/fotosproductos/fotoproducto-cremacielo.jpg",
  },
  {
    id: 2,
    name: "Espuma Nube",
    category: "Cuidado facial",
    description: "espuma de limpieza facial",
    brand: "Kamikaze",
    price: 3400,
    stock: 10,
    img: "/fotosproductos/fotoproducto-espumanube.jpg",
  },
  {
    id: 3,
    name: "Scrub facial de almendras",
    category: "Cuidado facial",
    description: "exfoliante facial",
    brand: "Kamikaze",
    price: 3800,
    stock: 1,
    img: "/fotosproductos/fotoproducto-scrubfacial.jpg",
  },
  {
    id: 4,
    name: "Mascarilla Neptuno",
    category: "Cuidado facial",
    description: "mascarilla de arcillas facial",
    brand: "Kamikaze",
    price: 3000,
    stock: 3,
    img: "/fotosproductos/fotoproducto-mascarillaneptuno.jpg",
  },
  {
    id: 5,
    name: "Shampoo solido",
    category: "Cuidado capilar",
    description: "shampoo fortalecedor y reparador",
    brand: "Kamikaze",
    price: 2500,
    stock: 1,
    img: "/fotosproductos/fotoproducto-shampoo.jpg",
  },
  {
    id: 6,
    name: "Acondicionador solido",
    category: "Cuidado capilar",
    description: "hidratacion intensa",
    brand: "Kamikaze",
    price: 2500,
    stock: 2,
    img: "/fotosproductos/fotoproducto-acondicionador.jpg",
  },
  {
    id: 7,
    name: "Balsamo labial",
    category: "Cuidado labial",
    description: "balsamo labial con color y aroma",
    brand: "Kamikaze",
    price: 2270,
    stock: 1,
    img: "/fotosproductos/fotoproducto-balsamolabial.jpg",
  },
  {
    id: 8,
    name: "Pad XL",
    category: "Accesorios",
    description: "Pad facial reutilizable",
    brand: "Kamikaze",
    price: 900,
    stock: 3,
    img: "/fotosproductos/fotoproducto-padxl.jpg",
  },
  {
    id: 9,
    name: "Gua sha",
    category: "Accesorios",
    description: "Piedra para masaje facial",
    brand: "Kamikaze",
    price: 3000,
    stock: 3,
    img: "/fotosproductos/fotoproducto-guasha.jpg",
  },
  {
    id: 10,
    name: "Hidrolato de rosas",
    category: "Cuidado facial",
    description: "Tonico hidratnate",
    brand: "Kamikaze",
    price: 3860,
    stock: 3,
    img: "/fotosproductos/fotoproducto-hidrolatoderosas.jpg",
  },
  {
    id: 11,
    name: "Aceite de jojoba",
    category: "Cuidado facial",
    description: "Aceite controlador de sebo",
    brand: "Kamikaze",
    price: 2800,
    stock: 2,
    img: "/fotosproductos/fotoproducto-aceitedejojoba.jpg",
  },
  {
    id: 12,
    name: "Roll-on Magnolia",
    category: "Cuidado facial",
    description: "contorno de ojos",
    brand: "Kamikaze",
    price: 5000,
    stock: 2,
    img: "/fotosproductos/fotoproducto-rollonmagnolia.jpg",
  },
  {
    id: 13,
    name: "Halo lunar",
    category: "Cuidado facial",
    description: "Agua micelar",
    brand: "Kamikaze",
    price: 3000,
    stock: 3,
    img: "/fotosproductos/fotoproducto-aguamicelar.jpg",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
