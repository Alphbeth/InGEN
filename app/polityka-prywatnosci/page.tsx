export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto min-h-dvh max-w-3xl px-4 py-16 text-foreground md:px-6 md:py-24">
      <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        Polityka prywatności
      </h1>
      <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">Administrator danych</h2>
          <p className="mt-2">
            Administratorem danych przekazanych przez formularz kontaktowy jest InGEN Systems Marcin
            Snoch, NIP 7561715622, REGON 545413763.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">Zakres i cel przetwarzania</h2>
          <p className="mt-2">
            Przetwarzamy dane podane w formularzu: imię i nazwisko, nazwę placówki, adres e-mail,
            numer telefonu oraz treść wiadomości. Dane są wykorzystywane wyłącznie do udzielenia
            odpowiedzi i prowadzenia korespondencji dotyczącej współpracy.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">Okres przechowywania</h2>
          <p className="mt-2">
            Dane przechowujemy przez czas potrzebny do obsługi zapytania, a następnie przez okres
            wymagany przepisami lub uzasadniony ochroną naszych praw.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">Prawa użytkownika</h2>
          <p className="mt-2">
            Możesz żądać dostępu do swoich danych, ich poprawienia, usunięcia, ograniczenia
            przetwarzania lub przeniesienia, a także wnieść sprzeciw. W sprawach dotyczących danych
            napisz na kontakt@ingensystems.pl.
          </p>
        </section>
      </div>
    </main>
  )
}
