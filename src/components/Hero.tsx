import { useState, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, X, Play } from "lucide-react";

// Carregamento Lazy (dinâmico) do celular simulado para melhorar a performance inicial do Mobile
const PhoneChat = lazy(() => import("./PhoneChat"));

const PhoneSkeleton = () => (
  <div
    className="mx-auto rounded-[2.8rem] border-4 flex items-center justify-center"
    style={{
      width: "min(320px, 92vw)",
      height: "min(600px, 75svh)",
      borderColor: "rgba(255,255,255,0.18)",
      background: "rgba(8,12,30,0.97)",
      boxShadow: "0 30px 60px rgba(62,206,208,0.18)",
    }}
  >
    <div className="text-white/30 text-xs animate-pulse">Carregando demo...</div>
  </div>
);

const Hero = () => {
  const [chatOpen, setChatOpen] = useState(false);

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
                  Atendimento Automático no WhatsApp em Campinas e Região
                </span>
              </h1>
            </div>

            {/* Body */}
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
              Chega de perder vendas! Tenha um <strong className="text-white">chatbot que não deixa o cliente esperando</strong>. 
              Criamos automação de agendamento e atendimento personalizado no WhatsApp para clínicas, imobiliárias, oficinas e empresas em Campinas-SP e em todo o Brasil. 
              Atendimento ágil 24 horas por dia, 7 dias por semana.
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
              <Suspense fallback={<PhoneSkeleton />}>
                <PhoneChat />
              </Suspense>
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
                  <span className="text-white text-xs font-bold">AI</span>
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