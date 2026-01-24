export type Season = 'primavera' | 'verão' | 'outono' | 'inverno';

export interface Product {
  id: string;
  name: string;
  season: Season[];
  category: string;
  image: string;
  producer: string;
  price: string;
  description: string;
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
    image: 'https://images.unsplash.com/photo-1700064165267-8fa68ef07167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG9lcyUyMGZyZXNoJTIwcHJvZHVjZXxlbnwxfHx8fDE3NjkyNzMwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    producer: 'Quinta do Vale',
    price: '€2.50/kg',
    description: 'Tomates cereja frescos e saborosos, cultivados sem pesticidas.',
  },
  {
    id: '2',
    name: 'Morangos',
    season: ['primavera', 'verão'],
    category: 'Frutas',
    image: 'https://images.unsplash.com/photo-1758546501186-34d70455b886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFzb25hbCUyMGZydWl0cyUyMG9yZ2FuaWN8ZW58MXx8fHwxNzY5MjczMDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    producer: 'Horta da Maria',
    price: '€4.00/kg',
    description: 'Morangos orgânicos, doces e suculentos.',
  },
  {
    id: '3',
    name: 'Alface Frisada',
    season: ['primavera', 'outono'],
    category: 'Vegetais',
    image: 'https://images.unsplash.com/photo-1748342319942-223b99937d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBmYXJtZXJzJTIwbWFya2V0fGVufDF8fHx8MTc2OTI3MzAxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    producer: 'Bio Jardim',
    price: '€1.50/un',
    description: 'Alface crocante e fresca, perfeita para saladas.',
  },
  {
    id: '4',
    name: 'Abóbora',
    season: ['outono', 'inverno'],
    category: 'Vegetais',
    image: 'https://images.unsplash.com/photo-1748342319942-223b99937d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBmYXJtZXJzJTIwbWFya2V0fGVufDF8fHx8MTc2OTI3MzAxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    producer: 'Quinta do Vale',
    price: '€1.80/kg',
    description: 'Abóbora rica em sabor, ideal para sopas e assados.',
  },
  {
    id: '5',
    name: 'Maçã Reineta',
    season: ['outono', 'inverno'],
    category: 'Frutas',
    image: 'https://images.unsplash.com/photo-1758546501186-34d70455b886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFzb25hbCUyMGZydWl0cyUyMG9yZ2FuaWN8ZW58MXx8fHwxNzY5MjczMDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    producer: 'Pomar do Sol',
    price: '€2.20/kg',
    description: 'Maçãs aromáticas com textura firme.',
  },
  {
    id: '6',
    name: 'Espinafres',
    season: ['inverno', 'primavera'],
    category: 'Vegetais',
    image: 'https://images.unsplash.com/photo-1748342319942-223b99937d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBmYXJtZXJzJTIwbWFya2V0fGVufDF8fHx8MTc2OTI3MzAxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    producer: 'Bio Jardim',
    price: '€3.00/kg',
    description: 'Espinafres tenros e nutritivos.',
  },
];

export const producers: Producer[] = [
  {
    id: '1',
    name: 'Quinta do Vale',
    location: 'Sintra, Lisboa',
    specialty: 'Vegetais Orgânicos',
    image: 'https://images.unsplash.com/photo-1688320243376-69b68a8f656f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwZmllbGQlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NjkyNzMwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Produção familiar de vegetais orgânicos há três gerações.',
    distance: '15 km',
    products: ['Tomate', 'Alface', 'Cenoura', 'Abóbora'],
  },
  {
    id: '2',
    name: 'Horta da Maria',
    location: 'Cascais, Lisboa',
    specialty: 'Frutas da Época',
    image: 'https://images.unsplash.com/photo-1655313893399-e9d607e1d84c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMGZhcm1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTI3MzAxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Especialistas em morangos e frutas vermelhas orgânicas.',
    distance: '10 km',
    products: ['Morangos', 'Framboesas', 'Mirtilos'],
  },
  {
    id: '3',
    name: 'Bio Jardim',
    location: 'Mafra, Lisboa',
    specialty: 'Hortaliças Bio',
    image: 'https://images.unsplash.com/photo-1688320243376-69b68a8f656f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwZmllbGQlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NjkyNzMwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Cultivo biológico certificado de hortaliças variadas.',
    distance: '20 km',
    products: ['Alface', 'Espinafres', 'Couve', 'Brócolos'],
  },
  {
    id: '4',
    name: 'Pomar do Sol',
    location: 'Torres Vedras, Lisboa',
    specialty: 'Pomares Tradicionais',
    image: 'https://images.unsplash.com/photo-1688320243376-69b68a8f656f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwZmllbGQlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NjkyNzMwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
    chefImage: 'https://images.unsplash.com/photo-1655313893399-e9d607e1d84c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMGZhcm1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTI3MzAxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    season: ['primavera', 'verão'],
    image: 'https://images.unsplash.com/photo-1722169474560-fa64674f17c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwcmVjaXBlJTIwY29va2luZ3xlbnwxfHx8fDE3NjkyNzMwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ingredients: ['Tomate cereja', 'Queijo fresco', 'Manjericão', 'Azeite', 'Sal'],
    prepTime: '15 min',
    difficulty: 'Fácil',
    description: 'Uma salada fresca e saborosa, perfeita para dias quentes.',
  },
  {
    id: '2',
    title: 'Sopa de Abóbora com Gengibre',
    chef: 'Chef Miguel Santos',
    chefImage: 'https://images.unsplash.com/photo-1655313893399-e9d607e1d84c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMGZhcm1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTI3MzAxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    season: ['outono', 'inverno'],
    image: 'https://images.unsplash.com/photo-1722169474560-fa64674f17c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwcmVjaXBlJTIwY29va2luZ3xlbnwxfHx8fDE3NjkyNzMwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ingredients: ['Abóbora', 'Gengibre', 'Cebola', 'Alho', 'Caldo de vegetais'],
    prepTime: '40 min',
    difficulty: 'Fácil',
    description: 'Sopa cremosa e reconfortante com um toque de gengibre.',
  },
  {
    id: '3',
    title: 'Tarte de Morango',
    chef: 'Chef Sofia Costa',
    chefImage: 'https://images.unsplash.com/photo-1655313893399-e9d607e1d84c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMGZhcm1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTI3MzAxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    season: ['primavera', 'verão'],
    image: 'https://images.unsplash.com/photo-1722169474560-fa64674f17c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwcmVjaXBlJTIwY29va2luZ3xlbnwxfHx8fDE3NjkyNzMwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ingredients: ['Morangos', 'Massa quebrada', 'Creme pasteleiro', 'Açúcar'],
    prepTime: '60 min',
    difficulty: 'Médio',
    description: 'Tarte clássica com morangos frescos da época.',
  },
  {
    id: '4',
    title: 'Risotto de Espinafres',
    chef: 'Chef Ana Silva',
    chefImage: 'https://images.unsplash.com/photo-1655313893399-e9d607e1d84c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMGZhcm1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTI3MzAxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    season: ['inverno', 'primavera'],
    image: 'https://images.unsplash.com/photo-1722169474560-fa64674f17c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwcmVjaXBlJTIwY29va2luZ3xlbnwxfHx8fDE3NjkyNzMwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ingredients: ['Arroz arborio', 'Espinafres', 'Parmesão', 'Vinho branco', 'Caldo'],
    prepTime: '35 min',
    difficulty: 'Médio',
    description: 'Risotto cremoso com espinafres frescos e parmesão.',
  },
];
