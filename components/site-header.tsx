'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'

const navItems = [
  { label: 'Start', href: '#start' },
  { label: 'Usługi', href: '#uslugi' },
  { label: 'Rozwiązania', href: '#rozwiazania' },
  { label: 'O nas', href: '#o-nas' },
  { label: 'Kontakt', href: '#kontakt' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/80 bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-background/0',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#start" className="flex items-center" aria-label="InGEN Systems — strona główna">
          <Logo className="h-7" priority />
        </a>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Nawigacja główna">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Umów bezpłatny audyt
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-secondary md:hidden"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-border/70 bg-background/95 backdrop-blur-xl md:hidden',
          open ? 'max-h-96' : 'max-h-0 border-t-0',
          'transition-all duration-300',
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Nawigacja mobilna">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Umów bezpłatny audyt
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}
