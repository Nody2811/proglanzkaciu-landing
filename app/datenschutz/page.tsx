import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklaerung von ProGlanz Kaciu Gebaeudereinigung.",
};

export default function DatenschutzPage() {
  return (
    <main className="legal-page">
      <section className="legal-shell">
        <h1>Datenschutzerklaerung</h1>

        <div className="legal-content">
          <section>
            <h2>1. Verantwortlicher</h2>
            <p>ProGlanz Kaciu Gebaeudereinigung</p>
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
              Verarbeitung erfolgt zur technischen Bereitstellung, Stabilitaet
              und Sicherheit der Website.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an einem sicheren und funktionsfaehigen Webauftritt).
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
              wenn dies gesetzlich erlaubt ist, zur Vertragserfuellung
              erforderlich ist oder eine gesetzliche Verpflichtung besteht.
            </p>
          </section>

          <section>
            <h2>6. Speicherdauer</h2>
            <p>
              Personenbezogene Daten werden nur so lange gespeichert, wie dies
              fuer die jeweiligen Zwecke erforderlich ist oder gesetzliche
              Aufbewahrungspflichten bestehen.
            </p>
          </section>

          <section>
            <h2>7. Ihre Rechte nach DSGVO</h2>
            <ul className="legal-list">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Loeschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschraenkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenuebertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
              <li>
                Recht auf Beschwerde bei einer Datenschutzaufsichtsbehoerde
                (Art. 77 DSGVO)
              </li>
            </ul>
          </section>

          <section>
            <h2>8. Datensicherheit</h2>
            <p>
              Wir nutzen geeignete technische und organisatorische Massnahmen,
              um Ihre Daten gegen Verlust, Manipulation und unberechtigten
              Zugriff zu schuetzen.
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
