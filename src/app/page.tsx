import UserSection from './_components/user-section';
import ProductSection from './_components/product-section';

export default function Home() {
  return (
    <main className="pt-[60px]">
      <UserSection />
      <ProductSection />
    </main>
  );
}
