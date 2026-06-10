import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Phone } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    const text = `Olá! Meu nome é ${name.trim()}${company.trim() ? `, da empresa ${company.trim()}` : ""}.\n\nObservações do que preciso:\n${notes.trim()}`;
    const whatsappLink = `https://wa.me/5519992288312?text=${encodeURIComponent(text)}`;
    window.open(whatsappLink, '_blank');
  };

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
                Fale Conosco via WhatsApp
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white font-medium">Nome *</Label>
                  <Input 
                    id="name" 
                    type="text" 
                    required 
                    placeholder="Seu nome" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder-slate-400 focus:border-brand-cyan"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white font-medium">Empresa</Label>
                  <Input 
                    id="company" 
                    type="text" 
                    placeholder="Nome da sua empresa" 
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder-slate-400 focus:border-brand-cyan"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-white font-medium">Observações do que precisa</Label>
                  <Textarea 
                    id="notes" 
                    placeholder="Descreva brevemente o que você precisa automatizar ou melhorar..." 
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder-slate-400 focus:border-brand-cyan min-h-[100px]"
                  />
                </div>

                <div className="flex items-center justify-center space-x-2 text-white pb-2">
                  <Phone className="h-5 w-5" />
                  <span className="text-xl font-semibold">(19) 99228-8312</span>
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white w-full py-4 text-lg font-bold"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Enviar para o WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
