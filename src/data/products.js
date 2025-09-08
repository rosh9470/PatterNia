// Product data structure for PatternNia cases
// Replace placeholder images with actual product photos

export const products = [
  {
    id: 1,
    name: "Floral Elegance Laptop Case",
    category: "laptop",
    size: "13-14 inch",
    price: 14000,
    description: "A beautiful handmade laptop case featuring delicate floral embroidery on premium canvas.",
    image: "/images/laptop-case-1.jpg", // Replace with actual image
    features: ["Water-resistant lining", "Soft padding", "Magnetic closure", "Interior pocket"],
    inStock: true
  },
  {
    id: 2,
    name: "Geometric Pattern iPad Case",
    category: "ipad",
    size: "iPad Pro 11\"",
    price: 11000,
    description: "Modern geometric design with hand-stitched details, perfect for the creative professional.",
    image: "/images/ipad-case-1.jpg", // Replace with actual image
    features: ["Stand functionality", "Soft microfiber interior", "Elastic band closure", "Pencil holder"],
    inStock: true
  },
  {
    id: 3,
    name: "Vintage Leather Laptop Sleeve",
    category: "laptop",
    size: "15-16 inch",
    price: 18000,
    description: "Handcrafted from genuine leather with vintage-inspired design and brass hardware.",
    image: "/images/laptop-case-2.jpg", // Replace with actual image
    features: ["Genuine leather", "Brass buckle", "Felt lining", "Document pocket"],
    inStock: true
  },
  {
    id: 4,
    name: "Botanical iPad Mini Case",
    category: "ipad",
    size: "iPad Mini",
    price: 8500,
    description: "Charming botanical print with hand-embroidered leaf details on organic cotton.",
    image: "/images/ipad-case-2.jpg", // Replace with actual image
    features: ["Organic cotton", "Embroidered details", "Zipper closure", "Lightweight design"],
    inStock: false
  },
  {
    id: 5,
    name: "Minimalist Canvas Laptop Case",
    category: "laptop",
    size: "13 inch",
    price: 12000,
    description: "Clean, minimalist design in natural canvas with leather trim for the modern professional.",
    image: "/images/laptop-case-3.jpg", // Replace with actual image
    features: ["Natural canvas", "Leather trim", "Velcro closure", "Ultra-slim profile"],
    inStock: true
  },
  {
    id: 6,
    name: "Artisan iPad Pro Case",
    category: "ipad",
    size: "iPad Pro 12.9\"",
    price: 13000,
    description: "Hand-painted design with protective padding, combining art with functionality.",
    image: "/images/ipad-case-3.jpg", // Replace with actual image
    features: ["Hand-painted design", "Protective padding", "Magnetic closure", "Multi-angle stand"],
    inStock: true
  }
];

// Categories for filtering
export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'laptop', name: 'Laptop Cases' },
  { id: 'ipad', name: 'iPad Cases' }
];

// Size options
export const sizes = [
  '13 inch',
  '13-14 inch',
  '15-16 inch',
  'iPad Mini',
  'iPad Pro 11"',
  'iPad Pro 12.9"'
];

export default products;
