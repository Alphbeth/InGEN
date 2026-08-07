import Image from 'next/image'
import { ArrowRight, ShieldCheck, Clock, FileCheck } from 'lucide-react'

const trustPoints = [
  { icon: Clock, label: 'Niezwłoczna reakcja' },
  { icon: ShieldCheck, label: 'Bezpieczeństwo danych' },
  { icon: FileCheck, label: 'Pełna dokumentacja' },
]

export function HeroSection() {
  return (
    <section id="start" className="relative overflow-hidden border-b border-border/70">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-dot-grid opacity-60 mask-fade-b"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 md:px-6 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="flex flex-col items-start animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium tracking-wide text-secondary-foreground shadow-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/50" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Profesjonalna opieka informatyczna dla szkół
          </span>

          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            Twoja szkoła uczy.
            <span className="block text-muted-foreground">
              My dbamy o całą infrastrukturę&nbsp;IT.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
            InGEN Systems zapewnia kompleksową opiekę informatyczną dla szkół — administrację sieci
            i komputerów, bezpieczeństwo danych, kopie zapasowe, dokumentację infrastruktury oraz
            bieżące wsparcie techniczne.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Skontaktuj się z nami
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#uslugi"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3.5 text-base font-semibold text-foreground shadow-sm transition-colors hover:bg-secondary"
            >
              Poznaj ofertę
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {trustPoints.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium text-secondary-foreground">
                <Icon className="size-4 text-accent" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-rise [animation-delay:120ms]">
          <div
            className="absolute -inset-x-6 -top-8 bottom-6 -z-10 rounded-[2rem] bg-gradient-to-b from-secondary to-transparent"
            aria-hidden="true"
          />
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_1px_0_0_var(--color-border),0_24px_60px_-28px_rgba(15,20,35,0.28)]">
            <div className="flex items-center gap-1.5 border-b border-border/70 bg-secondary/50 px-4 py-3">
              <span className="size-2.5 rounded-full bg-border" />
              <span className="size-2.5 rounded-full bg-border" />
              <span className="size-2.5 rounded-full bg-border" />
              <span className="ml-2 text-xs font-medium text-muted-foreground">
                infrastruktura.szkola
              </span>
            </div>
            <Image
              src="/images/hero-infrastructure.png"
              alt="Ilustracja infrastruktury IT szkoły: budynek, serwerownia, przełączniki sieciowe i sieć WiFi"
              width={1000}
              height={820}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <StatStrip />
    </section>
  )
}

const stats = [
  { value: '100%', label: 'Udokumentowanej infrastruktury' },
  { value: 'Niezwłocznie', label: 'Reakcja na zgłoszenie' },
  { value: '24/7', label: 'Monitoring kluczowych systemów' },
  { value: '1', label: 'Odpowiedzialny partner IT' },
]

function StatStrip() {
  return (
    <div className="border-t border-border/70 bg-card/60">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-border/70 px-4 md:grid-cols-4 md:divide-y-0 md:px-6">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-1 px-2 py-6 md:px-6">
            <dt className="order-2 text-sm leading-snug text-muted-foreground">{s.label}</dt>
            <dd className="order-1 font-heading text-3xl font-extrabold tracking-tight text-foreground">
              {s.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
