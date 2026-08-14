import { Footer } from "@/components/site/footer";
import { Gallery } from "@/components/site/gallery";
import { Navbar } from "@/components/site/navbar";

export default function GalleryPage() {
  return (
    <main>
      <Navbar />
      <Gallery full />
      <Footer />
    </main>
  );
}
