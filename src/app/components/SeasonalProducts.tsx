import { useState } from 'react';
import { MapPin, ShoppingBag, Search, Star, Eye } from 'lucide-react';
import { products, type Season } from '@/app/data/mockData';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ProductPriceComparison } from '@/app/components/ProductPriceComparison';
import { ProductDetailPage } from '@/app/components/ProductDetailPage';

const seasons: { value: Season; label: string }[] = [
  { value: 'primavera', label: 'Primavera' },
  { value: 'verão', label: 'Verão' },
  { value: 'outono', label: 'Outono' },
  { value: 'inverno', label: 'Inverno' },
];

export function SeasonalProducts() {
  const [selectedSeason, setSelectedSeason] = useState<Season>('primavera');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [comparisonProductName, setComparisonProductName] = useState<string | null>(null);
  const [viewingProductId, setViewingProductId] = useState<string | null>(null);

  const categories = ['Todos', 'Vegetais', 'Frutas'];

  const filteredProducts = products.filter(product => {
    const matchesSeason = product.season.includes(selectedSeason);
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSeason && matchesCategory && matchesSearch;
  });

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`size-3 ${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  // Show product detail page if viewing a product
  if (viewingProductId) {
    return (
      <ProductDetailPage
        productId={viewingProductId}
        onClose={() => setViewingProductId(null)}
      />
    );
  }

  // Show price comparison if requested
  if (comparisonProductName) {
    return (
      <ProductPriceComparison
        productName={comparisonProductName}
        onClose={() => setComparisonProductName(null)}
      />
    );
  }

  return (
    <section id="produtos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Produtos da Estação
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra os melhores produtos frescos e locais para cada época do ano
          </p>
        </div>

        {/* Contextual Search for Products */}
        <div className="max-w-2xl mx-auto mb-8">
          <label htmlFor="product-search" className="block text-sm font-medium text-gray-700 mb-2">
            Pesquisar produtos
          </label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
            <input
              id="product-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ex: tomate, alface, morango..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Limpar pesquisa"
              >
                ✕
              </button>
            )}
          </div>
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
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 cursor-pointer" onClick={() => setViewingProductId(product.id)}>
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1.5 rounded-full shadow-md">
                  <p className="text-sm font-bold text-green-700">{product.price}</p>
                </div>
                {/* View Details Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium shadow-lg">
                    <Eye className="size-4" />
                    Ver Detalhes
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 
                  className="text-xl font-semibold text-gray-900 mb-2 cursor-pointer hover:text-green-700 transition-colors"
                  onClick={() => setViewingProductId(product.id)}
                >
                  {product.name}
                </h3>
                
                {/* Rating */}
                {product.rating && product.totalReviews && (
                  <button
                    onClick={() => setViewingProductId(product.id)}
                    className="flex items-center gap-2 mb-3 hover:underline"
                  >
                    {renderStars(Math.round(product.rating))}
                    <span className="text-xs text-gray-600">
                      {product.rating.toFixed(1)} ({product.totalReviews})
                    </span>
                  </button>
                )}

                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                
                {/* Attributes/Badges */}
                {product.attributes && product.attributes.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.attributes.map((attr, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700"
                      >
                        {attr}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <MapPin className="size-4" />
                    <span>{product.producer}</span>
                  </div>
                  <button 
                    onClick={() => setViewingProductId(product.id)}
                    className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors text-sm"
                  >
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