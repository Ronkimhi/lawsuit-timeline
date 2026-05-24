"use client";

import { TimelineEvent } from "@/lib/timeline-data";
import { Evidence } from "@/lib/evidence-data";

interface Props {
  event: TimelineEvent;
  evidence: Evidence[];
  onClose: () => void;
}

const STRENGTH_STYLE: Record<Evidence["strength"], { bg: string; text: string; label: string }> = {
  STRONG: { bg: "rgba(34,197,94,0.15)", text: "#86efac", label: "חזק — הודאת בעל דין" },
  DOCUMENTARY: { bg: "rgba(59,130,246,0.15)", text: "#93c5fd", label: "תיעודי" },
  PENDING: { bg: "rgba(148,163,184,0.1)", text: "#94a3b8", label: "ממתין לאימות" },
};

export default function EvidencePanel({ event, evidence, onClose }: Props) {
  return (
    <aside
      className="flex flex-col border-r overflow-hidden shrink-0"
      style={{
        width: "min(420px, 100vw)",
        borderColor: "var(--navy-border)",
        background: "var(--navy-light)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-start justify-between gap-3 px-5 py-4 border-b shrink-0"
        style={{ borderColor: "var(--navy-border)" }}
      >
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--gold)" }}>
            תיק ראיות
          </div>
          <div className="text-sm font-medium leading-snug" style={{ color: "var(--text-primary)" }}>
            {event.titleHe ?? event.title}
          </div>
          <div className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
            {event.dateDisplay}
          </div>
        </div>
        <button
          onClick={onClose}
          className="shrink-0 p-1 rounded hover:opacity-70 transition-opacity"
          style={{ color: "var(--text-secondary)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-5">
        {/* Event detail */}
        <div className="mb-5">
          <div
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--text-secondary)" }}
          >
            מה קרה
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-primary)" }}>
            {event.detail}
          </p>
          {event.titleHe && (
            <p
              className="text-sm mt-2 leading-relaxed"
              dir="rtl"
              style={{ color: "var(--text-secondary)", fontStyle: "italic" }}
            >
              {event.titleHe}
            </p>
          )}
        </div>

        {/* Evidence items */}
        {evidence.length > 0 ? (
          <div>
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--text-secondary)" }}
            >
              ראיות תומכות ({evidence.length})
            </div>
            <div className="flex flex-col gap-4">
              {evidence.map((ev) => {
                const style = STRENGTH_STYLE[ev.strength];
                return (
                  <div
                    key={ev.id}
                    className="rounded-lg p-4"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--navy-border)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: style.bg, color: style.text }}
                      >
                        {style.label}
                      </span>
                    </div>
                    <div
                      className="text-xs font-medium mb-1"
                      style={{ color: "var(--gold-light)" }}
                    >
                      {ev.claim}
                    </div>
                    <p className="text-xs leading-relaxed mb-2" style={{ color: "var(--text-primary)" }}>
                      {ev.item}
                    </p>
                    <div
                      className="text-xs px-3 py-2 rounded"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        color: "var(--text-secondary)",
                        borderRight: "2px solid var(--navy-border)",
                      }}
                    >
                      <span className="font-semibold">מקור:</span> {ev.source}
                    </div>
                    {ev.fileUrl && (
                      <div className="mt-3 flex items-center gap-3 flex-wrap">
                        <a
                          href={ev.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md font-medium transition-opacity hover:opacity-80"
                          style={{
                            background: "rgba(201,168,76,0.15)",
                            color: "var(--gold-light)",
                            border: "1px solid rgba(201,168,76,0.3)",
                          }}
                        >
                          פתח מסמך ↗
                        </a>
                        {ev.pageRef && (
                          <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                            {ev.pageRef}
                          </span>
                        )}
                      </div>
                    )}
                    {ev.hebrewQuote && (
                      <div
                        className="text-xs px-3 py-2 rounded mt-2 leading-relaxed"
                        dir="rtl"
                        style={{
                          background: "rgba(201,168,76,0.06)",
                          color: "var(--gold-light)",
                          borderRight: "2px solid rgba(201,168,76,0.3)",
                          fontStyle: "italic",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {ev.hebrewQuote}
                      </div>
                    )}
                    {ev.notes && (
                      <p
                        className="text-xs mt-2 leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {ev.notes}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div
            className="text-sm rounded-lg px-4 py-3"
            style={{
              background: "rgba(255,255,255,0.03)",
              color: "var(--text-secondary)",
              border: "1px solid var(--navy-border)",
            }}
          >
            לא נמצא נספח ישיר לאירוע זה. בדוק בארכיון שרשור {event.threadId ?? "—"}.
          </div>
        )}
      </div>
    </aside>
  );
}
