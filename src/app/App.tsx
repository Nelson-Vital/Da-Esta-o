import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { SeasonalProducts } from '@/app/components/SeasonalProducts';
import { LocalProducers } from '@/app/components/LocalProducers';
import { RecipesSection } from '@/app/components/RecipesSection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SeasonalProducts />
      <LocalProducers />
      <RecipesSection />
      <Footer />
    </div>
  );
}