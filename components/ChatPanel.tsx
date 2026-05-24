"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface Props {
  onClose: () => void;
}

export default function ChatPanel({ onClose }: Props) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "יש לי גישה מלאה לחומרי התיק ת\"א 24371-05-25 (קמחי נ. שרבט, תביעה 2). שאל אותי על כל אירוע, נספח, טיעון משפטי, או שאלה על ציר הזמן. אצטט מקורות.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    const assistantMsg: Message = { role: "assistant", content: "" };
    setMessages([...nextMessages, assistantMsg]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.body) throw new Error("No response body");
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let full = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        full += decoder.decode(value, { stream: true });
        setMessages([...nextMessages, { role: "assistant", content: full }]);
      }
    } catch (err) {
      setMessages([
        ...nextMessages,
        { role: "assistant", content: "שגיאה בגישה ל-API. ודא שמפתח ANTHROPIC_API_KEY מוגדר." },
      ]);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div
      className="fixed inset-0 z-40 flex items-end justify-start p-4 md:p-6"
      style={{ pointerEvents: "none" }}
    >
      <div
        className="flex flex-col rounded-xl shadow-2xl overflow-hidden"
        style={{
          width: "min(480px, calc(100vw - 32px))",
          height: "min(600px, calc(100vh - 80px))",
          background: "var(--navy-light)",
          border: "1px solid var(--navy-border)",
          pointerEvents: "all",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b shrink-0"
          style={{ borderColor: "var(--navy-border)" }}
        >
          <div>
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-0.5"
              style={{ color: "var(--gold)" }}
            >
              AI משפטי
            </div>
            <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
              שאל כל שאלה על קמחי נ. שרבט
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:opacity-70 transition-opacity"
            style={{ color: "var(--text-secondary)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-start" : "justify-end"}`}
            >
              <div
                className="max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap"
                style={
                  msg.role === "user"
                    ? {
                        background: "rgba(201,168,76,0.15)",
                        color: "var(--text-primary)",
                        border: "1px solid rgba(201,168,76,0.2)",
                      }
                    : {
                        background: "rgba(255,255,255,0.04)",
                        color: "var(--text-primary)",
                        border: "1px solid var(--navy-border)",
                      }
                }
              >
                {msg.content}
                {msg.role === "assistant" && loading && i === messages.length - 1 && (
                  <span
                    className="inline-block w-1 h-4 ml-1 rounded animate-pulse"
                    style={{ background: "var(--gold)", verticalAlign: "text-bottom" }}
                  />
                )}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div
          className="px-4 py-3 border-t shrink-0"
          style={{ borderColor: "var(--navy-border)" }}
        >
          <div className="flex gap-2 items-end">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="שאל על נספח, תאריך, או טיעון... (Enter לשליחה)"
              rows={2}
              className="flex-1 resize-none rounded-lg px-3 py-2 text-sm outline-none"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid var(--navy-border)",
                color: "var(--text-primary)",
                maxHeight: 100,
              }}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              className="shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all"
              style={{
                background: loading || !input.trim() ? "rgba(201,168,76,0.3)" : "var(--gold)",
                color: loading || !input.trim() ? "rgba(11,25,41,0.5)" : "#0b1929",
                cursor: loading || !input.trim() ? "not-allowed" : "pointer",
              }}
            >
              שלח
            </button>
          </div>
          <div className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
            מופעל על ידי Claude. התשובות מבוססות על חומרי התיק.
          </div>
        </div>
      </div>
    </div>
  );
}
