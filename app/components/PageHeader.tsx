import Link from "next/link";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    breadcrumb: string;
}

export default function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
    return (
        <section className="relative py-24 bg-[url('/com.jpg')] bg-cover bg-center bg-fixed">
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
                {subtitle && (
                    <p className="text-[#998100] text-xs font-bold uppercase tracking-[0.3em] mb-3">
                        {subtitle}
                    </p>
                )}
                <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-6">
                    {title}
                </h1>
                <div className="flex items-center justify-center gap-2 text-sm">
                    <Link href="/" className="text-gray-400 hover:text-[#998100] transition-colors font-medium">
                        Home
                    </Link>
                    <span className="text-[#998100]">›</span>
                    <span className="text-white font-semibold">{breadcrumb}</span>
                </div>
            </div>
        </section>
    );
}
