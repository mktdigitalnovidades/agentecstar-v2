import React, { useState, useId } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Calculator, Sparkles, MessageSquare, TrendingDown } from "lucide-react";

interface Preset {
  name: string;
  atendimentosDia: number;
  msgsPorAtendimento: number;
  diasMes: number;
  percentualAnuncio: number;
}

const PRESETS: Preset[] = [
  {
    name: "Salão de beleza",
    atendimentosDia: 20,
    msgsPorAtendimento: 8,
    diasMes: 30,
    percentualAnuncio: 32,
  },
  {
    name: "Clínica odontológica",
    atendimentosDia: 35,
    msgsPorAtendimento: 10,
    diasMes: 24,
    percentualAnuncio: 40,
  },
  {
    name: "Restaurante com delivery",
    atendimentosDia: 60,
    msgsPorAtendimento: 6,
    diasMes: 30,
    percentualAnuncio: 20,
  },
];

export const WhatsAppCostCalculator: React.FC = () => {
  const [atendimentosDia, setAtendimentosDia] = useState<number>(20);
  const [msgsPorAtendimento, setMsgsPorAtendimento] = useState<number>(8);
  const [diasMes, setDiasMes] = useState<number>(30);
  const [percentualAnuncio, setPercentualAnuncio] = useState<number>(32);
  const [precoPorMensagem, setPrecoPorMensagem] = useState<number>(0.035);
  const [descontarFranquia, setDescontarFranquia] = useState<boolean>(false);
  const [msgsReduzidas, setMsgsReduzidas] = useState<number>(4);

  const checkboxId = useId();

  const applyPreset = (preset: Preset) => {
    setAtendimentosDia(preset.atendimentosDia);
    setMsgsPorAtendimento(preset.msgsPorAtendimento);
    setDiasMes(preset.diasMes);
    setPercentualAnuncio(preset.percentualAnuncio);
    setMsgsReduzidas(Math.max(1, Math.floor(preset.msgsPorAtendimento / 2)));
  };

  // Cálculos Base
  const totalAtendimentosMes = atendimentosDia * diasMes;
  const mensagensEnviadasNoMes = totalAtendimentosMes * msgsPorAtendimento;
  const gratisAnuncio = Math.round(mensagensEnviadasNoMes * (percentualAnuncio / 100));
  const mensagensAposAnuncio = Math.max(0, mensagensEnviadasNoMes - gratisAnuncio);

  const gratisCotaMensal = descontarFranquia ? Math.min(1000, mensagensAposAnuncio) : 0;
  const mensagensCobradas = Math.max(0, mensagensAposAnuncio - gratisCotaMensal);

  const custoEstimadoMes = mensagensCobradas * precoPorMensagem;
  const custoEstimadoAno = custoEstimadoMes * 12;

  // Cálculos com Robô Otimizado
  const clampedMsgsReduzidas = Math.min(msgsReduzidas, msgsPorAtendimento);
  const mensagensEnviadasOtimizadas = totalAtendimentosMes * clampedMsgsReduzidas;
  const gratisAnuncioOtimizadas = Math.round(mensagensEnviadasOtimizadas * (percentualAnuncio / 100));
  const mensagensAposAnuncioOtimizadas = Math.max(0, mensagensEnviadasOtimizadas - gratisAnuncioOtimizadas);
  const gratisCotaOtimizada = descontarFranquia ? Math.min(1000, mensagensAposAnuncioOtimizadas) : 0;
  const mensagensCobradasOtimizadas = Math.max(0, mensagensAposAnuncioOtimizadas - gratisCotaOtimizada);
  const custoOtimizadoMes = mensagensCobradasOtimizadas * precoPorMensagem;
  const economiaMes = Math.max(0, custoEstimadoMes - custoOtimizadoMes);

  const whatsappLink = `https://wa.me/5519992288312?text=${encodeURIComponent(
    `Olá! Fiz a simulação na Calculadora de Custos do WhatsApp no Blog da AgentecStar (estimativa de R$ ${Math.round(custoEstimadoMes)}/mês com ${atendimentosDia} atendimentos/dia) e gostaria de otimizar meus fluxos de IA para reduzir custos.`
  )}`;

  return (
    <div id="calculadora-whatsapp" className="w-full my-12 not-prose">
      <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md">
        
        {/* Cabeçalho da Calculadora */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Nova cobrança · Desde 1º de outubro de 2026
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-3">
            Quanto o WhatsApp do seu negócio vai custar por mês?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            A API oficial do WhatsApp agora cobra pelas respostas que a sua empresa envia, inclusive as do seu robô ou IA. Ajuste os números abaixo e veja o custo estimado em tempo real.
          </p>
        </div>

        {/* Grade Principal: Controles à esquerda, Resultados à direita */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Lado Esquerdo: Parâmetros */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Presets Rápidos */}
            <div>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Comece com um exemplo:
              </span>
              <div className="flex flex-wrap gap-2">
                {PRESETS.map((preset) => (
                  <button
                    key={preset.name}
                    type="button"
                    onClick={() => applyPreset(preset)}
                    className="text-xs sm:text-sm font-medium bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-brand-cyan/50 text-slate-200 px-3.5 py-2 rounded-xl transition-all shadow-sm active:scale-95"
                  >
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Controle 1: Atendimentos por dia */}
            <div className="bg-slate-800/60 border border-slate-700/60 p-4 sm:p-5 rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm sm:text-base font-bold text-white">
                  Atendimentos por dia
                </label>
                <input
                  type="number"
                  min={1}
                  max={2000}
                  value={atendimentosDia}
                  onChange={(e) => setAtendimentosDia(Math.max(1, Number(e.target.value) || 1))}
                  className="w-20 text-center font-bold text-white bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-sm focus:outline-none focus:border-brand-cyan"
                />
              </div>
              <p className="text-xs text-slate-400 mb-3">
                Quantas pessoas diferentes conversam com a sua empresa no WhatsApp por dia.
              </p>
              <Slider
                value={[atendimentosDia]}
                min={1}
                max={200}
                step={1}
                onValueChange={(val) => setAtendimentosDia(val[0])}
                className="py-1"
              />
            </div>

            {/* Controle 2: Mensagens por atendimento */}
            <div className="bg-slate-800/60 border border-slate-700/60 p-4 sm:p-5 rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm sm:text-base font-bold text-white">
                  Mensagens que a empresa envia por atendimento
                </label>
                <input
                  type="number"
                  min={1}
                  max={50}
                  value={msgsPorAtendimento}
                  onChange={(e) => {
                    const val = Math.max(1, Number(e.target.value) || 1);
                    setMsgsPorAtendimento(val);
                    if (msgsReduzidas >= val) setMsgsReduzidas(Math.max(1, Math.floor(val / 2)));
                  }}
                  className="w-20 text-center font-bold text-white bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-sm focus:outline-none focus:border-brand-cyan"
                />
              </div>
              <p className="text-xs text-slate-400 mb-3">
                Conte cada balão enviado pelo robô ou pelo atendente. Abra uma conversa e conte.
              </p>
              <Slider
                value={[msgsPorAtendimento]}
                min={1}
                max={30}
                step={1}
                onValueChange={(val) => {
                  setMsgsPorAtendimento(val[0]);
                  if (msgsReduzidas >= val[0]) setMsgsReduzidas(Math.max(1, Math.floor(val[0] / 2)));
                }}
                className="py-1"
              />
            </div>

            {/* Controle 3: Dias de atendimento no mês */}
            <div className="bg-slate-800/60 border border-slate-700/60 p-4 sm:p-5 rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm sm:text-base font-bold text-white">
                  Dias de atendimento no mês
                </label>
                <input
                  type="number"
                  min={1}
                  max={31}
                  value={diasMes}
                  onChange={(e) => setDiasMes(Math.min(31, Math.max(1, Number(e.target.value) || 1)))}
                  className="w-20 text-center font-bold text-white bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-sm focus:outline-none focus:border-brand-cyan"
                />
              </div>
              <Slider
                value={[diasMes]}
                min={1}
                max={31}
                step={1}
                onValueChange={(val) => setDiasMes(val[0])}
                className="py-1"
              />
            </div>

            {/* Controle 4: Conversas por anúncio Click-to-WhatsApp */}
            <div className="bg-slate-800/60 border border-slate-700/60 p-4 sm:p-5 rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm sm:text-base font-bold text-white">
                  Conversas que chegam por anúncio Click-to-WhatsApp (%)
                </label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={percentualAnuncio}
                  onChange={(e) => setPercentualAnuncio(Math.min(100, Math.max(0, Number(e.target.value) || 0)))}
                  className="w-20 text-center font-bold text-white bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-sm focus:outline-none focus:border-brand-cyan"
                />
              </div>
              <p className="text-xs text-slate-400 mb-3">
                Essas conversas ficam grátis por 72 horas (ou até 7 dias conforme a janela de anúncios da Meta).
              </p>
              <Slider
                value={[percentualAnuncio]}
                min={0}
                max={100}
                step={1}
                onValueChange={(val) => setPercentualAnuncio(val[0])}
                className="py-1"
              />
            </div>

            {/* Controle 5: Preço por mensagem */}
            <div className="bg-slate-800/60 border border-slate-700/60 p-4 sm:p-5 rounded-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <label className="text-sm font-bold text-white block">
                    Preço por mensagem (R$)
                  </label>
                  <p className="text-xs text-slate-400">
                    Valor divulgado por provedores para o Brasil. Confira no Billing Hub da Meta.
                  </p>
                </div>
                <input
                  type="number"
                  step="0.001"
                  min={0.001}
                  max={1}
                  value={precoPorMensagem}
                  onChange={(e) => setPrecoPorMensagem(Number(e.target.value) || 0.035)}
                  className="w-28 text-center font-bold text-white bg-slate-900 border border-slate-700 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:border-brand-cyan self-start sm:self-auto"
                />
              </div>
            </div>

            {/* Checkbox Franquia 1000 */}
            <div className="flex items-start gap-3 bg-slate-800/40 border border-slate-700/50 p-4 rounded-2xl">
              <Checkbox
                id={checkboxId}
                checked={descontarFranquia}
                onCheckedChange={(checked) => setDescontarFranquia(Boolean(checked))}
                className="mt-1 border-slate-500 data-[state=checked]:bg-brand-cyan data-[state=checked]:text-brand-dark"
              />
              <div className="space-y-1">
                <label
                  htmlFor={checkboxId}
                  className="text-sm font-bold text-white cursor-pointer select-none"
                >
                  Descontar 1.000 mensagens grátis por mês
                </label>
                <p className="text-xs text-slate-400 leading-normal">
                  Alguns provedores informam essa cota por número. Marque só se ela aparecer na sua conta ou confirme no seu painel oficial.
                </p>
              </div>
            </div>

          </div>

          {/* Lado Direito: Card de Resultados e Economia */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card Principal de Custo */}
            <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border-2 border-indigo-500/30 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-cyan/10 rounded-full blur-3xl -z-0" />
              
              <div className="relative z-10">
                <span className="text-xs uppercase tracking-widest font-black text-indigo-300 block mb-1">
                  Custo Estimado por Mês
                </span>
                
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                    R$ {Math.round(custoEstimadoMes).toLocaleString("pt-BR")}
                  </span>
                </div>
                
                <p className="text-indigo-200/80 text-sm font-medium mb-6">
                  R$ {Math.round(custoEstimadoAno).toLocaleString("pt-BR")} por ano
                </p>

                <div className="border-t border-dashed border-indigo-500/30 pt-4 space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Mensagens enviadas no mês</span>
                    <strong className="text-white font-mono text-sm">{mensagensEnviadasNoMes.toLocaleString("pt-BR")}</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Grátis (anúncio 72h)</span>
                    <strong className="text-emerald-400 font-mono text-sm">{gratisAnuncio.toLocaleString("pt-BR")}</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Grátis (cota mensal)</span>
                    <strong className="text-emerald-400 font-mono text-sm">{gratisCotaMensal.toLocaleString("pt-BR")}</strong>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-slate-800 text-white font-semibold">
                    <span>Mensagens cobradas</span>
                    <strong className="text-amber-300 font-mono text-base">{mensagensCobradas.toLocaleString("pt-BR")}</strong>
                  </div>
                </div>

                {/* Subcard de Otimização */}
                <div className="mt-6 bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
                    <TrendingDown className="w-4 h-4" />
                    E se o robô respondesse em menos balões?
                  </div>
                  <p className="text-xs text-slate-300 mb-3">
                    Junte as respostas e use botões. Veja a economia se cada atendimento usar{" "}
                    <strong className="text-white underline">{clampedMsgsReduzidas} mensagens</strong>.
                  </p>
                  
                  <Slider
                    value={[clampedMsgsReduzidas]}
                    min={1}
                    max={Math.max(1, msgsPorAtendimento)}
                    step={1}
                    onValueChange={(val) => setMsgsReduzidas(val[0])}
                    className="py-1 mb-4"
                  />

                  <div className="text-emerald-400 font-black text-xl sm:text-2xl tracking-tight">
                    R$ {economiaMes.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/mês a menos
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Banner CTA Inferior */}
        <div className="mt-8 border border-amber-500/30 bg-amber-500/5 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Quer gastar menos sem atender pior?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              A <strong>AgentecStar</strong> ajusta o seu agente de IA no WhatsApp para responder em menos mensagens, com maior taxa de conversão e sem conversas truncadas.
            </p>
          </div>
          
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto text-center shrink-0 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            Conhecer a AgentecStar
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Legendas Finais e Direitos */}
        <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 space-y-2">
          <p>
            * Esta é uma estimativa com base nos dados públicos da Meta. Mensagens que o cliente envia não são cobradas. Mensagens de marketing têm outro preço (cerca de R$ 0,32 cada) e não entram nesta conta. Valores consultados em 02/10/2026.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-1 font-mono text-[10px] text-slate-500">
            <span>Calculadora por AgentecStar · Inteligência Artificial & Automação</span>
            <a href="https://www.agentecstar.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors underline">
              www.agentecstar.com
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhatsAppCostCalculator;
