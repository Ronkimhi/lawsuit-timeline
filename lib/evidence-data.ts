export type EvidenceStrength = "STRONG" | "DOCUMENTARY" | "PENDING";

export interface Evidence {
  id: string;
  claim: string;
  item: string;
  source: string;
  strength: EvidenceStrength;
  hebrewQuote?: string;
  notes?: string;
}

export const evidence: Evidence[] = [
  {
    id: "maman-179k",
    claim: "ממן received building funds while Ron's apartment had no electricity",
    item: "₪179,000 payment to ממן's account on Dec 6, 2020 — 3 days after occupancy certificate. Includes ₪30,000 explicitly for 'הוצאות חיבור חשמל' (electricity connection expenses).",
    source: "נספח 3, pp.129-130 — שרבט's own Case 1 defense exhibit filed under oath (Dec 2021)",
    strength: "STRONG",
    notes: "Highest priority exhibit. Filed by שרבט himself. The ₪30K for electricity went to ממן; Ron had no electricity until at least Nov 2021.",
  },
  {
    id: "electricity-no-connection",
    claim: "Ron's apartment had no working electricity — nearly 1 year post-possession",
    item: "Nov 14-18, 2021 WhatsApp exchange: Ron requests electricity contract number; Sharbat team cannot provide it; electrician confirms sbh must send authorization letter to חברת חשמל before connection can happen.",
    source: "נספח 15 — שרבט's own Case 1 defense exhibit filed under oath (Dec 2021)",
    strength: "STRONG",
    hebrewQuote:
      'Nov 14: "אני צריך בבקשה מספר הזמנה או אוביייקט כדי לפתוח חוזה מול חברת חשמל"\nNov 18: "דיברנו עם חברת חשמל, הם מבקשים מכתב שאומר שהדירה נמסרה ושאתם לשרים לחבר אותה לחשמל עם חותמת החברה של sbh"',
    notes: "Verbatim quotes confirmed from Ron's scanned exhibit. Filed by שרבט himself — he cannot deny this evidence.",
  },
  {
    id: "goldenberg-salary",
    claim: "Goldenberg was a salaried employee — not an independent witness",
    item: "Bank transfer labeled 'משכורת' (salary/wages) from שרבט 38 account to Goldenberg, June 2019. Total documented payments: ₪157,965. Also confirmed in ת\"א 60392-01-20 financial damages table (bundle p.165) as 'ניהול אתר יגאל אלון — ₪157,965.'",
    source: "נספח 18, pp.42-43 + ת\"א 60392-01-20 financial table, bundle p.165 — two independent sworn filings",
    strength: "STRONG",
    notes: "שרבט submitted Goldenberg's letter as evidence from an 'independent' witness. The salary transfer destroys that claim. Goldenberg's own letter lists 3 incomplete items.",
  },
  {
    id: "maman-victor-levi",
    claim: "ממן acted as commercial enforcement agent — not pure legal advocate",
    item: "Aug 4, 2019 letter from ממן to Victor Levi (utility company) demanding compliance in building infrastructure dispute. ממן acting as commercial enforcer for שרבט — same tactic used against Ron in Jan 18, 2021 mirror-letter.",
    source: "נספח 18, pp.46-47 + ת\"א 60392-01-20 para. 18, bundle p.166 — two sworn corroborating sources",
    strength: "STRONG",
    hebrewQuote:
      'ת"א 60392-01-20 para. 18: "פנתה התובעת לח"מ ושכרה את שירותיו וביום 4.8.19 שלח הח"מ לתובעת מכתב"',
    notes: "Two independent sworn documents confirm the same Aug 4, 2019 letter. This is one of the 4 anchor exhibits for the admissibility motion.",
  },
  {
    id: "maman-enforcement-role",
    claim: "ממן operated as commercial enforcement agent in multiple concurrent disputes",
    item: "ת\"א 60392-01-20: שרבט 38 (ח.פ. 514458439) sued יגאל אלון נישה for ₪375,000 in infrastructure costs, represented by ממן — simultaneously with Case 1 against Ron.",
    source: "נספח 18 — כתב תביעה מתוקן ת\"א 60392-01-20, bundle pp.163-166",
    strength: "STRONG",
    notes: "ממן was simultaneously litigating Case 1 against Ron AND the infrastructure case against יגאל אלון נישה AND receiving ₪179K in building funds. Three concurrent roles = conflict of interest.",
  },
  {
    id: "maman-mirror-letter-ev",
    claim: "ממן threatened contract cancellation 43 days after receiving ₪179K",
    item: "Jan 18, 2021: ממן sends formal letter to BH Law threatening to cancel Ron's purchase contract — 43 days after receiving ₪179,000 in building funds including ₪30K for electricity.",
    source: "נספח 13 (defense exhibits) + email archive",
    strength: "STRONG",
    notes: "The sequence: Dec 6 (₪179K received) → Jan 18 (mirror-letter). ממן held building funds and threatened the buyer simultaneously.",
  },
  {
    id: "delivery-delay",
    claim: "23-month delivery delay (March 2019 → February 2021)",
    item: "Contractual delivery: March 1, 2019. Actual possession: February 2, 2021. Delay: 23 months. Per §12.5 of the master agreement, delay penalty: $3,500/month × 23 months ≈ $80,500 USD.",
    source: "Purchase contract §8.1 (Sale-Documents/Purchase-Agreement/) + Case 1 verdict Oct 26, 2024",
    strength: "STRONG",
    notes: "Confirmed by Case 1 verdict (21 months + 28 days per court calculation from Mar 1, 2019).",
  },
  {
    id: "storage-wrong-unit",
    claim: "Wrong storage unit delivered — contract says מחסן 10, Ron received מחסן 11",
    item: "2017 Kagan table: Apt 11 storage = BLANK. 2018 contract: מחסן מספר 10. Blueprint: 'לפני השינוי' (before the change). Actual delivery: Ron received מחסן 11, a different unit. מחסן 10 never delivered.",
    source: "Purchase contract Oct 14, 2018 + מחסן - לפני השינוי.jpeg (Sale-Documents/Purchase-Agreement/) + Kagan Jan 2019 letter Point 2 + Ron confirmed 2026-05-24",
    strength: "STRONG",
    notes: "This is a wrong-asset delivery, not a late delivery. שרבט cannot claim he fulfilled the storage obligation by delivering a different unit.",
  },
  {
    id: "parking-discrepancy",
    claim: "Parking spot changed without documented consent (חניה 10 → חניה 12)",
    item: "2017 Kagan allocation: Apt 11 → parking 10. 2018 contract: חניה מספר 12 (double-stacker, 1.8m height limit, 2-ton weight limit). Ron uses חניה 12. No documented consent to the change.",
    source: "2017 Kagan allocation table + 2018 purchase contract (נספחים ג'-ד')",
    strength: "DOCUMENTARY",
    notes: "Lower priority than storage discrepancy. The double-stacker limitations may affect usability and emergency access.",
  },
  {
    id: "tabu-gap",
    claim: "Full Tabu ownership never registered before apartment sale",
    item: "As of Aug 30, 2021: Ron held only הערת אזהרה (warning note, registered Oct 2018). Full ownership (תת-חלקה) had not been registered — 2.5 years after promised delivery date.",
    source: "Tabu extract in 02-Attachments/Sale-Documents/",
    strength: "DOCUMENTARY",
    notes: "Q7 (exact registration date) still pending verification from Tabu extract.",
  },
  {
    id: "moisture-damage",
    claim: "Moisture damage ongoing — knew about it since January 2019",
    item: "Jan 2025 ע.ק expert report: active moisture in 4 zones, sub-floor waterproofing failure in Apt 14 causing ceiling damage in Apt 11. שרבט admitted in Steinert v. Sharbat that moisture problems were known since January 2019 and he pre-budgeted ₪50-55K per apartment for repairs.",
    source: "Expert-Reports/ע.ק איתור נזילות - חוות דעת מומחה.pdf + Court-Filings/דיון הוכחות שטיינר נגד שרבט 19.9.21.pdf",
    strength: "STRONG",
    notes: "Steinert v. Sharbat (ת\"א 15343-01-20) is a parallel case in the same building with same judge region.",
  },
  {
    id: "water-march-2019",
    claim: "Building water infrastructure only completed March 2019 — the contractual delivery month",
    item: "ת\"א 60392-01-20 para. 13: water connection to the building completed only 'בחודש מרץ 2019' — the exact month of Ron's contractual delivery obligation (March 1, 2019).",
    source: "נספח 18 — ת\"א 60392-01-20 para. 13, bundle p.164",
    strength: "STRONG",
    hebrewQuote: 'פרה. 13: "...חיבור הבניין למים הושלם בחודש מרץ 2019..."',
    notes: "שרבט's own court filing confirms the building was not infrastructure-ready at the promised delivery date.",
  },
  {
    id: "ta-60392-01-20",
    claim: "ממן represented שרבט in concurrent infrastructure lawsuit — three simultaneous roles",
    item: "שרבט 38 (ח.פ. 514458439) filed ת\"א 60392-01-20 against יגאל אלון נישה for ₪375,000. Represented by ממן. Filed during the same period as Case 1. ממן was simultaneously: (1) litigating Case 1 against Ron, (2) litigating infrastructure case against יגאל אלון נישה, (3) receiving ₪179K in building funds.",
    source: "נספח 18 — כתב תביעה מתוקן ת\"א 60392-01-20, bundle pp.163-166 (Defense-Exhibits-Case1/)",
    strength: "STRONG",
    notes: "This filing was discovered within שרבט's own Case 1 defense exhibits — a party admission.",
  },
  {
    id: "deposit-ledger",
    claim: "₪271,000 court deposit — exceeds verdict by ~₪27,587",
    item: "Deposits: ₪167,000 (Feb 3, 2020) + ₪20,000 (Mar 2, 2020) + ₪17,000 (Jan 27, 2021) + ₪67,000 (Jan 27, 2021) = ₪271,000. Verdict: ₪223,413 + ₪20,000 attorney fees = ₪243,413. Surplus before court fees: ₪27,587.",
    source: "Case 1 deposit threads (category: case1-deposits) + פסק דין Oct 26, 2024",
    strength: "STRONG",
    notes: "שרבט's ₪186K counter-claim attempts to absorb this surplus plus claim additional amounts.",
  },
  {
    id: "verdict-amounts",
    claim: "Case 1 verdict confirmed amounts",
    item: "Judge עדנה יוסף-קוזין awards ₪223,413 delay compensation (21 months + 28 days at ₪6,800/month appraiser rate, March 1, 2019 → December 28, 2020) + ₪20,000 attorney fees. Non-monetary claims (₪20,000): dismissed. Court fees: refunded.",
    source: "פסק דין Oct 26, 2024 — 02-Attachments/PDFs/2024-10-28_תאודור-קמחי - שרבט - פסק דין 26.10.2024.pdf",
    strength: "STRONG",
    notes: "Case 1 is closed. These numbers are final.",
  },
];
