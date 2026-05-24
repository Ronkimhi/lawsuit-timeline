import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ת\"א 24371-05-25 — ציר זמן ראיות",
  description: "קמחי נ. שרבט — ציר זמן ראיות לתביעה 2, עבור משרד עו\"ד נוה גור",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
