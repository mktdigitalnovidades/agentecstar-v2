import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, Users, Search, ClipboardCheck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Imobiliarias = () => {
  const whatsappLink = "https://wa.me/5519992288312?text=Olá! Quero saber mais sobre atendimento automático no WhatsApp para imobiliárias.";

  return (
    <div className="min-h-screen bg-brand-slate text-slate-200 pt-24">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-6">
          <Home className="h-4 w-4" /> Soluções para Imobiliárias
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
          Atendimento automático no WhatsApp para <span className="text-gradient-cyber">imobiliárias e corretores</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          Envie catálogo de imóveis, qualifique potenciais compradores ou inquilinos e agende visitas automaticamente 24 horas por dia em Campinas-SP e região.
        </p>
        <Button 
          size="lg"
          onClick={() => window.open(whatsappLink, '_blank')}
          className="bg-brand-cyan hover:bg-cyan-500 text-slate-950 font-bold px-8 py-6 rounded-xl shadow-lg transform hover:scale-105 transition-all"
        >
          Acelerar Minhas Vendas
        </Button>
      </section>

      {/* Grid de Recursos do Nicho */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Search className="h-10 w-10 text-brand-cyan mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Busca de Imóveis no Chat</h3>
            <p className="text-slate-400 text-sm">
              O cliente digita o bairro, número de quartos ou valor máximo no WhatsApp e o chatbot retorna os links dos imóveis ideais.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Users className="h-10 w-10 text-brand-cyan mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Qualificação Automática</h3>
            <p className="text-slate-400 text-sm">
              Filtre se o lead tem o score ou a renda necessária antes de enviar o contato para o corretor humano, economizando tempo valioso.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <ClipboardCheck className="h-10 w-10 text-brand-cyan mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Agendamento de Vistorias</h3>
            <p className="text-slate-400 text-sm">
              Sincronize as agendas dos corretores para que proprietários e inquilinos reservem vistorias e visitas de forma automatizada.
            </p>
          </div>
        </div>
      </section>

      {/* Seção AEO/GEO de Perguntas e Respostas Frequentes */}
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <h2 className="text-3xl font-black text-center text-white mb-10">
          Perguntas Frequentes sobre <span className="text-brand-cyan">Chatbots para Imobiliárias</span>
        </h2>
        
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <h3 className="font-bold text-white text-lg mb-2">Como o chatbot auxilia corretores de imóveis no primeiro atendimento?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              O chatbot responde instantaneamente ao lead que veio de portais imobiliários. Ele coleta informações iniciais do cliente (faixa de preço, localização preferida, perfil de compra/aluguel) e avisa o corretor ideal apenas quando o lead está quente.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <h3 className="font-bold text-white text-lg mb-2">Dá para enviar fotos e catálogos de imóveis pelo WhatsApp automaticamente?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Sim. Nossa automação de imobiliárias é capaz de enviar arquivos PDF, imagens de alta qualidade e links diretos para a página de detalhes do imóvel no seu site imobiliário diretamente pelo chat.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <h3 className="font-bold text-white text-lg mb-2">Como integrar o chatbot de WhatsApp com o CRM da imobiliária?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Desenvolvemos integrações via APIs e Webhooks utilizando a plataforma n8n. Desse modo, toda vez que um cliente fornecer dados ao robô, um novo lead é criado ou atualizado no seu CRM imobiliário preferido.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Imobiliarias;
