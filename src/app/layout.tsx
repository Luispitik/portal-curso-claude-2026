import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Curso Claude 2026 — Portal de Entregables",
  description:
    "De 0 a Sistema: Claude Chat, Claude Code y Claude Cowork. Todo el material del curso organizado y descargable.",
  authors: [
    { name: "Luis Salgado" },
    { name: "Angel Aparicio" },
  ],
  keywords: [
    "Claude",
    "Claude Code",
    "IA",
    "curso",
    "formacion",
    "2026",
    "Next Gen AI Institute",
  ],
  openGraph: {
    title: "Curso Claude 2026 — Portal de Entregables",
    description:
      "De 0 a Sistema: Claude Chat, Claude Code y Claude Cowork. Material completo del curso.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
