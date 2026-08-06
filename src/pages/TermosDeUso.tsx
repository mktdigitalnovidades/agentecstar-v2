import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const TermosDeUso = () => {
  return (
    <div className="min-h-screen bg-brand-slate text-slate-200 pt-24">
      <Header />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="h-8 w-8 text-brand-cyan" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Termos de <span className="text-gradient-cyber">Uso</span>
          </h1>
          <p className="text-slate-400">
            Termos e condições de uso do site agentecstar.com.
          </p>
        </div>

        <div
          className="rounded-2xl p-8 md:p-12 space-y-8"
          style={{ background: 'rgba(30,41,59,0.6)', border: '1px solid rgba(62,206,208,0.15)' }}
        >
          <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-4">1. Aceitação dos Termos</h2>
            <p className="text-slate-300 leading-relaxed">
              Ao acessar e navegar pelo site <strong className="text-white">agentecstar.com</strong>, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer termo estabelecido, solicitamos que não utilize os nossos serviços e saia do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-4">2. Propriedade Intelectual</h2>
            <p className="text-slate-300 leading-relaxed">
              Todos os textos, gráficos, interfaces de usuário, marcas registradas, logotipos e códigos de computador contidos no site são de propriedade, controlados ou licenciados pela AgentecStar. É estritamente proibida a reprodução, cópia, publicação ou distribuição de qualquer parte do conteúdo sem autorização prévia por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-4">3. Limitação de Responsabilidade</h2>
            <p className="text-slate-300 leading-relaxed">
              A AgentecStar busca manter as informações do site sempre atualizadas e corretas. No entanto, não garantimos a ausência completa de erros pontuais. Os conteúdos do nosso blog e páginas são estritamente informativos e não constituem garantias contratuais de resultados para serviços específicos, os quais dependem de contratos formais de prestação de serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-4">4. Links para Terceiros</h2>
            <p className="text-slate-300 leading-relaxed">
              Nosso site pode conter links para outros sites de terceiros (como ferramentas de parceiros ou referências). Não nos responsabilizamos pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites de terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-4">5. Alterações nos Termos</h2>
            <p className="text-slate-300 leading-relaxed">
              Estes Termos de Uso podem ser revisados a qualquer momento sem aviso prévio. Ao continuar a usar o site após quaisquer modificações, você aceita e concorda com as novas diretrizes.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermosDeUso;
