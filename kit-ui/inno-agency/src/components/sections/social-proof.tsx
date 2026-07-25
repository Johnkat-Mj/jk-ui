


export const SocialProof = () => {
  return (
    <section className="bg-card/50 dark:bg-card/20 py-10 relative">
      <div className="absolute inset-0 ui-grid ui-striped-overlay-mask-reverse [--unify-ui-grid-width:24px] [--unify-ui-grid-height:24px] text-muted-foreground/10 dark:text-primary/10 opacity-50">
      </div>
      <span aria-hidden="true" className="absolute bottom-10 right-8 w-14 h-20 rotate-45 mx-auto bg-linear-to-bl from-primary blur-3xl flex opacity-30 dark:opacity-60" />
      <span aria-hidden="true" className="absolute top-10 left-8 w-14 h-20 -rotate-45 mx-auto bg-linear-to-bl from-primary blur-3xl flex opacity-30 dark:opacity-60" />
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col relative">
        <span className="mx-auto text-center text-muted-foreground text-sm">
          Build lasting relationships with complete customer solutions
        </span>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-7">
          <div className="bg-background/40 backdrop-blur-sm backdrop-saturate-150 border border-border-strong/40 shadow-lg shadow-bg-subtle/50 relative before:absolute before:inset-0.5 before:border before:border-border/60 before:inner-radius p-(--card-padding) rounded-(--card-radius) [--card-padding:--spacing(0.5)] [--card-radius:var(--radius-lg)]">
            <div className="px-5 lg:px-6 lg:pt-6 pt-5 flex justify-between items-start relative">
              <div className="flex flex-col flex-1">
                <h3 className="text-xl font-medium text-foreground">+450</h3>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="bg-muted/80 rounded-md size-11 text-foreground relative flex items-center justify-center text-xl">
                <span className="flex iconify ph--users" />
              </div>
            </div>
            <div className="relative px-5 lg:px-6 pb-5 mt-5">
              <p className="text-muted-foreground text-sm">
                We take pride in building lasting partnerships and delivering
                exceptional results for every client.
              </p>
            </div>
          </div>
          <div className="bg-background/40 backdrop-blur-sm backdrop-saturate-150 border border-border-strong/40 shadow-lg shadow-bg-subtle/50 relative before:absolute before:inset-0.5 before:border before:border-border/60 before:inner-radius p-(--card-padding) rounded-(--card-radius) [--card-padding:--spacing(0.5)] [--card-radius:var(--radius-lg)]">
            <div className="px-5 lg:px-6 lg:pt-6 pt-5 flex justify-between items-start relative">
              <div className="flex flex-col flex-1">
                <h3 className="text-xl font-medium text-foreground">98%</h3>
                <p className="text-sm text-muted-foreground">Retention Rate</p>
              </div>
              <div className="bg-muted/80 rounded-md size-11 text-foreground relative flex items-center justify-center text-xl">
                <span className="flex iconify ph--hands-praying" />
              </div>
            </div>
            <div className="relative px-5 lg:px-6 pb-5 mt-5">
              <p className="text-muted-foreground text-sm">
                Our clients trust us to consistently drive growth, keeping them with
                us for the long haul.
              </p>
            </div>
          </div>
          <div className="bg-background/40 backdrop-blur-sm backdrop-saturate-150 border border-border-strong/40 shadow-lg shadow-bg-subtle/50 relative before:absolute before:inset-0.5 before:border before:border-border/60 before:inner-radius p-(--card-padding) rounded-(--card-radius) [--card-padding:--spacing(0.5)] [--card-radius:var(--radius-lg)]">
            <div className="px-5 lg:px-6 lg:pt-6 pt-5 flex justify-between items-start relative">
              <div className="flex flex-col flex-1">
                <h3 className="text-xl font-medium text-foreground">10M+</h3>
                <p className="text-sm text-muted-foreground">Leads Generated</p>
              </div>
              <div className="bg-muted/80 rounded-md size-11 text-foreground relative flex items-center justify-center text-xl">
                <span className="flex iconify ph--chart-line-up" />
              </div>
            </div>
            <div className="relative px-5 lg:px-6 pb-5 mt-5">
              <p className="text-muted-foreground text-sm">
                Driving high-quality leads that convert, fueling your business
                expansion and success.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-7 flex justify-center items-center gap-6 flex-wrap">
          <a href={"/"}>
            <span className="sr-only">Name</span>
            <img src="/logos/airbnb.svg" alt="" className="h-8 w-auto grayscale" />
          </a>
          <a href={"/"}>
            <span className="sr-only">Name</span>
            <img src="/logos/slack.png" alt="" className="h-8 w-auto grayscale" />
          </a>
          <a href={"/"}>
            <span className="sr-only">Name</span>
            <img src="/logos/spotify.png" alt="" className="h-8 w-auto grayscale" />
          </a>
          <a href={"/"}>
            <span className="sr-only">Name</span>
            <img src="/logos/airbnb.svg" alt="" className="h-8 w-auto grayscale" />
          </a>
        </div>
      </div>
    </section>
  )
}