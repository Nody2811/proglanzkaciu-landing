import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <section className="legal-shell">
        <p className="eyebrow">Platzhalterseite</p>
        <h1>Impressum</h1>
        <p>
          Diese Seite ist als Platzhalter angelegt und sollte vor der
          Veröffentlichung mit den rechtlich erforderlichen Pflichtangaben
          ergänzt werden.
        </p>
        <Link href="/" className="button button-primary">
          Zur Startseite
        </Link>
      </section>
    </main>
  );
}
