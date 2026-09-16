import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertCircle, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn(
      "404 Not Found:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-brand-slate text-slate-200 flex flex-col justify-between pt-24">
      <SEOHead
        title="Página Não Encontrada (404) | AgentecStar"
        description="A página que você está procurando não existe ou foi movida."
        robots="noindex, follow"
      />
      <Header />

      <main className="container mx-auto px-4 py-24 text-center max-w-2xl my-auto">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-brand-fuchsia/10 text-brand-fuchsia mb-6 border border-brand-fuchsia/20">
          <AlertCircle className="w-12 h-12" />
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
          Página não encontrada
        </h2>
        <p className="text-slate-400 mb-8 leading-relaxed">
          O link que você tentou acessar pode estar incorreto, ter sido renomeado ou não estar mais disponível.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/">
            <Button size="lg" className="bg-brand-cyan hover:bg-cyan-500 text-slate-950 font-bold px-6 py-6 rounded-xl shadow-lg flex items-center gap-2">
              <Home className="w-5 h-5" /> Voltar para a Página Inicial
            </Button>
          </Link>
          <Link to="/blog">
            <Button size="lg" variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800 px-6 py-6 rounded-xl flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" /> Ver Artigos do Blog
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
