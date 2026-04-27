"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";

// Social icons as inline SVGs
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

// ── Service card icons ──
const DigitalProductsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="10" y="6" width="16" height="26" rx="2" />
    <line x1="10" y1="10" x2="26" y2="10" />
    <line x1="10" y1="28" x2="26" y2="28" />
    <circle cx="18" cy="31" r="1" fill="currentColor" stroke="none" />
    <circle cx="35" cy="13" r="6" strokeDasharray="2 1" />
    <line x1="35" y1="10" x2="35" y2="16" />
    <line x1="32" y1="13" x2="38" y2="13" />
    <circle cx="39" cy="22" r="4" />
    <line x1="39" y1="20" x2="39" y2="24" />
    <line x1="37" y1="22" x2="41" y2="22" />
  </svg>
);

const OnlineMarketingIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="8,38 18,24 26,30 36,16 44,10" />
    <polyline points="38,10 44,10 44,16" />
    <line x1="8" y1="42" x2="44" y2="42" />
    <line x1="8" y1="10" x2="8" y2="42" />
    <rect x="10" y="30" width="4" height="12" />
    <rect x="18" y="26" width="4" height="16" />
    <rect x="26" y="22" width="4" height="20" />
  </svg>
);

const GraphicDesignIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="24" r="3" />
    <circle cx="24" cy="10" r="3" />
    <circle cx="38" cy="24" r="3" />
    <circle cx="24" cy="38" r="3" />
    <path d="M13 24 C13 17 18 13 24 13" />
    <path d="M24 13 C30 13 35 18 35 24" />
    <path d="M35 24 C35 31 30 35 24 35" />
    <path d="M24 35 C18 35 13 31 13 24" />
    <circle cx="24" cy="24" r="3" />
    <line x1="24" y1="21" x2="24" y2="21" />
  </svg>
);

const AppDevIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="10" width="36" height="24" rx="2" />
    <line x1="6" y1="18" x2="42" y2="18" />
    <line x1="20" y1="34" x2="28" y2="34" />
    <line x1="24" y1="34" x2="24" y2="40" />
    <line x1="18" y1="40" x2="30" y2="40" />
    <circle cx="30" cy="28" r="5" />
    <circle cx="30" cy="28" r="2" fill="currentColor" stroke="none" />
    <line x1="30" y1="21" x2="30" y2="23" />
    <line x1="30" y1="33" x2="30" y2="35" />
    <line x1="23" y1="28" x2="25" y2="28" />
    <line x1="35" y1="28" x2="37" y2="28" />
  </svg>
);

const WebDevIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="8" width="36" height="28" rx="2" />
    <line x1="6" y1="16" x2="42" y2="16" />
    <circle cx="11" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="17" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="23" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <polyline points="18,24 14,28 18,32" />
    <polyline points="30,24 34,28 30,32" />
    <line x1="22" y1="34" x2="26" y2="22" />
  </svg>
);

const UxUiIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="6" width="14" height="14" rx="1" />
    <rect x="28" y="6" width="14" height="14" rx="1" />
    <rect x="6" y="28" width="14" height="14" rx="1" />
    <rect x="28" y="28" width="14" height="14" rx="1" />
    <line x1="20" y1="13" x2="28" y2="13" />
    <line x1="13" y1="20" x2="13" y2="28" />
    <line x1="35" y1="20" x2="35" y2="28" />
    <line x1="20" y1="35" x2="28" y2="35" />
    <circle cx="24" cy="24" r="2" fill="currentColor" stroke="none" />
  </svg>
);

