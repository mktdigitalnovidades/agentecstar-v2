import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { 
  Wrench, 
  CheckCircle2, 
  Clock, 
  MessageSquare, 
  ArrowRight, 
  DollarSign, 
  Sparkles, 
  AlertTriangle, 
  Check, 
  X, 
  ChevronDown, 
  Car, 
  Gauge, 
  ShieldCheck, 
  PhoneOff, 
  Camera, 
  RotateCcw,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Oficinas = () => {
  const whatsappLink = "https://wa.me/5519992288312?text=Olá! Quero ver uma demonstração do sistema de WhatsApp para oficinas mecânicas e centros automotivos.";

  // Estado para acordeão de FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (idx: number) => setOpenFaq(openFaq === idx ? null : idx);

  // Calculadora interativa de elevador parado e orçamentos rápidos
  const [elevadores, setElevadores] = useState(3);
  const [ticketMedio, setTicketMedio] = useState(650);

  // Estimativa: com aprovações rápidas, gira pelo menos 1 carro extra por semana por elevador
  const faturamentoExtraMensal = elevadores * ticketMedio * 4;

  const faqs = [
    {
      q: "Como o cliente consulta o status do carro no WhatsApp?",
      a: "O motorista só precisa mandar uma mensagem simples ou digitar a placa do carro. O sistema consulta a ordem de serviço e responde em 2 segundos a etapa exata: se está em diagnóstico, aguardando peças, em execução ou pronto para retirada. O telefone da oficina para de tocar com perguntas repetitivas."
    },
    {
      q: "Dá para mandar fotos ou vídeos das peças danificadas para o cliente aprovar?",
      a: "Sim! Essa é uma das funções mais poderosas. O mecânico tira a foto da peça com folga ou vazamento e o sistema dispara no WhatsApp do cliente junto com o orçamento detalhado. O cliente vê com os próprios olhos o defeito, sente confiança e clica em 'Aprovar Orçamento' em minutos."
    },
    {
      q: "Preciso trocar o computador da oficina ou instalar programas pesados?",
      a: "Não precisa de computador novo nem programas complicados. O sistema roda na nuvem e pode ser operado pelo próprio celular ou pelo navegador do computador que a sua oficina já usa hoje na recepção."
    },
    {
      q: "O que acontece se o cliente quiser negociar ou tirar uma dúvida técnica?",
      a: "O cliente pode a qualquer momento clicar na opção de falar com o consultor técnico ou recepcionista. A conversa chega limpa e notificada para a sua equipe, já sabendo qual carro e orçamento estão sendo discutidos."
    },
    {
      q: "Como funciona o lembrete automático de troca de óleo e revisão futura?",
      a: "Quando o carro é entregue, o sistema agenda automaticamente mensagens preventivas para daqui a 5 ou 6 meses: 'Olá Roberto, já faz 6 meses da última troca de óleo do seu Corolla. Vamos agendar uma checagem preventiva nesta semana?'. Isso garante pátio cheio mesmo nos meses mais parados."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-slate text-slate-200 pt-24 overflow-x-hidden">
      <SEOHead
        title="Automação de WhatsApp para Oficinas Mecânicas | Pare de perder tempo com telefone"
        description="Aprove orçamentos em 10 minutos pelo WhatsApp, acabe com ligações de 'meu carro tá pronto?' e encha o pátio com lembretes automáticos de revisão."
        canonical="https://agentecstar.com/automacao-para-oficinas"
        robots="index, follow"
      />
      <Header />

      {/* ─── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        {/* Luzes de fundo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-brand-cyan/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs md:text-sm font-semibold uppercase tracking-wider mb-6 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <Wrench className="h-4 w-4" /> Solução para Oficinas Mecânicas, Auto Centers e Funilarias
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Pare de atender telefone o dia todo e <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-brand-cyan to-white">aprove orçamentos no WhatsApp</span> em 10 minutos.
            </h1>

            <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
              O cliente acompanha o status do conserto sozinho pelo WhatsApp, recebe a foto da peça gasta e <strong className="text-white font-semibold">aprova o serviço pelo celular</strong>. Sem elevador travado, sem telefone tocando sem parar e com o pátio sempre girando.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button 
                size="lg"
                onClick={() => window.open(whatsappLink, '_blank')}
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-8 py-6 rounded-xl shadow-[0_0_30px_rgba(245,158,11,0.4)] transform hover:scale-105 transition-all text-base flex items-center justify-center gap-3 group"
              >
                <MessageSquare className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Quero Testar na Minha Oficina
              </Button>

              <button
                onClick={() => document.getElementById('como-resolve')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-6 py-4 rounded-xl border border-slate-700 hover:border-amber-400/40 bg-slate-800/60 hover:bg-slate-800 text-slate-200 font-semibold transition-all text-sm flex items-center justify-center gap-2"
              >
                Ver Demonstração Prática <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Micro-prova e números */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-800/80 text-left">
              <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                <p className="text-2xl lg:text-3xl font-black text-amber-400 mb-1">10 min</p>
                <p className="text-xs text-slate-400 leading-snug">Tempo médio para o cliente aprovar o orçamento</p>
              </div>
              <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                <p className="text-2xl lg:text-3xl font-black text-white mb-1">-80%</p>
                <p className="text-xs text-slate-400 leading-snug">Menos ligações de "meu carro tá pronto?"</p>
              </div>
              <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                <p className="text-2xl lg:text-3xl font-black text-brand-cyan mb-1">Zero</p>
                <p className="text-xs text-slate-400 leading-snug">Elevador travado esperando resposta</p>
              </div>
              <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                <p className="text-2xl lg:text-3xl font-black text-emerald-400 mb-1">+35%</p>
                <p className="text-xs text-slate-400 leading-snug">Mais retornos de revisão e troca de óleo</p>
              </div>
            </div>
          </div>

          {/* ─── SIMULADOR VISUAL DE WHATSAPP DA OFICINA ────────────── */}
          <div className="mt-12 max-w-3xl mx-auto bg-slate-900/90 rounded-3xl p-4 md:p-8 border border-slate-700/60 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-slate-950 font-bold">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Centro Automotivo Estrela</h4>
                  <span className="text-xs text-amber-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    Atendimento de Box Inteligente
                  </span>
                </div>
              </div>
              <span className="text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-full">Exemplo Real de Fluxo</span>
            </div>

            {/* Balões da conversa de orçamento e fotos */}
            <div className="space-y-4 text-xs md:text-sm">
              {/* Notificação da Oficina com Foto e Orçamento */}
              <div className="flex justify-start">
                <div className="bg-[#202c33] text-slate-200 p-3.5 rounded-2xl rounded-tl-sm max-w-[85%] border border-slate-700/40 shadow">
                  <p className="font-semibold text-amber-400 mb-1">Diagnóstico Concluído — Jeep Renegade (Placa BRA-2E19) 🔧</p>
                  <p className="mb-2">Olá Fernando! Desmontamos o conjunto de freio dianteiro. A pastilha já atingiu o metal e está danificando o disco.</p>
                  
                  {/* Simulação de Card com Foto da Peça */}
                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 mb-3 space-y-2">
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <Camera className="w-4 h-4 text-amber-400" />
                      <span>1 Foto da Peça Anexada pelo Mecânico</span>
                    </div>
                    <div className="bg-slate-800/80 h-24 rounded-lg flex items-center justify-center border border-dashed border-slate-700 text-slate-400 text-xs">
                      [📷 Pastilha_Desgastada_Dianteira_Jeep.jpg]
                    </div>
                    <div className="pt-2 text-xs border-t border-slate-800">
                      <p className="text-white font-semibold">Resumo do Orçamento:</p>
                      <p className="text-slate-300">• Jogo de Pastilhas Cerâmica: R$ 240,00</p>
                      <p className="text-slate-300">• Retífica/Troca dos Discos: R$ 280,00</p>
                      <p className="text-slate-300">• Mão de Obra Especializada: R$ 150,00</p>
                      <p className="text-amber-400 font-bold text-sm mt-1">Total: R$ 670,00 (em até 3x sem juros)</p>
                    </div>
                  </div>

                  <p>Podemos iniciar a troca das peças agora para liberar seu carro hoje até as 17:30?</p>
                  <span className="text-[10px] text-slate-400 block text-right mt-1">10:14</span>
                </div>
              </div>

              {/* Cliente aprova em 1 toque */}
              <div className="flex justify-end">
                <div className="bg-[#005c4b] text-white p-3 rounded-2xl rounded-tr-sm max-w-[70%] shadow">
                  <p className="font-semibold">✅ 1. Aprovado! Pode fazer o serviço.</p>
                  <span className="text-[10px] text-emerald-200/70 block text-right mt-1">10:18</span>
                </div>
              </div>

              {/* Confirmação e liberação do elevador */}
              <div className="flex justify-start">
                <div className="bg-[#202c33] text-slate-200 p-3 rounded-2xl rounded-tl-sm max-w-[85%] border border-slate-700/40 shadow">
                  <p className="text-emerald-400 font-bold mb-1">Perfeito, Fernando! Peças já requisitadas.</p>
                  <p>Assim que o carro entrar no teste final de pista, você receberá o aviso para vir retirar. Obrigado pela confiança!</p>
                  <span className="text-[10px] text-slate-400 block text-right mt-1">10:18</span>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-slate-400 mt-6 pt-4 border-t border-slate-800">
              ⚡ Orçamento enviado, foto vista, serviço aprovado em 4 minutos. Sem cliente desconfiado e sem carro travado no elevador.
            </p>
          </div>
        </div>
      </section>

      {/* ─── O DIA A DIA COMPLICADO DA MAIORIA DAS OFICINAS ───────── */}
      <section className="py-20 bg-slate-950 border-y border-slate-800/80">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
              <AlertTriangle className="h-4 w-4" /> Problemas Reais do Pátio
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Por que a sua oficina trabalha tanto e o lucro <span className="text-red-400">parece não sobrar</span>?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              O gargalo de uma oficina não é a habilidade dos seus mecânicos, e sim a comunicação lenta com os donos dos carros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Dor 1 */}
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-red-500/20 hover:border-red-500/40 transition-all flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Elevador Travado Esperando o Cliente Responder</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  O carro está desmontado ocupando a rampa. A recepcionista manda o orçamento e o cliente só responde 4 horas depois. Esse tempo perdido impede você de colocar outro carro na rampa e faturar mais.
                </p>
              </div>
            </div>

            {/* Dor 2 */}
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-red-500/20 hover:border-red-500/40 transition-all flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                <PhoneOff className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Mecânico Parando o Trabalho para Atender Telefone</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Toda vez que o telefone toca com o cliente perguntando <em>"meu carro já tá pronto?"</em>, alguém tem que largar a chave, limpar a mão de graxa e ir até a recepção checar a OS. São dezenas de interrupções por dia.
                </p>
              </div>
            </div>

            {/* Dor 3 */}
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-red-500/20 hover:border-red-500/40 transition-all flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Desconfiança de Peça Trocada ("Precisava Mesmo?")</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Quando o cliente não vê a peça quebrada, ele desconfia do valor cobrado e demora a aprovar o orçamento. Isso gera atrito desnecessário e mancha a reputação de honestidade da sua oficina.
                </p>
              </div>
            </div>

            {/* Dor 4 */}
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-red-500/20 hover:border-red-500/40 transition-all flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">O Cliente Faz o Serviço e Nunca Mais Volta</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Você conserta a suspensão do cliente hoje, mas não tem ninguém para lembrar ele de trocar o óleo daqui a 6 meses. Ele esquece e troca no posto da esquina. Você perdeu um cliente fiel que já confiava em você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CALCULADORA DE GIRO DE PÁTIO ────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-900 border-2 border-amber-500/30 rounded-3xl p-6 md:p-12 shadow-[0_0_50px_rgba(245,158,11,0.15)]">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-amber-400 tracking-wider uppercase bg-amber-500/10 px-4 py-1 rounded-full border border-amber-500/20">
                Giro Rápido de Pátio
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-white mt-4">
                Quanto mais a sua oficina fatura acelerando orçamentos?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Quantidade de elevadores / boxes de trabalho: <strong className="text-amber-400 text-lg">{elevadores} elevadores</strong>
                  </label>
                  <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    value={elevadores} 
                    onChange={(e) => setElevadores(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Ticket médio por ordem de serviço: <strong className="text-amber-400 text-lg">R$ {ticketMedio}</strong>
                  </label>
                  <input 
                    type="range" 
                    min="200" 
                    max="2000" 
                    step="50"
                    value={ticketMedio} 
                    onChange={(e) => setTicketMedio(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                </div>
              </div>

              <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 text-center space-y-4">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Com aprovação rápida (+1 carro/semana por elevador):</p>
                  <p className="text-3xl md:text-4xl font-black text-emerald-400">
                    + R$ {faturamentoExtraMensal.toLocaleString('pt-BR')}<span className="text-xs text-slate-400 font-normal">/mês</span>
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Equivale a até <strong>R$ {(faturamentoExtraMensal * 12).toLocaleString('pt-BR')}</strong> a mais faturados no ano sem precisar contratar mais mecânicos.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                onClick={() => window.open(whatsappLink, '_blank')}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-8 py-5 rounded-xl shadow-lg transition-all transform hover:scale-105"
              >
                Quero Acelerar o Giro da Minha Oficina
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMO A GENTE RESOLVE NA PRÁTICA ───────────────────────── */}
      <section id="como-resolve" className="py-20 bg-slate-900/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Como o sistema funciona na prática: <span className="text-gradient-cyber">os 4 passos da oficina moderna</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Simples para o mecânico no pátio e transparente para o cliente no celular.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Passo 1 */}
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 relative">
              <span className="text-5xl font-black text-slate-800 absolute top-4 right-6">01</span>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Diagnóstico com Foto no WhatsApp</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Ao desmontar o veículo, a equipe anexa foto da peça avariada com o orçamento discriminado. O cliente visualiza a peça no WhatsApp, entende a urgência e autoriza em poucos cliques, sem desconfiança.
              </p>
            </div>

            {/* Passo 2 */}
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 relative">
              <span className="text-5xl font-black text-slate-800 absolute top-4 right-6">02</span>
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-4">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Consulta de Status pela Placa do Carro</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Acabe com as dezenas de ligações diárias de clientes ansiosos. O motorista digita a placa no seu WhatsApp e recebe imediatamente o andamento exato e a previsão de liberação.
              </p>
            </div>

            {/* Passo 3 */}
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 relative">
              <span className="text-5xl font-black text-slate-800 absolute top-4 right-6">03</span>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Notificação de "Carro Pronto" com Chave Pix</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Assim que a ordem de serviço for finalizada, o cliente recebe um aviso automático com os valores finais, chave Pix ou link para pagamento e horário limite de retirada. Retirada rápida e sem filas no balcão.
              </p>
            </div>

            {/* Passo 4 */}
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 relative">
              <span className="text-5xl font-black text-slate-800 absolute top-4 right-6">04</span>
              <div className="w-12 h-12 rounded-xl bg-brand-fuchsia/10 text-brand-fuchsia flex items-center justify-center mb-4">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Pós-Venda Ativo de Revisão e Troca de Óleo</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                O sistema agenda lembretes de retorno preventivo após 6 meses (óleo, filtros, geometria). O cliente lembra da sua oficina, agenda o retorno pelo próprio WhatsApp e você garante faturamento recorrente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TABELA COMPARATIVA ANTES VS DEPOIS ──────────────────── */}
      <section className="py-20 bg-slate-950 border-t border-slate-800/80">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Oficina Tradicional vs Oficina Automatizada com a AgentecStar
            </h2>
            <p className="text-slate-400">Veja a transformação no ritmo da sua oficina:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Tradicional */}
            <div className="bg-red-950/20 border border-red-900/40 p-6 md:p-8 rounded-2xl">
              <div className="flex items-center gap-2 text-red-400 font-bold mb-6 text-lg">
                <X className="w-6 h-6 bg-red-500/20 rounded-full p-1" /> Como a maioria das oficinas sofre:
              </div>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Carro travando o elevador por horas esperando cliente responder.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Mecânico limpando a mão de graxa toda hora para atender telefone.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Cliente desconfiado achando que a peça não precisava ser trocada.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Cliente retira o carro e nunca mais recebe contato para revisão.</span>
                </li>
              </ul>
            </div>

            {/* Com AgentecStar */}
            <div className="bg-emerald-950/20 border border-emerald-900/40 p-6 md:p-8 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.1)]">
              <div className="flex items-center gap-2 text-emerald-400 font-bold mb-6 text-lg">
                <Check className="w-6 h-6 bg-emerald-500/20 rounded-full p-1" /> Com o Sistema da AgentecStar:
              </div>
              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Orçamentos aprovados em menos de 10 minutos</strong> com fotos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Telefone silencioso</strong> — cliente consulta o status pela placa.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Total confiança</strong>: transparência que gera elogios e fidelidade.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Pátio sempre cheio</strong> com mensagens automáticas de 6 meses.</span>
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
              Dúvidas Frequentes de Donos de Oficina
            </h2>
            <p className="text-slate-400">Respostas diretas e sem enrolação:</p>
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
                  <ChevronDown className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15),transparent_70%)]" />
        
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Quer ver como esse sistema vai rodar na sua oficina?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Fale conosco no WhatsApp agora. Fazemos uma demonstração ao vivo mostrando a aprovação de orçamento e consulta de placa direto no seu celular.
          </p>

          <Button 
            size="lg"
            onClick={() => window.open(whatsappLink, '_blank')}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-10 py-7 rounded-2xl shadow-[0_0_40px_rgba(245,158,11,0.5)] transform hover:scale-105 transition-all text-lg flex items-center justify-center gap-3 mx-auto"
          >
            <MessageSquare className="h-6 w-6" />
            Falar com um Consultor Agora
          </Button>

          <p className="text-xs text-slate-500 mt-4">
            Instalação rápida em até 5 dias úteis • Sem contrato de fidelidade • Suporte dedicado
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Oficinas;
