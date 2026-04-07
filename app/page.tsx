"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

// Social icons as inline SVGs
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

// ── Service card icons ──
const DigitalProductsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="10" y="6" width="16" height="26" rx="2"/>
    <line x1="10" y1="10" x2="26" y2="10"/>
    <line x1="10" y1="28" x2="26" y2="28"/>
    <circle cx="18" cy="31" r="1" fill="currentColor" stroke="none"/>
    <circle cx="35" cy="13" r="6" strokeDasharray="2 1"/>
    <line x1="35" y1="10" x2="35" y2="16"/>
    <line x1="32" y1="13" x2="38" y2="13"/>
    <circle cx="39" cy="22" r="4"/>
    <line x1="39" y1="20" x2="39" y2="24"/>
    <line x1="37" y1="22" x2="41" y2="22"/>
  </svg>
);

const OnlineMarketingIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="8,38 18,24 26,30 36,16 44,10"/>
    <polyline points="38,10 44,10 44,16"/>
    <line x1="8" y1="42" x2="44" y2="42"/>
    <line x1="8" y1="10" x2="8" y2="42"/>
    <rect x="10" y="30" width="4" height="12"/>
    <rect x="18" y="26" width="4" height="16"/>
    <rect x="26" y="22" width="4" height="20"/>
  </svg>
);

const GraphicDesignIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="24" r="3"/>
    <circle cx="24" cy="10" r="3"/>
    <circle cx="38" cy="24" r="3"/>
    <circle cx="24" cy="38" r="3"/>
    <path d="M13 24 C13 17 18 13 24 13"/>
    <path d="M24 13 C30 13 35 18 35 24"/>
    <path d="M35 24 C35 31 30 35 24 35"/>
    <path d="M24 35 C18 35 13 31 13 24"/>
    <circle cx="24" cy="24" r="3"/>
    <line x1="24" y1="21" x2="24" y2="21"/>
  </svg>
);

const AppDevIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="10" width="36" height="24" rx="2"/>
    <line x1="6" y1="18" x2="42" y2="18"/>
    <line x1="20" y1="34" x2="28" y2="34"/>
    <line x1="24" y1="34" x2="24" y2="40"/>
    <line x1="18" y1="40" x2="30" y2="40"/>
    <circle cx="30" cy="28" r="5"/>
    <circle cx="30" cy="28" r="2" fill="currentColor" stroke="none"/>
    <line x1="30" y1="21" x2="30" y2="23"/>
    <line x1="30" y1="33" x2="30" y2="35"/>
    <line x1="23" y1="28" x2="25" y2="28"/>
    <line x1="35" y1="28" x2="37" y2="28"/>
  </svg>
);

const WebDevIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="8" width="36" height="28" rx="2"/>
    <line x1="6" y1="16" x2="42" y2="16"/>
    <circle cx="11" cy="12" r="1.5" fill="currentColor" stroke="none"/>
    <circle cx="17" cy="12" r="1.5" fill="currentColor" stroke="none"/>
    <circle cx="23" cy="12" r="1.5" fill="currentColor" stroke="none"/>
    <polyline points="18,24 14,28 18,32"/>
    <polyline points="30,24 34,28 30,32"/>
    <line x1="22" y1="34" x2="26" y2="22"/>
  </svg>
);

const UxUiIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="6" width="14" height="14" rx="1"/>
    <rect x="28" y="6" width="14" height="14" rx="1"/>
    <rect x="6" y="28" width="14" height="14" rx="1"/>
    <rect x="28" y="28" width="14" height="14" rx="1"/>
    <line x1="20" y1="13" x2="28" y2="13"/>
    <line x1="13" y1="20" x2="13" y2="28"/>
    <line x1="35" y1="20" x2="35" y2="28"/>
    <line x1="20" y1="35" x2="28" y2="35"/>
    <circle cx="24" cy="24" r="2" fill="currentColor" stroke="none"/>
  </svg>
);

