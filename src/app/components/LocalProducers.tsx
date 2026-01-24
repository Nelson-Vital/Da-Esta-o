import { MapPin, Navigation } from 'lucide-react';
import { producers } from '@/app/data/mockData';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function LocalProducers() {
  return (
    <section id="produtores" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Produtores Locais
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça os produtores da sua região e apoie a agricultura local
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {producers.map((producer) => (
            <div
              key={producer.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <ImageWithFallback
                    src={producer.image}
                    alt={producer.name}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {producer.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <MapPin className="size-4" />
                    <span className="text-sm">{producer.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 mb-3">
                    <Navigation className="size-4" />
                    <span className="text-sm font-medium">{producer.distance} de distância</span>
                  </div>
                  <p className="text-gray-700 mb-4">{producer.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Especialidade:</p>
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {producer.specialty}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-2">Produtos:</p>
                    <div className="flex flex-wrap gap-2">
                      {producer.products.map((product, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
