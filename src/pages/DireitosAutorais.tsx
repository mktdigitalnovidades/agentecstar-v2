import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Copyright } from "lucide-react";

const DireitosAutorais = () => {
  return (
    <div className="min-h-screen bg-brand-slate text-slate-200 pt-24">
      <Header />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Copyright className="h-8 w-8 text-brand-cyan" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Direitos <span className="text-gradient-cyber">Autorais</span>
          </h1>
          <p className="text-slate-400">
            Termos de Propriedade Intelectual e Proteção de Conteúdo da AgentecStar.
          </p>
        </div>

        <div
          className="rounded-2xl p-8 md:p-12 space-y-8"
          style={{ background: 'rgba(30,41,59,0.6)', border: '1px solid rgba(62,206,208,0.15)' }}
        >
          <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-4">1. Proteção de Direitos Autorais</h2>
            <p className="text-slate-300 leading-relaxed">
              Todo o conteúdo publicado neste site, incluindo artigos do blog, tutoriais, imagens, logotipos, códigos de exemplo, estrutura e design visual, é protegido pela Lei de Direitos Autorais brasileira (Lei nº 9.610/98) e leis internacionais de propriedade intelectual.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-4">2. Uso Permitido</h2>
            <p className="text-slate-300 leading-relaxed">
              Você pode ler, salvar ou imprimir páginas individuais deste site exclusivamente para seu uso pessoal e não comercial. Caso queira compartilhar trechos do nosso conteúdo em blogs externos ou redes sociais, você deve obrigatoriamente atribuir os créditos de forma clara e incluir um link ativo para a URL de origem em <strong className="text-white">agentecstar.com</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-4">3. Proibições</h2>
            <p className="text-slate-300 leading-relaxed">
              Fica expressamente proibido:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Copiar artigos ou posts do blog na íntegra sem nossa autorização expressa.</li>
              <li>Utilizar robôs de raspagem ou inteligência artificial para coletar o conteúdo do nosso site de forma automatizada com fins comerciais.</li>
              <li>Remover quaisquer marcas d'água, avisos de direitos autorais ou notas de propriedade.</li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DireitosAutorais;
