import { useState } from 'react';
import { motion } from 'motion/react';

const menuItems = [
  {
    id: 1,
    name: 'Classic Veg Thali',
    description: 'Dal Tadka, Seasonal Sabzi, 4 Roti, Rice, Salad, Pickle',
    price: '₹120',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 2,
    name: 'Homestyle Chicken Curry',
    description: '2 pcs Chicken Curry, 4 Roti, Rice, Salad',
    price: '₹180',
    type: 'non-veg',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 3,
    name: 'Paneer Butter Masala Combo',
    description: 'Rich Paneer Gravy, 2 Parathas, Jeera Rice',
    price: '₹160',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: false,
  },
  {
    id: 4,
    name: 'Egg Curry Thali',
    description: '2 Eggs in homestyle gravy, 4 Roti, Rice, Salad',
    price: '₹140',
    type: 'non-veg',
    image: 'https://images.unsplash.com/photo-1614777986387-015c2a89b696?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: false,
  },
  {
    id: 5,
    name: 'Healthy Mini Meal',
    description: 'Dal, 2 Roti, Dry Sabzi (Perfect for light eaters)',
    price: '₹90',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 6,
    name: 'Rajma Chawal Bowl',
    description: 'Comforting Rajma served over steamed Basmati rice',
    price: '₹110',
    type: 'veg',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: false,
  },
];

export default function MenuHighlights() {
  const [filter, setFilter] = useState<'all' | 'veg' | 'non-veg'>('all');

  const filteredMenu = menuItems.filter(
    (item) => filter === 'all' || item.type === filter
  );

  return (
    <section id="menu" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-3">Our Menu</h2>
          <h3 className="text-4xl font-display font-bold text-stone-900 mb-6">
            Bestselling Dishes You'll Love
          </h3>
          <p className="text-lg text-stone-600">
            Freshly prepared every day using premium ingredients. No preservatives, no artificial colors—just pure love.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'veg', 'non-veg'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type as any)}
              className={`px-6 py-2 rounded-full font-medium capitalize transition-all ${
                filter === type
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenu.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-stone-100 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {item.popular && (
                    <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      Bestseller
                    </span>
                  )}
                  <span className="bg-white p-1.5 rounded-full shadow-sm">
                    <div className={`w-3 h-3 rounded-full ${item.type === 'veg' ? 'bg-green-500' : 'bg-red-500'}`} />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-stone-900">{item.name}</h4>
                  <span className="text-xl font-bold text-brand-600">{item.price}</span>
                </div>
                <p className="text-stone-500 text-sm mb-6 line-clamp-2">{item.description}</p>
                <a
                  href={`https://wa.me/1234567890?text=I want to order ${item.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-stone-100 hover:bg-brand-600 text-stone-900 hover:text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  Add to Order
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
