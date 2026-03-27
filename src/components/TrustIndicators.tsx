import { ShieldCheck, Leaf, Clock, HeartHandshake } from 'lucide-react';

const features = [
  {
    name: '100% Hygienic',
    description: 'Prepared in a spotless, sanitized kitchen environment.',
    icon: ShieldCheck,
  },
  {
    name: 'Fresh Ingredients',
    description: 'Locally sourced, fresh vegetables and premium spices.',
    icon: Leaf,
  },
  {
    name: 'Reliable Delivery',
    description: 'Hot food delivered right on your scheduled time.',
    icon: Clock,
  },
  {
    name: 'Ghar Ka Swaad',
    description: 'Authentic recipes that taste just like home.',
    icon: HeartHandshake,
  },
];

export default function TrustIndicators() {
  return (
    <section className="py-12 bg-white border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-4">
                <feature.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">{feature.name}</h3>
              <p className="text-sm text-stone-500 leading-relaxed max-w-[200px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
