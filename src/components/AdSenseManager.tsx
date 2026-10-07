import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ADSENSE_CLIENT = "ca-pub-4961237364015129";

/**
 * AdSenseManager
 * Garante que o script do Google AdSense seja carregado e executado
 * EXCLUSIVAMENTE nas páginas do blog (/blog e /blog/:slug).
 * Em qualquer outra rota (Home, clínicas, imobiliárias, criação de sites, etc.),
 * o script e quaisquer elementos de anúncios são desativados e removidos do DOM.
 */
export const AdSenseManager = () => {
  const location = useLocation();
  const isBlogRoute = location.pathname.startsWith("/blog");

  useEffect(() => {
    const SCRIPT_ID = "adsense-dynamic-script";
    const existingScript = document.getElementById(SCRIPT_ID);

    if (isBlogRoute) {
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = SCRIPT_ID;
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
        script.async = true;
        script.crossOrigin = "anonymous";
        document.head.appendChild(script);
      }
    } else {
      // Se saiu do blog, remove o script
      if (existingScript) {
        existingScript.remove();
      }

      // Remove elementos de anúncio automático ou containers injetados pelo AdSense fora do blog
      const autoAdElements = document.querySelectorAll(
        ".adsbygoogle, .google-auto-placed, ins.adsbygoogle, [id^='aswift_']"
      );
      autoAdElements.forEach((el) => {
        el.remove();
      });
    }
  }, [isBlogRoute, location.pathname]);

  return null;
};

export default AdSenseManager;
