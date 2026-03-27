
import { TrendingUp, Clock, Heart, Sparkles, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumente seu faturamento com menos esforço",
      description: "Converta mais leads em vendas com atendimento automatizado e personalizado, disponível 24 horas por dia.",
      color: '#3ECED0',
      glow: 'rgba(62,206,208,0.25)',
    },
    {
      icon: Clock,
      title: "Economize tempo da equipe com respostas inteligentes",
      description: "Libere sua equipe para focar no que importa enquanto a IA cuida do atendimento básico e repetitivo.",
      color: '#D946EF',
      glow: 'rgba(217,70,239,0.25)',
    },
    {
      icon: Heart,
      title: "Crie experiências mais satisfatórias para seus clientes",
      description: "Atendimento rápido, preciso e disponível 24h por dia, 7 dias por semana — sem fila, sem espera.",
      color: '#542FA3',
      glow: 'rgba(84,47,163,0.25)',
    },
  ];

  const stats = [
    { value: '+300%', label: 'Aumento na conversão', color: '#3ECED0' },
    { value: '24/7',  label: 'Atendimento contínuo',   color: '#D946EF' },
    { value: '-80%',  label: 'Redução no tempo de resposta', color: '#542FA3' },
  ];

  return (
    <section id="benefits" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #1E293B 0%, #0F172A 100%)' }}>
      {/* Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(62,206,208,0.08) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(84,47,163,0.1) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 animate-pulse" style={{ color: '#3ECED0' }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#3ECED0' }}>Vantagens</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Benefícios da <span className="text-gradient-cyber">Automação com IA</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
            Descubra como nossa tecnologia pode revolucionar o atendimento da sua empresa em Campinas
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2"
              style={{
                background: 'rgba(30,41,59,0.6)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${b.color}22`,
                boxShadow: `0 4px 24px rgba(0,0,0,0.2)`,
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 30px ${b.glow}, 0 4px 24px rgba(0,0,0,0.3)`)}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.2)')}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110" style={{ background: `${b.color}22`, border: `1px solid ${b.color}44` }}>
                <b.icon className="h-7 w-7" style={{ color: b.color }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 leading-snug">{b.title}</h3>
              <p className="leading-relaxed text-sm" style={{ color: '#94A3B8' }}>{b.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center p-6 rounded-2xl" style={{ background: `${s.color}14`, border: `1px solid ${s.color}33` }}>
              <div className="text-4xl font-black mb-2" style={{ color: s.color }}>{s.value}</div>
              <div className="text-sm font-medium" style={{ color: '#CBD5E1' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;