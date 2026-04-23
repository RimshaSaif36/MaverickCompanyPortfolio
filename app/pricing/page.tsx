import InnerNavbar from "../components/InnerNavbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Link from "next/link";

export const metadata = {
    title: "Pricing | Maverick Tech Studio",
    description: "Transparent, flexible pricing plans for every stage of your business. Choose a plan that fits your goals.",
};

const plans = [
    {
        name: "Starter",
        price: "$29",
        period: "/month",
        tagline: "Perfect for small businesses & startups",
        highlight: false,
        features: [
            "1 Website (up to 5 pages)",
            "Responsive UI Design",
            "Basic SEO Setup",
            "3 Months Support",
            "Monthly Performance Report",
            "Social Media Integration",
            "Contact Form",
            
            "— Custom Branding Package",
            "— Priority Support",
        ],
        cta: "Get Started",
        ctaHref: "/contact",
    },
    {
        name: "Professional",
        price: "$79",
        period: "/month",
        tagline: "Ideal for growing businesses",
        highlight: true,
        features: [
            "Up to 15 Pages Website",
            "Custom UI/UX Design",
            "Advanced SEO & Analytics",
            "6 Months Priority Support",
            "Weekly Performance Reports",
            "Social Media Marketing",
            "E-Commerce Integration",
           
            "Custom Branding Package",
            "— Dedicated Account Manager",
        ],
        cta: "Most Popular",
        ctaHref: "/contact",
    },
    {
        name: "Enterprise",
        price: "$199",
        period: "/month",
        tagline: "Full-scale solution for large teams",
        highlight: false,
        features: [
            "Unlimited Pages & Revisions",
            "Premium UI/UX Design",
            "Full SEO & Growth Strategy",
            "12 Months Dedicated Support",
            "Real-Time Analytics Dashboard",
            "Full Social Media Management",
            "Advanced E-Commerce System",
            "Enterprise Branding Package",
            "Dedicated Account Manager",
        ],
        cta: "Contact Sales",
        ctaHref: "/contact",
    },
];

const faqs = [
    {
        q: "Can I switch plans at any time?",
        a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle. Our team will guide you through the transition seamlessly.",
    },
    {
        q: "Do you offer custom pricing for specific projects?",
        a: "Absolutely. Every business is unique. Contact us with your project details and we&apos;ll create a tailored quote that fits your exact requirements and budget.",
    },
    {
        q: "Is there a free trial available?",
        a: "We offer a free 30-minute discovery call to understand your needs. For select services, we also provide a complimentary audit of your current digital presence.",
    },
    {
        q: "What payment methods do you accept?",
        a: "We accept all major credit/debit cards, bank transfers, and popular digital wallets. Monthly and annual billing options are available with a discount for annual plans.",
    },
];

const addOns = [
    { name: "Logo & Branding", price: "$149", desc: "Full brand identity including logo, color palette, and typography." },
    { name: "Content Writing", price: "$99", desc: "SEO-optimized copy for up to 10 pages, crafted by expert writers." },
    { name: "Social Media Pack", price: "$79/mo", desc: "20 custom social media posts per month across 3 platforms." },
    { name: "Maintenance Plan", price: "$39/mo", desc: "Monthly updates, security patches, and performance optimization." },
];

