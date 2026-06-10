import { Link } from "react-router-dom";
import { getAllPosts } from "@/utils/blog-data";
import { ArrowRight, CalendarDays } from "lucide-react";

const BlogPreview = () => {
  const posts = getAllPosts().slice(0, 4);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-20 bg-brand-navy">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Blog <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-fuchsia">AgentecStar</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              Estratégias avançadas, dicas de ferramentas LLM e casos de negócios transformados por Agentes de IA.
            </p>
          </div>
          <Link 
            to="/blog" 
            className="mt-6 md:mt-0 flex items-center justify-center gap-2 text-brand-dark bg-brand-cyan hover:bg-cyan-500 font-bold px-6 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(62,206,208,0.3)] hover:scale-105 group"
            onClick={() => window.scrollTo(0,0)}
          >
            Ver todos artigos <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              to={`/blog/${post.slug}`} 
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(62,206,208,0.1)] transition-all flex flex-col h-full"
              onClick={() => window.scrollTo(0,0)}
            >
              <div className="aspect-square sm:aspect-video lg:aspect-square w-full overflow-hidden bg-slate-800 relative">
                {post.image ? (
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full bg-gradient-brand flex items-center justify-center text-brand-cyan opacity-50 font-bold" />
                )}
                {post.tags?.[0] && (
                  <span className="absolute top-3 left-3 bg-brand-navy/90 text-brand-cyan text-xs font-bold px-2 py-1 rounded-md">
                    {post.tags[0]}
                  </span>
                )}
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
                  <CalendarDays className="w-3 h-3" />
                  <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-fuchsia transition-colors line-clamp-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2 mt-auto">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
