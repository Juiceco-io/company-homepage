import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Self-hosted via next/font — no external CDN requests
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Juiceco — Custom Software Development Agency",
  description:
    "Juiceco is a custom software development agency. We partner with companies to design, build, and ship web apps, mobile products, and internal tools — fast.",
  openGraph: {
    title: "Juiceco — Custom Software Development Agency",
    description:
      "Juiceco is a custom software development agency. We partner with companies to design, build, and ship web apps, mobile products, and internal tools — fast.",
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
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
