import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  ShieldAlert, 
  MessageCircle, 
  ArrowRight, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Sparkles, 
  AlertTriangle, 
  Check, 
  X, 
  ChevronDown, 
  HeartHandshake, 
  Activity,
  PhoneCall,
  UserCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Clinicas = () => {
  const whatsappLink = "https://wa.me/5519992288312?text=Olá! Quero ver uma demonstração de automação de agendamento e confirmação para clínicas no WhatsApp.";

  // Estado para acordeão de FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (idx: number) => setOpenFaq(openFaq === idx ? null : idx);

  // Estado interativo para a calculadora de prejuízo evitado
  const [consultasSemana, setConsultasSemana] = useState(6);
  const [valorConsulta, setValorConsulta] = useState(180);

  const perdaMensal = consultasSemana * valorConsulta * 4;
  const recuperacaoEstimada = Math.round(perdaMensal * 0.75);

  const faqs = [
    {
      q: "Meus pacientes mais idosos vão conseguir usar?",
      a: "Com certeza! O paciente não precisa baixar nenhum aplicativo novo nem lembrar senhas. Ele conversa pelo próprio WhatsApp que já usa no dia a dia. A linguagem é simples, educada e natural, respondendo com opções numeradas (como 'Digite 1 para confirmar ou 2 para remarcar')."
    },
    {
      q: "Preciso trocar o número do WhatsApp da minha clínica?",
      a: "Não. Nós conectamos a automação diretamente no número oficial que a sua clínica já divulga e que seus pacientes já conhecem e têm salvo na agenda."
    },
    {
      q: "E se o paciente tiver uma dúvida complexa ou caso de urgência?",
      a: "O assistente inteligente é treinado para reconhecer solicitações fora do padrão. Sempre que o paciente pedir para falar com um atendente ou relatar uma emergência, a conversa é transferida na hora para a recepcionista, com o histórico da conversa já organizado na tela."
    },
    {
      q: "Minha secretária ou recepcionista vai perder o emprego?",
      a: "De forma alguma! A automação tira das costas da recepcionista a parte chata, exaustiva e repetitiva: passar 4 horas por dia ligando para confirmar consultas ou respondendo 'qual o valor?' e 'tem horário hoje?'. Com o WhatsApp automatizado, sua equipe foca em acolher o paciente que chega presencialmente e fechar planos de tratamento."
    },
    {
      q: "Em quanto tempo o sistema fica pronto para rodar na minha clínica?",
      a: "Nossa equipe entrega tudo configurado, testado e pronto para uso em até 5 a 7 dias úteis. Fazemos um treinamento rápido de 30 minutos com a sua equipe para que todos operem com 100% de segurança."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-slate text-slate-200 pt-24 overflow-x-hidden">
      <SEOHead
        title="Automação de WhatsApp para Clínicas e Consultórios | Reduza Faltas em 40%"
        description="Acabe com os buracos na agenda da sua clínica. Confirmação automática de consultas no WhatsApp, encaixes em minutos e atendimento 24h sem sobrecarregar a recepção."
        canonical="https://agentecstar.com/automacao-para-clinicas"
        robots="index, follow"
      />
      <Header />

      {/* ─── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        {/* Efeitos de luz no fundo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-cyan/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs md:text-sm font-semibold uppercase tracking-wider mb-6 shadow-[0_0_20px_rgba(62,206,208,0.2)]">
              <Sparkles className="h-4 w-4 animate-pulse" /> Solução para Clínicas, Consultórios e Odontologia
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Sua agenda cheia todos os dias, <span className="text-gradient-cyber">sem faltas de última hora</span> e sem secretária sobrecarregada.
            </h1>

            <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
              O paciente agenda pelo WhatsApp em segundos, recebe lembretes automáticos e, se desmarcar, o sistema aciona a <strong className="text-white font-semibold">lista de espera instantânea</strong> para preencher o horário. Recupere até <span className="text-brand-cyan font-bold">R$ 4.000/mês por profissional</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button 
                size="lg"
                onClick={() => window.open(whatsappLink, '_blank')}
                className="w-full sm:w-auto bg-brand-cyan hover:bg-cyan-400 text-slate-950 font-black px-8 py-6 rounded-xl shadow-[0_0_30px_rgba(62,206,208,0.4)] transform hover:scale-105 transition-all text-base flex items-center justify-center gap-3 group"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Quero Testar no Meu WhatsApp
              </Button>

              <button
                onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-6 py-4 rounded-xl border border-slate-700 hover:border-brand-cyan/40 bg-slate-800/60 hover:bg-slate-800 text-slate-200 font-semibold transition-all text-sm flex items-center justify-center gap-2"
              >
                Ver Como Funciona na Prática <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Micro-prova social e estatísticas rápidas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-800/80 text-left">
              <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                <p className="text-2xl lg:text-3xl font-black text-brand-cyan mb-1">-40%</p>
                <p className="text-xs text-slate-400 leading-snug">Menos faltas não avisadas na agenda</p>
              </div>
              <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                <p className="text-2xl lg:text-3xl font-black text-white mb-1">3 seg</p>
                <p className="text-xs text-slate-400 leading-snug">Tempo médio para responder pacientes 24/7</p>
              </div>
              <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                <p className="text-2xl lg:text-3xl font-black text-brand-fuchsia mb-1">+4 horas</p>
                <p className="text-xs text-slate-400 leading-snug">Poupadas da recepção todos os dias</p>
              </div>
              <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                <p className="text-2xl lg:text-3xl font-black text-green-400 mb-1">100%</p>
                <p className="text-xs text-slate-400 leading-snug">No WhatsApp oficial que você já tem</p>
              </div>
            </div>
          </div>

          {/* ─── SIMULADOR VISUAL DE CONVERSA WHATSAPP ─────────────── */}
          <div className="mt-12 max-w-3xl mx-auto bg-slate-900/90 rounded-3xl p-4 md:p-8 border border-slate-700/60 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Clínica Saúde & Bem-Estar</h4>
                  <span className="text-xs text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Assistente Ativo 24h
                  </span>
                </div>
              </div>
              <span className="text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-full">Exemplo Real de Fluxo</span>
            </div>

            {/* Balões da conversa */}
            <div className="space-y-4 text-xs md:text-sm">
              {/* Mensagem do Paciente */}
              <div className="flex justify-end">
                <div className="bg-[#005c4b] text-white p-3.5 rounded-2xl rounded-tr-sm max-w-[85%] shadow">
                  <p>Oi, boa noite! Queria ver se a Dra. Camila tem horário livre nesta semana para consulta.</p>
                  <span className="text-[10px] text-emerald-200/70 block text-right mt-1">21:42</span>
                </div>
              </div>

              {/* Resposta do Robô (3 segundos depois) */}
              <div className="flex justify-start">
                <div className="bg-[#202c33] text-slate-200 p-3.5 rounded-2xl rounded-tl-sm max-w-[85%] border border-slate-700/40 shadow">
                  <p className="font-semibold text-brand-cyan mb-1">Olá! Sou a assistente virtual da Clínica Saúde & Bem-Estar 👩‍⚕️</p>
                  <p className="mb-2">A Dra. Camila tem os seguintes horários disponíveis nesta semana:</p>
                  <div className="bg-slate-900/70 p-2.5 rounded-lg space-y-1 mb-2 border border-slate-800">
                    <p className="text-white">🔹 <strong>1.</strong> Quinta-feira às <strong>14:30</strong></p>
                    <p className="text-white">🔹 <strong>2.</strong> Quinta-feira às <strong>16:00</strong></p>
                    <p className="text-white">🔹 <strong>3.</strong> Sexta-feira às <strong>10:30</strong></p>
                  </div>
                  <p>Qual dessas opções fica melhor para você?</p>
                  <span className="text-[10px] text-slate-400 block text-right mt-1">21:42</span>
                </div>
              </div>

              {/* Paciente escolhe */}
              <div className="flex justify-end">
                <div className="bg-[#005c4b] text-white p-3 rounded-2xl rounded-tr-sm max-w-[70%] shadow">
                  <p>A opção 1, por favor! Quinta 14:30.</p>
                  <span className="text-[10px] text-emerald-200/70 block text-right mt-1">21:43</span>
                </div>
              </div>

              {/* Confirmação Instantânea */}
              <div className="flex justify-start">
                <div className="bg-[#202c33] text-slate-200 p-3.5 rounded-2xl rounded-tl-sm max-w-[85%] border border-slate-700/40 shadow">
                  <p className="text-emerald-400 font-bold mb-1">✅ Agendamento pré-confirmado com sucesso!</p>
                  <p>Dra. Camila — Quinta-feira, às 14:30.<br />Enviaremos um lembrete no dia anterior com as orientações de chegada. Até breve!</p>
                  <span className="text-[10px] text-slate-400 block text-right mt-1">21:43</span>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-slate-400 mt-6 pt-4 border-t border-slate-800">
              ⚡ Sem telefonemas, sem espera até o dia seguinte, sem perder o paciente para outra clínica.
            </p>
          </div>
        </div>
      </section>

      {/* ─── O CUSTO OCULTO DAS FALTAS E DO CAOS NA RECEPÇÃO ─────── */}
      <section className="py-20 bg-slate-950 border-y border-slate-800/80">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
              <AlertTriangle className="h-4 w-4" /> O Custo Oculto da sua Operação Hoje
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Quanto a sua clínica está <span className="text-red-400">perdendo todos os meses</span> sem você perceber?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A maioria dos donos de clínica acha que faltas e atrasos são "normais da profissão". Não são. É dinheiro vivo saindo pelo ralo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Dor 1 */}
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-red-500/20 hover:border-red-500/40 transition-all flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">A Cadeira Vazia que Custa Caro</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Quando o paciente não comparece e não avisa, o profissional fica ocioso por 40 a 60 minutos. A clínica continua pagando aluguel, energia e salário, mas não faturou nem um centavo naquele horário.
                </p>
              </div>
            </div>

            {/* Dor 2 */}
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-red-500/20 hover:border-red-500/40 transition-all flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">O Paciente que Agenda no Concorrente às 21h</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Mais de 55% dos pacientes só têm tempo de marcar consulta à noite, no almoço ou no domingo. Se seu WhatsApp fica em silêncio até o dia seguinte, o paciente manda mensagem para a próxima clínica e fecha lá.
                </p>
              </div>
            </div>

            {/* Dor 3 */}
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-red-500/20 hover:border-red-500/40 transition-all flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Secretária Presa ao Telefone o Dia Inteiro</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Ficar ligando um a um para confirmar consultas de amanhã consome 3 a 4 horas do dia. Enquanto isso, quem está na recepção é atendido com pressa e não há tempo para fazer pós-venda ou vender tratamentos complementares.
                </p>
              </div>
            </div>

            {/* Dor 4 */}
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-red-500/20 hover:border-red-500/40 transition-all flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Desistência de Última Hora sem Tempo de Encaixe</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  O paciente avisa às 10h que não vai poder comparecer às 11h. A secretária não tem tempo hábil de ligar para 10 pessoas na lista de espera. O horário morre e o faturamento daquele dia cai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CALCULADORA INTERATIVA DE ECONOMIA ──────────────────── */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-900 border-2 border-brand-cyan/30 rounded-3xl p-6 md:p-12 shadow-[0_0_50px_rgba(62,206,208,0.15)]">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-brand-cyan tracking-wider uppercase bg-brand-cyan/10 px-4 py-1 rounded-full border border-brand-cyan/20">
                Simulador de Retorno
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-white mt-4">
                Calcule quanto sua clínica recupera com a automação
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Faltas ou desmarcações por semana: <strong className="text-brand-cyan text-lg">{consultasSemana} faltas</strong>
                  </label>
                  <input 
                    type="range" 
                    min="1" 
                    max="25" 
                    value={consultasSemana} 
                    onChange={(e) => setConsultasSemana(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Valor médio da sua consulta/sessão: <strong className="text-brand-cyan text-lg">R$ {valorConsulta}</strong>
                  </label>
                  <input 
                    type="range" 
                    min="50" 
                    max="600" 
                    step="10"
                    value={valorConsulta} 
                    onChange={(e) => setValorConsulta(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                  />
                </div>
              </div>

              <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 text-center space-y-4">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Prejuízo mensal estimado hoje:</p>
                  <p className="text-2xl font-bold text-red-400">R$ {perdaMensal.toLocaleString('pt-BR')}/mês</p>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Dinheiro recuperado com a AgentecStar:</p>
                  <p className="text-3xl md:text-4xl font-black text-emerald-400">
                    + R$ {recuperacaoEstimada.toLocaleString('pt-BR')}<span className="text-xs text-slate-400 font-normal">/mês</span>
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    (Equivale a até <strong>R$ {(recuperacaoEstimada * 12).toLocaleString('pt-BR')}</strong> a mais por ano no seu bolso)
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                onClick={() => window.open(whatsappLink, '_blank')}
                className="bg-brand-cyan hover:bg-cyan-400 text-slate-950 font-black px-8 py-5 rounded-xl shadow-lg transition-all transform hover:scale-105"
              >
                Quero Recuperar esse Faturamento na Minha Clínica
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMO A GENTE RESOLVE ISSO NA PRÁTICA (4 PILARES) ──── */}
      <section id="como-funciona" className="py-20 bg-slate-900/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Como funciona na prática: <span className="text-gradient-cyber">os 4 pilares da sua clínica automática</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Simples para o seu paciente, automático para o seu sistema e tranquilidade total para a sua equipe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pilar 1 */}
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 relative">
              <span className="text-5xl font-black text-slate-800 absolute top-4 right-6">01</span>
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Confirmação Ativa em 1 Clique</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                24 horas antes da consulta, o WhatsApp do paciente apita com um lembrete educado. Ele só precisa tocar em "Confirmar" ou "Remarcar". Sem formulários demorados, sem precisar falar ao telefone. A taxa de resposta passa de 90%.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 relative">
              <span className="text-5xl font-black text-slate-800 absolute top-4 right-6">02</span>
              <div className="w-12 h-12 rounded-xl bg-brand-purple/20 text-brand-purple-light flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Encaixe Inteligente em Cascata</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Se alguém disser que não poderá ir, o sistema avisa na mesma hora as pessoas cadastradas na lista de espera: <em>"Olá Maria, abriu uma vaga com o Dr. Lucas amanhã às 14h. Deseja encaixar?"</em>. A vaga é preenchida em menos de 10 minutos.
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 relative">
              <span className="text-5xl font-black text-slate-800 absolute top-4 right-6">03</span>
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Orientações Pré-Consulta Sem Dúvidas</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                O robô envia automaticamente a localização GPS da clínica, instrução de estacionamento e lembretes de preparo (como jejum, exames anteriores para trazer e documentos). O paciente chega no horário e sem estresse.
              </p>
            </div>

            {/* Pilar 4 */}
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 relative">
              <span className="text-5xl font-black text-slate-800 absolute top-4 right-6">04</span>
              <div className="w-12 h-12 rounded-xl bg-brand-fuchsia/10 text-brand-fuchsia flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Retorno Preventivo & Avaliação no Google</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Após a consulta, o paciente recebe um pedido amigável de avaliação no Google Meu Negócio (o que atrai mais pacientes orgânicos). E após 6 meses, o sistema lembra automaticamente que é hora do check-up preventivo de retorno.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ANTES VS DEPOIS (TABELA COMPARATIVA) ────────────────── */}
      <section className="py-20 bg-slate-950 border-t border-slate-800/80">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              O seu consultório: Hoje vs Com a AgentecStar
            </h2>
            <p className="text-slate-400">Veja a diferença na rotina diária da sua clínica:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Como é Hoje */}
            <div className="bg-red-950/20 border border-red-900/40 p-6 md:p-8 rounded-2xl">
              <div className="flex items-center gap-2 text-red-400 font-bold mb-6 text-lg">
                <X className="w-6 h-6 bg-red-500/20 rounded-full p-1" /> Como a maioria das clínicas opera:
              </div>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Paciente falta sem avisar e a cadeira fica vaga 1 hora.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Mensagens enviadas à noite ficam sem resposta até o dia seguinte.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Secretária passa a tarde ligando para pacientes que nem atendem o telefone.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Fila de espera anotada em caderno de papel que nunca é aproveitada.</span>
                </li>
              </ul>
            </div>

            {/* Com a AgentecStar */}
            <div className="bg-emerald-950/20 border border-emerald-900/40 p-6 md:p-8 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.1)]">
              <div className="flex items-center gap-2 text-emerald-400 font-bold mb-6 text-lg">
                <Check className="w-6 h-6 bg-emerald-500/20 rounded-full p-1" /> Com o Sistema da AgentecStar:
              </div>
              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>90%+ de confirmações antecipadas</strong> no WhatsApp.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Atendimento em 3 segundos</strong> mesmo às 23h ou no domingo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Recepção calma e produtiva</strong>, focada em cuidar de quem está presente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Encaixes instantâneos</strong> caso alguém precise remarcar.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PERGUNTAS FREQUENTES (QUEBRA DE OBJEÇÕES) ─────────── */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-3">
              Perguntas Frequentes de Gestores e Médicos
            </h2>
            <p className="text-slate-400">Tire suas dúvidas antes de começar:</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                onClick={() => toggleFaq(idx)}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 cursor-pointer transition-all"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-bold text-white text-base md:text-lg">{faq.q}</h3>
                  <ChevronDown className={`w-5 h-5 text-brand-cyan shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </div>
                {openFaq === idx && (
                  <p className="text-slate-300 text-sm mt-3 pt-3 border-t border-slate-800/80 leading-relaxed animate-in fade-in-50">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CHAMADA FINAL DE CONVERSÃO ──────────────────────────── */}
      <section className="py-24 bg-gradient-to-b from-[#0F172A] to-[#0B1120] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(62,206,208,0.15),transparent_70%)]" />
        
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Pronto para ver sua agenda <span className="text-brand-cyan">lotada e confirmada</span> toda semana?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Fale conosco agora mesmo pelo WhatsApp. Criamos uma demonstração gratuita e personalizada para a especialidade da sua clínica em menos de 10 minutos.
          </p>

          <Button 
            size="lg"
            onClick={() => window.open(whatsappLink, '_blank')}
            className="bg-brand-cyan hover:bg-cyan-400 text-slate-950 font-black px-10 py-7 rounded-2xl shadow-[0_0_40px_rgba(62,206,208,0.5)] transform hover:scale-105 transition-all text-lg flex items-center justify-center gap-3 mx-auto"
          >
            <MessageCircle className="h-6 w-6" />
            Falar com um Especialista Agora
          </Button>

          <p className="text-xs text-slate-500 mt-4">
            Sem fidelidade abusiva • Demonstração 100% gratuita • Atendimento para Campinas e todo o Brasil
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clinicas;
