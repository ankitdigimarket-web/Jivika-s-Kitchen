import { motion } from 'motion/react';
import { Smartphone, ChefHat, Truck } from 'lucide-react';

const steps = [
  {
    title: 'Choose Your Meal',
    description: 'Browse our daily menu or select a subscription plan that fits your needs.',
    icon: Smartphone,
  },
  {
    title: 'We Cook With Love',
    description: 'Our chefs prepare your food using fresh ingredients and homely recipes.',
    icon: ChefHat,
  },
  {
    title: 'Hot Delivery',
    description: 'Your meal arrives hot and fresh at your doorstep, right on time.',
    icon: Truck,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-3">Simple Process</h2>
          <h3 className="text-4xl font-display font-bold text-stone-900 mb-6">
            How It Works
          </h3>
          <p className="text-lg text-stone-600">
            Getting healthy, home-cooked food is now easier than ever. Just 3 simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-stone-200" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-stone-50 z-10 mb-6 text-brand-600">
                <step.icon size={40} strokeWidth={1.5} />
              </div>
              <div className="absolute top-0 right-0 w-8 h-8 bg-brand-500 text-white rounded-full flex items-center justify-center font-bold shadow-md transform translate-x-2 -translate-y-2">
                {idx + 1}
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-3">{step.title}</h4>
              <p className="text-stone-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
