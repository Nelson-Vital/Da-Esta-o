import { Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Leaf className="size-8 text-green-600" />
            <span className="text-xl font-semibold text-gray-900">Da Estação</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#produtos" className="text-gray-700 hover:text-green-600 transition-colors">
              Produtos
            </a>
            <a href="#produtores" className="text-gray-700 hover:text-green-600 transition-colors">
              Produtores
            </a>
            <a href="#receitas" className="text-gray-700 hover:text-green-600 transition-colors">
              Receitas
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-green-600 transition-colors">
              Sobre
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? (
              <X className="size-6 text-gray-700" />
            ) : (
              <Menu className="size-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a
                href="#produtos"
                className="text-gray-700 hover:text-green-600 transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                Produtos
              </a>
              <a
                href="#produtores"
                className="text-gray-700 hover:text-green-600 transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                Produtores
              </a>
              <a
                href="#receitas"
                className="text-gray-700 hover:text-green-600 transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                Receitas
              </a>
              <a
                href="#sobre"
                className="text-gray-700 hover:text-green-600 transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                Sobre
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}