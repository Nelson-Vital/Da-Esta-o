import { MapPin, Navigation, Search, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { producers } from '@/app/data/mockData';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ContactProducerDialog } from '@/app/components/ContactProducerDialog';
import type { Producer } from '@/app/data/mockData';

export function LocalProducers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProducer, setSelectedProducer] = useState<Producer | null>(null);

  const filteredProducers = producers.filter(producer => {
    if (searchQuery === '') return true;
    const query = searchQuery.toLowerCase();
    return (
      producer.name.toLowerCase().includes(query) ||
      producer.location.toLowerCase().includes(query) ||
      producer.specialty.toLowerCase().includes(query) ||
      producer.products.some(p => p.toLowerCase().includes(query))
    );
  });

  return (
    <section id="produtores" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Produtores Locais
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça os produtores da sua região e apoie a agricultura local
          </p>
        </div>

        {/* Contextual Search for Producers */}
        <div className="max-w-2xl mx-auto mb-10">
          <label htmlFor="producer-search" className="block text-sm font-medium text-gray-700 mb-2">
            Pesquisar produtores
          </label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
            <input
              id="producer-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ex: nome, localização ou especialidade..."
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducers.map((producer) => (
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
                <div className="p-6 md:w-2/3 flex flex-col">
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
                  <div className="mb-4">
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

                  {/* Contact Producer CTA */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <button
                      onClick={() => setSelectedProducer(producer)}
                      className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors font-medium shadow-sm hover:shadow"
                    >
                      <Mail className="size-5" />
                      Contactar Produtor
                    </button>
                    <div className="flex items-center justify-center gap-4 mt-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Phone className="size-4" />
                        <span>Resposta rápida</span>
                      </div>
                      <span className="text-gray-300">•</span>
                      <span>Sem compromisso</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Dialog */}
      {selectedProducer && (
        <ContactProducerDialog
          producer={selectedProducer}
          onClose={() => setSelectedProducer(null)}
        />
      )}
    </section>
  );
}