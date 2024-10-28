import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Sprout } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const Header: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-semibold text-gray-900">
              Paradise Nursery
            </span>
          </Link>
          <nav className="flex items-center space-x-8">
            <Link
              to="/products"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Shop Plants
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-emerald-600 transition-colors" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};