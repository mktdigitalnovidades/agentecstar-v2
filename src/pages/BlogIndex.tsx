import { getAllPosts } from "@/utils/blog-data";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CalendarDays, ArrowRight } from "lucide-react";

const BlogIndex = () => {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-brand-slate text-slate-200 pt-24">
      <Header />
      
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Inteligência Artificial e <span className="text-gradient-cyber">Negócios</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Acompanhe as últimas estratégias, tendências em automação e dicas valiosas de como otimizar suas vendas com agentes virtuais.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center text-slate-400 py-20">Nenhuma postagem encontrada ainda. Em breve teremos novidades!</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                to={`/blog/${post.slug}`} 
                key={post.slug}
                className="group relative bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(62,206,208,0.15)] transition-all duration-300 flex flex-col"
              >
                {/* Imagem do Card */}
                <div className="w-full overflow-hidden bg-slate-900 relative" style={{minHeight: '220px', maxHeight: '260px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      style={{maxHeight: '260px'}}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-brand flex items-center justify-center" style={{minHeight:'220px'}}>
                       <span className="text-brand-cyan/20 font-bold text-4xl">Agentec</span>
                    </div>
                  )}
                  {/* Pílula de Tag */}
                  {post.tags?.[0] && (
                    <div className="absolute top-4 left-4 bg-brand-navy/90 backdrop-blur-sm text-brand-cyan text-xs font-bold px-3 py-1 rounded-full border border-brand-cyan/20">
                      {post.tags[0]}
                    </div>
                  )}
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                    <CalendarDays className="w-4 h-4" />
                    <span>
                      {new Date(post.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-sm text-slate-300 line-clamp-3 mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-brand-fuchsia font-semibold text-sm group-hover:gap-3 transition-all">
                    Ler artigo completo <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default BlogIndex;
