import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Software Engineer',
    content: "Being away from home, I missed my mom's cooking terribly. Jivika's Kitchen is a lifesaver. The food is exactly like ghar ka khana, not oily at all.",
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=11',
  },
  {
    name: 'Priya Patel',
    role: 'Student',
    content: "Affordable and delicious! I've tried many tiffin services, but this one is the best. The packaging is great and delivery is always on time.",
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: 'Amit Kumar',
    role: 'Bank Manager',
    content: "The monthly subscription is totally worth it. The menu changes daily so you never get bored. Highly recommend their Rajma Chawal!",
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=8',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-4xl font-display font-bold text-stone-900 mb-6">
            Hear From Our Happy Bellies
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 relative">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-stone-600 italic mb-8 relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-stone-900">{testimonial.name}</h4>
                  <p className="text-sm text-stone-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
