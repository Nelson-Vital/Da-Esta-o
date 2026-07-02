export type Season = 'primavera' | 'verão' | 'outono' | 'inverno';

export interface Product {
  id: string;
  name: string;
  season: Season[];
  category: string;
  image: string;
  producer: string;
  producerId: string;
  price: string;
  priceNumeric: number; // For comparison purposes
  unit: string; // 'kg', 'un', 'maço', etc.
  description: string;
  distance?: string;
  rating?: number; // Average rating
  totalReviews?: number;
  attributes?: string[]; // e.g., "Orgânico", "Biológico", "Sem Pesticidas"
}

export interface Producer {
  id: string;
  name: string;
  location: string;
  specialty: string;
  image: string;
  description: string;
  distance: string;
  products: string[];
  rating?: number; // Average rating
  totalReviews?: number;
  certifications?: string[];
  yearsInBusiness?: number;
}

export interface Review {
  id: string;
  producerId: string;
  customerName: string;
  rating: number; // 1-5
  date: string;
  comment: string;
  verifiedPurchase?: boolean;
}

export interface ProductReview {
  id: string;
  productId: string;
  customerName: string;
  rating: number; // 1-5
  date: string;
  comment: string;
  verifiedPurchase?: boolean;
  helpfulCount?: number; // How many found this helpful
}

export interface Recipe {
  id: string;
  title: string;
  chef: string;
  chefImage: string;
  season: Season[];
  image: string;
  ingredients: string[];
  prepTime: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  description: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Tomate Cereja',
    season: ['primavera', 'verão'],
    category: 'Vegetais',
    image: 'https://images.unsplash.com/photo-1683008952458-dc02ac67f382?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    producer: 'Quinta do Vale',
    producerId: '1',
    price: '€2.50/kg',
    priceNumeric: 2.50,
    unit: 'kg',
    description: 'Tomates cereja frescos e saborosos, cultivados sem pesticidas.',
    distance: '15 km',
    rating: 4.5,
    totalReviews: 120,
    attributes: ['Orgânico', 'Sem Pesticidas'],
  },
  {
    id: '1b',
    name: 'Tomate Cereja',
    season: ['primavera', 'verão'],
    category: 'Vegetais',
    image: 'https://images.unsplash.com/photo-1700064165267-8fa68ef07167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG9lcyUyMGZyZXNoJTIwcHJvZHVjZXxlbnwxfHx8fDE3NjkyNzMwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    producer: 'Bio Jardim',
    producerId: '3',
    price: '€2.80/kg',
    priceNumeric: 2.80,
    unit: 'kg',
    description: 'Tomates cereja biológicos certificados, doces e sumarentos.',
    distance: '20 km',
    rating: 4.8,
    totalReviews: 150,
    attributes: ['Biológico'],
  },
  {
    id: '2',
    name: 'Morangos',
    season: ['primavera', 'verão'],
    category: 'Frutas',
    image: 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?q=80&w=760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    producer: 'Horta da Maria',
    producerId: '2',
    price: '€4.00/kg',
    priceNumeric: 4.00,
    unit: 'kg',
    description: 'Morangos orgânicos, doces e suculentos.',
    distance: '10 km',
    rating: 4.7,
    totalReviews: 85,
    attributes: ['Orgânico'],
  },
  {
    id: '3',
    name: 'Alface Frisada',
    season: ['primavera', 'outono'],
    category: 'Vegetais',
    image: 'https://images.unsplash.com/photo-1546520057-a59c8dcde13b?q=80&w=975&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    producer: 'Bio Jardim',
    producerId: '3',
    price: '€1.50/un',
    priceNumeric: 1.50,
    unit: 'un',
    description: 'Alface crocante e fresca, perfeita para saladas.',
    distance: '20 km',
    rating: 4.8,
    totalReviews: 150,
    attributes: ['Biológico'],
  },
  {
    id: '3b',
    name: 'Alface Frisada',
    season: ['primavera', 'outono'],
    category: 'Vegetais',
    image: 'https://images.unsplash.com/photo-1693667660375-653320dbebb4?q=80&w=536&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    producer: 'Quinta do Vale',
    producerId: '1',
    price: '€1.30/un',
    priceNumeric: 1.30,
    unit: 'un',
    description: 'Alface cultivada ao ar livre, com sabor intenso.',
    distance: '15 km',
    rating: 4.5,
    totalReviews: 120,
    attributes: ['Orgânico', 'Sem Pesticidas'],
  },
  {
    id: '4',
    name: 'Abóbora',
    season: ['outono', 'inverno'],
    category: 'Vegetais',
    image: 'https://plus.unsplash.com/premium_photo-1666823706428-5d93ae18c1c0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    producer: 'Quinta do Vale',
    producerId: '1',
    price: '€1.80/kg',
    priceNumeric: 1.80,
    unit: 'kg',
    description: 'Abóbora rica em sabor, ideal para sopas e assados.',
    distance: '15 km',
    rating: 4.5,
    totalReviews: 120,
    attributes: ['Orgânico', 'Sem Pesticidas'],
  },
  {
    id: '5',
    name: 'Maçã Reineta',
    season: ['outono', 'inverno'],
    category: 'Frutas',
    image: 'https://images.unsplash.com/photo-1758546501186-34d70455b886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFzb25hbCUyMGZydWl0cyUyMG9yZ2FuaWN8ZW58MXx8fHwxNzY5MjczMDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    producer: 'Pomar do Sol',
    producerId: '4',
    price: '€2.20/kg',
    priceNumeric: 2.20,
    unit: 'kg',
    description: 'Maçãs aromáticas com textura firme.',
    distance: '30 km',
    rating: 4.6,
    totalReviews: 100,
    attributes: ['Orgânico'],
  },
  {
    id: '5b',
    name: 'Maçã Reineta',
    season: ['outono', 'inverno'],
    category: 'Frutas',
    image: 'https://images.unsplash.com/photo-1600752085601-1ec2646cd736?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    producer: 'Horta da Maria',
    producerId: '2',
    price: '€2.50/kg',
    priceNumeric: 2.50,
    unit: 'kg',
    description: 'Maçã reineta de árvores centenárias, sabor tradicional.',
    distance: '10 km',
    rating: 4.7,
    totalReviews: 85,
    attributes: ['Orgânico'],
  },
  {
    id: '6',
    name: 'Espinafres',
    season: ['inverno', 'primavera'],
    category: 'Vegetais',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    producer: 'Bio Jardim',
    producerId: '3',
    price: '€3.00/kg',
    priceNumeric: 3.00,
    unit: 'kg',
    description: 'Espinafres tenros e nutritivos.',
    distance: '20 km',
    rating: 4.8,
    totalReviews: 150,
    attributes: ['Biológico'],
  },
];

