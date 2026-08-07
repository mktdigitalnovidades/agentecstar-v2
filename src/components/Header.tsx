
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // Tratamento 1: Voltar puramente para Home (Logo)
    if (sectionId === "hero" && location.pathname !== "/") {
      navigate("/");
      window.scrollTo(0, 0);
      return;
    }

    // Tratamento 2: Se estamos fora da Home e clicou numa subseção
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      // Timeout seguro para aguardar a montagem da Home e o Index.tsx rolar
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      // Rotina normal
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappLink = "https://wa.me/5519992288312?text=Olá! Vim do SITE e quero melhorar o atendimento da minha empresa.";

  return (
    <header className="fixed top-0 w-full z-50" style={{
      background: 'rgba(15,23,42,0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(62,206,208,0.15)',
      boxShadow: '0 4px 24px rgba(0,0,0,0.3)'
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="relative flex items-center group cursor-pointer" onClick={() => scrollToSection("hero")}>
            {/* Imagem do Ícone da Estrela */}
            <img 
              src="/agentecstar-icon.webp" 
              alt="AgentecStar – Automação com IA em Campinas" 
              width="48"
              height="48"
              loading="eager"
              className="h-10 sm:h-12 w-auto relative z-10 transition-transform duration-500 group-hover:rotate-12 drop-shadow-[0_0_12px_rgba(62,206,208,0.5)]" 
            />
            {/* Lettering Stylizado Neon */}
            <span className="ml-3 text-xl sm:text-2xl font-black tracking-tighter text-white drop-shadow-md">
              Agentec<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-fuchsia">Star</span>
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <Link 
            to="/quem-somos" 
            className="hover:text-brand-purple transition-all duration-300 hover:scale-105 font-medium text-slate-50 text-sm xl:text-base whitespace-nowrap"
          >
            Quem Somos
          </Link>
          <div className="relative group py-2">
            <button className="hover:text-brand-purple transition-all duration-300 hover:scale-105 font-medium text-slate-50 text-sm xl:text-base whitespace-nowrap flex items-center gap-1">
              Soluções
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-slate-900 border border-slate-800/80 rounded-xl py-2 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <Link to="/automacao-para-clinicas" className="block px-4 py-2.5 text-sm text-gray-300 hover:text-brand-cyan hover:bg-slate-800/60 transition-colors">
                Agendamento para Clínicas
              </Link>
              <Link to="/automacao-para-imobiliarias" className="block px-4 py-2.5 text-sm text-gray-300 hover:text-brand-cyan hover:bg-slate-800/60 transition-colors">
                Automação para Imobiliárias
              </Link>
              <Link to="/automacao-para-oficinas" className="block px-4 py-2.5 text-sm text-gray-300 hover:text-brand-cyan hover:bg-slate-800/60 transition-colors">
                Chatbot para Oficinas
              </Link>
            </div>
          </div>
          <button 
            onClick={() => scrollToSection("services")} 
            className="hover:text-brand-purple transition-all duration-300 hover:scale-105 font-medium text-slate-50 text-sm xl:text-base whitespace-nowrap"
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection("benefits")} 
            className="hover:text-brand-purple transition-all duration-300 hover:scale-105 font-medium text-slate-50 text-sm xl:text-base whitespace-nowrap"
          >
            Benefícios
          </button>
          <button 
            onClick={() => scrollToSection("how-it-works")} 
            className="hover:text-brand-purple transition-all duration-300 hover:scale-105 font-medium text-slate-50 text-sm xl:text-base whitespace-nowrap"
          >
            Como Funciona
          </button>
          <button 
            onClick={() => scrollToSection("testimonials")} 
            className="hover:text-brand-purple transition-all duration-300 hover:scale-105 font-medium text-slate-50 text-sm xl:text-base whitespace-nowrap"
          >
            Depoimentos
          </button>
          <button 
            onClick={() => scrollToSection("faq")} 
            className="hover:text-brand-purple transition-all duration-300 hover:scale-105 font-medium text-slate-50 text-sm xl:text-base whitespace-nowrap"
          >
            FAQ
          </button>
          <button 
            onClick={() => scrollToSection("blog")} 
            className="hover:text-brand-purple transition-all duration-300 hover:scale-105 font-medium text-slate-50 text-sm xl:text-base whitespace-nowrap"
          >
            Blog
          </button>
          <Link 
            to="/fale-conosco" 
            className="hover:text-brand-purple transition-all duration-300 hover:scale-105 font-medium text-slate-50 text-sm xl:text-base whitespace-nowrap"
          >
            Fale Conosco
          </Link>
          <Button 
            onClick={() => window.open(whatsappLink, '_blank')} 
            className="bg-gradient-to-r from-brand-navy to-brand-blue hover:from-brand-blue hover:to-brand-purple transition-all duration-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 text-sm xl:text-base px-4 xl:px-6"
          >
            Contato
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 rounded-lg bg-gradient-to-r from-brand-navy to-brand-blue text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-white/20 lg:hidden shadow-lg">
            <nav className="flex flex-col space-y-4 p-4 sm:p-6">
              <Link 
                to="/quem-somos" 
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-gray-700 hover:text-brand-purple transition-colors font-medium text-sm sm:text-base"
              >
                Quem Somos
              </Link>
              
              <div className="border-t border-gray-200 pt-2 flex flex-col space-y-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">Soluções</span>
                <Link to="/automacao-para-clinicas" onClick={() => setIsMenuOpen(false)} className="text-left text-gray-600 hover:text-brand-purple pl-3 font-medium text-sm">
                  • Clínicas e Consultórios
                </Link>
                <Link to="/automacao-para-imobiliarias" onClick={() => setIsMenuOpen(false)} className="text-left text-gray-600 hover:text-brand-purple pl-3 font-medium text-sm">
                  • Imobiliárias e Corretores
                </Link>
                <Link to="/automacao-para-oficinas" onClick={() => setIsMenuOpen(false)} className="text-left text-gray-600 hover:text-brand-purple pl-3 font-medium text-sm">
                  • Oficinas Mecânicas
                </Link>
              </div>
              <button 
                onClick={() => scrollToSection("services")} 
                className="text-left text-gray-700 hover:text-brand-purple transition-colors font-medium text-sm sm:text-base"
              >
                Serviços
              </button>

              <button 
                onClick={() => scrollToSection("benefits")} 
                className="text-left text-gray-700 hover:text-brand-purple transition-colors font-medium text-sm sm:text-base"
              >
                Benefícios
              </button>
              <button 
                onClick={() => scrollToSection("how-it-works")} 
                className="text-left text-gray-700 hover:text-brand-purple transition-colors font-medium text-sm sm:text-base"
              >
                Como Funciona
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")} 
                className="text-left text-gray-700 hover:text-brand-purple transition-colors font-medium text-sm sm:text-base"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection("faq")} 
                className="text-left text-gray-700 hover:text-brand-purple transition-colors font-medium text-sm sm:text-base"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection("blog")} 
                className="text-left text-gray-700 hover:text-brand-purple transition-colors font-medium text-sm sm:text-base"
              >
                Blog
              </button>
              <Link 
                to="/fale-conosco" 
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-gray-700 hover:text-brand-purple transition-colors font-medium text-sm sm:text-base"
              >
                Fale Conosco
              </Link>
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')} 
                className="bg-gradient-to-r from-brand-navy to-brand-blue hover:from-brand-blue hover:to-brand-purple transition-all duration-500 text-white w-full text-sm sm:text-base"
              >
                Contato
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
