import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Observability from "@/components/Observability";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Juice Technology Solutions | Custom Software Development Company",
    template: "%s | Juice Technology Solutions",
  },
  description:
    "Juice Technology Solutions builds custom software, internal tools, and modern web systems for companies that need dependable software built around real business workflows.",
  keywords: [
    "custom software development",
    "custom software company",
    "internal tools development",
    "web application development",
    "software modernization",
    "api integrations",
  ],
  authors: [{ name: "Juice Technology Solutions" }],
  creator: "Juice Technology Solutions",
  metadataBase: new URL("https://juicetech.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://juicetech.io",
    title: "Juice Technology Solutions | Custom Software Development Company",
    description:
      "Juice Technology Solutions builds custom software, internal tools, and modern web systems for companies that need dependable software built around real business workflows.",
    siteName: "Juice Technology Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Juice Technology Solutions | Custom Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juice Technology Solutions | Custom Software Development Company",
    description:
      "Juice Technology Solutions builds custom software, internal tools, and modern web systems for companies that need dependable software built around real business workflows.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
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
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Juice Technology Solutions",
      url: "https://juicetech.io",
      logo: "https://juicetech.io/Juice_Logo.svg",
      description:
        "Custom software company building internal tools, web applications, integrations, and modern software systems.",
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@juice.io",
        contactType: "sales",
      },
      sameAs: ["https://github.com/Juiceco-io"],
    },
    {
      "@type": "WebSite",
      name: "Juice Technology Solutions",
      url: "https://juicetech.io",
      description:
        "Custom software, internal tools, and modern web systems for companies that need dependable software built around real business workflows.",
    },
  ],
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
