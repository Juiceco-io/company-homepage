"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-glass sticky top-0 z-50 ${scrolled ? "scrolled" : ""}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Wordmark */}
          <Link
            href="/"
            className="logo-wrap flex items-center gap-2.5 hover:opacity-90 transition-opacity duration-200"
          >
            <Logo size={36} className="logo-svg logo-load-anim" />
            <span className="text-orange-500 font-bold text-xl tracking-tight">Juice Technology Solutions</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link-animated text-text-secondary hover:text-text-primary text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-all duration-200 hover:shadow-[0_0_16px_rgba(249,115,22,0.5)]"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-orange-500/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-text-secondary hover:text-text-primary text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center mt-4 w-full px-4 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-colors duration-200"
            >
              Start a Project
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}