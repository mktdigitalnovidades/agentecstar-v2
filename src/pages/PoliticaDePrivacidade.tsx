import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const PoliticaDePrivacidade = () => {
  return (
    <div className="min-h-screen bg-brand-slate text-slate-200 pt-24">
      <Header />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* H1 com palavras-chave para SEO */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-brand-cyan" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Política de <span className="text-gradient-cyber">Privacidade</span>
          </h1>
          <p className="text-slate-400">
            Última atualização: Julho de 2026
          </p>
        </div>

        <div
          className="rounded-2xl p-8 md:p-12 space-y-8"
          style={{ background: 'rgba(30,41,59,0.6)', border: '1px solid rgba(62,206,208,0.15)' }}
        >
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 text-brand-cyan">1. Quem somos</h2>
            <p className="text-slate-300 leading-relaxed">
              A <strong className="text-white">AgentecStar</strong> é uma empresa especializada em automação com Inteligência Artificial e Agentes Inteligentes, localizada em Campinas – SP, Brasil. Nosso site é <strong className="text-white">agentecstar.com</strong> e nosso contato é pelo WhatsApp (19) 99228-8312.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-4">2. Dados que coletamos</h2>
            <p className="text-slate-300 leading-relaxed mb-3">
              Coletamos apenas os dados estritamente necessários para fornecer nossos serviços:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Nome e contato (fornecidos voluntariamente via formulário ou WhatsApp)</li>
              <li>Dados de navegação anônimos (via Google Analytics, se ativo)</li>
              <li>Cookies essenciais para funcionamento do site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-4">3. Como usamos seus dados</h2>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Para responder às suas solicitações de contato</li>
              <li>Para enviar informações sobre nossos serviços (somente se autorizado)</li>
              <li>Para melhorar a experiência do site</li>
              <li>Para fins legais e de conformidade</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-4">4. Compartilhamento de dados</h2>
            <p className="text-slate-300 leading-relaxed">
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros, exceto quando necessário para a prestação do serviço (ex: plataformas de automação como n8n) ou quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-4">5. Seus direitos (LGPD)</h2>
            <p className="text-slate-300 leading-relaxed mb-3">
              De acordo com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018), você tem o direito de:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Confirmar se tratamos seus dados pessoais</li>
              <li>Acessar, corrigir ou excluir seus dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
              <li>Portabilidade dos seus dados</li>
              <li>Reclamar junto à ANPD (Autoridade Nacional de Proteção de Dados)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-4">6. Cookies</h2>
            <p className="text-slate-300 leading-relaxed">
              Utilizamos cookies essenciais para o funcionamento do site. Ao continuar navegando, você concorda com o uso de cookies. Você pode desativar os cookies nas configurações do seu navegador, porém isso pode afetar algumas funcionalidades do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-4">7. Segurança</h2>
            <p className="text-slate-300 leading-relaxed">
              Utilizamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, perda ou divulgação. O site utiliza HTTPS com certificado SSL.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-4">8. Contato</h2>
            <p className="text-slate-300 leading-relaxed">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
            </p>
            <div className="mt-4 p-4 rounded-xl" style={{ background: 'rgba(62,206,208,0.08)', border: '1px solid rgba(62,206,208,0.2)' }}>
              <p className="text-white font-semibold">AgentecStar</p>
              <p className="text-slate-300">WhatsApp: <a href="https://wa.me/5519992288312" target="_blank" rel="noopener noreferrer" className="text-brand-cyan hover:underline">(19) 99228-8312</a></p>
              <p className="text-slate-300">Campinas – SP, Brasil</p>
              <p className="text-slate-300">Site: <a href="https://agentecstar.com" className="text-brand-cyan hover:underline">agentecstar.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-4">9. Alterações nesta política</h2>
            <p className="text-slate-300 leading-relaxed">
              Esta política pode ser atualizada periodicamente. Recomendamos que você a revise regularmente. A data da última atualização está indicada no topo desta página.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PoliticaDePrivacidade;
