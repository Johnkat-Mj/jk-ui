
export const Pricing03 = () => {
    return (
        <section className="py-32">
            <div className="px-5 sm:px-10 md:px-12 lg:px-5 lg:max-w-7xl mx-auto w-full flex flex-col space-y-16">
                <div className="flex gap-14 md:justify-between flex-col md:flex-row items-center">
                    <div className="text-center md:text-left md:max-w-lg space-y-5">
                        <span className="ui-subtle ui-subtle-gray text-xs px2.5 py1 font-semibold tracking-wide rounded-xl">Plans</span>
                        <h2 className="font-semibold leading-tight text-foreground text-3xl md:text-4xl xl:text-5xl">
                            Choose the right plan for your team
                        </h2>
                        <p className="text-foreground pt-2">
                            Flexible pricing for developers, startups, and enterprises. Scale as you grow.
                        </p>
                    </div>
                    <div className="min-w-max flex justify-center md:justify-end">
                        <div className="rounded-xl bg-background shadow-lg shadow-gray-200/40 dark:shadow-none flex items-center relative p-1">
                            <button data-state="active" className="btn btn-md w-max rounded-lg text-foreground bg-transparent fx-active:text-white fx-active:bg-primary">
                                Monthly
                            </button>
                            <button data-state="inactive" className="btn btn-md w-max rounded-lg text-foreground bg-transparent fx-active:text-white fx-active:bg-primary">
                                Yearly
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid divide-y divide-border lg:divide-y-0 gap-6 mx-auto lg:items-stretch lg:grid-cols-3 md:gap-8 lg:gap-12 bg-background border border-border rounded-xl px-4 md:px-6 lg:px-8 pb-10">
                    {/* Free Plan */}
                    <div className="bg-background pt-6 px-4 h-auto flex flex-col">
                        <div className="min-h-max mb-5">
                            <div className="relative flex items-end">
                                <div className="flex">
                                    <span className="text-4xl font-bold text-foreground">$0</span>
                                </div>
                                <span className="text-foreground">/month</span>
                            </div>
                            <h2 className="text-xl font-semibold text-foreground-subtitle pt-5">
                                Free
                            </h2>
                            <p className="text-foreground pt-2">
                                Perfect for individuals and hobby projects. Get started with core features.
                            </p>
                        </div>
                        <ul role="list" className="flex flex-col gap-2 text-foreground">
                            <li className="flex gap-4 items-center">
                                <span className="bg-card text-sm text-foreground px-2 py-1 rounded-full">✓</span>
                                Unlimited public repositories
                            </li>
                            <li className="flex gap-4 items-center">
                                <span className="bg-card text-sm text-foreground px-2 py-1 rounded-full">✓</span>
                                Community support
                            </li>
                            <li className="flex gap-4 items-center">
                                <span className="bg-card text-sm text-foreground px-2 py-1 rounded-full">✓</span>
                                Basic CI/CD pipelines
                            </li>
                            <li className="flex gap-4 items-center">
                                <span className="bg-card text-sm text-foreground px-2 py-1 rounded-full">✓</span>
                                1 concurrent build
                            </li>
                        </ul>
                        <div className="mt-5 flex flex-1 items-end min-h-max">
                            <a href="#" className="relative w-full btn btn-lg justify-center before:absolute before:inset-0 before:rounded-lg before:btn-outline before:btn-outline-gray before:transition before:duration-300 active-before:scale-95 rounded-md">
                                <span className="relative text-sm font-medium text-muted-foreground">Continue for free</span>
                            </a>
                        </div>
                    </div>
                    {/* Team Plan */}
                    <div className="bg-background pt-6 px-4 h-auto flex flex-col">
                        <div className="min-h-max mb-5">
                            <div className="relative flex items-end">
                                <div className="flex">
                                    <span className="text-4xl font-bold text-foreground">$20</span>
                                </div>
                                <span className="text-foreground">/month</span>
                            </div>
                            <h2 className="text-xl font-semibold text-foreground-subtitle pt-5">
                                Team
                            </h2>
                            <p className="text-foreground pt-2">
                                For small teams and startups. Collaborate and ship faster with advanced features.
                            </p>
                        </div>
                        <ul role="list" className="flex flex-col gap-2 text-foreground">
                            <li className="flex gap-4 items-center">
                                <span className="bg-card text-sm text-foreground px-2 py-1 rounded-full">✓</span>
                                Unlimited private repositories
                            </li>
                            <li className="flex gap-4 items-center">
                                <span className="bg-card text-sm text-foreground px-2 py-1 rounded-full">✓</span>
                                Priority email support
                            </li>
                            <li className="flex gap-4 items-center">
                                <span className="bg-card text-sm text-foreground px-2 py-1 rounded-full">✓</span>
                                Advanced CI/CD pipelines
                            </li>
                            <li className="flex gap-4 items-center">
                                <span className="bg-card text-sm text-foreground px-2 py-1 rounded-full">✓</span>
                                5 concurrent builds
                            </li>
                            <li className="flex gap-4 items-center">
                                <span className="bg-card text-sm text-foreground px-2 py-1 rounded-full">✓</span>
                                Team management &amp; permissions
                            </li>
                            <li className="flex gap-4 items-center">
                                <span className="bg-card text-sm text-foreground px-2 py-1 rounded-full">✓</span>
                                Integrations (Slack, GitHub, etc.)
                            </li>
                        </ul>
                        <div className="mt-5 flex flex-1 items-end min-h-max">
                            <a href="#" className="relative w-full btn btn-lg justify-center before:absolute before:inset-0 before:rounded-lg before:btn-outline before:btn-outline-gray before:transition before:duration-300 active-before:scale-95 rounded-md">
                                <span className="relative text-sm font-medium text-muted-foreground">Get started</span>
                            </a>
                        </div>
                    </div>
                    {/* Enterprise Plan */}
                    <div className="relative pt-6 px-4 mt-6 lg:mt-0 h-auto flex flex-col before:absolute before:z-0 before:scale-x-[1.13] sm:before:scale-x-[1.15] lg:before:scale-x-105 before:scale-y-105 lg:before:scale-y-110 before:inset-0 before:bg-gray-950 before:border before:border-border before:rounded-xl">
                        <div className="absolute top-0 right-0 z-5 bg-gray-500/40 dark:bg-primary-900 text-white rounded-xl px-4 py-1">
                            Most Popular
                        </div>
                        <div className="min-h-max pb-5 relative z-10">
                            <div className="relative flex items-end">
                                <div className="flex">
                                    <span className="text-4xl md:text-5xl font-bold text-white">$99</span>
                                </div>
                                <span className="text-xl font-semibold text-gray20">/month</span>
                            </div>
                            <h2 className="text-xl font-semibold text-white pt-5">
                                Enterprise
                            </h2>
                            <p className="text-gray-300 pt-2">
                                For growing businesses and enterprises. Get premium support and advanced security.
                            </p>
                        </div>
                        <ul role="list" className="flex flex-col h-full gap-2 text-gray-300 relative">
                            <li className="inline-flex gap-4 items-center">
                                <span className="bg-gray-500/40 text-sm text-gray-300 px-2 py-1 rounded-full">✓</span>
                                <span>All Team features</span>
                            </li>
                            <li className="inline-flex gap-4 items-center">
                                <span className="bg-gray-500/40 text-sm text-gray-300 px-2 py-1 rounded-full">✓</span>
                                <span>Premium support (24/7)</span>
                            </li>
                            <li className="inline-flex gap-4 items-center">
                                <span className="bg-gray-500/40 text-sm text-gray-300 px-2 py-1 rounded-full">✓</span>
                                <span>Single Sign-On (SSO)</span>
                            </li>
                            <li className="inline-flex gap-4 items-center">
                                <span className="bg-gray-500/40 text-sm text-gray-300 px-2 py-1 rounded-full">✓</span>
                                <span>Audit logs &amp; compliance</span>
                            </li>
                            <li className="inline-flex gap-4 items-center">
                                <span className="bg-gray-500/40 text-sm text-gray-300 px-2 py-1 rounded-full">✓</span>
                                <span>Custom integrations</span>
                            </li>
                            <li className="inline-flex gap-4 items-center">
                                <span className="bg-gray-500/40 text-sm text-gray-300 px-2 py-1 rounded-full">✓</span>
                                <span>99.9% uptime SLA</span>
                            </li>
                        </ul>
                        <div className="pt4 flex min-h-max">
                            <a href="#" className="relative w-full btn btn-lg justify-center before:absolute before:inset-0 before:rounded-lg before:btn-solid before:btn-solid-primary before:transition before:duration-300 active-before:scale-95">
                                <span className="relative text-sm font-medium text-white">Contact sales</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
