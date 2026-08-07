import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'InGEN Systems | Profesjonalna opieka informatyczna dla szkół',
  description:
    'Kompleksowa administracja IT dla szkół. Sieci komputerowe, bezpieczeństwo danych, kopie zapasowe, dokumentacja infrastruktury oraz wsparcie techniczne.',
  keywords: [
    'opieka informatyczna dla szkół',
    'administracja IT',
    'sieci komputerowe',
    'bezpieczeństwo danych',
    'kopie zapasowe',
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'InGEN Systems | Profesjonalna opieka informatyczna dla szkół',
    description:
      'Kompleksowa administracja IT dla szkół. Sieci komputerowe, bezpieczeństwo danych, kopie zapasowe, dokumentacja infrastruktury oraz wsparcie techniczne.',
    locale: 'pl_PL',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${jakarta.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
