import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="pt-32 pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-brand-100 rounded-3xl transform -rotate-3 scale-105 -z-10" />
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Cooking fresh food"
              className="rounded-3xl shadow-xl object-cover h-[600px] w-full"
              referrerPolicy="no-referrer"
            />
            
            {/* Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 max-w-xs hidden md:block">
              <p className="text-4xl font-display font-bold text-brand-600 mb-1">10k+</p>
              <p className="text-stone-600 font-medium">Meals delivered with love across the city.</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-3">Why Choose Us</h2>
            <h3 className="text-4xl font-display font-bold text-stone-900 mb-6 text-balance">
              Ghar ka swaad, bahar ka nahi.
            </h3>
            <p className="text-lg text-stone-600 mb-8">
              We understand the struggle of finding good, healthy food when you're away from home or too busy to cook. That's why we prepare every meal exactly how it's done at home.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: 'Zero Preservatives & Additives',
                  desc: 'We use pure spices and fresh ingredients. No artificial colors or taste enhancers.',
                },
                {
                  title: 'Pocket-Friendly Pricing',
                  desc: 'Daily meals shouldn\'t break the bank. Our thalis start at just ₹90.',
                },
                {
                  title: 'Daily Changing Menu',
                  desc: 'Never get bored! We rotate our sabzis and dals every day so you always have something new.',
                },
                {
                  title: 'Spill-Proof Packaging',
                  desc: 'Food arrives hot and intact in high-quality, food-grade containers.',
                },
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-brand-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-stone-900">{feature.title}</h4>
                    <p className="text-stone-600 mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
