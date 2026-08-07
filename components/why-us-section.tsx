import { Zap, FileCheck, Handshake, LifeBuoy, Lock, UserRoundCheck, ArrowRight } from 'lucide-react'

const advantages = [
  {
    icon: Zap,
    title: 'Szybki czas reakcji',
    description: 'Reagujemy sprawnie, aby zminimalizować przerwy w pracy placówki.',
  },
  {
    icon: FileCheck,
    title: 'Profesjonalna dokumentacja',
    description: 'Każde działanie jest udokumentowane i łatwe do weryfikacji.',
  },
  {
    icon: Handshake,
    title: 'Przejrzysta współpraca',
    description: 'Jasne zasady, stałe stawki i pełna komunikacja bez niespodzianek.',
  },
  {
    icon: LifeBuoy,
    title: 'Długoterminowe partnerstwo',
    description: 'Budujemy stałe relacje oparte na zaufaniu i niezawodności.',
  },
  {
    icon: Lock,
    title: 'Bezpieczeństwo przede wszystkim',
    description: 'Ochrona danych uczniów i pracowników zgodnie z RODO.',
  },
  {
    icon: UserRoundCheck,
    title: 'Indywidualne podejście',
    description: 'Rozwiązania dopasowane do potrzeb i budżetu każdej placówki.',
  },
]

export function WhyUsSection() {
  return (
    <section className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
            Dlaczego my
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Odpowiedzialność, na której możesz polegać
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Nie sprzedajemy technologii. Bierzemy odpowiedzialność za to, by IT w Twojej placówce
            po prostu działało — dziś i za kilka lat.
          </p>
          <a
            href="#kontakt"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
          >
            Porozmawiajmy o Twojej placówce
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
          {advantages.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex flex-col bg-card p-7">
              <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
