
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Como funciona?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Inteligência Artificial Personalizada
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl leading-relaxed text-center text-gray-200">
                Nossos agentes inteligentes são treinados com as informações da sua empresa 
                e passam a responder seus clientes de forma personalizada, com agilidade e no seu tom de voz.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-brand-pink rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Treinamento</h3>
            <p className="text-gray-300">Treinamos a IA com as informações específicas da sua empresa</p>
          </div>
          
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Integração</h3>
            <p className="text-gray-300">Conectamos com WhatsApp e Instagram da sua empresa</p>
          </div>
          
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Automação</h3>
            <p className="text-gray-300">Seus clientes recebem atendimento inteligente 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