export const producers: Producer[] = [
  {
    id: '1',
    name: 'Quinta do Vale',
    location: 'Sintra, Lisboa',
    specialty: 'Vegetais Orgânicos',
    image: 'https://plus.unsplash.com/premium_photo-1754255082047-a452d0878033?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Produção familiar de vegetais orgânicos há três gerações.',
    distance: '15 km',
    products: ['Tomate', 'Alface', 'Cenoura', 'Abóbora'],
    rating: 4.5,
    totalReviews: 120,
    certifications: ['Organic', 'Fair Trade'],
    yearsInBusiness: 50,
  },
  {
    id: '2',
    name: 'Horta da Maria',
    location: 'Cascais, Lisboa',
    specialty: 'Frutas da Época',
    image: 'https://images.unsplash.com/photo-1759323326080-84c93b8522f1?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Especialistas em morangos e frutas vermelhas orgânicas.',
    distance: '10 km',
    products: ['Morangos', 'Framboesas', 'Mirtilos'],
    rating: 4.7,
    totalReviews: 85,
    certifications: ['Organic'],
    yearsInBusiness: 30,
  },
  {
    id: '3',
    name: 'Bio Jardim',
    location: 'Mafra, Lisboa',
    specialty: 'Hortaliças Bio',
    image: 'https://plus.unsplash.com/premium_photo-1675798983878-604c09f6d154?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Cultivo biológico certificado de hortaliças variadas.',
    distance: '20 km',
    products: ['Alface', 'Espinafres', 'Couve', 'Brócolos'],
    rating: 4.8,
    totalReviews: 150,
    certifications: ['Organic'],
    yearsInBusiness: 40,
  },
  {
    id: '4',
    name: 'Pomar do Sol',
    location: 'Torres Vedras, Lisboa',
    specialty: 'Pomares Tradicionais',
    image: 'https://images.unsplash.com/photo-1583629372556-73563cba32b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Maçãs e peras de variedades portuguesas tradicionais.',
    distance: '30 km',
    products: ['Maçã', 'Pera', 'Pêssego', 'Nectarina'],
    rating: 4.6,
    totalReviews: 100,
    certifications: ['Organic'],
    yearsInBusiness: 60,
  },
];

