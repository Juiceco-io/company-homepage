import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

// Self-hosted via next/font — no external CDN requests
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Juice — Custom Software Development Agency",
  description:
    "Juice is a custom software development agency. We partner with companies to design, build, and ship web apps, mobile products, and internal tools — fast.",
  openGraph: {
    title: "Juice — Custom Software Development Agency",
    description:
      "Juice is a custom software development agency. We partner with companies to design, build, and ship web apps, mobile products, and internal tools — fast.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-text-primary min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <PageTransition>
          <main className="flex-1">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
