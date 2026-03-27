import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center text-white font-display font-bold text-xl">
                JK
              </div>
              <span className="font-display font-bold text-2xl text-white tracking-tight">
                Jivika's <span className="text-brand-500">Kitchen</span>
              </span>
            </Link>
            <p className="text-stone-400 mb-6 max-w-md">
              Delivering hygienic, homely, and high-quality meals to your doorstep. Ghar jaisa khana, ab har roz.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/foodsjivika/" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/foodsjivika/" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-brand-400 transition-colors">Home</Link></li>
              <li><Link to="/menu" className="hover:text-brand-400 transition-colors">Menu</Link></li>
              <li><Link to="/subscriptions" className="hover:text-brand-400 transition-colors">Subscriptions</Link></li>
              <li><Link to="/why-us" className="hover:text-brand-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-brand-500 shrink-0" />
                <span>+91 797 215 5233</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-brand-500 shrink-0" />
                <span>foodsjivika@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-500 shrink-0" />
                <span>65 Wardha Road, Nagpur, India 440015</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Jivika's Kitchen. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
