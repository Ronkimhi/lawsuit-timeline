export type EventCategory =
  | "pre-contract"
  | "pre-case"
  | "case1"
  | "delivery"
  | "electricity"
  | "verdict"
  | "case2";

export type EventImportance = "critical" | "high" | "standard";

export interface TimelineEvent {
  id: string;
  date: string;
  dateDisplay: string;
  title: string;
  titleHe?: string;
  detail: string;
  category: EventCategory;
  importance: EventImportance;
  evidenceIds: string[];
  threadId?: string;
}

export const CATEGORY_LABELS: Record<EventCategory, string> = {
  "pre-contract": "טרום חוזה",
  "pre-case": "לפני התביעה",
  "case1": "תיק 1",
  "delivery": "מסירה וחזקה",
  "electricity": "חשמל",
  "verdict": "פסיקה",
  "case2": "תיק 2",
};

export const CATEGORY_COLORS: Record<EventCategory, string> = {
  "pre-contract": "bg-slate-600 text-slate-100",
  "pre-case": "bg-blue-800 text-blue-100",
  "case1": "bg-indigo-700 text-indigo-100",
  "delivery": "bg-amber-700 text-amber-100",
  "electricity": "bg-orange-700 text-orange-100",
  "verdict": "bg-emerald-700 text-emerald-100",
  "case2": "bg-red-800 text-red-100",
};