export const reviews: Review[] = [
  // Quinta do Vale reviews (id: 1)
  {
    id: '1',
    producerId: '1',
    customerName: 'João Silva',
    rating: 5,
    date: '2024-01-15',
    comment: 'Excelentes tomates cereja! Muito frescos e saborosos. A família que gere a quinta é muito simpática e atenciosa. Recomendo vivamente!',
    verifiedPurchase: true,
  },
  {
    id: '2',
    producerId: '1',
    customerName: 'Ana Rodrigues',
    rating: 5,
    date: '2024-01-10',
    comment: 'Produtos de qualidade superior! A abóbora que comprei estava perfeita para sopas. Continuem com o excelente trabalho!',
    verifiedPurchase: true,
  },
  {
    id: '3',
    producerId: '1',
    customerName: 'Carlos Mendes',
    rating: 4,
    date: '2024-01-05',
    comment: 'Boa experiência. Os vegetais são realmente orgânicos e nota-se a diferença no sabor. Apenas gostaria que tivessem mais variedade.',
    verifiedPurchase: true,
  },
  {
    id: '4',
    producerId: '1',
    customerName: 'Sofia Almeida',
    rating: 5,
    date: '2023-12-20',
    comment: 'Produtos fresquíssimos! Adoro saber que estou a apoiar agricultura local e sustentável. Os tomates são os melhores que já provei.',
    verifiedPurchase: true,
  },
  {
    id: '5',
    producerId: '1',
    customerName: 'Miguel Santos',
    rating: 4,
    date: '2023-12-15',
    comment: 'Muito bom. Preços justos para a qualidade oferecida. A alface dura muito mais tempo fresca do que a do supermercado.',
    verifiedPurchase: true,
  },

  // Horta da Maria reviews (id: 2)
  {
    id: '6',
    producerId: '2',
    customerName: 'Maria Costa',
    rating: 5,
    date: '2024-01-18',
    comment: 'Morangos deliciosos! Os mais doces e suculentos que já comi. Perfeitos para fazer doces e sobremesas.',
    verifiedPurchase: true,
  },
  {
    id: '7',
    producerId: '2',
    customerName: 'Pedro Oliveira',
    rating: 5,
    date: '2024-01-12',
    comment: 'Excelente! A Maria é muito profissional e apaixonada pelo que faz. As frutas vermelhas são incríveis, frescas e orgânicas.',
    verifiedPurchase: true,
  },
  {
    id: '8',
    producerId: '2',
    customerName: 'Teresa Lopes',
    rating: 4,
    date: '2024-01-08',
    comment: 'Muito boas frutas, mas às vezes esgotam rapidamente. Seria bom ter a possibilidade de reservar com antecedência.',
    verifiedPurchase: true,
  },
  {
    id: '9',
    producerId: '2',
    customerName: 'Ricardo Ferreira',
    rating: 5,
    date: '2023-12-28',
    comment: 'Framboesas espetaculares! Sabor autêntico e qualidade consistente. Já sou cliente há anos e nunca me desiludiu.',
    verifiedPurchase: true,
  },

  // Bio Jardim reviews (id: 3)
  {
    id: '10',
    producerId: '3',
    customerName: 'Luísa Santos',
    rating: 5,
    date: '2024-01-20',
    comment: 'Certificação biológica de confiança! Todos os produtos são de excelente qualidade. Os espinafres são tenros e saborosos.',
    verifiedPurchase: true,
  },
  {
    id: '11',
    producerId: '3',
    customerName: 'Fernando Silva',
    rating: 5,
    date: '2024-01-14',
    comment: 'A melhor hortaliça bio da região! Preços competitivos e variedade excelente. Entrega rápida e eficiente.',
    verifiedPurchase: true,
  },
  {
    id: '12',
    producerId: '3',
    customerName: 'Catarina Gomes',
    rating: 5,
    date: '2024-01-09',
    comment: 'Produtos fresquíssimos! A alface é sempre crocante e os brócolos são perfeitos. Transparência total na produção.',
    verifiedPurchase: true,
  },
  {
    id: '13',
    producerId: '3',
    customerName: 'Paulo Ribeiro',
    rating: 4,
    date: '2024-01-03',
    comment: 'Muito bom! Produtos de qualidade e práticas sustentáveis. Único ponto a melhorar seria a embalagem mais ecológica.',
    verifiedPurchase: true,
  },
  {
    id: '14',
    producerId: '3',
    customerName: 'Inês Martins',
    rating: 5,
    date: '2023-12-22',
    comment: 'Simplesmente perfeito! Confio completamente na qualidade bio. A couve é sempre fresca e sem químicos.',
    verifiedPurchase: true,
  },

  // Pomar do Sol reviews (id: 4)
  {
    id: '15',
    producerId: '4',
    customerName: 'António Carvalho',
    rating: 5,
    date: '2024-01-17',
    comment: 'Maçãs tradicionais portuguesas de excelente qualidade! Sabor autêntico que não se encontra nos supermercados.',
    verifiedPurchase: true,
  },
  {
    id: '16',
    producerId: '4',
    customerName: 'Beatriz Sousa',
    rating: 4,
    date: '2024-01-11',
    comment: 'Boas frutas, especialmente as peras. Gostaria de ver mais variedades de maçãs disponíveis ao longo do ano.',
    verifiedPurchase: true,
  },
  {
    id: '17',
    producerId: '4',
    customerName: 'José Pinto',
    rating: 5,
    date: '2024-01-06',
    comment: 'Pomar tradicional com história! As maçãs reineta são aromáticas e têm textura perfeita. Vale a pena a distância.',
    verifiedPurchase: true,
  },
  {
    id: '18',
    producerId: '4',
    customerName: 'Marta Fernandes',
    rating: 5,
    date: '2023-12-30',
    comment: 'Qualidade excecional! Adoro apoiar produtores que preservam variedades tradicionais. Os pêssegos no verão são divinos.',
    verifiedPurchase: true,
  },
];

