"use client";

import { TimelineEvent, CATEGORY_LABELS, CATEGORY_COLORS } from "@/lib/timeline-data";

interface Props {
  event: TimelineEvent;
  isSelected: boolean;
  hasEvidence: boolean;
  onClick: () => void;
}

const IMPORTANCE_DOT: Record<TimelineEvent["importance"], string> = {
  critical: "#ef4444",
  high: "#f59e0b",
  standard: "#334e6e",
};

export default function EventCard({ event, isSelected, hasEvidence, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="relative flex gap-4 pr-10 pl-4 py-4 text-right rounded-lg transition-all w-full"
      style={{
        background: isSelected ? "rgba(201,168,76,0.08)" : "transparent",
        border: `1px solid ${isSelected ? "rgba(201,168,76,0.3)" : "transparent"}`,
      }}
    >
      {/* Dot on timeline */}
      <span
        className="absolute right-[14px] top-5 w-3 h-3 rounded-full shrink-0 ring-2 z-10"
        style={{
          background: IMPORTANCE_DOT[event.importance],
          outline: `3px solid var(--navy)`,
          outlineOffset: "1px",
        }}
      />

      <div className="flex flex-col gap-1 min-w-0 w-full">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-mono shrink-0" style={{ color: "var(--text-secondary)" }}>
            {event.dateDisplay}
          </span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${CATEGORY_COLORS[event.category]}`}
          >
            {CATEGORY_LABELS[event.category]}
          </span>
          {hasEvidence && (
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium shrink-0"
              style={{
                background: "rgba(201,168,76,0.15)",
                color: "var(--gold-light)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              ראיה
            </span>
          )}
        </div>

        <div
          className="text-sm font-medium leading-snug"
          style={{ color: event.importance === "critical" ? "#f8f9fb" : "var(--text-primary)" }}
        >
          {event.title}
        </div>

        {isSelected && (
          <div
            className="text-xs leading-relaxed mt-1"
            style={{ color: "var(--text-secondary)" }}
          >
            {event.detail}
          </div>
        )}
      </div>
    </button>
  );
}
