"use client";

import Link from "next/link";
import { useMemo } from "react";

const MOTIONS = [
  {
    id: "admissibility",
    priority: 1,
    urgency: "critical" as const,
    title: "בקשת קבילות — נספחי תיק 1 כהודאות בעל דין",
    what: "5 נספחים שהוגשו תחת שבועה על ידי שרבט עצמו בתיק 1 חייבים להיות קבילים בתיק 2. בלי הבקשה הזאת — ממן יכול לערער על כל ראיה שמגיעה מתיק 1, ולמחוק את הבסיס הראייתי של התביעה.",
    basis: 'ע"א 1302/02 מגן — מסמכים שהוגשו תחת שבועה בהליך קודם קבילים כהודאות בעל דין. תקנה 17 לתקנות סדר הדין האזרחי — ניתן להגיש מסמכים שהוגשו בהליך אחר כראיה.',
    exhibits: [
      "נספח 3, עמ' 129-130 — ₪179,000 לממן כולל ₪30K חשמל (6.12.2020)",
      "נספח 13 — מכתב מירור 18.1.2021: ממן מאיים על רון",
      "נספח 15 — WhatsApp: אין חשמל נובמבר 2021",
      "נספח 18, עמ' 42-43 — גולדנברג 'משכורת' (₪157,965)",
      "נספח 18, עמ' 46-47 — ממן → ויקטור לוי (תפקיד אוכף, לא עו\"ד בלבד)",
      "נספח 18, עמ' 163-166 — ת\"א 60392-01-20 (3 תפקידים במקביל)",
    ],
    sources: [
      { label: "נספח 3, עמ' 129-130", file: "/docs/nasah-3.pdf#page=1", note: "תשלום ₪179K — 3 ימים אחרי תעודת הגמר, כולל ₪30K חשמל" },
      { label: "נספח 13, עמ' 1", file: "/docs/nasah-13.pdf#page=1", note: "מכתב מירור 18.1.2021 — ממן מאיים בביטול חוזה" },
      { label: "נספח 15, עמ' 1-4", file: "/docs/nasah-15.pdf#page=1", note: "WhatsApp נובמבר 2021 — אין חשמל, דרישת מכתב הרשאה sbh" },
      { label: "נספח 18, עמ' 42-43", file: "/docs/nasah-18.pdf#page=3", note: "גולדנברג 'משכורת' — מבטל את מעמדו כעד עצמאי" },
      { label: "נספח 18, עמ' 46-47", file: "/docs/nasah-18.pdf#page=4", note: "ממן → ויקטור לוי 4.8.2019 — אוכף חוזים, לא מייצג בבית משפט" },
      { label: "נספח 18, עמ' 163-166", file: "/docs/nasah-18.pdf#page=1", note: "ת\"א 60392-01-20 — ממן מייצג שרבט נגד יגאל אלון נישה במקביל לתיק 1" },
    ],
    owner: "יוסי (טיוטה) → נוה גור (הגשה)",
  },
  {
    id: "nym-discovery",
    priority: 2,
    urgency: "high" as const,
    title: "בקשת גילוי — רשומות פיננסיות של משרד NyM Law",
    what: "ממן אינו נתבע — אך הרשומות שלו נדרשות להוכחת ניגוד העניינים. בקשת גילוי צד שלישי תחייב אותו לחשוף את הרשומות הפיננסיות מהתקופה הרלוונטית.",
    basis: "תקנה 39 לתקנות סדר הדין האזרחי התשפ\"ד — גילוי על ידי שאינו בעל דין. הרשומות מהותיות ורלוונטיות ישירות לעילת ניגוד העניינים.",
    exhibits: [
      "כל התשלומים ממשרד שרבט 38 למשרד NyM Law, 2019–2021",
      "חשבוניות ותיעוד ₪179,000 מ-6.12.2020 — פירוט לפי סעיפים",
      "כל תקשורת בין ממן לאס.איי.בי.אן בנאמנות בע\"מ (ח.פ. 515456150)",
      "הסכמי שכר טרחה בין ממן לשרבט 38 בגין תיק 1 + ת\"א 60392",
    ],
    sources: [
      { label: "נספח 3, עמ' 129-130", file: "/docs/nasah-3.pdf#page=1", note: "מסמך הבסיס לבקשה — ₪179K מפורט לפי סעיפים, כולל ₪30K חשמל ו-₪4K מים" },
      { label: "נספח 18, עמ' 163-166", file: "/docs/nasah-18.pdf#page=1", note: "ת\"א 60392: ממן מייצג שרבט בתביעת תשתיות — הוכחת ייצוג כפול" },
      { label: "נספח 18, עמ' 42-43", file: "/docs/nasah-18.pdf#page=3", note: "Goldenberg ₪157,965 — תשלום נוסף דרך אותה מערכת פיננסית" },
      { label: "חוק לשכת עורכי הדין, סע' 54-62", file: undefined, note: "ניגוד עניינים מצדיק גילוי פיננסי מלא על הקשר בין ממן לפרויקט" },
    ],
    owner: "יוסי (טיוטה) → נוה גור (הגשה)",
  },
  {
    id: "trust-discovery",
    priority: 3,
    urgency: "high" as const,
    title: 'בקשת גילוי — אס.איי.בי.אן בנאמנות בע"מ (ח.פ. 515456150)',
    what: "ישות נאמנות מוסתרת שקיבלה תשלומים מחשבון 151783 של שרבט 38. לא הוצהרה בתצהיר שרבט. אם שרבט מנתב נכסים דרכה — זה פוגע ישירות בביצוע פסק הדין ומצדיק עיקול מונע.",
    basis: "כלל הגילוי המלא (חובת גילוי בתצהיר). הסתרת נכסים עשויה לעמוד בבסיס בקשה לביטול הגנה ולסעד זמני.",
    exhibits: [
      "עסקאות בין שרבט 38 לאס.איי.בי.אן, 2018–2024",
      "זהות הנהנה מהנאמנות (שם + פרטי בעלות)",
      "מעורבות ממן בישות — חוזים, ייפויי כוח",
    ],
    sources: [
      { label: "חשבון בנק 151783 — שרבט 38", file: undefined, note: "חשבון נפרד שממנו בוצעו תשלומים לאס.איי.בי.אן — לא מוצהר בתצהיר" },
      { label: "ח.פ. 515456150 — רשם החברות", file: undefined, note: "ישות רשומה: אס.איי.בי.אן בנאמנות בע\"מ — נבדל מ-שרבט 38 (ח.פ. 514458439)" },
      { label: "פסק דין תיק 1, 26.10.2024", file: "/docs/psak-din.pdf#page=17", note: "פסיקה סופית — ביצוע תלוי ביכולת גביה משרבט. אם נכסים הועברו — נדרש עיקול" },
      { label: "תקנה 19 לתקנות ההוצאה לפועל", file: undefined, note: "בסיס לבקשת עיקול נכסים של צד שלישי הקשור לחייב" },
    ],
    owner: "גלית (חקירה פיננסית) + יוסי (בקשת גילוי לבית המשפט)",
  },
];

