
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: "smooth"
    });
    setIsMenuOpen(false);
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
              src="/agentecstar-icon.png" 
              alt="AgentecStar Icon" 
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
