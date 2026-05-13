// Design Philosophy: Modern Minimalist Industrial
// Color Palette: Teal (#0891b2), Deep Charcoal (#1a1a1a), White (#ffffff), Warm Gray (#6b7280)

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image?: string;
}

// All 28 categories with real images from the original site
export const categories: Category[] = [
  {
    id: 'all-type-commercial',
    name: 'All Type of Commercial Racks',
    description: 'Versatile commercial storage solutions for diverse retail and warehouse needs',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/all-type-4-768x1024.png',
    slug: 'all-type-of-commercial-racks'
  },
  {
    id: 'book-rack',
    name: 'Book Rack',
    description: 'Specialized racks for library and bookstore storage',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/book-rack.png',
    slug: 'book-rack'
  },
  {
    id: 'corner-rack',
    name: 'Corner Rack',
    description: 'Efficient corner storage solutions for compact spaces',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/corner-rack.png',
    slug: 'corner-rack'
  },
  {
    id: 'electronics-shop',
    name: 'Electronics Shop Rack',
    description: 'Display racks designed for electronics retail',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/electronics-rack.png',
    slug: 'electronics-shop-rack'
  },
  {
    id: 'fancy-store',
    name: 'Fancy Store Rack',
    description: 'Premium racks for upscale retail environments',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/fancy-store-rack.png',
    slug: 'fancy-store-rack'
  },
  {
    id: 'fruits-vegetables',
    name: 'Fruits and Vegetable Rack',
    description: 'Fresh produce display racks for grocery and farmers markets',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/vegetable-rack-3-768x1024.png',
    slug: 'fruits-and-vegetable-rack'
  },
  {
    id: 'glass-frame',
    name: 'Glass Frame Type Rack',
    description: 'Elegant glass-framed racks for premium displays',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/glass-frame-rack.png',
    slug: 'glass-frame-type-rack'
  },
  {
    id: 'heavy-duty',
    name: 'Heavy Duty Rack',
    description: 'Industrial-strength racks for maximum load capacity',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/heavy-duty-rack.png',
    slug: 'heavy-duty-rack'
  },
  {
    id: 'hook-rack',
    name: 'Hook Rack',
    description: 'Specialized racks with hooks for hanging items',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/hook-rack.png',
    slug: 'hook-rack'
  },
  {
    id: 'hyper-market',
    name: 'Hyper Market Rack',
    description: 'Heavy-duty racks designed for high-capacity retail environments',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/16-768x1024.png',
    slug: 'hyper-market-rack'
  },
  {
    id: 'innovative',
    name: 'Innovative Rack',
    description: 'Modern innovative storage solutions with unique designs',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/innovative-rack.png',
    slug: 'innovative-rack'
  },
  {
    id: 'masala-bin',
    name: 'Masala Bin Rack',
    description: 'Specialized racks for spice and masala storage',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/masala-bin-rack.png',
    slug: 'masala-bin-rack'
  },
  {
    id: 'medical-shop',
    name: 'Medical Shop Rack',
    description: 'Specialized racks for pharmacy and medical retail',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/medical-shop-rack.png',
    slug: 'medical-shop-rack'
  },
  {
    id: 'metal-mart',
    name: 'Metal Mart Rack',
    description: 'Durable metal shelving for industrial and retail storage',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/metal-6-768x1024.png',
    slug: 'metal-mart-rack'
  },
  {
    id: 'most-relevant',
    name: 'Most Relevant Racks',
    description: 'Our most popular and highly-rated storage solutions',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/Most-relevant-racks-6-600x800.png',
    slug: 'most-relevant-racks'
  },
  {
    id: 'shoe-rack',
    name: 'Shoe Rack',
    description: 'Specialized racks for footwear retail and organization',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/shoerack-3-768x1024.png',
    slug: 'shoe-rack'
  },
  {
    id: 'slotted-angle',
    name: 'Slotted Angle Rack',
    description: 'Flexible slotted angle racks for customizable storage',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/slotted-angle-rack.png',
    slug: 'slotted-angle-rack'
  },
  {
    id: 'snacks-rack',
    name: 'Snacks Rack',
    description: 'Display racks optimized for snack and confectionery products',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/snacks-rack.png',
    slug: 'snacks-rack'
  },
  {
    id: 'sports-rack',
    name: 'Sports Rack',
    description: 'Specialized racks for sports equipment and apparel',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/sports-rack.png',
    slug: 'sports-rack'
  },
  {
    id: 'stall-bin',
    name: 'Stall Bin',
    description: 'Compact stall bins for retail and market displays',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/stall-bin.png',
    slug: 'stall-bin'
  },
  {
    id: 'stationary',
    name: 'Stationary Racks',
    description: 'Organized storage for office supplies and stationery items',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/stationary-2-768x1024.png',
    slug: 'stationary-racks'
  },
  {
    id: 'super-market-accessories',
    name: 'Super Market Accessories',
    description: 'Complementary accessories for supermarket displays',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/super-market-accessories.png',
    slug: 'super-market-accessories'
  },
  {
    id: 'super-market',
    name: 'Super Market Rack',
    description: 'High-capacity display racks for supermarket environments',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/supermarket-6-768x1024.png',
    slug: 'super-market-rack'
  },
  {
    id: 'textile',
    name: 'Textile Garments Rack',
    description: 'Specialized racks for clothing and textile retail displays',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/textile-rack-1-768x1024.png',
    slug: 'textile-garments-rack'
  },
  {
    id: 'top-hanger',
    name: 'Top Hanger Rack',
    description: 'Premium hanging racks for apparel and textiles',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/top-hanger-rack.png',
    slug: 'top-hanger-rack'
  },
  {
    id: 'tv-ac-display',
    name: 'TV and AC Display Rack',
    description: 'Specialized display racks for electronics and appliances',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/tv-ac-display-rack.png',
    slug: 'tv-and-ac-display-rack'
  },
  {
    id: 'wall-glass-frame',
    name: 'Wall Glass Frame Type Rack',
    description: 'Wall-mounted glass frame racks for premium displays',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/wall-glass-frame-rack.png',
    slug: 'wall-glass-frame-type-rack'
  }
];

