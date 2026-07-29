import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Bot, Sparkles, Send, X, Play, Phone, Video, MoreVertical } from "lucide-react";

/* ─── Script da conversa ─────────────────────────────────────────── */
type Sender = "agent" | "client";
interface ChatMsg {
  id: number;
  sender: Sender;
  text: string;
  time: string;
  /** ms de espera antes de mostrar o "typing" e depois a mensagem */
  delay: number;
}

const CONVERSATION: ChatMsg[] = [
  { id: 1,  sender: "agent",  text: "Oi! Vi que você visitou agentecstar.com. Qual é seu negócio?", time: "09:41", delay: 800 },
  { id: 2,  sender: "client", text: "Sou dono de loja online, tenho 100 pedidos por dia", time: "09:41", delay: 2200 },
  { id: 3,  sender: "agent",  text: "Bacana! E hoje, quando um cliente manda mensagem, como vocês respondem?", time: "09:42", delay: 2000 },
  { id: 4,  sender: "client", text: "Fica sem resposta até no outro dia... perco muitas vendas assim", time: "09:42", delay: 2400 },
  { id: 5,  sender: "agent",  text: "Entendi. Quantas mensagens vocês recebem por dia que ficam sem resposta?", time: "09:43", delay: 2200 },
  { id: 6,  sender: "client", text: "Umas 50-60 por dia", time: "09:43", delay: 1800 },
  { id: 7,  sender: "agent",  text: "Se você respondesse 100% delas em menos de 1 minuto, quanto a mais você venderia por mês?", time: "09:44", delay: 2500 },
  { id: 8,  sender: "client", text: "Pelo menos R$ 15 mil a mais...", time: "09:44", delay: 2000 },
  { id: 9,  sender: "agent",  text: "Pois é! A gente automatiza isso 24/7. Quer testar pra ver funcionando?", time: "09:45", delay: 2200 },
  { id: 10, sender: "client", text: "Toparia sim!", time: "09:45", delay: 1600 },
  { id: 11, sender: "agent",  text: "Ótimo! Libera um horário? Tenho amanhã 10h ou 14h. Qual prefere?", time: "09:46", delay: 2000 },
];

