export type MenuItem = {
  slug: string;
  name: string;
  description: string;
  price: string;
};

export type MenuCategory = {
  slug: string;
  name: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    slug: "carnes",
    name: "Carnes na Brasa",
    items: [
      {
        slug: "picanha",
        name: "Picanha Premium",
        description: "Corte nobre, suculento, grelhado na brasa.",
        price: "R$ 59,90",
      },
      {
        slug: "fraldinha",
        name: "Fraldinha",
        description: "Maciez e sabor, servida ao ponto.",
        price: "R$ 49,90",
      },
    ],
  },
  {
    slug: "japones",
    name: "Especialidades Japonesas",
    items: [
      {
        slug: "yakisoba",
        name: "Yakisoba",
        description:
          "Massa oriental, legumes frescos e carne ao molho especial.",
        price: "R$ 39,90",
      },
      {
        slug: "sushi",
        name: "Sushi Variado",
        description: "Seleção de sushis frescos do dia.",
        price: "R$ 44,90",
      },
    ],
  },
  {
    slug: "bebidas",
    name: "Bebidas",
    items: [
      {
        slug: "caipirinha",
        name: "Caipirinha",
        description: "Clássica, feita com limão fresco.",
        price: "R$ 14,90",
      },
      {
        slug: "refrigerante",
        name: "Refrigerante",
        description: "Diversos sabores.",
        price: "R$ 7,00",
      },
    ],
  },
];
