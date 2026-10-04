export interface LocationInfo {
  id: string;
  name: string;
  badge?: string;
  type: string;
  tagline: string;
  address: string;
  postalCode: string;
  city: string;
  province: string;
  phones: { display: string; tel: string }[];
  primaryPhone: { display: string; tel: string };
  hours: {
    summary: string;
    details: { days: string; hours: string }[];
  };
  services: string[];
  deliveryNote?: string;  // Condiciones de reparto tal como figuran en la carta
  features: string[];
  orderOnlineUrl?: string;
  mapsUrl: string;
  reviewUrl: string;
  hasDelivery: boolean;
  hasTakeAway: boolean;
  hasTerrace: boolean;
  hasBuffet: boolean;
  priceRange: string;
  rating?: {
    score: number;
    reviewsCount: number;
    source: string;
  };
}

export const locations: LocationInfo[] = [
  {
    id: 'las-castillas',
    name: 'Círculo Grill de Las Castillas',
    badge: 'Local Principal',
    type: 'Bar y Parrilla tradicional americana',
    tagline: 'Una taberna de castillo que hace hamburguesas a la brasa.',
    address: 'C. Castillo Simancas, 3',
    postalCode: '19174',
    city: 'Torrejón del Rey',
    province: 'Guadalajara',
    primaryPhone: {
      display: '949 32 74 51',
      tel: '+34949327451',
    },
    phones: [
      { display: '949 32 74 51', tel: '+34949327451' },
      { display: '640 529 409', tel: '+34640529409' },
    ],
    hours: {
      summary: 'L, X, J y V · 20:00 – 23:30 · S y D también a mediodía',
      details: [
        { days: 'L, X, J y V', hours: '20:00 – 23:30' },
        { days: 'S y D', hours: '13:00 – 16:00 y 20:00 – 23:30' },
        { days: 'Martes', hours: 'Cerrado' },
      ],
    },
    services: ['Bufé libre', 'Terraza de verano', 'Platos veganos y vegetarianos', 'Take away', 'Delivery'],
    deliveryNote: 'Pedido mínimo 15 € + 2,5 € de envío. Repartimos en 19174, 19170 y 28815.',
    features: ['Carne a la brasa', 'Cervezas de grifo y artesanas', 'Ambiente familiar'],
    mapsUrl: 'https://maps.google.com/?q=El+Circulo+Grill+de+las+Castillas+Castillo+Simancas+3+Torrejon+del+Rey',
    reviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4',
    orderOnlineUrl: 'https://www.just-eat.es/restaurants-el-circulo-de-las-castillas-torrejon-del-rey/menu',
    hasDelivery: true,
    hasTakeAway: true,
    hasTerrace: true,
    hasBuffet: true,
    priceRange: '10-20 €',
    rating: {
      score: 4.5,
      reviewsCount: 307,
      source: 'Google Maps',
    },
  },
  {
    id: 'meco',
    name: 'Círculo Grill & Go (Meco)',
    badge: 'Take Away & Delivery',
    type: 'Punto de recogida y reparto a domicilio',
    tagline: 'Tus hamburguesas y entrantes favoritos listos para llevar o recibir en casa.',
    address: 'C.C. Belvalle, Local 12',
    postalCode: '28880',
    city: 'Meco',
    province: 'Madrid',
    primaryPhone: {
      display: '640 25 44 65',
      tel: '+34640254465',
    },
    phones: [
      { display: '640 25 44 65', tel: '+34640254465' },
    ],
    hours: {
      summary: 'L, X, J, V, S y D · 20:00 – 23:30',
      details: [
        { days: 'Lunes, Miércoles a Domingo', hours: '20:00 – 23:30' },
        { days: 'Martes', hours: 'Cerrado' },
      ],
    },
    services: ['Take away', 'Delivery rápido a Meco y alrededores'],
    features: ['Pedidos por teléfono o WhatsApp', 'Empaquetado térmico especial'],
    mapsUrl: 'https://maps.google.com/?q=Circulo+Grill+Meco+Belvalle',
    reviewUrl: 'https://search.google.com/local/writereview',
    hasDelivery: true,
    hasTakeAway: true,
    hasTerrace: false,
    hasBuffet: false,
    priceRange: '10-20 €',
  },
];
