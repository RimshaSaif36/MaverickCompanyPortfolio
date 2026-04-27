"use client";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import { useState } from "react";
import Link from "next/link";

const projects = [
    { src: "/1.jpg", title: "E-Commerce Platform", category: "Web Development", link: "www.theclassicdecor.com", desc: "A full-featured e-commerce store with product management, cart, and secure checkout." },
    { src: "/2.jpg", title: "Fashion Store", category: "UI/UX Design", link: "www.theflexleather.com", desc: "Elegant fashion brand storefront with immersive browsing experience and mobile-first design." },
    { src: "/3.jpg", title: "Corporate Website", category: "Branding", link: "www.ataarabia.com", desc: "Professional corporate identity and website for a leading regional business." },
    { src: "/4.jpg", title: "Portfolio Showcase", category: "Graphic Design", link: "www.portfolio.com", desc: "Creative designer portfolio with dynamic project galleries and smooth interactions." },
    { src: "/5.jpg", title: "WoodenHive Online Store", category: "Web Development", link: "www.woodenhive.com", desc: "Handcrafted furniture store with rich product photography and streamlined checkout." },
    { src: "/6.jpg", title: "Social Media Campaign", category: "Social Media Marketing", link: "www.mobileapp.com", desc: "Comprehensive social media creatives and ad campaigns driving strong engagement." },
    { src: "/7.jpg", title: "Inventory Management System", category: "Business Software", link: "www.khtabinventorysystem.com", desc: "Custom-built inventory and reporting system for wholesale and retail businesses." },
];

const categories = ["All", "Web Development", "UI/UX Design", "Branding", "Graphic Design", "Social Media Marketing", "Business Software"];

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered = activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    return (
        <>
            <PageHeader
                title="Our Portfolio"
                subtitle="Recent Projects"
                breadcrumb="Portfolio"
            />

            {/* ── Intro ── */}
            <section className="bg-white py-16">
                <div className="max-w-3xl mx-auto px-8 text-center">
                    <p className="text-[#998100] text-xs font-bold uppercase tracking-widest mb-3">What We&apos;ve Built</p>
                    <h2 className="text-4xl font-black text-black uppercase leading-tight mb-5">
                        A Legacy Of<br />Remarkable Work
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        From sleek brand identities to powerful web applications, every project in our portfolio represents a commitment to craft, strategy, and results. Browse our latest work below.
                    </p>
                </div>
            </section>

            {/* ── Filter Tabs ── */}
            <section className="bg-[#1e1e1e] pt-10 pb-4 sticky top-[57px] z-40 shadow-lg">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`text-[11px] font-black uppercase tracking-widest px-5 py-2.5 transition ${activeCategory === cat
                                    ? "bg-[#998100] text-black"
                                    : "bg-[#2d2d2d] text-gray-400 hover:bg-[#3d3d3d] hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Projects Grid ── */}
            <section className="bg-[#1e1e1e] py-12 pb-20">
                <div className="max-w-7xl mx-auto px-8">
                    {filtered.length === 0 ? (
                        <div className="text-center py-20 text-gray-500">No projects found in this category.</div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {filtered.map(({ src, title, category, link, desc }, i) => (
                                <div key={i} className="group relative overflow-hidden rounded-sm shadow-lg flex flex-col">

                                    {/* Browser bar */}
                                    <div className="bg-[#2d2d2d] px-4 py-2.5 flex items-center gap-2 flex-shrink-0">
                                        <span className="w-3 h-3 rounded-full bg-red-500" />
                                        <span className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <span className="w-3 h-3 rounded-full bg-green-500" />
                                        <div className="flex-1 mx-3 bg-[#3d3d3d] rounded-sm px-3 py-1">
                                            <a
                                                href={`https://${link}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[10px] text-gray-400 font-mono hover:text-white transition"
                                            >
                                                {link}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div className="relative overflow-hidden h-[280px]">
                                        <img
                                            src={src}
                                            alt={title}
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-[#998100]/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-8 text-center">
                                            <span className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center mb-4">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">
                                                    <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" />
                                                    <circle cx="12" cy="12" r="3" />
                                                </svg>
                                            </span>
                                            <p className="text-black font-black uppercase tracking-wider text-sm mb-2">{title}</p>
                                            <p className="text-black/70 text-[11px] uppercase tracking-widest mb-3">{category}</p>
                                            <p className="text-black/80 text-xs leading-relaxed">{desc}</p>
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="bg-[#252525] px-5 py-4 flex items-center justify-between flex-shrink-0">
                                        <div>
                                            <p className="text-white text-[12px] font-bold uppercase tracking-wide">{title}</p>
                                            <p className="text-[#998100] text-[10px] uppercase tracking-widest mt-0.5">{category}</p>
                                        </div>
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
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* ── Process Section ── */}
            <section className="bg-gray-100 py-20">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-14">
                        <p className="text-[#998100] text-xs font-bold uppercase tracking-widest mb-3">How We Work</p>
                        <h2 className="text-4xl font-black text-black uppercase leading-tight">
                            Our Creative Process
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                        {[
                            { step: "01", title: "Discovery", desc: "We deep-dive into your brand, goals, and target audience to build a strategic foundation." },
                            { step: "02", title: "Strategy", desc: "We map out a tailored roadmap covering design, content, and development milestones." },
                            { step: "03", title: "Design & Build", desc: "Our team crafts pixel-perfect designs and engineers robust, scalable solutions." },
                            { step: "04", title: "Launch & Support", desc: "We deploy, test, and provide ongoing support to ensure long-term success." },
                        ].map(({ step, title, desc }, i) => (
                            <div
                                key={step}
                                className={`p-10 ${i % 2 === 0 ? "bg-white" : "bg-[#252525]"}`}
                            >
                                <p className="text-5xl font-black text-[#998100] opacity-40 leading-none mb-4">{step}</p>
                                <h3 className={`text-sm font-black uppercase tracking-widest mb-3 ${i % 2 === 0 ? "text-black" : "text-white"}`}>
                                    {title}
                                </h3>
                                <p className={`text-sm leading-relaxed ${i % 2 === 0 ? "text-gray-500" : "text-gray-400"}`}>
                                    {desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ── */}
            <section className="bg-[#1a1a1a] py-20">
                <div className="max-w-3xl mx-auto px-8 text-center">
                    <p className="text-[#998100] text-xs font-bold uppercase tracking-widest mb-3">Start Your Project</p>
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight mb-5">
                        Your Vision,<br />Our Expertise
                    </h2>
                    <p className="text-gray-400 text-sm mb-8">
                        Every great project starts with a conversation. Tell us about your idea and let&apos;s create something extraordinary.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-[#998100] hover:bg-[#7a6700] text-black font-black px-10 py-4 uppercase tracking-widest text-xs transition"
                    >
                        Start A Project →
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
