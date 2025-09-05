import { Footer } from '@/components/footer';
import { Hero } from '@/features/hero';
import { Process } from '@/features/process';
import { Services } from '@/features/services';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Footer />
    </main>
  );
}
