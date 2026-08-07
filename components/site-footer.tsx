import { Phone, Mail, MapPin } from 'lucide-react'
import { Logo } from '@/components/logo'

const footerNav = [
  { label: 'Strona główna', href: '#start' },
  { label: 'Oferta', href: '#uslugi' },
  { label: 'Problemy', href: '#rozwiazania' },
  { label: 'Współpraca', href: '#o-nas' },
  { label: 'Kontakt', href: '#kontakt' },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo inverted className="h-7" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Profesjonalna opieka informatyczna dla szkół.
            </p>
            <p className="mt-6 flex items-center gap-2 text-sm text-primary-foreground/60">
              <MapPin className="size-4" aria-hidden="true" />
              InGEN Systems
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-primary-foreground">Nawigacja</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-primary-foreground">Kontakt</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="tel:+48500495085"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  +48 500 495 085
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-primary-foreground/70">
                  <MapPin className="size-4" aria-hidden="true" />
                  NIP: 7561715622
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-primary-foreground/70">
                  <MapPin className="size-4" aria-hidden="true" />
                  REGON: 545413763
                </span>
              </li>
              <li>
                <a
                  href="mailto:kontakt@ingensystems.pl"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  kontakt@ingensystems.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6 sm:flex-row">
          <p className="text-sm text-primary-foreground/60">
            © {year} InGEN Systems. Wszelkie prawa zastrzeżone.
          </p>
          <a
            href="/polityka-prywatnosci"
            className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
          >
            Polityka prywatności
          </a>
        </div>
      </div>
    </footer>
  )
}
