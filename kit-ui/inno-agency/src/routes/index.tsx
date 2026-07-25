import { createFileRoute } from '@tanstack/react-router'
import { AboutUs } from '@/components/sections/about-us'
import { Cta } from '@/components/sections/cta'
import { Expertises } from '@/components/sections/expertises'
import { HeroSection } from '@/components/sections/hero-section'
import { SocialProof } from '@/components/sections/social-proof'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main>
      <HeroSection />
      <SocialProof />
      <Expertises />
      <AboutUs />
      <Cta />
    </main>
  )
}
