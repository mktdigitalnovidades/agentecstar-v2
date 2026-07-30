import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";

/* Carregamento imediato só para a Home */
import Index from "./pages/Index";

/* Lazy loading para páginas secundárias — não bloqueiam o carregamento inicial */
const NotFound           = lazy(() => import("./pages/NotFound"));
const Sitemap            = lazy(() => import("./pages/Sitemap"));
const SeoLandingPage     = lazy(() => import("./pages/SeoLandingPage"));
const BlogIndex          = lazy(() => import("./pages/BlogIndex"));
const BlogPost           = lazy(() => import("./pages/BlogPost"));
const CriacaoDeSite      = lazy(() => import("./pages/CriacaoDeSite"));
const PoliticaDePrivacidade = lazy(() => import("./pages/PoliticaDePrivacidade"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // cache de 5 min
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <WhatsAppButton />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/"                        element={<Index />} />
            <Route path="/criacao-de-site"         element={<CriacaoDeSite />} />
            <Route path="/blog"                    element={<BlogIndex />} />
            <Route path="/blog/:slug"              element={<BlogPost />} />
            <Route path="/mapa-do-site"            element={<Sitemap />} />
            <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
            <Route path="/:slug"                   element={<SeoLandingPage />} />
            <Route path="*"                        element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
