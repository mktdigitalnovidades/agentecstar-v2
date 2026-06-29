import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Globe, 
  Search, 
  Zap, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Laptop, 
  MessageCircle, 
  Bot, 
  X, 
  AlertCircle, 
  Plus, 
  Minus,
  HelpCircle,
  Code2,
  Phone
} from "lucide-react";

export default function CriacaoDeSite() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    const text = `Olá! Meu nome é ${name.trim()}${company.trim() ? `, da empresa ${company.trim()}` : ""}.\n\nEstou vindo da página de Criação de Sites e gostaria de solicitar um orçamento.\n\nDetalhes/Observações:\n${notes.trim()}`;
    const link = `https://wa.me/5519992288312?text=${encodeURIComponent(text)}`;
    window.open(link, '_blank');
  };

  const whatsappLink = "https://wa.me/5519992288312?text=Olá! Vim da página de Criação de Sites e gostaria de solicitar um orçamento para o meu negócio.";

  // Estado para controlar o acordeão de FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const painPoints = [
    {
      title: "Design ultrapassado e amador",
      desc: "Um site antigo afasta potenciais clientes, gerando desconfiança e passando uma imagem de amadorismo sobre a sua marca."
    },
    {
      title: "Invisível nas pesquisas do Google",
      desc: "Não adianta ter um site se ninguém consegue encontrá-lo. Sem otimização SEO correta, você perde tráfego orgânico diário."
    },
    {
      title: "Lentidão extrema ao carregar",
      desc: "Mais de 53% dos usuários abandonam páginas que demoram mais de 3 segundos para carregar no celular. Lentidão mata vendas."
    },
    {
      title: "Não funciona no celular",
      desc: "Se o seu site quebra, desalinha ou fica com fontes minúsculas em smartphones, você está ignorando mais de 70% das visitas."
    }
  ];

  const features = [
    {
      icon: <Search className="h-6 w-6 text-brand-cyan" />,
      title: "Otimização SEO de Elite (Pronto para o Google)",
      desc: "Desenvolvemos seu site aplicando técnicas avançadas de SEO local e estruturado. Sua empresa pronta para disputar as primeiras posições das pesquisas."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-brand-cyan" />,
      title: "Layout Responsivo & Mobile-First",
      desc: "Interface perfeitamente adaptada para celulares, tablets, notebooks e desktops, garantindo a melhor experiência em qualquer tela."
    },
    {
      icon: <Zap className="h-6 w-6 text-brand-cyan" />,
      title: "Velocidade Ultra Rápida (PageSpeed A)",
      desc: "Código limpo e otimização de imagens de última geração para que o site carregue em menos de 1.5 segundos, agradando o Google e os usuários."
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-brand-cyan" />,
      title: "Botões de WhatsApp & Call to Action (CTA)",
      desc: "Posicionamento estratégico de botões de conversão e chamadas para ação, transformando simples visitantes em contatos comerciais diretos."
    },
    {
      icon: <Laptop className="h-6 w-6 text-brand-cyan" />,
      title: "Painel Autogerenciável e Amigável",
      desc: "Edite textos, mude fotos ou adicione novos posts no blog de forma simples, sem depender de programadores e sem dor de cabeça."
    },
    {
      icon: <Bot className="h-6 w-6 text-brand-cyan" />,
      title: "Integração de IA e Automação de Leads",
      desc: "Possibilidade de integrar agentes inteligentes de IA no WhatsApp do seu novo site para qualificar leads e realizar atendimentos 24h por dia."
    }
  ];

  const steps = [
    { number: "01", title: "Imersão & Planejamento", desc: "Entendemos seu negócio, analisamos seus concorrentes e planejamos o mapa do site focado em conversão." },
    { number: "02", title: "Design Visual Premium", desc: "Criamos a interface visual (UI) sob medida, aplicando a identidade da sua marca e regras de experiência do usuário (UX)." },
    { number: "03", title: "Desenvolvimento & SEO", desc: "Escrevemos o código do site otimizado, veloz, responsivo e com todas as configurações de SEO integradas de fábrica." },
    { number: "04", title: "Configurações de Conversão", desc: "Integramos links de WhatsApp, formulários de contato, tags do Google Analytics, Pixel do Facebook e LGPD." },
    { number: "05", title: "Lançamento & Suporte", desc: "Colocamos o site no ar de forma segura e fornecemos treinamento simples para você gerenciar o conteúdo." }
  ];

  const faqs = [
    {
      q: "Quanto custa a criação de um site profissional?",
      a: "O valor de investimento depende da complexidade do projeto, da quantidade de páginas e das integrações necessárias (como CRM, sistemas de agendamento ou IA). Na AgentecStar, desenvolvemos desde Landing Pages focadas em campanhas rápidas até Portais Institucionais complexos. Fale conosco para receber um orçamento personalizado de acordo com o seu orçamento e necessidade."
    },
    {
      q: "Quanto tempo demora para o site ficar pronto?",
      a: "O prazo médio de desenvolvimento é de 15 a 30 dias úteis a partir da entrega de todos os materiais e aprovação do layout visual. Projetos mais simples, como Landing Pages, podem ser entregues em prazos menores (de 7 a 10 dias)."
    },
    {
      q: "O site já vem otimizado para o Google (SEO)?",
      a: "Sim! Todos os sites desenvolvidos pela AgentecStar já saem de fábrica 100% otimizados. Isso inclui estrutura semântica HTML correta, velocidade de carregamento (Performance PageSpeed), tags de cabeçalho (H1, H2, H3), Open Graph para redes sociais, mapa do site (sitemap.xml) e indexação no Google Search Console."
    },
    {
      q: "O site funciona bem em celulares?",
      a: "Com certeza. Nossos projetos são desenvolvidos sob a filosofia Mobile-First. Isso significa que projetamos a melhor experiência de leitura e clique focando nos smartphones e depois adaptamos para telas maiores. O site funcionará perfeitamente em qualquer dispositivo."
    },
    {
      q: "Preciso pagar alguma mensalidade?",
      a: "Não cobramos mensalidade pelo site em si. O site é 100% seu. Os únicos custos recorrentes de qualquer site na internet são a hospedagem (onde o site fica guardado) e o registro do seu domínio (ex: suaempresa.com.br). Nós auxiliamos você a configurar esses serviços nas melhores e mais baratas provedoras do mercado."
    },
    {
      q: "Qual a diferença entre Landing Page e Site Institucional?",
      a: "Uma Landing Page é uma página única de alta conversão estruturada especificamente para vender um produto ou serviço e captar contatos (leads) através de anúncios pagos. Um Site Institucional é mais amplo, contendo múltiplas páginas (Home, Quem Somos, Serviços, Blog, Contato) para gerar credibilidade e posicionamento orgânico no Google a médio e longo prazo."
    },
    {
      q: "Como funciona a integração do WhatsApp no site?",
      a: "Inserimos botões flutuantes estratégicos e chamadas de conversão que iniciam uma conversa direta no seu WhatsApp com mensagens pré-configuradas. Além disso, podemos integrar a ferramenta a assistentes virtuais inteligentes de IA para que o cliente seja atendido mesmo fora do horário comercial."
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-slate text-slate-200">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[85vh] flex items-center bg-gradient-to-br from-brand-dark via-brand-navy to-brand-blue overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[100px] animate-float" />
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md rounded-full px-5 py-2 border border-brand-cyan/25">
                <Sparkles className="h-4 w-4 text-brand-cyan" />
                <span className="text-brand-cyan text-sm font-semibold tracking-wider uppercase">Criação de Sites Profissionais</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Criamos Sites de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-fuchsia">Alta Performance</span> que Vendem por Você
              </h1>

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-2xl">
                Desenvolvimento de sites institucionais, landing pages e portais 100% otimizados para o Google (SEO), ultra velozes e focados em transformar visitantes em clientes qualificados.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  onClick={() => window.open(whatsappLink, '_blank')} 
                  className="w-full sm:w-auto bg-gradient-to-r from-brand-cyan to-brand-purple hover:from-brand-purple hover:to-brand-cyan text-white px-8 py-6 text-lg font-bold shadow-lg shadow-brand-cyan/20 hover:shadow-brand-purple/20 transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicitar Orçamento Gratuito
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => document.getElementById('pain-points')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="w-full sm:w-auto border-white/20 hover:border-brand-cyan text-white px-8 py-6 text-lg font-medium bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  Conhecer Nossos Diferenciais
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-6 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-cyan" />
                  <span>Código Otimizado SEO</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-cyan" />
                  <span>Design Responsivo Exclusivo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-cyan" />
                  <span>Carregamento Ultra Rápido</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block relative">
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-tr from-brand-purple/20 to-brand-cyan/20 p-8 border border-white/10 backdrop-blur-sm relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-brand-dark/40" />
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="bg-white/10 px-4 py-1 rounded-full text-xs text-slate-400 font-mono">agentecstar.com</div>
                  </div>
                  
                  <div className="my-auto space-y-4 text-center">
                    <Globe className="h-20 w-20 mx-auto text-brand-cyan animate-bounce" />
                    <h3 className="text-xl font-bold text-white">Pronto para o Google</h3>
                    <p className="text-sm text-slate-400 px-4">Sites estruturados com as melhores práticas de SEO e indexação imediata.</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Desempenho Mobile</span>
                    <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">100/100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dores do Cliente Section */}
      <section id="pain-points" className="py-24 bg-brand-dark/50 border-y border-white/5 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Seu Site Atual Apresenta Algum Desses Sintomas?</h2>
            <p className="text-lg text-slate-400 font-light">Se a sua empresa não vende pela internet, o culpado pode ser a estrutura defasada do seu site.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {painPoints.map((item, index) => (
              <div key={index} className="bg-brand-slate border border-white/5 hover:border-brand-purple/40 rounded-xl p-6 transition-all duration-300 hover:shadow-xl group">
                <div className="h-10 w-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
                  <AlertCircle className="h-5 w-5 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-brand-cyan transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais / Benefícios Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Como a AgentecStar Cria seu Site</h2>
            <p className="text-lg text-slate-400 font-light">Unimos design de ponta, velocidade extrema e otimização para motores de busca para garantir o melhor ROI do seu projeto.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <div key={index} className="bg-brand-dark/40 border border-white/10 hover:border-brand-cyan/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full transition-all duration-300 group-hover:bg-brand-cyan/10" />
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabela Comparativa (GEO-friendly) */}
      <section className="py-24 bg-brand-dark/30 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Nem Todo Site é Criado Igual</h2>
            <p className="text-lg text-slate-400 font-light mt-4">Entenda a diferença de investir em um site profissional estratégico em vez de soluções baratas e amadoras.</p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-dark/80 border-b border-white/10">
                  <th className="p-6 text-lg font-bold text-white">Funcionalidade / Aspecto</th>
                  <th className="p-6 text-lg font-bold text-red-400">Site Amador / Barato</th>
                  <th className="p-6 text-lg font-bold text-brand-cyan bg-brand-cyan/5">Site AgentecStar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-6 text-slate-300 font-medium">Design & Layout</td>
                  <td className="p-6 text-slate-400 text-sm">Templates prontos, genéricos e idênticos aos concorrentes.</td>
                  <td className="p-6 text-white text-sm bg-brand-cyan/5">Design exclusivo, personalizado com foco na identidade da sua marca.</td>
                </tr>
                <tr>
                  <td className="p-6 text-slate-300 font-medium">Otimização SEO</td>
                  <td className="p-6 text-slate-400 text-sm">Nenhuma ou básica. Invisível nas pesquisas do Google.</td>
                  <td className="p-6 text-white text-sm bg-brand-cyan/5">SEO completo e estruturado para ranqueamento regional de serviços.</td>
                </tr>
                <tr>
                  <td className="p-6 text-slate-300 font-medium">Velocidade (PageSpeed)</td>
                  <td className="p-6 text-slate-400 text-sm">Lento, cheio de códigos pesados e imagens desformatadas.</td>
                  <td className="p-6 text-white text-sm bg-brand-cyan/5">Carregamento rápido (menos de 1.5s) com foco em retenção de usuários.</td>
                </tr>
                <tr>
                  <td className="p-6 text-slate-300 font-medium">Foco em Conversão</td>
                  <td className="p-6 text-slate-400 text-sm">Apenas informações soltas, sem CTAs ou botões claros de contato.</td>
                  <td className="p-6 text-white text-sm bg-brand-cyan/5">Gatilhos mentais e botões de WhatsApp estrategicamente localizados.</td>
                </tr>
                <tr>
                  <td className="p-6 text-slate-300 font-medium">Autonomia de Conteúdo</td>
                  <td className="p-6 text-slate-400 text-sm">Dependência total de programadores para qualquer pequena mudança de texto.</td>
                  <td className="p-6 text-white text-sm bg-brand-cyan/5">Painel simples e autogerenciável para você mesmo fazer alterações rápidas.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* O Processo Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Nosso Processo de Criação de Sites</h2>
            <p className="text-lg text-slate-400 font-light">Uma metodologia testada que garante a entrega de um projeto de alta qualidade no prazo acordado.</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative bg-brand-slate border border-white/5 rounded-2xl p-6 space-y-4">
                <span className="text-4xl font-extrabold text-brand-purple/40 block font-mono">{step.number}</span>
                <h4 className="text-lg font-bold text-white">{step.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (AEO/Search optimized) */}
      <section className="py-24 bg-brand-dark/40 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-4 py-1.5 border border-white/10">
              <HelpCircle className="h-4 w-4 text-brand-cyan" />
              <span className="text-sm font-semibold text-slate-300">Dúvidas Frequentes</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Tudo Sobre Criação de Sites</h2>
            <p className="text-lg text-slate-400 font-light">Encontre respostas diretas para as dúvidas mais comuns sobre o desenvolvimento de novos sites.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-brand-slate border border-white/10 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.q}</h3>
                  {openFaq === index ? (
                    <Minus className="h-5 w-5 text-brand-cyan shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-brand-cyan shrink-0" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 border-t border-white/5">
                    <p className="text-sm md:text-base leading-relaxed font-light">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Contato WhatsApp (Preenchimento igual ao principal da AgentecStar) */}
      <section id="contact-form" className="py-20 bg-gradient-brand border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Faça Seu Orçamento de Site
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Preencha os dados abaixo e seja direcionado diretamente para falar com o nosso time técnico no WhatsApp.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">
                  Orçamento via WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white font-medium">Nome *</Label>
                    <Input 
                      id="name" 
                      type="text" 
                      required 
                      placeholder="Seu nome" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-white/5 border-white/20 text-white placeholder-slate-400 focus:border-brand-cyan"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white font-medium">Empresa</Label>
                    <Input 
                      id="company" 
                      type="text" 
                      placeholder="Nome da sua empresa (opcional)" 
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="bg-white/5 border-white/20 text-white placeholder-slate-400 focus:border-brand-cyan"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-white font-medium">O que você precisa no site?</Label>
                    <Textarea 
                      id="notes" 
                      placeholder="Ex: Preciso de uma Landing Page para meu consultório ou site institucional para minha empresa com 5 páginas..." 
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="bg-white/5 border-white/20 text-white placeholder-slate-400 focus:border-brand-cyan min-h-[100px]"
                    />
                  </div>

                  <div className="flex items-center justify-center space-x-2 text-white pb-2">
                    <Phone className="h-5 w-5 text-brand-cyan" />
                    <span className="text-xl font-semibold">(19) 99228-8312</span>
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-white w-full py-4 text-lg font-bold transition-all duration-300"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Enviar para o WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-brand-navy via-brand-purple to-brand-dark border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Pronto para colocar sua empresa na primeira página do Google com um site incrível?
          </h2>
          <p className="text-lg md:text-xl text-slate-200 font-light max-w-2xl mx-auto">
            Não perca mais clientes para a concorrência por causa de um site lento, confuso ou invisível. Peça seu orçamento sem compromisso hoje mesmo.
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              onClick={() => window.open(whatsappLink, '_blank')} 
              className="bg-brand-cyan hover:bg-brand-cyan-bright text-brand-dark px-10 py-6 text-xl font-bold rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="mr-2 h-6 w-6 text-brand-dark" />
              Falar com um Especialista da AgentecStar
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
