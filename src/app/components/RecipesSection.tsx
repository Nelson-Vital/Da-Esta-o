import { useState, useMemo } from 'react';
import { Clock, ChefHat, Utensils, Search, X, Filter } from 'lucide-react';
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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [showAllIngredients, setShowAllIngredients] = useState(false);

  // Extract all unique ingredients from recipes
  const allIngredients = useMemo(() => {
    const ingredientsSet = new Set<string>();
    recipes.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        ingredientsSet.add(ingredient);
      });
    });
    return Array.from(ingredientsSet).sort();
  }, []);

  // Show popular ingredients first (ingredients that appear in multiple recipes)
  const popularIngredients = useMemo(() => {
    const ingredientCount = new Map<string, number>();
    recipes.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        ingredientCount.set(ingredient, (ingredientCount.get(ingredient) || 0) + 1);
      });
    });
    return Array.from(ingredientCount.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([ingredient]) => ingredient);
  }, []);

  const toggleIngredient = (ingredient: string) => {
    setSelectedIngredients(prev =>
      prev.includes(ingredient)
        ? prev.filter(i => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  const clearIngredientFilters = () => {
    setSelectedIngredients([]);
  };

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSeason = recipe.season.includes(selectedSeason);
    const matchesSearch = searchQuery === '' ||
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.chef.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // If ingredients are selected, recipe must contain at least one selected ingredient
    const matchesIngredients = selectedIngredients.length === 0 ||
      selectedIngredients.some(selectedIng => 
        recipe.ingredients.some(recipeIng => 
          recipeIng.toLowerCase() === selectedIng.toLowerCase()
        )
      );
    
    return matchesSeason && matchesSearch && matchesIngredients;
  });

  const ingredientsToShow = showAllIngredients ? allIngredients : popularIngredients;

  return (
    <section id="receitas" className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Receitas Sazonais
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sugestões de chefs com ingredientes frescos da época
          </p>
        </div>

        {/* Contextual Search for Recipes */}
        <div className="max-w-2xl mx-auto mb-6">
          <label htmlFor="recipe-search" className="block text-sm font-medium text-gray-700 mb-2">
            Pesquisar receitas
          </label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
            <input
              id="recipe-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ex: nome da receita, chef ou ingrediente..."
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
          {searchQuery && (
            <p className="text-sm text-gray-600 mt-2">
              A pesquisar em títulos, chefs e ingredientes
            </p>
          )}
        </div>

        {/* Ingredient Filters */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Filter className="size-5 text-gray-600" />
                <h3 className="text-sm font-medium text-gray-900">
                  Filtrar por ingredientes
                </h3>
                {selectedIngredients.length > 0 && (
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
                    {selectedIngredients.length} selecionado{selectedIngredients.length > 1 ? 's' : ''}
                  </span>
                )}
              </div>
              {selectedIngredients.length > 0 && (
                <button
                  onClick={clearIngredientFilters}
                  className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"
                >
                  <X className="size-4" />
                  Limpar filtros
                </button>
              )}
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              Selecione os ingredientes que tem disponíveis
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              {ingredientsToShow.map((ingredient) => (
                <button
                  key={ingredient}
                  onClick={() => toggleIngredient(ingredient)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedIngredients.includes(ingredient)
                      ? 'bg-green-600 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedIngredients.includes(ingredient) && (
                    <span className="mr-1">✓</span>
                  )}
                  {ingredient}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowAllIngredients(!showAllIngredients)}
              className="text-sm text-green-600 hover:text-green-700 font-medium"
            >
              {showAllIngredients ? '← Ver ingredientes populares' : `Ver todos os ingredientes (${allIngredients.length})`}
            </button>
          </div>
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

        {/* Results Count */}
        {(selectedIngredients.length > 0 || searchQuery) && (
          <div className="text-center mb-6">
            <p className="text-sm text-gray-600">
              {filteredRecipes.length} {filteredRecipes.length === 1 ? 'receita encontrada' : 'receitas encontradas'}
            </p>
          </div>
        )}

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