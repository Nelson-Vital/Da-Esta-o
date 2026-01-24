import { useState } from 'react';
import { MapPin, ShoppingBag } from 'lucide-react';
import { products, type Season } from '@/app/data/mockData';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const seasons: { value: Season; label: string }[] = [
  { value: 'primavera', label: 'Primavera' },
  { value: 'verão', label: 'Verão' },
  { value: 'outono', label: 'Outono' },
  { value: 'inverno', label: 'Inverno' },
];

export function SeasonalProducts() {
  const [selectedSeason, setSelectedSeason] = useState<Season>('primavera');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Vegetais', 'Frutas'];

  const filteredProducts = products.filter(product => {
    const matchesSeason = product.season.includes(selectedSeason);
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    return matchesSeason && matchesCategory;
  });

  return (
    <section id="produtos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Produtos da Estação
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra os melhores produtos frescos e locais para cada época do ano
          </p>
        </div>

        {/* Season Filter */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-white p-1 shadow-sm">
            {seasons.map((season) => (
              <button
                key={season.value}
                onClick={() => setSelectedSeason(season.value)}
                className={`px-6 py-2 rounded-md transition-colors ${
                  selectedSeason === season.value
                    ? 'bg-green-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {season.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-green-100 text-green-700 border border-green-300'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-medium text-green-700">
                  {product.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <MapPin className="size-4" />
                    <span>{product.producer}</span>
                  </div>
                  <button className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors text-sm">
                    <ShoppingBag className="size-4" />
                    <span>Encomendar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhum produto encontrado para esta estação e categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
