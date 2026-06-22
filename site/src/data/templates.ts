export type Template = {
  id: string
  title: string
  description: string
  tags: string[]
  href: string
  preview: string,
  price: "Free" | "Paid"
  cover: string
}

export const templates: Template[] = [
  {
    id: "lms-dashboard",
    title: "LMS Dashboard",
    description:
      "Learning management system admin dashboard with KPI cards, revenue charts, top courses, and course management table. Built with TanStack Start.",
    tags: ["TanStack Start", "Dashboard", "React"],
    href: "https://github.com/Johnkat-Mj/ui/tree/main/kit-ui/lms-dashboard",
    preview: "https://lms-dashboard-indol.vercel.app/",
    price: "Free",
    cover: "/lms-layout.webp"
  },
  {
    id: "devolio",
    title: "Devolio",
    description:
      "Developer portfolio template with hero, services, portfolio grid, testimonials carousel, and blog sections. Built with Next.js.",
    tags: ["Next.js", "Portfolio", "React"],
    href: "https://github.com/Johnkat-Mj/ui/tree/main/kit-ui/devolio",
    preview: "https://rk-devolio-next.vercel.app/",
    price: "Free",
    cover: "/devolio.webp"
  },
  {
    id: "inno-agency",
    title: "Inno Agency",
    description:
      "Marketing agency landing page with hero, social proof stats, expertise grid, about section, and CTA. Built with Next.js.",
    tags: ["Next.js", "Landing Page", "React"],
    href: "https://github.com/Johnkat-Mj/ui/tree/main/kit-ui/inno-agency",
    preview: "https://rk-inno-next.vercel.app/",
    price: "Free",
    cover: "/inno-agency.webp"
  }
]