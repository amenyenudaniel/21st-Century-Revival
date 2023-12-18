import About from "@/components/About";
import Accordion from "@/components/Accordion";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <section>
      <Navbar />
      <Hero />
      <Accordion />
      <About />
      <Footer />
    </section>
  );
}
