import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="order" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-600 opacity-[0.03] pattern-dots" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-brand-600 rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl shadow-brand-500/30 overflow-hidden relative">
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-500 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-yellow-500 rounded-full blur-3xl opacity-30" />
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-balance relative z-10">
            Hungry? Let's Fix That.
          </h2>
          <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto relative z-10">
            Order your hot, home-cooked meal now. Limited slots available for today's fresh batch!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <a
              href="https://wa.me/7972155233?text=Hi, I would like to place an order."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-brand-600 hover:bg-stone-50 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 group"
            >
              Order on WhatsApp
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+917972155233"
              className="w-full sm:w-auto bg-transparent border-2 border-brand-400 hover:border-white text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center"
            >
              Call Us
            </a>
          </div>
          
          <p className="mt-8 text-sm text-brand-200 font-medium relative z-10">
            Delivery available in select areas. Minimum order ₹150.
          </p>
        </div>
      </div>
    </section>
  );
}