// Featured products with real images from the original site
export const featuredProducts: Product[] = [
  {
    id: 'product-1',
    name: 'Premium Hyper Market Rack',
    category: 'hyper-market',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/Most-relevant-racks-6-600x800.png',
    description: 'Heavy-duty commercial rack system for large-scale retail operations',
    features: ['Load capacity: 500kg per shelf', 'Adjustable shelving', 'Powder-coated finish', 'Easy assembly']
  },
  {
    id: 'product-2',
    name: 'Industrial Metal Mart Rack',
    category: 'metal-mart',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/Most-relevant-racks-15-600x800.png',
    description: 'Robust metal storage solution for industrial warehouses',
    features: ['Heavy-duty construction', 'Modular design', 'Corrosion-resistant', 'Customizable dimensions']
  },
  {
    id: 'product-3',
    name: 'Textile Display Rack',
    category: 'textile',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/Most-relevant-racks-14-600x800.png',
    description: 'Elegant rack system for clothing and textile retail',
    features: ['Hanging rod system', 'Adjustable height', 'Modern design', 'Space-efficient']
  },
  {
    id: 'product-4',
    name: 'Commercial Storage Rack',
    category: 'all-type-commercial',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/Most-relevant-racks-4-600x800.png',
    description: 'Versatile commercial storage for various retail applications',
    features: ['Multi-tier shelving', 'Durable steel frame', 'Easy maintenance', 'Professional finish']
  },
  {
    id: 'product-5',
    name: 'Super Market Display Rack',
    category: 'super-market',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/Most-relevant-racks-12-600x800.png',
    description: 'Eye-catching display rack for supermarket product presentation',
    features: ['High visibility design', 'Adjustable shelves', 'Easy product access', 'Attractive finish']
  },
  {
    id: 'product-6',
    name: 'Stationary Storage Rack',
    category: 'stationary',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/Most-relevant-racks-13-600x800.png',
    description: 'Organized storage solution for office and stationery supplies',
    features: ['Compact design', 'Multiple compartments', 'Easy organization', 'Professional look']
  }
];

