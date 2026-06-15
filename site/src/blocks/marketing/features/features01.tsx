const CardFeature = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
    return <div className="rounded-ui p-6 sm:p-8 lg:p-10 bg-bg-surface flex flex-col hover:bg-bg-muted ease-linear">
        <div className="p-3 rounded-md bg-bg shadow-sm text-fg-subtitle flex items-center justify-center w-max">
            <span className={`iconify ${icon} size-6`}></span>
        </div>
        <h3 className="text-fg-title font-medium text-2xl mt-10">
            {title}
        </h3>
        <p className="text-fg-muted text-sm mt-4">
            {description}
        </p>
    </div>
}

const features = [
    {
        id: "feature01",
        icon: 'ph--gauge',
        title: 'Real-Time Dashboard',
        description:
            'Monitor your business metrics in real time with an intuitive dashboard that gives you instant visibility into performance, usage, and growth.',
    },
    {
        id: "feature02",
        icon: 'ph--users-three',
        title: 'Team Collaboration',
        description:
            'Work seamlessly with your team using shared workspaces, role-based permissions, and real-time updates that keep everyone aligned.',
    },
    {
        id: "feature03",
        icon: 'ph--gear-six',
        title: 'Automated Workflows',
        description:
            'Streamline repetitive tasks with powerful automation tools that save time, reduce errors, and boost overall productivity.',
    },
    {
        id: "feature04",
        icon: 'ph--cloud',
        title: 'Cloud-Based Access',
        description:
            'Access your data securely from anywhere in the world. Our fully cloud-hosted platform ensures reliability, scalability, and 99.9% uptime.',
    },
    {
        id: "feature05",
        icon: 'ph--shield-check',
        title: 'Enterprise-Grade Security',
        description:
            'Protect your data with advanced encryption, secure authentication, and compliance-ready infrastructure built for peace of mind.',
    },
    {
        id: "feature06",
        icon: 'ph--chart-line-up',
        title: 'Advanced Analytics & Insights',
        description:
            'Make smarter decisions with detailed reports, actionable insights, and predictive analytics designed to help you scale confidently.',
    },
];
export const Features01 = () => {
    return (
        <section className="py-20 lg:py-32">
            <div className="px-5 sm:px-10 md:px-12 lg:px-5 lg:max-w-7xl mx-auto w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end">
                    <div className="max-w-lg space-y-4">
                        <span className="block w-max border border-border shadow-sm text-fg rounded-ui px-2 py-0.5">
                            Why us
                        </span>
                        <h1 className="font-semibold text-fg-title text-3xl md:text-4xl/tight">
                            Choose the perfect SEO partner for your business growth
                        </h1>
                    </div>
                    <div className="max-w-sm">
                        <p className="text-fg-muted">
                            We help businesses rank higher, grow organic traffic, and dominate search engines through tailored
                            SEO strategies.
                        </p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                    {
                        features.map(feature => <CardFeature key={feature.id} {...feature} />)
                    }

                </div>
            </div>
        </section>
    )
}
