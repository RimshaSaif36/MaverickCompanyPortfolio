"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);
const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
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
        <header className="absolute top-0 left-0 right-0 z-50">
            {/* Top info bar */}
            <div className="hidden md:block border-b border-white/10 text-gray-200 text-sm py-2">
                <div className="max-w-7xl mx-auto px-8 flex items-center">
                    <div className="flex-1">
                        Phone no:{" "}
                        <a href="tel:+923103395111" className="text-white font-semibold hover:text-[#998100] transition-colors">
                            +92 3103395111
                        </a>{" "}
                        or email us:{" "}
                        <a href="mailto:info@mavericktechstudio.com" className="text-white font-semibold hover:text-[#998100] transition-colors">
                            info@mavericktechstudio.com
                        </a>
                    </div>
                    <div className="flex items-center gap-4 text-white">
                        <a href="https://www.facebook.com/profile.php?id=61570729737437" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#998100] transition-colors"><FacebookIcon /></a>
                        <a href="https://www.linkedin.com/in/maverick-techstudio-833379403/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#998100] transition-colors"><LinkedInIcon /></a>
                        <a href="https://www.instagram.com/mavericktechstudio/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#998100] transition-colors"><InstagramIcon /></a>
                    </div>
                </div>
            </div>

            {/* Main nav */}
            <nav className="bg-white/10">
                <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold tracking-widest text-white hover:text-[#998100] transition-colors">
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
                                        className={`text-sm font-semibold tracking-wide transition-colors ${isActive ? "text-[#998100]" : "text-gray-300 hover:text-[#998100]"
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
