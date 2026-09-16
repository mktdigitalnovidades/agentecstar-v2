import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  robots?: string;
  ogImage?: string;
  ogType?: string;
}

const DOMAIN = "https://agentecstar.com";

export default function SEOHead({
  title = "AgentecStar – Automação com IA em Campinas | Agentes Inteligentes",
  description = "Desenvolvimento de Agentes de IA em Campinas. Automatize seu WhatsApp e atendimento com a AgentecStar. Consultoria local especializada.",
  canonical,
  robots = "index, follow",
  ogImage = "https://agentecstar.com/og-image.jpg",
  ogType = "website",
}: SEOHeadProps) {
  const location = useLocation();

  useEffect(() => {
    // 1. Atualizar Título
    document.title = title;

    // Função auxiliar para atualizar ou criar meta tags
    const setMetaTag = (selector: string, attrName: string, attrValue: string, contentValue: string) => {
      let element = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", contentValue);
    };

    // 2. Meta Description
    setMetaTag('meta[name="description"]', "name", "description", description);

    // 3. Meta Robots
    setMetaTag('meta[name="robots"]', "name", "robots", robots);

    // 4. Canonical Tag
    // Se não informada explicitamente, deriva do pathname atual de forma limpa (sem trailing slash exceto na home)
    let canonicalUrl = canonical;
    if (!canonicalUrl) {
      const cleanPath = location.pathname.replace(/\/+$/, "") || "/";
      canonicalUrl = `${DOMAIN}${cleanPath === "/" ? "/" : cleanPath}`;
    }

    let linkCanonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonicalUrl);

    // 5. Open Graph Tags
    setMetaTag('meta[property="og:title"]', "property", "og:title", title);
    setMetaTag('meta[property="og:description"]', "property", "og:description", description);
    setMetaTag('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMetaTag('meta[property="og:type"]', "property", "og:type", ogType);
    setMetaTag('meta[property="og:image"]', "property", "og:image", ogImage);

    // 6. Twitter Card Tags
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMetaTag('meta[name="twitter:url"]', "name", "twitter:url", canonicalUrl);
  }, [title, description, canonical, robots, ogImage, ogType, location.pathname]);

  return null;
}
