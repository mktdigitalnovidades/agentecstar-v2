export const seoKeywords = [
  "Agência de Inteligência Artificial",
  "Assistente de Atendimento com Inteligência Artificial",
  "Atendimento Personalizado com Inteligência Artificial",
  "Automação de Atendimento para WhatsApp e Instagram",
  "Avatar Falante com IA para Atendimento",
  "Chatbot com IA para Empresas",
  "Automação para Atendimento",
  "Criação de Atendimento Automatizado com IA",
  "Criação de Avatar com IA para Empresas",
  "CRM com Chatbot Integrado",
  "CRM Personalizado para Empresas",
  "Empresa de Atendimento Online Automatizado",
  "Empresa de Automação de Chatbot",
  "Empresa de Inteligência Artificial para Atendimento",
  "Gerador de IA Falante",
  "Gestão de Atendimento com IA",
  "Gestão de Leads Automatizada",
  "Serviço de Automação para Atendimento Online",
  "Sistema de Automação de Atendimento para Empresas",
  "Suporte para Atendimento e Vendas com IA"
];

export const seoCities = [
  "", // Para gerar a versão sem cidade (ex: "agência de inteligência artificial")
  "Campinas",
  "Sumaré",
  "Paulínia",
  "Americana",
  "Hortolândia",
  "Valinhos",
  "Vinhedo",
  "Indaiatuba",
  "Jaguariúna",
  "Nova Odessa",
  "São Paulo",
  "SP",
  "Guarulhos",
  "Osasco",
  "Santo André",
  "São Bernardo do Campo",
  "São Caetano do Sul",
  "Diadema",
  "Jundiaí",
  "Sorocaba"
];

export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

export const generateAllRoutes = () => {
  const routes: { slug: string; keyword: string; city: string; title: string }[] = [];
  
  seoKeywords.forEach(keyword => {
    seoCities.forEach(city => {
      const suffix = city ? ` em ${city}` : "";
      const fullTitle = `${keyword}${suffix}`;
      const slug = slugify(fullTitle);
      
      routes.push({
        slug,
        keyword,
        city,
        title: fullTitle
      });
    });
  });
  
  return routes;
};
