import { AlertTriangle, Clock, Frown, TrendingDown, Users, DollarSign, Search, CalendarX, MessageSquareX, PhoneOff, ArrowRight, HeartPulse, Moon } from "lucide-react";
import { Link } from "react-router-dom";

interface PainPointsProps {
  segment?: string;
}

// Banco Central de Dores por Nicho (SPIN Selling - Agitando Problemas de forma fria e elegante).
const segmentPainPoints: Record<string, { title: string; description: string; icon: any }[]> = {
  "Buffet e Eventos": [
    { title: "Saturação de Curiosos", description: "Perder horas de atendimento enviando PDFs pesados para leads que sequer têm o orçamento necessário.", icon: Search },
    { title: "Vendas Perdidas pela Demora", description: "O tempo de resposta longo faz noivas e empresas fecharem com a concorrência que respondeu na hora.", icon: Clock },
    { title: "Ociosidade nos Dias Úteis", description: "Dificuldade enorme em rentabilizar o espaço durante a semana, sofrendo com buracos na agenda.", icon: CalendarX },
    { title: "Falta de Follow-up", description: "Orçamentos antigos esfriam porque a equipe comercial não tem braço para resgatar os indecisos.", icon: AlertTriangle },
    { title: "Atendimento Bloqueado", description: "Perder solicitações de orçamentos grandiosos porque bateram às 22h, e a secretaria já encerrou o expediente.", icon: PhoneOff },
  ],
  "Clínica Veterinária": [
    { title: "Emergências Sem Resposta", description: "Tutores aflitos querem instrução rápida à meia-noite e se frustram sentindo abandono da marca.", icon: Moon }, // Vou trocar por Clock no render final (uso interno)
    { title: "Cancelamentos Invisíveis", description: "Consultas caem de última hora porque o dono não recebeu um reforço via WhatsApp no dia anterior.", icon: CalendarX },
    { title: "Falha na Retenção Anual", description: "Perder a data vitalícia do reforço de vacinas e vermífugos da carteirinha dos pets da sua base ativa.", icon: DollarSign },
    { title: "Recepção Sobrecargada", description: "A equipe se divide entre acolher um animal doente na porta e o telefone tocando sem parar com perguntas genéricas.", icon: PhoneOff },
    { title: "Zero Conversão em Exames", description: "Perguntas complexas sobre valores clínicos não são respondidas rápido, e o cliente vai para outra clínica.", icon: TrendingDown },
  ],
  "Pet Shop": [
    { title: "O Vai e Vem da Agenda", description: "Gastar tempo precioso combinando horários de tosa numa longa troca de mensagens ineficiente.", icon: CalendarX },
    { title: "Ticket Médio Baixo", description: "Incapacidade de empurrar hidratantes, planos mensais ou brinquedos durante o fluxo passivo de atendimento.", icon: DollarSign },
    { title: "Atrasos e Entalamentos", description: "A bagunça na agenda de papel gera dupla marcação e donos estressados esperando na recepção.", icon: Frown },
    { title: "Fuga Pós-Banho", description: "Esquecer de reativar o dono no WhatsApp quando já se passou o ciclo natural (15/30 dias) de um novo banho.", icon: TrendingDown },
    { title: "Lentidão às Segundas", description: "O aglomerado de solicitações de final de semana faz a equipe levar o dia inteiro para zerar os contatos na segunda.", icon: Clock },
  ],
  "Clínica de Estética": [
    { title: "Lacunas (No-Show)", description: "Perda irrecuperável de dinheiro quando o horário reservado da esteticista fica vago por esquecimento da cliente.", icon: CalendarX },
    { title: "Custo de Aquisição Perdido", description: "Dezenas de pessoas tiram dúvidas sobre o preço de harmonização facial, mas esfriam se não houver condução firme.", icon: MessageSquareX },
    { title: "Controle Falho de Sessões", description: "Perder receitas garantidas ao não lembrar a paciente que o retorno para reaplicação já venceu.", icon: AlertTriangle },
    { title: "Estoque de Oportunidades Morto", description: "Clientes antigas de limpeza de pele que nunca receberam uma oferta exclusiva sobre a nova depilação a laser.", icon: DollarSign },
    { title: "Horários Ociosos", description: "Dias da semana com profissionais ganhando sem trabalhar, enquanto faltou ação comercial da base fria.", icon: TrendingDown },
  ],
  "Imobiliária": [
    { title: "Visitas Que Não Convertem", description: "O corretor desloca recursos de tempo ou gasolina para mostrar o imóvel a pessoas sem limite de financiamento pré-aprovado.", icon: Users },
    { title: "Picos de Indecisão", description: "A longa jornada da venda esfria fatalmente quando não há re-engajamento do lead e nutrição dos desejos dele.", icon: Clock },
    { title: "Furos e Desistências (No-Shows)", description: "Plantão perdido num domingo ensolarado para leads que sequer mandaram um 'não consigo ir' e nunca chegaram ao stand.", icon: Frown },
    { title: "Perguntas de Operação Básica", description: "Equipe sendo soterrada ensinando o feijão-com-arroz de ITBI, documentação de locador ou taxas repetidamente para cada novo contato.", icon: MessageSquareX },
    { title: "Zero Esforço Ativo de Angariação", description: "Ignorar contatos em captação ou não criar esteiras fluentes para absorver mais produtos (locações e vendas na carteira).", icon: TrendingDown },
  ],
  "Salão de Beleza": [
    { title: "Falta de Ocupação Plena", description: "Incapacidade de criar uma esteira de encaixes rápido para preencher espaços vacantes gerados por cancelamentos súbitos ou meio de semana.", icon: CalendarX },
    { title: "Conflitos de Recepção", description: "Anotações informais ou duplas sobre quem reservou a colorista em uma tarde turbulenta acabam gerando uma grande tensão no estúdio.", icon: AlertTriangle },
    { title: "Cascata de Atrasos", description: "O silêncio do profissional e da gestão com a confirmação antecipada faz clientes atrasarem meia hora e jogarem toda grade pro alto.", icon: Clock },
    { title: "Corte das Dúvidas Fora de Expediente", description: "Nenhuma margem de manobra pro domingo onde uma noiva se frustra de contatar você num ataque de pânico do vestido ou madrinhas e ter o WhatsApp no mudo.", icon: PhoneOff },
    { title: "Histórico Perene em Brando", description: "Qual a tonalização exata da fulana 5 semanas atrás? Ninguém sabe. E isso corrói a blindagem da sua retenção e valor na percepção dela.", icon: Frown },
  ],
  "Academia": [
    { title: "Evsão e Cancelamento Silencioso (Churn)", description: "Alunos faltam três dias na semana e ninguém percebe a tempo. No final do mês, desistem da mensalidade e não renovam mais.", icon: TrendingDown },
    { title: "Gargalos de Balcão e Catraca", description: "Pendências minúsculas, multas pequenas e atualizações geram atritos e travam o fluxo físico presencial das portas.", icon: Users },
    { title: "A Quebra do Free Pass", description: "Incapacidade contundente de atender, na mesma noite de domingo, leads quentes cheios de vontade pra pisar na academia pela primeira vez na segunda de manhãzinha.", icon: Clock },
    { title: "Falta de Cuidado Individual", description: "Um simples 'Poxa, sentimos você ausente!' nunca existiu. Falta toque na personalização via retenção automática ao invés do professor ter que correr atrás só da galera maromba.", icon: HeartPulse },
    { title: "Trincheira de Relacionamento Passivo", description: "Dificuldade enorme de trazer de volta a lista suja de ex-alunos enviando propostas imbatíveis ao menor sinal de recuperação física próxima ao Verão.", icon: AlertTriangle },
  ],
  "Oficina": [
    { title: "Falta de Triagem de Problemas", description: "Atender quem só pergunta onde fica ou pedir um serviço incompatível antes de você saber o modelo/câmbio do carro toma sua vida e seu tempo nos dedos com óleo.", icon: DollarSign },
    { title: "Bases de Renda Quebradas", description: "Ninguém avisa cliente de correia de dentada ou as 10 mil km batidas há 6 meses atrás. Recorrência garantida é queimada no ralo.", icon: CalendarX },
    { title: "Dependência Vital das Respostas", description: "Lota a oficina com 8 veículos esperando dono validar peça e nada anda na rampa até as 17hs porque não foi gerada cadência de resposta.", icon: Clock },
    { title: "Nervosismo com o Entregável", description: "Clientes surtando de medo de estar sendo enrolados ligando toda hora pro galpão só pra escutar 'já acabei tudo mas vou verificar'.", icon: PhoneOff },
    { title: "O Sumiço Sem Complementos", description: "Trocou pastilhas, e jamais ofertou uma cristalização na semana seguinte ao polimento como bônus. Perda de 25% de markup de serviço casadas.", icon: TrendingDown },
  ],
  "Loja de Roupas": [
    { title: "Avalanche de Perguntas de Vitrine", description: "Seu tráfego explode com 90 'quanto é?' ou 'tem P?'. E as vendas só chegam na DMs. Se houver lentidão a adrenalina da compra se esvai de 3hs a 20 minutos fáceis.", icon: Clock },
    { title: "Custos Escondidos Em Dúvidas", description: "Seu pessoal qualificado gasta banda mental trocando mensagens sobre link de reverso e rastreio de PAC quando uma automação bastaria de forma limpa e objetiva.", icon: MessageSquareX },
    { title: "Base Intocável, Adoecida", description: "Os contatos gerados e acumulados jamais recebem um cupom antecipado de Primavera sendo totalmente ignorados e tratados de forma singular num envio genérico.", icon: Users },
    { title: "Carrinhos Obscuros Abandonados", description: "Aqueles que travam no PagSeguro, PIX não escaneado vão embora e sua estrutura perde os maiores ganhos fáceis na recuperação humanizada (o resgate automático).", icon: DollarSign },
    { title: "Cross-Selling Deficitário ou Estranho", description: "Vender uma legging G, esquecer de oferecer a blusa correlata no checkout do zapp, e ver o Tíquete Médio raso afundar sua rentabilidade bruta por compra individual.", icon: Frown },
  ],
  "Prestação de Serviços": [
    { title: "Deslocamentos Ociosos Custeando Caixa", description: "Ir na casa inspecionar calha pra constatar defeitos simples para em 1 min ouvir não sem antes filtrar por vídeos curtos/imagens da IA pelo Whatsapp com clareza da precificação base.", icon: AlertTriangle },
    { title: "Fugir Ou Paralisar Para Orçar", description: "Você não domina nem escala e joga na balança o fim de semana descansando se precisa ou gerar documento padronizado enquanto um Agente IA solta chaves instantâneas e escopos claros de obra.", icon: Clock },
    { title: "Emergências Desassistidas do Turno Fantasma", description: "Sua portaria ou Whatsapp no vazio numa quarta 2h15 am depois que encanamentos romperam; sua margem tripla foi pra concorrência que respondeu através de Bot em 1 minuto orientando fechar o registro.", icon: PhoneOff },
    { title: "Pesquisa de Satisfação E Feedback Fantasma", description: "As testemunhas, os depoimentos Google My Business cruciais morrem na praia sem coleta ágil com 3 estrelinhas que só viria depois que um prompt enviasse amoroso por gratidão de fechar encanamentos/telas protetoras.", icon: Frown },
    { title: "O Cobrador Humanizado Hostil", description: "O chato papel de se embaraçar com inadimplência em cobranças passivas (mensalidades); gerando constrangimentos ou demoras pra passar chaves, envios e PIX's recorrentes no prazo estipulado por ausências de avisos.", icon: DollarSign },
  ],
  "Corretor de Seguros": [
    { title: "Gargalo da Coleta Básica Em Cotizações", description: "Demora brutal enfiada no whatsapp recolhendo CHASSI, idade e garagem por vários dias pra então rodar sistema Multi-Cálculos sofrendo sem qualificação exata na esteira.", icon: TrendingDown },
    { title: "Perda Dramática Na Renovação de Carteira", description: "As margens ricas de renovações indo pro saco na agência oficial quando você se esquece de contactar pro atrito nos exatos 15 aos trinta dias prémios passuais, rasgando o re-engagement seguro.", icon: DollarSign },
    { title: "Suporte Desconfortável na Sinistralidade", description: "Seu cliente chora pra um Whatsapp que é apenas um robô burro mudo ao ter um espelho quebrado fora de base do horário padrão, ficando às mãos de um serviço confuso da assistência de seguradoras maiores.", icon: PhoneOff },
    { title: "Perder Peças Essenciais De Faltantes CNH/Docs", description: "Vidas inteiras rastreando PDFS picotados para renovar saúde em conversas perdidas na sua estrutura em meio a relatórios cruciais perdidos na desorganização mental da consultoria sem um banco indexável automatizado.", icon: Search },
    { title: "Miolos Cegos a Oportunidades Paralelas e Casadas", description: "Ganhar prêmio do seguro automotivo, calar-se no relacionamento ou no primeiro filho pra cross-sell de vida ou previdência familiar meses adiante através de ações direcionadas em nicho de forma passiva do bot.", icon: AlertTriangle },
  ],
};