const EVIDENCE_PILLARS = [
  {
    number: "01",
    title: "₪179,000 לממן — 3 ימים אחרי תעודת הגמר",
    source: "נספח 3, עמ' 129-130",
    what: "₪30,000 מסכום זה יועדו מפורשות לחיבור חשמל בדירת רון. לרון לא היה חשמל עד נובמבר 2021 לכל הפחות. הגיש שרבט עצמו, תחת שבועה.",
    why: "מוכיח שממן קיבל כסף המיועד לשירות לקוחו (רון) ולא סיפק את השירות — זה ליבת ניגוד העניינים.",
  },
  {
    number: "02",
    title: "אין חשמל — נובמבר 2021",
    source: "נספח 15",
    what: "WhatsApp: רון מבקש מספר הזמנה לחיבור חשמל — 9 חודשים אחרי המסירה. חברת חשמל דורשת מכתב הרשאה של sbh. שרבט לא סיפק. הגיש שרבט עצמו.",
    why: "מוכיח שהנזק של העדר חשמל היה אקטיבי ומתמשך — בדיוק בתקופה שבה ממן מחזיק את ₪30K לחיבור חשמל.",
  },
  {
    number: "03",
    title: "מכתב מירור — 43 ימים אחרי ₪179K",
    source: "נספח 13",
    what: "18.1.2021: ממן שולח איום פורמלי על ביטול חוזה הרכישה של רון — 43 ימים בדיוק אחרי שקיבל ₪179K כולל ₪30K חשמל.",
    why: "הרצף הוא הנשק: קיבל כסף → לא סיפק שירות → הגדיל את הלחץ המשפטי. זה פעולה כנגד האינטרס של מי שהוא אמור לשרת.",
  },
  {
    number: "04",
    title: "ממן — 3 תפקידים במקביל",
    source: "נספח 18, עמ' 163-166",
    what: "באותה תקופה: (1) מנהל תיק 1 נגד רון, (2) מייצג שרבט 38 בת\"א 60392-01-20 נגד יגאל אלון נישה (₪375K), (3) מקבל ₪179K מכספי הבניין. שלושה תפקידים, שניים מהם יוצרים ניגוד ישיר.",
    why: "ניגוד עניינים מבוסס מעצם ריבוי התפקידים — לא רק מהתוצאה. הצגת התמונה המלאה לשופטת.",
  },
];

