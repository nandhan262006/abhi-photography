import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";
import { Gallery } from "@/components/site/gallery";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { Services } from "@/components/site/services";
import { Testimonials } from "@/components/site/testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Testimonials />
      <FinalCta />
      <Contact />
      <Footer />
    </main>
  );
}
