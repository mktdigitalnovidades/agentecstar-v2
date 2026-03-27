import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona a automação com IA?",
      answer: "Configuramos agentes de inteligência artificial treinados com as informações da sua empresa. Eles respondem seus clientes de forma personalizada e automática no WhatsApp, Instagram e outras plataformas, 24 horas por dia, 7 dias por semana."
    },
    {
      question: "Preciso de conhecimento técnico para usar?",
      answer: "Não! Nossa equipe em Campinas-SP cuida de toda a implementação técnica, treinamento da IA e integração com suas plataformas. Você só precisa focar no seu negócio enquanto o agente trabalha por você."
    },
    {
      question: "É possível usar com Instagram também?",
      answer: "Sim, integramos com Instagram Direct e WhatsApp Business. Nossa solução funciona em ambas as plataformas, permitindo atendimento automatizado completo nas principais redes sociais do seu negócio."
    },
    {
      question: "Quanto tempo leva para implementar?",
      answer: "O processo de implementação leva de 3 a 7 dias úteis. Isso inclui o treinamento minucioso da IA com o catálogo/base de conhecimento do seu negócio, testes e entrega da solução 100% pronta."
    },
    {
      question: "A IA pode substituir completamente minha equipe de atendimento?",
      answer: "A IA é projetada para complementar sua equipe. Ela retém 80% das chamadas e cuida do atendimento de triagem e nível 1, liberando seus atendentes humanos para focar no fechamento de grandes vendas."
    },
    {
      question: "Existe automação com IA em Campinas SP?",
      answer: "Sim! A AgentecStar está baseada em Campinas, São Paulo, e implementa soluções locais na RMC e em todo o Brasil — para negócios de qualquer tamanho."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden" style={{ background: '#0F172A' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Grid de fundo */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(62,206,208,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(62,206,208,0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="h-6 w-6" style={{ color: '#D946EF' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Perguntas <span className="text-gradient-cyber">Frequentes</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Tire suas dúvidas sobre o ecossistema de automação inteligente em Campinas
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-0 rounded-2xl px-4 md:px-6 py-2 transition-all duration-300" 
                style={{ background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(62,206,208,0.15)' }}>
                <AccordionTrigger className="text-left text-base md:text-lg font-bold text-white hover:text-brand-cyan hover:no-underline [&[data-state=open]]:text-brand-fuchsia">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-sm md:text-base leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
