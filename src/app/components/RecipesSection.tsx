import { useState } from 'react';
import { Clock, ChefHat, Utensils } from 'lucide-react';
import { recipes, type Season } from '@/app/data/mockData';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const seasons: { value: Season; label: string }[] = [
  { value: 'primavera', label: 'Primavera' },
  { value: 'verão', label: 'Verão' },
  { value: 'outono', label: 'Outono' },
  { value: 'inverno', label: 'Inverno' },
];

export function RecipesSection() {
  const [selectedSeason, setSelectedSeason] = useState<Season>('primavera');

  const filteredRecipes = recipes.filter(recipe =>
    recipe.season.includes(selectedSeason)
  );

  return (
    <section id="receitas" className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Receitas Sazonais
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sugestões de chefs com ingredientes frescos da época
          </p>
        </div>

        {/* Season Filter */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-lg bg-white p-1 shadow-sm">
            {seasons.map((season) => (
              <button
                key={season.value}
                onClick={() => setSelectedSeason(season.value)}
                className={`px-6 py-2 rounded-md transition-colors ${
                  selectedSeason === season.value
                    ? 'bg-green-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {season.label}
              </button>
            ))}
          </div>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <ImageWithFallback
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-medium text-green-700">
                  {recipe.difficulty}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{recipe.title}</h3>
                
                {/* Chef Info */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                  <div className="size-10 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={recipe.chefImage}
                      alt={recipe.chef}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Sugerido por</p>
                    <p className="font-medium text-gray-900">{recipe.chef}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{recipe.description}</p>

                {/* Recipe Details */}
                <div className="flex items-center gap-6 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="size-4" />
                    <span>{recipe.prepTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Utensils className="size-4" />
                    <span>{recipe.ingredients.length} ingredientes</span>
                  </div>
                </div>

                {/* Ingredients */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-900 mb-2 flex items-center gap-1">
                    <ChefHat className="size-4" />
                    Ingredientes principais:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {recipe.ingredients.slice(0, 4).map((ingredient, index) => (
                      <span
                        key={index}
                        className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
                      >
                        {ingredient}
                      </span>
                    ))}
                    {recipe.ingredients.length > 4 && (
                      <span className="bg-gray-50 text-gray-600 px-3 py-1 rounded-full text-sm">
                        +{recipe.ingredients.length - 4} mais
                      </span>
                    )}
                  </div>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md transition-colors font-medium">
                  Ver Receita Completa
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhuma receita encontrada para esta estação.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
