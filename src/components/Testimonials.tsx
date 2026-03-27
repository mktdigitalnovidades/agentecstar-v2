
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useRef } from "react";

const Testimonials = () => {
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const carouselApiRef = useRef<any>(null);

  const testimonials = [
    {
      text: "Depois da automação com IA, nosso atendimento ficou muito mais rápido. Nossos clientes elogiaram a agilidade!",
      author: "Clínica Vital",
      rating: 5
    },
    {
      text: "Com a AgentecStar conseguimos organizar os atendimentos e agendamentos com muito mais eficiência.",
      author: "AutoCenter SP",
      rating: 5
    },
    {
      text: "A automação revolucionou nosso processo de vendas. Conseguimos atender 3x mais clientes no mesmo tempo.",
      author: "Loja Fashion",
      rating: 5
    },
    {
      text: "Nossos agendamentos nunca mais ficaram desorganizados. O sistema é incrível e muito fácil de usar.",
      author: "Salão Beauty",
      rating: 5
    },
    {
      text: "Reduzimos o tempo de resposta em 80% e aumentamos a satisfação dos nossos clientes significativamente.",
      author: "Restaurante Gourmet",
      rating: 5
    },
    {
      text: "A integração com WhatsApp foi perfeita. Nossos clientes adoraram a praticidade do atendimento.",
      author: "Academia Fitness",
      rating: 5
    },
    {
      text: "Conseguimos automatizar todo o processo de confirmação de consultas. Economizamos horas de trabalho.",
      author: "Consultório Médico",
      rating: 5
    },
    {
      text: "O ROI foi impressionante. Em 2 meses já tínhamos recuperado o investimento com o aumento de vendas.",
      author: "E-commerce Tech",
      rating: 5
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
    <section id="testimonials" className="py-24" style={{ background: 'linear-gradient(180deg, #1E293B 0%, #0F172A 100%)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Depoimentos
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
            Veja o que nossos clientes dizem sobre nossa solução de IA
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
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="hover:shadow-lg transition-all duration-300 border-0 h-full" style={{ background: 'rgba(30,41,59,0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(62,206,208,0.12)' }}>
                    <CardHeader>
                      <div className="flex space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="text-base mb-4 italic leading-relaxed" style={{ color: '#CBD5E1' }}>
                        "{testimonial.text}"
                      </blockquote>
                      <cite className="font-semibold" style={{ color: '#3ECED0' }}>
                        – {testimonial.author}
                      </cite>
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

export default Testimonials;
