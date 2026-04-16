import InnerNavbar from "../components/InnerNavbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Link from "next/link";

export const metadata = {
    title: "About Us | Maverick Tech Studio",
    description: "Learn about Maverick Tech Studio — our story, our team, and our mission to deliver world-class digital solutions.",
};

const teamMembers = [
    { name: "Ehsan Ali", role: "CEO", img: "/ehsan.jpg" },
    { name: "Zunaira Yousaf", role: "Business Developer", img: "/zunaira.jpg" },
    { name: "Rimsha Eman", role: "Junior Web Developer", img: "/rimsha.jpg" },
    { name: "Saba Kausar", role: "Web Developer", img: "/saba.jpg" },
];

const stats = [
    { icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2 4-4", num: "150+", label: "Projects Completed" },
    { icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", num: "20+", label: "Team Members" },
    { icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", num: "50+", label: "Services Provided" },
    { icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z", num: "100+", label: "Happy Customers" },
];

const skills = [
    { label: "Web Development", pct: 95 },
    { label: "UI/UX Design", pct: 90 },
    { label: "Digital Marketing", pct: 85 },
    { label: "E-commerce Solutions", pct: 88 },
    { label: "Brand Strategy", pct: 92 },
];

const values = [
    {
        icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
        title: "Integrity",
        desc: "We operate with full transparency and honesty in every client engagement, building trust that lasts beyond project delivery.",
    },
    {
        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
        title: "Innovation",
        desc: "We stay at the forefront of technology, constantly evolving our skill set to deliver cutting-edge solutions for modern businesses.",
    },
    {
        icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 4a2 2 0 0 0-1-1.73l-3-1.73a2 2 0 0 0-2 0l-3 1.73A2 2 0 0 0 13 15v3.27a2 2 0 0 0 1 1.73l3 1.73a2 2 0 0 0 2 0l3-1.73A2 2 0 0 0 21 18.27V15z",
        title: "Collaboration",
        desc: "Your vision drives our process. We work side-by-side with clients, treating every project as a true partnership.",
    },
    {
        icon: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z",
        title: "Excellence",
        desc: "We hold ourselves to the highest standards — from design to deployment — delivering outcomes that exceed expectations every time.",
    },
];

export default function AboutPage() {
    return (
        <>
            <InnerNavbar />
            <PageHeader
                title="About Us"
                subtitle="Who We Are"
                breadcrumb="About"
            />

            {/* ── Our Story Section ── */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col md:flex-row gap-14 items-center">
                        {/* Image */}
                        <div className="relative flex-shrink-0 w-full md:w-[460px]">
                            <img
                                src="/team.jpg"
                                alt="Maverick Team"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-[#998100] text-black px-8 py-6 hidden md:block">
                                <p className="text-4xl font-black leading-none">10+</p>
                                <p className="text-xs font-bold uppercase tracking-widest mt-1">Years of Excellence</p>
                            </div>
                        </div>

                        {/* Text */}
                        <div className="flex-1">
                            <p className="text-[#998100] text-xs font-bold uppercase tracking-widest mb-3">
                                Our Story
                            </p>
                            <h2 className="text-4xl md:text-5xl font-black text-black uppercase leading-tight mb-6">
                                Crafted With<br />Passion & Purpose
                            </h2>
                            <p className="text-gray-500 text-sm leading-relaxed mb-5">
                                Founded on a passion for innovation and a commitment to excellence, Maverick is a full-service digital agency that empowers brands to thrive in the digital age. Our journey began with a small team of creative minds and has since grown into a powerhouse of developers, designers, and strategists dedicated to delivering exceptional results.
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                We believe in the power of collaboration and work closely with our clients to bring their visions to life. From crafting stunning websites to executing data-driven marketing campaigns, we are your trusted partner in navigating the ever-evolving digital landscape.
                            </p>
                            <div className="flex gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-[#998100] hover:bg-[#7a6700] text-black font-bold px-8 py-3 uppercase tracking-widest text-xs transition"
                                >
                                    Work With Us
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="border border-gray-300 hover:border-[#998100] text-black font-bold px-8 py-3 uppercase tracking-widest text-xs transition"
                                >
                                    Our Work
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Core Values ── */}
            <section className="bg-gray-100 py-20">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-12">
                        <p className="text-[#998100] text-xs font-bold uppercase tracking-widest mb-3">What Drives Us</p>
                        <h2 className="text-4xl font-black text-black uppercase leading-tight">
                            Our Core Values
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map(({ icon, title, desc }) => (
                            <div key={title} className="bg-white p-8 group hover:bg-[#998100] transition-colors duration-300 cursor-default">
                                <div className="mb-5 text-[#998100] group-hover:text-black transition-colors duration-300">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d={icon} />
                                    </svg>
                                </div>
                                <h3 className="text-sm font-black uppercase tracking-wider text-black group-hover:text-black mb-3 transition-colors duration-300">
                                    {title}
                                </h3>
                                <p className="text-gray-500 group-hover:text-black/80 text-sm leading-relaxed transition-colors duration-300">
                                    {desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Stats Section ── */}
            <section className="relative py-28 bg-[url('/bg.jpg')] bg-cover bg-center bg-fixed">
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                        {stats.map(({ icon, num, label }) => (
                            <div key={label} className="flex items-center gap-5">
                                <span className="w-16 h-16 flex-shrink-0 bg-[#998100] flex items-center justify-center rounded">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d={icon} />
                                    </svg>
                                </span>
                                <div>
                                    <p className="text-4xl font-black text-white leading-none">{num}</p>
                                    <p className="text-xs font-bold uppercase tracking-wider text-white/80 mt-2">{label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Skills Section ── */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <p className="text-[#998100] text-xs font-bold uppercase tracking-widest mb-3">Our Expertise</p>
                            <h2 className="text-4xl font-black text-black uppercase leading-tight mb-4">
                                We Are Very<br />Experienced &amp; Professional
                            </h2>
                            <p className="text-gray-500 text-sm leading-relaxed mb-10">
                                Our proficiency spans the entire digital spectrum, from intricate back-end development to captivating front-end design. Each skill we possess has been honed through years of hands-on experience and a relentless pursuit of perfection, ensuring we deliver nothing but the best.
                            </p>
                            <div className="space-y-5">
                                {skills.map(({ label, pct }) => (
                                    <div key={label}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-[11px] font-black uppercase tracking-[0.12em] text-black">{label}</span>
                                            <span className="text-[12px] font-black text-[#998100]">{pct}%</span>
                                        </div>
                                        <div className="h-[5px] bg-gray-200 w-full rounded-sm overflow-hidden">
                                            <div className="h-full bg-[#998100] rounded-sm" style={{ width: `${pct}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-full md:w-[480px]">
                            <img src="/fqa.jpg" alt="Our skills" className="w-full h-[420px] object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Team Section ── */}
            <section className="bg-gray-100 py-20">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-12">
                        <p className="text-[#998100] text-xs font-bold uppercase tracking-widest mb-3">Meet The Team</p>
                        <h2 className="text-4xl font-black text-black uppercase leading-tight">
                            Professional<br />Creative Team Members
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {teamMembers.map(({ name, role, img }) => (
                            <div key={name} className="group relative overflow-hidden bg-white">
                                <img
                                    src={img}
                                    alt={name}
                                    className="w-full h-72 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-[#998100]/85 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white font-black uppercase tracking-wider text-sm">{name}</p>
                                    <p className="text-white/80 text-xs uppercase tracking-widest mt-1">{role}</p>
                                    <div className="flex gap-3 mt-4">
                                        {["twitter", "facebook", "instagram"].map((s) => (
                                            <a key={s} href="#" className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    {s === "twitter" && <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />}
                                                    {s === "facebook" && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />}
                                                    {s === "instagram" && <><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none" /></>}
                                                </svg>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="px-5 py-4 bg-white border-t border-gray-100">
                                    <p className="text-black font-black text-sm uppercase tracking-wide">{name}</p>
                                    <p className="text-[#998100] text-xs uppercase tracking-widest mt-0.5">{role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ── */}
            <section className="relative py-20 bg-[url('/bg.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-[#998100]/90" />
                <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-black uppercase leading-tight mb-4">
                        Ready To Start Your<br />Next Big Project?
                    </h2>
                    <p className="text-black/70 text-sm mb-8">
                        Let&apos;s build something remarkable together. Reach out and let us know how we can help.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            href="/contact"
                            className="bg-black hover:bg-gray-800 text-white font-bold px-8 py-3 uppercase tracking-widest text-xs transition"
                        >
                            Get In Touch
                        </Link>
                        <Link
                            href="/pricing"
                            className="border-2 border-black text-black hover:bg-black hover:text-white font-bold px-8 py-3 uppercase tracking-widest text-xs transition"
                        >
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
