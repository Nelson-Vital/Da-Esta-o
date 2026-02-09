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