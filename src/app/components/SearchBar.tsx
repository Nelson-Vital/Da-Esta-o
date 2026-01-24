import { Search, X } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onClose?: () => void;
}

export function SearchBar({ onSearch, onClose }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Pesquisar Alimentos</h2>
        {onClose && (
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Fechar"
          >
            <X className="size-5 text-gray-500" />
          </button>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ex: tomate, alface, morango..."
          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors"
        >
          Buscar
        </button>
      </form>

      <div className="mt-4">
        <p className="text-sm text-gray-600 mb-2">Sugestões populares:</p>
        <div className="flex flex-wrap gap-2">
          {['Tomate', 'Alface', 'Cenoura', 'Morango', 'Maçã'].map((item) => (
            <button
              key={item}
              onClick={() => {
                setQuery(item);
                onSearch(item);
              }}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
