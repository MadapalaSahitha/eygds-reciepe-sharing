import React from 'react';
import { Clock, Users, Heart } from 'lucide-react';
import type { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onLike: (id: string) => void;
}

export function RecipeCard({ recipe, onLike }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <button
            onClick={() => onLike(recipe.id)}
            className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
          >
            <Heart
              className={`w-5 h-5 ${
                recipe.likes > 0 ? 'text-red-500 fill-red-500' : 'text-gray-600'
              }`}
            />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={recipe.author.avatar}
            alt={recipe.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-medium text-gray-900">{recipe.author.name}</h3>
            <p className="text-sm text-gray-500">{recipe.createdAt}</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-2">{recipe.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>

        <div className="flex items-center gap-6 text-gray-500">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{recipe.cookingTime} mins</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span className="text-sm">{recipe.servings} servings</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4" />
            <span className="text-sm">{recipe.likes}</span>
          </div>
        </div>

        <div className="mt-4">
          <span className={`
            px-3 py-1 rounded-full text-sm
            ${recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : ''}
            ${recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' : ''}
            ${recipe.difficulty === 'Hard' ? 'bg-red-100 text-red-700' : ''}
          `}>
            {recipe.difficulty}
          </span>
        </div>
      </div>
    </div>
  );
}