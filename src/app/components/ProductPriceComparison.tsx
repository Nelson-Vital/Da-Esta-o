import { ArrowLeft, TrendingDown, TrendingUp, Navigation, Mail } from 'lucide-react';
import { useState, useMemo } from 'react';
import { products, producers, type Product } from '@/app/data/mockData';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ContactProducerDialog } from '@/app/components/ContactProducerDialog';

interface ProductPriceComparisonProps {
  productName: string;
  onClose: () => void;
}

export function ProductPriceComparison({ productName, onClose }: ProductPriceComparisonProps) {
  const [selectedProducerId, setSelectedProducerId] = useState<string | null>(null);

  // Get all variants of this product from different producers
  const productVariants = useMemo(() => {
    return products
      .filter(p => p.name === productName)
      .sort((a, b) => a.priceNumeric - b.priceNumeric); // Sort by price, lowest first
  }, [productName]);

  const lowestPrice = productVariants[0]?.priceNumeric || 0;
  const highestPrice = productVariants[productVariants.length - 1]?.priceNumeric || 0;
  const avgPrice = productVariants.reduce((sum, p) => sum + p.priceNumeric, 0) / productVariants.length;

  const selectedProducer = selectedProducerId 
    ? producers.find(p => p.id === selectedProducerId) 
    : null;

  const calculateSavings = (currentPrice: number) => {
    const savings = highestPrice - currentPrice;
    const percentage = ((savings / highestPrice) * 100).toFixed(0);
    return { amount: savings.toFixed(2), percentage };
  };

  if (productVariants.length === 0) {
    return null;
  }

  const firstProduct = productVariants[0];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Voltar"
            >
              <ArrowLeft className="size-5 text-gray-600" />
            </button>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Comparação de Preços
              </h2>
              <p className="text-gray-600">{productName}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Preço médio</p>
            <p className="text-2xl font-semibold text-gray-900">€{avgPrice.toFixed(2)}/{firstProduct.unit}</p>
          </div>
        </div>

        {/* Price Summary */}
        <div className="p-6 bg-green-50 border-b border-green-100">
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">Preço mais baixo</p>
              <p className="text-xl font-semibold text-green-700 flex items-center justify-center gap-1">
                <TrendingDown className="size-5" />
                €{lowestPrice.toFixed(2)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">Preço médio</p>
              <p className="text-xl font-semibold text-gray-900">
                €{avgPrice.toFixed(2)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">Preço mais alto</p>
              <p className="text-xl font-semibold text-red-600 flex items-center justify-center gap-1">
                <TrendingUp className="size-5" />
                €{highestPrice.toFixed(2)}
              </p>
            </div>
          </div>
          {productVariants.length > 1 && (
            <p className="text-center text-sm text-gray-600 mt-4">
              Poupe até <strong className="text-green-700">€{calculateSavings(lowestPrice).amount}</strong> escolhendo o melhor preço
            </p>
          )}
        </div>

        {/* Producer Comparison Cards */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {productVariants.length} {productVariants.length === 1 ? 'produtor encontrado' : 'produtores encontrados'}
          </h3>
          
          <div className="space-y-4">
            {productVariants.map((product, index) => {
              const savings = calculateSavings(product.priceNumeric);
              const isLowest = product.priceNumeric === lowestPrice;
              const isHighest = product.priceNumeric === highestPrice;

              return (
                <div
                  key={product.id}
                  className={`border rounded-lg p-5 transition-all ${
                    isLowest 
                      ? 'border-green-500 bg-green-50 shadow-md' 
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    {/* Producer Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <ImageWithFallback
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900 text-lg mb-1">
                                {product.producer}
                                {isLowest && (
                                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-600 text-white">
                                    Melhor preço
                                  </span>
                                )}
                              </h4>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Navigation className="size-4" />
                                <span>{product.distance}</span>
                              </div>
                            </div>
                            {/* Price Display */}
                            <div className="text-right">
                              <div className={`text-2xl font-bold ${
                                isLowest ? 'text-green-700' : 'text-gray-900'
                              }`}>
                                €{product.priceNumeric.toFixed(2)}
                                <span className="text-sm font-normal text-gray-600">/{product.unit}</span>
                              </div>
                              {!isLowest && savings.amount !== '0.00' && (
                                <p className="text-xs text-gray-500 mt-1">
                                  +€{savings.amount} ({+savings.percentage}%)
                                </p>
                              )}
                              {isLowest && savings.amount !== '0.00' && (
                                <p className="text-xs text-green-700 mt-1 font-medium">
                                  Poupe €{savings.amount}
                                </p>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                        </div>
                      </div>

                      {/* Contact Button */}
                      <button
                        onClick={() => setSelectedProducerId(product.producerId)}
                        className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg transition-colors font-medium text-sm ${
                          isLowest
                            ? 'bg-green-600 hover:bg-green-700 text-white shadow-sm'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        <Mail className="size-4" />
                        Contactar {product.producer}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Comparison Tips */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h4 className="font-medium text-gray-900 mb-2 text-sm">💡 Dica de comparação</h4>
            <p className="text-sm text-gray-600">
              Além do preço, considere a distância do produtor (custos de transporte menores e 
              produtos mais frescos) e as práticas de cultivo (biológico, tradicional, etc.).
            </p>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
      {selectedProducer && (
        <ContactProducerDialog
          producer={selectedProducer}
          onClose={() => setSelectedProducerId(null)}
        />
      )}
    </div>
  );
}
