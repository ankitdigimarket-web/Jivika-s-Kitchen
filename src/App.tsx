import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import WhyUs from './pages/WhyUs';
import Subscriptions from './pages/Subscriptions';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
