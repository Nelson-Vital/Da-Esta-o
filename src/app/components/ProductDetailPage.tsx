import { ArrowLeft, Star, MapPin, Navigation, Leaf, ShoppingBag, ThumbsUp, CheckCircle, TrendingUp } from 'lucide-react';
import { useMemo, useState } from 'react';
import { products, productReviews, producers, type Product } from '@/app/data/mockData';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ProductPriceComparison } from '@/app/components/ProductPriceComparison';

interface ProductDetailPageProps {
  productId: string;
  onClose: () => void;
}

export function ProductDetailPage({ productId, onClose }: ProductDetailPageProps) {
  const [showPriceComparison, setShowPriceComparison] = useState(false);
  
  const product = products.find(p => p.id === productId);
  const reviews = productReviews.filter(r => r.productId === productId);
  const producer = product ? producers.find(p => p.id === product.producerId) : null;

  // Calculate rating distribution
  const ratingDistribution = useMemo(() => {
    const dist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach(review => {
      dist[review.rating as keyof typeof dist]++;
    });
    return dist;
  }, [reviews]);

  // Sort reviews by helpful count
  const sortedReviews = useMemo(() => {
    return [...reviews].sort((a, b) => (b.helpfulCount || 0) - (a.helpfulCount || 0));
  }, [reviews]);

  // Check if there are alternative producers for this product
  const alternativeProducers = products.filter(p => 
    p.name === product?.name && p.id !== productId
  );

  if (!product) {
    return null;
  }

  const renderStars = (rating: number, size: 'sm' | 'lg' = 'sm') => {
    const sizeClass = size === 'sm' ? 'size-4' : 'size-6';
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClass} ${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-PT', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (showPriceComparison && alternativeProducers.length > 0) {
    return (
      <ProductPriceComparison
        productName={product.name}
        onClose={() => setShowPriceComparison(false)}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="size-5" />
              <span className="font-medium">Voltar aos produtos</span>
            </button>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Product Hero */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <h1 className="text-3xl font-semibold text-gray-900 mb-3">
                      {product.name}
                    </h1>
                    
                    {/* Rating Summary */}
                    {product.rating && product.totalReviews && (
                      <div className="flex items-center gap-3 mb-4">
                        {renderStars(Math.round(product.rating))}
                        <span className="text-lg font-semibold text-gray-900">
                          {product.rating.toFixed(1)}
                        </span>
                        <span className="text-gray-600">
                          ({product.totalReviews} {product.totalReviews === 1 ? 'avaliação' : 'avaliações'})
                        </span>
                      </div>
                    )}

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Attributes/Badges */}
                    {product.attributes && product.attributes.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.attributes.map((attr, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 border border-green-200"
                          >
                            <Leaf className="size-3" />
                            {attr}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Producer Info */}
                    {producer && (
                      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600 mb-1">Produzido por</p>
                        <p className="font-semibold text-gray-900 text-lg mb-2">{product.producer}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="size-4" />
                            <span>{producer.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Navigation className="size-4" />
                            <span>{product.distance}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Rating Summary */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Avaliações de Clientes
                </h2>
                
                <div className="flex items-start gap-8 mb-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gray-900 mb-2">
                      {product.rating?.toFixed(1)}
                    </div>
                    {renderStars(Math.round(product.rating || 0), 'lg')}
                    <p className="text-sm text-gray-600 mt-2">
                      {product.totalReviews} {product.totalReviews === 1 ? 'avaliação' : 'avaliações'}
                    </p>
                  </div>

                  {/* Rating Distribution */}
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => {
                      const count = ratingDistribution[rating as keyof typeof ratingDistribution];
                      const percentage = reviews.length > 0 
                        ? (count / reviews.length) * 100 
                        : 0;
                      
                      return (
                        <div key={rating} className="flex items-center gap-3">
                          <div className="flex items-center gap-1 w-16">
                            <span className="text-sm text-gray-600">{rating}</span>
                            <Star className="size-4 fill-yellow-400 text-yellow-400" />
                          </div>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-yellow-400 h-2 rounded-full transition-all"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-600 w-12 text-right">
                            {count}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Individual Reviews */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Comentários Mais Úteis
                </h3>
                {sortedReviews.length > 0 ? (
                  <div className="space-y-4">
                    {sortedReviews.map((review) => (
                      <div
                        key={review.id}
                        className="bg-white rounded-lg border border-gray-200 p-6"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="size-12 rounded-full bg-green-100 flex items-center justify-center">
                              <span className="text-green-700 font-semibold text-lg">
                                {review.customerName.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <p className="font-semibold text-gray-900">
                                  {review.customerName}
                                </p>
                                {review.verifiedPurchase && (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700">
                                    <CheckCircle className="size-3" />
                                    Compra Verificada
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-500">
                                {formatDate(review.date)}
                              </p>
                            </div>
                          </div>
                          {renderStars(review.rating)}
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          {review.comment}
                        </p>
                        {review.helpfulCount && review.helpfulCount > 0 && (
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <ThumbsUp className="size-4" />
                            <span>{review.helpfulCount} pessoas acharam útil</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    Ainda não há comentários para este produto.
                  </p>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Purchase Card */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Preço</p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-green-700">
                      €{product.priceNumeric.toFixed(2)}
                    </span>
                    <span className="text-gray-600">/{product.unit}</span>
                  </div>

                  {/* Price Comparison Link */}
                  {alternativeProducers.length > 0 && (
                    <button
                      onClick={() => setShowPriceComparison(true)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-2 border-green-600 text-green-700 hover:bg-green-50 transition-colors font-medium text-sm mb-4"
                    >
                      <TrendingUp className="size-4" />
                      Comparar preços ({alternativeProducers.length + 1} produtores)
                    </button>
                  )}
                </div>

                <button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors font-medium shadow-sm mb-3">
                  <ShoppingBag className="size-5" />
                  Encomendar Agora
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Entrega rápida • Produtos frescos
                </p>
              </div>

              {/* Quality Indicators */}
              <div className="bg-green-50 rounded-lg border border-green-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Leaf className="size-5 text-green-600" />
                  Indicadores de Qualidade
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Produto Local</p>
                      <p className="text-sm text-gray-600">
                        Produzido a apenas {product.distance}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Da Estação</p>
                      <p className="text-sm text-gray-600">
                        {product.season.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(', ')}
                      </p>
                    </div>
                  </div>
                  {product.rating && product.rating >= 4.5 && (
                    <div className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Altamente Avaliado</p>
                        <p className="text-sm text-gray-600">
                          {product.rating.toFixed(1)}/5.0 por {product.totalReviews} clientes
                        </p>
                      </div>
                    </div>
                  )}
                  {product.attributes && product.attributes.length > 0 && (
                    <div className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Certificações</p>
                        <p className="text-sm text-gray-600">
                          {product.attributes.join(', ')}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Producer Card */}
              {producer && (
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Sobre o Produtor
                  </h3>
                  <div className="mb-4">
                    <p className="font-medium text-gray-900 mb-1">{producer.name}</p>
                    <p className="text-sm text-gray-600 mb-2">{producer.description}</p>
                    {producer.rating && (
                      <div className="flex items-center gap-2 mt-3">
                        {renderStars(Math.round(producer.rating))}
                        <span className="text-sm text-gray-600">
                          {producer.rating.toFixed(1)} ({producer.totalReviews} avaliações)
                        </span>
                      </div>
                    )}
                  </div>
                  <button className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium text-sm">
                    Ver Perfil do Produtor
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
