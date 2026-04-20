import InnerNavbar from "../components/InnerNavbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Link from "next/link";

export const metadata = {
    title: "About Us | Maverick Tech Studio",
    description: "Learn about Maverick Tech Studio — our story, our team, and our mission to deliver world-class digital solutions.",
};

const teamMembers = [
    { name: "Ehsan Ali", role: "CEO & Founder", img: "/ehsan.jpg", bio: "The visionary leader steering Maverick towards innovation and excellence." },
    { name: "Zunaira Yousaf", role: "Business Developer", img: "/zunaira.jpg", bio: "The strategic mind forging partnerships and driving growth." },
    { name: "Rimsha Eman", role: "Junior Web Developer", img: "/rimsha.jpg", bio: "A rising talent crafting clean code and seamless user experiences." },
    { name: "Saba Kausar", role: "Senior Web Developer", img: "/saba.jpg", bio: "An experienced developer architecting robust and scalable web solutions." },
];

const values = [
    {
        icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
        title: "Integrity",
        desc: "We operate with full transparency and honesty, building trust that lasts beyond project delivery.",
    },
    {
        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
        title: "Innovation",
        desc: "We stay at the forefront of technology, constantly evolving to deliver cutting-edge solutions.",
    },
    {
        icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 4a2 2 0 0 0-1-1.73l-3-1.73a2 2 0 0 0-2 0l-3 1.73A2 2 0 0 0 13 15v3.27a2 2 0 0 0 1 1.73l3 1.73a2 2 0 0 0 2 0l3-1.73A2 2 0 0 0 21 18.27V15z",
        title: "Collaboration",
        desc: "Your vision drives our process. We work side-by-side with you, treating every project as a true partnership.",
    },
    {
        icon: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z",
        title: "Excellence",
        desc: "We hold ourselves to the highest standards, delivering outcomes that exceed expectations every time.",
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

            {/* ── Story & Mission Section ── */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-[#998100] text-xs font-bold uppercase tracking-widest mb-3">
                            Our Story
                        </p>
                        <h2 className="text-4xl font-black text-black uppercase leading-tight mb-6">
                            Digital Craftsmanship, <br />Driven by Purpose
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Founded on a passion for innovation, Maverick Tech Studio is a full-service digital agency that empowers brands to thrive. Our journey began with a small team of creative minds and has grown into a powerhouse of developers, designers, and strategists dedicated to delivering exceptional results.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We believe in the power of collaboration and work closely with our clients to bring their visions to life, creating digital experiences that are both beautiful and effective.
                        </p>
                    </div>
                    <div className="relative h-full min-h-[400px]">
                        <img src="/about.jpg" alt="Our Team at Work" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            {/* ── Meet The Team ── */}
            <section className="bg-[#1e1e1e] py-20">
                <div className="max-w-7xl mx-auto px-8 text-center">
                    <p className="text-[#998100] text-xs font-bold uppercase tracking-widest mb-3">Our Experts</p>
                    <h2 className="text-4xl font-black text-white uppercase leading-tight mb-12">
                        The Minds Behind Maverick
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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

            {/* ── Our Core Values ── */}
            <section className="bg-white py-20">
                <div className="max-w-5xl mx-auto px-8 text-center">
                    <p className="text-[#998100] text-xs font-bold uppercase tracking-widest mb-3">Our Principles</p>
                    <h2 className="text-4xl font-black text-black uppercase leading-tight mb-12">
                        Guiding Our Work
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {values.map(({ icon, title, desc }) => (
                            <div key={title} className="text-center">
                                <div className="w-16 h-16 bg-[#998100] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d={icon} />
                                    </svg>
                                </div>
                                <h3 className="text-black font-bold text-lg mb-2">{title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Why Choose Us ── */}
            

            {/* ── CTA Section ── */}
            <section className="bg-[#998100] py-16 text-center">
                <div className="max-w-4xl mx-auto px-8">
                    <h2 className="text-3xl font-black text-black uppercase leading-tight mb-4">
                        Have a Project in Mind?
                    </h2>
                    <p className="text-black/80 mb-8">
                        Let's turn your idea into a digital reality. Get in touch with our team to discuss your project.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-black hover:bg-gray-800 text-white font-bold px-10 py-4 uppercase tracking-widest text-xs transition"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
