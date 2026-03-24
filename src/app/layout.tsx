import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";

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
    template: "%s | CKLabs",
    default: "CKLabs — Développeur Web & Cybersécurité",
  },
  description:
    "Portfolio de développeur web spécialisé en cybersécurité. Création de sites modernes, performants et sécurisés (Security by Design).",
  keywords: ["Développeur Web", "Cybersécurité", "Next.js", "React", "Portfolio", "Audit Sécurité"],
  authors: [{ name: "CKLabs" }],
  creator: "CKLabs",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://cklabs.com", // Example URL
    title: "CKLabs — Développeur Web & Cybersécurité",
    description: "Portfolio de développeur web spécialisé en cybersécurité.",
    siteName: "CKLabs",
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
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
