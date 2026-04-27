"use client";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import { useState } from "react";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // Static export: open mailto as fallback
        const mailtoLink = `mailto:info@mavericktechstudio.com?subject=${encodeURIComponent(form.subject || "Contact Form")}&body=${encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
        )}`;
        window.location.href = mailtoLink;
        setSubmitted(true);
    }

    const infoCards = [
        {
            icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
            title: "Visit Our Office",
            lines: ["Maverick Engineers Innovista", "Rachna DHA, Gujranwala", "Pakistan"],
        },
        {
            icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z",
            title: "Call Us",
            lines: ["+92 310 3395111", "Mon – Sat: 9am – 5pm PKT"],
        },
        {
            icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
            title: "Email Us",
            lines: ["info@mavericktechstudio.com", "We reply within 24 hours"],
        },
        {
            icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
            title: "Business Hours",
            lines: ["Monday – Friday: 9am – 5pm", "Saturday: Closed", "Sunday: Closed"],
        },
    ];

    const services = [
        "Web Development",
        "UI/UX Design",
        "Mobile App Development",
        "Graphic Design",
        "Digital Marketing",
        "Branding & Identity",
        "Business Software",
        "Other",
    ];

    return (
        <>
            <PageHeader
                title="Contact Us"
                subtitle="Get In Touch"
                breadcrumb="Contact"
            />

            {/* ── Info Cards ── */}
            <section className="bg-[#1e1e1e] py-16">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                        {infoCards.map(({ icon, title, lines }, i) => (
                            <div
                                key={title}
                                className={`p-8 flex flex-col gap-4 ${i === 0 ? "bg-[#998100]" : "bg-[#252525] border-l border-white/5"
                                    }`}
                            >
                                <div className={`w-12 h-12 flex items-center justify-center rounded ${i === 0 ? "bg-black/20" : "bg-[#998100]"}`}>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={i === 0 ? "black" : "white"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d={icon} />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className={`text-xs font-black uppercase tracking-widest mb-2 ${i === 0 ? "text-black" : "text-white"}`}>
                                        {title}
                                    </h3>
                                    {lines.map((line) => (
                                        <p key={line} className={`text-sm ${i === 0 ? "text-black/75" : "text-gray-400"}`}>
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Form + Map ── */}
            <section className="bg-gray-100 py-20">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col md:flex-row gap-12">

                        {/* Contact Form */}
                        <div className="flex-1">
                            <p className="text-[#998100] text-xs font-bold uppercase tracking-widest mb-3">Send A Message</p>
                            <h2 className="text-4xl font-black text-black uppercase leading-tight mb-8">
                                Let&apos;s Start<br />A Conversation
                            </h2>

                            {submitted ? (
                                <div className="bg-[#998100] p-10 text-center">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <h3 className="text-xl font-black text-black uppercase tracking-wide mb-2">Message Sent!</h3>
                                    <p className="text-black/70 text-sm">Your email client has been opened. We&apos;ll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-widest text-gray-600 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className="w-full bg-white border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#998100] transition placeholder-gray-400"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-widest text-gray-600 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                className="w-full bg-white border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#998100] transition placeholder-gray-400"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-widest text-gray-600 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder="+92 300 0000000"
                                                className="w-full bg-white border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#998100] transition placeholder-gray-400"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-widest text-gray-600 mb-2">
                                                Service Interested In
                                            </label>
                                            <select
                                                name="subject"
                                                value={form.subject}
                                                onChange={handleChange}
                                                className="w-full bg-white border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#998100] transition appearance-none cursor-pointer"
                                            >
                                                <option value="">Select a service...</option>
                                                {services.map((s) => (
                                                    <option key={s} value={s}>{s}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-600 mb-2">
                                            Your Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={6}
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your project, goals, and timeline..."
                                            className="w-full bg-white border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#998100] transition placeholder-gray-400 resize-none"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-[#998100] hover:bg-[#7a6700] text-black font-black text-xs uppercase tracking-widest px-10 py-4 transition flex items-center gap-3"
                                    >
                                        Send Message
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <line x1="22" y1="2" x2="11" y2="13" />
                                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                        </svg>
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Map + Quick Info */}
                        <div className="flex-shrink-0 w-full md:w-[420px] flex flex-col gap-6">
                            {/* Map placeholder */}
                            <div className="relative bg-[#252525] h-72 overflow-hidden">
                                <div className="absolute inset-0 bg-[url('/bg1.jpg')] bg-cover bg-center opacity-30" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                                    <div className="w-14 h-14 bg-[#998100] rounded-full flex items-center justify-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <p className="text-white font-black text-sm uppercase tracking-wider mb-1">
                                        Maverick Tech Studio
                                    </p>
                                    <p className="text-gray-400 text-xs">
                                        Rachna DHA, Gujranwala, Pakistan
                                    </p>
                                    <a
                                        href="https://www.google.com/maps/place/Innovista+Rachna/@32.2814578,74.1366351,17z/data=!3m1!4b1!4m6!3m5!1s0x391f27007d334e0d:0x55680c67bd5e63c0!8m2!3d32.2814533!4d74.13921!16s%2Fg%2F11x7c0fjvf?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 text-[11px] font-black uppercase tracking-widest text-[#998100] hover:text-white transition flex items-center gap-2"
                                    >
                                        Open in Maps
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                           {/* Social follow */}
<div className="bg-[#1a1a1a] p-8">
    <p className="text-xs font-black uppercase tracking-widest text-white mb-5">
        Follow Us
    </p>

    <div className="space-y-3">
        {[
            {
                label: "Facebook",
                handle: "@MaverickTechStudio",
                color: "#1877F2",
                href: "https://www.facebook.com/profile.php?id=61570729737437",
            },
            {
                label: "Instagram",
                handle: "@maverick.tech.studio",
                color: "#E1306C",
                href: "https://www.instagram.com/mavericktechstudio/",
            },
            {
                label: "LinkedIn",
                handle: "Maverick Tech Studio",
                color: "#0A66C2",
                href: "https://www.linkedin.com/company/mavericktechstudio",
            },
        ].map(({ label, handle, color, href }) => (
            <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
            >
                <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: color }}
                />
                <span className="text-xs font-bold text-gray-400 group-hover:text-white transition">
                    {label}
                </span>
                <span className="text-[11px] text-gray-600 ml-auto group-hover:text-[#998100] transition">
                    {handle}
                </span>
            </a>
        ))}
    </div>
</div>
  
                            {/* Quick response promise */}
                            <div className="bg-[#998100] p-6 flex items-center gap-5">
                                <div className="flex-shrink-0 w-12 h-12 bg-black/20 rounded flex items-center justify-center">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-black font-black text-sm uppercase tracking-wider">24-Hour Response</p>
                                    <p className="text-black/70 text-xs mt-1">We guarantee a reply within one business day.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

            <Footer />
        </>
    );
}
