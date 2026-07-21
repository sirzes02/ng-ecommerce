export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  category: string;
};

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'Immersive sound with noise cancellation.',
    price: 129.99,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    category: 'Electronics',
  },
  {
    id: '2',
    name: 'Classic Leather Jacket',
    description: 'Premium faux leather with timeless style.',
    price: 89.5,
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518',
    rating: 4.5,
    reviewCount: 68,
    inStock: true,
    category: 'Fashion',
  },
  {
    id: '3',
    name: 'Ergonomic Office Chair',
    description: 'Comfortable support for long work sessions.',
    price: 199,
    imageUrl: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254',
    rating: 4.7,
    reviewCount: 91,
    inStock: false,
    category: 'Home',
  },
  {
    id: '4',
    name: 'Smart Watch',
    description: 'Track your fitness and stay connected.',
    price: 159.99,
    imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
    rating: 4.6,
    reviewCount: 73,
    inStock: true,
    category: 'Electronics',
  },
  {
    id: '5',
    name: 'Ceramic Coffee Mug',
    description: 'Handcrafted mug for your daily coffee ritual.',
    price: 14.99,
    imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d',
    rating: 4.3,
    reviewCount: 42,
    inStock: true,
    category: 'Home',
  },
  {
    id: '6',
    name: 'Running Shoes',
    description: 'Lightweight cushioning for every stride.',
    price: 74.99,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    rating: 4.4,
    reviewCount: 55,
    inStock: true,
    category: 'Sports',
  },
  {
    id: '7',
    name: 'Portable Blender',
    description: 'Blend smoothies anywhere with ease.',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1576671081837-49000212a370',
    rating: 4.2,
    reviewCount: 37,
    inStock: true,
    category: 'Kitchen',
  },
  {
    id: '8',
    name: 'Scented Candle Set',
    description: 'Relaxing aromas for a cozy atmosphere.',
    price: 24.5,
    imageUrl: 'https://images.unsplash.com/photo-1603006905003-be475563bc59',
    rating: 4.9,
    reviewCount: 88,
    inStock: true,
    category: 'Home',
  },
  {
    id: '9',
    name: 'Minimalist Backpack',
    description: 'Functional design for everyday carry.',
    price: 59.99,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    rating: 4.5,
    reviewCount: 47,
    inStock: true,
    category: 'Fashion',
  },
  {
    id: '10',
    name: '4K Monitor',
    description: 'Crisp display for work and entertainment.',
    price: 299.99,
    imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
    rating: 4.8,
    reviewCount: 112,
    inStock: true,
    category: 'Electronics',
  },
];
