import { Leaf, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="size-8 text-green-500" />
              <span className="text-xl font-semibold text-white">Da Estação</span>
            </div>
            <p className="text-sm text-gray-400">
              Conectando pessoas a produtores locais para escolhas alimentares mais sustentáveis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#produtos" className="hover:text-green-500 transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#produtores" className="hover:text-green-500 transition-colors">
                  Produtores
                </a>
              </li>
              <li>
                <a href="#receitas" className="hover:text-green-500 transition-colors">
                  Receitas
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-green-500 transition-colors">
                  Sobre Nós
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Calendário Sazonal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Guia de Sustentabilidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Para Produtores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="size-4 mt-0.5 flex-shrink-0" />
                <span>info@daestacao.pt</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="size-4 mt-0.5 flex-shrink-0" />
                <span>+351 210 000 000</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 flex-shrink-0" />
                <span>Lisboa, Portugal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 Da Estação. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
