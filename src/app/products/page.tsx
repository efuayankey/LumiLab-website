import Navbar from '@/components/layout/Navbar';
import ProductRecs from '@/components/sections/ProductRecs';

export default function ProductsPage() {
  return (
    <main>
      <Navbar />
      <ProductRecs mode="demo" />
    </main>
  );
}