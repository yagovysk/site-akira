export type MenuItem = {
  slug: string;
  name: string;
  description?: string;
  price: string;
  highlight?: boolean;
  image?: string;
};

export type MenuCategory = {
  slug: string;
  name: string;
  badge?: string;
  note?: string;
  items: MenuItem[];
};

const menuItemImages: Record<string, string> = {
  "espetos-tradicionais/alcatra": "/images/espetinhos-de-alcatra.png",
  "espetos-tradicionais/alcatra-bacon":
    "/images/espetinhos-carne-com-bacon.png",
  "espetos-tradicionais/frango": "/images/espetinhos-de-frango.png",
  "espetos-tradicionais/medalhao-frango":
    "/images/espetinhos-medalhao-de-frango-com-bacon.png",
  "espetos-tradicionais/lombo-suino": "/images/espetinhos-lombo-suino.png",
  "espetos-tradicionais/linguica-toscana":
    "/images/espetinhos-linguica-toscana.png",
  "espetos-tradicionais/linguica-apimentada":
    "/images/espetinhos-linguica-apimentada.png",
  "espetos-especiais/kafta-bovina-queijo":
    "/images/espeto-kafta-com-queijo.png",
  "espetos-especiais/queijo-coalho": "/images/espetinhos-queijo-qualho.png",
  "espetos-especiais/pao-alho-gourmet":
    "/images/espetinhos-pao-com-alho-gourmet.png",
  "espetos-especiais/pao-alho-linguica-queijo":
    "/images/espetinhos-pao-com-alho.png",
  "prato-feito/pf-espeto-tradicional":
    "/images/prato-feito-espeto-tradicional.png",
  "entradas-especiais/choripan": "/images/entradas-especiais-choripan.png",
  "entradas-especiais/gyoza":
    "/images/entradas-especiais-guiouza-6-unidades.png",
  "entradas-especiais/patinha-kani":
    "/images/entradas-especiais-patinhass-de-kani.png",
  "entradas-especiais/rolinho-primavera-5":
    "/images/entradas-especiais-rolinho-primavera-5-unidades.png",
  "entradas-especiais/takoyaki-12":
    "/images/entradas-especiais-takoyaki-12-unidades.png",
  "petiscos/batata-frita": "/images/petiscos-batata-frita.png",
  "petiscos/frango-passarinho": "/images/petiscos-frango-a-passarinho.png",
  "petiscos/batata-cheddar": "/images/petiscos-batata-com-cheddar.png",
  "petiscos/mandioca-frita": "/images/petiscos-mandioca-frita.png",
  "cervejas/heineken-600": "/images/cervejas-heineken-600ml.png",
  "cervejas/original-600": "/images/cervejas-original-600ml.png",
  "cervejas/amstel-600": "/images/cervejas-amstel-600ml.png",
  "cervejas/heineken-long-neck": "/images/cervejas-heineken-long-neck.png",
  "cervejas/heineken-lata-310": "/images/cervejas-heineken-lata-310ml.png",
  "drinks/caipirinha": "/images/caipirinha-de-limão.png",
  "drinks/caipiroska": "/images/caipiroska-de-limão.png",
  "drinks/gabiroska": "/images/gabiroska-critrico-bahia.png",
  "drinks/capiri": "/images/garibaldi-campari-com-suco-de-laranja.png",
  "drinks/cozumel": "/images/cozumel.png",
  "doses/campari-dose": "/images/dose-campari.png",
  "doses/dom-luiz": "/images/dose-don-luiz.png",
  "doses/red-label": "/images/dose-red-label.png",
  "assados-finais-semana/frango-assado":
    "/images/assados-finais-de-semana-frango-assado.png",
  "assados-finais-semana/carne-sol-cupim":
    "/images/assados-finais-de-semana-carne-de-sol.png",
  "acompanhamentos/acomp-arroz": "/images/acompanhamento-arroz.png",
  "acompanhamentos/acomp-feijao": "/images/acompanhamento-feijao-tropeiro.png",
  "acompanhamentos/acomp-mandioca":
    "/images/acompanhamento-mandioca-cozida.png",
  "acompanhamentos/acomp-vinagrete": "/images/acompanhamento-vinagrete.png",
  "bebidas-sem-alcool/agua-mineral":
    "/images/bebidas-sem-alcool-agua-sem-gas.png",
  "bebidas-sem-alcool/agua-gas": "/images/bebidas-sem-alcool-agua-com-gas.png",
  "bebidas-sem-alcool/coca-ks": "/images/bebidas-sem-alcool-coca-cola-ks.png",
  "bebidas-sem-alcool/coca-lata":
    "/images/bebidas-sem-alcool-coca-cola-lata.png",
  "bebidas-sem-alcool/coca-15":
    "/images/bebidas-sem-alcool-coca-cola-1-litro-e-meio.png",
};

