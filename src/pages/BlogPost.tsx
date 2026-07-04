import { useParams, Navigate, Link } from "react-router-dom";
import { getPostBySlug } from "@/utils/blog-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Para tabelas e links markdown nativos
import { ArrowLeft, CalendarDays, Share2, MessageCircle } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug || "");

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const { meta, content } = post;
  
  // URL Compartilhável
  const postUrl = typeof window !== 'undefined' ? window.location.href : `https://agentecstar.com/blog/${slug}`;
  const shareWhatsApp = `https://wa.me/?text=${encodeURIComponent(`Achei incrível: ${meta.title} - Leia em: ${postUrl}`)}`;

  // Link Zap Padrão do AgentecStar
  const contactWhatsApp = "https://wa.me/5519992288312?text=Olá! Vim do BLOG e quero melhorar o atendimento da minha empresa.";

  // Alt text SEO: usa imageAlt do frontmatter ou fallback descritivo
  const imgAlt = meta.imageAlt || `${meta.title} - AgentecStar Agência de Inteligência Artificial`;

  // JSON-LD BlogPosting Schema para SEO/AEO/GEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": meta.title,
    "description": meta.excerpt,
    "image": {
      "@type": "ImageObject",
      "url": `https://agentecstar.com${meta.coverImage || meta.image}`,
      "description": imgAlt,
      "width": 1200,
      "height": 628
    },
    "datePublished": meta.date,
    "dateModified": meta.date,
    "author": {
      "@type": "Organization",
      "name": "AgentecStar",
      "url": "https://agentecstar.com",
      "sameAs": ["https://wa.me/5519992288312"]
    },
    "publisher": {
      "@type": "Organization",
      "name": "AgentecStar - Agência de Inteligência Artificial",
      "url": "https://agentecstar.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://agentecstar.com/agentecstar-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "keywords": meta.tags.join(", "),
    "articleSection": "Inteligência Artificial e Automação",
    "inLanguage": "pt-BR",
    "about": [
      { "@type": "Thing", "name": "Inteligência Artificial" },
      { "@type": "Thing", "name": "Automação de Processos" },
      { "@type": "Thing", "name": "WhatsApp Business" }
    ],
    "mentions": [
      { "@type": "Organization", "name": "AgentecStar", "url": "https://agentecstar.com" }
    ]
  };

  return (
    <div className="min-h-screen bg-brand-slate text-slate-200">
      {/* JSON-LD Structured Data para SEO/AEO/GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      <main className="pt-32 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb / Botão de Voltar */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-brand-cyan hover:text-white transition-colors mb-8 font-semibold">
            <ArrowLeft className="w-4 h-4" /> Voltar para Artigos
          </Link>

          {/* Cabeçalho do Post */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {meta.tags.map(tag => (
                <span key={tag} className="bg-brand-fuchsia/10 border border-brand-fuchsia/20 text-brand-fuchsia text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              {meta.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-400 pb-8 border-b border-slate-700/50">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-brand-cyan" />
                <time dateTime={meta.date}>
                  {new Date(meta.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
              </div>
              
              <div className="flex items-center gap-2">
                <img src="/agentecstar-logo.png" alt="AgentecStar" width="24" height="24" loading="lazy" className="w-6 h-6 rounded-full bg-slate-800 p-1" />
                <span>Por <strong>Equipe AgentecStar</strong></span>
              </div>
            </div>
          </header>

          {/* Imagem de Capa: usa coverImage (hero), se não existir usa image (thumbnail) */}
          {(meta.coverImage || meta.image) && (
            <figure className="mb-12 rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl bg-slate-900 flex items-center justify-center">
              <img 
                src={meta.coverImage || meta.image} 
                alt={imgAlt}
                title={meta.title}
                loading="eager"
                width={1200}
                height={628}
                className="w-full h-auto object-contain"
              />
            </figure>
          )}

          {/* Área Principal: Markdown Content e Call-To-Action Lateral */}
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            {/* O Texto Dinâmico */}
            <div className="prose prose-invert prose-lg prose-cyan max-w-none 
                 prose-h2:text-3xl prose-h2:text-white prose-h2:mt-12 prose-h2:mb-6
                 prose-h3:text-2xl prose-h3:text-brand-cyan
                 prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
                 prose-a:text-brand-fuchsia prose-a:no-underline hover:prose-a:underline
                 prose-strong:text-white
                 prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-6 prose-li:text-slate-300
                 prose-ol:list-decimal prose-ol:ml-6 prose-ol:mb-6
                 prose-blockquote:border-l-4 prose-blockquote:border-brand-cyan prose-blockquote:bg-brand-navy/30 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:italic">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            </div>

            {/* Sidebar Sticky de CTA (Para não perder nenhuma venda!) */}
            <aside className="relative">
              <div className="sticky top-32 bg-slate-800/50 backdrop-blur-md border border-brand-cyan/20 p-6 rounded-2xl flex flex-col gap-4 shadow-[0_0_40px_rgba(62,206,208,0.1)]">
                <h3 className="text-xl font-bold text-white mb-2">Transforme Sua Empresa</h3>
                <p className="text-sm text-slate-300 mb-4">Gostou das estratégias? Nossos especialistas implementam agentes de IA no seu WhatsApp e Instagram em dias.</p>
                <a 
                  href={contactWhatsApp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-brand-cyan hover:bg-cyan-500 text-brand-dark px-4 py-3 rounded-lg font-bold transition-all shadow-lg flex justify-center items-center gap-2 group"
                >
                   <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                   Falar Agora
                </a>
                
                <hr className="border-slate-700 my-4" />

                <h4 className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wider">Compartilhe</h4>
                <a 
                  href={shareWhatsApp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-medium transition-colors border border-slate-600 flex justify-center items-center gap-2"
                >
                   <Share2 className="w-4 h-4" />
                   Enviar no WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </article>
      </main>

      {/* Re-engajamento Visual ao Fim */}
      <Contact />
      
      <Footer />
    </div>
  );
};

export default BlogPost;
