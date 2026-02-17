"use client";

import { useState, useTransition, useEffect, useRef } from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import WeatherCard from "./WeatherCard";
import F1Card from "./F1Card";
import StockCard from "./StockCard";
import { sendMessage } from "@/app/actions/sendMessage";
import { getMessages } from "@/app/actions/getMessages";
import { AIResponse } from "@/types/ai";

export default function ChatArea({
  session,
  chatId,
  setChatId,
}: {
  session: any;
  chatId: string | null;
  setChatId: (id: string) => void;
}) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<AIResponse[]>([]);
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chatId) {
      setMessages([]);
      return;
    }

    getMessages(chatId).then((data) => {
      const parsed = data.map((msg) => {
        if (msg.role === "assistant") {
          try {
            const parsedContent = JSON.parse(msg.content);
            return parsedContent.type
              ? { ...parsedContent, role: "assistant" }
              : { type: "text", text: msg.content, role: "assistant" };
          } catch {
            return { type: "text", text: msg.content, role: "assistant" };
          }
        } else {
          return { type: "text", text: msg.content, role: "user" };
        }
      });

      setMessages(parsed);
    });
  }, [chatId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = () => {
    if (!message.trim()) return;

    const userText = message;
    setMessage("");
    setMessages((prev) => [...prev, { type: "text", text: userText, role: "user" }]);
    setLoading(true);

    startTransition(async () => {
      const result = await sendMessage(chatId, session.user.id, userText);

      if (!chatId) setChatId(result.chatId);

      setMessages((prev) => [...prev, { ...result.ai, role: "assistant" }]);
      setLoading(false);
    });
  };

  const suggestions = ["What's the weather in NYC?", "Show AAPL stock", "Latest F1 standings"];

  return (
    <div className="flex flex-1 flex-col h-full" style={{ background: "#f7f7f5" }}>
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="mx-auto max-w-2xl space-y-5">

          {messages.length === 0 && !loading && (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              {/* Logo mark */}
              <div
                className="mb-6 flex items-center justify-center rounded-2xl"
                style={{
                  width: 56,
                  height: 56,
                  background: "linear-gradient(135deg, #1a1a1a 60%, #3d3d3d)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                }}
              >
                <Sparkles size={26} color="#fff" />
              </div>

              <h1
                className="text-4xl font-bold tracking-tight mb-3"
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  color: "#1a1a1a",
                  letterSpacing: "-0.03em",
                }}
              >
                Symmetri AI
              </h1>
              <p
                className="text-base mb-10 max-w-sm"
                style={{ color: "#888", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}
              >
                Real-time insights on weather, stocks, F1, and more — powered by AI.
              </p>

              {/* Suggestion chips */}
              <div className="flex flex-wrap gap-2 justify-center">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setMessage(s); }}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                    style={{
                      background: "#fff",
                      border: "1px solid #e0e0e0",
                      color: "#444",
                      fontFamily: "'DM Sans', sans-serif",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                      cursor: "pointer",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "#1a1a1a")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "#e0e0e0")}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, index) => (
            <div key={index} className="flex w-full">
              {msg.type === "text" && (
                <div
                  className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user" ? "self-start" : "self-end ml-auto"
                  }`}
                  style={{
                    maxWidth: "75%",
                    fontFamily: "'DM Sans', sans-serif",
                    ...(msg.role === "user"
                      ? {
                          background: "#fff",
                          border: "1px solid #e8e8e8",
                          color: "#1a1a1a",
                          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                        }
                      : {
                          background: "#1a1a1a",
                          color: "#f5f5f5",
                          boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                        }),
                  }}
                >
                  {msg.text}
                </div>
              )}

              {msg.type === "weather" && (
                <div className="self-end ml-auto w-full max-w-md">
                  <WeatherCard data={msg} />
                </div>
              )}
              {msg.type === "f1" && (
                <div className="self-end ml-auto w-full max-w-md">
                  <F1Card data={msg} />
                </div>
              )}
              {msg.type === "stock" && (
                <div className="self-end ml-auto w-full max-w-md">
                  <StockCard data={msg} />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 ml-1">
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="block rounded-full"
                    style={{
                      width: 7,
                      height: 7,
                      background: "#bbb",
                      animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                    }}
                  />
                ))}
              </div>
              <style>{`
                @keyframes bounce {
                  0%, 80%, 100% { transform: translateY(0); }
                  40% { transform: translateY(-6px); }
                }
              `}</style>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input bar */}
      <div
        className="px-6 py-4"
        style={{
          background: "#fff",
          borderTop: "1px solid #ebebeb",
        }}
      >
        <div className="mx-auto max-w-2xl relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask about weather, stocks, F1…"
            style={{
              width: "100%",
              borderRadius: 16,
              border: "1.5px solid #e0e0e0",
              padding: "14px 52px 14px 18px",
              fontSize: 14,
              fontFamily: "'DM Sans', sans-serif",
              color: "#1a1a1a",
              background: "#fafafa",
              outline: "none",
              transition: "border-color 0.2s",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#1a1a1a")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#e0e0e0")}
          />
          <button
            onClick={handleSend}
            disabled={isPending || !message.trim()}
            style={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              width: 36,
              height: 36,
              borderRadius: 10,
              background: message.trim() ? "#1a1a1a" : "#d4d4d4",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: message.trim() ? "pointer" : "default",
              transition: "background 0.2s",
            }}
          >
            <ArrowUp size={16} color="#fff" />
          </button>
        </div>
        <p
          className="text-center mt-2"
          style={{ fontSize: 11, color: "#bbb", fontFamily: "'DM Sans', sans-serif" }}
        >
          Symmetri AI can make mistakes. Verify important info.
        </p>
      </div>

      
    </div>
  );
}