export const productReviews: ProductReview[] = [
  // Tomate Cereja - Quinta do Vale (id: '1')
  {
    id: 'pr1',
    productId: '1',
    customerName: 'Sofia Martins',
    rating: 5,
    date: '2024-02-05',
    comment: 'Tomates cereja incríveis! Muito doces e perfeitos para saladas. A frescura é notável e duram vários dias no frigorífico.',
    verifiedPurchase: true,
    helpfulCount: 24,
  },
  {
    id: 'pr2',
    productId: '1',
    customerName: 'Ricardo Pinto',
    rating: 5,
    date: '2024-02-01',
    comment: 'Sabor autêntico a tomate! Nada comparado aos do supermercado. Perfeitos para bruschetas e molhos caseiros.',
    verifiedPurchase: true,
    helpfulCount: 18,
  },
  {
    id: 'pr3',
    productId: '1',
    customerName: 'Ana Costa',
    rating: 4,
    date: '2024-01-28',
    comment: 'Muito bons tomates, frescos e saborosos. Único ponto é que alguns vinham muito maduros, mas nada grave.',
    verifiedPurchase: true,
    helpfulCount: 12,
  },
  {
    id: 'pr4',
    productId: '1',
    customerName: 'Miguel Oliveira',
    rating: 5,
    date: '2024-01-25',
    comment: 'Qualidade consistente! Já comprei várias vezes e sempre impecáveis. Recomendo a todos os amantes de comida saudável.',
    verifiedPurchase: true,
    helpfulCount: 20,
  },
  {
    id: 'pr5',
    productId: '1',
    customerName: 'Carla Sousa',
    rating: 4,
    date: '2024-01-20',
    comment: 'Tomates cereja saborosos e frescos. O preço é justo para a qualidade orgânica.',
    verifiedPurchase: true,
    helpfulCount: 9,
  },

  // Tomate Cereja - Bio Jardim (id: '1b')
  {
    id: 'pr6',
    productId: '1b',
    customerName: 'Paulo Silva',
    rating: 5,
    date: '2024-02-06',
    comment: 'Certificação biológica faz toda a diferença! Sabor intenso e textura perfeita. Vale cada cêntimo.',
    verifiedPurchase: true,
    helpfulCount: 30,
  },
  {
    id: 'pr7',
    productId: '1b',
    customerName: 'Teresa Lopes',
    rating: 5,
    date: '2024-02-03',
    comment: 'Os melhores tomates cereja que já experimentei! Sumarentos, doces e sem químicos. Bio Jardim nunca decepciona.',
    verifiedPurchase: true,
    helpfulCount: 25,
  },
  {
    id: 'pr8',
    productId: '1b',
    customerName: 'João Ferreira',
    rating: 5,
    date: '2024-01-30',
    comment: 'Produto de excelência! Cultivo biológico nota-se no sabor. Recomendo vivamente.',
    verifiedPurchase: true,
    helpfulCount: 22,
  },
  {
    id: 'pr9',
    productId: '1b',
    customerName: 'Inês Rodrigues',
    rating: 4,
    date: '2024-01-26',
    comment: 'Tomates cereja muito bons, bio certificado. Preço ligeiramente mais alto mas vale a pena pela qualidade.',
    verifiedPurchase: true,
    helpfulCount: 15,
  },

  // Morangos - Horta da Maria (id: '2')
  {
    id: 'pr10',
    productId: '2',
    customerName: 'Beatriz Santos',
    rating: 5,
    date: '2024-02-08',
    comment: 'Morangos divinos! Doces, suculentos e aromáticos. Perfeitos para comer ao natural ou fazer tartes.',
    verifiedPurchase: true,
    helpfulCount: 40,
  },
  {
    id: 'pr11',
    productId: '2',
    customerName: 'André Almeida',
    rating: 5,
    date: '2024-02-04',
    comment: 'Qualidade superior! Morangos orgânicos com sabor autêntico. As crianças adoram.',
    verifiedPurchase: true,
    helpfulCount: 35,
  },
  {
    id: 'pr12',
    productId: '2',
    customerName: 'Luísa Pereira',
    rating: 4,
    date: '2024-01-31',
    comment: 'Muito bons morangos, frescos e saborosos. Durabilidade boa. Recomendo.',
    verifiedPurchase: true,
    helpfulCount: 18,
  },
  {
    id: 'pr13',
    productId: '2',
    customerName: 'Fernando Costa',
    rating: 5,
    date: '2024-01-27',
    comment: 'Horta da Maria mantém sempre a qualidade! Morangos perfeitos, sem defeitos. Excelente.',
    verifiedPurchase: true,
    helpfulCount: 28,
  },

  // Alface Frisada - Bio Jardim (id: '3')
  {
    id: 'pr14',
    productId: '3',
    customerName: 'Marta Gomes',
    rating: 5,
    date: '2024-02-07',
    comment: 'Alface frisada crocante e fresquíssima! Perfeita para saladas. Biológico certificado dá confiança.',
    verifiedPurchase: true,
    helpfulCount: 32,
  },
  {
    id: 'pr15',
    productId: '3',
    customerName: 'Carlos Ribeiro',
    rating: 5,
    date: '2024-02-02',
    comment: 'Qualidade excecional! A alface mantém-se fresca por mais de uma semana. Sabor intenso.',
    verifiedPurchase: true,
    helpfulCount: 27,
  },
  {
    id: 'pr16',
    productId: '3',
    customerName: 'Sandra Fernandes',
    rating: 5,
    date: '2024-01-29',
    comment: 'Alface bio de primeira! Crocante, saborosa e sem químicos. Bio Jardim é sempre garantia de qualidade.',
    verifiedPurchase: true,
    helpfulCount: 24,
  },
  {
    id: 'pr17',
    productId: '3',
    customerName: 'Rui Mendes',
    rating: 4,
    date: '2024-01-24',
    comment: 'Boa alface frisada, fresca e crocante. Apenas gostaria de tamanhos maiores disponíveis.',
    verifiedPurchase: true,
    helpfulCount: 16,
  },

  // Alface Frisada - Quinta do Vale (id: '3b')
  {
    id: 'pr18',
    productId: '3b',
    customerName: 'Helena Silva',
    rating: 5,
    date: '2024-02-06',
    comment: 'Alface cultivada ao ar livre, sabor incomparável! Textura perfeita e preço excelente.',
    verifiedPurchase: true,
    helpfulCount: 21,
  },
  {
    id: 'pr19',
    productId: '3b',
    customerName: 'Nuno Carvalho',
    rating: 4,
    date: '2024-02-01',
    comment: 'Boa alface, fresca e saborosa. Quinta do Vale mantém sempre a qualidade dos produtos.',
    verifiedPurchase: true,
    helpfulCount: 14,
  },
  {
    id: 'pr20',
    productId: '3b',
    customerName: 'Cristina Lopes',
    rating: 5,
    date: '2024-01-27',
    comment: 'Sabor intenso e textura crocante! Perfeita para saladas mistas. Recomendo.',
    verifiedPurchase: true,
    helpfulCount: 19,
  },
];

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Salada de Tomate Cereja e Queijo Fresco',
    chef: 'Chef Ana Silva',
    chefImage: 'https://plus.unsplash.com/premium_photo-1661767564639-19f76ec669a9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    season: ['primavera', 'verão'],
    image: 'https://plus.unsplash.com/premium_photo-1690150311132-24ce17844a92?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ingredients: ['Tomate cereja', 'Queijo fresco', 'Manjericão', 'Azeite', 'Sal'],
    prepTime: '15 min',
    difficulty: 'Fácil',
    description: 'Uma salada fresca e saborosa, perfeita para dias quentes.',
  },
  {
    id: '2',
    title: 'Sopa de Abóbora com Gengibre',
    chef: 'Chef Miguel Santos',
    chefImage: 'https://plus.unsplash.com/premium_photo-1687697860916-b05b982decbc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    season: ['outono', 'inverno'],
    image: 'https://plus.unsplash.com/premium_photo-1695290018329-1489540737ee?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ingredients: ['Abóbora', 'Gengibre', 'Cebola', 'Alho', 'Caldo de vegetais'],
    prepTime: '40 min',
    difficulty: 'Fácil',
    description: 'Sopa cremosa e reconfortante com um toque de gengibre.',
  },
  {
    id: '3',
    title: 'Tarte de Morango',
    chef: 'Chef Sofia Costa',
    chefImage: 'https://plus.unsplash.com/premium_photo-1683133289578-3007f87b5f13?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    season: ['primavera', 'verão'],
    image: 'https://plus.unsplash.com/premium_photo-1716892887684-2d722f73a206?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ingredients: ['Morangos', 'Massa quebrada', 'Creme pasteleiro', 'Açúcar'],
    prepTime: '60 min',
    difficulty: 'Médio',
    description: 'Tarte clássica com morangos frescos da época.',
  },
  {
    id: '4',
    title: 'Risotto de Espinafres',
    chef: 'Chef Ana Silva',
    chefImage: 'https://plus.unsplash.com/premium_photo-1661767564639-19f76ec669a9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    season: ['inverno', 'primavera'],
    image: 'https://plus.unsplash.com/premium_photo-1692781059203-3c4e76576845?q=80&w=724&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ingredients: ['Arroz arborio', 'Espinafres', 'Parmesão', 'Vinho branco', 'Caldo'],
    prepTime: '35 min',
    difficulty: 'Médio',
    description: 'Risotto cremoso com espinafres frescos e parmesão.',
  },
];