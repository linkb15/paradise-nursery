export interface Plant {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface CartItem {
  plant: Plant;
  quantity: number;
}