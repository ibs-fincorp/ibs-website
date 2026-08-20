import type { Metadata } from "next";
import { Inter_Tight, Plus_Jakarta_Sans, Manrope } from "next/font/google";
import Image from "next/image";
import Script from "next/script";
import "./globals.css";
import { Preloader } from "@/components/ui/preloader";
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IBSFINCORP | High-Value Secured Loans & Financial Solutions",
  description: "Get the best deal for your high-value secured loan. Premium doorstep experience, fast and transparent process.",
  keywords: [
    "Secured Loans",
    "Loan Against Property",
    "LAP",
    "Business Loan",
    "Home Loan Balance Transfer",
    "IBSFINCORP",
    "High-Value Loans",
    "Mortgage Loans",
    "Finance India"
  ],
  alternates: {
    canonical: "https://www.ibsfincorp.com",
  },
  icons: {
    icon: "/assets/logoibs.svg",
  },
  openGraph: {
    title: "IBSFINCORP | High-Value Secured Loans & Financial Solutions",
    description: "Get the best deal for your high-value secured loan. Premium doorstep experience, fast and transparent process.",
    url: "https://www.ibsfincorp.com",
    siteName: "IBSFINCORP",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.ibsfincorp.com/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IBSFINCORP - High-Value Secured Loans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IBSFINCORP | High-Value Secured Loans & Financial Solutions",
    description: "Get the best deal for your high-value secured loan.",
    images: ["https://www.ibsfincorp.com/assets/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${plusJakartaSans.variable} ${manrope.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground overflow-x-hidden">
        <Preloader />
        {children}
        <a href=" https://wa.link/2df30k" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 hover:scale-110 transition-transform duration-300">
          <Image src="/assets/whatsapp-icon.png" alt="Contact Us" width={60} height={60} className="drop-shadow-2xl rounded-full" />
        </a>
        {/* Tally embed script for dynamic iframe height */}
        <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
