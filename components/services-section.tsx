import {
  Network,
  DatabaseBackup,
  Wifi,
  MonitorSmartphone,
  FileText,
  Headset,
} from 'lucide-react'

const services = [
  {
    icon: Network,
    title: 'Administracja siecią komputerową',
    description:
      'Konfiguracja i utrzymanie sieci komputerowej, routerów, przełączników oraz urządzeń sieciowych.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Opieka nad komputerami i serwerami',
    description:
      'Bieżąca administracja komputerami, serwerami oraz urządzeniami wykorzystywanymi w placówce.',
  },
  {
    icon: DatabaseBackup,
    title: 'Kopie zapasowe i bezpieczeństwo danych',
    description:
      'Wdrażanie, kontrola oraz monitorowanie kopii zapasowych i ochrona najważniejszych danych szkoły.',
  },
  {
    icon: FileText,
    title: 'Dokumentacja infrastruktury IT',
    description:
      'Tworzenie i aktualizacja dokumentacji sieci, sprzętu oraz konfiguracji systemów.',
  },
  {
    icon: Wifi,
    title: 'Zarządzanie siecią Wi-Fi',
    description:
      'Konfiguracja i optymalizacja sieci bezprzewodowej zapewniająca stabilną pracę użytkowników.',
  },
  {
    icon: Headset,
    title: 'Wsparcie techniczne użytkowników',
    description:
      'Niezwłoczna reakcja na zgłoszenia oraz pomoc w rozwiązywaniu bieżących problemów technicznych.',
  },
]

export function ServicesSection() {
  return (
    <section id="uslugi" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
            Usługi
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Kompleksowa opieka informatyczna dla szkół
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Zapewniamy profesjonalną administrację infrastrukturą IT, bezpieczeństwo danych oraz
            bieżące wsparcie techniczne dla placówek oświatowych.
          </p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="group relative flex flex-col bg-card p-7 transition-colors hover:bg-secondary/50"
            >
              <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors group-hover:border-accent/40 group-hover:text-accent">
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
