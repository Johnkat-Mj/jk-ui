
export const Pricing02 = () => {
    return (
        <section className="py-32">
            <div className="px-5 sm:px-10 md:px-12 lg:px-5 lg:max-w-7xl mx-auto w-full">
                <div className="flex flex-col space-y-12">
                    <div className="flex gap-10 flex-col items-center">
                        <div className="mx-auto max-w-3xl text-center space-y-8">
                            <span className="px-3 py-0.5 rounded-full ui-subtle ui-subtle-gray">
                                Pricing
                            </span>
                            <h1 className="font-bold text-3xl md:text-4xl/tight text-fg-title">
                                Flexible plans for every business
                            </h1>
                        </div>
                        <p className="max-w-lg mx-auto text-fg text-center">
                            Choose the marketing package that fits your goals. All plans include a dedicated account manager and monthly reporting.
                        </p>
                    </div>
                    <div className="grid gap-8 items-center sm:grid-cols-2 lg:grid-cols-3">
                        {/* Starter Plan */}
                        <div className="md-h-auto flex flex-col rounded-3xl p-5 sm:p-6 xl:p-10 border border-border">
                            <span className="font-semibold text-2xl text-fg-subtitle">
                                Starter
                            </span>
                            <div className="mt-2 font-bold text-2xl md:text-3xl text-fg-title">
                                $450
                            </div>
                            <p className="mt-5 sm:mt-6 text-fg">
                                Perfect for small businesses looking to boost their online presence.
                            </p>
                            <ul className="flex flex-col space-y-3 mt-5 sm:mt-6 text-fg-muted">
                                <li className="flex items-center gap-x-3">
                                    <span className="flex iconify ph--check opacity-70" />
                                    <span className="flex-1">
                                        Social media management (2 platforms)
                                    </span>
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span className="flex iconify ph--check opacity-70" />
                                    <span className="flex-1">
                                        4 custom posts per month
                                    </span>
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span className="flex iconify ph--check opacity-70" />
                                    <span className="flex-1">
                                        Monthly analytics report
                                    </span>
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span className="flex iconify ph--check opacity-70" />
                                    <span className="flex-1">
                                        Email support
                                    </span>
                                </li>
                            </ul>
                            <div className="mt-5 sm:mt-6">
                                <button className="btn btn-lg btn-outline btn-outline-gray rounded-full w-full justify-center">
                                    Get started <span className="flex iconify ph--arrow-right" />
                                </button>
                            </div>
                        </div>
                        {/* Growth Plan */}
                        <div className="rounded-3xl flex flex-col bg-gray-900 p-5 sm:p-6 xl:p-10 border border-gray-800 dark:border-border">
                            <span className="font-semibold text-2xl text-gray-100">
                                Growth
                            </span>
                            <div className="font-bold text-white text-2xl md:text-3xl">$950</div>
                            <p className="mt-5 sm:mt-6 text-gray-200">
                                For growing brands that want to scale their marketing and reach new audiences.
                            </p>
                            <ul className="flex flex-col space-y-3 mt-5 sm:mt-6 text-gray-300">
                                <li className="flex items-center gap-x-3">
                                    <span className="text-white"><span className="flex iconify ph--check" /></span>
                                    Social media management (4 platforms)
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span className="text-white"><span className="flex iconify ph--check" /></span>
                                    12 custom posts per month
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span className="text-white"><span className="flex iconify ph--check" /></span>
                                    Paid ads management (Google &amp; Meta)
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span className="text-white"><span className="flex iconify ph--check" /></span>
                                    Bi-weekly analytics report
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span className="text-white"><span className="flex iconify ph--check" /></span>
                                    Strategy call (1x/month)
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span className="text-white"><span className="flex iconify ph--check" /></span>
                                    Priority email support
                                </li>
                            </ul>
                            <div className="mt-5 sm:mt-6 w-full">
                                <button className="btn btn-lg btn-solid btn-solid-primary text-white rounded-full justify-center w-full">
                                    Get started <span className="flex iconify ph--arrow-right" />
                                </button>
                            </div>
                        </div>
                        {/* Pro Plan */}
                        <div className="md-h-auto flex flex-col rounded-3xl p-5 sm:p-6 xl:p-10 border border-border">
                            <span className="font-semibold text-2xl text-fg-subtitle">
                                Pro
                            </span>
                            <div className="mt-2 font-bold text-2xl md:text-3xl text-fg-title">
                                $1800
                            </div>
                            <p className="mt-5 sm:mt-6 text-fg">
                                Best for established businesses and agencies seeking full-service marketing.
                            </p>
                            <ul className="flex flex-col space-y-3 mt-5 sm:mt-6 text-fg-muted">
                                <li className="flex items-center gap-x-3">
                                    <span className="flex iconify ph--check opacity-70" />
                                    <span className="flex-1">
                                        Social media management (all platforms)
                                    </span>
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span className="flex iconify ph--check opacity-70" />
                                    <span className="flex-1">
                                        Unlimited custom posts
                                    </span>
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span className="flex iconify ph--check opacity-70" />
                                    <span className="flex-1">
                                        Paid ads management (Google, Meta, LinkedIn)
                                    </span>
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span className="flex iconify ph--check opacity-70" />
                                    <span className="flex-1">
                                        Weekly analytics report
                                    </span>
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span className="flex iconify ph--check opacity-70" />
                                    <span className="flex-1">
                                        Dedicated strategist
                                    </span>
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span className="flex iconify ph--check opacity-70" />
                                    <span className="flex-1">
                                        Phone &amp; priority support
                                    </span>
                                </li>
                            </ul>
                            <div className="mt-5 sm:mt-6 w-full">
                                <button className="btn btn-lg btn-outline btn-outline-gray rounded-full w-full justify-center">
                                    Get started <span className="flex iconify ph--arrow-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
