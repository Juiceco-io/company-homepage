import Link from "next/link";
import Logo from "./Logo";

const footerLinks = [
  { href: "/#services", label: "Services" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity duration-200">
              <Logo size={32} />
              <span className="text-orange-500 font-bold text-lg tracking-tight">Juice Technology Solutions</span>
            </Link>
            <p className="text-text-secondary text-xs">
              Custom software built for companies that want to move fast.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-text-primary text-sm transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-text-secondary text-sm">
            © 2026 Juice Technology Solutions. Built with ☕ and 🍊
          </p>
        </div>
      </div>
    </footer>
  );
}
