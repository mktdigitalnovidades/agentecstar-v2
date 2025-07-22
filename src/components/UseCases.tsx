
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
      description: "Confirmação e agendamento automático de consultas.",
      features: ["Agendamento 24/7", "Confirmação automática", "Lembretes de consulta", "Histórico médico"]
    },
    {
      icon: ShoppingBag,
      title: "Comércio",
      description: "Suporte a pedidos e dúvidas frequentes.",
      features: ["Catálogo automático", "Status de pedidos", "Dúvidas frequentes", "Suporte pós-venda"]
    },
    {
      icon: Calendar,
      title: "Pet Shops",
      description: "Agendamento de banho e tosa via WhatsApp.",
      features: ["Agendamento online", "Lembrete de serviços", "Histórico do pet", "Promoções automáticas"]
    },
    {
      icon: Car,
      title: "Lojas de Veículos",
      description: "Agendamento de test drive e consulta de estoque.",
      features: ["Test drive automático", "Consulta de estoque", "Financiamento", "Agendamento de visitas"]
    },
    {
      icon: PartyPopper,
      title: "Festas e Eventos",
      description: "Organização e confirmação de eventos especiais.",
      features: ["Confirmação de presença", "Cardápio automático", "Orçamentos", "Agenda de eventos"]
    },
    {
      icon: Scissors,
      title: "Salão de Cabeleireiro",
      description: "Agendamento de cortes e tratamentos capilares.",
      features: ["Agendamento online", "Histórico de serviços", "Lembretes automáticos", "Promoções personalizadas"]
    }
  ];

  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (carouselApiRef.current) {
          carouselApiRef.current.scrollNext();
        }
      }, 4000);
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
    }, 4000);
  };

  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Casos de Uso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como diferentes tipos de negócio se beneficiam da nossa automação
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={(api) => {
              carouselApiRef.current = api;
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {useCases.map((useCase, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group h-full">
                    <CardHeader className="text-center">
                      <div className="w-20 h-20 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <useCase.icon className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-gray-900">
                        {useCase.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-gray-600">
                        {useCase.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {useCase.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-brand-purple rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
