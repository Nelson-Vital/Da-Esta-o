import { ArrowLeft, Star, MapPin, Navigation, Award, Calendar, Mail, ShieldCheck, CheckCircle } from 'lucide-react';
import { useMemo } from 'react';
import { producers, reviews, products, type Producer } from '@/app/data/mockData';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface ProducerDetailPageProps {
  producerId: string;
  onClose: () => void;
  onContactClick: (producer: Producer) => void;
}

export function ProducerDetailPage({ producerId, onClose, onContactClick }: ProducerDetailPageProps) {
  const producer = producers.find(p => p.id === producerId);
  const producerReviews = reviews.filter(r => r.producerId === producerId);
  const producerProducts = products.filter(p => p.producerId === producerId);

  // Calculate rating distribution
  const ratingDistribution = useMemo(() => {
    const dist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    producerReviews.forEach(review => {
      dist[review.rating as keyof typeof dist]++;
    });
    return dist;
  }, [producerReviews]);

  if (!producer) {
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
              <span className="font-medium">Voltar aos produtores</span>
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative h-80">
          <ImageWithFallback
            src={producer.image}
            alt={producer.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl font-semibold text-white mb-2">
                {producer.name}
              </h1>
              <div className="flex items-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <MapPin className="size-4" />
                  <span>{producer.location}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <Navigation className="size-4" />
                  <span>{producer.distance} de distância</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Rating Summary */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                      Avaliações e Comentários
                    </h2>
                    <p className="text-gray-600">
                      {producer.totalReviews} {producer.totalReviews === 1 ? 'avaliação' : 'avaliações'} de clientes verificados
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-4xl font-bold text-gray-900">
                        {producer.rating?.toFixed(1)}
                      </span>
                      <span className="text-gray-500">/5</span>
                    </div>
                    {renderStars(Math.round(producer.rating || 0))}
                  </div>
                </div>

                {/* Rating Distribution */}
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => {
                    const count = ratingDistribution[rating as keyof typeof ratingDistribution];
                    const percentage = producerReviews.length > 0 
                      ? (count / producerReviews.length) * 100 
                      : 0;
                    
                    return (
                      <div key={rating} className="flex items-center gap-3">
                        <div className="flex items-center gap-1 w-20">
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

              {/* Individual Reviews */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Comentários de Clientes
                </h3>
                {producerReviews.length > 0 ? (
                  <div className="space-y-4">
                    {producerReviews.map((review) => (
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
                              <div className="flex items-center gap-2">
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
                        <p className="text-gray-700 leading-relaxed">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    Ainda não há comentários para este produtor.
                  </p>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trust Indicators */}
              <div className="bg-green-50 rounded-lg border border-green-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <ShieldCheck className="size-5 text-green-600" />
                  Indicadores de Confiança
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Certificações</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {producer.certifications?.map((cert, index) => (
                          <span
                            key={index}
                            className="inline-block bg-white px-2 py-1 rounded text-xs font-medium text-green-700 border border-green-200"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Experiência</p>
                      <p className="text-sm text-gray-600">
                        {producer.yearsInBusiness} anos no mercado
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Avaliação</p>
                      <p className="text-sm text-gray-600">
                        {producer.rating?.toFixed(1)}/5 ({producer.totalReviews} avaliações)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Sobre o Produtor
                </h3>
                <p className="text-gray-600 mb-4">
                  {producer.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-900">Especialidade:</p>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {producer.specialty}
                  </span>
                </div>
              </div>

              {/* Products Section */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Produtos Disponíveis
                </h3>
                <div className="space-y-3">
                  {producerProducts.length > 0 ? (
                    producerProducts.map((product) => (
                      <div key={product.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                        <span className="text-sm text-gray-700">{product.name}</span>
                        <span className="text-sm font-semibold text-green-700">{product.price}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">
                      {producer.products.join(', ')}
                    </p>
                  )}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <button
                  onClick={() => onContactClick(producer)}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors font-medium shadow-sm"
                >
                  <Mail className="size-5" />
                  Contactar {producer.name}
                </button>
                <p className="text-xs text-gray-500 text-center mt-3">
                  Resposta rápida • Sem compromisso
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
