
import { Heart, ShoppingBag, Calendar, Car, PartyPopper, Scissors } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useRef } from "react";

const UseCases = () => {
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const carouselApiRef = useRef<any>(null);

  const useCases = [
    {
      icon: Heart,
      title: "Clínicas",
      description: "Confirmação e agendamento automático de consultas com integração via WhatsApp.",
      features: ["Agendamento 24/7", "Confirmação automática", "Lembretes de consulta", "Histórico médico"],
      color: "#D946EF" // Fuchsia
    },
    {
      icon: ShoppingBag,
      title: "Comércio",
      description: "Suporte a pedidos, catálogo de produtos e solução de dúvidas frequentes em segundos.",
      features: ["Catálogo automático", "Status de pedidos", "Dúvidas frequentes", "Suporte pós-venda"],
      color: "#3ECED0" // Cyan
    },
    {
      icon: Calendar,
      title: "Pet Shops",
      description: "Agendamentos de banho, tosa e consultas veterinárias de forma independente.",
      features: ["Agendamento online", "Lembrete de serviços", "Histórico do pet", "Promoções automáticas"],
      color: "#542FA3" // Purple
    },
    {
      icon: Car,
      title: "Lojas de Veículos",
      description: "Agendamento de test drive automático e consulta dinâmica de estoque via IA.",
      features: ["Test drive automático", "Consulta de estoque", "Financiamento", "Agendamento de visitas"],
      color: "#00E5FF" // Bright Cyan
    },
    {
      icon: PartyPopper,
      title: "Festas e Eventos",
      description: "Organização e envio de convites interativos, orçamentos rápidos e agendamento.",
      features: ["Confirmação de presença", "Cardápio automático", "Orçamentos imediatos", "Agenda de eventos"],
      color: "#C55C8A" // Pink
    },
    {
      icon: Scissors,
      title: "Salões de Beleza",
      description: "Gestão inteligente da agenda dos profissionais e tratamentos capilares.",
      features: ["Agendamento online", "Histórico de serviços", "Lembretes automáticos", "Promoções via IA"],
      color: "#3ECED0" 
    }
  ];

  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (carouselApiRef.current) {
          carouselApiRef.current.scrollNext();
        }
      }, 5000);
    };

    const stopAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    };

    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const handleMouseEnter = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    autoScrollRef.current = setInterval(() => {
      if (carouselApiRef.current) {
        carouselApiRef.current.scrollNext();
      }
    }, 5000);
  };

  return (
    <section id="use-cases" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #1E293B 0%, #190C59 100%)' }}>
      {/* Background Decorativo */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.1) 0%, transparent 70%)' }}></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(62,206,208,0.08) 0%, transparent 70%)' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Casos de <span className="text-gradient-cyber">Uso</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Veja como diferentes tipos de negócio maximizam lucros com nossos agentes de IA
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
            setApi={(api) => { carouselApiRef.current = api; }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <CarouselContent className="-ml-2 md:-ml-4 py-8">
              {useCases.map((useCase, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:-translate-y-3 group"
                    style={{ 
                      background: 'rgba(30,41,59,0.8)', 
                      backdropFilter: 'blur(16px)',
                      border: `1px solid rgba(62,206,208,0.15)`,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 40px ${useCase.color}44, inset 0 0 20px ${useCase.color}11`;
                      (e.currentTarget as HTMLDivElement).style.borderColor = `${useCase.color}66`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(62,206,208,0.15)';
                    }}
                  >
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                      style={{ background: `linear-gradient(135deg, ${useCase.color}22, ${useCase.color}44)`, border: `1px solid ${useCase.color}66` }}>
                      <useCase.icon className="h-8 w-8" style={{ color: useCase.color }} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{useCase.title}</h3>
                    <p className="text-slate-300 mb-6 text-sm leading-relaxed">{useCase.description}</p>
                    
                    <div className="space-y-3">
                      {useCase.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: useCase.color, boxShadow: `0 0 8px ${useCase.color}` }}></div>
                          <span className="text-slate-400 text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex border-slate-700 bg-slate-800/80 text-white hover:bg-slate-700 hover:text-brand-cyan" />
            <CarouselNext className="hidden md:flex border-slate-700 bg-slate-800/80 text-white hover:bg-slate-700 hover:text-brand-cyan" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
