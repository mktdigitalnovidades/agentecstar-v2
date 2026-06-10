import React, { useState } from "react";
import { MessageCircle, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const text = `Olá! Meu nome é ${name.trim()}${company.trim() ? `, da empresa ${company.trim()}` : ""}.\n\nObservações do que preciso:\n${notes.trim()}`;
    const whatsappLink = `https://wa.me/5519992288312?text=${encodeURIComponent(text)}`;
    window.open(whatsappLink, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Formulário Popup / Modal do WhatsApp */}
      {isOpen && (
        <div className="mb-4 bg-slate-900/95 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl w-[320px] sm:w-[360px] animate-fade-in text-slate-200">
          <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-green-400" />
              <span className="font-bold text-white">Fale no WhatsApp</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="float-name" className="text-xs text-slate-300 font-medium">Nome *</Label>
              <Input 
                id="float-name" 
                type="text" 
                required 
                placeholder="Seu nome" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder-slate-400 focus:border-brand-cyan h-9 text-sm"
              />
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="float-company" className="text-xs text-slate-300 font-medium">Empresa</Label>
              <Input 
                id="float-company" 
                type="text" 
                placeholder="Sua empresa" 
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder-slate-400 focus:border-brand-cyan h-9 text-sm"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="float-notes" className="text-xs text-slate-300 font-medium">O que você precisa?</Label>
              <Textarea 
                id="float-notes" 
                placeholder="Descreva brevemente sua necessidade..." 
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder-slate-400 focus:border-brand-cyan min-h-[70px] text-sm"
              />
            </div>

            <Button 
              type="submit"
              size="sm"
              className="bg-green-500 hover:bg-green-600 text-white w-full py-2 font-bold text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Enviar para o WhatsApp
            </Button>
          </form>
        </div>
      )}

      {/* Botão Flutuante Principal */}
      <div className="group relative">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110" 
          aria-label="Fale Conosco no WhatsApp"
        >
          <div className="relative h-6 w-6 group-hover:scale-110 transition-transform flex items-center justify-center">
            <MessageCircle className="h-6 w-6" />
          </div>
          
          {/* Efeito Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/40 to-emerald-500/40 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity"></div>
          
          {/* Sparkle */}
          <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-300 animate-pulse" />
        </button>
        
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute bottom-20 right-0 bg-slate-900/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl border border-white/10 transform translate-y-2 group-hover:translate-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Fale Conosco no WhatsApp</span>
            </div>
            <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900/90"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsAppButton;
