export const Content02 = () => {
  return (
    <section className="py-20 lg:py-32 px-5 sm:px-10 md:px-12 lg:px-5 lg:max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-16 lg:gap-20">
      <div className="flex md:flex-1 relative overflow-hidden">
        <img src="/images/happy-work.webp" alt="creative agency " width={1300} loading="lazy" className="w-full md:h-full object-cover object-top rounded-ui md:absolute" />
      </div>
      <div className="md:w-1/2 text-fg md:py-8 xl:py-12">
        <span className="badge-sm rounded-ui ui-outline ui-outline-gray ">
          The AgenceX Edge
        </span>
        <h2 className="text-fg-title font-medium text-3xl/snug lg:text-4xl text-balance max-w-xl mt-6">
          Transforming Visions into Market Leaders
        </h2>
        <div className="mt-7 space-y-2 text-fg">
          <p>
            We are a team of passionate marketers dedicated to elevating your brand. With years of experience, we
            turn your vision into reality.
          </p>
          <p>
            We are a team of passionate marketers dedicated to elevating your brand. With years of experience, we
            turn your vision into reality.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 mt-7">
          <a href="mailto:" className="flex gap-x-5 items-start p-2 rounded-ui bg-bg-muted/70 border border-border/70">
            <span className="size-12 rounded-md bg-bg border border-border d-flex-place-center text-xl text-fg">
              <span aria-hidden="true" className="iconify ph--at" />
            </span>
            <div className="]flex flex-col flex-1">
              <p className="text-fg-muted text-sm">Send us a mail</p>
              <p className="font-medium text-fg-title">
                info@groom.doe
              </p>
            </div>
          </a>
          <a href="mailto:" className="flex gap-x-5 items-start p-2 rounded-ui bg-bg-muted/70 border border-border/70">
            <span className="size-12 rounded-md bg-bg border border-border d-flex-place-center text-xl text-fg">
              <span aria-hidden="true" className="iconify ph--phone" />
            </span>
            <div className="flex flex-col flex-1">
              <p className="text-fg-muted text-sm">Call us</p>
              <p className="font-medium text-fg-title">
                +243 xx xx xx xxx
              </p>
            </div>
          </a>
        </div>
        <div className="flex mt-8">
          <a href="#" className="btn btn-lg btn-solid btn-solid-primary text-white rounded-ui">
            Know more
          </a>
        </div>
      </div>
    </section>
  )
}
