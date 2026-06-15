
export const Pricing01 = () => {
    return (
       <section className="py-20 lg:py-32">
  <div className="px-5 sm:px-10 md:px-12 lg:px-5 lg:max-w-7xl mx-auto w-full flex flex-col gap-16">
    <div className="space-y-3 max-w-xl mx-auto flex flex-col text-center">
      <h2 className="text-fg-title font-medium text-3xl md-text-4xl/tight">
        CRM Plans &amp; Pricing
      </h2>
      <p className="mx-auto max-wmd text-fg-muted">
        Choose the plan that fits your business. All plans include core CRM
        features, secure cloud storage, and responsive support.
      </p>
    </div>
    <div className="mx-auto max-w-lg w-full md:max-w-4xl grid md:grid-cols-2 gap-6">
      {/* Essential Plan */}
      <div className="bg-bg border border-border-strong/40 shadow-lg shadow-bg-subtle/50 relative before:absolute before:inset-1 before:bg-bg-surface/40 before:inner-radius ui-card [--card-radius:var(--radius-3xl)] [--card-padding:--spacing(1)] pb-8 space-y-6">
        <div className="p-6 md:p-7 inner-radius bg-bg border border-border shadow-lg shadow-bg-muted/20 relative">
          <div className="relative">
            <span className="rounded-xl size-10 flex items-center justify-center ui-subtle ui-subtle-gray">
              <span className="flex iconify ph--briefcase" />
            </span>
          </div>
          <h3 className="font-medium text-fg-title text-lg mt-2">
            Essential
          </h3>
          <p className="text-fg-muted text-sm mt-1">
            All the basics for small teams to organize leads and manage
            customers.
          </p>
          <div className="flex items-end gap-x1 mt-3">
            <span className="flex items-end text-3xl sm:text-4xl lg:text-5xl font-semibold text-fg-title">
              $29
              <span className="pl-2 flex text-xl">/mo</span>
            </span>
          </div>
        </div>
        <div className="flex items-center flex-col gap-3 text-center px-6 md:px-7 relative">
          <button className="btn btn-lg inner-radius w-full justify-center btn-outline btn-outline-gray">
            Choose this plan
          </button>
          <div className="text-fg-muted text-center flex gap-x-2 items-center">
            <span className="flex iconify ph--arrow-right" />
            <a href="#" className="underline underline-offset-2 underline-dashed">
              Or contact sales
            </a>
          </div>
        </div>
        <div className="px-6 md:px-7 relative">
          <ul className="space-y-2 text-fg">
            <li className="flex items-start gap-x-4 rounded-3xl">
              <span className="flex min-w-max mt-0.5">
                <span aria-hidden="true" className="flex iconify ph--check text-sm" />
              </span>
              <h3 className="flex-1">Up to 3 team members</h3>
            </li>
            <li className="flex items-start gap-x-4 rounded-3xl">
              <span className="flex min-w-max mt-0.5">
                <span aria-hidden="true" className="flex iconify ph--check text-sm" />
              </span>
              <h3 className="flex-1">1,000 contacts</h3>
            </li>
            <li className="flex items-start gap-x-4 rounded-3xl">
              <span className="flex min-w-max mt-0.5">
                <span aria-hidden="true" className="flex iconify ph--check text-sm" />
              </span>
              <h3 className="flex-1">Basic reporting</h3>
            </li>
            <li className="flex items-start gap-x-4 rounded-3xl">
              <span className="flex min-w-max mt-0.5">
                <span aria-hidden="true" className="flex iconify ph--check text-sm" />
              </span>
              <h3 className="flex-1">Email support</h3>
            </li>
            <li className="flex items-start gap-x-4 rounded-3xl">
              <span className="flex min-w-max mt-0.5">
                <span aria-hidden="true" className="flex iconify ph--check text-sm" />
              </span>
              <h3 className="flex-1">Mobile app access</h3>
            </li>
          </ul>
        </div>
      </div>
      {/* Premium Plan */}
      <div className="bg-bg border border-border-strong/40 shadow-lg shadow-bg-subtle/50 relative before:absolute before:inset-1 before:bg-bg-surface/40 before:inner-radius ui-card [--card-radius:var(--radius-3xl)] [--card-padding:--spacing(1)] pb-8 space-y-6">
        <div className="p-6 md:p-7 inner-radius bg-bg border border-border shadow-lg shadow-bg-muted/20 relative">
          <div className="relative">
            <span className="rounded-xl size-10 flex items-center justify-center ui-subtle ui-subtle-gray">
              <span className="flex iconify ph--briefcase" />
            </span>
          </div>
          <h3 className="font-medium text-fg-title text-lg mt-2">
            Premium
            <span className="ui-subtle ui-subtle-primary badge-md rounded-xl ml-1">Most Popular</span>
          </h3>
          <p className="text-fg-muted text-sm mt-1">
            Advanced features for growing teams and businesses that need more
            power.
          </p>
          <div className="flex items-end gap-x1 mt-3">
            <span className="flex items-end text-3xl sm:text-4xl lg:text-5xl font-semibold text-fg-title">
              $79
              <span className="pl-2 flex text-xl">/mo</span>
            </span>
          </div>
        </div>
        <div className="flex items-center flex-col gap-3 text-center px-6 md:px-7 relative">
          <button className="btn btn-lg inner-radius w-full justify-center btn-solid btn-solid-primary text-white">
            Choose this plan
          </button>
          <div className="text-fg-muted text-center flex gap-x-2 items-center">
            <span className="flex iconify ph--arrow-right" />
            <a href="#" className="underline underline-offset-2 underline-dashed">
              Or contact sales
            </a>
          </div>
        </div>
        <div className="px-6 md:px-7 relative">
          <ul className="space-y-2 text-fg">
            <li className="flex items-start gap-x-4 rounded-3xl">
              <span className="flex min-w-max mt-0.5">
                <span aria-hidden="true" className="flex iconify ph--check text-sm" />
              </span>
              <h3 className="flex-1">Up to 10 team members</h3>
            </li>
            <li className="flex items-start gap-x-4 rounded-3xl">
              <span className="flex min-w-max mt-0.5">
                <span aria-hidden="true" className="flex iconify ph--check text-sm" />
              </span>
              <h3 className="flex-1">10,000 contacts</h3>
            </li>
            <li className="flex items-start gap-x-4 rounded-3xl">
              <span className="flex min-w-max mt-0.5">
                <span aria-hidden="true" className="flex iconify ph--check text-sm" />
              </span>
              <h3 className="flex-1">Advanced reporting &amp; analytics</h3>
            </li>
            <li className="flex items-start gap-x-4 rounded-3xl">
              <span className="flex min-w-max mt-0.5">
                <span aria-hidden="true" className="flex iconify ph--check text-sm" />
              </span>
              <h3 className="flex-1">Automations &amp; workflows</h3>
            </li>
            <li className="flex items-start gap-x-4 rounded-3xl">
              <span className="flex min-w-max mt-0.5">
                <span aria-hidden="true" className="flex iconify ph--check text-sm" />
              </span>
              <h3 className="flex-1">API access</h3>
            </li>
            <li className="flex items-start gap-x-4 rounded-3xl">
              <span className="flex min-w-max mt-0.5">
                <span aria-hidden="true" className="flex iconify ph--check text-sm" />
              </span>
              <h3 className="flex-1">Priority support</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}
