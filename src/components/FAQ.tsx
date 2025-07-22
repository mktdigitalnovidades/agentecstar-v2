
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona a automação?",
      answer: "Configuramos um robô com IA que responde seus clientes de forma personalizada e automatizada. O sistema é treinado com as informações específicas da sua empresa para fornecer respostas precisas e no tom de voz adequado."
    },
    {
      question: "Preciso de conhecimento técnico?",
      answer: "Não! Nossa equipe configura tudo para você. Cuidamos de toda a implementação técnica, treinamento da IA e integração com suas plataformas. Você só precisa focar no seu negócio."
    },
    {
      question: "É possível usar com Instagram também?",
      answer: "Sim, integramos com Instagram Direct e WhatsApp. Nossa solução funciona em ambas as plataformas, permitindo atendimento automatizado completo nas principais redes sociais do seu negócio."
    },
    {
      question: "Quanto tempo leva para implementar?",
      answer: "O processo de implementação geralmente leva de 3 a 7 dias, dependendo da complexidade do seu negócio. Isso inclui treinamento da IA, configuração das integrações e testes completos."
    },
    {
      question: "A IA pode substituir completamente minha equipe?",
      answer: "A IA é projetada para complementar sua equipe, não substituí-la. Ela cuida do atendimento básico, qualificação de leads e tarefas repetitivas, liberando sua equipe para focar em vendas e relacionamento com o cliente."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossa solução de automação com IA
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
