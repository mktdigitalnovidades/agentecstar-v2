import { generateAllRoutes } from "@/utils/seo-data";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sitemap = () => {
  const routes = generateAllRoutes();

  // Agrupar por City para ficar mais organizado no HTML (ajuda UX e SEO context)
  const groupedByCity = routes.reduce((acc, route) => {
    const cityKey = route.city || "Geral";
    if (!acc[cityKey]) acc[cityKey] = [];
    acc[cityKey].push(route);
    return acc;
  }, {} as Record<string, typeof routes>);

  return (
    <div className="min-h-screen bg-brand-slate text-slate-200 pt-24">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Mapa do Site
        </h1>
        <p className="text-lg text-slate-400 mb-12">
          Encontre rapidamente nossas soluções de automação com Inteligência Artificial divididas por região de atendimento.
        </p>

        <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-8 rounded-2xl shadow-xl">
          {Object.entries(groupedByCity).map(([city, cityRoutes]) => (
            <div key={city} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-semibold text-brand-cyan mb-6 border-b border-slate-700 pb-2">
                {city === "Geral" ? "Soluções Gerais" : `Atendimento em ${city}`}
              </h2>
              
              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                {cityRoutes.map((route) => (
                  <li key={route.slug}>
                    <Link 
                      to={`/${route.slug}`}
                      className="text-sm text-slate-300 hover:text-brand-fuchsia hover:underline transition-colors block py-1"
                    >
                      {route.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sitemap;
