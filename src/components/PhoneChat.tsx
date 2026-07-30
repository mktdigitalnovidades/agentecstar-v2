import { useState, useEffect, useRef } from "react";
import { Bot, Send, Phone, Video, MoreVertical } from "lucide-react";

type Sender = "agent" | "client";
interface ChatMsg {
  id: number;
  sender: Sender;
  text: string;
  time: string;
  delay: number;
}

const CONVERSATION: ChatMsg[] = [
  { id: 1,  sender: "agent",  text: "Oi! Vi que você visitou agentecstar.com. Qual é seu negócio?", time: "09:41", delay: 800 },
  { id: 2,  sender: "client", text: "Sou dono de loja online, tenho 100 pedidos por dia", time: "09:41", delay: 2200 },
  { id: 3,  sender: "agent",  text: "Bacana! E hoje, quando um cliente manda mensagem, como vocês respondem?", time: "09:42", delay: 2000 },
  { id: 4,  sender: "client", text: "Fica sem resposta até no outro dia... perco muitas vendas assim", time: "09:42", delay: 2400 },
  { id: 5,  sender: "agent",  text: "Entendi. Quantas mensagens vocês recebem por dia que ficam sem resposta?", time: "09:43", delay: 2200 },
  { id: 6,  sender: "client", text: "Umas 50-60 por dia", time: "09:43", delay: 1800 },
  { id: 7,  sender: "agent",  text: "Se você respondesse 100% delas em menos de 1 minuto, quanto a mais você venderia por mês?", time: "09:44", delay: 2500 },
  { id: 8,  sender: "client", text: "Pelo menos R$ 15 mil a mais...", time: "09:44", delay: 2000 },
  { id: 9,  sender: "agent",  text: "Pois é! A gente automatiza isso 24/7. Quer testar pra ver funcionando?", time: "09:45", delay: 2200 },
  { id: 10, sender: "client", text: "Toparia sim!", time: "09:45", delay: 1600 },
  { id: 11, sender: "agent",  text: "Ótimo! Libera um horário? Tenho amanhã 10h ou 14h. Qual prefere?", time: "09:46", delay: 2000 },
];

