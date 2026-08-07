import { X, Check } from 'lucide-react'

const problems = [
  'Brak pewnych kopii zapasowych — Awaria jednego komputera nie powinna oznaczać utraty ważnych dokumentów.',
  'Nieaktualna dokumentacja IT — Brak informacji o konfiguracji sieci i urządzeń utrudnia szybkie usuwanie awarii.',
  'Problemy z siecią Wi-Fi — Niestabilna sieć utrudnia pracę nauczycieli, sekretariatu i uczniów.',
  'Rosnąca liczba awarii — Brak regularnej administracji powoduje narastanie problemów technicznych.',
  'Brak centralnego zarządzania sprzętem — Komputery i urządzenia powinny być zarządzane w uporządkowany i bezpieczny sposób.',
  'Brak stałego wsparcia IT — Drobne problemy potrafią zatrzymać pracę całej placówki.',
]

const solutions = [
  'Bezpieczne kopie zapasowe',
  'Aktualna dokumentacja infrastruktury',
  'Stabilna sieć komputerowa i Wi-Fi',
  'Regularna administracja systemami',
  'Uporządkowane zarządzanie sprzętem',
  'Niezwłoczna reakcja na zgłoszenia zgodnie z ustalonymi zasadami współpracy',
]

export function ProblemsSection() {
  return (
    <section id="rozwiazania" className="scroll-mt-16 border-y border-border/70 bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
            Problemy i rozwiązania
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Czy te problemy brzmią znajomo?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Wiele szkół zmaga się z podobnymi wyzwaniami. Pomagamy uporządkować infrastrukturę IT,
            zwiększyć bezpieczeństwo danych i zapewnić sprawne działanie sprzętu każdego dnia.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Problems */}
          <div className="rounded-3xl border border-border bg-card/70 p-7 md:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                <X className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Typowe problemy
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
              <h3 className="font-heading text-lg font-semibold">Rozwiązania</h3>
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
