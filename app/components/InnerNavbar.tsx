"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function InnerNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-[#1a1a1a] sticky top-0 z-50 shadow-lg">
      {/* Top info bar */}
      <div className="hidden md:block border-b border-white/10 text-gray-400 text-xs py-2">
        <div className="max-w-7xl mx-auto px-8 flex items-center">
          <div className="flex-1">
            Phone:{" "}
            <a href="tel:+923103395111" className="text-white font-semibold hover:text-[#998100] transition-colors">
              +92 310 3395111
            </a>
            &nbsp;|&nbsp; Email:{" "}
            <a href="mailto:info@mavericktechstudio.com" className="text-white font-semibold hover:text-[#998100] transition-colors">
              info@mavericktechstudio.com
            </a>
          </div>
          <div className="flex items-center gap-4 text-white">
            <a href="#" aria-label="Facebook" className="hover:text-[#998100] transition-colors"><FacebookIcon /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#998100] transition-colors"><TwitterIcon /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#998100] transition-colors"><InstagramIcon /></a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav>
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-widest text-white hover:text-[#998100] transition-colors uppercase">
            Maverick Tech Studio
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <li key={label}>
                  <Link
                    href={href}
                    className={`text-sm font-semibold tracking-wide transition-colors ${
                      isActive ? "text-[#998100]" : "text-gray-300 hover:text-[#998100]"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-[#111] border-t border-white/10 px-8 pb-4">
            <ul className="flex flex-col gap-3 pt-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-semibold tracking-wide text-gray-300 hover:text-[#998100] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
