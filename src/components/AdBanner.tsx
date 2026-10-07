import { useEffect } from "react";

interface AdBannerProps {
  slot?: string;
  format?: "auto" | "rectangle" | "horizontal";
  responsive?: boolean;
  className?: string;
}

/**
 * AdBanner
 * Bloco de anúncio responsivo para o Google AdSense.
 * Usado estrategicamente dentro dos artigos do blog e na listagem.
 */
export const AdBanner = ({
  slot = "default-slot",
  format = "auto",
  responsive = true,
  className = "",
}: AdBannerProps) => {
  useEffect(() => {
    try {
      // @ts-ignore
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (err) {
      // Ignora falhas se bloqueador de anúncios estiver ativo
    }
  }, []);

  return (
    <div className={`my-8 text-center not-prose ${className}`}>
      <span className="block text-[10px] text-slate-500 uppercase tracking-widest mb-1.5 font-mono">
        Publicidade
      </span>
      <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-2 min-h-[90px] flex items-center justify-center overflow-hidden shadow-inner">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-4961237364015129"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      </div>
    </div>
  );
};

export default AdBanner;
