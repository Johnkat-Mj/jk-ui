import React from 'react'

export const Cta02 = () => {
  return (
    <section className="py32 relative mxa wfull max-w-7xl">
      <div className="bg-background b b-border rd-xl p10 sm-p14 !pb0 flex flex-col md-flex-row gap-14 overflow-hidden">
        <div className="space-y-8 max-w-lg md-max-w-none md-w6/12 lg-w2/5 md-py8">
          <h1 className="text-3xl font-semibold text-foreground">
            Join 2,000+ Developers Building Faster
          </h1>
          <p className="text-foreground">
            Supercharge your workflow with our all-in-one Dev Tool SaaS. Collaborate, deploy, and scale with confidence.
          </p>
          <ul className="text-muted-foreground grid grid-cols-2 gap-5">
            <li className="flex items-center gap-x-3">
              <span className="ui-soft ui-soft-primary p0.5 rd">
                <span className="i-ph-check flex" />
              </span>
              Unlimited private repositories
            </li>
            <li className="flex items-center gap-x-3">
              <span className="ui-soft ui-soft-primary p0.5 rd">
                <span className="i-ph-check flex" />
              </span>
              Built-in CI/CD pipelines
            </li>
            <li className="flex items-center gap-x-3">
              <span className="ui-soft ui-soft-primary p0.5 rd">
                <span className="i-ph-check flex" />
              </span>
              Team collaboration tools
            </li>
            <li className="flex items-center gap-x-3">
              <span className="ui-soft ui-soft-primary p0.5 rd">
                <span className="i-ph-check flex" />
              </span>
              Cloud-based &amp; secure
            </li>
            <li className="flex items-center gap-x-3">
              <span className="ui-soft ui-soft-primary p0.5 rd">
                <span className="i-ph-check flex" />
              </span>
              API &amp; integrations
            </li>
            <li className="flex items-center gap-x-3">
              <span className="ui-soft ui-soft-primary p0.5 rd">
                <span className="i-ph-check flex" />
              </span>
              24/7 developer support
            </li>
          </ul>
          <div className="flex items-center">
            <a href="#" className="btn btn-lg btn-solid btn-solid-primary text-white rd-lg">
              Start Free Trial
            </a>
          </div>
        </div>
        <div className="flex-1 relative w-full aspect-[4/2] md-aspect-auto pt4 px4 bg-gradient-to-br from-primary/60 to-accent/40 overflow-hidden rd-t-lg">
          <img src="/images/dash-light.webp" alt="cover image" width={1800} className="w-full h-auto" />
        </div>
      </div>
    </section>
  )
}
