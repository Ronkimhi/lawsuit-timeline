import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ת\"א 24371-05-25 — Evidence Timeline",
  description: "Kimhi v. Sharbat — Case 2 evidence timeline for Nave Law",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