// Define 3 slides with images and text content
const slides = [
  {
    src: "/background2.jpg",
    alt: "Team working 1",
    title: "Empowering Your Digital Presence",
    description:
      "We build stunning, high-performance websites that drive growth and deliver exceptional user experiences.",
  },
  {
    src: "/background1.jpg",
    alt: "Team working 2",
    title: "Innovative Strategies for Your Business",
    description:
      "Our data-driven marketing strategies are designed to elevate your brand and connect with your target audience.",
  },
  {
    src: "/bg3.jpg",
    alt: "Team working 3",
    title: "Creative Solutions, Measurable Results",
    description:
      "From concept to launch, we deliver creative solutions that produce tangible, measurable results for your business.",
  },

];

const teamMembers = [
  { name: "Ehsan Ali", role: "CEO & Founder", img: "/ehsan.jpg", bio: "The visionary leader steering Maverick towards innovation and excellence." },
  { name: "Zunaira Yousaf", role: "Business Developer", img: "/zunaira.jpg", bio: "The strategic mind forging partnerships and driving growth." },
  { name: "Waqas Javid", role: "Marketing Manager & Co-Founder", img: "/waqas.jpg", bio: "The visionary leader steering Maverick towards innovation and excellence." },
  { name: "Rimsha Eman", role: "Web Developer", img: "/rimsha.jpg", bio: "A rising talent crafting clean code and seamless user experiences." },
  { name: "Saba Kausar", role: "Web Developer", img: "/saba.jpg", bio: "An experienced developer architecting robust and scalable web solutions." },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number>(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div>
      {/* ── Hero Section ── */}
      <section className="relative h-screen overflow-hidden">
        {/* Background image slider */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, i) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              quality={95}
              className={`object-cover absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* Navbars overlay */}
        <div className="absolute top-0 left-0 right-0 z-20">
          {/* Top info bar */}
          <div className="bg-transparent text-gray-200 text-sm py-2">
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

          {/* Main navbar */}
          <nav className="bg-white/10">
            <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
              <span className="text-2xl font-bold tracking-widest text-white">Maverick Tech Studio</span>

              {/* Desktop Menu */}
              <ul className="hidden md:flex items-center gap-8">
                {navLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm font-semibold tracking-wide text-white hover:text-[#998100] transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Menu Toggle */}
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

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
              <div className="md:hidden bg-black/80 px-8 pb-4">
                <ul className="flex flex-col gap-3 pt-3">
                  {navLinks.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className="text-sm font-semibold tracking-wide text-white hover:text-[#998100] transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </nav>
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col justify-center h-full">
          <div className="max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-xl text-left text-white">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/70 mb-3">
                Creative Portfolio
              </p>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg uppercase">
                {slides[currentSlide].title}
              </h1>
              <p className="text-base md:text-lg mb-8 text-white/80 drop-shadow-md">
                {slides[currentSlide].description}
              </p>
              <div className="flex gap-4">
                <button className="bg-[#998100] hover:bg-[#7a6700] text-black font-semibold px-6 py-3 uppercase tracking-widest text-sm rounded-sm transition">
                  Get Started
                </button>
                <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold px-6 py-3 uppercase tracking-widest text-sm rounded-sm transition">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section className="relative py-20">

        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/bg1.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {/* Text block */}
            <div className="col-span-2 flex flex-col justify-center py-6">
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight mb-5">
                Crafting Digital<br />Experiences That Inspire
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                At Maverick, we blend creativity with technology to build bespoke digital solutions. Our team is dedicated to crafting websites and marketing campaigns that not only look great but also perform exceptionally.
              </p>
            </div>

            {/* Digital Products */}
            <div className="group bg-[#252525]/90 backdrop-blur-sm p-8 flex flex-col justify-between min-h-[220px] relative overflow-hidden cursor-pointer transition-all duration-300 hover:bg-[#998100]">
              <div className="text-[#998100] group-hover:text-black transition-colors duration-300">
                <DigitalProductsIcon />
              </div>
              <h3 className="text-white group-hover:text-black text-sm font-black uppercase tracking-wider leading-snug mt-6 transition-colors duration-300">
                Digital<br />Products
              </h3>
              <span className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>

            {/* Online Marketing */}
            <div className="group bg-[#252525]/90 backdrop-blur-sm p-8 flex flex-col justify-between min-h-[220px] relative overflow-hidden cursor-pointer transition-all duration-300 hover:bg-[#998100]">
              <div className="text-[#998100] group-hover:text-black transition-colors duration-300">
                <OnlineMarketingIcon />
              </div>
              <h3 className="text-white group-hover:text-black text-sm font-black uppercase tracking-wider leading-snug mt-6 transition-colors duration-300">
                Online<br />Marketing
              </h3>
              <span className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>

            {/* Graphic Design (Highlighted) */}
            <div className="group bg-[#998100] p-8 flex flex-col justify-between min-h-[220px] relative overflow-hidden cursor-pointer">
              <div className="text-black">
                <GraphicDesignIcon />
              </div>
              <h3 className="text-black text-sm font-black uppercase tracking-wider leading-snug mt-6">
                Graphic<br />Design
              </h3>
              <span className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-black/80 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>

            {/* Application Development */}
            <div className="group bg-[#252525]/90 backdrop-blur-sm p-8 flex flex-col justify-between min-h-[220px] relative overflow-hidden cursor-pointer transition-all duration-300 hover:bg-[#998100]">
              <div className="text-[#998100] group-hover:text-black transition-colors duration-300">
                <AppDevIcon />
              </div>
              <h3 className="text-white group-hover:text-black text-sm font-black uppercase tracking-wider leading-snug mt-6 transition-colors duration-300">
                Application<br />Development
              </h3>
              <span className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>

            {/* Web Development */}
            <div className="group bg-[#252525]/90 backdrop-blur-sm p-8 flex flex-col justify-between min-h-[220px] relative overflow-hidden cursor-pointer transition-all duration-300 hover:bg-[#998100]">
              <div className="text-[#998100] group-hover:text-black transition-colors duration-300">
                <WebDevIcon />
              </div>
              <h3 className="text-white group-hover:text-black text-sm font-black uppercase tracking-wider leading-snug mt-6 transition-colors duration-300">
                Web<br />Development
              </h3>
              <span className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>

            {/* UX/UI Design */}
            <div className="group bg-[#252525]/90 backdrop-blur-sm p-8 flex flex-col justify-between min-h-[220px] relative overflow-hidden cursor-pointer transition-all duration-300 hover:bg-[#998100]">
              <div className="text-[#998100] group-hover:text-black transition-colors duration-300">
                <UxUiIcon />
              </div>
              <h3 className="text-white group-hover:text-black text-sm font-black uppercase tracking-wider leading-snug mt-6 transition-colors duration-300">
                UX/UI<br />Design
              </h3>
              <span className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>

          </div>
        </div>
      </section>
      {/* ── About Section ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left: image + badge */}
            <div className="relative flex-shrink-0 w-full md:w-[420px]">
              <img
                src="/team.jpg"
                alt="Team meeting"
                className="w-full h-[480px] object-cover"
              />
            </div>
            {/* Right: text */}
            <div className="flex-1">
              <p className="text-[#998100] text-xs font-bold uppercase tracking-widest mb-3">Welcome To Maverick</p>
              <h2 className="text-4xl md:text-5xl font-medium text-black uppercase leading-tight mb-6">
                Where Vision<br />Meets Innovation
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Maverick is a premier digital agency specializing in web development, UI/UX design, and strategic marketing. We are passionate about helping businesses thrive in the digital landscape by creating engaging online experiences that drive results and foster growth.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#998100] hover:bg-[#7a6700] text-black font-bold px-8 py-3 uppercase tracking-widest text-xs transition">
                  Read More
                </button>
                <button className="border border-gray-300 hover:border-[#998100] text-black font-bold px-8 py-3 uppercase tracking-widest text-xs transition">
                  Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="relative py-28 md:py-32 bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat md:bg-fixed">

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

            {[
              {
                icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2 4-4",
                num: "28",
                label: "Project Completed"
              },
              {
                icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
                num: "25",
                label: "Our Staff"
              },
              {
                icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
                num: "35",
                label: "Services Provide"
              },
              {
                icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
                num: "62",
                label: "Happy Customers"
              },
            ].map(({ icon, num, label }) => (
              <div key={label} className="flex items-center gap-5">

                {/* Icon */}
                <span className="w-16 h-16 flex-shrink-0 bg-[#998100] flex items-center justify-center rounded">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={icon} />
                  </svg>
                </span>

                {/* Text */}
                <div>
                  <p className="text-4xl font-black text-white leading-none">
                    {num}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/80 mt-2">
                    {label}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ── FAQ + Skills Section ── */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-20">

            {/* Left: FAQ */}
            <div className="flex-1 flex flex-col items-center text-center justify-center">
              <p className="text-[#998100] text-[11px] font-extrabold uppercase tracking-[0.2em] mb-3">
                Frequently Ask Question
              </p>
              <h2 className="text-[2.6rem] font-black text-black uppercase leading-[1.15] mb-10 tracking-tight">
                Frequently<br />Ask Question
              </h2>

              <div className="space-y-2 w-full text-left">
                {[
                  {
                    q: "What services do you offer?",
                    items: [
                      "We specialize in web development, UI/UX design, e-commerce solutions, and digital marketing.",
                      "Our team is proficient in a variety of technologies to suit your project needs.",
                    ],
                  },
                  {
                    q: "How long does a website project take?",
                    items: [
                      "The timeline for a project varies depending on its complexity, but a typical website takes 4-8 weeks from start to finish.",
                      "We work closely with you to establish a clear timeline and keep you updated on our progress.",
                    ],
                  },
                  {
                    q: "Do you provide ongoing support?",
                    items: [
                      "Yes, we offer ongoing support and maintenance packages to ensure your website remains secure and up-to-date.",
                      "Our support services include regular backups, security monitoring, and content updates.",
                    ],
                  },
                  {
                    q: "What is your design process like?",
                    items: [
                      "Our design process is collaborative and iterative. We start with a discovery phase to understand your brand and goals, followed by wireframing, mockups, and development.",
                      "We value your feedback at every stage to ensure the final product aligns with your vision.",
                    ],
                  },
                ].map(({ q, items }, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={q} className="overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                        className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors duration-200 ${isOpen
                          ? "bg-[#998100] text-white"
                          : "bg-white text-black border border-gray-200 hover:border-[#998100]"
                          }`}
                      >
                        <span className="text-[11px] font-black uppercase tracking-[0.12em] leading-relaxed pr-4">
                          {q}
                        </span>
                        <svg
                          className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>

                      {isOpen && items && items.length > 0 && (
                        <ol className="bg-white border border-t-0 border-gray-200 px-7 py-5 space-y-2.5 list-decimal list-inside">
                          {items.map((item) => (
                            <li key={item} className="text-[13px] text-gray-500 leading-relaxed">
                              {item}
                            </li>
                          ))}
                        </ol>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: image + skills */}
            <div className="flex-1">
              <img
                src="/fqa.jpg"
                alt="Team working"
                className="w-full h-[340px] object-cover mb-9"
              />
              <h3 className="text-[1.65rem] font-black text-black uppercase leading-tight tracking-tight mb-7">
                Our Core<br />Competencies
              </h3>
              <div className="space-y-5">
                {[
                  { label: "Web Development", pct: 95 },
                  { label: "UI/UX Design", pct: 90 },
                  { label: "Digital Marketing", pct: 85 },
                  { label: "E-commerce Solutions", pct: 88 },
                ].map(({ label, pct }) => (
                  <div key={label}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[11px] font-black uppercase tracking-[0.12em] text-black">
                        {label}
                      </span>
                      <span className="text-[12px] font-black text-[#998100]">{pct}%</span>
                    </div>
                    <div className="h-[5px] bg-gray-300 w-full rounded-sm overflow-hidden">
                      <div
                        className="h-full bg-[#998100] rounded-sm"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Portfolio Section ── */}
      <section className="bg-[#1e1e1e] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-8 mb-12">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[#998100] text-xs font-bold uppercase tracking-widest mb-2">
                Recent Portfolio
              </p>
              <h2 className="text-4xl font-black text-white uppercase leading-tight">
                We Have Done<br />Many Latest Projects
              </h2>
            </div>

            <button
              onClick={() => setShowAllProjects((p) => !p)}
              className="border border-[#998100] text-[#998100] hover:bg-[#998100] hover:text-black text-xs font-bold uppercase tracking-widest px-6 py-3 transition flex items-center gap-2"
            >
              {showAllProjects ? "Show Less" : "View All Projects"}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { src: "/1.jpg", title: "E-Commerce Platform", category: "Web Development", link: "www.theclassicdecor.com", lightbox: false },
            { src: "/2.jpg", title: "Fashion Store", category: "UI/UX Design", link: "www.theflexleather.com", lightbox: false },
            { src: "/3.jpg", title: "Corporate Website", category: "Branding", link: "www.ataarabia.com", lightbox: false },
            { src: "/4.jpg", title: "Portfolio Showcase", category: "Graphic Design", link: "www.portfolio.com", lightbox: true },
            { src: "/5.jpg", title: "WoodenHive Online Store", category: "Web Development", link: "www.woodenhive.com", lightbox: false },
            { src: "/6.jpg", title: "Creative Social Media Posts", category: "Social Media Marketing", link: "www.mobileapp.com", lightbox: true },
            { src: "/7.jpg", title: "Inventory Management System", category: "Business Software", link: "www.khtabinventorysystem.com", lightbox: false },
          ].slice(0, showAllProjects ? undefined : 6).map(({ src, title, category, link, lightbox }, i) => (

            <div key={i} className="group relative overflow-hidden rounded-sm shadow-lg">

              {/* Browser bar */}
              <div className="bg-[#2d2d2d] px-4 py-2.5 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />

                <div className="flex-1 mx-3 bg-[#3d3d3d] rounded-sm px-3 py-1">
                  {lightbox ? (
                    <span className="text-[10px] text-gray-400 font-mono">{link}</span>
                  ) : (
                    <a
                      href={`https://${link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-gray-400 font-mono hover:text-white transition"
                    >
                      {link}
                    </a>
                  )}
                </div>
              </div>

              {/* Image */}
              <div
                className={`relative overflow-hidden h-[300px] ${lightbox ? "cursor-zoom-in" : ""}`}
                onClick={() => lightbox && setLightboxImg({ src, title })}
              >
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#998100]/85 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mb-4">
                    {lightbox ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </span>

                  <p className="text-white font-black uppercase tracking-wider text-sm">
                    {title}
                  </p>
                  <p className="text-white/80 text-[11px] uppercase tracking-widest mt-1">
                    {lightbox ? "Click to view full image" : category}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-[#252525] px-5 py-3 flex items-center justify-between">
                <div>
                  <p className="text-white text-[12px] font-bold uppercase tracking-wide">
                    {title}
                  </p>
                  <p className="text-[#998100] text-[10px] uppercase tracking-widest mt-0.5">
                    {category}
                  </p>
                </div>

                {lightbox ? (
                  <button
                    onClick={() => setLightboxImg({ src, title })}
                    className="w-7 h-7 rounded-full bg-[#998100] flex items-center justify-center hover:bg-[#7a6700] transition"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                ) : (
                  <a
                    href={`https://${link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-[#998100] flex items-center justify-center hover:bg-[#7a6700] transition"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ── Lightbox Modal ── */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute -top-10 right-0 text-white hover:text-[#998100] transition-colors flex items-center gap-2 text-xs font-black uppercase tracking-widest"
            >
              Close
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            {/* Full image */}
            <img
              src={lightboxImg.src}
              alt={lightboxImg.title}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            {/* Caption */}
            <div className="bg-[#1a1a1a] px-6 py-3 flex items-center justify-between">
              <span className="text-white text-sm font-black uppercase tracking-wider">{lightboxImg.title}</span>
              <span className="text-[#998100] text-[10px] uppercase tracking-widest">Click outside to close</span>
            </div>
          </div>
        </div>
      )}

      {/* ── Testimonials Section ── */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-[#998100] text-xs font-bold uppercase tracking-widest mb-2">
            Testimonial
          </p>
          <h2 className="text-4xl font-black text-black uppercase leading-tight mb-12">
            People Say<br />About Our Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                img: "/t1.jpg",
                name: "John Doe",
                role: "CEO of Innovate Inc.",
                review:
                  "Maverick transformed our online presence with a stunning new website. Their team was professional, creative, and delivered results that exceeded our expectations. We've seen a significant increase in engagement since the launch.",
              },
              {
                img: "/t2.jpg",
                name: "Jane Smith",
                role: "Marketing Director",
                review:
                  "The digital marketing campaign Maverick developed for us was a game-changer. Their strategic approach and data-driven insights helped us reach a wider audience and achieve our goals.",
              },
              {
                img: "/t3.jpg",
                name: "Samuel Green",
                role: "E-commerce Manager",
                review:
                  "Working with Maverick on our new e-commerce platform was a seamless experience. They understood our needs and delivered a high-performing, user-friendly store that has boosted our sales.",
              },
              {
                img: "/t4.jpg",
                name: "Emily White",
                role: "Startup Founder",
                review:
                  "As a new business, we needed a strong digital foundation. Maverick provided just that with a beautiful website and a solid marketing strategy. Their guidance and expertise have been invaluable.",
              },
            ].map(({ img, name, role, review }, i) => (
              <div key={i} className="bg-white p-6 flex flex-col justify-between shadow-sm">
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {review}
                </p>

                <div>
                  <div className="flex text-[#998100] mb-3">
                    {"★★★★★".split("").map((s, j) => (
                      <span key={j}>{s}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      src={img}
                      alt={name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-black text-black text-sm">{name}</p>
                      <p className="text-[#998100] text-xs uppercase tracking-wider">
                        {role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            <span className="w-3 h-3 rounded-full bg-[#998100] inline-block" />
            <span className="w-3 h-3 rounded-full bg-gray-300 inline-block" />
          </div>
        </div>
      </section>

      {/* ── Meet The Team ── */}
      <section className="bg-[#1e1e1e] py-20">
        <div className="max-w-screen-2xl mx-auto px-8 text-center">
          <p className="text-[#998100] text-xs font-bold uppercase tracking-widest mb-3">Our Experts</p>
          <h2 className="text-4xl font-black text-white uppercase leading-tight mb-12">
            The Minds Behind Maverick
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-[#2d2d2d] p-6 text-center group">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full border-4 border-transparent group-hover:border-[#998100] transition-all duration-300" />
                </div>
                <h3 className="text-white font-bold text-lg">{member.name}</h3>
                <p className="text-[#998100] text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-8">
          <div className="relative overflow-hidden rounded-sm">
            <img src="/bg.jpg" alt="Newsletter" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#998100]/85" />
            <div className="relative z-10 py-14 px-10 text-center">
              <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-2">Join Us Newsletter</h3>
              <p className="text-white/80 text-sm mb-6">Sign Up to our Newsletter and get our latest news update</p>
              <div className="flex max-w-lg mx-auto">
                <input type="email" placeholder="Enter email address" className="flex-1 px-5 py-3 text-sm outline-none bg-white text-gray-700 placeholder-gray-400" />
                <button className="bg-black hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 transition">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}