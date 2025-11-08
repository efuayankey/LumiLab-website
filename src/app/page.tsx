import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import StepOne from '@/components/sections/StepOne';
import Shop from '@/components/sections/Shop';
import About from '@/components/sections/About';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import RiskProfile from '@/components/sections/RiskProfile';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <StepOne />
      <RiskProfile mode="demo" data={{
        wrinkle: { score: 0.56, tags: ["Peptides", "Retinol"] },
        irritation: { score: 0.82, tags: ["Gentle", "Fragrance-free"] },
        hyperpigmentation: { score: 0.24, tags: ["Vitamin C", "Niacinamide"] }
      }} />
      <Shop />
      <FAQ />
      <Contact />
    </main>
  );
}
