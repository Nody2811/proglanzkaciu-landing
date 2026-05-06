import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <main className="legal-page">
      <section className="legal-shell">
        <p className="eyebrow">Platzhalterseite</p>
        <h1>Datenschutz</h1>
        <p>
          Diese Seite ist als Platzhalter angelegt und sollte vor der
          Veröffentlichung mit einer passenden Datenschutzerklärung ergänzt
          werden.
        </p>
        <Link href="/" className="button button-primary">
          Zur Startseite
        </Link>
      </section>
    </main>
  );
}
