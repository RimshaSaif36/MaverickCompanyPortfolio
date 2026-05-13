import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import { getProjectBySlug, projects } from "../projects-data";

export async function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <>
            <PageHeader
                title={project.title}
                subtitle="Project Details"
                breadcrumb={project.title}
            />

            <section className="bg-white py-14 md:py-20">
                <div className="max-w-6xl mx-auto px-8">
                    <div
                        className="overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.12)]"
                        style={{ background: project.previewBackground }}
                    >
                        <img
                            src={project.src}
                            alt={project.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    <div className="grid gap-12 pt-12 md:grid-cols-[minmax(0,1fr)_280px] md:items-start">
                        <div>
                            <p className="text-black text-2xl md:text-4xl font-black uppercase tracking-tight">
                                {project.title}
                            </p>

                            <p className="mt-8 text-gray-500 text-base leading-8 max-w-3xl">
                                {project.summary}
                            </p>
                            <p className="mt-6 text-gray-500 text-base leading-8 max-w-3xl">
                                {project.description}
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <a
                                    href={`https://${project.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center bg-[#998100] hover:bg-[#7a6700] text-black font-black px-8 py-3 uppercase tracking-widest text-xs transition"
                                >
                                    Visit Website
                                </a>
                                <Link
                                    href="/portfolio"
                                    className="inline-flex items-center justify-center border border-gray-300 hover:border-[#998100] text-black font-black px-8 py-3 uppercase tracking-widest text-xs transition"
                                >
                                    Back To Portfolio
                                </Link>
                            </div>
                        </div>

                        <aside className="border border-gray-200 bg-[#fafafa] px-6 py-7">
                            <div className="space-y-7">
                                <div>
                                    <p className="text-black font-black uppercase tracking-wide text-sm">Client</p>
                                    <p className="mt-2 text-gray-500 text-base">{project.client}</p>
                                </div>
                                <div>
                                    <p className="text-black font-black uppercase tracking-wide text-sm">Category</p>
                                    <p className="mt-2 text-gray-500 text-base">{project.category}</p>
                                </div>
                                <div>
                                    <p className="text-black font-black uppercase tracking-wide text-sm">Date</p>
                                    <p className="mt-2 text-gray-500 text-base">{project.date}</p>
                                </div>
                                <div>
                                    <p className="text-black font-black uppercase tracking-wide text-sm">Website</p>
                                    <a
                                        href={`https://${project.website}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 inline-block text-gray-500 hover:text-[#998100] break-all transition-colors"
                                    >
                                        {project.website}
                                    </a>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}