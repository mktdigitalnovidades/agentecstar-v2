
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Users, MessageSquare, Calendar, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Atendimento automatizado com IA",
      description: "Respostas inteligentes e personalizadas 24/7 para seus clientes",
      gradient: "from-brand-purple to-brand-blue"
    },
    {
      icon: Users,
      title: "Geração e qualificação de leads",
      description: "Identifique e qualifique potenciais clientes automaticamente",
      gradient: "from-brand-blue to-brand-accent"
    },
    {
      icon: MessageSquare,
      title: "Respostas instantâneas personalizadas",
      description: "Mensagens customizadas com o tom de voz da sua empresa",
      gradient: "from-brand-accent to-brand-purple"
    },
    {
      icon: Calendar,
      title: "Agendamentos e suporte automático",
      description: "Gestão completa de agendamentos e suporte técnico",
      gradient: "from-brand-purple to-brand-light-purple"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237b75b4' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm12 0c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6 text-brand-purple animate-pulse" />
            <span className="text-brand-purple font-medium uppercase tracking-wider text-sm">Nossos Serviços</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que <span className="text-gradient bg-gradient-to-r from-brand-purple to-brand-accent bg-clip-text text-transparent">fazemos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas de automação com inteligência artificial para transformar o atendimento da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:scale-105 relative overflow-hidden">
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl`}></div>
              <div className="relative bg-white rounded-lg p-1">
                <CardHeader className="text-center relative">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl relative`}>
                    <service.icon className="h-10 w-10 text-white" />
                    <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <CardTitle className="text-xl text-gray-900 leading-tight group-hover:text-brand-purple transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brand-purple/10 to-brand-accent/10 backdrop-blur-sm rounded-3xl p-8 border border-brand-purple/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para revolucionar seu atendimento?
            </h3>
            <p className="text-gray-600 mb-6">
              Descubra como nossa IA pode transformar sua empresa em minutos
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-purple to-brand-accent mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
