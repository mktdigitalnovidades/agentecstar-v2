
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-2xl font-bold text-gradient bg-gradient-to-r from-white to-brand-pink bg-clip-text text-transparent">
                AgentecStar
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
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

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} AgentecStar. Todos os direitos reservados.
          </p>
          {/* Texto de cobertura regional – relevante para SEO local */}
          <p className="text-gray-600 text-xs mt-2">
            Atendemos empresas em Campinas, Jundiaí, Valinhos, Vinhedo, Hortolândia, Sumaré e Grande SP.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
