"use client"


import ThemeSwitcher from "../elements/theme-switcher";

import { useCallback, useState } from "react";

import { ConnectOnSocial } from "../elements/connect-on-social";

import { useWindow } from "@/hooks/use-window";
import { cx } from "@/lib/utils";

import { DevolioLogoLink } from "../atoms/devolio-logo-link";
import NavItem from "../atoms/nav-item";
import { buttonStyles } from "../jk/button";
import { SiteContainer } from "../atoms/site-container";


const navItems = [
  {
    text: "Home",
    href: "/#home"
  },
  {
    text: "About",
    href: "/#about-us"
  },
  {
    text: "Portfolio",
    href: "/#portfolio"
  },
  {
    text: "Blog",
    href: "/#blog"
  },
]

export const SiteNavbar = () => {

  const { scrollY } = useWindow()
  const [navOpen, setNavOpen] = useState<boolean>(false)

  const toggleNavBar = useCallback(
    () => {
      setNavOpen(navOpen => !navOpen)
      if (typeof document !== "undefined" && typeof window !== "undefined") {
        document.body.classList.add(!navOpen ? "!overflow-y-hidden" : "overlflow-y-auto")
        if (navOpen) {
          document.body?.classList.remove("!overflow-y-hidden")
        }
      }
    },
    [navOpen],
  )

  const closeNav = useCallback(
    () => {
      setNavOpen(() => false)
      if (typeof document !== "undefined" && typeof window !== "undefined") {
        document.body.classList.remove("!overflow-y-hidden")
      }
    },
    [],
  )

  return (
    <header className={
      cx(
        "top-0 inset-x-0 z-30 transition-all ease-linear duration-300 border-b",
        scrollY > 100 ? "fixed py-1.5 bg-background/70 backdrop-blur-sm border-border" : "py-5 absolute border-transparent"
      )
    }>
      <div className={`fixed h-screen z-50 backdrop-filter backdrop-blur-md bg-gray-800/40 inset-x-0 top-0 ${navOpen ? "flex" : "hidden"}`} onClick={closeNav}></div>
      <SiteContainer className="relative">
        <nav className="flex justify-between gap-4 items-center py-3">
          <div className="min-w-max">
            <DevolioLogoLink />
          </div>

          <div className={
            ` fixed h-screen py-10 px-4 lg:px-0 lg:py-0 bg-background lg:bg-transparent top-0 z-60 w-5/6 max-w-sm lg:max-w-none lg:h-auto lg:visible lg:relative flex flex-col lg:flex-row lg:justify-between lg:w-full duration-300 ease-linear
            ${navOpen ? " visible left-0 skew-x-0" : " inivisible lg:visible -left-full lg:left-0 skew-x-6 lg:skew-x-0"}
            `
          }>
            <div className="flex lg:hidden pb-10">
              <DevolioLogoLink />
            </div>
            <ul className="flex flex-col lg:flex-row gap-5 lg:items-center w-full lg:justify-center" onClick={closeNav}>
              {navItems.map((navItem) => (
                <NavItem key={`${navItem.href} ${navItem.text}`} {...navItem} />
              ))
              }
            </ul>

            <div className="flex min-w-max pt-10 lg:pt-0">
              <a href={"#"} className={buttonStyles({ variant: "ghost", className: "flex justify-center w-full sm:w-max border border-gray-400/80 dark:border-gray-600" , size:"sm",})}>
                Contact Us
              </a>
            </div>

            <div aria-hidden={true} className="pt-20 lg:pt-0 flex flex-col lg:hidden">
              <ConnectOnSocial />
            </div>
          </div>
          <div className="min-w-max flex items-center gap-x-3">
            <ThemeSwitcher />
            <div className="flex lg:hidden">
              <button className="outline-none w-7 flex flex-col z-70 relative" onClick={toggleNavBar}>
                <span className="sr-only">toggle navbar</span>

                <span className={
                  `w-6 h-0.5 rounded-full bg-gray-500 dark:bg-gray-200 transition-all 
                  duration-300 ease-linear
                  ${navOpen ? "translate-y-1.5 rotate-40 scale-x-100" : "scale-x-50 origin-right"}`
                }>
                </span>

                <span className={
                  `w-6 mt-1 h-0.5 rounded-full bg-gray-500 dark:bg-gray-200
                  transition-all duration-300 ease-linear scale-100 origin-top-right
                  ${navOpen ? "scale-x-0 opacity-0" : ""}`
                }>
                </span>

                <span className={
                  `w-6 mt-1 h-0.5 rounded-full bg-gray-500 dark:bg-gray-200 transition-all
                    duration-300 ease-linear
                    ${navOpen ? "-translate-y-1.5 -rotate-40 scale-x-100" : "scale-x-50 origin-left"}
                `}></span>
              </button>
            </div>
          </div>
        </nav>
      </SiteContainer>
    </header>
  )
}

