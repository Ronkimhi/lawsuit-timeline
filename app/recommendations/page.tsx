"use client";

import Link from "next/link";
import { useMemo } from "react";

const MOTIONS = [
  {
    id: "trust-deposit",
    priority: 1,
    urgency: "critical" as const,
    title: "הפקדת ₪25,769 בנאמנות: שלילת עילת שרבט לעיכוב הטאבו",
    what: "להפקיד ₪25,769 (ר\"ח מטעם רון עצמו, נספח 8 בכתב התביעה) בנאמנות נוה גור, עם הסתייגות מפורשת 'בלא הודאה בחבות'. זה מסיר את הפרטנסיה הכספית האחרונה ומאפשר לבית המשפט לשאול: 'שרבט, למה אתה עוד מחזיק את הטאבו?' כתב התשובה (חלק מאותה הגשה) צריך לטפל בשתי הערות השופטת מ-14.5.2026: (א) הפרכת טענת החוב בצורה ברורה יותר, (ב) ניסוח עילת מס השבח (₪102,850) בצורה מדויקת יותר.",
    basis: "נספח 8 לכתב התביעה: ר\"ח מטעם רון עצמו מצא ₪25,769 לכל היותר. הבקשה הוגשה 24.5.2026, ממתינה לאישור בית משפט. שרבט עדיין חייב לרון ₪52,891 (מ-3.12.2024), יותר מ-₪25,769, כך שהסכום יקוזז. הפקדה: 'לפנים משורת הדין', 'בלא הודאה בחבות'.",
    exhibits: [
      "₪25,769: סכום מדויק מנספח 8 בכתב התביעה (ר\"ח מטעם רון עצמו)",
      "הסכם נאמנות עם נוה גור",
      "הסתייגות מפורשת: 'בלא הודאה בחבות'",
    ],
    sources: [
      { label: "נספח 8: ר\"ח מטעם רון (כתב התביעה)", file: undefined, note: "ר\"ח של רון עצמו העריך ₪25,769 לכל היותר. אפילו הצד שלנו לא מוצא בסיס לסכום גבוה יותר. מחזק את עמדת רון" },
    ],
    owner: "רון (הוראה לנוה גור, דחוף ביותר)",
  },
  {
    id: "hvl",
    priority: 2,
    urgency: "critical" as const,
    title: "פתיחת הוצאה לפועל: ₪52,891 (כ-₪61K עם ריבית)",
    what: "תיק הוצל\"פ על ₪52,891 שנותר חייב לאחר פסיקת תיק 1 (החלטת בית משפט 3.12.2024). הצעת שכ\"ט של נוה גור מדצמבר 2025 ממתינה לאישור רון. BH Law (פלג שחם-איילון): חלופה, ניהלה את תיק 1.",
    basis: "פסיקת בית משפט סופית (3.12.2024). חוק ההוצאה לפועל תשכ\"ז-1967. כל יום של עיכוב מגדיל את חוב הריבית.",
    exhibits: [
      "החלטת בית המשפט 3.12.2024: ₪52,891 חוב שרבט מאושר",
      "כ-₪61,000 שווי נוכחי (ריבית 19 חודשים עד מאי 2026)",
    ],
    sources: [
      { label: "החלטת בית המשפט 3.12.2024", file: undefined, note: "₪52,891: חוב שרבט לאחר קיזוז פיקדונות" },
      { label: "הצעת שכ\"ט נוה גור 21.12.2025", file: undefined, note: "₪950/שעה נוה, ₪750/שעה מורין, ₪3,000 רטיינר, ממתינה לאישור" },
    ],
    owner: "רון (הוראה לנוה גור) / חלופה: BH Law",
  },
  {
    id: "admissibility",
    priority: 3,
    urgency: "critical" as const,
    title: "בקשת קבילות: נספחי תיק 1 כהודאות בעל דין",
    what: "נספחים שהוגשו תחת שבועה על ידי שרבט עצמו בתיק 1 חייבים להיות קבילים בתיק 2 כהודאות בעל דין. הם מוכיחים: לוח הזמנים של המסירה, ליקויי בניה, כישלון מסירת המחסן, ואישור שרבט עצמו לקיום הליקויים. בלי הבקשה, שרבט יכול לערער על כל ראיה מתיק 1.",
    basis: 'ע"א 1302/02 מגן: מסמכים שהוגשו תחת שבועה בהליך קודם קבילים כהודאות בעל דין. תקנה 17 לתקנות סדר הדין האזרחי: ניתן להגיש מסמכים שהוגשו בהליך אחר כראיה.',
    exhibits: [
      "נספח 3, עמ' 129-130: ₪179,000 לממן: ₪145K פיצוי לדיירים, ₪30K ספק מטבח, ₪4K בית חכם (6.12.2020)",
      "נספח 13: מכתב מירור 18.1.2021: ממן מאיים על רון",
      "נספח 15: WhatsApp: אין חשמל נובמבר 2021",
      "נספח 18, עמ' 42-43: גולדנברג 'משכורת' (₪157,965)",
      "נספח 18, עמ' 48-49: ממן → ויקטור לוי (4.8.2019)",
      "נספח 18, עמ' 163-166: ת\"א 60392-01-20 (3 תפקידים במקביל)",
    ],
    sources: [
      { label: "נספח 3, עמ' 129-130", file: "/docs/nasah-3.pdf#page=1", note: "תשלום ₪179K, 3 ימים אחרי תעודת הגמר: ₪145K פיצוי לדיירים, ₪30K ספק מטבח לוגת" },
      { label: "נספח 13, עמ' 1", file: "/docs/nasah-13.pdf#page=1", note: "מכתב מירור 18.1.2021: ממן מאיים בביטול חוזה" },
      { label: "נספח 15, עמ' 1-4", file: "/docs/nasah-15.pdf#page=1", note: "WhatsApp נובמבר 2021: אין חשמל, דרישת מכתב הרשאה sbh" },
      { label: "נספח 18, עמ' 42-43", file: "/docs/nasah-18.pdf#page=3", note: "גולדנברג 'משכורת': מבטל את מעמדו כעד עצמאי" },
      { label: "נספח 18, עמ' 48-49", file: "/docs/nasah-18.pdf#page=4", note: "ממן → ויקטור לוי 4.8.2019: אוכף חוזים, לא מייצג בבית משפט" },
      { label: "נספח 18, עמ' 163-166", file: "/docs/nasah-18.pdf#page=1", note: "ת\"א 60392-01-20: ממן מייצג שרבט נגד יגאל אלון נישה במקביל לתיק 1" },
    ],
    owner: "יוסי (טיוטה) → נוה גור (הגשה)",
  },
  {
    id: "tabu-discovery",
    priority: 4,
    urgency: "high" as const,
    title: "בקשת גילוי: היסטוריית טאבו מלאה של דירה 11",
    what: "לבקש מרשם המקרקעין היסטוריית טאבו מלאה של גוש 6532 חלקה 230. הנושה מאחורי עיקול הוצל\"פ תיק 5119430922 (רישום 16388/2024/1) לא מזוהה בנסח הנוכחי. מידע זה קריטי: בלי זהות הנושה אי אפשר להסיר את העיקול, ובלי הסרת העיקול שרבט לא יכול לרשום בית משותף ולא ניתן למכור את הדירה.",
    basis: "תקנה 46 לתקנות המקרקעין: כל בעל ענין רשאי לבקש נסח מפורט. בקשה לגילוי מסמכים (תקנות סד\"א): הנסח המרוכז לא מזהה נושה. עיקול לא מזוהה = מכשול ישיר לרישום בית משותף.",
    exhibits: [
      "נסח טאבו מרוכז 21.10.2024 (קבלה #20599): עמ' 10-11, רישום 16388/2024/1",
      "מספר תיק הוצל\"פ: 5119430922, לשכת הוצאה לפועל ת\"א",
      "קנס ממשלתי ₪13,408 (רישום 18667/2024/1) + זהות המרכז לגביית קנסות",
    ],
    sources: [
      { label: "נסח מרוכז 21.10.2024, עמ' 10-11", file: "/docs/tabu.pdf#page=10", note: "עיקול הוצל\"פ + קנס ממשלתי: שניהם חוסמים רישום ומכירה" },
      { label: "לשכת הוצל\"פ ת\"א: תיק 5119430922", file: undefined, note: "להתקשר ולבקש זהות הנושה. פנייה אחת לסיום שאלה פתוחה מס' 1." },
    ],
    owner: "נוה גור (בקשת גילוי לבית המשפט) + רון (פנייה טלפונית ללשכת הוצל\"פ)",
  },
  {
    id: "trust-discovery",
    priority: 5,
    urgency: "high" as const,
    title: 'בקשת גילוי נכסים: אס.איי.בי.אן בנאמנות בע"מ (ח.פ. 515456150)',
    what: "ישות נאמנות מוסתרת שקיבלה תשלומים מחשבון 151783 של שרבט 38. לא הוצהרה בתצהיר שרבט. אם שרבט מנתב נכסים דרכה, זה פוגע ישירות בביצוע פסק הדין ומצדיק עיקול מונע.",
    basis: "כלל הגילוי המלא (חובת גילוי בתצהיר). הסתרת נכסים עשויה לעמוד בבסיס בקשה לביטול הגנה ולסעד זמני.",
    exhibits: [
      "עסקאות בין שרבט 38 לאס.איי.בי.אן, 2018–2024",
      "זהות הנהנה מהנאמנות (שם + פרטי בעלות)",
      "מעורבות ממן בישות: חוזים, ייפויי כוח",
    ],
    sources: [
      { label: "חשבון בנק 151783: שרבט 38", file: undefined, note: "חשבון נפרד שממנו בוצעו תשלומים לאס.איי.בי.אן, לא מוצהר בתצהיר" },
      { label: "ח.פ. 515456150: רשם החברות", file: undefined, note: "ישות רשומה: אס.איי.בי.אן בנאמנות בע\"מ, נבדל מ-שרבט 38 (ח.פ. 514458439)" },
      { label: "פסק דין תיק 1, 26.10.2024", file: "/docs/psak-din.pdf#page=17", note: "פסיקה סופית: ביצוע תלוי ביכולת גביה משרבט. אם נכסים הועברו, נדרש עיקול" },
      { label: "תקנה 19 לתקנות ההוצאה לפועל", file: undefined, note: "בסיס לבקשת עיקול נכסים של צד שלישי הקשור לחייב" },
    ],
    owner: "גלית (חקירה פיננסית) + יוסי (בקשת גילוי לבית המשפט)",
  },
];

