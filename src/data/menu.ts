export interface MenuItemOption {
  name: string;
  extraPrice?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  price: string; // e.g. "7,5", "11,5" (sin símbolo € según manual)
  numericPrice: number;
  description: string;
  isHouseSpecial?: boolean; // Plato destacado de la casa
  isNew?: boolean;          // Novedad
  isSpicy?: boolean;        // Picante (con guindilla)
  isVegetarian?: boolean;   // Vegetariano (con hoja)
  isVegan?: boolean;        // Vegano
  promoNote?: string;
  options?: string[];       // Variaciones o elecciones (ej. quesadillas)
  allergens?: string[];
}

export interface MenuCategory {
  id: string;
  slug: string;
  title: string;           // ENTRANTES, HAMBURGUESAS, etc. en mayúsculas
  subtitle?: string;        // Descripción o entradilla breve
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'entrantes',
    slug: 'entrantes',
    title: 'ENTRANTES PARA COMPARTIR',
    subtitle: 'Raciones generosas para empezar en el centro de la mesa.',
    items: [
      {
        id: 'combo-el-circulo',
        name: 'Combo El Círculo',
        price: '12,5',
        numericPrice: 12.5,
        description: 'Por si no puedes elegir: aros de cebolla, alitas, palitos de queso y jalapeños con salsas ranchera y BBQ.',
        isHouseSpecial: true,
      },
      {
        id: 'nachos-mexicanos',
        name: 'Nachos Mexicanos',
        price: '9,0',
        numericPrice: 9.0,
        description: 'Totopos de maíz crujientes cubiertos de chili casero, queso fundido, jalapeños y pico de gallo. Añade guacamole por 2 € más.',
        isSpicy: true,
      },
      {
        id: 'alitas-pollo',
        name: 'Alitas de Pollo',
        price: '7,5',
        numericPrice: 7.5,
        description: 'Alitas de pollo asadas a la brasa. Pídelas con salsa barbacoa suave o con salsa búfalo picante.',
        isSpicy: true,
      },
      {
        id: 'patatas-queso-bacon',
        name: 'Patatas con Queso y Bacon',
        price: '7,5',
        numericPrice: 7.5,
        description: 'Patatas fritas rústicas cortadas a mano, salsa cheddar caliente y dados de bacon ahumado crujiente.',
      },
      {
        id: 'aros-cebolla',
        name: 'Aros de Cebolla',
        price: '6,5',
        numericPrice: 6.5,
        description: 'Aros de cebolla enteros dorados y crujientes con dip de salsa barbacoa.',
        isVegetarian: true,
      },
      {
        id: 'palitos-queso',
        name: 'Palitos de Queso Mozzarella',
        price: '7,0',
        numericPrice: 7.0,
        description: 'Seis unidades de queso mozzarella fundente empanado con salsa de tomate especiada.',
        isVegetarian: true,
      },
      {
        id: 'delicias-jalapeno',
        name: 'Delicias de Jalapeño',
        price: '7,0',
        numericPrice: 7.0,
        description: 'Bocados de pimiento jalapeño rellenos de queso crema en tempura fina.',
        isSpicy: true,
        isVegetarian: true,
      },
    ],
  },
  {
    id: 'hamburguesas',
    slug: 'hamburguesas',
    title: 'HAMBURGUESAS A LA BRASA',
    subtitle: '100% vacuno hecho al carbón con pan brioche artesano y patatas fritas incluidas.',
    items: [
      {
        id: 'bbq-burger',
        name: 'BBQ-Burger Círculo',
        price: '11,5',
        numericPrice: 11.5,
        description: 'Carne de vacuno a la parrilla, queso cheddar madurado, doble bacon ahumado, aros de cebolla y salsa BBQ casera.',
        isHouseSpecial: true,
      },
      {
        id: 'burger-pollo-parrilla',
        name: 'Especial Pollo a la Parrilla',
        price: '10,5',
        numericPrice: 10.5,
        description: 'Pechuga a la brasa (o pídelo con pollo empanado crujiente), lechuga batavia, tomate, queso y mayonesa de hierbas.',
      },
      {
        id: 'cheeseburger-clasica',
        name: 'Cheeseburger Clásica',
        price: '9,5',
        numericPrice: 9.5,
        description: 'Carne de vacuno a la brasa, doble loncha de cheddar fundido, pepinillo agridulce, cebolla y salsa grill.',
      },
      {
        id: 'smash-burger-bacon',
        name: 'Smash Burger Doble Bacon',
        price: '12,5',
        numericPrice: 12.5,
        description: 'Dos discos de vacuno aplastados en plancha viva con costra crujiente, queso americano y salsa de la casa.',
        isNew: true,
      },
      {
        id: 'burger-las-castillas',
        name: 'Burger Las Castillas',
        price: '12,0',
        numericPrice: 12.0,
        description: 'Vacuno a la brasa, lascas de jamón ibérico curado, queso semicurado, cebolla confitada al vino y rúcula.',
      },
      {
        id: 'burger-vegetal',
        name: 'Burger Vegana de la Huerta',
        price: '10,5',
        numericPrice: 10.5,
        description: 'Medallón vegetal a la parrilla, láminas de aguacate, brotes verdes, tomate de la huerta y salsa vegana.',
        isVegetarian: true,
        isVegan: true,
      },
    ],
  },
  {
    id: 'tortas',
    slug: 'tortas',
    title: 'TORTAS Y QUESADILLAS',
    subtitle: 'Tostadas a la plancha sobre tortas de trigo artesanas.',
    items: [
      {
        id: 'torta-pollo-bbq',
        name: 'Torta de Pollo BBQ',
        price: '8,5',
        numericPrice: 8.5,
        description: 'Pollo deshilachado a la barbacoa, mezcla de quesos fundidos y cebolla en torta de trigo dorada.',
      },
      {
        id: 'torta-jamon-serrano',
        name: 'Torta Jamón Serrano',
        price: '8,0',
        numericPrice: 8.0,
        description: 'Jamón serrano reserva, tomate natural rallado con aceite de oliva virgen extra y queso gratinado.',
      },
      {
        id: 'quesadilla-circulo',
        name: 'Quesadillas Círculo',
        price: '8,0',
        numericPrice: 8.0,
        description: 'Tortilla de trigo a la plancha rellena de queso gouda y cheddar, servida con pico de gallo y salsa suave.',
        options: [
          'Solo quesos (vegetariano)',
          'Con pollo a la parrilla (+1,5)',
          'Con chili casero con carne (+1,5)',
        ],
        isVegetarian: true,
      },
    ],
  },
  {
    id: 'sandwiches-carnes',
    slug: 'sandwiches-carnes',
    title: 'SÁNDWICHES Y COSTILLAS',
    subtitle: 'Carnes ahumadas a fuego lento y sándwiches completos.',
    items: [
      {
        id: 'costillas-bbq',
        name: 'Costillar BBQ Círculo',
        price: '15,0',
        numericPrice: 15.0,
        description: 'Costillar de cerdo asado a baja temperatura durante 6 horas, glaseado con salsa BBQ de la casa y patatas gajo.',
        isHouseSpecial: true,
      },
      {
        id: 'sandwich-club',
        name: 'Sándwich Club Grill',
        price: '9,0',
        numericPrice: 9.0,
        description: 'Tres rebanadas de pan tostado, pollo a la plancha, bacon, jamón york, queso, huevo frito y mahonesa ligera.',
      },
      {
        id: 'pulled-pork',
        name: 'Sándwich Pulled Pork',
        price: '9,5',
        numericPrice: 9.5,
        description: 'Cerdo asado desmigado lentamente con jugo de manzana y salsa barbacoa en pan brioche.',
      },
    ],
  },
  {
    id: 'ensaladas-pasta',
    slug: 'ensaladas-pasta',
    title: 'ENSALADAS Y PASTA',
    subtitle: 'Opciones frescas y ligeras preparadas al momento.',
    items: [
      {
        id: 'ensalada-cesar',
        name: 'Ensalada César con Pollo a la Brasa',
        price: '8,5',
        numericPrice: 8.5,
        description: 'Corazones de lechuga romana, tiras de pollo a la brasa, picatostes artesanos, lascas de grana padano y salsa César.',
      },
      {
        id: 'ensalada-huerta',
        name: 'Ensalada Campestre',
        price: '7,0',
        numericPrice: 7.0,
        description: 'Tomate de temporada, cebolla roja, aceitunas negras, pepino y vinagreta clásica.',
        isVegetarian: true,
        isVegan: true,
      },
      {
        id: 'pasta-grill',
        name: 'Pasta Rustica al Horno',
        price: '8,5',
        numericPrice: 8.5,
        description: 'Pasta rigatoni con salsa de tomate casera, carne picada al carbón y gratinado de cuatro quesos.',
      },
    ],
  },
  {
    id: 'postres-bebidas',
    slug: 'postres-bebidas',
    title: 'POSTRES Y BATIDOS',
    subtitle: 'El broche dulce casero para terminar la comida.',
    items: [
      {
        id: 'tarta-queso',
        name: 'Tarta de Queso al Horno',
        price: '5,5',
        numericPrice: 5.5,
        description: 'Elaboración casera horneada a diario con base de galleta y textura cremosa.',
        isHouseSpecial: true,
        isVegetarian: true,
      },
      {
        id: 'brownie-helado',
        name: 'Brownie Caliente con Helado',
        price: '5,0',
        numericPrice: 5.0,
        description: 'Bizcocho de chocolate negro y nueces templado, coronado con helado artesano de vainilla y sirope de chocolate.',
        isVegetarian: true,
      },
      {
        id: 'batido-americano',
        name: 'Batido Americano Artesano',
        price: '4,5',
        numericPrice: 4.5,
        description: 'Batido batido al momento con leche fresca y helado. Sabores: Vainilla Bourbon, Chocolate Belga o Fresa silvestre.',
        isVegetarian: true,
      },
    ],
  },
];
