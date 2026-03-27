
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import UseCases from "@/components/UseCases";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-slate text-slate-200">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <UseCases />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
