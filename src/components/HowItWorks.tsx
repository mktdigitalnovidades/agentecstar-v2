
const HowItWorks = () => {
  const steps = [
    {
      num: '01',
      title: 'Treinamento',
      desc: 'Treinamos a IA com as informações específicas da sua empresa, produtos e tom de voz.',
      color: '#3ECED0',
    },
    {
      num: '02',
      title: 'Integração',
      desc: 'Conectamos com WhatsApp Business, Instagram Direct, n8n e os sistemas que você já usa.',
      color: '#D946EF',
    },
    {
      num: '03',
      title: 'Automação',
      desc: 'Seus clientes recebem atendimento inteligente 24/7. Você acompanha tudo em tempo real.',
      color: '#542FA3',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)' }}>
      {/* Linha conectora decorativa */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px opacity-10 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 0%, #3ECED0 30%, #D946EF 70%, transparent 100%)' }} />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Como <span className="text-gradient-cyber">funciona?</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
            Um processo simples e rápido para transformar o atendimento da sua empresa
          </p>
        </div>

        {/* Bloco principal */}
        <div className="max-w-3xl mx-auto mb-16 p-8 rounded-2xl" style={{
          background: 'rgba(30,41,59,0.6)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(62,206,208,0.2)',
          boxShadow: '0 0 40px rgba(62,206,208,0.08)',
        }}>
          <h3 className="text-2xl font-bold text-white text-center mb-3">Inteligência Artificial Personalizada</h3>
          <p className="text-center leading-relaxed" style={{ color: '#94A3B8' }}>
            Nossos agentes são treinados com as informações da sua empresa e passam a responder clientes de forma personalizada, com agilidade e no seu tom de voz.
          </p>
        </div>

        {/* 3 passos */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative text-center group">
              {/* Número grande */}
              <div className="text-8xl font-black mb-4 select-none opacity-10 absolute -top-4 left-1/2 -translate-x-1/2" style={{ color: s.color }}>
                {s.num}
              </div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-black transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${s.color}20`, border: `2px solid ${s.color}`, color: s.color, boxShadow: `0 0 20px ${s.color}33` }}>
                  {s.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p style={{ color: '#94A3B8' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
