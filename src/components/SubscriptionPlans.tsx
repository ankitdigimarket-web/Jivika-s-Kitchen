import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Weekly Trial',
    duration: '6 Days',
    price: '₹650',
    description: 'Perfect for trying out our taste and quality.',
    features: [
      '1 Meal per day (Lunch or Dinner)',
      'Standard Veg Thali',
      'Free Delivery',
      'Cancel anytime',
    ],
    popular: false,
  },
  {
    name: 'Monthly Saver',
    duration: '26 Days',
    price: '₹2,600',
    description: 'Our most popular plan for working professionals.',
    features: [
      '1 Meal per day (Lunch or Dinner)',
      'Standard Veg Thali',
      'Free Delivery',
      'Pause up to 4 days',
      'Surprise dessert once a week',
    ],
    popular: true,
  },
  {
    name: 'Full Day Plan',
    duration: '26 Days',
    price: '₹4,800',
    description: 'Complete peace of mind. Both meals sorted.',
    features: [
      '2 Meals per day (Lunch & Dinner)',
      'Standard Veg Thali',
      'Free Delivery',
      'Pause up to 6 days',
      'Premium packaging',
    ],
    popular: false,
  },
];

export default function SubscriptionPlans() {
  return (
    <section id="subscriptions" className="py-24 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-400 font-bold tracking-wide uppercase text-sm mb-3">Meal Plans</h2>
          <h3 className="text-4xl font-display font-bold mb-6">
            Subscribe & Forget Cooking
          </h3>
          <p className="text-lg text-stone-400">
            Save time and money with our flexible subscription plans. Hot, fresh food delivered to your desk or door every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-stone-800 rounded-3xl p-8 border ${
                plan.popular ? 'border-brand-500 shadow-2xl shadow-brand-500/20' : 'border-stone-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
                <p className="text-stone-400 text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-display font-bold">{plan.price}</span>
                  <span className="text-stone-400">/ {plan.duration}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="text-brand-400 shrink-0 mt-0.5" size={20} />
                    <span className="text-stone-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/1234567890?text=I want to subscribe to the ${plan.name} plan`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-4 rounded-xl font-bold transition-colors ${
                  plan.popular
                    ? 'bg-brand-500 hover:bg-brand-600 text-white'
                    : 'bg-stone-700 hover:bg-stone-600 text-white'
                }`}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
        
        <p className="text-center text-stone-400 mt-12 text-sm">
          * Non-veg upgrades available at an additional cost. Contact us for custom plans.
        </p>
      </div>
    </section>
  );
}