const TypingDots = () => (
  <div className="flex items-end space-x-2">
    <div className="w-7 h-7 bg-gradient-to-br from-brand-purple to-brand-accent rounded-full flex items-center justify-center flex-shrink-0 shadow">
      <Bot className="h-3.5 w-3.5 text-white" />
    </div>
    <div
      className="flex items-center space-x-1 rounded-2xl rounded-bl-sm px-3.5 py-2.5"
      style={{ background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.1)" }}
    >
      {[0, 0.18, 0.36].map((d, i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-bounce"
          style={{ animationDelay: `${d}s` }}
        />
      ))}
    </div>
  </div>
);

const Bubble = ({ msg }: { msg: ChatMsg }) => {
  const isAgent = msg.sender === "agent";
  return (
    <div
      className={`flex items-end gap-2 ${isAgent ? "" : "justify-end"}`}
      style={{ animation: "msgIn 0.35s cubic-bezier(0.22,1,0.36,1) both" }}
    >
      {isAgent && (
        <div className="w-7 h-7 bg-gradient-to-br from-brand-purple to-brand-accent rounded-full flex items-center justify-center flex-shrink-0 shadow">
          <Bot className="h-3.5 w-3.5 text-white" />
        </div>
      )}
      <div className={`max-w-[78%] flex flex-col ${isAgent ? "items-start" : "items-end"}`}>
        <div
          className={`px-3.5 py-2.5 text-[13px] leading-[1.45] text-white ${
            isAgent
              ? "rounded-2xl rounded-bl-sm"
              : "rounded-2xl rounded-br-sm bg-gradient-to-r from-brand-accent to-brand-purple shadow-md shadow-brand-accent/20"
          }`}
          style={
            isAgent
              ? { background: "rgba(255,255,255,0.13)", border: "1px solid rgba(255,255,255,0.1)" }
              : {}
          }
        >
          {msg.text}
        </div>
        <span className="text-gray-500 text-[10px] mt-0.5 px-1">{msg.time}</span>
      </div>
      {!isAgent && (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center flex-shrink-0 text-white text-[9px] font-bold shadow">
          VC
        </div>
      )}
    </div>
  );
};

export const PhoneChat = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    const runSequence = async () => {
      setVisibleCount(0);
      setShowTyping(false);
      await new Promise((r) => setTimeout(r, 600));

      for (let i = 0; i < CONVERSATION.length; i++) {
        if (cancelled) return;
        const msg = CONVERSATION[i];

        if (msg.sender === "agent") {
          setShowTyping(true);
          await new Promise((r) => setTimeout(r, msg.delay));
          if (cancelled) return;
          setShowTyping(false);
          await new Promise((r) => setTimeout(r, 80));
        } else {
          await new Promise((r) => setTimeout(r, msg.delay));
        }

        if (cancelled) return;
        setVisibleCount((c) => c + 1);
        await new Promise((r) => setTimeout(r, 120));
      }

      await new Promise((r) => setTimeout(r, 4000));
      if (!cancelled) runSequence();
    };

    runSequence();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const el = chatRef.current;
    if (el) {
      requestAnimationFrame(() => {
        el.scrollTop = el.scrollHeight;
      });
    }
  }, [visibleCount, showTyping]);

  return (
    <div
      className="relative mx-auto"
      style={{ width: "min(320px, 92vw)", filter: "drop-shadow(0 30px 60px rgba(62,206,208,0.18)) drop-shadow(0 0 80px rgba(84,47,163,0.25))" }}
    >
      <div
        className="relative rounded-[2.8rem] overflow-hidden border-4"
        style={{
          borderColor: "rgba(255,255,255,0.18)",
          background: "rgba(8,12,30,0.97)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
          height: "min(600px, 75svh)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="flex-shrink-0 flex justify-center pt-3 pb-1">
          <div className="w-20 h-5 rounded-full flex items-center justify-center gap-1.5"
            style={{ background: "rgba(0,0,0,0.6)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/70" />
            <span className="w-8 h-1.5 rounded-full bg-gray-800" />
          </div>
        </div>

        <div className="flex-shrink-0 flex justify-between items-center px-5 py-1 text-white/60 text-[10px]">
          <span>09:41</span>
          <div className="flex items-center gap-1">
            <span className="text-green-400">●</span>
            <span>5G</span>
            <span>🔋</span>
          </div>
        </div>

        <div
          className="flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5"
          style={{ background: "linear-gradient(90deg, rgba(84,47,163,0.6) 0%, rgba(62,206,208,0.25) 100%)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="relative flex-shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-brand-purple to-brand-accent rounded-full flex items-center justify-center shadow-lg">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-brand-dark animate-pulse" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm leading-tight truncate">AgentecStar IA</p>
            <p className="text-green-400 text-[10px]">online agora</p>
          </div>
          <div className="flex items-center gap-3 text-white/50">
            <Video className="h-4 w-4" />
            <Phone className="h-4 w-4" />
            <MoreVertical className="h-4 w-4" />
          </div>
        </div>

        <div
          ref={chatRef}
          className="flex-1 overflow-y-auto px-3 py-3 space-y-2.5 flex flex-col"
          style={{
            background: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www-w3-org.files.usrfiles.com/svg+xml'%3E%3Cg fill='%23ffffff' fill-opacity='0.02' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E\"), linear-gradient(180deg, rgba(10,14,35,0.9) 0%, rgba(15,10,40,0.95) 100%)",
            overscrollBehavior: "contain",
          }}
        >
          <div className="flex justify-center my-1">
            <span className="text-[10px] text-gray-500 bg-white/5 rounded-full px-3 py-0.5">Hoje</span>
          </div>

          {CONVERSATION.slice(0, visibleCount).map((msg) => (
            <Bubble key={msg.id} msg={msg} />
          ))}

          {showTyping && <TypingDots />}
        </div>

        <div
          className="flex-shrink-0 flex items-center gap-2 px-3 py-3"
          style={{ background: "rgba(8,12,30,0.9)", borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="flex-1 rounded-2xl px-4 py-2 text-[12px] text-gray-500 border border-white/10"
            style={{ background: "rgba(255,255,255,0.07)" }}>
            Mensagem
          </div>
          <div className="w-8 h-8 flex-shrink-0 rounded-full bg-gradient-to-r from-brand-accent to-brand-purple flex items-center justify-center shadow">
            <Send className="h-3.5 w-3.5 text-white" />
          </div>
        </div>

        <div className="flex-shrink-0 flex justify-center pb-2 pt-1">
          <div className="w-24 h-1 rounded-full bg-white/20" />
        </div>
      </div>

      <div className="absolute right-[-6px] top-28 h-16 w-1.5 rounded-full bg-white/20" />
      <div className="absolute left-[-6px] top-20 h-10 w-1.5 rounded-full bg-white/20" />
      <div className="absolute left-[-6px] top-36 h-14 w-1.5 rounded-full bg-white/20" />
    </div>
  );
};

export default PhoneChat;
