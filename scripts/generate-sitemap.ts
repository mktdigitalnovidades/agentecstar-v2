import { writeFileSync, readdirSync, existsSync } from 'fs';
import { generateAllRoutes } from '../src/utils/seo-data';

const routes = generateAllRoutes();

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Rota Oficial Principal (Home) -->
  <url>
    <loc>https://agentecstar.com/</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  <!-- Página Geral de Blog -->
  <url>
    <loc>https://agentecstar.com/blog</loc>
    <priority>0.9</priority>
    <changefreq>weekly</changefreq>
  </url>
`;

// Rotas SEO Geográficas Automater
routes.forEach(route => {
  xml += `  <url>
    <loc>https://agentecstar.com/${route.slug}</loc>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>\n`;
});

// Extração Dinâmica de Postagens de Blog (Markdown)
const blogDir = './src/content/blog/';
let blogCount = 0;
if (existsSync(blogDir)) {
  const blogs = readdirSync(blogDir).filter(file => file.endsWith('.md'));
  blogs.forEach(blogFile => {
    const slug = blogFile.replace('.md', '');
    xml += `  <url>
    <loc>https://agentecstar.com/blog/${slug}</loc>
    <priority>0.7</priority>
    <changefreq>monthly</changefreq>
  </url>\n`;
    blogCount++;
  });
}

xml += `</urlset>`;

writeFileSync('./public/sitemap.xml', xml);
console.log(`✅ Sitemap created with ${routes.length} SEO pages and ${blogCount} Blog posts!`);
