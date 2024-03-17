import About from "@/components/Sections/About";
import Faq from "@/components/Sections/Faq";
import Hero from "@/components/Sections/Hero";
import Portfolio from "@/components/Sections/Portfolio";
import Services from "@/components/Sections/Services";
import Testimonials from "@/components/Sections/Testimonials";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#070708]">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Faq />
      <Testimonials />
      <Footer />
    </div>
  );
}