const OPEN_QUESTIONS = [
  { q: "מי הנושה מאחורי הוצל\"פ תיק 5119430922 (ת\"א)?", action: "להתקשר ללשכת הוצאה לפועל ת\"א עם מספר תיק 5119430922. פנייה אחת לסיום." },
  { q: "מה היא יגאל אלון נישה בע\"מ (ח.פ. 514772433) ולמה נרשמה בבניין ב-2023?", action: "חיפוש ברשם החברות (ח.פ. 514772433). אם שייכת לשרבט/ממן: שכבת נכסים מוסתרת." },
  { q: "האם החשמל חובר אחרי נובמבר 2021? מתי? מי שילם?", action: "לחפש בשרשורי מייל post-נובמבר 2021 (קטגוריה case2-active). איתן מוקצה לכך." },
  { q: "תאריך רישום טאבו מלא (תת-חלקה) בשם רון: לפני או אחרי מכירה לבן-חמו?", action: "נוה גור לברר עם לשכת רישום מקרקעין. עדיין פתוח." },
  { q: "מה המצב הפיננסי של שרבט, יכולת גביה?", action: "גלית: אס.איי.בי.אן בנאמנות בע\"מ (ח.פ. 515456150) + בקשת גילוי פיננסי." },
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
            className="font-semibold underline underline-offset-2 decoration-dotted cursor-pointer transition-all hover:decoration-solid"
            style={{ color: "var(--gold-light)", textDecorationColor: "rgba(201,168,76,0.5)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#f5d98b";
              (e.currentTarget as HTMLAnchorElement).style.textDecorationColor = "rgba(201,168,76,1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold-light)";
              (e.currentTarget as HTMLAnchorElement).style.textDecorationColor = "rgba(201,168,76,0.5)";
            }}
          >
            {src.label} ↗
          </a>
        ) : (
          <span className="font-semibold" style={{ color: "var(--gold-light)" }}>{src.label}</span>
        )}
        <span style={{ color: "var(--text-secondary)" }}>: {src.note}</span>
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
            המלצות אסטרטגיות: נוה גור, מורין סוטיל, אילן גרבר
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="text-center ml-2">
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
            className="text-xs px-3 py-2 rounded-md transition-all cursor-pointer font-medium"
            style={{
              background: "rgba(255,255,255,0.07)",
              color: "var(--text-primary)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.13)";
              (e.currentTarget as HTMLAnchorElement).style.border = "1px solid rgba(255,255,255,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.07)";
              (e.currentTarget as HTMLAnchorElement).style.border = "1px solid rgba(255,255,255,0.15)";
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
          מסמך עבודה פנימי, לשימוש משרד נוה בלבד. כל בקשה וטיוטה דורשת אישור עו&quot;ד נוה גור לפני הגשה לבית המשפט.
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
                        <span style={{ color: "var(--gold)", opacity: 0.6 }}>*</span>
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
                    מקורות: דינה
                  </div>
                  {motion.sources.map((src, i) => (
                    <SourceRow key={i} src={src} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: Counter-claim */}
        <section>
          <SectionLabel>תביעת הנגד: ₪186,000</SectionLabel>
          <div
            className="rounded-lg p-5"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--navy-border)" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ background: "rgba(34,197,94,0.12)", color: "#86efac" }}
              >
                נותחה, נדחית
              </span>
              <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                עמדת שרבט (נובמבר 2024). גלית סתרה על 3 בסיסים
              </span>
            </div>
            <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              שרבט טוען שרון חייב לו ₪186,000 &quot;ריבית חריגה&quot;. הגיש גיליון אקסל ואיים שלא ישתף פעולה עם מכירת הדירה.
              הטענה נסתרה לחלוטין. 3 בסיסים עצמאיים.
            </p>
            <div className="flex flex-col gap-2">
              {[
                {
                  point: "₪234K שולם, עיקול עצמי",
                  action: "כל ₪234K שולמו לבית המשפט (עיקול עצמי ביוזמת רון ו-BH Law). בית המשפט אישר. שרבט קיבל בדיוק מה שנפסק.",
                },
                {
                  point: "ר\"ח של רון עצמו: ₪25,769 בלבד",
                  action: "נספח 8 לכתב התביעה: ר\"ח מטעם רון מצא ₪25,769 לכל היותר. אפילו הצד שלנו לא מוצא בסיס ל-₪186,000.",
                },
                {
                  point: "ריבית חריגה: בלתי אפשרית",
                  action: "ריבית חריגה אינה חלה על כספים שהחזיק בית המשפט. טענה זו אין לה תוקף משפטי.",
                },
                {
                  point: "עיתוי חשוד: מנגנון לחץ",
                  action: "הטענה הגיעה 8 ימים אחרי פסק הדין, עם איום לחסום מכירת הדירה. לא תביעה לגיטימית.",
                },
              ].map(({ point, action }, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-xs rounded px-3 py-2"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <span className="shrink-0" style={{ color: "var(--gold)", opacity: 0.6 }}>*</span>
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

        {/* SECTION 3: Open questions */}
        <section>
          <SectionLabel>שאלות פתוחות: לפני 4.10.2026</SectionLabel>
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
          עדכון אחרון: 26.5.2026. דינה, יועצת משפטית ישראלית
        </footer>
      </main>
    </div>
  );
}