// Define 3 slides with images and text content
const slides = [
  {
    src: "/background1.jpg",
    alt: "Team working 1",
    title: "Professional & Creative Design Solution",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    src: "/background2.jpg",
    alt: "Team working 2",
    title: "Innovative Strategies for Your Business",
    description:
      "We provide innovative solutions to help your business grow and succeed in a competitive market.",
  },
  {
    src: "/background3.jpg",
    alt: "Team working 3",
    title: "Crafting meaningful and impactful designs",
    description:
      "Our creative team crafts visually stunning designs that captivate your audience.",
  },
  
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const navLinks = ["Home", "About", "Pricing", "Portfolio", "Blog", "Contact"];

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
                <a href="tel:+001234567" className="text-white font-semibold hover:text-yellow-400 transition-colors">
                  +92 123 4567
                </a>{" "}
                or email us:{" "}
                <a href="mailto:maverick@email.com" className="text-white font-semibold hover:text-yellow-400 transition-colors">
                  maverick@email.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-white">
                <a href="#" aria-label="Facebook" className="hover:text-yellow-400 transition-colors"><FacebookIcon /></a>
                <a href="#" aria-label="Twitter" className="hover:text-yellow-400 transition-colors"><TwitterIcon /></a>
                <a href="#" aria-label="Instagram" className="hover:text-yellow-400 transition-colors"><InstagramIcon /></a>
              </div>
            </div>
          </div>

          {/* Main navbar */}
          <nav className="bg-white/10">
            <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
              <span className="text-2xl font-bold tracking-widest text-white">Maverick Engineers</span>
              <ul className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className={`text-sm font-semibold tracking-wide transition-colors ${
                        link === "Home"
                          ? "text-yellow-400 border-b-2 border-yellow-400 pb-0.5"
                          : "text-white hover:text-yellow-400"
                      }`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
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
            {menuOpen && (
              <div className="md:hidden bg-black/60 px-8 pb-4">
                <ul className="flex flex-col gap-3 pt-3">
                  {navLinks.map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        onClick={() => setMenuOpen(false)}
                        className={`text-sm font-semibold tracking-wide transition-colors ${
                          link === "Home" ? "text-yellow-400" : "text-white hover:text-yellow-400"
                        }`}
                      >
                        {link}
                      </a>
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
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 uppercase tracking-widest text-sm rounded-sm transition">
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
          We Shape The<br />Perfect Solutions
        </h2>
        <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </p>
      </div>

      {/* Digital Products */}
      <div className="group bg-[#252525]/90 backdrop-blur-sm p-8 flex flex-col justify-between min-h-[220px] relative overflow-hidden cursor-pointer transition-all duration-300 hover:bg-yellow-400">
        <div className="text-yellow-400 group-hover:text-black transition-colors duration-300">
          <DigitalProductsIcon />
        </div>
        <h3 className="text-white group-hover:text-black text-sm font-black uppercase tracking-wider leading-snug mt-6 transition-colors duration-300">
          Digital<br />Products
        </h3>
        <span className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </span>
      </div>

      {/* Online Marketing */}
      <div className="group bg-[#252525]/90 backdrop-blur-sm p-8 flex flex-col justify-between min-h-[220px] relative overflow-hidden cursor-pointer transition-all duration-300 hover:bg-yellow-400">
        <div className="text-yellow-400 group-hover:text-black transition-colors duration-300">
          <OnlineMarketingIcon />
        </div>
        <h3 className="text-white group-hover:text-black text-sm font-black uppercase tracking-wider leading-snug mt-6 transition-colors duration-300">
          Online<br />Marketing
        </h3>
        <span className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </span>
      </div>

      {/* Graphic Design (Highlighted) */}
      <div className="group bg-yellow-400 p-8 flex flex-col justify-between min-h-[220px] relative overflow-hidden cursor-pointer">
        <div className="text-black">
          <GraphicDesignIcon />
        </div>
        <h3 className="text-black text-sm font-black uppercase tracking-wider leading-snug mt-6">
          Graphic<br />Design
        </h3>
        <span className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-black/80 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </span>
      </div>

      {/* Application Development */}
      <div className="group bg-[#252525]/90 backdrop-blur-sm p-8 flex flex-col justify-between min-h-[220px] relative overflow-hidden cursor-pointer transition-all duration-300 hover:bg-yellow-400">
        <div className="text-yellow-400 group-hover:text-black transition-colors duration-300">
          <AppDevIcon />
        </div>
        <h3 className="text-white group-hover:text-black text-sm font-black uppercase tracking-wider leading-snug mt-6 transition-colors duration-300">
          Application<br />Development
        </h3>
        <span className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </span>
      </div>

      {/* Web Development */}
      <div className="group bg-[#252525]/90 backdrop-blur-sm p-8 flex flex-col justify-between min-h-[220px] relative overflow-hidden cursor-pointer transition-all duration-300 hover:bg-yellow-400">
        <div className="text-yellow-400 group-hover:text-black transition-colors duration-300">
          <WebDevIcon />
        </div>
        <h3 className="text-white group-hover:text-black text-sm font-black uppercase tracking-wider leading-snug mt-6 transition-colors duration-300">
          Web<br />Development
        </h3>
        <span className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </span>
      </div>

      {/* UX/UI Design */}
      <div className="group bg-[#252525]/90 backdrop-blur-sm p-8 flex flex-col justify-between min-h-[220px] relative overflow-hidden cursor-pointer transition-all duration-300 hover:bg-yellow-400">
        <div className="text-yellow-400 group-hover:text-black transition-colors duration-300">
          <UxUiIcon />
        </div>
        <h3 className="text-white group-hover:text-black text-sm font-black uppercase tracking-wider leading-snug mt-6 transition-colors duration-300">
          UX/UI<br />Design
        </h3>
        <span className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
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
    src="/1.jpg" 
    alt="Team meeting" 
    className="w-full h-[480px] object-cover" 
  />
</div>
            {/* Right: text */}
            <div className="flex-1">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Welcome To Maverick</p>
              <h2 className="text-4xl md:text-5xl font-black text-black uppercase leading-tight mb-6">
                Highest<br />Creative Standards
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </p>
              <div className="flex gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 uppercase tracking-widest text-xs transition">
                  Read More
                </button>
                <button className="border border-gray-300 hover:border-yellow-500 text-black font-bold px-8 py-3 uppercase tracking-widest text-xs transition">
                  Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ── Stats Section ── */}
<section className="relative py-26 md:py-28 bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

      {[
        { icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2 4-4", num: "4,800", label: "Project Completed" },
        { icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", num: "1,000", label: "Our Staff" },
        { icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", num: "350", label: "Services Provide" },
        { icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z", num: "7,650", label: "Happy Customers" },
      ].map(({ icon, num, label }) => (
        <div key={label} className="flex items-center gap-5">
          
          <span className="w-16 h-16 flex-shrink-0 bg-yellow-500 flex items-center justify-center rounded">
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

          <div>
            <p className="text-4xl font-black text-white leading-none">
              {num}
            </p>
            <p className="text-xs font-bold uppercase tracking-wider text-white/70 mt-2">
              {label}
            </p>
          </div>

        </div>
      ))}

    </div>
  </div>
</section>

      {/* ── FAQ + Skills Section ── */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Left: FAQ */}
            <div className="flex-1">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-2">Frequently Ask Question</p>
              <h2 className="text-4xl font-black text-black uppercase leading-tight mb-8">
                Frequently<br />Ask Question
              </h2>
              <div className="space-y-3">
                {[
                  { q: "How To Fixed A Problem?", open: true, items: ["Far far away, behind the word mountains", "Consonantia, there live the blind texts", "When she reached the first hills of the Italic Mountains", "Bookmarksgrove, the headline of Alphabet Village", "Separated they live in Bookmarksgrove right"] },
                  { q: "How To Manage Your Website?", open: false },
                  { q: "How To Grow Your Investments Funds?", open: false },
                  { q: "What Are Those Requirements For Businesses?", open: false },
                ].map(({ q, open, items }) => (
                  <details key={q} open={open} className="group">
                    <summary className={`flex items-center justify-between px-5 py-4 cursor-pointer text-xs font-black uppercase tracking-wider list-none ${open ? "bg-yellow-500 text-white" : "bg-white text-black border border-gray-200"}`}>
                      {q}
                      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                    </summary>
                    {items && (
                      <ol className="bg-white px-6 py-4 text-sm text-gray-600 space-y-2 list-decimal list-inside border border-t-0 border-gray-200">
                        {items.map((item) => <li key={item}>{item}</li>)}
                      </ol>
                    )}
                  </details>
                ))}
              </div>
            </div>
            {/* Right: image + skills */}
            <div className="flex-1">
              <img src="/team.jpg" alt="Team working" className="w-full h-56 object-cover mb-8" />
              <h3 className="text-2xl font-black text-black uppercase leading-tight mb-6">
                We Are Very<br />Experienced &amp; Professionals
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Creative Design", pct: 95 },
                  { label: "Product Engineering", pct: 85 },
                  { label: "Marketing Strategy", pct: 95 },
                  { label: "Support Tips", pct: 90 },
                ].map(({ label, pct }) => (
                  <div key={label}>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-black">{label}</span>
                      <span className="text-xs font-black text-yellow-500">{pct}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-300 w-full">
                      <div className="h-full bg-yellow-500" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team Section ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-2">Meet The Team</p>
              <h2 className="text-4xl font-black text-black uppercase leading-tight">
                Professional<br />Creative Team Members
              </h2>
            </div>
            <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black text-xs font-bold uppercase tracking-widest px-6 py-3 transition flex items-center gap-2">
              View All Members
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {[
              { name: "Alex Carter", role: "UI Designer", img: "/team1.jpg", active: false },
              { name: "James Miller", role: "Developer", img: "/team2.jpg", active: false },
              { name: "Liam Neil", role: "Graphic Designer", img: "/team3.jpg", active: true },
              { name: "Noah Smith", role: "Marketing Lead", img: "/team4.jpg", active: false },
            ].map(({ name, role, img, active }) => (
              <div key={name} className="relative group overflow-hidden">
                <img src={img} alt={name} className="w-full h-72 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                {active && (
                  <div className="absolute inset-0 bg-yellow-500/80 flex flex-col items-center justify-center">
                    <p className="text-white font-black uppercase tracking-wider text-sm">{name}</p>
                    <p className="text-white/80 text-xs uppercase tracking-widest mt-1">{role}</p>
                    <div className="flex gap-3 mt-4">
                      {["twitter", "facebook", "google", "instagram"].map((s) => (
                        <a key={s} href="#" className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {s === "twitter" && <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>}
                            {s === "facebook" && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>}
                            {s === "google" && <><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></>}
                            {s === "instagram" && <><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none"/></>}
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                {!active && (
                  <div className="absolute inset-0 bg-yellow-500/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-black uppercase tracking-wider text-sm">{name}</p>
                    <p className="text-white/80 text-xs uppercase tracking-widest mt-1">{role}</p>
                    <div className="flex gap-3 mt-4">
                      {["twitter", "facebook", "google", "instagram"].map((s) => (
                        <a key={s} href="#" className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {s === "twitter" && <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>}
                            {s === "facebook" && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>}
                            {s === "google" && <><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></>}
                            {s === "instagram" && <><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none"/></>}
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio Section ── */}
      <section className="bg-[#1e1e1e] pt-20 pb-0">
        <div className="max-w-7xl mx-auto px-8 mb-12">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-2">Recent Portfolio</p>
              <h2 className="text-4xl font-black text-white uppercase leading-tight">
                We Have Done<br />Many Latest Projects
              </h2>
            </div>
            <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black text-xs font-bold uppercase tracking-widest px-6 py-3 transition flex items-center gap-2">
              View All Projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {["/p1.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg", "/p5.jpg", "/p6.jpg"].map((src, i) => (
            <div key={i} className="relative group overflow-hidden aspect-square">
              <img src={src} alt={`Portfolio ${i + 1}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials Section ── */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-2">Testimonial</p>
          <h2 className="text-4xl font-black text-black uppercase leading-tight mb-12">
            People Say<br />About Our Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { img: "/t1.jpg" },
              { img: "/t2.jpg" },
              { img: "/t3.jpg" },
              { img: "/t4.jpg" },
            ].map(({ img }, i) => (
              <div key={i} className="bg-white p-6 flex flex-col justify-between">
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div>
                  <div className="flex text-yellow-500 mb-3">{"★★★★★".split("").map((s, j) => <span key={j}>{s}</span>)}</div>
                  <div className="flex items-center gap-3">
                    <img src={img} alt="Reviewer" className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-black text-black text-sm">Roger Scott</p>
                      <p className="text-yellow-500 text-xs uppercase tracking-wider">Marketing Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8">
            <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-gray-300 inline-block" />
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-8">
          <div className="relative overflow-hidden rounded-sm">
            <img src="/newsletter-bg.jpg" alt="Newsletter" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-yellow-500/85" />
            <div className="relative z-10 py-14 px-10 text-center">
              <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-2">Join Us Newsletter</h3>
              <p className="text-white/80 text-sm mb-6">Sign Up to our Newsletter and get our latest news update</p>
              <div className="flex max-w-lg mx-auto">
                <input type="email" placeholder="Enter email address" className="flex-1 px-5 py-3 text-sm outline-none bg-white text-gray-700 placeholder-gray-400" />
                <button className="bg-black hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 transition">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#1a1a1a] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <p className="text-white font-black text-lg uppercase tracking-widest mb-4">Maverick</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Far far away, behind the word mountains, far from the countries.</p>
              <div className="flex gap-3">
                {["twitter", "facebook", "instagram"].map((s) => (
                  <a key={s} href="#" className="w-9 h-9 rounded-full bg-yellow-500 flex items-center justify-center hover:bg-yellow-400 transition">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {s === "twitter" && <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>}
                      {s === "facebook" && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>}
                      {s === "instagram" && <><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none"/></>}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            {/* Explore */}
            <div>
              <p className="text-white font-black text-sm uppercase tracking-widest mb-5">Explore</p>
              <ul className="space-y-2">
                {["About", "Contact", "Portfolio", "Blog"].map((l) => (
                  <li key={l}><a href="#" className="text-gray-400 text-sm hover:text-yellow-400 transition flex items-center gap-2"><span className="text-yellow-500 text-xs">›</span>{l}</a></li>
                ))}
              </ul>
            </div>
            {/* Info */}
            <div>
              <p className="text-white font-black text-sm uppercase tracking-widest mb-5">Info</p>
              <ul className="space-y-2">
                {["Join us", "Blog", "Privacy & Policy", "Term & Conditions"].map((l) => (
                  <li key={l}><a href="#" className="text-gray-400 text-sm hover:text-yellow-400 transition flex items-center gap-2"><span className="text-yellow-500 text-xs">›</span>{l}</a></li>
                ))}
              </ul>
            </div>
            {/* Company */}
            <div>
              <p className="text-white font-black text-sm uppercase tracking-widest mb-5">Company</p>
              <ul className="space-y-2">
                {["About Us", "Blog", "Contact", "Careers"].map((l) => (
                  <li key={l}><a href="#" className="text-gray-400 text-sm hover:text-yellow-400 transition flex items-center gap-2"><span className="text-yellow-500 text-xs">›</span>{l}</a></li>
                ))}
              </ul>
            </div>
            {/* Contact */}
            <div>
              <p className="text-white font-black text-sm uppercase tracking-widest mb-5">Have A Questions?</p>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex gap-3">
                  <span className="text-yellow-500 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-500 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </span>
                  <span>+2 392 3929 210</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-500 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </span>
                  <span>info@yourdomain.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-xs">
            © {new Date().getFullYear()} Maverick. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}