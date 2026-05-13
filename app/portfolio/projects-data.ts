export type Project = {
    slug: string;
    src: string;
    title: string;
    category: string;
    website: string;
    summary: string;
    description: string;
    client: string;
    date: string;
    previewBackground: string;
    previewVideoSrc?: string;
};

export const projects: Project[] = [
    {
        slug: "e-commerce-platform",
        src: "/1.jpg",
        title: "E-Commerce Platform",
        category: "Web Development",
        website: "www.theclassicdecor.com",
        summary: "A full-featured e-commerce store with streamlined discovery, product storytelling, and conversion-focused shopping flows.",

        description:
            "This project was designed to make online furniture shopping feel polished and trustworthy. The experience balances rich lifestyle imagery with clear product navigation, strong calls to action, and a homepage structure that keeps customers moving toward featured collections and checkout.",
        client: "Classic Decor",
        date: "May 10, 2024",
        previewBackground: "linear-gradient(135deg, #f4f0d5 0%, #ece3b7 100%)",
        previewVideoSrc: "/videos/The%20Classic%20Decor%20-%20Google%20Chrome%20-%2013%20May%202026.mp4",
    },
    {
        slug: "fashion-store",
        src: "/2.jpg",
        title: "Fashion Store",
        category: "UI/UX Design",
        website: "www.theflexleather.com",
        summary: "A premium storefront concept with stronger visual hierarchy, immersive imagery, and a cleaner browsing experience.",

        description:
            "The design direction for this fashion project focused on a refined editorial look. Large product visuals, restrained typography, and concise navigation help the brand feel premium while still keeping the user journey easy to follow on both desktop and mobile screens.",
        client: "Flex Leather",
        date: "June 22, 2024",
        previewBackground: "linear-gradient(135deg, #4a312e 0%, #775149 100%)",
        previewVideoSrc: "/videos/FlexLeather%20-%20Premium%20Leather%20Goods%20-%20Google%20Chrome%20-%2013%20May%202026.mp4",
    },
    {
        slug: "corporate-website",
        src: "/3.jpg",
        title: "Corporate Website",
        category: "Branding",
        website: "www.ataarabia.com",
        summary: "A corporate web presence that communicates scale, authority, and a clear service proposition.",

        description:
            "This project was structured around credibility. The visuals, spacing, and content hierarchy were designed to support a strong first impression for enterprise visitors while giving the brand a cleaner digital identity that can scale across future pages and campaigns.",
        client: "ATA Arabia",
        date: "July 16, 2024",
        previewBackground: "linear-gradient(135deg, #6c72d9 0%, #99a0f4 100%)",
        previewVideoSrc: "/videos/ata.mp4",
    },
    {
        slug: "portfolio-showcase",
        src: "/4.jpg",
        title: "Portfolio Showcase",
        category: "Graphic Design",
        website: "www.portfolio.com",
        summary: "A portfolio-driven landing page concept built to spotlight services, social presence, and brand identity in one screen.",

        description:
            "This concept explores a more graphic and campaign-like composition. The circular layout, contrast-heavy palette, and social touchpoints are intended to make the profile memorable while still keeping the message clear and service-oriented.",
        client: "Maverick Engineers",
        date: "August 08, 2024",
        previewBackground: "linear-gradient(135deg, #111111 0%, #272727 100%)",
    },
    {
        slug: "woodenhive-online-store",
        src: "/5.jpg",
        title: "WoodenHive Online Store",
        category: "Web Development",
        website: "www.woodenhive.com",
        summary: "A handcrafted furniture storefront centered around warmth, detail, and visual trust.",

        description:
            "For WoodenHive, the focus was on bringing craftsmanship forward. The storefront uses deep textures, lifestyle imagery, and product-led storytelling to make the browsing experience feel more tactile and aligned with the brand's premium furniture positioning.",
        client: "WoodenHive",
        date: "September 02, 2024",
        previewBackground: "linear-gradient(135deg, #d8c4a2 0%, #f0e1c8 100%)",
        previewVideoSrc: "/videos/WoodenHive%20-%20Google%20Chrome%20-%2013%20May%202026.mp4",
    },
    {
        slug: "creative-social-media-posts",
        src: "/6.jpg",
        title: "Creative Social Media Posts",
        category: "Social Media Marketing",
        website: "www.mobileapp.com",
        summary: "A bold social media campaign visual system created to improve retention and promotional clarity.",

        description:
            "This campaign package was built for high scroll-stopping impact. Strong contrast, promotional framing, and a compact message structure were used to make every post legible, branded, and immediately useful across social placements.",
        client: "Knox",
        date: "October 11, 2024",
        previewBackground: "linear-gradient(135deg, #7b14a8 0%, #d24cff 100%)",
    },
    {
        slug: "inventory-management-system",
        src: "/7.jpg",
        title: "Inventory Management System",
        category: "Business Software",
        website: "www.khtabinventorysystem.com",
        summary: "A custom internal platform tailored for stock visibility, operational control, and reporting accuracy.",

        description:
            "This business system was built around practicality. The interface prioritizes clean data presentation, role-based workflows, and dependable inventory tracking so teams can manage products, reporting, and day-to-day operations with less friction.",
        client: "KHTAB",
        date: "November 19, 2024",
        previewBackground: "linear-gradient(135deg, #dbe4ec 0%, #f6f8fa 100%)",
    },
];

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}