
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      answer: "O processo de implementação geralmente leva de 3 a 7 dias úteis, dependendo da complexidade do seu negócio. Isso inclui treinamento da IA, configuração das integrações e testes completos antes de entrar no ar."
    },
    {
      question: "A IA pode substituir completamente minha equipe de atendimento?",
      answer: "A IA é projetada para complementar sua equipe, não substituí-la. Ela cuida do atendimento básico, qualificação de leads e tarefas repetitivas, liberando sua equipe para focar em vendas e relacionamento estratégico com o cliente."
    },
    {
      question: "Existe automação com IA em Campinas SP?",
      answer: "Sim! A AgentecStar é especializada em automação com inteligência artificial e está sediada em Campinas, São Paulo. Atendemos empresas em Campinas, Jundiaí, Valinhos, Vinhedo, Hortolândia e toda a região metropolitana de Campinas."
    },
    {
      question: "Quanto custa contratar automação com IA para minha empresa em Campinas?",
      answer: "Os investimentos variam conforme o volume de atendimentos, canais integrados e complexidade do projeto. Entre em contato pelo WhatsApp (19) 99228-8312 para receber um diagnóstico gratuito e uma proposta personalizada para o seu negócio."
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
    <section id="faq" className="py-20 bg-white">
      {/* Schema FAQ para buscadores e LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes sobre Automação com IA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre automação inteligente para empresas em Campinas e região
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-brand-purple">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">
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
