import type { Metadata } from "next";
import { Inter_Tight, Plus_Jakarta_Sans, Manrope } from "next/font/google";
import Image from "next/image";
import Script from "next/script";
import "./globals.css";
import { Preloader } from "@/components/ui/preloader";
import { CDN_URL } from "@/lib/cdn";
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
    icon: `${CDN_URL}/assets/logoibs.svg`,
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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MX6BX3Q8');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground overflow-x-hidden">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MX6BX3Q8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Preloader />
        {children}
        <a href=" https://wa.link/2df30k" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 hover:scale-110 transition-transform duration-300">
          <Image src={`${CDN_URL}/assets/whatsapp-icon.png`} alt="Contact Us" width={60} height={60} className="drop-shadow-2xl rounded-full" />
        </a>
        {/* Tally embed script for dynamic iframe height */}
        <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
