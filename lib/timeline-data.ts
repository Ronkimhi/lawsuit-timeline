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
  "pre-contract": "Pre-Contract",
  "pre-case": "Pre-Litigation",
  "case1": "Case 1",
  "delivery": "Delivery & Possession",
  "electricity": "Electricity",
  "verdict": "Verdict",
  "case2": "Case 2",
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
      "Pre-sale allocation table prepared by attorney Ronen Kagan. The column for storage unit assigned to Apt 11 was left blank — no storage unit allocated at this stage.",
    category: "pre-contract",
    importance: "high",
    evidenceIds: ["storage-wrong-unit"],
    threadId: "physical-file",
  },
  {
    id: "purchase-contract",
    date: "2018-10-14",
    dateDisplay: "Oct 14, 2018",
    title: "Purchase Contract Signed — Apt 11, מחסן 10 Assigned Explicitly",
    titleHe: "חוזה רכישה נחתם — דירה 11, מחסן מספר 10",
    detail:
      "Ron and Stav sign the purchase agreement for Apt 11. The contract explicitly assigns מחסן מספר 10 (storage unit 10) — contradicting the 2017 Kagan blank. Parking assigned as חניה 12. Contractual delivery date: March 1, 2019.",
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
    detail:
      "First formal legal communication. Kagan formally demands: (1) delivery date confirmation, (2) מחסן 10 — disputed from day one, (3) resolution of documented defects. Mortgage of ₪750,000 registered Jan 22, 2019 (Discount Bank).",
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
    detail:
      "ממן responds on behalf of שרבט 38 with an 8-point letter deflecting all demands. First documented instance of ממן acting as Sharbat's legal enforcer — before any litigation.",
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
    detail:
      "Ron repeatedly requests ממן to sign Form 50 (tax clearance) required by Bank Leumi. ממן responds with 'will check tomorrow,' 'in process,' then goes silent. Form 50 finally received Feb 25, 2019 — 4 weeks of delay caused by ממן. Mortgage funds disbursed March 26, 2019.",
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
      "Per §8.1 of the purchase contract, March 1, 2019 is the agreed delivery date. שרבט does not deliver. Building water infrastructure was only completed this same month (per שרבט's own court filing in ת\"א 60392-01-20, para. 13) — confirming basic infrastructure was not ready at the promised date.",
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
      "ממן acts as שרבט's commercial enforcement agent in an infrastructure dispute against Victor Levi (utility company). This is not courtroom advocacy — this is an attorney using threatening letters to resolve a building contractor dispute. The same tactic would later be used against Ron (Jan 18, 2021 mirror-letter). Filed by שרבט himself as נספח 18 pp.46-47 and confirmed in ת\"א 60392-01-20 para. 18.",
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
    detail:
      "Pre-possession inspection: paint/plaster, tiling, aluminum, plumbing (missing sprinklers), electrical defects all documented. Report provided to שרבט. No remedial action taken.",
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
      "BH Law (פלג שחם-איילון) files Case 1 on Ron's behalf. Court: בית המשפט השלום פתח תקווה, Judge עדנה יוסף-קוזין. Claims: delivery delay, construction defects.",
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
    detail:
      "Ron deposits ₪167,000 into court escrow as security (עיקול עצמי) to open Case 1. Additional deposits follow: ₪20,000 (Mar 2, 2020), ₪17,000 and ₪67,000 (Jan 27, 2021). Total deposited: ₪271,000.",
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
      "שרבט obtains the occupancy certificate on December 3, 2020. This is 21 months and 2 days after the March 1, 2019 contractual delivery date — the starting point of the Case 1 delay calculation.",
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
      "Three days after the occupancy certificate, ₪179,000 flows from the penthouse sale proceeds (ירון וחנה חרמש) to עו\"ד יאיר נאור ממן's account. Breakdown: ₪30,000 for 'electricity connection expenses' (הוצאות חיבור חשמל), ₪4,000 water system, ₪145,000 resident obligations. Ron's apartment has no working electricity at this time — proven by the Nov 2021 WhatsApp exchange (נספח 15, also filed by שרבט himself).",
    category: "electricity",
    importance: "critical",
    evidenceIds: ["maman-179k", "electricity-no-connection"],
    threadId: "physical-file",
  },
  {
    id: "gaya-inspection",
    date: "2020-12-08",
    dateDisplay: "Dec 8, 2020",
    title: "Gaya Engineering Inspection — Apartment Not Connected to Electricity",
    detail:
      "Two days after the ₪179K payment to ממן. Gaya Engineering inspects Apt 11: electrical section not properly completed; apartment not connected to electricity. The ₪30,000 designated for electricity connection has already gone to ממן's account. It did not reach the apartment.",
    category: "electricity",
    importance: "critical",
    evidenceIds: ["maman-179k", "electricity-no-connection"],
    threadId: "physical-file",
  },
  {
    id: "maman-mirror-letter",
    date: "2021-01-18",
    dateDisplay: "Jan 18, 2021",
    title: "ממן's Mirror-Letter — Threatening Contract Cancellation",
    titleHe: "מכתב מירור של ממן — איום בביטול חוזה",
    detail:
      "43 days after receiving ₪179,000 in building funds, ממן sends the most aggressive legal threat of the pre-litigation period: a formal letter to BH Law threatening to cancel Ron's purchase contract. This is the same threatening-letter tactic deployed against Victor Levi in 2019. ממן is simultaneously holding building funds and threatening the buyer he is notionally adverse to.",
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
      "Ron takes possession of Apt 11 on February 2, 2021 — 23 months after the March 1, 2019 contractual delivery date. Electricity is still not connected. Storage unit מחסן 10 (per contract) is not delivered — Ron will later receive מחסן 11, a different unit.",
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
    detail:
      "A court seizure is registered on the Tabu note for the building — confirms active litigation. As of this date, Ron holds only הערת אזהרה (warning note, registered Oct 2018). Full Tabu ownership (תת-חלקה) has still not been registered in Ron's name — 2.5 years after the promised delivery date.",
    category: "case1",
    importance: "high",
    evidenceIds: ["tabu-gap"],
    threadId: "physical-file",
  },
  {
    id: "nov-2021-electricity",
    date: "2021-11-14",
    dateDisplay: "Nov 14–18, 2021",
    title: "WhatsApp: No Electricity — Ron Asks for Contract Number to Connect",
    titleHe: "וואטסאפ: אין חשמל — רון מבקש מספר הזמנה לחיבור",
    detail:
      'November 14: Ron requests the order/contract number needed to open a חברת חשמל contract: "אני צריך בבקשה מספר הזמנה או אוביייקט כדי לפתוח חוזה מול חברת חשמל." November 15: Sharbat\'s team (Iris) confirms they do not have the number. November 18: electrician reports back: "דיברנו עם חברת חשמל, הם מבקשים מכתב שאומר שהדירה נמסרה ושאתם לשרים לחבר אותה לחשמל עם חותמת החברה של sbh" — חברת חשמל requires an sbh-stamped authorization letter. שרבט has not provided it. 9 months post-possession, no electricity. This exchange was filed by שרבט himself as נספח 15 in his Case 1 defense.',
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
      "שרבט files his Case 1 defense (תצהיר עדות ראשית) with 20 exhibits. Filed under oath. These include: נספח 3 (₪179K ממן payment), נספח 15 (Nov 2021 no-electricity WhatsApp), נספח 18 (Goldenberg salary transfer + Victor Levi letter + ת\"א 60392-01-20 infrastructure lawsuit). By filing these exhibits in his own defense, שרבט created party admissions that are now the primary evidence in Case 2.",
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
    detail:
      "ע.ק איתור נזילות expert report confirms ongoing moisture damage in Apt 11: 4 active moisture zones, sub-floor waterproofing failure in Apt 14 causing ceiling damage in Apt 11. שרבט knew about moisture since January 2019 (admitted in Steinert v. Sharbat). The damage is ongoing and unresolved as of January 2025.",
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
      "Judge עדנה יוסף-קוזין (בית המשפט השלום פתח תקווה) awards: ₪223,413 delay compensation (21 months + 28 days, March 1, 2019 → Dec 28, 2020, at ₪6,800/month appraiser rate). ₪20,000 attorney fees. Non-monetary damages (₪20,000 claimed): dismissed. Court fees: refunded. Paid from the ₪271,000 court deposits. Surplus ~₪27,587 was claimed by שרבט via ₪186K counter-claim.",
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
    detail:
      "Ron sells Apt 11 to Ben-Hamo buyers, two days after the Case 1 verdict. ממן holds a power of attorney from שרבט that extends to Tabu registrations — he remains a gatekeeper over the property transfer. שרבט simultaneously says he will not cooperate with the sale until accounting is resolved.",
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
    detail:
      "Three days after the apartment sale, Nave Law (מורין סוטיל) asks ממן to sign the הערת אזהרה registration form using his power of attorney from שרבט, to facilitate Tabu registration for the Ben-Hamo buyers. ממן held the power of attorney — confirming his ongoing operational role even after Case 1 closed.",
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
    detail:
      "שרבט claims Ron owes HIM ₪186,000 with 'exceptional interest' (רבית חריגה). Spreadsheet: 'התחשבנות רון קמחי (2) (6) (1).xlsx.' His position: will not cooperate with Tabu registration for the apartment sale until this counter-accounting is resolved. BH Law (פלג) prepares a formal response (Dec 29, 2024).",
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
      "Nave Law (נוה גור + מורין סוטיל + אילן גרבר) files Case 2 on Ron's behalf. Court: בית המשפט השלום הרצלייה, Judge יעל מרמור דומב. The claim centers on ממן's conduct: financial entanglement with the building project while acting as Sharbat's attorney against Ron, constituting a breach of fiduciary duty under §54-62, חוק לשכת עורכי הדין. Five drafts refined the complaint between March-May 2025.",
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
    detail:
      "ממן files the Case 2 defense on behalf of שרבט. ממן — the attorney whose conduct is the subject of Case 2 — is simultaneously writing the defense. This reinforces the conflict-of-interest argument.",
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
    detail:
      "First pre-trial hearing in Case 2. Judge מרמור דומב presides. Nave Law leads. Further hearings: Dec 1-2, 2025 (motion to accelerate). May 14, 2026 (קדם משפט — procedural only, postponed to Oct 4, 2026).",
    category: "case2",
    importance: "high",
    evidenceIds: [],
    threadId: "physical-file",
  },
  {
    id: "next-hearing",
    date: "2026-10-04",
    dateDisplay: "Oct 4, 2026",
    title: "NEXT קדם משפט — All Pre-Hearing Motions Due",
    titleHe: "קדם משפט הבא — כל הבקשות צריכות להיות מוגשות לפני",
    detail:
      "Next scheduled קדם משפט before Judge יעל מרמור דומב. All pre-hearing motions must be filed before this date, including: (1) admissibility motion for Case 1 exhibits as party admissions, (2) discovery motion for NyM Law financial records, (3) discovery motion for full Tabu history of Apt 11.",
    category: "case2",
    importance: "critical",
    evidenceIds: [],
    threadId: "19e25122de965df9",
  },
];
