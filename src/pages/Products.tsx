import React from 'react';
import { PlantCard } from '../components/PlantCard';
import { plants } from '../data/plants';

export const Products: React.FC = () => {
  const categories = Array.from(new Set(plants.map((plant) => plant.category)));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Plants</h1>
      
      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};