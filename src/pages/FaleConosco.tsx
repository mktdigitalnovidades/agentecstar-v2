import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const FaleConosco = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      // Aqui integraria com backend
    }
  };

  return (
    <div className="min-h-screen bg-brand-slate text-slate-200 pt-24">
      <Header />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mail className="h-8 w-8 text-brand-cyan" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fale <span className="text-gradient-cyber">Conosco</span>
          </h1>
          <p className="text-slate-400">
            Dúvidas, sugestões ou suporte? Entre em contato conosco.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Informações de Contato */}
          <div
            className="rounded-2xl p-8 space-y-6 flex flex-col justify-between"
            style={{ background: 'rgba(30,41,59,0.6)', border: '1px solid rgba(62,206,208,0.15)' }}
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Informações de Contato</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Estamos prontos para atender você. Sinta-se à vontade para enviar uma mensagem ou nos ligar diretamente.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="h-5 w-5 text-brand-cyan" />
                <span>(19) 99228-8312</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="h-5 w-5 text-brand-cyan" />
                <span>contato@agentecstar.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="h-5 w-5 text-brand-cyan" />
                <span>Campinas – SP, Brasil</span>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div
            className="rounded-2xl p-8"
            style={{ background: 'rgba(30,41,59,0.6)', border: '1px solid rgba(62,206,208,0.15)' }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Envie uma mensagem</h2>
            
            {submitted ? (
              <div className="text-center py-12">
                <p className="text-brand-cyan font-bold text-lg mb-2">Mensagem Enviada!</p>
                <p className="text-slate-400">Agradecemos o seu contato. Retornaremos o mais breve possível.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Nome Completo</label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-cyan transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-cyan transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Mensagem</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full bg-brand-cyan hover:bg-cyan-500 text-slate-950 font-bold transition-all flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" /> Enviar Mensagem
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FaleConosco;
