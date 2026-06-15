

export const Content01 = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="px-5 sm:px-10 md:px-12 lg:px-5 lg:max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-16">
        <div className="md:py-16 lg:py-20 md:w-1/2 xl:w-[45%]">
          <h2 className="text-fg-title font-medium text-3xl/snug max-w-xl">
            Automate Your Growth and Engagement on LinkedIn
          </h2>
          <p className="mt-6 max-w-md text-fg-muted">
            Scale your personal brand with our intelligent platform. Drive concrete opportunities continuously and completely on autopilot.
          </p>
          <ul className="mt-7 border-t border-border-card/70 pt-6 grid sm:grid-cols-2 gap-6">
            <li className="space-y-3">
              <h3 className="text-xl font-medium text-fg-title">
                Our Platform
              </h3>
              <p className="text-fg">
                Powerful tools engineered to maximize your visibility and capture your target audience's attention.
              </p>
            </li>
            <li className="space-y-3">
              <h3 className="text-xl font-medium text-fg-title">
                Your Analytics
              </h3>
              <p className="text-fg">
                Track your performance in real time with an intuitive, ROI-driven analytics dashboard.
              </p>
            </li>
          </ul>
          <div className="mt-8 flex">
            <a href="#" className="btn btn-lg btn-solid btn-solid-primary text-white rounded-xl">
              Start Free Trial
            </a>
          </div>
        </div>
        <div className="flex-1 lg:pl-20 relative flex justify-center">
          <div className="w-[calc(100%-2rem)] md:h-full flex justify-center">
            <img src="/grow-perf.webp" alt="Growing business" width={1920} height={1200} className="w-full min-h-[25rem] md:min-h-auto md:h-full object-cover relative rounded-xl" />
          </div>
          <div className="bg-bg overflow-hidden shadow-lg shadow-bg-subtle/60 border border-border flex items-start gap-3 p-4 rounded-xl absolute -left-4 sm:left-8 lg:left-12 top-10">
            <span>
              <span className="iconify ph--eye flex text-fg" />
            </span>
            <div className="flex flex-col">
              <h3 className="font-medium text-fg-title">
                Profile Views
              </h3>
              <p className="text-fg-muted text-sm">+20</p>
            </div>
          </div>
          <div className="select-none pointer-events-none w-54 flex flex-col gap-2 bg-bg overflow-hidden shadow-lg shadow-bg-subtle/60 border border-border rounded-xl absolute right-0 bottom-4">
            <div className="flex justify-between items-center pt-5 px-5">
              <h3 className="font-medium text-fg-title">
                Conversions
              </h3>
              <p className="text-fg-muted text-sm">500</p>
            </div>
            <span className="px-5 pb-10 text-success flex items-center gap-x-2">
              <span className="flex iconify ph--trend-up" />
              <span className="text-xl font-semibold">100%</span>
            </span>
            <svg width={606} height={393} className="w-auto h-20 flex absolute -bottom-4 right-0" viewBox="0 0 606 393" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.1" d="M28 234.11C10.2458 236.876 14 239.11 3 244.61V392.11H603V128.61C603 128.61 586.463 164.635 573.5 163.11C553.433 160.75 562.16 142.75 542 144.11C527.01 145.121 524.5 192.822 503 191.61C475.84 190.08 486.508 166.365 459.5 163.11C440.533 160.825 441.097 126.106 422 125.61C392.497 124.845 388.346 96.4591 363 94.1102C303.182 88.5669 357.962 -0.558061 298 3.11016C239.487 6.68972 304.804 150.211 246.5 144.11C231.816 142.574 225.625 129.091 211 131.11C192.938 133.604 194.429 157.754 177 163.11C154.217 170.112 142.294 139.063 119 144.11C96.6854 148.945 97.8322 182.547 75 182.61C44.2521 182.695 58.3815 229.376 28 234.11Z" fill="url(#paint0_linear_257_73)" />
              <path d="M3 244.61C14 239.11 10.2458 236.876 28 234.11C58.3815 229.376 44.2521 182.695 75 182.61C97.8322 182.547 96.6854 148.945 119 144.11C142.294 139.063 154.217 170.112 177 163.11C194.429 157.754 192.938 133.604 211 131.11C225.625 129.091 231.816 142.574 246.5 144.11C304.804 150.211 239.487 6.68972 298 3.11016C357.962 -0.558061 303.182 88.5669 363 94.1102C388.346 96.4591 392.497 124.845 422 125.61C441.097 126.106 440.533 160.825 459.5 163.11C486.508 166.365 475.84 190.08 503 191.61C524.5 192.822 527.01 145.121 542 144.11C562.16 142.75 553.433 160.75 573.5 163.11C586.463 164.635 603 128.61 603 128.61" stroke="url(#paint1_linear_257_73)" strokeWidth={5} strokeLinecap="round" />
              <defs>
                <linearGradient id="paint0_linear_257_73" x1={303} y1={3} x2={303} y2="392.11" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#10b981" />
                  <stop offset={1} stopColor="#047857" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="paint1_linear_257_73" x1={303} y1={3} x2={303} y2="244.61" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#10b981" />
                  <stop offset={1} stopColor="#047857" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>


  )
}
