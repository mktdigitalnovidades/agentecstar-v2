import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { 
  Home, 
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
  Users, 
  Building2, 
  Key, 
  Compass, 
  Send, 
  ShieldCheck, 
  Zap,
  PhoneCall,
  UserCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Imobiliarias = () => {
  const whatsappLink = "https://wa.me/5519992288312?text=Olá! Quero ver uma demonstração do sistema de atendimento e triagem de leads no WhatsApp para imobiliárias.";

  // Estado para acordeão de FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (idx: number) => setOpenFaq(openFaq === idx ? null : idx);

  // Calculadora interativa de comissões salvas
  const [leadsMes, setLeadsMes] = useState(120);
  const [comissaoMedia, setComissaoMedia] = useState(8500);

  // Estimativa: responder em 5 segundos converte cerca de 2% a mais de leads que antes esfriavam
  const negociosExtras = Math.max(1, Math.round(leadsMes * 0.02));
  const faturamentoExtraMensal = negociosExtras * comissaoMedia;

  const faqs = [
    {
      q: "Como o assistente atende os leads que chegam do Zap Imóveis, VivaReal ou OLX?",
      a: "Assim que o cliente preenche o formulário no portal ou clica no botão do anúncio, o assistente envia uma mensagem de boas-vindas no WhatsApp dele em menos de 10 segundos com a foto e a ficha do imóvel que ele procurou, iniciando o diálogo enquanto o interesse está no auge."
    },
    {
      q: "O corretor humano vai ser substituído pelo robô?",
      a: "De maneira alguma! O assistente faz apenas o papel do 'filtro': ele atende rápido, tira dúvidas básicas (condomínio, IPTU, vagas), pergunta a preferência de bairro e a forma de pagamento (à vista, financiamento ou permuta). Quando o lead se mostra qualificado e quer visitar, o corretor assume a conversa já sabendo exatamente o que o cliente quer."
    },
    {
      q: "O sistema funciona tanto para Vendas quanto para Locação?",
      a: "Sim! Criamos caminhos separados. Para quem quer alugar, o assistente pode orientar sobre garantias (seguro fiança, caução) e enviar imóveis no perfil. Para quem quer comprar, ele qualifica o potencial de financiamento, se tem FGTS e agenda visitas presenciais."
    },
    {
      q: "Proprietários também conseguem cadastrar imóveis pelo WhatsApp?",
      a: "Sim. O sistema conta com um módulo de captação onde o proprietário clica em 'Quero Vender ou Alugar meu Imóvel', manda o endereço, características e fotos. Essas informações chegam mastigadas na mesa do seu setor de captação."
    },
    {
      q: "Como o sistema evita o corretor perder tempo esperando cliente na portaria (no-show)?",
      a: "3 horas antes da visita, o sistema envia uma confirmação ativa com botão no WhatsApp do cliente pedindo 'Confirmar Presença' ou 'Remarcar', além de enviar a localização GPS exata e orientações de portaria. Se o cliente desmarcar, o corretor é avisado a tempo de não perder a viagem."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-slate text-slate-200 pt-24 overflow-x-hidden">
      <SEOHead
        title="Automação de WhatsApp para Imobiliárias e Corretores | Responda Leads em 5 Segundos"
        description="Pare de perder clientes para a concorrência por demora no WhatsApp. Qualifique compradores e inquilinos na hora, envie fotos de imóveis e agende visitas automáticas."
        canonical="https://agentecstar.com/automacao-para-imobiliarias"
        robots="index, follow"
      />
      <Header />

      {/* ─── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        {/* Luzes de fundo decorativas */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-brand-cyan/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs md:text-sm font-semibold uppercase tracking-wider mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <Building2 className="h-4 w-4" /> Solução para Imobiliárias, Construtoras e Corretores
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Responda leads de portais em 5 segundos e <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-brand-cyan to-white">coloque corretores só na frente de quem compra</span>.
            </h1>

            <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
              Mais de 70% das pessoas fecham imóvel com o <strong className="text-white font-semibold">primeiro corretor que responde</strong>. Nosso assistente inteligente qualifica o orçamento, envia fotos do imóvel na hora e agenda visitas no WhatsApp 24 horas por dia.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button 
                size="lg"
                onClick={() => window.open(whatsappLink, '_blank')}
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-6 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.4)] transform hover:scale-105 transition-all text-base flex items-center justify-center gap-3 group"
              >
                <MessageSquare className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Quero Testar na Minha Imobiliária
              </Button>

              <button
                onClick={() => document.getElementById('como-resolve')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-6 py-4 rounded-xl border border-slate-700 hover:border-emerald-400/40 bg-slate-800/60 hover:bg-slate-800 text-slate-200 font-semibold transition-all text-sm flex items-center justify-center gap-2"
              >
                Ver Demonstração de Triagem <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Micro-prova e números do mercado */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-800/80 text-left">
              <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                <p className="text-2xl lg:text-3xl font-black text-emerald-400 mb-1">5 seg</p>
                <p className="text-xs text-slate-400 leading-snug">Tempo de resposta para leads dos portais</p>
              </div>
              <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                <p className="text-2xl lg:text-3xl font-black text-white mb-1">-75%</p>
                <p className="text-xs text-slate-400 leading-snug">Menos tempo perdido com curiosos sem renda</p>
              </div>
              <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                <p className="text-2xl lg:text-3xl font-black text-brand-cyan mb-1">Zero</p>
                <p className="text-xs text-slate-400 leading-snug">Corretor plantado na portaria sem cliente aparecer</p>
              </div>
              <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                <p className="text-2xl lg:text-3xl font-black text-brand-fuchsia mb-1">24/7</p>
                <p className="text-xs text-slate-400 leading-snug">Agendamento de visitas no domingo e à noite</p>
              </div>
            </div>
          </div>

          {/* ─── SIMULADOR VISUAL DE CONVERSA IMOBILIÁRIA ─────────── */}
          <div className="mt-12 max-w-3xl mx-auto bg-slate-900/90 rounded-3xl p-4 md:p-8 border border-slate-700/60 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-slate-950 font-bold">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Imobiliária Prime Campinas</h4>
                  <span className="text-xs text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Triagem e Plantão 24h
                  </span>
                </div>
              </div>
              <span className="text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-full">Exemplo Real de Triagem</span>
            </div>

            {/* Balões da conversa imobiliária */}
            <div className="space-y-4 text-xs md:text-sm">
              {/* Lead vindo do portal */}
              <div className="flex justify-end">
                <div className="bg-[#005c4b] text-white p-3.5 rounded-2xl rounded-tr-sm max-w-[85%] shadow">
                  <p>Oi! Vi o anúncio do apartamento de 3 dormitórios no Cambuí pelo Zap Imóveis. Ainda está disponível?</p>
                  <span className="text-[10px] text-emerald-200/70 block text-right mt-1">19:35</span>
                </div>
              </div>

              {/* Resposta em 5 segundos com fotos e detalhes */}
              <div className="flex justify-start">
                <div className="bg-[#202c33] text-slate-200 p-3.5 rounded-2xl rounded-tl-sm max-w-[85%] border border-slate-700/40 shadow">
                  <p className="font-semibold text-emerald-400 mb-1">Olá! Sim, está disponível! 🏢</p>
                  <p className="mb-2">Apartamento no Edifício Solar do Cambuí (Cód. AP-384):<br />• 3 Quartos (1 Suíte) | 2 Vagas Cobertas<br />• Varanda Gourmet com Churrasqueira<br />• Valor: R$ 780.000 (Cond.: R$ 850)</p>
                  <div className="bg-slate-950/80 p-2.5 rounded-lg border border-slate-800 text-slate-300 text-xs mb-2">
                    📸 <strong>Álbum com 15 Fotos & Vídeo Tour enviado</strong>
                  </div>
                  <p>Você tem interesse em agendar uma visita ou gostaria de fazer uma simulação de financiamento primeiro?</p>
                  <span className="text-[10px] text-slate-400 block text-right mt-1">19:35</span>
                </div>
              </div>

              {/* Cliente responde com qualificação */}
              <div className="flex justify-end">
                <div className="bg-[#005c4b] text-white p-3 rounded-2xl rounded-tr-sm max-w-[70%] shadow">
                  <p>Quero agendar visita! Já tenho uma carta de crédito de consórcio contemplada.</p>
                  <span className="text-[10px] text-emerald-200/70 block text-right mt-1">19:37</span>
                </div>
              </div>

              {/* Conexão com o Corretor Especialista */}
              <div className="flex justify-start">
                <div className="bg-[#202c33] text-slate-200 p-3.5 rounded-2xl rounded-tl-sm max-w-[85%] border border-slate-700/40 shadow">
                  <p className="text-emerald-400 font-bold mb-1">Excelente notícia! 🎯</p>
                  <p>O <strong>corretor Marcelo</strong>, especialista na região do Cambuí, acabou de ser acionado com o seu horário reservado para <strong>Amanhã às 15:30</strong>. Ele já está no chat com a chave pronta para te receber.</p>
                  <span className="text-[10px] text-slate-400 block text-right mt-1">19:37</span>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-slate-400 mt-6 pt-4 border-t border-slate-800">
              ⚡ O lead não esfriou, foi qualificado com carta contemplada e a visita foi pré-agendada em 2 minutos.
            </p>
          </div>
        </div>
      </section>

      {/* ─── DORES REAIS DA IMOBILIÁRIA E DO CORRETOR ────────────── */}
      <section className="py-20 bg-slate-950 border-y border-slate-800/80">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
              <AlertTriangle className="h-4 w-4" /> Dores Que Custam Comissões Altas
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Por que a sua imobiliária gasta com anúncios e <span className="text-red-400">perde as melhores vendas</span>?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              No mercado imobiliário moderno, a agilidade do primeiro contato define quem assina a escritura ou o contrato de locação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Dor 1 */}
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-red-500/20 hover:border-red-500/40 transition-all flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">A Morte do Lead por Demora</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  O cliente manda mensagem no sábado à tarde. Sua equipe só vê na segunda-feira às 9h. Nesse intervalo, ele já chamou outros 3 corretores e já fechou a visita com quem respondeu na hora. Dinheiro de anúncio jogado no lixo.
                </p>
              </div>
            </div>

            {/* Dor 2 */}
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-red-500/20 hover:border-red-500/40 transition-all flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Corretor Perdendo o Dia com 'Curiosos'</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  O corretor passa 40 minutos tirando dúvidas e mandando fotos para uma pessoa que não tem renda compatível, não tem entrada ou só estava especulando por diversão, enquanto o cliente com dinheiro na mão fica esperando.
                </p>
              </div>
            </div>

            {/* Dor 3 */}
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-red-500/20 hover:border-red-500/40 transition-all flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">O 'Bolo' na Portaria do Imóvel (No-Show)</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  O corretor cruza a cidade no trânsito, pega as chaves, chega na portaria e o cliente simplesmente não aparece e nem atende a ligação. Perda de tempo, combustível e desmotivação total da equipe.
                </p>
              </div>
            </div>

            {/* Dor 4 */}
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-red-500/20 hover:border-red-500/40 transition-all flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                <Home className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Imóveis Excelentes Encalhados na Carteira</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Você tem um imóvel perfeito no bairro X com preço excelente, mas não tem como cruzar no WhatsApp quem procurava aquele perfil há 2 meses. O imóvel fica meses parado sem visita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CALCULADORA DE COMISSÕES RECUPERADAS ────────────────── */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-900 border-2 border-emerald-500/30 rounded-3xl p-6 md:p-12 shadow-[0_0_50px_rgba(16,185,129,0.15)]">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase bg-emerald-500/10 px-4 py-1 rounded-full border border-emerald-500/20">
                Simulador de Comissões
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-white mt-4">
                Quanto a sua imobiliária recupera evitando a perda de leads?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Leads recebidos por mês (portais + anúncios): <strong className="text-emerald-400 text-lg">{leadsMes} contatos</strong>
                  </label>
                  <input 
                    type="range" 
                    min="20" 
                    max="500" 
                    step="10"
                    value={leadsMes} 
                    onChange={(e) => setLeadsMes(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Comissão média por transação fechada: <strong className="text-emerald-400 text-lg">R$ {comissaoMedia.toLocaleString('pt-BR')}</strong>
                  </label>
                  <input 
                    type="range" 
                    min="2000" 
                    max="30000" 
                    step="500"
                    value={comissaoMedia} 
                    onChange={(e) => setComissaoMedia(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                </div>
              </div>

              <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 text-center space-y-4">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Negócios extras recuperados ao responder em 5s:</p>
                  <p className="text-2xl font-bold text-white">+{negociosExtras} {negociosExtras === 1 ? 'venda/locação' : 'vendas/locações'} por mês</p>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Comissões adicionais recuperadas:</p>
                  <p className="text-3xl md:text-4xl font-black text-emerald-400">
                    + R$ {faturamentoExtraMensal.toLocaleString('pt-BR')}<span className="text-xs text-slate-400 font-normal">/mês</span>
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Equivale a até <strong>R$ {(faturamentoExtraMensal * 12).toLocaleString('pt-BR')}</strong> a mais de honorários por ano com os mesmos anúncios que você já paga hoje.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                onClick={() => window.open(whatsappLink, '_blank')}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-5 rounded-xl shadow-lg transition-all transform hover:scale-105"
              >
                Quero Recuperar Essas Vendas na Minha Imobiliária
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMO A GENTE RESOLVE ISSO NA PRÁTICA ──────────────────── */}
      <section id="como-resolve" className="py-20 bg-slate-900/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Como funciona na prática: <span className="text-gradient-cyber">os 4 pilares da imobiliária ágil</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Simples para o cliente no WhatsApp, libertador para o corretor no campo e lucrativo para a imobiliária.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pilar 1 */}
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 relative">
              <span className="text-5xl font-black text-slate-800 absolute top-4 right-6">01</span>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Atendimento Relâmpago 24 Horas</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                O interessado preenche o portal às 22h de um domingo e o WhatsApp dele apita na hora com fotos, vídeo e valores do imóvel. Enquanto o concorrente só vai responder na segunda-feira, a sua imobiliária já iniciou o relacionamento.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 relative">
              <span className="text-5xl font-black text-slate-800 absolute top-4 right-6">02</span>
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Filtro e Qualificação de Bolso</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                O assistente pergunta de forma natural: se busca para morar ou investimento, valor de entrada, se pretende financiar ou dar carro na troca. O corretor humano só entra na conversa quando o lead está qualificado e pronto para fechar.
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 relative">
              <span className="text-5xl font-black text-slate-800 absolute top-4 right-6">03</span>
              <div className="w-12 h-12 rounded-xl bg-brand-purple/20 text-brand-purple-light flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Confirmação Anti-Bolo de Visitas</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                3 horas antes da visita, o cliente recebe um lembrete no WhatsApp com localização no Waze/Maps e botão de confirmação. Se ele remarcar, o corretor é avisado instantaneamente no celular e não perde tempo no trânsito.
              </p>
            </div>

            {/* Pilar 4 */}
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 relative">
              <span className="text-5xl font-black text-slate-800 absolute top-4 right-6">04</span>
              <div className="w-12 h-12 rounded-xl bg-brand-fuchsia/10 text-brand-fuchsia flex items-center justify-center mb-4">
                <Key className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Captação Automática de Imóveis</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Proprietários que desejam vender ou alugar enviam fotos e dados do imóvel pelo próprio WhatsApp da imobiliária. A ficha chega formatada diretamente para a equipe de captação avaliar e cadastrar.
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
              Imobiliária Tradicional vs Imobiliária com AgentecStar
            </h2>
            <p className="text-slate-400">Veja a transformação no ritmo de vendas dos seus corretores:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Tradicional */}
            <div className="bg-red-950/20 border border-red-900/40 p-6 md:p-8 rounded-2xl">
              <div className="flex items-center gap-2 text-red-400 font-bold mb-6 text-lg">
                <X className="w-6 h-6 bg-red-500/20 rounded-full p-1" /> Como a maioria opera hoje:
              </div>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Lead do portal passa horas esperando resposta e fecha com outra imobiliária.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Corretor perde 3 horas por dia respondendo curiosos que não têm entrada.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Corretor fica esperando o cliente na portaria e leva bolo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Nenhum atendimento após as 18h ou nos finais de semana.</span>
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
                  <span><strong>Lead atendido em 5 segundos</strong>, dia e noite, com fotos e tour virtual.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Corretor fala só com leads qualificados</strong> com renda e interesse real.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Visitas 100% confirmadas</strong> com antecedência por WhatsApp.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Plantão 24/7</strong> captando vendas até no domingo à noite.</span>
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
              Perguntas Frequentes de Donos de Imobiliária e Corretores
            </h2>
            <p className="text-slate-400">Tire suas dúvidas antes de acelerar suas vendas:</p>
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
                  <ChevronDown className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_70%)]" />
        
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Quer ver como esse sistema vai qualificar seus leads <span className="text-emerald-400">já na próxima semana</span>?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Fale conosco no WhatsApp agora mesmo. Mostramos uma demonstração ao vivo da triagem de imóveis funcionando no seu próprio celular.
          </p>

          <Button 
            size="lg"
            onClick={() => window.open(whatsappLink, '_blank')}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-10 py-7 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.5)] transform hover:scale-105 transition-all text-lg flex items-center justify-center gap-3 mx-auto"
          >
            <MessageSquare className="h-6 w-6" />
            Solicitar Demonstração Gratuita no WhatsApp
          </Button>

          <p className="text-xs text-slate-500 mt-4">
            Instalação rápida e suporte dedicado • Sem taxas ocultas • Para imobiliárias de todos os portes
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Imobiliarias;
