// Carta de Círculo Grill de Las Castillas, transcrita de la carta impresa (octubre 2026).
// Precios sin símbolo de euro y con coma decimal, como en la carta.

export interface MenuItem {
  id: string;
  name: string;
  price: string;           // "7,5", "5 / 5,5"
  description?: string;
  isHouseSpecial?: boolean; // Los platos "Círculo" de la casa
  isNew?: boolean;
  isSpicy?: boolean;        // Jalapeños, búfalo, chili (manual 10.2)
  isVegetarian?: boolean;   // La hoja verde de la carta
  options?: string[];
}

export interface MenuCategory {
  id: string;
  slug: string;
  title: string;      // Rótulo en mayúsculas
  navLabel: string;   // Nombre corto para las pestañas
  subtitle?: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'entrantes',
    slug: 'entrantes',
    title: 'ENTRANTES',
    navLabel: 'Entrantes',
    subtitle: 'Para el centro de la mesa.',
    items: [
      {
        id: 'el-circulo-combo',
        name: 'El Círculo Combo',
        price: '13',
        description: 'Aros de cebolla, 4 alitas, 4 palitos de queso y 4 delicias de jalapeño, con salsas ranchera y BBQ.',
        isHouseSpecial: true,
      },
      {
        id: 'alitas-pollo',
        name: 'Alitas de pollo',
        price: '9,5',
        description: '8 alitas con nuestra salsa BBQ o búfalo. ¡Tú eliges!',
      },
      {
        id: 'aros-cebolla',
        name: 'Aros de cebolla',
        price: '7,5',
        description: 'Cebolla rebozada en nuestra forma favorita: círculos.',
        isVegetarian: true,
      },
      {
        id: 'nachos-mexicanos',
        name: 'Nachos mexicanos',
        price: '12',
        description: 'Cubiertos de chili casero, queso, pico de gallo, jalapeños y salsa agria. Añade guacamole por 2 € más.',
        isSpicy: true,
      },
      {
        id: 'cheesy-bacon-fries',
        name: 'Cheesy-Bacon Fries',
        price: '11',
        description: 'Patatas caseras con salsa ranchera, queso y bacon.',
      },
      {
        id: 'mexican-fries',
        name: 'Mexican Fries',
        price: '12',
        description: 'Lo mejor de nuestros dos platos estrella: nachos y cheesy fries.',
      },
      {
        id: 'quesadillas',
        name: 'Quesadillas',
        price: '12',
        description: 'Elige una de nuestras tres opciones:',
        options: [
          'Queso y pollo',
          'Queso de cabra y cebolla caramelizada (vegetariana)',
          'Queso, pollo, bacon y salsa BBQ',
        ],
      },
      {
        id: 'palitos-pollo',
        name: 'Palitos de pollo',
        price: '9,5',
        description: '8 piezas de pollo empanado con salsa BBQ o miel-mostaza.',
      },
      {
        id: 'tequenos',
        name: 'Tequeños',
        price: '9',
        description: '7 unidades con mermelada de frambuesa.',
        isVegetarian: true,
      },
      {
        id: 'palitos-queso',
        name: 'Palitos de queso',
        price: '8',
        description: '7 unidades de mozzarella empanada con mermelada.',
        isVegetarian: true,
      },
      {
        id: 'huevos-rotos',
        name: 'Huevos rotos',
        price: '8,5',
        description: 'Añade jamón por 2 € más.',
        isVegetarian: true,
      },
    ],
  },
  {
    id: 'burgers',
    slug: 'burgers',
    title: 'NUESTRAS BURGERS',
    navLabel: 'Burgers',
    subtitle: 'Todas llevan patatas y son de 150 g.',
    items: [
      {
        id: 'clasica',
        name: 'Clásica',
        price: '9',
        description: 'Tomate, lechuga y cebolla.',
      },
      {
        id: 'cheese-burger',
        name: 'Cheese-Burger',
        price: '10',
        description: 'Como la clásica, pero con queso cheddar.',
      },
      {
        id: 'bacon-burger',
        name: 'Bacon-Burger',
        price: '10',
        description: 'Como la clásica, pero con bacon.',
      },
      {
        id: 'especial',
        name: 'Especial',
        price: '11',
        description: 'Tomate, lechuga, cebolla, queso y bacon.',
      },
      {
        id: 'especial-pollo',
        name: 'Especial pollo',
        price: '12',
        description: 'Como la especial, pero de pechuga de pollo.',
      },
      {
        id: 'circulo-burger',
        name: 'Círculo Burger',
        price: '12',
        description: 'Tomate, lechuga, cebolla caramelizada y queso de cabra.',
        isHouseSpecial: true,
      },
      {
        id: 'n-320',
        name: 'N-320',
        price: '12',
        description: 'Tomate, lechuga, cebolla caramelizada y queso Philadelphia.',
      },
      {
        id: 'veggie-burger',
        name: 'Veggie-Burger',
        price: '12',
        description: 'Tomate, lechuga, cebolla y queso gratinado.',
        isVegetarian: true,
      },
      {
        id: 'crispy-cesar',
        name: 'Crispy César',
        price: '13',
        description: 'Pollo rebozado con tomate, lechuga, cebolla frita, queso, bacon y salsa parmesana.',
      },
      {
        id: 'gorgon-burger',
        name: 'Gorgon-Burger',
        price: '12',
        description: 'Tomate, lechuga, cebolla y gorgonzola sobre mermelada de frambuesa.',
      },
      {
        id: 'bbq-burger',
        name: 'BBQ-Burger',
        price: '12,5',
        description: 'Tomate, lechuga, cebolla caramelizada, bacon, huevo frito y salsa BBQ.',
      },
      {
        id: 'quesera',
        name: 'Quesera',
        price: '12,5',
        description: 'Tomate, lechuga, cebolla, queso cheddar, de cabra y gorgonzola.',
      },
      {
        id: 'mexicana',
        name: 'Mexicana',
        price: '12,5',
        description: 'Tomate, lechuga, guacamole, pico de gallo y jalapeños.',
        isSpicy: true,
      },
      {
        id: 'sweet-castle',
        name: 'Sweet Castle',
        price: '16',
        description: "Doble carne, cheddar, bacon, tomate, lechuga y cebolla, con nuestra salsa casera de Jack Daniel's.",
      },
    ],
  },
  {
    id: 'sandwiches',
    slug: 'sandwiches',
    title: 'SÁNDWICHES',
    navLabel: 'Sándwiches',
    items: [
      {
        id: 'mixto',
        name: 'Mixto',
        price: '5 / 5,5',
        description: 'Jamón york y queso (5) o bacon y queso (5,5).',
      },
      {
        id: 'circulo-roll',
        name: 'Círculo Roll',
        price: '9,5',
        description: 'Dos tortillas de trigo enrolladas con pollo empanado, lechuga, tomate y salsa César.',
      },
      {
        id: 'americano',
        name: 'Americano',
        price: '9,5',
        description: 'Bacon, cheddar, jamón york y huevo frito sobre lechuga, tomate, mayonesa y mostaza.',
      },
      {
        id: 'gofre-pollo',
        name: 'Gofre con pollo',
        price: '9,5',
        description: '¿Dulce o salado? Gofre con pollo empanado.',
      },
    ],
  },
  {
    id: 'ensaladas-pasta',
    slug: 'ensaladas-pasta',
    title: 'ENSALADAS Y PASTA',
    navLabel: 'Ensaladas',
    items: [
      {
        id: 'ensalada-cesar',
        name: 'César',
        price: '12',
        description: 'Pollo a la parrilla, cebolla roja, picatostes, parmesano y salsa César.',
      },
      {
        id: 'ensalada-circulo',
        name: 'Círculo',
        price: '12',
        description: 'Pollo rebozado, bacon, mezcla de quesos y tomate.',
      },
      {
        id: 'ensalada-mediterranea',
        name: 'Mediterránea',
        price: '12',
        description: 'Jamón, queso de cabra, tomates cherry, pasas y vinagreta balsámica casera.',
      },
      {
        id: 'creamy-chicken-pasta',
        name: 'Creamy Chicken Pasta',
        price: '12',
        description: 'Nata, cebolla caramelizada, quesos, gorgonzola y parmesano, con pechuga a la parrilla.',
      },
    ],
  },
  {
    id: 'tortas',
    slug: 'tortas',
    title: 'TORTAS',
    navLabel: 'Tortas',
    items: [
      {
        id: 'torta-jamon-serrano',
        name: 'Jamón serrano',
        price: '16',
        description: 'Salsa de tomate y queso.',
      },
      {
        id: 'torta-bacon',
        name: 'Bacon',
        price: '16',
        description: 'Salsa de tomate y queso.',
      },
      {
        id: 'torta-pollo-bbq',
        name: 'Pollo BBQ',
        price: '16',
        description: 'Bacon, pollo empanado, cebolla, tomate y queso, bañada en salsa BBQ.',
      },
    ],
  },
  {
    id: 'carnes',
    slug: 'carnes',
    title: 'CARNES',
    navLabel: 'Carnes',
    items: [
      {
        id: 'costillar-circulo',
        name: 'Costillar Círculo',
        price: '20 / 13',
        description: 'Bañado en salsa BBQ, con patatas fritas. Entero (20) o medio (13).',
        isHouseSpecial: true,
      },
      {
        id: 'entrecot',
        name: 'Entrecot',
        price: '17,5',
        description: '300 g de entrecot con patatas fritas.',
      },
    ],
  },
  {
    id: 'menu-infantil',
    slug: 'menu-infantil',
    title: 'MENÚ INFANTIL',
    navLabel: 'Infantil',
    items: [
      {
        id: 'menu-infantil',
        name: 'Menú infantil',
        price: '9',
        description: 'Elige uno de cada:',
        options: [
          'Bebida: agua, zumo o refresco',
          'Principal: fingers de pollo, combo de fingers de pollo y queso, sándwich mixto, hamburguesa clásica o cheeseburger. Todos con patatas fritas',
          'Postre: helado o tortita con sirope',
        ],
      },
    ],
  },
  {
    id: 'postres',
    slug: 'postres',
    title: 'POSTRES',
    navLabel: 'Postres',
    items: [
      { id: 'coulant', name: 'Coulant de chocolate', price: '5' },
      { id: 'gofre-helado', name: 'Gofre con helado y nata', price: '5' },
      { id: 'brownie', name: 'Brownie con helado', price: '6' },
      { id: 'circulo-pancakes', name: 'Círculo Pancakes', price: '6', isHouseSpecial: true },
      { id: 'copa-oreo', name: 'Copa Oreo', price: '6' },
      { id: 'trozo-tarta', name: 'Trozo de tarta', price: '5' },
      { id: 'batido-helado', name: 'Batido de helado', price: '6' },
    ],
  },
];
