
import { Bot, Users, MessageSquare, Calendar, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Atendimento automatizado com IA",
      description: "Respostas inteligentes e personalizadas 24/7 para seus clientes",
      color: '#3ECED0',
    },
    {
      icon: Users,
      title: "Geração e qualificação de leads",
      description: "Identifique e qualifique potenciais clientes automaticamente",
      color: '#D946EF',
    },
    {
      icon: MessageSquare,
      title: "Respostas instantâneas personalizadas",
      description: "Mensagens customizadas com o tom de voz da sua empresa",
      color: '#542FA3',
    },
    {
      icon: Calendar,
      title: "Agendamentos e suporte automático",
      description: "Gestão completa de agendamentos e suporte técnico integrado",
      color: '#C55C8A',
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #190C59 0%, #1E293B 100%)' }}>
      {/* Grid de pontos */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, rgba(62,206,208,0.5) 1px, transparent 1px)`,
        backgroundSize: '48px 48px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 animate-pulse" style={{ color: '#3ECED0' }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#3ECED0' }}>Nossos Serviços</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O que <span className="text-gradient-cyber">fazemos</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
            Soluções completas de automação com IA para transformar o atendimento da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group p-6 rounded-2xl text-center transition-all duration-400 hover:-translate-y-2"
              style={{
                background: 'rgba(30,41,59,0.7)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${s.color}22`,
                boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${s.color}40, 0 4px 24px rgba(0,0,0,0.3)` }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.25)' }}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${s.color}1A`, border: `1px solid ${s.color}55` }}>
                <s.icon className="h-8 w-8" style={{ color: s.color }} />
              </div>
              <h3 className="text-base font-bold text-white mb-3 leading-snug">{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>{s.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="max-w-xl mx-auto p-6 rounded-2xl" style={{
            background: 'rgba(62,206,208,0.06)',
            border: '1px solid rgba(62,206,208,0.2)',
          }}>
            <h3 className="text-xl font-bold text-white mb-2">Pronto para revolucionar seu atendimento?</h3>
            <p style={{ color: '#94A3B8' }}>Descubra como nossa IA pode transformar sua empresa em Campinas e região</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
