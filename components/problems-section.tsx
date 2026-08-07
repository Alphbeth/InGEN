import { X, Check } from 'lucide-react'

const problems = [
  'WiFi nie działa w całym budynku',
  'Brak dokumentacji infrastruktury',
  'Brak kopii zapasowych danych',
  'Nikt nie zna haseł administratora',
  'Przestarzała infrastruktura sieciowa',
  'Częste, powtarzające się awarie',
  'Wszystko zależy od jednej osoby',
]

const solutions = [
  'Profesjonalna, aktualna dokumentacja',
  'Stabilna i przewidywalna infrastruktura',
  'Bezpieczne, testowane kopie zapasowe',
  'Szybka reakcja na każde zgłoszenie',
  'Nowoczesna, wydajna sieć',
  'Bieżąca, planowa konserwacja',
  'Jeden odpowiedzialny partner IT',
]

export function ProblemsSection() {
  return (
    <section id="rozwiazania" className="scroll-mt-16 border-y border-border/70 bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
            Zanim zaczniemy współpracę
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Znamy problemy IT w szkołach. I wiemy, jak je rozwiązać.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Problems */}
          <div className="rounded-3xl border border-border bg-card/70 p-7 md:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                <X className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Typowe problemy w placówkach
              </h3>
            </div>
            <ul className="mt-6 flex flex-col divide-y divide-border/70">
              {problems.map((item) => (
                <li key={item} className="flex items-center gap-3 py-3.5">
                  <X className="size-4 shrink-0 text-destructive/70" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-primary p-7 text-primary-foreground shadow-[0_24px_60px_-30px_rgba(15,20,35,0.6)] md:p-8">
            <div className="pointer-events-none absolute inset-0 -z-0 bg-dot-grid opacity-[0.06]" aria-hidden="true" />
            <div className="relative flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Check className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-lg font-semibold">Jak rozwiązuje to InGEN</h3>
            </div>
            <ul className="relative mt-6 flex flex-col divide-y divide-primary-foreground/10">
              {solutions.map((item) => (
                <li key={item} className="flex items-center gap-3 py-3.5">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-primary-foreground/90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
