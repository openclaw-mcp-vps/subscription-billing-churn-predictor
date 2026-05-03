import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Churn Predictor — Stop Losing Subscribers",
  description: "Predict subscription cancellations before they happen. Analyze billing and usage patterns to identify at-risk customers and take action."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6d4a91af-95d5-4985-885d-4524a07ccbb6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
