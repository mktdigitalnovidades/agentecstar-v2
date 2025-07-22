import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Clock, Heart, Sparkles } from "lucide-react";
const Benefits = () => {
  const benefits = [{
    icon: TrendingUp,
    title: "Aumente seu faturamento com menos esforço",
    description: "Converta mais leads em vendas com atendimento automatizado e personalizado",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50"
  }, {
    icon: Clock,
    title: "Economize tempo da equipe com respostas inteligentes",
    description: "Libere sua equipe para focar no que realmente importa enquanto a IA cuida do atendimento básico",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50"
  }, {
    icon: Heart,
    title: "Crie experiências mais satisfatórias para os seus clientes",
    description: "Atendimento rápido, preciso e disponível 24 horas por dia, 7 dias por semana",
    gradient: "from-pink-500 to-rose-600",
    bgGradient: "from-pink-50 to-rose-50"
  }];
  return <section id="benefits" className="py-20 bg-white relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-brand-purple/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-pink/10 rounded-full blur-xl animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6 text-brand-purple animate-pulse" />
            <span className="text-brand-purple font-medium uppercase tracking-wider text-sm">Vantagens</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Benefícios da <span className="text-gradient bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">Automação com IA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como nossa tecnologia pode revolucionar o atendimento da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => <Card key={index} className="group text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg relative overflow-hidden bg-white">
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
              
              <CardHeader className="relative pb-4">
                <div className="relative mb-6">
                  <div className={`w-24 h-24 bg-gradient-to-r ${benefit.gradient} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-2xl relative overflow-hidden`}>
                    <benefit.icon className="h-12 w-12 text-white relative z-10" />
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
                <CardTitle className="text-2xl text-gray-900 leading-tight relative group-hover:text-brand-purple transition-colors duration-300">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
            </Card>)}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="bg-gradient-to-r from-brand-purple to-brand-blue rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-cyan-600">
              <div className="text-4xl font-bold mb-2">+300%</div>
              <div className="text-brand-pink font-medium">Aumento na conversão</div>
            </div>
          </div>
          <div className="group">
            <div className="bg-gradient-to-r from-brand-blue to-brand-pink rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-cyan-600">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100 font-medium">Atendimento contínuo</div>
            </div>
          </div>
          <div className="group">
            <div className="bg-gradient-to-r from-brand-pink to-brand-purple p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-cyan-600 rounded-2xl">
              <div className="text-4xl font-bold mb-2">-80%</div>
              <div className="text-purple-100 font-medium">Redução no tempo de resposta</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Benefits;