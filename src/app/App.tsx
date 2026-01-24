import { useState } from 'react';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { SearchBar } from '@/app/components/SearchBar';
import { SeasonalProducts } from '@/app/components/SeasonalProducts';
import { LocalProducers } from '@/app/components/LocalProducers';
import { RecipesSection } from '@/app/components/RecipesSection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // In a real app, this would filter products based on the query
    setShowSearch(false);
    // Scroll to products section
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onSearchClick={handleSearchClick} />
      
      {showSearch && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20 px-4">
          <SearchBar onSearch={handleSearch} onClose={() => setShowSearch(false)} />
        </div>
      )}

      <Hero onSearchClick={handleSearchClick} />
      <SeasonalProducts />
      <LocalProducers />
      <RecipesSection />
      <Footer />
    </div>
  );
}