export default function PricingPage() {
    return (
        <>
            <InnerNavbar />
            <PageHeader
                title="Our Pricing Plans"
                subtitle="Transparent Pricing"
                breadcrumb="Pricing"
            />

            {/* ── Intro ── */}
            <section className="bg-white py-16">
                <div className="max-w-3xl mx-auto px-8 text-center">
                    <p className="text-[#998100] text-xs font-bold uppercase tracking-widest mb-3">Choose Your Plan</p>
                    <h2 className="text-4xl font-black text-black uppercase leading-tight mb-5">
                        Simple &amp;<br />Transparent Pricing
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        No hidden fees. No surprises. Whether you&apos;re launching a startup or scaling an enterprise, we have a plan designed to meet you exactly where you are.
                    </p>
                </div>
            </section>

            {/* ── Pricing Cards ── */}
            <section className="bg-gray-100 pb-20 pt-4">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-stretch">
                        {plans.map(({ name, price, period, tagline, highlight, features, cta, ctaHref }) => (
                            <div
                                key={name}
                                className={`flex flex-col ${highlight
                                        ? "bg-[#998100] shadow-2xl scale-y-[1.02] z-10 relative"
                                        : "bg-white border border-gray-200"
                                    }`}
                            >
                                {highlight && (
                                    <div className="bg-black text-white text-[10px] font-black uppercase tracking-[0.25em] text-center py-2">
                                        ★ Most Popular
                                    </div>
                                )}

                                {/* Header */}
                                <div className={`px-8 pt-10 pb-8 border-b ${highlight ? "border-black/20" : "border-gray-200"}`}>
                                    <p className={`text-xs font-black uppercase tracking-widest mb-2 ${highlight ? "text-black/70" : "text-[#998100]"}`}>
                                        {name}
                                    </p>
                                    <div className="flex items-end gap-1 mb-2">
                                        <span className={`text-5xl font-black leading-none ${highlight ? "text-black" : "text-black"}`}>
                                            {price}
                                        </span>
                                        <span className={`text-sm font-bold mb-2 ${highlight ? "text-black/70" : "text-gray-400"}`}>
                                            {period}
                                        </span>
                                    </div>
                                    <p className={`text-xs ${highlight ? "text-black/70" : "text-gray-500"}`}>{tagline}</p>
                                </div>

                                {/* Features */}
                                <ul className="flex-1 px-8 py-8 space-y-3">
                                    {features.map((f) => {
                                        const isDisabled = f.startsWith("—");
                                        const label = isDisabled ? f.slice(2) : f;
                                        return (
                                            <li key={f} className={`flex items-center gap-3 text-sm ${isDisabled ? "opacity-35" : ""}`}>
                                                <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${highlight
                                                        ? isDisabled ? "bg-black/20 text-black/40" : "bg-black text-white"
                                                        : isDisabled ? "bg-gray-200 text-gray-400" : "bg-[#998100] text-white"
                                                    }`}>
                                                    {isDisabled ? (
                                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                                                    ) : (
                                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                                    )}
                                                </span>
                                                <span className={highlight ? "text-black" : "text-gray-600"}>{label}</span>
                                            </li>
                                        );
                                    })}
                                </ul>

                                {/* CTA */}
                                <div className="px-8 pb-10">
                                    <Link
                                        href={ctaHref}
                                        className={`block text-center font-black text-xs uppercase tracking-widest py-3.5 transition ${highlight
                                                ? "bg-black text-white hover:bg-gray-800"
                                                : "bg-[#998100] text-black hover:bg-[#7a6700]"
                                            }`}
                                    >
                                        {cta} →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Add-Ons ── */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-12">
                        <p className="text-[#998100] text-xs font-bold uppercase tracking-widest mb-3">Power-Up Your Plan</p>
                        <h2 className="text-4xl font-black text-black uppercase leading-tight">
                            Optional Add-Ons
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {addOns.map(({ name, price, desc }) => (
                            <div key={name} className="border border-gray-200 p-8 hover:border-[#998100] transition group">
                                <p className="text-2xl font-black text-[#998100] mb-1">{price}</p>
                                <h3 className="text-sm font-black uppercase tracking-widest text-black mb-3">{name}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

           

            {/* ── CTA ── */}
            <section className="relative py-20 bg-[#1a1a1a]">
                <div className="max-w-3xl mx-auto px-8 text-center">
                    <p className="text-[#998100] text-xs font-bold uppercase tracking-widest mb-3">Still Not Sure?</p>
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight mb-5">
                        Let&apos;s Talk About<br />Your Project
                    </h2>
                    <p className="text-gray-400 text-sm mb-8">
                        Book a free 30-minute discovery call. No obligations, no hard sell — just an honest conversation about how we can help.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-[#998100] hover:bg-[#7a6700] text-black font-black px-10 py-4 uppercase tracking-widest text-xs transition"
                    >
                        Book A Free Call →
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
