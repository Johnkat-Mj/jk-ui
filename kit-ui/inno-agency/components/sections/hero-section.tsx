"use client"

import Link from "next/link"
import { buttonStyles } from "../jk/button"
import Image from "next/image"



export const HeroSection = () => {
  return (
    <section className="relative pt-32 lg:pt-36 pb-16">
      <div
        className="absolute inset-0 ui-grid ui-striper-overlay-mask [--unify-ui-grid-width:24px] [--unify-ui-grid-height:24px] text-fg/10 dark:text-primary/10 opacity-50"
      >
      </div>
      <div
        className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-16"
      >
        <div
          className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
        >
          <span className="px-2 py-0.5 rounded-lg bg-muted border border-border/40 text-fg-muted text-sm">
            Special Social
          </span>
          <h1
            className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight text-balance font-bold text-transparent bg-clip-text bg-linear-to-br from-gray-900 dark:from-white from-20% via-fg-muted via-30% to-foreground mt-8"
          >
            Revolutionize <span className=""> Your Brand</span> with Powerful Marketing!
          </h1>
          <p className="mt-8 text-fg-muted max-w-md">
            Boost your brand’s visibility, engage your audience, and drive real
            results with cutting-edge social media marketing strategies. It’s time
            to stand out and grow like never before!
          </p>
          <div
            className="mt-10 w-full flex max-w-md mx-auto lg:mx-0 lg:max-w-none gap-3 items-center flex-wrap justify-center lg:justify-start"
          >
            <Link
              href="#"
              className={buttonStyles({className:"justify-center"})}
            >
              Get In Touch
            </Link>

            <Link
              href="#"
              className={buttonStyles({variant:"outline", className:"justify-center"})}
            >
              See our work
            </Link>
          </div>
        </div>

        <div
          className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl"
        >
          <Image
            src="/hero-img.webp"
            alt="Hero image"
            width="2350"
            height="2359"
            className="lg:absolute lg:w-full lg:h-full rounded-lg object-cover lg:max-h-none max-h-96 dark:grayscale-30"
          />
          <div
            className="absolute w-66 left-1/2 -translate-x-1/2 -bottom-6 p-2 bg-bg/80 backdrop-blur-md border border-border/50 rounded-lg shadow-sm shadow-bg-muted/40 dark:shadow-transparent flex items-center before:absolute before:inset-x-3 before:h-2 before:flex before:bg-bg/80 before:border before:border-border/50 before:rounded-b-xl before:-bottom-2 before:shadow-sm before:shadow-muted/40 dark:before:shadow-transparent"
          >
            <span
              aria-hidden="true"
              className="size-12 flex items-center justify-center rounded-[calc(var(--radius-lg)-2px)] bg-muted/30 text-fg mr-4 border border-border/70"
            >
              <span aria-hidden className="text-2xl iconify ph--smiley"></span>
            </span>
            <div className="flex flex-col">
              <span className="font-semibold text-xl text-fg">+20</span>
              <span className="text-sm text-fg-muted">Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}