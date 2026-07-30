import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

/* Seções above-the-fold: carregam imediatamente */
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";

/* Seções below-the-fold: lazy — só carregam quando o usuário rola */
const Benefits     = lazy(() => import("@/components/Benefits"));
const HowItWorks   = lazy(() => import("@/components/HowItWorks"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const UseCases     = lazy(() => import("@/components/UseCases"));
const FAQ          = lazy(() => import("@/components/FAQ"));
const BlogPreview  = lazy(() => import("@/components/BlogPreview"));
const Contact      = lazy(() => import("@/components/Contact"));
const Footer       = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-slate text-slate-200">
      <Header />
      <Hero />
      <PainPoints />
      <Services />
      <Suspense fallback={null}>
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <UseCases />
        <FAQ />
        <BlogPreview />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
