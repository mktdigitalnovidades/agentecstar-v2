// src/utils/blog-data.ts

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  image?: string;       // Thumbnail usado no card da listagem
  coverImage?: string;  // Imagem hero usada dentro do artigo (opcional, sobrescreve o image)
  excerpt: string;
  tags: string[];
}

export interface BlogPostData {
  meta: BlogPostMeta;
  content: string;
}

// Pequeno parser manual para evitar problemas de pollyfill do `gray-matter` no Vite
function parseFrontmatter(mdxText: string): BlogPostData {
  const match = mdxText.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  
  const defaultMeta: BlogPostMeta = {
    slug: "",
    title: "Sem Título",
    date: "",
    excerpt: "",
    tags: []
  };

  if (!match) return { meta: defaultMeta, content: mdxText };

  const yamlRaw = match[1];
  const bodyText = match[2];
  
  const meta = { ...defaultMeta };
  
  yamlRaw.split('\n').forEach(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx > -1) {
      const key = line.slice(0, colonIdx).trim() as keyof BlogPostMeta;
      let valRaw = line.slice(colonIdx + 1).trim();
      
      // Remove aspas simples e duplas soltas (") ou (')
      let val = valRaw.replace(/^['"]|['"]$/g, '');
      
      if (key === 'tags') {
        // [ "tag1", "tag2" ]
        if (val.startsWith('[') && val.endsWith(']')) {
           const arrStr = val.substring(1, val.length - 1);
           meta.tags = arrStr.split(',').map(t => t.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
        }
      } else {
        (meta as any)[key] = val;
      }
    }
  });

  return { meta, content: bodyText };
}

// O Vite empacota todos os arquivos .md da pasta de modo raw durante o build
const markdownFiles = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: true });

export function getAllPosts(): BlogPostMeta[] {
  const posts: BlogPostMeta[] = [];

  for (const path in markdownFiles) {
    const rawContent = markdownFiles[path] as string;
    
    // Extrai o nome do arquivo, ex: '../content/blog/meu-post-incrivel.md' -> 'meu-post-incrivel'
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    
    const parsed = parseFrontmatter(rawContent);
    parsed.meta.slug = slug;
    
    posts.push(parsed.meta);
  }

  // Ordena por data mais recente
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPostData | null {
  for (const path in markdownFiles) {
    const fileSlug = path.split('/').pop()?.replace('.md', '');
    if (fileSlug === slug) {
      const rawContent = markdownFiles[path] as string;
      const parsed = parseFrontmatter(rawContent);
      parsed.meta.slug = fileSlug;
      return parsed;
    }
  }
  return null;
}
