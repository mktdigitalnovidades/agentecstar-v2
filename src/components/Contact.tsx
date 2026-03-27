
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone } from "lucide-react";

const Contact = () => {
  const whatsappLink = "https://wa.me/5519992288312?text=Olá! Vim do SITE e quero melhorar o atendimento da minha empresa.";

  return (
    <section id="contact" className="py-20 bg-gradient-brand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contato
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar o atendimento da sua empresa
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">
                Entre em contato pelo WhatsApp
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-2 text-white">
                <Phone className="h-5 w-5" />
                <span className="text-xl font-semibold">(19) 99228-8312</span>
              </div>
              
              <Button 
                size="lg"
                onClick={() => window.open(whatsappLink, '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white w-full py-4 text-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Conversar no WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
