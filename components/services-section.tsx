import {
  Network,
  DatabaseBackup,
  Wifi,
  MonitorSmartphone,
  ShieldCheck,
  FileText,
  Headset,
  Globe,
  Printer,
  Radar,
  RefreshCw,
} from 'lucide-react'

const services = [
  {
    icon: Network,
    title: 'Stabilna sieć szkolna',
    description: 'Projektujemy i utrzymujemy sieć, która działa niezawodnie w każdej sali.',
  },
  {
    icon: DatabaseBackup,
    title: 'Bezpieczne kopie zapasowe',
    description: 'Automatyczne backupy i sprawdzone przywracanie kluczowych danych.',
  },
  {
    icon: Wifi,
    title: 'Niezawodne WiFi',
    description: 'Pełne pokrycie budynku i stabilny dostęp dla uczniów oraz kadry.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Zarządzanie pracowniami',
    description: 'Konfiguracja, aktualizacje i serwis komputerowych stanowisk uczniowskich.',
  },
  {
    icon: ShieldCheck,
    title: 'Cyberbezpieczeństwo',
    description: 'Ochrona danych, zabezpieczenia sieci i zgodność z wymogami RODO.',
  },
  {
    icon: FileText,
    title: 'Dokumentacja infrastruktury',
    description: 'Przejrzysta, aktualna dokumentacja urządzeń, haseł i procedur.',
  },
  {
    icon: Headset,
    title: 'Wsparcie techniczne',
    description: 'Pomoc dla nauczycieli i pracowników — zdalnie oraz na miejscu.',
  },
  {
    icon: Globe,
    title: 'Tworzenie stron WWW',
    description: 'Nowoczesne, dostępne i responsywne strony internetowe placówek.',
  },
  {
    icon: Printer,
    title: 'Drukarki i tonery',
    description: 'Zarządzanie urządzeniami drukującymi i dostawami materiałów.',
  },
  {
    icon: Radar,
    title: 'Monitoring systemów',
    description: 'Stały nadzór nad kluczowymi urządzeniami i szybka reakcja na awarie.',
  },
  {
    icon: RefreshCw,
    title: 'Modernizacja infrastruktury',
    description: 'Planowa wymiana i rozbudowa sprzętu bez zakłócania pracy szkoły.',
  },
  {
    icon: Radar,
    title: 'Jeden partner IT',
    description: 'Całość infrastruktury pod opieką jednego, odpowiedzialnego zespołu.',
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
            Wszystko, czego potrzebuje IT w placówce oświatowej
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Jedno źródło odpowiedzialności za całą infrastrukturę informatyczną Twojej szkoły —
            od sieci i serwerów po dokumentację i wsparcie użytkowników.
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