/* ─── Typing Indicator ───────────────────────────────────────────── */
const TypingDots = () => (
  <div className="flex items-end space-x-2">
    {/* Avatar */}
    <div className="w-7 h-7 bg-gradient-to-br from-brand-purple to-brand-accent rounded-full flex items-center justify-center flex-shrink-0 shadow">
      <Bot className="h-3.5 w-3.5 text-white" />
    </div>
    <div
      className="flex items-center space-x-1 rounded-2xl rounded-bl-sm px-3.5 py-2.5"
      style={{ background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.1)" }}
    >
      {[0, 0.18, 0.36].map((d, i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-bounce"
          style={{ animationDelay: `${d}s` }}
        />
      ))}
    </div>
  </div>
);

/* ─── Bubble ─────────────────────────────────────────────────────── */
const Bubble = ({ msg }: { msg: ChatMsg }) => {
  const isAgent = msg.sender === "agent";
  return (
    <div
      className={`flex items-end gap-2 ${isAgent ? "" : "justify-end"}`}
      style={{ animation: "msgIn 0.35s cubic-bezier(0.22,1,0.36,1) both" }}
    >
      {isAgent && (
        <div className="w-7 h-7 bg-gradient-to-br from-brand-purple to-brand-accent rounded-full flex items-center justify-center flex-shrink-0 shadow">
          <Bot className="h-3.5 w-3.5 text-white" />
        </div>
      )}
      <div className={`max-w-[78%] flex flex-col ${isAgent ? "items-start" : "items-end"}`}>
        <div
          className={`px-3.5 py-2.5 text-[13px] leading-[1.45] text-white ${
            isAgent
              ? "rounded-2xl rounded-bl-sm"
              : "rounded-2xl rounded-br-sm bg-gradient-to-r from-brand-accent to-brand-purple shadow-md shadow-brand-accent/20"
          }`}
          style={
            isAgent
              ? { background: "rgba(255,255,255,0.13)", border: "1px solid rgba(255,255,255,0.1)" }
              : {}
          }
        >
          {msg.text}
        </div>
        <span className="text-gray-500 text-[10px] mt-0.5 px-1">{msg.time}</span>
      </div>
      {!isAgent && (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center flex-shrink-0 text-white text-[9px] font-bold shadow">
          VC
        </div>
      )}
    </div>
  );
};

/* ─── Phone Chat Mockup ──────────────────────────────────────────── */
const PhoneChat = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  /* Sequência de animação */
  useEffect(() => {
    let cancelled = false;

    const runSequence = async () => {
      /* reset */
      setVisibleCount(0);
      setShowTyping(false);
      await sleep(600);

      for (let i = 0; i < CONVERSATION.length; i++) {
        if (cancelled) return;
        const msg = CONVERSATION[i];

        /* só mostra typing para mensagens do agente */
        if (msg.sender === "agent") {
          setShowTyping(true);
          await sleep(msg.delay);
          if (cancelled) return;
          setShowTyping(false);
          await sleep(80);
        } else {
          await sleep(msg.delay);
        }

        if (cancelled) return;
        setVisibleCount((c) => c + 1);
        await sleep(120);
      }

      /* pausa ao final e reinicia */
      await sleep(4000);
      if (!cancelled) runSequence();
    };

    runSequence();
    return () => { cancelled = true; };
  }, []);

  /* auto-scroll */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [visibleCount, showTyping]);

  return (
    /* ── Frame do celular ── */
    <div
      className="relative mx-auto"
      style={{ width: "min(320px, 92vw)", filter: "drop-shadow(0 30px 60px rgba(62,206,208,0.18)) drop-shadow(0 0 80px rgba(84,47,163,0.25))" }}
    >
      {/* Corpo do phone */}
      <div
        className="relative rounded-[2.8rem] overflow-hidden border-4"
        style={{
          borderColor: "rgba(255,255,255,0.18)",
          background: "rgba(8,12,30,0.97)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
          height: "min(600px, 75svh)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Notch / câmera */}
        <div className="flex-shrink-0 flex justify-center pt-3 pb-1">
          <div className="w-20 h-5 rounded-full flex items-center justify-center gap-1.5"
            style={{ background: "rgba(0,0,0,0.6)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/70" />
            <span className="w-8 h-1.5 rounded-full bg-gray-800" />
          </div>
        </div>

        {/* Status bar */}
        <div className="flex-shrink-0 flex justify-between items-center px-5 py-1 text-white/60 text-[10px]">
          <span>09:41</span>
          <div className="flex items-center gap-1">
            <span className="text-green-400">●</span>
            <span>5G</span>
            <span>🔋</span>
          </div>
        </div>

        {/* WhatsApp-style header */}
        <div
          className="flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5"
          style={{ background: "linear-gradient(90deg, rgba(84,47,163,0.6) 0%, rgba(62,206,208,0.25) 100%)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="relative flex-shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-brand-purple to-brand-accent rounded-full flex items-center justify-center shadow-lg">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-brand-dark animate-pulse" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm leading-tight truncate">AgentecStar IA</p>
            <p className="text-green-400 text-[10px]">online agora</p>
          </div>
          <div className="flex items-center gap-3 text-white/50">
            <Video className="h-4 w-4" />
            <Phone className="h-4 w-4" />
            <MoreVertical className="h-4 w-4" />
          </div>
        </div>

        {/* Mensagens */}
        <div
          className="flex-1 overflow-y-auto px-3 py-3 space-y-2.5 flex flex-col"
          style={{
            background: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E\"), linear-gradient(180deg, rgba(10,14,35,0.9) 0%, rgba(15,10,40,0.95) 100%)",
          }}
        >
          {/* Data header */}
          <div className="flex justify-center my-1">
            <span className="text-[10px] text-gray-500 bg-white/5 rounded-full px-3 py-0.5">Hoje</span>
          </div>

          {CONVERSATION.slice(0, visibleCount).map((msg) => (
            <Bubble key={msg.id} msg={msg} />
          ))}

          {showTyping && <TypingDots />}
          <div ref={bottomRef} />
        </div>

        {/* Input bar */}
        <div
          className="flex-shrink-0 flex items-center gap-2 px-3 py-3"
          style={{ background: "rgba(8,12,30,0.9)", borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="flex-1 rounded-2xl px-4 py-2 text-[12px] text-gray-500 border border-white/10"
            style={{ background: "rgba(255,255,255,0.07)" }}>
            Mensagem
          </div>
          <div className="w-8 h-8 flex-shrink-0 rounded-full bg-gradient-to-r from-brand-accent to-brand-purple flex items-center justify-center shadow">
            <Send className="h-3.5 w-3.5 text-white" />
          </div>
        </div>

        {/* Home bar */}
        <div className="flex-shrink-0 flex justify-center pb-2 pt-1">
          <div className="w-24 h-1 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Botão lateral do phone (decorativo) */}
      <div className="absolute right-[-6px] top-28 h-16 w-1.5 rounded-full bg-white/20" />
      <div className="absolute left-[-6px] top-20 h-10 w-1.5 rounded-full bg-white/20" />
      <div className="absolute left-[-6px] top-36 h-14 w-1.5 rounded-full bg-white/20" />
    </div>
  );
};

function sleep(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}

/* ─── Hero ───────────────────────────────────────────────────────── */
const Hero = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const whatsappLink =
    "https://wa.me/5519992288312?text=Olá! Gostaria de agendar uma consultoria gratuita sobre automação com IA.";

  return (
    <section
      id="hero"
      className="relative pt-20 bg-gradient-to-br from-brand-dark via-brand-navy to-brand-blue overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* keyframe inline para entrada de bolha */}
      <style>{`
        @keyframes msgIn {
          from { opacity: 0; transform: translateY(10px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
      `}</style>

      {/* ── Animated Background Blobs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-accent/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-brand-blue/10 to-brand-light-purple/10 rounded-full blur-3xl" />
      </div>

      {/* ── Dot-grid Overlay ── */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Main Grid ── */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-0"
          style={{ minHeight: "calc(100svh - 5rem)" }}
        >
          {/* ════════════════════════════════════
              LEFT — Copy (50%)
          ════════════════════════════════════ */}
          <div className="flex-1 flex flex-col justify-center py-10 lg:py-16 lg:pr-12 xl:pr-20 space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-brand-accent animate-pulse flex-shrink-0" />
              <span className="text-brand-accent font-semibold uppercase tracking-wider text-xs sm:text-sm">
                Automação com IA • Campinas, SP
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight">
                <span className="text-gradient bg-gradient-to-r from-white via-brand-accent to-white bg-clip-text text-transparent">
                  AgentecStar
                </span>
                <br />
                <span className="text-2xl md:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent leading-snug block mt-2">
                  Agentes de IA para WhatsApp — Campinas - SP e todo Brasil
                </span>
              </h1>
            </div>

            {/* Body */}
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
              AgentecStar desenvolve agentes de IA sob medida para o seu WhatsApp
              que atendem 24h, 7 dias por semana, respondendo em segundos.{" "}
              <br className="hidden sm:block" />
              <br className="hidden sm:block" />
              Você fica livre para fazer o que um dono de empresa deve fazer:{" "}
              <strong className="text-white">crescer.</strong>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => setChatOpen(true)}
                className="relative overflow-hidden bg-gradient-to-r from-brand-accent to-brand-purple hover:from-brand-purple hover:to-brand-blue text-white px-8 py-6 text-base md:text-lg font-bold shadow-2xl hover:shadow-brand-accent/40 transition-all duration-500 transform hover:scale-105 group tracking-wide animate-glow-pulse"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Play className="mr-2 h-5 w-5 fill-white group-hover:scale-110 transition-transform" />
                TESTAR AGORA
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-white/30 backdrop-blur-sm px-8 py-6 text-base md:text-lg font-semibold transition-all duration-300 hover:border-brand-accent text-sky-50 bg-indigo-600/30 hover:bg-indigo-500/50"
              >
                Saiba mais
              </Button>
            </div>

            {/* Social proof */}
            <p className="text-sm text-white/70 flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>Atendimento imediato</span>
              <span className="text-brand-accent/60">•</span>
              <span>Você testa a IA ao vivo</span>
              <span className="text-brand-accent/60">•</span>
              <span>Sem cadastro</span>
            </p>

            {/* Métricas */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {[
                { value: "+80%", label: "aumento de conversão" },
                { value: "<20s", label: "tempo de resposta" },
                { value: "24/7", label: "operacional" },
                { value: "3-4 sem", label: "retorno ROI" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2.5 border border-white/10 hover:border-brand-accent/40 transition-colors duration-300"
                >
                  <span className="text-brand-accent font-black text-base leading-none">{value}</span>
                  <span className="text-gray-300 text-[11px] font-medium mt-0.5 whitespace-nowrap">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ════════════════════════════════════
              RIGHT — Phone Chat Demo (50%)
          ════════════════════════════════════ */}
          <div className="flex-1 flex justify-center items-center lg:border-l lg:border-white/10 py-8 lg:py-16 lg:pl-12 xl:pl-20">
            {/* Glow halos */}
            <div className="relative">
              <div className="absolute -inset-16 bg-gradient-to-r from-brand-accent/15 to-brand-purple/15 rounded-full blur-3xl animate-pulse pointer-events-none" />
              <PhoneChat />
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden lg:flex flex-col items-center gap-1">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* ════════════════════════════════════
          Modal — Chat GPTMaker
      ════════════════════════════════════ */}
      {chatOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 lg:p-10"
          style={{ background: "rgba(10,10,20,0.85)", backdropFilter: "blur(8px)" }}
          onClick={() => setChatOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-fade-in"
            style={{
              background: "rgba(15,23,42,0.92)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(62,206,208,0.25)",
              boxShadow: "0 0 60px rgba(62,206,208,0.15), 0 0 120px rgba(84,47,163,0.1)",
              height: "min(780px, 90svh)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do modal */}
            <div
              className="flex items-center justify-between px-6 py-4 border-b border-white/10 flex-shrink-0"
              style={{
                background: "linear-gradient(90deg, rgba(84,47,163,0.4) 0%, rgba(62,206,208,0.15) 100%)",
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-gradient-to-br from-brand-purple to-brand-accent rounded-full flex items-center justify-center shadow-lg">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">AgentecStar IA</p>
                  <p className="text-green-400 text-xs font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                    Online agora
                  </p>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/15 text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Fechar chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Iframe */}
            <div className="flex-1 min-h-0">
              <iframe
                src="https://app.gptmaker.ai/widget/3F6DBD69E0FB937DA5B772785F2395E5/iframe"
                width="100%"
                height="100%"
                allow="microphone;"
                frameBorder={0}
                title="AgentecStar IA — Converse agora"
                style={{ display: "block", border: "none" }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;