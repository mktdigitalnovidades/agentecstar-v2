import { Heart, ShoppingBag, Calendar, Car, PartyPopper, Scissors, CheckCircle2, Sparkles, MessageSquare, CalendarCheck, Clock, Tag, ShoppingCart, UserCheck, ShieldCheck, PhoneCall, Gift, FileText, Home, Truck, CreditCard, PenTool, Key, Search, HelpCircle, Briefcase, RefreshCw } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useRef } from "react";

interface UseCasesProps {
  segment?: string;
}

// Map segment name from seo-data.ts to a list of exactly 6 use cases
const segmentUseCases: Record<string, { title: string; description: string; icon: any }[]> = {
  "Clínica Veterinária": [
    { title: "Pré Atendimento Inteligente", description: "Triagem automática de pacientes, coletando sintomas básicos antes da consulta.", icon: MessageSquare },
    { title: "Banho e Tosa", description: "Agendamentos integrados à sua agenda com lembretes no WhatsApp.", icon: CalendarCheck },
    { title: "Consultas Veterinárias", description: "Marcação de consultas normais ou de urgência 24 horas por dia.", icon: Clock },
    { title: "Lembretes de Vacinas", description: "Avisos automáticos sobre as datas de vacinação ou retornos do pet.", icon: ShieldCheck },
    { title: "Promoções Automáticas", description: "Envio de cupons e pacotes promocionais baseados no histórico do cliente.", icon: Tag },
    { title: "Venda de Produtos", description: "Catálogo de rações e medicamentos respondido diretamente pelo bot.", icon: ShoppingCart },
  ],
  "Pet Shop": [
    { title: "Pré Atendimento", description: "Atendimento imediato tirando dúvidas sobre preços e horários de funcionamento.", icon: MessageSquare },
    { title: "Agendamento de Banho e Tosa", description: "Fluxo automatizado para clientes escolherem as datas livres do salão.", icon: CalendarCheck },
    { title: "Agendamento de Consulta", description: "Integração direta com a agenda do veterinário responsável da loja.", icon: Clock },
    { title: "Lembrete de Serviços", description: "Mensagens enviadas dias antes para confirmar serviços recorrentes.", icon: Clock },
    { title: "Promoções Automáticas", description: "Campanhas semanais disparadas para as listas de contatos no WhatsApp.", icon: Tag },
    { title: "Venda de Produtos", description: "Fechamento de venda de brinquedos e petiscos finalizado pela IA.", icon: ShoppingCart },
  ],
  "Clínica de Estética": [
    { title: "Pré-atendimento 24/7", description: "Respostas instântaneas sobre valores, localização corporativa e pacotes.", icon: MessageSquare },
    { title: "Agendamento de Procedimentos", description: "Marcação rápida sem intervenção humana, lidando apenas com horários livres.", icon: CalendarCheck },
    { title: "Retorno de Consultas", description: "Integração para marcar o retorno dos pacientes nos dias recomendados.", icon: RefreshCw },
    { title: "Lembrete de Sessões", description: "Redução de faltas disparando mensagem de aviso 24 horas antes do evento.", icon: Clock },
    { title: "Pacotes Promocionais", description: "Ofertas com IA baseada em quais procedimentos o cliente já fez no passado.", icon: Gift },
    { title: "Triagem Inicial (Anamnese)", description: "Perguntas de rotina de saúde antes de a pessoa chegar até a clínica.", icon: FileText },
  ],
  "Imobiliária": [
    { title: "Qualificação de Leads", description: "O Bot descobre qual o perfil do comprador (faixa de renda, quartos, bairro).", icon: Search },
    { title: "Agendamento de Visitas", description: "Coordenação automática da agenda do corretor ao imóvel desejado.", icon: CalendarCheck },
    { title: "Envio de Catálogos", description: "O cliente recebe PDF's e links dos imóveis de acordo com seus filtros.", icon: Home },
    { title: "Financiamento", description: "FAQs rápidos sobre crédito Caixa, parcelas e FGTS já respondidos pela IA.", icon: CreditCard },
    { title: "Dúvidas sobre Fiador", description: "Esclarece opções como seguro fiança, título de capitalização ou fiadores.", icon: ShieldCheck },
    { title: "Captação de Imóveis", description: "Atendimento dedicado àqueles que querem colocar suas propriedades para alugar/venda.", icon: Key },
  ],
  "Salão de Beleza": [
    { title: "Pré-atendimento", description: "Atendimento rápido detalhando valor de luzes, corte, escova e unha.", icon: MessageSquare },
    { title: "Agendamento Inteligente", description: "O cliente fala 'Quarta às 15h' e a IA entende e marca com o profissional correto.", icon: CalendarCheck },
    { title: "Histórico de Procedimentos", description: "O Agente lembra qual química foi feita meses atrás no cabelo da cliente.", icon: FileText },
    { title: "Lembrete de Horários", description: "Zere cancelamentos de última hora com push notifications no WhatsApp.", icon: Clock },
    { title: "Remarcação Automática", description: "Se a cliente precisar desmarcar, o Bot já oferece novas datas de contrapartida.", icon: RefreshCw },
    { title: "Promoções e Combos", description: "Impulsione dias parados na semana rodando campanhas ativas no CRM.", icon: Tag },
  ],
  "Academia": [
    { title: "Matrículas Online", description: "Fechamento de novos alunos e instrução de pagamentos totalmente via IA.", icon: UserCheck },
    { title: "Renovação de Planos", description: "Cobranças gentis e emissão de segunda via do boleto vencido.", icon: CreditCard },
    { title: "Aulas Experimentais", description: "Coleta do nome, modalidade desejada e alinhamento do Free Pass.", icon: CalendarCheck },
    { title: "Lembrete de Treinos", description: "Push motivacional para evitar evasão dos alunos e aumentar engajamento.", icon: Clock },
    { title: "Recuperação de Ex-alunos", description: "Campanha em lote para disparar ofertas para quem abandonou o ginásio.", icon: RefreshCw },
    { title: "Tira Dúvidas de Grade", description: "O Bot avisa que horas começa a aula de Crossfit, Zumba ou Natação.", icon: HelpCircle },
  ],
  "Oficina": [
    { title: "Orçamento Prévio", description: "Atendimento agilizado para dar previsões simples baseado nos problemas relatados.", icon: FileText },
    { title: "Agendamento de Revisões", description: "Marcação exata de data e bloco de hora na rampa de suspensão e checkup.", icon: CalendarCheck },
    { title: "Lembrete de Troca de Óleo", description: "Mensagem recorrente baseada na quilometragem do último serviço realizado.", icon: Clock },
    { title: "Status do Conserto", description: "O cliente manda mensagem e o Bot avisa exatamente qual a fase do reparo atual.", icon: Car },
    { title: "Dúvidas de Peças", description: "Integração para dizer se vocês fornecem determinada peça ou óleo automotivo.", icon: HelpCircle },
    { title: "Histórico de Veículo", description: "Agente acessa o CRM e relembra que trocou a correia dentada 2 anos atrás.", icon: Search },
  ],
  "Loja de Roupas": [
    { title: "Atendimento Rápido", description: "O Agente recepciona 100% dos clientes e identifica cores e numerações preferidas.", icon: UserCheck },
    { title: "Catálogo Interativo", description: "Envio automático das tendências, vitrines PDF ou links filtrados do site.", icon: ShoppingBag },
    { title: "Dúvidas de Tamanho/Troca", description: "O Bot lê a 'Política de Trocas' da marca e resolve problemas de garantia no ato.", icon: FileText },
    { title: "Rastreio e Frete", description: "Integração via API com Correios: o cliente só digita o CPF e a IA conta onde está.", icon: Truck },
    { title: "Checkout por WhatsApp", description: "Envio do Link de pagamento PIX ou Cartão finalizando o pedido em DMs.", icon: CreditCard },
    { title: "Lançamento de Coleção", description: "Blast promocional VIP para as compradoras mais fiéis ativando caixa rápido.", icon: Gift },
  ],
  "Prestação de Serviços": [
    { title: "Qualificação Automática", description: "A IA filtra clientes que estão nas cidades atendidas e os especifica.", icon: Search },
    { title: "Visitas Técnicas", description: "Encaixe da grade do técnico na rota de forma automática para evitar buracos.", icon: CalendarCheck },
    { title: "Orçamento Padronizado", description: "Para serviços commoditizados, a IA chuta faixas de preço sob demanda.", icon: FileText },
    { title: "Emissão de Boletos", description: "A IA manda código de barras por PDF gerado do sistema quando solicitado.", icon: CreditCard },
    { title: "Suporte Pós-Serviço", description: "Pesquisa de satisfação NPS e coleta de avaliações após o conserto.", icon: RefreshCw },
    { title: "Acionamento Extra", description: "Se o cliente usar termo 'vazamento!', a IA encaminha pro plantonista.", icon: PenTool },
  ],
  "Buffet e Eventos": [
    { title: "Catálogo Interativo", description: "Descreve com riqueza de detalhes pacotes de decoração e doces.", icon: Gift },
    { title: "Orçamento de Festa", description: "O lead diz quantas pessoas terá a festa, e a IA calcula a projeção do pacote.", icon: CreditCard },
    { title: "Degustação", description: "Apenas depois de qualificado, o cliente pode marcar dia com a cerimonialista.", icon: CalendarCheck },
    { title: "Confirmação RSVP", description: "Bot envia WhatsApp aos convidados e soma a quantidade real para o dia da festa.", icon: UserCheck },
    { title: "Dúvidas de Capacidade", description: "Tira dúvidas de localização, acesso a cadeirantes e ar condicionado.", icon: HelpCircle },
    { title: "Contrato e Pagamento", description: "Acompanhamento do status para não deixar a festa descasada das parcelas do ano.", icon: FileText },
  ],
  "Corretor de Seguros": [
    { title: "Cotação Inteligente", description: "O Lead passa CPF e placa e a IA encaminha direto pro sistema Multicálculo.", icon: FileText },
    { title: "Renovação de Apólices", description: "30 dias antes do fim, o Bot engaja já com a melhor oferta para não perder o seguro.", icon: RefreshCw },
    { title: "Abertura de Sinistro", description: "Instruções passo a passo de fotos, BO e guinchos 24 horas por dia.", icon: ShieldCheck },
    { title: "Endossos e Boletos", description: "Criação de boletos extras de parcela de forma totalmente self-service.", icon: CreditCard },
    { title: "Dúvidas de Cobertura", description: "Responde rapidamente se cobre vidro lateral quebrado e em qual limite.", icon: HelpCircle },
    { title: "Recuperação de Churn", description: "Volta ativa a conversar com clientes que perderam vigência anos atrás.", icon: UserCheck },
  ],
  "Corretor de Imoveis": [
    { title: "Triagem de Qualificação", description: "Fale apenas com o lead que demonstrou perfil de financiamento ideal.", icon: Search },
    { title: "Agendamento Decorado", description: "Traz o agendamento de stand para dias de semana otimizando o gerente.", icon: CalendarCheck },
    { title: "Material Publicitário", description: "Dispara os Renders, Tour virtual e tabelas Price para aquecimento do Lead.", icon: Home },
    { title: "Simulador de Parcelas", description: "Usa API padrão para estipular a renda familiar mínima requerida da planta.", icon: CreditCard },
    { title: "Reengajamento", description: "Em longas jornadas imobiliárias, a IA não deixa o contato esfriar por meses.", icon: RefreshCw },
    { title: "Captação Ativa", description: "Propostas e abordagem com proprietários rodadas de forma 100% paralela.", icon: Briefcase },
  ],
  "E-commerce": [
    { title: "Carrinho Abandonado", description: "O cliente sai do site, o Zap manda: 'Esqueceu seus itens?', e oferece brinde.", icon: ShoppingCart },
    { title: "Rastreamento", description: "As perguntas de logística agora são processadas magicamente por AI.", icon: Truck },
    { title: "Dúvidas/FAQ", description: "O Bot usa todos seus manuais como Bíblia para tirar bloqueios de compra.", icon: MessageSquare },
    { title: "Troca Automatizada", description: "Aciona Reversa sem intervenção manual apenas checando o código de compra.", icon: RefreshCw },
    { title: "Upsell Pós Venda", description: "O Agente envia complementos ao item já faturado aumentando o ticket médio.", icon: Tag },
    { title: "Pesquisa de Satisfação", description: "Bot engaja os lovers e convida a preencher avaliações na plataforma.", icon: UserCheck },
  ],
};

