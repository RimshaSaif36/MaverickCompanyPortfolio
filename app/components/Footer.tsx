import Link from "next/link";

const footerGroups = {
    explore: [
        { label: "Portfolio", href: "/portfolio" },
        { label: "Contact", href: "/contact" },
    ],
    info: [
        { label: "Join Us", href: "/contact" },
        { label: "Pricing", href: "/pricing" },
        { label: "Blog", href: "/blog" },
    ],
    company: [
        { label: "About Us", href: "/about" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Blog", href: "/blog" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <p className="text-white font-black text-lg uppercase tracking-widest mb-4">
                            Maverick
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Your partner in digital excellence. We build stunning websites and deliver marketing strategies that drive growth.
                        </p>

                        <div className="flex gap-3">
                            {[
                                { key: "linkedin", href: "https://www.linkedin.com/company/mavericktechstudio" },
                                { key: "facebook", href: "https://www.facebook.com/profile.php?id=61570729737437" },
                                { key: "instagram", href: "https://www.instagram.com/mavericktechstudio/" },
                            ].map(({ key: socialKey, href }) => (
                                <a
                                    key={socialKey}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={socialKey}
                                    className="w-9 h-9 rounded-full bg-[#998100] flex items-center justify-center hover:bg-[#7a6700] transition"
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        {socialKey === "linkedin" && (
                                            <>
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                <rect x="2" y="9" width="4" height="12" />
                                                <circle cx="4" cy="4" r="2" />
                                            </>
                                        )}
                                        {socialKey === "facebook" && (
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                        )}
                                        {socialKey === "instagram" && (
                                            <>
                                                <rect x="2" y="2" width="20" height="20" rx="5" />
                                                <circle cx="12" cy="12" r="4" />
                                                <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none" />
                                            </>
                                        )}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-white font-black text-sm uppercase tracking-widest mb-5">
                            Explore
                        </p>
                        <ul className="space-y-2">
                            {footerGroups.explore.map(({ label, href }) => (
                                <li key={label}>
                                    <Link href={href} className="text-gray-400 text-sm hover:text-white transition flex items-center gap-2">
                                        <span className="text-white text-xs">›</span>{label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-white font-black text-sm uppercase tracking-widest mb-5">
                            Info
                        </p>
                        <ul className="space-y-2">
                            {footerGroups.info.map(({ label, href }) => (
                                <li key={label}>
                                    <Link href={href} className="text-gray-400 text-sm hover:text-white transition flex items-center gap-2">
                                        <span className="text-white text-xs">›</span>{label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-white font-black text-sm uppercase tracking-widest mb-5">
                            Company
                        </p>
                        <ul className="space-y-2">
                            {footerGroups.company.map(({ label, href }) => (
                                <li key={label}>
                                    <Link href={href} className="text-gray-400 text-sm hover:text-white transition flex items-center gap-2">
                                        <span className="text-white text-xs">›</span>{label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-white font-black text-sm uppercase tracking-widest mb-5">
                            Contact
                        </p>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex gap-3">
                                <span className="text-[#998100] mt-0.5">📍</span>
                                <span>Maverick engineers Innovista Rachna DHA Gujranwala Pakistan</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[#998100] mt-0.5">📞</span>
                                <a href="tel:+923103395111" className="hover:text-white transition">+923103395111</a>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[#998100] mt-0.5">✉️</span>
                                <a href="mailto:info@mavericktechstudio.com" className="hover:text-white transition">info@mavericktechstudio.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-xs">
                    © {new Date().getFullYear()} MaverickTechStudio. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
