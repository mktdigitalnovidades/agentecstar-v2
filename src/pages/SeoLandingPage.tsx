import { useParams, Navigate } from "react-router-dom";
import { generateAllRoutes } from "@/utils/seo-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import UseCases from "@/components/UseCases";
import Contact from "@/components/Contact";
import { Bot, Sparkles } from "lucide-react";

const SeoLandingPage = () => {
  const { slug } = useParams();
  
  // Buscar se esse slug existe na nossa matrix SEO.
  const routeData = generateAllRoutes().find(r => r.slug === slug);

  if (!routeData) {
    // Se digitarem bobagem, manda pra home
    return <Navigate to="/" replace />;
  }

  // Schema SEO para Negócio Local (injeta dinamicamente o LocalBusiness)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AgentecStar Atendimento com IA",
    "description": routeData.title,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": routeData.city || "Campinas",
      "addressRegion": "SP",
      "addressCountry": "BR"
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-slate text-slate-200">
      <Header />
      
      {/* Hero Dedicado SEO H1 - Imitando a LP Chati9 */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center bg-gradient-to-br from-[#0B1121] via-brand-navy to-brand-blue overflow-hidden">
        {/* Background Grids e Blurs */}
        <div className="absolute inset-0">
           <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[100px]" />
           <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-brand-fuchsia/10 rounded-full blur-[100px]" />
           <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center space-x-2 mb-6 bg-white/5 backdrop-blur-md rounded-full px-5 py-2 border border-brand-cyan/20">
             <Sparkles className="h-4 w-4 text-brand-cyan animate-pulse" />
             <span className="text-brand-cyan text-sm font-semibold tracking-wider uppercase">
               Atendimento Inteligente 24/7
             </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 drop-shadow-lg mx-auto max-w-5xl">
            {routeData.keyword} <br className="hidden md:block"/>
            {routeData.city && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-fuchsia">
                em {routeData.city}
              </span>
            )}
          </h1>

          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Soluções completas de automação e integração de Agentes Inteligentes {routeData.city ? `para empresas de ${routeData.city} e região.` : 'para sua empresa escalar.'} Qualifique leads automaticamente e nunca perca vendas.
          </p>

          <div className="flex justify-center mt-6">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-cyan/10 hover:bg-brand-cyan/20 border border-brand-cyan text-brand-cyan px-8 py-4 rounded-full font-bold transition-all flex items-center gap-3 group"
            >
              <Bot className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Descubra os Benefícios
            </button>
          </div>
        </div>
      </section>

      {/* Renderização de todos os componentes com o mesmo design da Home! */}
      <Benefits />
      <Services />
      <UseCases />
      <HowItWorks />
      <Testimonials />
      <Contact />
      
      <Footer />
    </div>
  );
};

export default SeoLandingPage;