const UseCases = ({ segment }: UseCasesProps) => {
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const carouselApiRef = useRef<any>(null);

  const useCases = [
    {
      icon: Heart,
      title: "Clínicas",
      description: "Confirmação e agendamento automático de consultas com integração via WhatsApp.",
      features: ["Agendamento 24/7", "Confirmação automática", "Lembretes de consulta", "Histórico médico"],
      color: "#D946EF",
      image: "/clinic_background.webp"
    },
    {
      icon: ShoppingBag,
      title: "Comércio",
      description: "Suporte a pedidos, catálogo de produtos e solução de dúvidas frequentes.",
      features: ["Catálogo automático", "Status de pedidos", "Dúvidas frequentes", "Suporte pós-venda"],
      color: "#3ECED0",
      image: "/retail_background.webp"
    },
    {
      icon: Calendar,
      title: "Pet Shops",
      description: "Agendamentos de banho, tosa e consultas veterinárias de forma independente.",
      features: ["Agendamento online", "Lembrete de serviços", "Histórico do pet", "Promoções automáticas"],
      color: "#542FA3",
      image: "/petshop_background.webp"
    },
    {
      icon: Car,
      title: "Veículos",
      description: "Agendamento de test drive automático e consulta de estoque via IA.",
      features: ["Test drive automático", "Consulta de estoque", "Financiamento", "Agendamento de visitas"],
      color: "#00E5FF",
      image: "/dealership_background.webp"
    },
    {
      icon: PartyPopper,
      title: "Eventos",
      description: "Organização e envio de convites interativos, orçamentos e agendamento.",
      features: ["Confirmação de presença", "Cardápio automático", "Orçamentos imediatos", "Agenda de eventos"],
      color: "#C55C8A",
      image: "/events_background.webp"
    },
    {
      icon: Scissors,
      title: "Salões",
      description: "Gestão inteligente da agenda dos profissionais e tratamentos capilares.",
      features: ["Agendamento online", "Histórico de serviços", "Lembretes automáticos", "Promoções via IA"],
      color: "#3ECED0",
      image: "/salon_background.webp"
    }
  ];

  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (carouselApiRef.current) {
          carouselApiRef.current.scrollNext();
        }
      }, 5000);
    };

    const stopAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    };

    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const handleMouseEnter = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    autoScrollRef.current = setInterval(() => {
      if (carouselApiRef.current) {
        carouselApiRef.current.scrollNext();
      }
    }, 5000);
  };

  return (
    <section id="use-cases" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #1E293B 0%, #190C59 100%)' }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Casos de <span className="text-gradient-cyber">Uso</span>
          </h2>
          {segment && segmentUseCases[segment] ? (
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Veja as tarefas e rotinas exatas que a Inteligência Artificial executa de forma brilhante para a área de <span className="text-brand-cyan font-bold">{segment}</span>
            </p>
          ) : (
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Veja como diferentes tipos de negócio maximizam lucros com a IA
            </p>
          )}
        </div>

        {segment && segmentUseCases[segment] ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pb-12">
            {segmentUseCases[segment].map((useCase, index) => (
              <div 
                  key={index} 
                  className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-brand-cyan/50 p-8 rounded-2xl flex flex-col items-start transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(62,206,208,0.1)] relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-2xl group-hover:bg-brand-cyan/10 transition-colors" />
                 <useCase.icon className="w-12 h-12 text-brand-cyan mb-6 p-2 bg-brand-navy/80 rounded-xl" />
                 <h3 className="text-xl font-bold text-white mb-3 text-left">{useCase.title}</h3>
                 <p className="text-slate-400 text-sm leading-relaxed text-left relative z-10">{useCase.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full"
              setApi={(api) => { carouselApiRef.current = api; }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <CarouselContent className="-ml-2 md:-ml-4 py-8">
                {useCases.map((useCase, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div 
                      className="relative group overflow-hidden rounded-2xl w-full h-[380px] md:h-[450px] cursor-pointer transition-transform duration-500 hover:-translate-y-2 border border-slate-700/50 hover:border-transparent" 
                      style={{
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 50px ${useCase.color}66`;
                        (e.currentTarget as HTMLDivElement).style.borderColor = useCase.color;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(51,65,85,0.5)';
                      }}
                    >
                      {/* Imagem de Fundo Fotorealista */}
                      <img 
                        src={useCase.image} 
                        alt={useCase.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      
                      {/* Overlay Escuro: Leve normalmente, muito escuro no hover para revelar texto (Requisito do Usuário) */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500 bg-black/30 group-hover:bg-[#0f172a]/90 backdrop-blur-[2px] group-hover:backdrop-blur-md" />

                      {/* Estado Normal (Ícone e Título grandes no centro/fundo) */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4 bg-black/40 backdrop-blur-md border border-white/10" style={{ boxShadow: `0 0 30px ${useCase.color}40` }}>
                          <useCase.icon className="h-8 w-8 md:h-10 md:w-10" style={{ color: useCase.color }} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{useCase.title}</h3>
                      </div>

                      {/* Estado Hover (Texto e Features que aparecem subindo) */}
                      <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-12 group-hover:translate-y-0">
                        <useCase.icon className="h-6 w-6 md:h-8 md:w-8 mb-2 md:mb-4 drop-shadow-lg" style={{ color: useCase.color }} />
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 tracking-wide text-center">{useCase.title}</h3>
                        <p className="text-slate-200 mb-4 md:mb-6 text-xs md:text-sm leading-relaxed drop-shadow-md line-clamp-3">{useCase.description}</p>
                        
                        <div className="w-full flex flex-col gap-1.5 md:gap-2">
                          {useCase.features.map((feature, idx) => (
                            <div key={idx} className="text-xs font-medium text-white bg-white/10 backdrop-blur-md rounded-lg py-2 px-3 border border-white/20 shadow-sm flex items-center justify-center gap-2">
                               <div className="w-1.5 h-1.5 rounded-full" style={{ background: useCase.color, boxShadow: `0 0 5px ${useCase.color}` }}></div>
                               {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex border-slate-700 bg-slate-800/80 text-white hover:bg-slate-700 hover:text-brand-cyan" />
              <CarouselNext className="hidden md:flex border-slate-700 bg-slate-800/80 text-white hover:bg-slate-700 hover:text-brand-cyan" />
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
};

export default UseCases;
