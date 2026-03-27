import { motion } from 'motion/react';
import { ArrowRight, Utensils } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-20">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-brand-300 blur-3xl" />
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-yellow-200 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-700 font-medium text-sm mb-6">
              <Utensils size={16} />
              <span>100% Hygienic & Home-Cooked</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold text-stone-900 leading-[1.1] tracking-tight mb-6 text-balance">
              Craving <span className="text-brand-600">Ghar Jaisa Khana?</span><br />
              We Deliver It Hot & Fresh.
            </h1>
            
            <p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-lg">
              Missing mom's cooking? No time to cook? Jivika's Kitchen brings you hygienic, homely, and affordable meals straight to your door.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#menu"
                className="inline-flex justify-center items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-brand-500/30 hover:shadow-xl hover:-translate-y-1"
              >
                View Menu
                <ArrowRight size={20} />
              </a>
              <a
                href="https://wa.me/7972155233"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-white border-2 border-stone-200 hover:border-brand-600 text-stone-800 hover:text-brand-600 px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                Order via WhatsApp
              </a>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-sm text-stone-500 font-medium">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Customer"
                  />
                ))}
              </div>
              <p>Loved by 500+ happy customers</p>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              {/* Main Image */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-white shadow-2xl z-10">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Delicious home cooked meal bowl"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Badge 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  🥬
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">Quality</p>
                  <p className="font-bold text-stone-900">Fresh Ingredients</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute bottom-10 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-2xl">
                  ⏱️
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">Delivery</p>
                  <p className="font-bold text-stone-900">Always on Time</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
