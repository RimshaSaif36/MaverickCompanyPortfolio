import Link from "next/link";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-white font-black text-lg uppercase tracking-widest mb-4">Maverick</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Far far away, behind the word mountains, far from the countries.
            </p>
            <div className="flex gap-3">
              {[
                { key: "twitter", icon: <TwitterIcon /> },
                { key: "facebook", icon: <FacebookIcon /> },
                { key: "instagram", icon: <InstagramIcon /> },
              ].map(({ key, icon }) => (
                <a key={key} href="#" aria-label={key} className="w-9 h-9 rounded-full bg-[#998100] flex items-center justify-center text-white hover:bg-[#7a6700] transition">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="text-white font-black text-sm uppercase tracking-widest mb-5">Explore</p>
            <ul className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Blog", href: "/blog" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-gray-400 text-sm hover:text-white transition flex items-center gap-2">
                    <span className="text-[#998100] text-xs">›</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="text-white font-black text-sm uppercase tracking-widest mb-5">Info</p>
            <ul className="space-y-2">
              {[
                { label: "Join us", href: "/contact" },
                { label: "Blog", href: "/blog" },
                { label: "Privacy & Policy", href: "#" },
                { label: "Term & Conditions", href: "#" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-gray-400 text-sm hover:text-white transition flex items-center gap-2">
                    <span className="text-[#998100] text-xs">›</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white font-black text-sm uppercase tracking-widest mb-5">Company</p>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "Pricing", href: "/pricing" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-gray-400 text-sm hover:text-white transition flex items-center gap-2">
                    <span className="text-[#998100] text-xs">›</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-black text-sm uppercase tracking-widest mb-5">Have A Question?</p>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex gap-3">
                <span className="text-[#998100] mt-0.5 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>Maverick Engineers Innovista Rachna DHA Gujranwala Pakistan</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#998100] mt-0.5 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a href="tel:+923103395111" className="hover:text-white transition">+92 310 3395111</a>
              </li>
              <li className="flex gap-3">
                <span className="text-[#998100] mt-0.5 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </span>
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
