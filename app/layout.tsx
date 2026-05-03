import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Domain Sniper Alerter – Get Notified When Domains Get Registered",
  description:
    "Monitor domain availability changes. Add domains to your watchlist and receive instant email or webhook alerts when they transition from available to registered."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="a3728bbd-5afc-4cc8-955c-4f6b6543cb67"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
