
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="py-12 bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative flex items-center group cursor-pointer" onClick={() => { window.scrollTo({top: 0, behavior: 'smooth'}); navigate('/'); }}>
                <img 
                  src="/agentecstar-icon.png" 
                  alt="AgentecStar Icon" 
                  className="h-10 w-auto relative z-10 transition-transform duration-500 group-hover:rotate-12 drop-shadow-[0_0_12px_rgba(62,206,208,0.5)]" 
                />
                <span className="ml-3 text-2xl font-black tracking-tighter text-white drop-shadow-md">
                  Agentec<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-fuchsia">Star</span>
                </span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Automação com IA e agentes inteligentes para empresas em Campinas-SP e toda a Grande São Paulo.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Agentes de IA</li>
              <li>Automação de Atendimento</li>
              <li>Chatbots WhatsApp</li>
              <li>Integração com n8n</li>
              <li>Qualificação de Leads</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-gray-300">
              <p>WhatsApp: (19) 99228-8312</p>
              <p>Atendimento: 24 horas</p>
              <p>Brasil</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center flex flex-col items-center gap-2">
          <p className="text-gray-400">
            © {currentYear} AgentecStar. Todos os direitos reservados.
          </p>
          {/* Texto de cobertura regional – relevante para SEO local */}
          <p className="text-gray-600 text-xs mt-2 max-w-lg mx-auto leading-relaxed">
            Atendemos empresas em Campinas, Jundiaí, Valinhos, Vinhedo, Hortolândia, Sumaré, Grande SP e todo o Brasil.
          </p>
          <div className="mt-4 border-t border-gray-800 pt-4 w-full flex justify-center gap-6">
             <Link to="/mapa-do-site" className="text-sm font-medium text-brand-cyan hover:underline transition-all">
                Mapa do Site
             </Link>
             <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-300 transition-all">
                Política de Privacidade
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