const OPEN_QUESTIONS = [
  { q: "מה הבסיס המדויק לתביעת ₪186K של שרבט?", action: "לקרוא 'התחשבנות רון קמחי (2)(6)(1).xlsx' + מכתב BH Law 29.12.2024" },
  { q: "האם החשמל חובר? מתי? מי שילם?", action: "לחפש בשרשורי מייל post-נובמבר 2021 (קטגוריה case2-active)" },
  { q: "תאריך רישום טאבו מלא (תת-חלקה) — לפני או אחרי מכירה לבן-חמו?", action: "לקרוא נסח טאבו עדכני ב-Sale-Documents/" },
  { q: "מה הכולל המדויק של כתב התביעה בתיק 2?", action: "לקרוא PDF כתב תביעה מוגש ב-02-Attachments/PDFs/" },
  { q: "מחסן 11 לעומת מחסן 10 — הבדלי גודל / קומה / גישה?", action: "לבדוק תוכניות בניין ב-Sale-Documents/Purchase-Agreement/" },
  { q: "מה המצב הפיננסי של שרבט — יכולת גביה?", action: "חקירה פיננסית + גילוי אס.איי.בי.אן" },
];

type Source = { label: string; file?: string; note: string };

function SourceRow({ src }: { src: Source }) {
  return (
    <div className="flex items-start gap-2 text-xs py-1.5" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <span className="shrink-0" style={{ color: "var(--gold)", opacity: 0.5 }}>↗</span>
      <div className="flex-1 min-w-0">
        {src.file ? (
          <a
            href={src.file}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:opacity-80 transition-opacity"
            style={{ color: "var(--gold-light)" }}
          >
            {src.label}
          </a>
        ) : (
          <span className="font-semibold" style={{ color: "var(--gold-light)" }}>{src.label}</span>
        )}
        <span style={{ color: "var(--text-secondary)" }}> — {src.note}</span>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>
      {children}
    </div>
  );
}

function UrgencyBadge({ urgency }: { urgency: "critical" | "high" }) {
  const styles = {
    critical: { bg: "rgba(239,68,68,0.15)", text: "#fca5a5", label: "דחוף ביותר" },
    high: { bg: "rgba(251,191,36,0.15)", text: "#fcd34d", label: "דחוף" },
  };
  const s = styles[urgency];
  return (
    <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: s.bg, color: s.text }}>
      {s.label}
    </span>
  );
}

