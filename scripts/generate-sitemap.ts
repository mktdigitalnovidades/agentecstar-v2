import { writeFileSync, readdirSync, existsSync, statSync } from 'fs';
import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';

interface StaticRoute {
  loc: string;
  priority: string;
  changefreq: string;
  lastmod?: string;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DOMAIN = "https://agentecstar.com";
const today = new Date().toISOString().split('T')[0];

// Rotas Oficiais Principais e de Alto Valor da AgentecStar
const staticRoutes: StaticRoute[] = [
  // Home
  { loc: `${DOMAIN}/`, priority: '1.0', changefreq: 'weekly', lastmod: today },
  
  // Soluções e Landing Pages Oficiais
  { loc: `${DOMAIN}/criacao-de-site`, priority: '0.9', changefreq: 'monthly', lastmod: today },
  { loc: `${DOMAIN}/automacao-para-clinicas`, priority: '0.9', changefreq: 'monthly', lastmod: today },
  { loc: `${DOMAIN}/automacao-para-imobiliarias`, priority: '0.9', changefreq: 'monthly', lastmod: today },
  { loc: `${DOMAIN}/automacao-para-oficinas`, priority: '0.9', changefreq: 'monthly', lastmod: today },

  // Blog Principal
  { loc: `${DOMAIN}/blog`, priority: '0.9', changefreq: 'weekly', lastmod: today },

  // Institucionais e Contato
  { loc: `${DOMAIN}/quem-somos`, priority: '0.7', changefreq: 'monthly', lastmod: today },
  { loc: `${DOMAIN}/fale-conosco`, priority: '0.7', changefreq: 'monthly', lastmod: today },
  { loc: `${DOMAIN}/mapa-do-site`, priority: '0.5', changefreq: 'monthly', lastmod: today },

  // Políticas e Termos
  { loc: `${DOMAIN}/politica-de-privacidade`, priority: '0.3', changefreq: 'yearly', lastmod: today },
  { loc: `${DOMAIN}/termos-de-uso`, priority: '0.3', changefreq: 'yearly', lastmod: today },
  { loc: `${DOMAIN}/politica-de-cookies`, priority: '0.3', changefreq: 'yearly', lastmod: today },
  { loc: `${DOMAIN}/direitos-autorais`, priority: '0.3', changefreq: 'yearly', lastmod: today },
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Rotas Principais e Estratégicas do Negócio -->
`;

staticRoutes.forEach(route => {
  xml += `  <url>
    <loc>${route.loc}</loc>
    <lastmod>${route.lastmod || today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>\n`;
});

// Extração Dinâmica de Postagens de Blog Reais (Markdown)
const blogDir = resolve(__dirname, '../src/content/blog/');
let blogCount = 0;

if (existsSync(blogDir)) {
  xml += `\n  <!-- Artigos do Blog Oficiais -->\n`;
  const blogFiles = readdirSync(blogDir).filter(file => file.endsWith('.md'));
  
  blogFiles.forEach(blogFile => {
    const slug = blogFile.replace('.md', '');
    const filePath = join(blogDir, blogFile);
    let postDate = today;
    try {
      const stats = statSync(filePath);
      postDate = stats.mtime.toISOString().split('T')[0];
    } catch {
      postDate = today;
    }

    xml += `  <url>
    <loc>${DOMAIN}/blog/${slug}</loc>
    <lastmod>${postDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
    blogCount++;
  });
}

xml += `</urlset>\n`;

const sitemapPath = resolve(__dirname, '../public/sitemap.xml');
writeFileSync(sitemapPath, xml, 'utf-8');

console.log(`✅ Sitemap otimizado com sucesso!`);
console.log(`📌 Total de rotas institucionais e de serviços: ${staticRoutes.length}`);
console.log(`📝 Total de artigos de blog: ${blogCount}`);
console.log(`🚀 Total geral de URLs indexáveis: ${staticRoutes.length + blogCount}`);
