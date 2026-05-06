import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von ProGlanz Kaciu Gebäudereinigung.",
};

export default function DatenschutzPage() {
  return (
    <main className="legal-page">
      <section className="legal-shell">
        <h1>Datenschutzerklärung</h1>

        <div className="legal-content">
          <section>
            <h2>1. Verantwortlicher</h2>
            <p>ProGlanz Kaciu Gebäudereinigung</p>
            <p>Wiebachstr. 1c, 40764 Langenfeld</p>
            <p>
              E-Mail: <a href="mailto:info@proglanzkaciu.de">info@proglanzkaciu.de</a>
            </p>
          </section>

          <section>
            <h2>2. Datenschutzverantwortlicher</h2>
            <p>Kristi Kaciu</p>
            <p>
              E-Mail: <a href="mailto:info@proglanzkaciu.de">info@proglanzkaciu.de</a>
            </p>
          </section>

          <section>
            <h2>3. Zugriff auf die Website</h2>
            <p>
              Beim Aufruf dieser Website werden durch den Webserver technisch
              erforderliche Informationen verarbeitet (z. B. IP-Adresse, Datum
              und Uhrzeit, aufgerufene Seite, Browser-Informationen). Die
              Verarbeitung erfolgt zur technischen Bereitstellung, Stabilität
              und Sicherheit der Website.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an einem sicheren und funktionsfähigen Webauftritt).
            </p>
          </section>

          <section>
            <h2>4. Kontaktaufnahme</h2>
            <p>
              Wenn Sie uns per E-Mail oder telefonisch kontaktieren, verarbeiten
              wir Ihre Angaben zur Bearbeitung Ihrer Anfrage und fuer den Fall
              von Anschlussfragen.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
              Massnahmen) oder Art. 6 Abs. 1 lit. f DSGVO (allgemeine
              Kommunikation).
            </p>
          </section>

          <section>
            <h2>5. Weitergabe von Daten</h2>
            <p>
              Eine Weitergabe personenbezogener Daten an Dritte erfolgt nur,
              wenn dies gesetzlich erlaubt ist, zur Vertragserfüllung
              erforderlich ist oder eine gesetzliche Verpflichtung besteht.
            </p>
          </section>

          <section>
            <h2>6. Speicherdauer</h2>
            <p>
              Personenbezogene Daten werden nur so lange gespeichert, wie dies
              für die jeweiligen Zwecke erforderlich ist oder gesetzliche
              Aufbewahrungspflichten bestehen.
            </p>
          </section>

          <section>
            <h2>7. Ihre Rechte nach DSGVO</h2>
            <ul className="legal-list">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
              <li>
                Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde
                (Art. 77 DSGVO)
              </li>
            </ul>
          </section>

          <section>
            <h2>8. Datensicherheit</h2>
            <p>
              Wir nutzen geeignete technische und organisatorische Massnahmen,
              um Ihre Daten gegen Verlust, Manipulation und unberechtigten
              Zugriff zu schützen.
            </p>
          </section>

          <section>
            <h2>9. Stand</h2>
            <p>Stand: 06.05.2026</p>
          </section>
        </div>

        <Link href="/" className="button button-primary">
          Zur Startseite
        </Link>
      </section>
    </main>
  );
}
