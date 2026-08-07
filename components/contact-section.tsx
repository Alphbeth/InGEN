'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Phone, Mail, MapPin, CheckCircle2, ArrowRight } from 'lucide-react'

const contactDetails = [
  { icon: Phone, label: 'Telefon', value: '+48 500 495 085', href: 'tel:+48500495085' },
  { icon: Mail, label: 'E-mail', value: 'kontakt@ingensystems.pl', href: 'mailto:kontakt@ingensystems.pl' },
  { icon: MapPin, label: 'Firma', value: 'InGEN Systems', href: null },
  {
    icon: MapPin,
    label: 'Adres',
    value: 'ul. Wyspiańskiego 31, 47-303 Krapkowice',
    href: 'https://www.google.com/maps/search/?api=1&query=ul.+Wyspia%C5%84skiego+31%2C+47-303+Krapkowice',
  },
  { icon: MapPin, label: 'NIP', value: '7561715622', href: null },
  { icon: MapPin, label: 'REGON', value: '545413763', href: null },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 10000)

    setSubmitError(false)
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
        signal: controller.signal,
      })

      if (!response.ok) {
        throw new Error('Contact form request failed')
      }

      setSubmitted(true)
      form.reset()
    } catch {
      setSubmitError(true)
    } finally {
      window.clearTimeout(timeout)
      setIsSubmitting(false)
    }
  }

  return (
    <section id="kontakt" className="scroll-mt-16 border-t border-border/70 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
              <span className="h-px w-6 bg-accent" aria-hidden="true" />
              Kontakt
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              Skontaktuj się z nami
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-pretty text-muted-foreground">
              Jeżeli szukają Państwo profesjonalnej opieki informatycznej dla szkoły lub chcą omówić możliwości współpracy, zapraszam do kontaktu.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <li
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-accent/40"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {label}
                    </span>
                    {href ? (
                      <a href={href} className="font-semibold text-foreground transition-colors hover:text-accent">
                        {value}
                      </a>
                    ) : (
                      <span className="font-semibold text-foreground">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <div className="relative mt-8 hidden overflow-hidden rounded-2xl border border-border bg-card lg:block">
              <Image
                src="/images/rack-detail.png"
                alt="Ilustracja serwerowni i przełączników sieciowych"
                width={900}
                height={420}
                className="h-48 w-full object-cover"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-[0_1px_0_0_var(--color-border),0_24px_60px_-32px_rgba(15,20,35,0.25)] md:p-8">
            {submitted ? (
              <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <CheckCircle2 className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                  Dziękujemy za wiadomość
                </h3>
                <p className="mt-2 max-w-sm text-muted-foreground">
                  Skontaktujemy się z Państwem niezwłocznie.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="sr-only"
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Imię i nazwisko" required>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className={inputClass}
                      placeholder="Jan Kowalski"
                    />
                  </Field>
                  <Field id="institution" label="Placówka">
                    <input
                      id="institution"
                      name="institution"
                      type="text"
                      className={inputClass}
                      placeholder="Nazwa placówki"
                    />
                  </Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="email" label="E-mail" required>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={inputClass}
                      placeholder="jan@szkola.pl"
                    />
                  </Field>
                  <Field id="phone" label="Telefon">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className={inputClass}
                      placeholder="+48 500 495 085"
                    />
                  </Field>
                </div>
                <Field id="message" label="Wiadomość" required>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder="W czym możemy pomóc?"
                  />
                </Field>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {isSubmitting ? 'Wysyłanie...' : 'Wyślij zapytanie'}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </button>
                {submitError && (
                  <p role="alert" className="text-xs leading-relaxed text-destructive">
                    Nie udało się wysłać wiadomości. Prosimy spróbować ponownie za chwilę.
                  </p>
                )}
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Wysyłając formularz akceptujesz przetwarzanie danych w celu kontaktu zgodnie z
                  Polityką prywatności.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const inputClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/25'

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      {children}
    </div>
  )
}
