import HeroSection from '@/app/components/Herosection';
import Aboutus from '@/app/about/page';
import Products from '@/app/products/page';

export default function Home(){
  return (
    <main>
      <HeroSection />
      <Aboutus />
      <Products />
    </main>
  );
}
