import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Air Max 90",
    brand: "Nike",
    price: 9990,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    category: "lifestyle",
    description:
      "Классические кроссовки Nike Air Max 90 с культовым дизайном и технологией Air для комфорта.",
    isNew: true,
  },
  {
    id: "2",
    name: "UltraBoost 22",
    brand: "Adidas",
    price: 12990,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    category: "running",
    description:
      "Беговые кроссовки с революционной технологией Boost для максимального возврата энергии.",
  },
  {
    id: "3",
    name: "Chuck Taylor All Star",
    brand: "Converse",
    price: 4990,
    originalPrice: 6990,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43],
    category: "lifestyle",
    description:
      "Легендарные кеды Converse Chuck Taylor All Star - символ стиля и индивидуальности.",
    isSale: true,
  },
  {
    id: "4",
    name: "Air Jordan 1",
    brand: "Jordan",
    price: 15990,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    category: "basketball",
    description:
      "Культовые баскетбольные кроссовки Air Jordan 1 - легенда, которая изменила мир спорта.",
    isNew: true,
  },
  {
    id: "5",
    name: "Classic Leather",
    brand: "Reebok",
    price: 6990,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    category: "lifestyle",
    description:
      "Классические кожаные кроссовки Reebok Classic Leather - стиль, проверенный временем.",
  },
  {
    id: "6",
    name: "Old Skool",
    brand: "Vans",
    price: 5990,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    category: "lifestyle",
    description:
      "Классические скейтерские кроссовки Vans Old Skool с культовой боковой полосой.",
  },
];

export const brands = [
  "Nike",
  "Adidas",
  "Converse",
  "Jordan",
  "Reebok",
  "Vans",
];
export const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
export const categories = [
  { id: "all", name: "Все категории" },
  { id: "lifestyle", name: "Лайфстайл" },
  { id: "running", name: "Беговые" },
  { id: "basketball", name: "Баскетбольные" },
];