export const menu: MenuCategory[] = [
  {
    slug: "espetos-tradicionais",
    name: "Espetos Tradicionais",
    badge: "R$ 11,90",
    note: "Todos os espetos acompanham molho barbecue, sweet chilli ou farofa (a escolher).",
    items: [
      { slug: "alcatra", name: "Alcatra", price: "R$ 11,90" },
      {
        slug: "alcatra-bacon",
        name: "Alcatra c/ Bacon",
        price: "R$ 11,90",
      },
      { slug: "coracao", name: "Coração", price: "R$ 11,90" },
      { slug: "frango", name: "Frango", price: "R$ 11,90" },
      {
        slug: "medalhao-frango",
        name: "Medalhão de Frango",
        price: "R$ 11,90",
      },
      {
        slug: "raquete-asa",
        name: "Raquete da Asa",
        price: "R$ 11,90",
      },
      { slug: "tulipa", name: "Tulipa", price: "R$ 11,90" },
      {
        slug: "linguica-frango",
        name: "Linguiça de Frango",
        price: "R$ 11,90",
      },
      { slug: "lombo-suino", name: "Lombo Suíno", price: "R$ 11,90" },
      {
        slug: "linguica-toscana",
        name: "Linguiça Toscana",
        price: "R$ 11,90",
      },
      {
        slug: "linguica-apimentada",
        name: "Linguiça Apimentada",
        price: "R$ 11,90",
      },
    ],
  },
  {
    slug: "espetos-especiais",
    name: "Espetos Especiais",
    badge: "R$ 13,00",
    note: "Bife de ancho com valor especial.",
    items: [
      {
        slug: "carne-sol-grill",
        name: "Carne de Sol Grill",
        price: "R$ 13,00",
      },
      {
        slug: "contra-file-grill",
        name: "Contra Filé Grill",
        price: "R$ 13,00",
      },
      {
        slug: "contra-file-gordura-grill",
        name: "Contra Filé c/ Gordura Grill",
        price: "R$ 13,00",
      },
      { slug: "cupim-grill", name: "Cupim Grill", price: "R$ 13,00" },
      { slug: "fraldinha-grill", name: "Fraldinha Grill", price: "R$ 13,00" },
      {
        slug: "kafta-bovina-queijo",
        name: "Kafta Bovina c/ Queijo",
        price: "R$ 13,00",
      },
      { slug: "queijo-coalho", name: "Queijo Coalho", price: "R$ 13,00" },
      { slug: "queijo-provolone", name: "Queijo Provolone", price: "R$ 13,00" },
      {
        slug: "pao-alho-gourmet",
        name: "Pão de Alho Gourmet",
        price: "R$ 13,00",
      },
      {
        slug: "pao-alho-linguica-queijo",
        name: "Pão de Alho com Linguiça e Queijo",
        price: "R$ 13,00",
      },
      {
        slug: "bife-ancho",
        name: "Bife de Ancho",
        price: "R$ 15,50",
        highlight: true,
      },
    ],
  },
  {
    slug: "prato-feito",
    name: "Prato Feito",
    note: "Acompanhamentos: arroz branco, vinagrete, feijão tropeiro e mandioca cozida.",
    items: [
      {
        slug: "pf-espeto-tradicional",
        name: "Espeto Tradicional",
        price: "R$ 25,90",
      },
      {
        slug: "pf-espeto-especial",
        name: "Espeto Especial",
        price: "R$ 27,90",
      },
      {
        slug: "pf-porcao-individual",
        name: "Porção Individual",
        price: "R$ 5,50",
      },
      { slug: "pf-porcao-dupla", name: "Porção Dupla", price: "R$ 9,50" },
    ],
  },
  {
    slug: "entradas-especiais",
    name: "Entradas Especiais",
    items: [
      {
        slug: "choripan",
        name: "Choripan",
        description: "Pão francês, linguiça e queijo.",
        price: "R$ 15,50",
      },
      {
        slug: "gyoza",
        name: "Gyoza (6 unidades)",
        description: "Bolinho de porco.",
        price: "R$ 25,90",
      },
      {
        slug: "patinha-kani",
        name: "Patinha de Kani (8 un.)",
        description: "Pata de caranguejo empanada.",
        price: "R$ 25,90",
      },
      {
        slug: "rolinho-primavera-5",
        name: "Rolinho Primavera (5 un.)",
        description: "Legumes ou queijo com molho teriyaki.",
        price: "R$ 32,00",
      },
      {
        slug: "takoyaki-12",
        name: "Takoyaki (12 un.)",
        description: "Bolinho de polvo.",
        price: "R$ 32,90",
      },
      {
        slug: "rolinho-romeu-julieta",
        name: "Rolinho Primavera (6 un.)",
        description: "Romeu e Julieta.",
        price: "R$ 38,00",
      },
      {
        slug: "rolinho-camarao-cream-cheese",
        name: "Rolinho Primavera (6 un.)",
        description: "Camarão com cream cheese.",
        price: "R$ 42,00",
      },
    ],
  },
  {
    slug: "petiscos",
    name: "Petiscos",
    note: "Acompanhamento: maionese ou ketchup.",
    items: [
      {
        slug: "batata-frita",
        name: "Batata Frita",
        description: "P: R$ 21,00 • G: R$ 37,00",
        price: "A partir de R$ 21,00",
      },
      {
        slug: "frango-passarinho",
        name: "Frango a Passarinho",
        description: "P: R$ 39,90 • G: R$ 49,90",
        price: "A partir de R$ 39,90",
      },
      {
        slug: "batata-cheddar",
        name: "Batata c/ Cheddar",
        description: "P: R$ 32,00 • G: R$ 47,00",
        price: "A partir de R$ 32,00",
      },
      {
        slug: "mandioca-frita",
        name: "Mandioca Frita",
        description: "P: R$ 22,50 • G: R$ 35,50",
        price: "A partir de R$ 22,50",
      },
    ],
  },
  {
    slug: "cervejas",
    name: "Cervejas",
    items: [
      { slug: "heineken-600", name: "Heineken 600ml", price: "R$ 15,90" },
      { slug: "original-600", name: "Original 600ml", price: "R$ 12,90" },
      { slug: "amstel-600", name: "Amstel 600ml", price: "R$ 11,90" },
      {
        slug: "long-neck-sem-gluten",
        name: "Long Neck Sem Glúten",
        price: "R$ 10,00",
      },
      {
        slug: "heineken-long-neck",
        name: "Heineken Long Neck",
        price: "R$ 9,90",
      },
      {
        slug: "heineken-lata-310",
        name: "Heineken Lata 310ml",
        price: "R$ 9,90",
      },
    ],
  },
  {
    slug: "drinks",
    name: "Drinks",
    items: [
      {
        slug: "caipirinha",
        name: "Caipirinha",
        description: "Cachaça, limão, açúcar e gelo.",
        price: "R$ 16,00",
      },
      {
        slug: "caipiroska",
        name: "Caipiroska",
        description: "Vodka nacional, frutas, açúcar e gelo.",
        price: "R$ 19,90",
      },
      {
        slug: "gabiroska",
        name: "Gabiroska",
        description: "Vodka nacional, cítrico Bahia, açúcar e gelo.",
        price: "R$ 21,90",
      },
      {
        slug: "capiri",
        name: "Capiri",
        description: "Suco de laranja e gelo.",
        price: "R$ 21,90",
      },
      {
        slug: "gin-tonica",
        name: "Gin Tônica",
        description: "Gin, água tônica, limão e gelo.",
        price: "R$ 19,00",
      },
      {
        slug: "cozumel",
        name: "Cozumel",
        description: "Cerveja, limão, sal e gelo.",
        price: "R$ 16,90",
      },
    ],
  },
  {
    slug: "doses",
    name: "Doses",
    items: [
      { slug: "campari-dose", name: "Campari", price: "R$ 13,00" },
      { slug: "dom-luiz", name: "Dom Luiz", price: "R$ 14,90" },
      { slug: "red-label", name: "Red Label", price: "R$ 14,00" },
      {
        slug: "cachaca-artesanal",
        name: "Cachaça Artesanal",
        price: "R$ 4,00",
      },
    ],
  },
  {
    slug: "assados-finais-semana",
    name: "Assados Finais de Semana",
    items: [
      {
        slug: "frango-assado",
        name: "Frango Assado (unidade)",
        price: "R$ 49,00",
      },
      {
        slug: "carne-sol-cupim",
        name: "Carne de Sol / Cupim (kg)",
        price: "R$ 99,50",
      },
      {
        slug: "costela-suina-bovina",
        name: "Costela Suína / Bovina (kg)",
        price: "R$ 79,90",
      },
      {
        slug: "coxa-sobrecoxa",
        name: "Coxa / Sobrecoxa (kg)",
        price: "R$ 31,90",
      },
    ],
  },
  {
    slug: "acompanhamentos",
    name: "Acompanhamentos Prato Feito",
    badge: "R$ 15,00",
    items: [
      { slug: "acomp-arroz", name: "Arroz", price: "R$ 15,00" },
      {
        slug: "acomp-feijao",
        name: "Feijão Tropeiro",
        price: "R$ 15,00",
      },
      {
        slug: "acomp-mandioca",
        name: "Mandioca Cozida",
        price: "R$ 15,00",
      },
      { slug: "acomp-vinagrete", name: "Vinagrete", price: "R$ 15,00" },
    ],
  },
  {
    slug: "bebidas-sem-alcool",
    name: "Bebidas sem Álcool",
    items: [
      { slug: "agua-mineral", name: "Água Mineral 500ml", price: "R$ 4,50" },
      { slug: "agua-gas", name: "Água c/ Gás 500ml", price: "R$ 5,50" },
      { slug: "coca-ks", name: "Coca-Cola KS", price: "R$ 5,80" },
      { slug: "coca-600", name: "Coca-Cola 600ml", price: "R$ 8,90" },
      { slug: "coca-lata", name: "Coca-Cola Lata", price: "R$ 6,50" },
      { slug: "suco-lata", name: "Suco Lata", price: "R$ 8,50" },
      {
        slug: "suco-polpa",
        name: "Suco Polpa",
        description: "Consultar sabores.",
        price: "R$ 9,90",
      },
      {
        slug: "suco-fruta",
        name: "Suco da Fruta",
        description: "Consultar sabores.",
        price: "R$ 13,90",
      },
      { slug: "energetico", name: "Energético", price: "R$ 12,50" },
      { slug: "h2o", name: "H2O", price: "R$ 8,90" },
      { slug: "coca-15", name: "Coca-Cola 1,5L", price: "R$ 11,50" },
      {
        slug: "guarana-15",
        name: "Guaraná Antártica 1,5L",
        price: "R$ 11,50",
      },
      { slug: "preparo-cozumel", name: "Preparo Cozumel", price: "R$ 8,90" },
      { slug: "shot-limao", name: "Shot de Limão", price: "R$ 1,50" },
    ],
  },
];

menu.forEach((category) => {
  category.items.forEach((item) => {
    const imageKey = `${category.slug}/${item.slug}`;
    const imagePath = menuItemImages[imageKey];

    if (imagePath) {
      item.image = imagePath;
    }
  });
});