// Dores fallback (Universais) para a Home.
const fallbackPains = [
  { title: "Sobrecarga de Tarefas Manuais", description: "Você se tornou funcionário da sua própria empresa: gasta a maior parte do dia enviando as mesmas mensagens no Instagram ou WhatsApp, ao invés de guiar a estratégia do negócio.", icon: Users },
  { title: "Lentidão nas Respostas", description: "Em um mundo imediatista, deixar um possível cliente esperando pelo seu retorno é o mesmo que empurrá-lo para o colo da concorrência.", icon: Clock },
  { title: "Ociosidade e Imprevisibilidade", description: "Oscilação assustadora na agenda: dias lotados e caóticos intercalados com dias silenciosos, destruindo a sua previsibilidade financeira.", icon: CalendarX },
  { title: "Caos e Leads Sem Nutrição", description: "Falta de controle na hora de cobrar reuniões. Pessoas que ficaram de 'te confirmar' esfriam e você acaba perdendo vendas quentes por falta de follow-up.", icon: AlertTriangle },
  { title: "Perdas Silenciosas Durante a Noite", description: "A sua geração de receita tem horário comercial para operar. Leads excelentes surgem de madrugada e perdem o engajamento quando você não os atende prontamente.", icon: PhoneOff },
];

const PainPoints = ({ segment }: PainPointsProps) => {
  const isDedicatedSegment = segment && segmentPainPoints[segment];
  // Se for uma rota SEO e tivermos um mapeamento, mostra as Dores Específicas. Senão, mostra o bloco Universal.
  const painsToRender = isDedicatedSegment ? segmentPainPoints[segment] : fallbackPains;
  
  // Títulos altamente persuasivos e adaptativos.
  const overTitle = isDedicatedSegment 
    ? "Identificando Gargalos:" 
    : "Uma Análise Crucial:";

  const title = isDedicatedSegment 
    ? `Os 5 desafios operacionais na rotina de quem gerencia: ${segment}`
    : "5 gargalos invisíveis que estancam o crescimento de pequenas empresas";

  return (
    <section id="pain-points" className="py-24 relative overflow-hidden bg-brand-navy">
      {/* Brilhos Noturnos/Premium (Fuchsia misturado com Cyan ao invés de Vermelho de Erro) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-brand-fuchsia/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Bloco de Cabeçalho do Copy (SPIN Selling - Problem/Agitation) */}
        <div className="text-center mb-16">
           <div className="inline-flex items-center justify-center space-x-2 mb-4 bg-brand-fuchsia/10 backdrop-blur-md rounded-full px-5 py-2 border border-brand-fuchsia/20">
             <AlertTriangle className="h-4 w-4 text-brand-fuchsia" />
             <span className="text-brand-fuchsia text-sm font-semibold tracking-widest uppercase">
               {overTitle}
             </span>
           </div>
           
           <h3 className="text-3xl md:text-5xl font-black text-white leading-tight mt-2 max-w-4xl mx-auto drop-shadow-lg">
             {title}
           </h3>
           <p className="mt-6 text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
             Enquanto você e a sua equipe se concentram em <strong className="text-white">apagar incêndios</strong> e responder mensagens manuais e repetitivas, debaixo dos seus narizes, pequenas ineficiências começam a dilapidar o faturamento todos os dias. 
           </p>
        </div>

        {/* Grade de Dores Premium (Dark com bordas leves de roxo/indigo) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
          {painsToRender.map((pain, idx) => {
             // Tratamento temporário se o ícone quebrar se chamar 'Moon'
             const Icon = pain.icon || Clock;
             
             return (
              <div 
                key={idx}
                className="group relative bg-[#0F1626] border border-slate-700/50 backdrop-blur-xl p-8 rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:border-brand-fuchsia/40 hover:shadow-[0_15px_40px_rgba(217,70,239,0.08)] flex flex-col items-start min-h-[220px]"
              >
                {/* Linha Fina Brilhante embaixo para dar toque elegante */}
                <div className="absolute inset-x-4 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-brand-fuchsia/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Quadrado Premium Ícone */}
                <div className="w-12 h-12 bg-slate-800/80 border border-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-fuchsia/10 group-hover:border-brand-fuchsia/40 transition-colors shadow-inner">
                  <Icon className="w-6 h-6 text-slate-300 group-hover:text-brand-fuchsia transition-colors drop-shadow-md" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 tracking-wide">
                  {pain.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {pain.description}
                </p>
              </div>
             )
          })}

          {/* Cartão Final = A SOLUÇÃO CIANO SUPER DESTACADA (Cura para as Dores) */}
          <div className="lg:col-span-1 md:col-span-2 group relative bg-gradient-to-br from-[#121E36] via-[#0B2135] to-brand-navy border border-brand-cyan/40 backdrop-blur-xl p-8 rounded-3xl transition-all duration-300 hover:scale-[1.03] hover:border-brand-cyan hover:shadow-[0_0_50px_rgba(62,206,208,0.2)] flex flex-col items-center justify-center min-h-[220px] text-center">
              
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 rounded-3xl mix-blend-overlay"></div>
              
              <h4 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-white mb-4 tracking-tight relative z-10">
                O Fim da Era Manual
              </h4>
              <p className="text-brand-cyan/80 text-sm mb-6 leading-relaxed relative z-10">
                É possível automatizar a sua captação de ponta a ponta: 24h por dia, sem folgas e integrado com seu WhatsApp! Uma máquina de fechamentos impulsionada por IA.
              </p>
              
              <div className="mt-auto relative z-10 w-full mt-4">
                 <Link to="#services" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                 }} className="w-full flex items-center justify-center gap-2 text-brand-dark bg-brand-cyan hover:bg-white font-bold px-6 py-3 rounded-xl transition-colors shadow-[0_0_20px_rgba(62,206,208,0.3)]">
                   Ver Soluções Exatas <ArrowRight className="w-4 h-4 ml-1" />
                 </Link>
              </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PainPoints;