export const events: TimelineEvent[] = [
  {
    id: "kagan-table-2017",
    date: "2017-02-23",
    dateDisplay: "Feb 23, 2017",
    title: "Attorney Kagan's Allocation Table — Storage Column for Apt 11: BLANK",
    titleHe: "טבלת הקצאה של עו\"ד קגן — עמודת מחסן לדירה 11: ריק",
    detail:
      "טבלת הקצאה שהכין עו\"ד רונן קגן לפני המכירה. עמודת יחידת האחסנה לדירה 11 נותרה ריקה — לא הוקצתה יחידת אחסנה בשלב זה.",
    category: "pre-contract",
    importance: "high",
    evidenceIds: ["storage-wrong-unit"],
    threadId: "physical-file",
  },
  {
    id: "labor-stop-orders",
    date: "2018-07-22",
    dateDisplay: "Jul 22 – Aug 12, 2018",
    title: "Ministry of Labor — 2 Safety Stop Orders on Construction Site",
    titleHe: "משרד העבודה — 2 צווי עצירה באתר הבניה (לפני חוזה רון)",
    detail:
      "שני צווי עצירה הוצאו לאתר הבניה ברחוב יגאל אלון 24, הרצליה: תיק 333699 (22.7.2018) ותיק 889569 (12.8.2018). קנס בטווח ₪20,000-35,000 כל אחד. המפקח: אייל חכים, משרד העבודה — שכיהן גם כמפקח הפנימי של הפרויקט. שני הצווים הוצאו שלושה חודשים לפני חתימת חוזה הרכישה של רון (14.10.2018). שרבט ידע על הפרות בטיחות פעילות באתר ביום שמכר לרון את הדירה — ולא גילה.",
    category: "pre-contract",
    importance: "high",
    evidenceIds: [],
    threadId: "physical-file",
  },
  {
    id: "purchase-contract",
    date: "2018-10-14",
    dateDisplay: "Oct 14, 2018",
    title: "Purchase Contract Signed — Apt 11, מחסן 10 Assigned Explicitly",
    titleHe: "חוזה רכישה נחתם — דירה 11, מחסן מספר 10",
    detail:
      "רון וסתיו חותמים על הסכם הרכישה לדירה 11. החוזה מציין מפורשות מחסן מספר 10 — בסתירה לריק בטבלת קגן 2017. חניה מוקצית: חניה 12. מועד מסירה חוזי: 1.3.2019.",
    category: "pre-contract",
    importance: "critical",
    evidenceIds: ["delivery-delay", "storage-wrong-unit", "parking-discrepancy"],
    threadId: "physical-file",
  },
  {
    id: "kagan-letter-2019",
    date: "2019-01-10",
    dateDisplay: "Jan 10, 2019",
    title: "Attorney Kagan's Formal Demand Letter — Delivery, Storage, Defects",
    titleHe: "מכתב דרישה רשמי של עו\"ד קגן — מסירה, מחסן, ליקויים",
    detail:
      "התקשורת המשפטית הרשמית הראשונה. קגן דורש רשמית: (1) אישור מועד מסירה, (2) מחסן 10 — שנוי במחלוקת מהיום הראשון, (3) פתרון ליקויים מתועדים. משכנתא ₪750,000 נרשמה ב-22.1.2019 (בנק דיסקונט).",
    category: "pre-case",
    importance: "high",
    evidenceIds: ["storage-wrong-unit"],
    threadId: "physical-file",
  },
  {
    id: "maman-kagan-response",
    date: "2019-01-23",
    dateDisplay: "Jan 23, 2019",
    title: "ממן's 8-Point Response to Kagan Letter",
    titleHe: "תגובת ממן ב-8 נקודות למכתב קגן",
    detail:
      "ממן משיב בשם שרבט 38 במכתב בן 8 נקודות המסיט את כל הדרישות. תיעוד ראשון של ממן כסוכן אכיפה משפטי של שרבט — לפני כל הליך משפטי.",
    category: "pre-case",
    importance: "high",
    evidenceIds: ["maman-enforcement-role"],
    threadId: "physical-file",
  },
  {
    id: "form50-delay",
    date: "2019-02-04",
    dateDisplay: "Feb 4 – Mar 25, 2019",
    title: "Form 50 Delay — ממן Stalls Tax Clearance for ~4 Weeks",
    titleHe: "עיכוב טופס 50 — ממן מעכב אישור מס כ-4 שבועות",
    detail:
      "רון מבקש שוב ושוב מממן לחתום על טופס 50 (אישור מס) הנדרש על ידי בנק לאומי. ממן משיב 'אבדוק מחר', 'בתהליך', ולאחר מכן שותק. טופס 50 התקבל לבסוף ב-25.2.2019 — 4 שבועות עיכוב שגרם ממן. כספי המשכנתא שוחררו ב-26.3.2019.",
    category: "pre-case",
    importance: "high",
    evidenceIds: ["maman-enforcement-role"],
    threadId: "physical-file",
  },
  {
    id: "contractual-delivery",
    date: "2019-03-01",
    dateDisplay: "Mar 1, 2019",
    title: "CONTRACTUAL DELIVERY DATE — שרבט Fails to Deliver",
    titleHe: "מועד המסירה החוזי — שרבט לא מסר",
    detail:
      "לפי סעיף 8.1 בחוזה הרכישה, 1.3.2019 הוא מועד המסירה המוסכם. שרבט לא מסר. תשתית המים של הבניין הושלמה רק באותו החודש (לפי הגשת שרבט עצמו בת\"א 60392-01-20, פרה. 13) — מה שמאשר כי תשתית בסיסית לא הייתה מוכנה במועד המובטח.",
    category: "delivery",
    importance: "critical",
    evidenceIds: ["delivery-delay", "water-march-2019"],
    threadId: "physical-file",
  },
  {
    id: "victor-levi-letter",
    date: "2019-08-04",
    dateDisplay: "Aug 4, 2019",
    title: "ממן Sends Demand Letter to Victor Levi (Infrastructure Dispute)",
    titleHe: "ממן שולח מכתב איום לוויקטור לוי — סכסוך תשתיות",
    detail:
      "ממן משמש סוכן אכיפה מסחרי של שרבט בסכסוך תשתיות כנגד ויקטור לוי (ספקית חשמל). אין מדובר בייצוג בבית משפט — עורך דין המשתמש במכתבי איום לפתרון סכסוך קבלן בניין. אותה טקטיקה תופעל כנגד רון במכתב המירור מ-18.1.2021. הוגש על ידי שרבט עצמו כנספח 18 עמ' 46-47 ומאושר בת\"א 60392-01-20 פרה. 18.",
    category: "pre-case",
    importance: "critical",
    evidenceIds: ["maman-victor-levi", "ta-60392-01-20"],
    threadId: "physical-file",
  },
  {
    id: "defect-inspection-2019",
    date: "2019-06-13",
    dateDisplay: "Jun 13, 2019",
    title: "First Defect Inspection — Report 1729 (Architect נירה גורוביץ')",
    titleHe: "בדיקת ליקויים ראשונה — דוח 1729 (אדריכלית נירה גורוביץ')",
    detail:
      "בדיקה לפני קבלת חזקה: ליקויי צבע וטיח, ריצוף, אלומיניום, אינסטלציה (ספרינקלרים חסרים), חשמל — כולם מתועדים. הדו\"ח הועבר לשרבט. לא ננקטה פעולת תיקון.",
    category: "pre-case",
    importance: "high",
    evidenceIds: [],
    threadId: "physical-file",
  },
  {
    id: "case1-filed",
    date: "2019-12-19",
    dateDisplay: "Dec 19, 2019",
    title: "Case 1 Filed — ת\"א 70677-12-19 (Temporary Injunction)",
    titleHe: "תביעה 1 — בקשה לסעד זמני",
    detail:
      "משרד BH Law (פלג שחם-איילון) מגיש תביעה 1 בשם רון. בית משפט: שלום פתח תקווה, שופטת עדנה יוסף-קוזין. עילות: עיכוב מסירה, ליקויי בניה.",
    category: "case1",
    importance: "critical",
    evidenceIds: [],
    threadId: "16f18f61837e1102",
  },
  {
    id: "deposit-1",
    date: "2020-02-03",
    dateDisplay: "Feb 3, 2020",
    title: "₪167,000 Court Deposit (עיקול עצמי — Case 1 Opening)",
    titleHe: "פיקדון ₪167,000 בבית משפט (עיקול עצמי — פתיחת תיק 1)",
    detail:
      "רון מפקיד ₪167,000 בנאמנות בית משפט (עיקול עצמי) לפתיחת תיק 1. פיקדונות נוספים: ₪20,000 (2.3.2020), ₪17,000 ו-₪67,000 (27.1.2021). סה\"כ שהופקד: ₪271,000.",
    category: "case1",
    importance: "high",
    evidenceIds: ["deposit-ledger"],
    threadId: "physical-file",
  },
  {
    id: "occupancy-cert",
    date: "2020-12-03",
    dateDisplay: "Dec 3, 2020",
    title: "Occupancy Certificate Issued — 21 Months After Contractual Date",
    titleHe: "תעודת גמר — 21 חודשים אחרי המועד החוזי",
    detail:
      "שרבט מקבל תעודת גמר ב-3.12.2020. זהו 21 חודשים ו-2 ימים לאחר מועד המסירה החוזי 1.3.2019 — נקודת המוצא לחישוב עיכוב תיק 1.",
    category: "delivery",
    importance: "critical",
    evidenceIds: ["delivery-delay"],
    threadId: "physical-file",
  },
  {
    id: "maman-payment-179k",
    date: "2020-12-06",
    dateDisplay: "Dec 6, 2020",
    title: "₪179,000 Payment to ממן — Including ₪30,000 'Electricity Connection'",
    titleHe: "₪179,000 לחשבון ממן — כולל ₪30,000 'הוצאות חיבור חשמל'",
    detail:
      "שלושה ימים לאחר תעודת האיכלוס, ₪179,000 מתמורת מכירת הפנטהאוז (ירון וחנה חרמש) זורמים לחשבון עו\"ד יאיר נאור ממן. פירוט: ₪30,000 עבור 'הוצאות חיבור חשמל', ₪4,000 מערכת מים, ₪145,000 התחייבויות דיירים. לדירת רון אין חשמל פעיל בשלב זה — מוכח על ידי חילופי WhatsApp מנובמבר 2021 (נספח 15, הוגש על ידי שרבט עצמו).",
    category: "electricity",
    importance: "critical",
    evidenceIds: ["maman-179k", "electricity-no-connection"],
    threadId: "physical-file",
  },
  {
    id: "leshem-delivery-notice",
    date: "2020-12-07",
    dateDisplay: "Dec 7, 2020",
    title: "Asaf Leshem — Delivery Notice: Apartment 'Ready' (Day After ₪179K Payment)",
    titleHe: "אסף לשם — הודעת מסירה: הדירה 'מוכנה' — יום אחרי העברת ₪179K לממן",
    detail:
      "אסף לשם (צוות שרבט) פונה לרון ומודיע שהדירה מוכנה למסירה. יום לאחר שרבט העביר ₪179,000 לחשבון ממן — כולל ₪30,000 לחיבור חשמל. רון שולח את גאיה הנדסה לבדיקה ביום המחרת (8.12.2020) ומתגלים 100+ ליקויים. הרצף: 3.12 תעודת גמר → 6.12 ₪179K לממן → 7.12 הודעת מסירה לרון → 8.12 גאיה מגלה שאין חשמל.",
    category: "delivery",
    importance: "critical",
    evidenceIds: ["maman-179k", "electricity-no-connection"],
    threadId: "physical-file",
  },
  {
    id: "gaya-inspection",
    date: "2020-12-08",
    dateDisplay: "Dec 8, 2020",
    title: "Gaya Engineering Inspection — Apartment Not Connected to Electricity",
    titleHe: "בדיקת גאיה הנדסה — הדירה לא מחוברת לחשמל",
    detail:
      "יומיים לאחר תשלום ₪179,000 לממן. גאיה הנדסה בודקת דירה 11: פרק החשמל לא הושלם כראוי; הדירה אינה מחוברת לחשמל. ₪30,000 שיועדו לחיבור חשמל כבר הועברו לחשבון ממן. הם לא הגיעו לדירה.",
    category: "electricity",
    importance: "critical",
    evidenceIds: ["maman-179k", "electricity-no-connection"],
    threadId: "physical-file",
  },
  {
    id: "bh-demand-letter-dec2020",
    date: "2020-12-20",
    dateDisplay: "Dec 20, 2020",
    title: "BH Law Formal Demand — Fix All Defects Before Possession (Jan 3 Deadline)",
    titleHe: "מכתב דרישה רשמי — BH Law דורש תיקון כל הליקויים לפני המסירה",
    detail:
      "פלג שחם-איילון (BH Law) שולח מכתב רשמי ל-ממן עם 20+ ליקויים שחייבים להיתקן לפני מסירת הדירה. תאריך מסירה נקבע: 3.1.2021 בשעה 10:00. המכתב מפנה לדו\"ח גאיה הנדסה (8.12.2020) ולעיכוב של 21+ חודשים מ-1.3.2019. דורש בדיקת רטיבות ללא נוכחות שרבט לפני המסירה. מקשר את שרשרת הראיות: ממן מקבל את המכתב ב-20.12 → 43 ימים לאחר מכן שולח את מכתב המירור המאיים (18.1.2021) — לאחר שכבר קיבל ₪179K.",
    category: "delivery",
    importance: "critical",
    evidenceIds: ["maman-mirror-letter-ev", "electricity-no-connection"],
    threadId: "physical-file",
  },
  {
    id: "maman-mirror-letter",
    date: "2021-01-18",
    dateDisplay: "Jan 18, 2021",
    title: "ממן's Mirror-Letter — Threatening Contract Cancellation",
    titleHe: "מכתב מירור של ממן — איום בביטול חוזה",
    detail:
      "43 ימים לאחר קבלת ₪179,000 מכספי הבניין, ממן שולח את האיום המשפטי האגרסיבי ביותר בתקופה שלפני ההתדיינות: מכתב רשמי למשרד BH Law המאיים בביטול חוזה הרכישה של רון. זוהי אותה טקטיקה של מכתבי איום שיושמה כנגד ויקטור לוי ב-2019. ממן מחזיק בו זמנית כספי בניין ומאיים על הקונה.",
    category: "case1",
    importance: "critical",
    evidenceIds: ["maman-mirror-letter-ev", "maman-enforcement-role"],
    threadId: "physical-file",
  },
  {
    id: "actual-possession",
    date: "2021-02-02",
    dateDisplay: "Feb 2, 2021",
    title: "Actual Possession Transfer — 23 Months After Contractual Date",
    titleHe: "מסירת חזקה בפועל — 23 חודשים אחרי המועד החוזי",
    detail:
      "רון מקבל חזקה על דירה 11 ב-2.2.2021 — 23 חודשים לאחר מועד המסירה החוזי 1.3.2019. חשמל עדיין אינו מחובר. מחסן 10 (לפי החוזה) לא נמסר — רון יקבל בהמשך מחסן 11, יחידה שונה.",
    category: "delivery",
    importance: "critical",
    evidenceIds: ["delivery-delay", "storage-wrong-unit"],
    threadId: "physical-file",
  },
  {
    id: "tabu-seizure",
    date: "2021-05-27",
    dateDisplay: "May 27, 2021",
    title: "Court Seizure Registered on SHBN's Tabu Note (שטר 17267/2021/1)",
    titleHe: "עיקול בית משפט נרשם בטאבו — שטר 17267/2021/1",
    detail:
      "עיקול בית משפט נרשם בנסח הטאבו של הבניין — מאשר קיום הליך משפטי פעיל. נכון לתאריך זה, רון מחזיק רק הערת אזהרה (נרשמה אוקטובר 2018). בעלות מלאה בטאבו (תת-חלקה) עדיין לא נרשמה על שמו — שנתיים וחצי לאחר מועד המסירה המובטח.",
    category: "case1",
    importance: "high",
    evidenceIds: ["tabu-gap"],
    threadId: "physical-file",
  },
  {
    id: "steinert-hearing",
    date: "2021-09-19",
    dateDisplay: "Sep 19, 2021",
    title: "Steinert v. Sharbat — Sharbat Admits Moisture Known Since Jan 2019, ₪50K-55K Pre-Budgeted Per Apt",
    titleHe: "שטיינר נ. שרבט — שרבט מודה: ידע על רטיבות מינואר 2019, תקצב ₪50-55K לכל דירה",
    detail:
      "דיון הוכחות בת\"א 15343-01-20 (תיק מקביל, אותו בניין, בית משפט שלום הרצליה, שופט גלעד הס). שרבט מודה בגוף הדיון: (1) ידע על בעיות הרטיבות מינואר 2019 — לפני חוזה רון ולפני מועד המסירה המובטח; (2) תקצב ₪50,000-55,000 לתיקונים לכל דירה מראש; (3) כלל הדיירים בתמ\"א 38 קיבלו חזקה בפברואר 2021 — עיכוב מתואם, לא אינדיבידואלי. שופט הס קבע: ליקויי בנייה קבילים בתביעות איחור. ראיה ישירה לתיק 2 — שרבט ידע על הנזקים לפני שמסר לרון.",
    category: "case2",
    importance: "critical",
    evidenceIds: ["moisture-damage"],
    threadId: "physical-file",
  },
  {
    id: "nov-2021-electricity",
    date: "2021-11-14",
    dateDisplay: "Nov 14–18, 2021",
    title: "WhatsApp: No Electricity — Ron Asks for Contract Number to Connect",
    titleHe: "וואטסאפ: אין חשמל — רון מבקש מספר הזמנה לחיבור",
    detail:
      "14 בנובמבר: רון מבקש את מספר ההזמנה הנדרש לפתיחת חוזה מול חברת חשמל: 'אני צריך בבקשה מספר הזמנה או אוביייקט כדי לפתוח חוזה מול חברת חשמל'. 15 בנובמבר: צוות שרבט (אירית) מאשר שאין ברשותם את המספר. 18 בנובמבר: החשמלאי מדווח: 'דיברנו עם חברת חשמל, הם מבקשים מכתב שאומר שהדירה נמסרה ושאתם לשרים לחבר אותה לחשמל עם חותמת החברה של sbh' — חברת חשמל דורשת מכתב הרשאה חתום sbh. שרבט לא סיפק אותו. 9 חודשים לאחר קבלת החזקה, עדיין ללא חשמל. חילופי הודעות אלה הוגשו על ידי שרבט עצמו כנספח 15 בהגנתו בתיק 1.",
    category: "electricity",
    importance: "critical",
    evidenceIds: ["electricity-no-connection"],
    threadId: "physical-file",
  },
  {
    id: "sharbat-defense-exhibits",
    date: "2021-12-01",
    dateDisplay: "Dec 2021",
    title: "שרבט Files Defense Exhibits Under Oath — 20 Exhibits Including Party Admissions",
    titleHe: "שרבט מגיש נספחים תחת שבועה — 20 נספחים",
    detail:
      "שרבט מגיש את הגנת תיק 1 (תצהיר עדות ראשית) עם 20 נספחים, תחת שבועה. כוללים: נספח 3 (תשלום ₪179,000 לממן), נספח 15 (WhatsApp ללא חשמל נובמבר 2021), נספח 18 (העברת משכורת לגולדנברג + מכתב ויקטור לוי + תביעת תשתיות ת\"א 60392-01-20). על ידי הגשת נספחים אלה בהגנתו, שרבט יצר הודאות בעל דין שהן כיום הראיות הראשיות בתיק 2.",
    category: "case1",
    importance: "critical",
    evidenceIds: ["maman-179k", "electricity-no-connection", "goldenberg-salary", "maman-victor-levi"],
    threadId: "physical-file",
  },
  {
    id: "eq-moisture-report",
    date: "2025-01-01",
    dateDisplay: "Jan 2025",
    title: "ע.ק Expert Report — Active Moisture in 4 Zones, Sub-floor Failure",
    titleHe: "חוות דעת מומחה ע.ק — רטיבות פעילה ב-4 אזורים, כשל ריצוף",
    detail:
      "דו\"ח מומחה ע.ק איתור נזילות מאשר נזקי רטיבות מתמשכים בדירה 11: 4 אזורי רטיבות פעילה, כשל איטום תת-רצפתי בדירה 14 הגורם לנזקי תקרה בדירה 11. שרבט ידע על הרטיבות מינואר 2019 (הודה בשטיינר נ. שרבט). הנזק מתמשך ולא נפתר נכון לינואר 2025.",
    category: "case2",
    importance: "high",
    evidenceIds: ["moisture-damage"],
    threadId: "physical-file",
  },
  {
    id: "case1-verdict",
    date: "2024-10-26",
    dateDisplay: "Oct 26, 2024",
    title: "Case 1 Verdict — ₪223,413 Delay Compensation + ₪20,000 Attorney Fees",
    titleHe: "פסק דין — ₪223,413 פיצוי איחור + ₪20,000 שכ\"ט",
    detail:
      "השופטת עדנה יוסף-קוזין (שלום פתח תקווה) פוסקת: ₪223,413 פיצויי עיכוב (21 חודשים + 28 ימים, מ-1.3.2019 עד 28.12.2020, בשיעור ₪6,800 לחודש לפי שמאי). ₪20,000 שכ\"ט. תביעה לנזק לא ממוני (₪20,000 נתבע): נדחתה. אגרת משפט: הוחזרה. שולם מפיקדונות ₪271,000. עודף ~₪27,587 נתבע על ידי שרבט בתביעת נגד ₪186,000.",
    category: "verdict",
    importance: "critical",
    evidenceIds: ["verdict-amounts", "deposit-ledger"],
    threadId: "1932191b577b7ada",
  },
  {
    id: "apartment-sale",
    date: "2024-11-14",
    dateDisplay: "Nov 14, 2024",
    title: "Apartment Sale to Ben-Hamo — 2 Days After Verdict",
    titleHe: "מכירת הדירה לבן-המו — יומיים אחרי פסק הדין",
    detail:
      "רון מוכר את דירה 11 לרוכשי בן-חמו, יומיים לאחר פסיקת תיק 1. ממן מחזיק בייפוי כוח מאת שרבט המתפרש על רישומי טאבו — הוא נותר שומר סף בהעברת הנכס. שרבט מצהיר כי לא ישתף פעולה עם המכירה עד לסיום ההתחשבנות.",
    category: "verdict",
    importance: "high",
    evidenceIds: ["tabu-gap"],
    threadId: "19339809441ce49a",
  },
  {
    id: "maman-poa",
    date: "2024-11-17",
    dateDisplay: "Nov 17, 2024",
    title: "ממן Signs הערת אזהרה via POA — Post-Verdict Gatekeeper Role",
    titleHe: "ממן חותם על הערת אזהרה באמצעות יפוי כוח — שומר סף לאחר פסק הדין",
    detail:
      "שלושה ימים לאחר מכירת הדירה, משרד נוה (מורין סוטיל) מבקש מממן לחתום על טופס רישום הערת אזהרה באמצעות ייפוי הכוח שברשותו מאת שרבט, לסייע ברישום הטאבו עבור רוכשי בן-חמו. ממן החזיק את ייפוי הכוח — מאשר את תפקידו המבצעי המתמשך גם לאחר סגירת תיק 1.",
    category: "verdict",
    importance: "high",
    evidenceIds: ["maman-enforcement-role"],
    threadId: "19339809441ce49a",
  },
  {
    id: "sharbat-186k",
    date: "2024-11-20",
    dateDisplay: "Nov 20, 2024",
    title: "שרבט's ₪186,000 Counter-Claim — Will Block Sale Until Resolved",
    titleHe: "תביעה נגדית של שרבט ₪186,000 — יחסום את המכירה עד הסדרה",
    detail:
      "שרבט טוען כי רון חייב לו ₪186,000 ב'ריבית חריגה'. גיליון: 'התחשבנות רון קמחי (2) (6) (1).xlsx'. עמדתו: לא ישתף פעולה עם רישום הטאבו לצורך מכירת הדירה עד לפתרון תביעת הנגד. משרד BH Law (פלג) מכין תגובה רשמית (29.12.2024).",
    category: "verdict",
    importance: "high",
    evidenceIds: ["deposit-ledger"],
    threadId: "1932191b577b7ada",
  },
  {
    id: "case2-filed",
    date: "2025-05-11",
    dateDisplay: "May 11, 2025",
    title: "Case 2 Filed — ת\"א 24371-05-25 (Ongoing)",
    titleHe: "תביעה 2 — ת\"א 24371-05-25",
    detail:
      "משרד נוה (נוה גור + מורין סוטיל + אילן גרבר) מגיש תביעה 2 בשם רון. בית משפט: שלום הרצליה, שופטת יעל מרמור דומב. התביעה מתמקדת בהתנהלות ממן: שזירות כספית עם פרויקט הבניין תוך פעולה כעורך דינו של שרבט כנגד רון, המהווה הפרת חובת נאמנות לפי סעיפים 54-62 לחוק לשכת עורכי הדין. חמישה טיוטות שכללו את כתב התביעה בין מרץ-מאי 2025.",
    category: "case2",
    importance: "critical",
    evidenceIds: ["maman-179k", "electricity-no-connection", "maman-enforcement-role"],
    threadId: "196beed93fe485b6",
  },
  {
    id: "case2-defense-filed",
    date: "2025-06-03",
    dateDisplay: "Jun 3, 2025",
    title: "Defense Files כתב הגנה in Case 2 (ממן Representing שרבט)",
    titleHe: "ממן מגיש כתב הגנה בתביעה 2 — בשמו של שרבט",
    detail:
      "ממן מגיש את הגנת תיק 2 בשם שרבט. ממן — עורך הדין שהתנהלותו היא נושא תיק 2 — כותב בו זמנית את ההגנה. זה מחזק את טענת ניגוד העניינים.",
    category: "case2",
    importance: "high",
    evidenceIds: ["maman-enforcement-role"],
    threadId: "physical-file",
  },
  {
    id: "first-kadam-mishpat",
    date: "2025-06-24",
    dateDisplay: "Jun 24, 2025",
    title: "First קדם משפט — Judge יעל מרמור דומב",
    titleHe: "קדם משפט ראשון — שופטת יעל מרמור דומב",
    detail:
      "קדם המשפט הראשון בתיק 2. יושבת בראש: שופטת מרמור דומב. מוביל: משרד נוה. דיונים נוספים: 1-2.12.2025 (בקשה להאצה). 14.5.2026 (קדם משפט — פרוצדורלי בלבד, נדחה ל-4.10.2026).",
    category: "case2",
    importance: "high",
    evidenceIds: [],
    threadId: "physical-file",
  },
  {
    id: "kadam-mishpat-may2026",
    date: "2026-05-14",
    dateDisplay: "May 14, 2026",
    title: "קדם משפט — Procedural Only, Postponed to Oct 4, 2026",
    titleHe: "קדם משפט 14.5.2026 — פרוצדורלי בלבד, נדחה ל-4.10.2026",
    detail:
      "קדם משפט בתיק 2 בפני השופטת יעל מרמור דומב. ישיבה פרוצדורלית בלבד — לא התקבלו החלטות מהותיות. בית המשפט קבע: הדיון הבא יתקיים ב-4.10.2026. כל הבקשות טרום הדיון חייבות להיות מוגשות לפני כן: (1) בקשת קבילות נספחי תיק 1 כהודאות בעל דין; (2) בקשת גילוי רשומות NyM Law; (3) בקשת גילוי אס.איי.בי.אן בנאמנות בע\"מ (ח.פ. 515456150). הכנה אינטנסיבית: 4 ישיבות Zoom (Nave Law + רון + סתיו) בתאריכים 16.4, 30.4, 12.5 ו-13.5.2026.",
    category: "case2",
    importance: "critical",
    evidenceIds: [],
    threadId: "19e25122de965df9",
  },
  {
    id: "next-hearing",
    date: "2026-10-04",
    dateDisplay: "Oct 4, 2026",
    title: "NEXT קדם משפט — All Pre-Hearing Motions Due",
    titleHe: "קדם משפט הבא — כל הבקשות צריכות להיות מוגשות לפני",
    detail:
      "קדם המשפט הבא בפני השופטת יעל מרמור דומב. כל הבקשות טרום הדיון חייבות להיות מוגשות לפני תאריך זה, כולל: (1) בקשת קבילות נספחי תיק 1 כהודאות בעל דין, (2) בקשת גילוי רשומות כספיות של משרד NyM Law, (3) בקשת גילוי היסטוריית טאבו מלאה של דירה 11.",
    category: "case2",
    importance: "critical",
    evidenceIds: [],
    threadId: "19e25122de965df9",
  },
];
