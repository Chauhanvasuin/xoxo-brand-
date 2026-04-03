export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  tag?: string;
  description: string;
  stock: number;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'XOXO NEON HOODIE',
    price: 129,
    originalPrice: 189,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
    category: 'Outerwear',
    tag: 'LIMITED DROP',
    description: 'Premium heavyweight cotton with reflective neon embroidery. Designed for the bold.',
    stock: 5
  },
  {
    id: '2',
    name: 'CYBERPUNK CARGO V2',
    price: 159,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
    category: 'Bottoms',
    tag: 'BEST SELLER',
    description: 'Multi-pocket technical cargo pants with adjustable straps and water-resistant finish.',
    stock: 12
  },
  {
    id: '3',
    name: 'AURA OVERSIZED TEE',
    price: 69,
    originalPrice: 89,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800',
    category: 'Tops',
    tag: 'NEW ARRIVAL',
    description: 'Ultra-soft drop shoulder tee with signature XOXO holographic print.',
    stock: 8
  },
  {
    id: '4',
    name: 'PHANTOM SNEAKERS',
    price: 249,
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800',
    category: 'Footwear',
    tag: 'EXCLUSIVE',
    description: 'Futuristic silhouette with reactive cushioning and glow-in-the-dark accents.',
    stock: 3
  }
];
