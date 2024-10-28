import React from 'react';
import { Plant } from '../types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { Plus } from 'lucide-react';

interface PlantCardProps {
  plant: Plant;
}

export const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="h-48 overflow-hidden">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{plant.name}</h3>
          <span className="text-emerald-600 font-semibold">
            ${plant.price.toFixed(2)}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{plant.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
            {plant.category}
          </span>
          <button
            onClick={() => dispatch(addToCart(plant))}
            className="flex items-center space-x-1 bg-emerald-600 text-white px-3 py-1 rounded hover:bg-emerald-700 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};