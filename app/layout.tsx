import { LangContextProvider } from "@/context/lang";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wassim Zouaoui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={montserrat.className}>
        <main>
          <LangContextProvider>
            {children}
            <Analytics />
          </LangContextProvider>
        </main>
      </body>
    </html>
  );
}
