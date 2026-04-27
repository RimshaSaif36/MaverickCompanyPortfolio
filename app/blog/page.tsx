import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Link from "next/link";

export const metadata = {
    title: "Blog | Maverick Tech Studio",
    description: "Insights, tutorials, and industry news from the Maverick Tech Studio team.",
};

const posts = [
    {
        img: "/1.jpg",
        category: "Web Development",
        date: "April 10, 2026",
        title: "10 Web Design Trends That Will Define 2026",
        excerpt: "From immersive 3D experiences to AI-generated layouts, discover the design movements reshaping the digital landscape this year and how your brand can stay ahead.",
        author: "James Miller",
        authorImg: "/man.jpg",
        readTime: "5 min read",
        slug: "web-design-trends-2026",
    },
    {
        img: "/2.jpg",
        category: "UI/UX Design",
        date: "April 5, 2026",
        title: "Why Micro-Interactions Make or Break Your User Experience",
        excerpt: "Small animations, hover effects, and subtle feedback loops create the emotional glue that keeps users engaged. Learn how to design micro-interactions that delight.",
        author: "Alex Carter",
        authorImg: "/woman.jpg",
        readTime: "4 min read",
        slug: "micro-interactions-ux",
    },
    {
        img: "/3.jpg",
        category: "Branding",
        date: "March 28, 2026",
        title: "Building a Brand Identity That Stands the Test of Time",
        excerpt: "Your brand is more than a logo. We break down the strategic pillars of lasting brand identity — from typography choices to tone of voice and visual hierarchy.",
        author: "Liam Neil",
        authorImg: "/man1.jpg",
        readTime: "6 min read",
        slug: "brand-identity-guide",
    },
    {
        img: "/4.jpg",
        category: "Digital Marketing",
        date: "March 19, 2026",
        title: "SEO in 2026: What Actually Moves the Needle",
        excerpt: "Google&apos;s evolving algorithms demand a smarter approach. We reveal the SEO strategies generating real traffic and conversions for our clients right now.",
        author: "Noah Smith",
        authorImg: "/woman1.jpg",
        readTime: "7 min read",
        slug: "seo-strategies-2026",
    },
    {
        img: "/5.jpg",
        category: "E-Commerce",
        date: "March 12, 2026",
        title: "How to Build an E-Commerce Store That Converts",
        excerpt: "Conversion rate optimization goes beyond pretty design. Discover the checkout psychology, trust signals, and performance tactics that turn browsers into buyers.",
        author: "James Miller",
        authorImg: "/man.jpg",
        readTime: "8 min read",
        slug: "ecommerce-conversion-tips",
    },
    {
        img: "/6.jpg",
        category: "Social Media",
        date: "March 5, 2026",
        title: "The Anatomy of a High-Performing Social Media Campaign",
        excerpt: "Behind every viral post is a strategic framework. We share the content planning, visual storytelling, and analytics workflow we use for our top-performing campaigns.",
        author: "Alex Carter",
        authorImg: "/woman.jpg",
        readTime: "5 min read",
        slug: "social-media-campaign-framework",
    },
];

const categories = ["All Topics", "Web Development", "UI/UX Design", "Branding", "Digital Marketing", "E-Commerce", "Social Media"];

export default function BlogPage() {
    return (
        <>
            <PageHeader
                title="Our Blog"
                subtitle="Insights & Ideas"
                breadcrumb="Blog"
            />

            {/* ── Header ── */}
            <section className="bg-white py-16">
                <div className="max-w-3xl mx-auto px-8 text-center">
                    <p className="text-[#998100] text-xs font-bold uppercase tracking-widest mb-3">Knowledge Hub</p>
                    <h2 className="text-4xl font-black text-black uppercase leading-tight mb-5">
                        Insights From<br />The Studio
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Stay ahead of the curve with expert articles, tutorials, and industry analysis from the Maverick Tech Studio team. New posts every week.
                    </p>
                </div>
            </section>

            {/* ── Category Filter + Posts ── */}
            <section className="bg-gray-100 py-14">
                <div className="max-w-7xl mx-auto px-8">

                    {/* Category pills */}
                    <div className="flex flex-wrap gap-2 mb-12 justify-center">
                        {categories.map((cat) => (
                            <span
                                key={cat}
                                className={`text-[11px] font-black uppercase tracking-widest px-5 py-2 cursor-default ${cat === "All Topics"
                                        ? "bg-[#998100] text-black"
                                        : "bg-white text-gray-600 border border-gray-200 hover:border-[#998100] hover:text-[#998100] transition"
                                    }`}
                            >
                                {cat}
                            </span>
                        ))}
                    </div>

                    {/* Posts grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {posts.map(({ img, category, date, title, excerpt, author, authorImg, readTime, slug }) => (
                            <article key={slug} className="bg-white group flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow">

                                {/* Thumbnail */}
                                <div className="relative overflow-hidden h-52 flex-shrink-0">
                                    <img
                                        src={img}
                                        alt={title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute top-4 left-4 bg-[#998100] text-black text-[10px] font-black uppercase tracking-widest px-3 py-1">
                                        {category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1 p-6">
                                    <div className="flex items-center gap-3 text-[11px] text-gray-400 uppercase tracking-wider mb-3">
                                        <span>{date}</span>
                                        <span className="text-[#998100]">•</span>
                                        <span>{readTime}</span>
                                    </div>

                                    <h2 className="text-sm font-black uppercase tracking-wide text-black leading-snug mb-3 group-hover:text-[#998100] transition-colors">
                                        {title}
                                    </h2>

                                    <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-1">
                                        {excerpt}
                                    </p>

                                    {/* Author + Read more */}
                                    <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                                        <div className="flex items-center gap-2">
                                            <img src={authorImg} alt={author} className="w-8 h-8 rounded-full object-cover" />
                                            <span className="text-[11px] font-bold text-gray-600">{author}</span>
                                        </div>
                                        <Link
                                            href={`/blog/${slug}`}
                                            className="text-[#998100] hover:text-[#7a6700] transition text-[11px] font-black uppercase tracking-widest flex items-center gap-1"
                                        >
                                            Read More
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Load more */}
                    <div className="text-center mt-12">
                        <button className="border-2 border-[#998100] text-[#998100] hover:bg-[#998100] hover:text-black font-black text-xs uppercase tracking-widest px-10 py-3.5 transition">
                            Load More Posts
                        </button>
                    </div>
                </div>
            </section>

            {/* ── Newsletter ── */}
            <section className="bg-white py-16">
                <div className="max-w-4xl mx-auto px-8">
                    <div className="relative overflow-hidden">
                        <img src="/bg.jpg" alt="Newsletter" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-[#998100]/90" />
                        <div className="relative z-10 py-14 px-10 text-center">
                            <p className="text-black/60 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Stay Informed</p>
                            <h3 className="text-2xl font-black text-black uppercase tracking-wider mb-2">
                                Join Our Newsletter
                            </h3>
                            <p className="text-black/70 text-sm mb-6">
                                Get our latest articles, tips, and studio updates delivered straight to your inbox.
                            </p>
                            <div className="flex max-w-lg mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="flex-1 px-5 py-3 text-sm outline-none bg-white text-gray-700 placeholder-gray-400"
                                />
                                <button className="bg-black hover:bg-gray-800 text-white font-black text-xs uppercase tracking-widest px-6 py-3 transition">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
