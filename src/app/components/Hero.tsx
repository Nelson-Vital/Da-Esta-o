import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface HeroProps {
  onSearchClick: () => void;
}

export function Hero({ onSearchClick }: HeroProps) {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1748342319942-223b99937d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBmYXJtZXJzJTIwbWFya2V0fGVufDF8fHx8MTc2OTI3MzAxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Mercado de agricultores com vegetais frescos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl text-white mb-6">
          Descubra o Sabor da Estação
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          Conecte-se com produtores locais e descubra produtos sazonais e receitas autênticas
        </p>
        <button
          onClick={onSearchClick}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors shadow-lg"
        >
          Explorar Produtos
        </button>
      </div>
    </section>
  );
}
