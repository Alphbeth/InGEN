import { Zap, FileCheck, Handshake, LifeBuoy, Lock, UserRoundCheck, ArrowRight } from 'lucide-react'

const advantages = [
  {
    icon: Zap,
    title: 'Bezpieczeństwo danych',
    description: 'Chronimy najważniejsze dane placówki i wspieramy ich bezpieczne przetwarzanie.',
  },
  {
    icon: FileCheck,
    title: 'Uporządkowana infrastruktura',
    description: 'Dbamy o przejrzystą konfigurację sieci, sprzętu i systemów.',
  },
  {
    icon: Handshake,
    title: 'Stała opieka',
    description: 'Zapewniamy bieżącą administrację infrastruktury informatycznej.',
  },
  {
    icon: LifeBuoy,
    title: 'Przejrzyste zasady współpracy',
    description: 'Ustalamy jasny zakres działań i zasady komunikacji.',
  },
  {
    icon: Lock,
    title: 'Dokumentacja techniczna',
    description: 'Prowadzimy aktualną dokumentację infrastruktury IT.',
  },
  {
    icon: UserRoundCheck,
    title: 'Niezwłoczna reakcja na zgłoszenia',
    description: 'Pomagamy w rozwiązywaniu bieżących problemów technicznych.',
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
            Dlaczego warto współpracować z InGEN Systems?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Stawiamy na długoterminową współpracę, bezpieczeństwo danych oraz uporządkowaną infrastrukturę informatyczną.
          </p>
          <a
            href="#kontakt"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
          >
            Skontaktuj się z nami
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
