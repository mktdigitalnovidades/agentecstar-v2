import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users } from "lucide-react";

const QuemSomos = () => {
  return (
    <div className="min-h-screen bg-brand-slate text-slate-200 pt-24">
      <Header />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="h-8 w-8 text-brand-cyan" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quem <span className="text-gradient-cyber">Somos</span>
          </h1>
          <p className="text-slate-400">
            Saiba mais sobre a nossa história, missão e o compromisso com a inovação.
          </p>
        </div>

        <div
          className="rounded-2xl p-8 md:p-12 space-y-8"
          style={{ background: 'rgba(30,41,59,0.6)', border: '1px solid rgba(62,206,208,0.15)' }}
        >
          <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-4">Nossa Missão</h2>
            <p className="text-slate-300 leading-relaxed">
              Na <strong className="text-white">AgentecStar</strong>, nossa missão é democratizar a Inteligência Artificial e a automação de processos para empresas de todos os portes. Nós construímos agentes inteligentes, assistentes virtuais de atendimento e automações personalizadas que ajudam negócios a economizarem tempo, otimizarem custos e melhorarem a experiência do cliente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-4">Como Atuamos</h2>
            <p className="text-slate-300 leading-relaxed mb-3">
              Desenvolvemos soluções de ponta focadas em:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Integração de sistemas utilizando plataformas modernas como n8n.</li>
              <li>Criação de agentes autônomos de IA para vendas, suporte e triagem.</li>
              <li>Desenvolvimento de chatbots inteligentes integrados ao WhatsApp.</li>
              <li>Qualificação automatizada de leads para acelerar times comerciais.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-4">Nossos Valores</h2>
            <p className="text-slate-300 leading-relaxed mb-3">
              Guiamos nossa atuação através dos seguintes princípios básicos:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li><strong>Inovação Contínua:</strong> Sempre buscando as tecnologias de IA mais avançadas.</li>
              <li><strong>Transparência:</strong> Parcerias de confiança com termos e políticas claras.</li>
              <li><strong>Foco no Cliente:</strong> Soluções desenhadas especificamente para resolver os gargalos reais do seu negócio.</li>
              <li><strong>Privacidade:</strong> Respeito absoluto às leis de proteção de dados (LGPD).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-4">Contato e Localização</h2>
            <p className="text-slate-300 leading-relaxed">
              Estamos sediados em Campinas – SP, atendendo clientes presencialmente em toda a Região Metropolitana de Campinas e Grande São Paulo, e remotamente em todo o Brasil.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default QuemSomos;
