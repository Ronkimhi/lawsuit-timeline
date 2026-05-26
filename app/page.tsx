"use client";

import { useState } from "react";
import Link from "next/link";
import { events, CATEGORY_LABELS, type EventCategory } from "@/lib/timeline-data";
import { evidence } from "@/lib/evidence-data";
import EventCard from "@/components/EventCard";
import EvidencePanel from "@/components/EvidencePanel";

const ALL_CATEGORIES: EventCategory[] = [
  "pre-contract",
  "pre-case",
  "case1",
  "delivery",
  "electricity",
  "verdict",
  "case2",
];

export default function Home() {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [activeCategories, setActiveCategories] = useState<Set<EventCategory>>(
    new Set(ALL_CATEGORIES)
  );
  const [searchQuery, setSearchQuery] = useState("");

  const selectedEvent = events.find((e) => e.id === selectedEventId) ?? null;
  const selectedEvidence = selectedEvent
    ? evidence.filter((ev) => selectedEvent.evidenceIds.includes(ev.id))
    : [];

  const filteredEvents = events.filter((e) => {
    const categoryMatch = activeCategories.has(e.category);
    const searchMatch =
      searchQuery === "" ||
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.detail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.dateDisplay.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  function toggleCategory(cat: EventCategory) {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) {
        if (next.size > 1) next.delete(cat);
      } else {
        next.add(cat);
      }
      return next;
    });
  }

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: "var(--navy)" }}>
      {/* Left sidebar */}
      <aside
        className="hidden md:flex flex-col gap-6 p-6 border-l shrink-0"
        style={{
          width: 220,
          borderColor: "var(--navy-border)",
          background: "var(--navy-light)",
        }}
      >
        <div>
          <div
            className="text-xs font-semibold uppercase tracking-widest mb-1"
            style={{ color: "var(--gold)" }}
          >
            ת&quot;א 24371-05-25
          </div>
          <div className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
            קמחי נ. שרבט
          </div>
          <div className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
            תיק 2: פעיל
          </div>
        </div>

        <div>
          <div
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            סינון לפי שלב
          </div>
          <div className="flex flex-col gap-2">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className="text-right text-xs px-3 py-2 rounded-md transition-all cursor-pointer"
                style={{
                  background: activeCategories.has(cat)
                    ? "rgba(201,168,76,0.15)"
                    : "transparent",
                  color: activeCategories.has(cat)
                    ? "var(--gold-light)"
                    : "var(--text-secondary)",
                  border: `1px solid ${activeCategories.has(cat) ? "rgba(201,168,76,0.4)" : "transparent"}`,
                }}
                onMouseEnter={(e) => {
                  if (!activeCategories.has(cat)) {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
                    (e.currentTarget as HTMLButtonElement).style.border = "1px solid rgba(255,255,255,0.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!activeCategories.has(cat)) {
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
                    (e.currentTarget as HTMLButtonElement).style.border = "1px solid transparent";
                  }
                }}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-4">
          <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: "var(--critical)" }}
              />
              אירוע קריטי
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: "var(--high)" }}
              />
              חשיבות גבוהה
            </div>
            <div className="flex items-center gap-2">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: "var(--navy-border)" }}
              />
              רגיל
            </div>
          </div>
        </div>
      </aside>

      {/* Timeline column */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <div
          className="flex items-center gap-4 px-6 py-4 border-b shrink-0"
          style={{ borderColor: "var(--navy-border)", background: "var(--navy-light)" }}
        >
          <input
            type="text"
            placeholder="חיפוש אירועים..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 text-sm px-4 py-2 rounded-md outline-none"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid var(--navy-border)",
              color: "var(--text-primary)",
            }}
          />
          <span className="text-xs shrink-0" style={{ color: "var(--text-secondary)" }}>
            {filteredEvents.length} אירועים
          </span>
        </div>

        {/* Timeline scroll */}
        <div className="flex-1 overflow-y-auto px-4 py-6 md:px-8">
          {/* Nave recommendations banner */}
          <div className="max-w-2xl mx-auto mb-3">
            <Link
              href="/recommendations"
              className="flex items-center justify-between gap-4 px-5 py-4 rounded-xl w-full transition-all cursor-pointer hover:scale-[1.01]"
              style={{
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.45)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,168,76,0.17)";
                (e.currentTarget as HTMLAnchorElement).style.border = "1px solid rgba(201,168,76,0.7)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 16px rgba(201,168,76,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,168,76,0.1)";
                (e.currentTarget as HTMLAnchorElement).style.border = "1px solid rgba(201,168,76,0.45)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              <div>
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{ color: "var(--gold)" }}
                >
                  תיק 2: אסטרטגיה
                </div>
                <div className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>
                  המלצות לנוה גור: 4 בקשות לפני 4.10.2026
                </div>
                <div className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
                  הפקדת ₪25,769 · הוצאה לפועל · בקשת קבילות · גילוי נכסים
                </div>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
                style={{ color: "var(--gold)", opacity: 0.7 }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div
              className="absolute right-4 top-0 bottom-0 w-px"
              style={{ background: "var(--navy-border)" }}
            />

            <div className="flex flex-col gap-1">
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  isSelected={selectedEventId === event.id}
                  hasEvidence={event.evidenceIds.length > 0}
                  onClick={() =>
                    setSelectedEventId(
                      selectedEventId === event.id ? null : event.id
                    )
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Evidence panel */}
      {selectedEvent && (
        <EvidencePanel
          event={selectedEvent}
          evidence={selectedEvidence}
          onClose={() => setSelectedEventId(null)}
        />
      )}

    </div>
  );
}
