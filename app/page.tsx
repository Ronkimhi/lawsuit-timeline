"use client";

import { useState } from "react";
import { events, CATEGORY_LABELS, type EventCategory } from "@/lib/timeline-data";
import { evidence } from "@/lib/evidence-data";
import EventCard from "@/components/EventCard";
import EvidencePanel from "@/components/EvidencePanel";
import ChatPanel from "@/components/ChatPanel";

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
  const [chatOpen, setChatOpen] = useState(false);
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
        className="hidden md:flex flex-col gap-6 p-6 border-r shrink-0"
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
            Kimhi v. Sharbat
          </div>
          <div className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
            Case 2 — Active
          </div>
        </div>

        <div>
          <div
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            Filter by Phase
          </div>
          <div className="flex flex-col gap-2">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className="text-left text-xs px-3 py-2 rounded-md transition-all"
                style={{
                  background: activeCategories.has(cat)
                    ? "rgba(201,168,76,0.15)"
                    : "transparent",
                  color: activeCategories.has(cat)
                    ? "var(--gold-light)"
                    : "var(--text-secondary)",
                  border: `1px solid ${activeCategories.has(cat) ? "rgba(201,168,76,0.4)" : "transparent"}`,
                }}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: "var(--critical)" }}
              />
              Critical event
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: "var(--high)" }}
              />
              High importance
            </div>
            <div className="flex items-center gap-2">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: "var(--navy-border)" }}
              />
              Standard
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
            placeholder="Search events..."
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
            {filteredEvents.length} events
          </span>
        </div>

        {/* Timeline scroll */}
        <div className="flex-1 overflow-y-auto px-4 py-6 md:px-8">
          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div
              className="absolute left-4 top-0 bottom-0 w-px"
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

      {/* AI Chat button */}
      <button
        onClick={() => setChatOpen(true)}
        className="fixed bottom-6 right-6 flex items-center gap-2 px-4 py-3 rounded-full text-sm font-medium shadow-lg transition-all hover:scale-105 z-30"
        style={{
          background: "var(--gold)",
          color: "#0b1929",
          display: chatOpen ? "none" : "flex",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
          <path d="M20 2H4C2.9 2 2 2.9 2 4v16l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 12H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />
        </svg>
        Ask the Case AI
      </button>

      {/* Chat panel */}
      {chatOpen && <ChatPanel onClose={() => setChatOpen(false)} />}
    </div>
  );
}
