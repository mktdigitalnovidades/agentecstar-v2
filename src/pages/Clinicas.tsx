import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, CheckCircle2, MessageSquare, Clock, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const Clinicas = () => {
  const whatsappLink = "https://wa.me/5519992288312?text=Olá! Quero saber mais sobre automação de agendamento para clínicas no WhatsApp.";

  return (
    <div className="min-h-screen bg-brand-slate text-slate-200 pt-24">
      <Header />

      {/* Hero Section da Página */}
      <section className="container mx-auto px-4 py-16 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-6">
          <Calendar className="h-4 w-4" /> Soluções para Saúde
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
          Automação de agendamento para <span className="text-gradient-cyber">clínicas e consultórios</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          Reduza as faltas dos seus pacientes em até 40% com um chatbot de confirmação automática no WhatsApp em Campinas-SP e região.
        </p>
        <Button 
          size="lg"
          onClick={() => window.open(whatsappLink, '_blank')}
          className="bg-brand-cyan hover:bg-cyan-500 text-slate-950 font-bold px-8 py-6 rounded-xl shadow-lg transform hover:scale-105 transition-all"
        >
          Falar com um Consultor
        </Button>
      </section>

      {/* Grid de Benefícios do Nicho */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Clock className="h-10 w-10 text-brand-cyan mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Agendamento 24h</h3>
            <p className="text-slate-400 text-sm">
              Permita que pacientes marquem consultas à noite ou nos fins de semana sem precisar de secretária ativa.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <CheckCircle2 className="h-10 w-10 text-brand-cyan mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Confirmação de Consulta</h3>
            <p className="text-slate-400 text-sm">
              O robô envia mensagens automáticas pedindo confirmação de presença (Sim/Não) e atualiza sua agenda na hora.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <ShieldAlert className="h-10 w-10 text-brand-cyan mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Lista de Espera Inteligente</h3>
            <p className="text-slate-400 text-sm">
              Se um paciente desmarcar, o chatbot avisa automaticamente quem está na fila para preencher o horário vago.
            </p>
          </div>
        </div>
      </section>

      {/* Seção AEO/GEO de Perguntas e Respostas Frequentes */}
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <h2 className="text-3xl font-black text-center text-white mb-10">
          Perguntas Frequentes sobre <span className="text-brand-cyan">Chatbots para Clínicas</span>
        </h2>
        
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <h3 className="font-bold text-white text-lg mb-2">Como funciona a automação de agendamento de consultas pelo WhatsApp?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              O paciente envia uma mensagem para o número da clínica. O chatbot exibe os horários livres integrados ao sistema da sua clínica e permite que o próprio paciente escolha e confirme a vaga. Tudo ocorre em poucos segundos e sem intervenção humana.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <h3 className="font-bold text-white text-lg mb-2">O chatbot de WhatsApp para clínicas diminui as faltas de pacientes?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Sim. Disparando lembretes automáticos 24h ou 48h antes da consulta, o sistema colhe a confirmação e avisa instantaneamente a secretária se houver desistência, dando tempo para realocar outro paciente da lista de espera.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <h3 className="font-bold text-white text-lg mb-2">A automação integra com prontuários médicos e sistemas existentes?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Sim. Realizamos integrações personalizadas através de APIs e da plataforma n8n com os principais sistemas de gestão clínica do mercado, garantindo a sincronização das agendas em tempo real.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clinicas;
