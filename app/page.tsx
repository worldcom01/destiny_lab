import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Roadmap from "@/components/Roadmap";
import PreRegister from "@/components/PreRegister";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Roadmap />
        <PreRegister />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
