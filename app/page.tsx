import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { ProblemsSection } from '@/components/problems-section'
import { WhyUsSection } from '@/components/why-us-section'
import { ProcessSection } from '@/components/process-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ProblemsSection />
        <WhyUsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
