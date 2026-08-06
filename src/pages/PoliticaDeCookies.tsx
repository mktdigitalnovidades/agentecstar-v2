import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cookie } from "lucide-react";

const PoliticaDeCookies = () => {
  return (
    <div className="min-h-screen bg-brand-slate text-slate-200 pt-24">
      <Header />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Cookie className="h-8 w-8 text-brand-cyan" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Política de <span className="text-gradient-cyber">Cookies</span>
          </h1>
          <p className="text-slate-400">
            Saiba como utilizamos cookies e tecnologias de rastreamento semelhantes em nosso site.
          </p>
        </div>

        <div
          className="rounded-2xl p-8 md:p-12 space-y-8"
          style={{ background: 'rgba(30,41,59,0.6)', border: '1px solid rgba(62,206,208,0.15)' }}
        >
          <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-4">1. O que são Cookies?</h2>
            <p className="text-slate-300 leading-relaxed">
              Cookies são pequenos arquivos de texto armazenados no seu navegador ou dispositivo quando você visita um site. Eles ajudam a fazer o site funcionar de maneira mais eficiente e a fornecer relatórios e informações analíticas ou de marketing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-4">2. Cookies Utilizados</h2>
            <p className="text-slate-300 leading-relaxed mb-3">
              Utilizamos as seguintes categorias de cookies em nosso site:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li><strong>Cookies Essenciais:</strong> Necessários para que o site funcione corretamente (como navegação e segurança).</li>
              <li><strong>Cookies Analíticos:</strong> Nos ajudam a entender como os visitantes interagem com o site, coletando informações de forma anônima.</li>
              <li><strong>Cookies de Publicidade (Google AdSense):</strong> O Google utiliza cookies para veicular anúncios com base nas suas visitas anteriores a este ou a outros sites. Com o uso de cookies de publicidade, o Google e os parceiros dele podem veicular anúncios para os usuários com base nas visitas feitas a seus sites e/ou a outros sites na Internet.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-4">3. Como Desativar ou Limpar Cookies</h2>
            <p className="text-slate-300 leading-relaxed">
              Você pode optar por desativar a publicidade personalizada acessando as <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-brand-cyan hover:underline">Configurações de Anúncios do Google</a>. Alternativamente, você pode configurar o seu navegador de internet para recusar cookies ou para alertá-lo quando um cookie estiver sendo enviado.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PoliticaDeCookies;
