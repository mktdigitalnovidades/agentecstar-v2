
import { MessageCircle, Sparkles } from "lucide-react";

const WhatsAppButton = () => {
  const openAIWidget = () => {
    // Trigger the AI widget to open
    if (window.GPTMaker && window.GPTMaker.open) {
      window.GPTMaker.open();
    } else {
      // Fallback to WhatsApp if widget is not available
      const whatsappLink = "https://wa.me/5519992288312?text=Olá! Vim do SITE e quero melhorar o atendimento da minha empresa.";
      window.open(whatsappLink, '_blank');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* AI Agent Button */}
      <div className="group relative">
        <button 
          onClick={openAIWidget} 
          className="relative bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-accent text-white rounded-full p-3 sm:p-4 shadow-2xl hover:shadow-brand-blue/25 transition-all duration-300 hover:scale-110" 
          aria-label="Conversar com nossa IA"
        >
          {/* AI Icon */}
          <div className="relative h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 group-hover:scale-110 transition-transform">
            <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/40 to-brand-purple/40 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity"></div>
          
          {/* Sparkle Effect */}
          <Sparkles className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 h-3 w-3 sm:h-4 sm:w-4 text-yellow-300 animate-pulse" />
        </button>
        
        {/* Tooltip for AI Agent */}
        <div className="absolute bottom-16 sm:bottom-20 right-0 bg-gray-900/90 backdrop-blur-sm text-white text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl border border-white/10 transform translate-y-2 group-hover:translate-y-0 max-w-[200px] sm:max-w-none">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
            <span className="font-medium">Conversar com nossa IA</span>
          </div>
          {/* Arrow */}
          <div className="absolute top-full right-4 sm:right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
