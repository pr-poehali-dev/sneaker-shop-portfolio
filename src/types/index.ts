export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  images: string[];
  sizes: number[];
  category: string;
  description: string;
  isNew?: boolean;
  isSale?: boolean;
}

export interface CartItem {
  product: Product;
  selectedSize: number;
  quantity: number;
}

export interface FilterState {
  brands: string[];
  sizes: number[];
  priceRange: [number, number];
  category: string;
}
