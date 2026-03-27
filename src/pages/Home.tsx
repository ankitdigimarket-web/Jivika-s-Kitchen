import Hero from '../components/Hero';
import TrustIndicators from '../components/TrustIndicators';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustIndicators />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
