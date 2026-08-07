import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wrench, MessageSquare, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Oficinas = () => {
  const whatsappLink = "https://wa.me/5519992288312?text=Olá! Quero saber mais sobre chatbot e agendamento automático para oficinas no WhatsApp.";

  return (
    <div className="min-h-screen bg-brand-slate text-slate-200 pt-24">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-6">
          <Wrench className="h-4 w-4" /> Soluções Automotivas
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
          Chatbot e agendamento automático para <span className="text-gradient-cyber">oficinas e centros automotivos</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          Envie status de conserto do veículo, lembretes de revisão preventiva e aprove orçamentos na hora pelo WhatsApp em Campinas-SP.
        </p>
        <Button 
          size="lg"
          onClick={() => window.open(whatsappLink, '_blank')}
          className="bg-brand-cyan hover:bg-cyan-500 text-slate-950 font-bold px-8 py-6 rounded-xl shadow-lg transform hover:scale-105 transition-all"
        >
          Otimizar Minha Oficina
        </Button>
      </section>

      {/* Grid de Recursos do Nicho */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Clock className="h-10 w-10 text-brand-cyan mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Agendamento de Revisão</h3>
            <p className="text-slate-400 text-sm">
              O motorista agenda o dia e horário para a troca de óleo, alinhamento ou revisão periódica direto na conversa.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <MessageSquare className="h-10 w-10 text-brand-cyan mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Aprovação de Orçamentos</h3>
            <p className="text-slate-400 text-sm">
              Envie fotos de peças a serem trocadas e o orçamento final para o cliente aprovar em um clique no WhatsApp.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <ShieldCheck className="h-10 w-10 text-brand-cyan mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Status do Veículo</h3>
            <p className="text-slate-400 text-sm">
              "Seu carro está pronto para retirada!" — Notificações automáticas que evitam ligações de clientes ansiosos.
            </p>
          </div>
        </div>
      </section>

      {/* Seção AEO/GEO de Perguntas e Respostas Frequentes */}
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <h2 className="text-3xl font-black text-center text-white mb-10">
          Perguntas Frequentes sobre <span className="text-brand-cyan">Chatbots para Oficinas Mecânicas</span>
        </h2>
        
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <h3 className="font-bold text-white text-lg mb-2">Como o cliente consulta o status do conserto pelo WhatsApp?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              O motorista digita a placa do carro ou CPF do proprietário no chatbot. O sistema consulta a ordem de serviço atualizada no software da oficina e responde instantaneamente se o veículo está em diagnóstico, em execução ou liberado.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <h3 className="font-bold text-white text-lg mb-2">Dá para enviar fotos das peças com defeito para o cliente aprovar?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Sim. O mecânico pode anexar imagens das peças danificadas no sistema, e o robô dispara para o WhatsApp do cliente com o detalhamento dos valores de peças e mão de obra, coletando a aceitação formal pelo próprio chat.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <h3 className="font-bold text-white text-lg mb-2">A automação envia avisos de revisões futuras?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Sim. É possível configurar o sistema para programar mensagens automáticas de lembrete de retorno após 6 meses (troca de óleo) ou 10.000km, mantendo a oficina sempre ativa no contato com o cliente.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Oficinas;
