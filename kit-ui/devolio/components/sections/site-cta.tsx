"use client"

import { ColorifySpan } from "@/components/atoms/colorify-span";

import { SiteContainer } from "@/components/atoms/site-container";
import { SvgPattern } from "@/components/atoms/svg-pattern";

import Link from "next/link";
import { buttonStyles } from "../jk/button";

export const SiteCta = () => {
  return (
    <section className="py-14 sm:py-20 md:py-32">

      <SiteContainer className="relative">
        <div className="p-10 flex sm:justify-between sm:items-center gap-6 flex-col sm:flex-row relative">
          <SvgPattern className="inset-0" />
          <div className="max-w-md md:max-w-xl relative">
            <span className="text-primary font-medium">
              Start Your Project
            </span>
            <h2 className="text-2xl md:text-3xl/tight lg:text-4xl/tight xl:text-5xl/tight font-bold text-fg-title mt-6 text-balance">
              Let's <ColorifySpan text="Create" /> Something Amazing Together.
            </h2>
          </div>
          <div className="min-w-max flex relative">
            <Link href={"#"} className={buttonStyles({})} >
              Get Started
            </Link>
          </div>
        </div>

      </SiteContainer>
    </section>
  )
}

export default SiteCta
