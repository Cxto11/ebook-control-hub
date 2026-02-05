import { useEffect } from "react";
import Hero from "@/components/landing/Hero";
import PainPoints from "@/components/landing/PainPoints";
import WhatYouGet from "@/components/landing/WhatYouGet";
import Bonuses from "@/components/landing/Bonuses";
import FreeSample from "@/components/landing/FreeSample";
import Testimonials from "@/components/landing/Testimonials";
import Offer from "@/components/landing/Offer";
import Guarantee from "@/components/landing/Guarantee";
import Delivery from "@/components/landing/Delivery";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import useScrollReveal from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  useEffect(() => {
    // Update page title and meta for SEO
    document.title = "ControleFácil – O Guia Definitivo do Microempreendedor";
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <PainPoints />
      <WhatYouGet />
      <Bonuses />
      <FreeSample />
      <Testimonials />
      <Offer />
      <Guarantee />
      <Delivery />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
