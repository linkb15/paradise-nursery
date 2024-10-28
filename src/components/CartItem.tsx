import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../store/cartSlice';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ id: item.plant.id, quantity: newQuantity }));
  };

  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <img
        src={item.plant.image}
        alt={item.plant.name}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{item.plant.name}</h3>
        <p className="text-sm text-gray-600">${item.plant.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="p-1 rounded hover:bg-gray-100"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="p-1 rounded hover:bg-gray-100"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <p className="w-24 text-right font-semibold">
        ${(item.plant.price * item.quantity).toFixed(2)}
      </p>
      <button
        onClick={() => dispatch(removeFromCart(item.plant.id))}
        className="p-2 text-red-600 hover:bg-red-50 rounded"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
};