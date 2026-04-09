import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Replace default Geist fonts with Inter and JetBrains Mono as per our requirements
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Chrys Konan",
    default: "Chrys Konan — Analyste Cybersécurité & Développeur Fullstack",
  },
  description:
    "Portfolio de Chrys Konan, analyste cybersécurité (SOC, Pentest, GRC) et développeur Fullstack. Expertise hybride et approche Security-by-Design.",
  keywords: ["Chrys Konan", "Analyste Cybersécurité", "SOC", "Pentest", "GRC", "Développeur Fullstack", "Next.js", "Portfolio"],
  authors: [{ name: "Chrys Konan" }],
  creator: "Chrys Konan",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://chryskonan.com", // Example URL
    title: "Chrys Konan — Analyste Cybersécurité & Développeur Fullstack",
    description: "Portfolio de Chrys Konan, expert cybersécurité et développement.",
    siteName: "Chrys Konan Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent/30 selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SmoothScroll>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <Analytics />
            <SpeedInsights />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