export default function RecommendationsPage() {
  const daysUntilHearing = useMemo(() => {
    const hearing = new Date("2026-10-04T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    hearing.setHours(0, 0, 0, 0);
    return Math.max(0, Math.ceil((hearing.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));
  }, []);

  const isUrgent = daysUntilHearing <= 90;

  return (
    <div dir="rtl" style={{ background: "var(--navy)", minHeight: "100vh", color: "var(--text-primary)" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-10 border-b px-6 py-4 flex items-center justify-between gap-4"
        style={{ background: "var(--navy-light)", borderColor: "var(--navy-border)" }}
      >
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--gold)" }}>
            ת&quot;א 24371-05-25
          </div>
          <div className="text-base font-bold" style={{ color: "var(--text-primary)" }}>
            המלצות אסטרטגיות — נוה גור, מורין סוטיל, אילן גרבר
          </div>
        </div>
        <div className="flex items-center gap-5 shrink-0">
          <div className="text-center">
            <div
              className="text-4xl font-bold tabular-nums leading-none"
              style={{ color: isUrgent ? "var(--critical)" : "var(--gold)" }}
            >
              {daysUntilHearing}
            </div>
            <div className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
              ימים עד 4.10.2026
            </div>
          </div>
          <Link
            href="/"
            className="text-xs px-3 py-2 rounded-md transition-opacity hover:opacity-70"
            style={{
              background: "rgba(255,255,255,0.05)",
              color: "var(--text-secondary)",
              border: "1px solid var(--navy-border)",
            }}
          >
            ← ציר הזמן
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8 flex flex-col gap-10">
        {/* Disclaimer */}
        <div
          className="text-xs px-4 py-3 rounded-lg"
          style={{
            background: "rgba(201,168,76,0.06)",
            color: "var(--text-secondary)",
            border: "1px solid rgba(201,168,76,0.25)",
          }}
        >
          מסמך עבודה פנימי — לשימוש משרד נוה בלבד. כל בקשה וטיוטה דורשת אישור עו&quot;ד נוה גור לפני הגשה לבית המשפט.
        </div>

        {/* SECTION 1: Motions */}
        <section>
          <SectionLabel>בקשות לפני 4.10.2026</SectionLabel>
          <div className="flex flex-col gap-4">
            {MOTIONS.map((motion) => (
              <div
                key={motion.id}
                className="rounded-lg p-5"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--navy-border)",
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="text-2xl font-bold tabular-nums shrink-0 leading-none"
                    style={{ color: "var(--gold)", opacity: 0.4 }}
                  >
                    {String(motion.priority).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <UrgencyBadge urgency={motion.urgency} />
                      <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                        {motion.owner}
                      </span>
                    </div>
                    <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                      {motion.title}
                    </div>
                  </div>
                </div>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
                  {motion.what}
                </p>
                <div
                  className="text-xs px-3 py-2 rounded mb-3 leading-relaxed"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    color: "var(--text-secondary)",
                    borderRight: "2px solid var(--navy-border)",
                  }}
                >
                  <span className="font-semibold" style={{ color: "var(--gold-light)" }}>בסיס משפטי:</span>{" "}
                  {motion.basis}
                </div>
                <div>
                  <div className="text-xs font-semibold mb-2" style={{ color: "var(--gold-light)" }}>
                    פריטים נדרשים:
                  </div>
                  <ul className="flex flex-col gap-1 mb-4">
                    {motion.exhibits.map((ex, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                        <span style={{ color: "var(--gold)", opacity: 0.6 }}>—</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="rounded px-3 py-2"
                  style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.12)" }}
                >
                  <div className="text-xs font-semibold mb-1" style={{ color: "var(--gold)", opacity: 0.8 }}>
                    מקורות — דינה
                  </div>
                  {motion.sources.map((src, i) => (
                    <SourceRow key={i} src={src} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: Narrative spine */}
        <section>
          <SectionLabel>הנרטיב — עמוד השדרה של תיק 2</SectionLabel>
          <div
            className="rounded-lg p-5"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--navy-border)" }}
          >
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-primary)" }}>
              ממן לא היה עורך דין בפרשה הזאת — הוא היה שותף עסקי. הוא קיבל ₪179,000 מכספי מכירת הפנטהאוז, כולל ₪30,000
              המיועדים מפורשות לחיבור חשמל בדירת רון. לרון לא היה חשמל. ממן ידע. 43 ימים לאחר שקיבל את הכסף, שלח את
              האיום המשפטי הכי אגרסיבי בתקופה — מכתב מירור המאיים בביטול החוזה.
            </p>
            <div className="flex flex-col gap-2">
              {[
                { date: "3.12.2020", event: "תעודת גמר" },
                { date: "6.12.2020", event: "₪179,000 (כולל ₪30K חשמל) → חשבון ממן" },
                { date: "7.12.2020", event: "שרבט מודיע לרון: 'הדירה מוכנה'" },
                { date: "8.12.2020", event: "גאיה הנדסה: אין חשמל, 100+ ליקויים" },
                { date: "20.12.2020", event: "BH Law דורש תיקון כל הליקויים לפני המסירה" },
                { date: "18.1.2021", event: "ממן: מכתב מירור — איום בביטול חוזה (43 יום מ-₪179K)" },
                { date: "2.2.2021", event: "מסירת חזקה — עדיין ללא חשמל" },
                { date: "נוב' 2021", event: "WhatsApp: עדיין אין חשמל (9 חודשים אחרי המסירה)" },
              ].map(({ date, event }) => (
                <div key={date} className="flex items-start gap-3 text-xs">
                  <span
                    className="shrink-0 font-mono tabular-nums"
                    style={{ color: "var(--gold)", minWidth: "6.5rem" }}
                  >
                    {date}
                  </span>
                  <span style={{ color: "var(--text-secondary)" }}>{event}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Evidence Pillars */}
        <section>
          <SectionLabel>4 עמודי הראיה — הודאות בעל דין</SectionLabel>
          <p className="text-xs mb-4" style={{ color: "var(--text-secondary)" }}>
            כולן מנספחי ההגנה של שרבט עצמו בתיק 1, הוגשו תחת שבועה. הוא אינו יכול לחלוק עליהן.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EVIDENCE_PILLARS.map((ev) => (
              <div
                key={ev.number}
                className="rounded-lg p-4"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--navy-border)" }}
              >
                <div className="flex items-start gap-3 mb-2">
                  <span
                    className="text-xl font-bold tabular-nums shrink-0"
                    style={{ color: "var(--gold)", opacity: 0.35, lineHeight: 1 }}
                  >
                    {ev.number}
                  </span>
                  <div>
                    <div className="text-xs font-semibold mb-1" style={{ color: "var(--gold-light)" }}>
                      {ev.title}
                    </div>
                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                      {ev.source}
                    </div>
                  </div>
                </div>
                <p className="text-xs leading-relaxed mb-2" style={{ color: "var(--text-primary)" }}>
                  {ev.what}
                </p>
                <div
                  className="text-xs px-3 py-2 rounded leading-relaxed"
                  style={{
                    background: "rgba(201,168,76,0.05)",
                    color: "var(--text-secondary)",
                    borderRight: "2px solid rgba(201,168,76,0.3)",
                  }}
                >
                  <span className="font-semibold" style={{ color: "var(--gold-light)" }}>למה זה משנה: </span>
                  {ev.why}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: Counter-claim */}
        <section>
          <SectionLabel>תביעת הנגד — ₪186,000</SectionLabel>
          <div
            className="rounded-lg p-5"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--navy-border)" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ background: "rgba(148,163,184,0.1)", color: "#94a3b8" }}
              >
                טרם נותחה
              </span>
              <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                עמדת שרבט (נובמבר 2024)
              </span>
            </div>
            <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              שרבט טוען שרון חייב לו ₪186,000 &quot;ריבית חריגה&quot;. הגיש גיליון אקסל (התחשבנות רון קמחי (2)(6)(1).xlsx)
              ואיים שלא ישתף פעולה עם מכירת הדירה עד לפתרון הסוגיה.
            </p>
            <div className="flex flex-col gap-2">
              {[
                {
                  point: "הגיליון לא נותח",
                  action: "לקרוא את ה-xlsx לפני כל תגובה. לא יודעים מה הוא כולל.",
                },
                {
                  point: "פיקדונות בית משפט אינם הלוואה",
                  action: "ריבית חריגה אינה חלה על כספים שהיו בנאמנות בית המשפט.",
                },
                {
                  point: "עיתוי חשוד",
                  action: "הטענה הגיעה 8 ימים אחרי פסק הדין, בו זמנית עם איום לחסום את המכירה. מנגנון לחץ, לא תביעה.",
                },
                {
                  point: "BH Law הכינה תגובה",
                  action: "לקרוא 'תשובה שרבט - 29.12.docx' לפני כל פעולה נוספת.",
                },
              ].map(({ point, action }, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-xs rounded px-3 py-2"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <span className="shrink-0" style={{ color: "var(--gold)", opacity: 0.6 }}>—</span>
                  <div>
                    <span className="font-semibold" style={{ color: "var(--text-primary)" }}>
                      {point}:{" "}
                    </span>
                    <span style={{ color: "var(--text-secondary)" }}>{action}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: Open questions */}
        <section>
          <SectionLabel>שאלות פתוחות — לפני 4.10.2026</SectionLabel>
          <div className="flex flex-col gap-2">
            {OPEN_QUESTIONS.map(({ q, action }, i) => (
              <div
                key={i}
                className="rounded-lg px-4 py-3"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--navy-border)" }}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="text-xs font-bold tabular-nums shrink-0"
                    style={{ color: "var(--gold)", opacity: 0.5, minWidth: "1.2rem" }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <div className="text-xs font-medium mb-1" style={{ color: "var(--text-primary)" }}>
                      {q}
                    </div>
                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                      {action}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-xs pb-4 text-center" style={{ color: "var(--text-secondary)" }}>
          עדכון אחרון: 24.5.2026 — דינה, יועצת משפטית ישראלית
        </footer>
      </main>
    </div>
  );
}
