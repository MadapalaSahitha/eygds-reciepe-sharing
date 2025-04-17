import React, { useState } from 'react';
import { ChefHat } from 'lucide-react';
import { RecipeCard } from './components/RecipeCard';
import { SearchBar } from './components/SearchBar';
import type { Recipe } from './types';

const MOCK_RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Homemade Margherita Pizza',
    description: 'Classic Italian pizza with fresh basil, mozzarella, and tomato sauce on a crispy homemade crust.',
    imageUrl: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=800&q=80',
    cookingTime: 45,
    servings: 4,
    difficulty: 'Medium',
    ingredients: ['Pizza dough', 'Tomatoes', 'Fresh mozzarella', 'Basil', 'Olive oil'],
    instructions: ['Prepare the dough', 'Make the sauce', 'Add toppings', 'Bake at 450°F'],
    author: {
      name: 'Maria Garcia',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80'
    },
    createdAt: 'March 15, 2024',
    likes: 124
  },
  {
    id: '2',
    title: 'Grilled Salmon with Asparagus',
    description: 'Perfectly grilled salmon fillet with roasted asparagus and lemon butter sauce.',
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    cookingTime: 30,
    servings: 2,
    difficulty: 'Easy',
    ingredients: ['Salmon fillet', 'Asparagus', 'Lemon', 'Butter', 'Herbs'],
    instructions: ['Marinate salmon', 'Prepare asparagus', 'Grill', 'Make sauce'],
    author: {
      name: 'John Smith',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80'
    },
    createdAt: 'March 14, 2024',
    likes: 89
  }
];

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>(MOCK_RECIPES);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLike = (id: string) => {
    setRecipes(recipes.map(recipe =>
      recipe.id === id
        ? { ...recipe, likes: recipe.likes + 1 }
        : recipe
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ChefHat className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">RecipeShare</h1>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Share Recipe
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center mb-12">
          <SearchBar onSearch={setSearchQuery} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onLike={handleLike}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;