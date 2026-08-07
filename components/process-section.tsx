import { Search, ClipboardCheck, Rocket, LifeBuoy } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Poznajmy potrzeby szkoły',
    description: 'Rozmawiamy o bieżących potrzebach placówki i jej infrastrukturze IT.',
  },
  {
    icon: ClipboardCheck,
    title: 'Analiza infrastruktury',
    description: 'Sprawdzamy stan sieci, urządzeń oraz wykorzystywanych systemów.',
  },
  {
    icon: Rocket,
    title: 'Plan działań',
    description: 'Ustalamy zakres działań i priorytety dla infrastruktury IT.',
  },
  {
    icon: LifeBuoy,
    title: 'Rozpoczęcie współpracy',
    description: 'Rozpoczynamy bieżącą opiekę informatyczną nad placówką.',
  },
]

export function ProcessSection() {
  return (
    <section id="o-nas" className="scroll-mt-16 bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
            Jak pracujemy
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Jak wygląda współpraca?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-primary-foreground/70">
            Przejrzysty proces współpracy pozwala sprawnie rozpocząć opiekę informatyczną nad placówką i zapewnić ciągłość działania infrastruktury IT.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* connecting line */}
          <span
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-primary-foreground/15 md:block"
            aria-hidden="true"
          />
          {steps.map(({ icon: Icon, title, description }, index) => (
            <li key={title} className="relative flex flex-col">
              <div className="flex items-center gap-4 md:block">
                <span className="relative z-10 flex size-12 items-center justify-center rounded-2xl border border-primary-foreground/15 bg-primary text-accent shadow-lg">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-heading text-sm font-semibold tracking-widest text-primary-foreground/40 md:mt-6 md:block">
                  KROK {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex flex-col items-start gap-4 rounded-3xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-7 sm:flex-row sm:items-center sm:justify-between md:p-8">
          <div>
            <h3 className="font-heading text-xl font-semibold">Rozpocznijmy współpracę</h3>
            <p className="mt-1 text-sm text-primary-foreground/70">
              Skontaktuj się z nami, aby omówić potrzeby Twojej placówki.
            </p>
          </div>
          <a
            href="#kontakt"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
          >
            Skontaktuj się
          </a>
        </div>
      </div>
    </section>
  )
}