// Key features and benefits
export const features: Feature[] = [
  {
    icon: '✓',
    title: 'Custom Storage Solutions',
    description: 'Tailored for every need and requirement'
  },
  {
    icon: '◆',
    title: 'Durable Design Quality',
    description: 'Built to last forever with premium materials'
  },
  {
    icon: '⬆',
    title: 'Innovative Space Savers',
    description: 'Maximizing available space efficiently'
  },
  {
    icon: '◈',
    title: 'Stylish Organizational Options',
    description: 'Enhancing your decor and workspace'
  }
];

// Customer testimonials
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Retail Store Manager',
    role: 'Supermarket Chain',
    content: 'VJ Racks delivers top-notch, customizable storage solutions with unmatched quality, durability, efficiency, and reliability.'
  },
  {
    id: 'testimonial-2',
    name: 'Warehouse Director',
    role: 'Distribution Center',
    content: 'VJ Racks offers innovative, high-quality storage solutions that combine functionality, style, and long-lasting durability.'
  },
  {
    id: 'testimonial-3',
    name: 'Fashion Retailer',
    role: 'Clothing Boutique',
    content: 'VJ Racks delivers innovative storage solutions that are crafted with precision, offering both durability and style.'
  },
  {
    id: 'testimonial-4',
    name: 'Logistics Manager',
    role: 'Supply Chain Company',
    content: 'VJ Racks delivers high-quality, versatile storage solutions that enhance both functionality and design.'
  }
];

// Hero slides
export const heroSlides = [
  {
    id: 'slide-1',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/hero-storage-solution.png',
    title: 'Smart Storage Solutions',
    description: 'Intelligent storage solutions for modern warehouses',
    cta: 'Explore Products'
  },
  {
    id: 'slide-2',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/hero-retail-display.png',
    title: 'Retail Display Excellence',
    description: 'Professional display racks for retail environments',
    cta: 'Shop Now'
  },
  {
    id: 'slide-3',
    image: 'https://vjrack.com/wp-content/uploads/2025/02/hero-warehouse-efficiency.png',
    title: 'Maximize Your Space',
    description: 'Efficient warehouse storage solutions',
    cta: 'Get Started'
  }
];

// Videos
export const videos = [
  {
    id: 'video-1',
    title: 'Textile Racks',
    thumbnail: 'https://vjrack.com/wp-content/uploads/2025/02/1.mp4',
    url: 'https://vjrack.com/wp-content/uploads/2025/02/1.mp4'
  },
  {
    id: 'video-2',
    title: '4 October 2024',
    thumbnail: 'https://vjrack.com/wp-content/uploads/2025/02/2.mp4',
    url: 'https://vjrack.com/wp-content/uploads/2025/02/2.mp4'
  },
  {
    id: 'video-3',
    title: '4 October 2024',
    thumbnail: 'https://vjrack.com/wp-content/uploads/2025/02/3.mp4',
    url: 'https://vjrack.com/wp-content/uploads/2025/02/3.mp4'
  },
  {
    id: 'video-4',
    title: 'VJ Rack Installation',
    thumbnail: 'https://vjrack.com/wp-content/uploads/2025/02/4.mp4',
    url: 'https://vjrack.com/wp-content/uploads/2025/02/4.mp4'
  }
];

// Company information
export const companyInfo = {
  name: 'VJ Rack',
  tagline: 'Leading Rack Manufacturer in Tamil Nadu',
  description: 'At VJ Rack, we specialize in manufacturing high-quality storage and display racks designed for supermarkets, textile showrooms, retail outlets, and more. Our racks combine durability, smart design, and functionality to help businesses organize their products efficiently while enhancing visual appeal.',
  owner: 'Rudd Gullet Charles. L',
  ownerTitle: 'Owner of VJ Racks',
  mission: 'VJ Racks specializes in providing innovative and customizable storage solutions designed to meet the needs of modern spaces. With a commitment to quality and functionality, we craft racks that combine durability with style.',
  address: 'NO 4/3, Chaina Complex, Madurai Veeram Nagar - Near MIET Gundur, Ayyarpattti, Tichy - 6200017',
  phone: '+91 97878 71052',
  email: 'sales@vjrack.com'
};
