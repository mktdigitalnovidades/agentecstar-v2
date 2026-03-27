
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
      color: "#D946EF",
      image: "/clinic_background.png"
    },
    {
      icon: ShoppingBag,
      title: "Comércio",
      description: "Suporte a pedidos, catálogo de produtos e solução de dúvidas frequentes.",
      features: ["Catálogo automático", "Status de pedidos", "Dúvidas frequentes", "Suporte pós-venda"],
      color: "#3ECED0",
      image: "/retail_background.png"
    },
    {
      icon: Calendar,
      title: "Pet Shops",
      description: "Agendamentos de banho, tosa e consultas veterinárias de forma independente.",
      features: ["Agendamento online", "Lembrete de serviços", "Histórico do pet", "Promoções automáticas"],
      color: "#542FA3",
      image: "/petshop_background.png"
    },
    {
      icon: Car,
      title: "Veículos",
      description: "Agendamento de test drive automático e consulta de estoque via IA.",
      features: ["Test drive automático", "Consulta de estoque", "Financiamento", "Agendamento de visitas"],
      color: "#00E5FF",
      image: "/dealership_background.png"
    },
    {
      icon: PartyPopper,
      title: "Eventos",
      description: "Organização e envio de convites interativos, orçamentos e agendamento.",
      features: ["Confirmação de presença", "Cardápio automático", "Orçamentos imediatos", "Agenda de eventos"],
      color: "#C55C8A",
      image: "/events_background.png"
    },
    {
      icon: Scissors,
      title: "Salões",
      description: "Gestão inteligente da agenda dos profissionais e tratamentos capilares.",
      features: ["Agendamento online", "Histórico de serviços", "Lembretes automáticos", "Promoções via IA"],
      color: "#3ECED0",
      image: "/salon_background.png"
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
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Casos de <span className="text-gradient-cyber">Uso</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Veja como diferentes tipos de negócio maximizam lucros com a IA
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
                  <div 
                    className="relative group overflow-hidden rounded-2xl w-full h-[450px] cursor-pointer transition-transform duration-500 hover:-translate-y-2 border border-slate-700/50 hover:border-transparent" 
                    style={{
                      boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 50px ${useCase.color}66`;
                      (e.currentTarget as HTMLDivElement).style.borderColor = useCase.color;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(51,65,85,0.5)';
                    }}
                  >
                    {/* Imagem de Fundo Fotorealista */}
                    <img 
                      src={useCase.image} 
                      alt={useCase.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Overlay Escuro: Leve normalmente, muito escuro no hover para revelar texto (Requisito do Usuário) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500 bg-black/30 group-hover:bg-[#0f172a]/90 backdrop-blur-[2px] group-hover:backdrop-blur-md" />

                    {/* Estado Normal (Ícone e Título grandes no centro/fundo) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 bg-black/40 backdrop-blur-md border border-white/10" style={{ boxShadow: `0 0 30px ${useCase.color}40` }}>
                        <useCase.icon className="h-10 w-10" style={{ color: useCase.color }} />
                      </div>
                      <h3 className="text-3xl font-bold text-white tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{useCase.title}</h3>
                    </div>

                    {/* Estado Hover (Texto e Features que aparecem subindo) */}
                    <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-12 group-hover:translate-y-0">
                      <useCase.icon className="h-8 w-8 mb-4 drop-shadow-lg" style={{ color: useCase.color }} />
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{useCase.title}</h3>
                      <p className="text-slate-200 mb-6 text-sm leading-relaxed drop-shadow-md">{useCase.description}</p>
                      
                      <div className="w-full flex flex-col gap-2">
                        {useCase.features.map((feature, idx) => (
                          <div key={idx} className="text-xs font-medium text-white bg-white/10 backdrop-blur-md rounded-lg py-2 px-3 border border-white/20 shadow-sm flex items-center justify-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full" style={{ background: useCase.color, boxShadow: `0 0 5px ${useCase.color}` }}></div>
                             {feature}
                          </div>
                        ))}
                      </div>
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
