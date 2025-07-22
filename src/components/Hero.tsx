import { Button } from "@/components/ui/button";
import { Bot, MessageCircle, Zap, Sparkles } from "lucide-react";
const Hero = () => {
  const whatsappLink = "https://wa.me/5519992288312?text=Olá! Gostaria de agendar uma consulta gratuita sobre automação com IA.";
  return <section className="relative pt-20 pb-16 min-h-screen bg-gradient-to-br from-brand-dark via-brand-navy to-brand-blue overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-accent/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-brand-blue/10 to-brand-light-purple/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-40" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-6 w-6 text-brand-accent animate-pulse" />
                <span className="text-brand-accent font-medium uppercase tracking-wider text-sm">Inovação em IA</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-gradient bg-gradient-to-r from-white via-brand-accent to-white bg-clip-text text-transparent">
                  AgentECStar
                </span>
                <br />
                <span className="text-2xl md:text-4xl bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
                  Automação com Inteligência Artificial
                </span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
              Transforme o atendimento da sua empresa com automações inteligentes no WhatsApp e Instagram usando IA de última geração.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => window.open(whatsappLink, '_blank')} className="bg-gradient-to-r from-brand-accent to-brand-purple hover:from-brand-purple hover:to-brand-blue text-white px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-brand-accent/25 transition-all duration-500 transform hover:scale-105 group">
                <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Agende uma consulta gratuita
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({
              behavior: 'smooth'
            })} className="border-2 border-white/30 backdrop-blur-sm px-8 py-6 text-lg font-semibold transition-all duration-300 hover:border-brand-accent text-sky-50 bg-indigo-600 hover:bg-indigo-500">
                Saiba mais
              </Button>
            </div>

            <div className="flex items-center space-x-1 pt-1">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Bot className="h-6 w-6 text-brand-accent" />
                <span className="text-sm font-medium">IA Avançada</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <MessageCircle className="h-6 w-6 text-brand-accent" />
                <span className="text-sm font-medium">WhatsApp & Insta</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Zap className="h-6 w-6 text-brand-accent" />
                <span className="text-sm font-medium">24/7</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Futuristic Chat Interface */}
            <div className="relative z-10 bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 animate-float">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-brand-purple to-brand-accent rounded-full flex items-center justify-center">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">AgentECStar IA</p>
                      <p className="text-gray-300 text-sm">Online agora</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                {/* Messages */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                        <p className="text-sm text-white">Olá! Como posso ajudar você hoje? Estou aqui para otimizar seu atendimento! 🚀</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 justify-end">
                    <div className="flex-1 text-right">
                      <div className="bg-gradient-to-r from-brand-accent to-brand-purple rounded-2xl p-4 inline-block max-w-xs">
                        <p className="text-sm text-white">Gostaria de automatizar meu WhatsApp</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                        <p className="text-sm text-white">Perfeito! Posso configurar um sistema de IA personalizado para sua empresa. Quando podemos conversar? 💡</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className="flex items-center space-x-2 text-gray-300 text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-brand-accent rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-brand-purple rounded-full animate-bounce" style={{
                    animationDelay: '0.1s'
                  }}></div>
                    <div className="w-2 h-2 bg-brand-blue rounded-full animate-bounce" style={{
                    animationDelay: '0.2s'
                  }}></div>
                  </div>
                  <span>IA digitando...</span>
                </div>
              </div>
            </div>
            
            {/* Glowing Effects */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-brand-accent/30 to-brand-purple/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-brand-blue/30 to-brand-purple/30 rounded-full blur-3xl animate-float"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;