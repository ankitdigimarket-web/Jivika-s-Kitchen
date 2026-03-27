import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import MenuHighlights from './components/MenuHighlights';
import WhyChooseUs from './components/WhyChooseUs';
import SubscriptionPlans from './components/SubscriptionPlans';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustIndicators />
        <MenuHighlights />
        <WhyChooseUs />
        <SubscriptionPlans />
        <HowItWorks />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
