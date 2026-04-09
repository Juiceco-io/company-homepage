import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Observability from "@/components/Observability";

// Self-hosted via next/font — no external CDN requests
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Juice Technology Solutions — Custom Software Development Agency",
    template: "%s | Juice Technology Solutions",
  },
  description:
    "Juice Technology Solutions builds custom web apps, mobile products, and internal tools for companies that want to move fast. We design, build, and ship software that drives business. Get more for the squeeze.",
  keywords: [
    "custom software development",
    "web development agency",
    "mobile app development",
    "software company",
    "Next.js development",
  ],
  authors: [{ name: "Juice Technology Solutions" }],
  creator: "Juice Technology Solutions",
  metadataBase: new URL("https://juicetech.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://juicetech.io",
    title: "Juice Technology Solutions — Custom Software Development Agency",
    description:
      "Juice Technology Solutions builds custom web apps, mobile products, and internal tools for companies that want to move fast. We design, build, and ship software that drives business.",
    siteName: "Juice Technology Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Juice Technology Solutions — Custom Software Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juice Technology Solutions — Custom Software Development Agency",
    description:
      "Juice Technology Solutions builds custom web apps, mobile products, and internal tools for companies that want to move fast. We design, build, and ship software that drives business.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://juicetech.io",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/Juice_Logo.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/Juice_Logo.svg" }],
    shortcut: ["/favicon.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Juice Technology Solutions",
  url: "https://juicetech.io",
  logo: "https://juicetech.io/Juice_Logo.svg",
  description:
    "Custom software development agency. We partner with companies to design, build, and ship web apps, mobile products, and internal tools — fast.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@juice.io",
    contactType: "sales",
  },
  sameAs: ["https://github.com/Juiceco-io"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-text-primary min-h-screen flex flex-col font-sans antialiased">
        <Observability />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
