import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von ProGlanz Kaciu Gebaeudereinigung.",
};

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <section className="legal-shell">
        <h1>Impressum</h1>

        <div className="legal-content">
          <section>
            <h2>Angaben gemaess Paragraph 5 DDG</h2>
            <p>ProGlanz Kaciu Gebaeudereinigung</p>
            <p>Wiebachstr. 1c</p>
            <p>40764 Langenfeld</p>
          </section>

          <section>
            <h2>Kontakt</h2>
            <p>
              E-Mail: <a href="mailto:info@proglanzkaciu.de">info@proglanzkaciu.de</a>
            </p>
            <p>
              Telefon: <a href="tel:+4915904950612">+49 15904950612</a>
            </p>
          </section>

          <section>
            <h2>Steuernummer</h2>
            <p>135/5133/5552</p>
          </section>

          <section>
            <h2>Verantwortlich fuer den Inhalt</h2>
            <p>Kristi Kaciu</p>
            <p>Wiebachstr. 1c</p>
            <p>40764 Langenfeld</p>
          </section>
        </div>

        <Link href="/" className="button button-primary">
          Zur Startseite
        </Link>
      </section>
    </main>
  );
}
