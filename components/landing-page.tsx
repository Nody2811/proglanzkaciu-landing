import type { ComponentType, SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ClinicIcon,
  ClockIcon,
  ConstructionIcon,
  DeepCleanIcon,
  FlexIcon,
  HandshakeIcon,
  MailIcon,
  MapPinIcon,
  OfficeIcon,
  PhoneIcon,
  ShieldIcon,
  SparkleIcon,
  StairsIcon,
  WindowIcon,
} from "./icons";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type Service = {
  title: string;
  description: string;
  icon: IconComponent;
};

type Benefit = {
  title: string;
  description: string;
  icon: IconComponent;
  tone: "blue" | "green";
};

const companyName = "ProGlanz Kaciu Gebäudereinigung";
const email = "info@proglanzkaciu.de";
const phoneDisplay = "+49 15904950612";
const phoneHref = "tel:+4915904950612";
const contactSectionHref = "#kontakt";

const navigation = [
  { href: "#start", label: "Start" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#einsatzgebiet", label: "Einsatzgebiet" },
  { href: "#kontakt", label: "Kontakt" },
];

const services: Service[] = [
  {
    title: "Unterhaltsreinigung",
    description:
      "Regelmäßige Reinigung von Büroflächen, Gewerberäumen, Praxen, Treppenhäusern und weiteren Objekten. So bleiben Ihre Räume dauerhaft sauber, gepflegt und repräsentativ.",
    icon: SparkleIcon,
  },
  {
    title: "Büroreinigung",
    description:
      "Saubere Arbeitsplätze, hygienische Sanitärbereiche, gepflegte Küchen und ordentliche Besprechungsräume schaffen ein professionelles Arbeitsumfeld für Mitarbeiter und Kunden.",
    icon: OfficeIcon,
  },
  {
    title: "Treppenhausreinigung",
    description:
      "Gründliche Reinigung von Treppen, Geländern, Podesten, Eingangsbereichen und Gemeinschaftsflächen in Wohn- und Gewerbeobjekten.",
    icon: StairsIcon,
  },
  {
    title: "Glas- und Fensterreinigung",
    description:
      "Saubere Fenster und Glasflächen sorgen für einen gepflegten Gesamteindruck. Wir reinigen gründlich und streifenfrei – innen und außen nach Vereinbarung.",
    icon: WindowIcon,
  },
  {
    title: "Grundreinigung",
    description:
      "Wenn eine normale laufende Reinigung nicht mehr ausreicht, sorgen wir mit einer intensiven Grundreinigung wieder für ein sauberes und gepflegtes Grundniveau.",
    icon: DeepCleanIcon,
  },
  {
    title: "Bauendreinigung",
    description:
      "Nach Bau-, Umbau- oder Renovierungsarbeiten übernehmen wir die gründliche Reinigung, damit Räume sauber und bezugsfertig übergeben werden können.",
    icon: ConstructionIcon,
  },
  {
    title: "Praxis- und Objektreinigung",
    description:
      "In sensiblen und stark genutzten Bereichen sind Sorgfalt, Hygiene und Zuverlässigkeit besonders wichtig. Wir passen unsere Leistungen individuell an das jeweilige Objekt an.",
    icon: ClinicIcon,
  },
];

const benefits: Benefit[] = [
  {
    title: "Zuverlässig",
    description: "Pünktliche und saubere Ausführung mit klaren Abläufen.",
    icon: ClockIcon,
    tone: "blue",
  },
  {
    title: "Gründlich",
    description: "Wir arbeiten mit Sorgfalt und achten auf Details.",
    icon: ShieldIcon,
    tone: "green",
  },
  {
    title: "Flexibel",
    description:
      "Unsere Leistungen werden auf Ihr Objekt und Ihren Bedarf abgestimmt.",
    icon: FlexIcon,
    tone: "blue",
  },
  {
    title: "Persönlich",
    description: "Direkter Ansprechpartner und persönliche Betreuung.",
    icon: HandshakeIcon,
    tone: "green",
  },
];

const cities = [
  "Langenfeld",
  "Monheim am Rhein",
  "Hilden",
  "Solingen",
  "Leverkusen",
  "Leichlingen",
  "Düsseldorf",
  "Umgebung",
];

function ButtonLink({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: "primary" | "secondary" | "light" | "outline-light";
}) {
  const className = {
    primary: "button button-primary",
    secondary: "button button-secondary",
    light: "button button-light",
    "outline-light": "button button-outline-light",
  }[variant];

  return (
    <a href={href} className={className}>
      <span>{label}</span>
      <ArrowRightIcon width={18} height={18} />
    </a>
  );
}

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function ServiceCard({ title, description, icon: Icon }: Service) {
  return (
    <article className="service-card">
      <div className="card-top">
        <div className="icon-shell" aria-hidden="true">
          <Icon width={22} height={22} />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
}

function BenefitCard({ title, description, icon: Icon, tone }: Benefit) {
  return (
    <article className="benefit-card">
      <div className="card-top">
        <div
          className={`icon-shell ${tone === "green" ? "icon-shell-green" : ""}`}
          aria-hidden="true"
        >
          <Icon width={22} height={22} />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
}

function HeroVisual() {
  const checks = [
    "Regelmäßige Unterhaltsreinigung für gewerbliche und private Objekte",
    "Büro-, Praxis- und Treppenhausreinigung mit festen Abläufen",
    "Individuell abgestimmte Leistungen für Ihr Objekt",
  ];

  return (
    <aside className="hero-visual" aria-label="Leistungsvorteile">
      <div className="hero-visual-inner">
        <div className="visual-card">
          <h2>Sauberkeit mit System</h2>
          <p>
            Klare Abläufe, gründliche Arbeit und persönliche Betreuung für ein
            gepflegtes Erscheinungsbild Ihrer Räume.
          </p>

          <div className="check-list">
            {checks.map((item) => (
              <div className="check-item" key={item}>
                <CheckCircleIcon
                  width={20}
                  height={20}
                  className="check-icon"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="visual-stat">
          <div className="stat-item">
            <p className="stat-label">Fokus</p>
            <p className="stat-value">Zuverlässig und gründlich</p>
          </div>
          <div className="stat-item">
            <p className="stat-label">Einsatzgebiet</p>
            <p className="stat-value">Langenfeld bis Düsseldorf</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function LandingPage() {
  const year = new Date().getFullYear();

  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link">
        Zum Inhalt springen
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a href="#start" className="brand" aria-label={`${companyName} Startseite`}>
            <span className="brand-mark" aria-hidden="true">
              <Image
                src="/proglanz-logo.png"
                alt=""
                width={72}
                height={72}
                className="brand-logo"
                priority
              />
            </span>
            <span className="brand-text">{companyName}</span>
          </a>

          <nav className="site-nav" aria-label="Hauptnavigation">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href={contactSectionHref} className="button button-primary header-cta">
            <span>Angebot anfordern</span>
            <ArrowRightIcon width={18} height={18} />
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="section hero" id="start">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-logo-wrap" aria-hidden="true">
                <Image
                  src="/proglanz-logo.png"
                  alt=""
                  width={300}
                  height={300}
                  className="hero-logo"
                  priority
                />
              </div>

              <p className="eyebrow">
                <MapPinIcon width={16} height={16} />
                Gebäudereinigung in Ihrer Region
              </p>
              <h1>
                Professionelle Gebäudereinigung für Unternehmen und
                Privathaushalte
              </h1>
              <p className="hero-subline">
                Sauberkeit, auf die Sie sich verlassen können.
              </p>
              <p className="hero-body">
                Mit ProGlanz Kaciu Gebäudereinigung bieten wir zuverlässige,
                gründliche und professionelle Reinigungsleistungen für
                gewerbliche und private Objekte. Ob Büro, Treppenhaus, Praxis,
                Ladenfläche oder Wohnobjekt – wir sorgen für gepflegte Räume,
                ein sauberes Erscheinungsbild und eine Zusammenarbeit, auf die
                Sie sich langfristig verlassen können.
              </p>

              <div className="button-row">
                <ButtonLink
                  href={contactSectionHref}
                  label="Jetzt unverbindlich anfragen"
                  variant="primary"
                />
                <ButtonLink
                  href={contactSectionHref}
                  label="Kontakt aufnehmen"
                  variant="secondary"
                />
              </div>

              <div className="hero-meta" aria-label="Kurze Vorteile">
                <div className="hero-chip">
                  <ShieldIcon width={18} height={18} />
                  Persönliche Betreuung
                </div>
                <div className="hero-chip">
                  <SparkleIcon width={18} height={18} />
                  Individuelle Reinigungslösungen
                </div>
              </div>
            </div>

            <HeroVisual />
          </div>
        </section>

        <section className="section">
          <div className="container section-stack">
            <SectionHeading title="Sauberkeit ist mehr als nur Optik." />
            <div className="copy-card">
              <p>
                Sie schafft Vertrauen, sorgt für Wohlbefinden und trägt zum
                Werterhalt einer Immobilie bei. Genau deshalb legen wir bei
                ProGlanz Kaciu großen Wert auf eine sorgfältige Arbeitsweise,
                feste Abläufe und eine persönliche Betreuung.
              </p>
              <p>
                Wir bieten individuelle Reinigungslösungen, die auf das
                jeweilige Objekt und den tatsächlichen Bedarf abgestimmt sind.
                Dabei stehen Qualität, Zuverlässigkeit und Kundenzufriedenheit
                für uns an erster Stelle.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="ueber-uns">
          <div className="container section-stack">
            <SectionHeading title="Ihr zuverlässiger Partner für Sauberkeit und Werterhalt" />
            <div className="copy-card">
              <p>
                ProGlanz Kaciu steht für professionelle
                Reinigungsdienstleistungen mit persönlichem Anspruch. Unser Ziel
                ist es nicht nur, Räume sauber zu halten, sondern unseren Kunden
                dauerhaft ein gutes Gefühl zu geben – durch konstante Qualität,
                Verlässlichkeit und eine unkomplizierte Zusammenarbeit.
              </p>
              <p>
                Jedes Objekt ist anders. Deshalb setzen wir nicht auf starre
                Standardlösungen, sondern auf individuelle Konzepte, die zu den
                Anforderungen unserer Kunden passen. Ob regelmäßige Reinigung
                oder einmalige Sonderleistung – wir arbeiten gründlich, flexibel
                und mit Blick fürs Detail.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="leistungen">
          <div className="container section-stack">
            <SectionHeading title="Unsere Reinigungsleistungen im Überblick" />
            <div className="service-grid">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container section-stack">
            <SectionHeading title="Warum ProGlanz Kaciu?" />
            <div className="benefit-grid">
              {benefits.map((benefit) => (
                <BenefitCard key={benefit.title} {...benefit} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="einsatzgebiet">
          <div className="container section-stack">
            <SectionHeading
              title="Unser Einsatzgebiet"
              description="Wir sind für unsere Kunden in Langenfeld, Monheim am Rhein, Hilden, Solingen, Leverkusen, Leichlingen, Düsseldorf und Umgebung im Einsatz."
            />

            <div className="area-panel">
              <div className="tag-list" aria-label="Einsatzorte">
                {cities.map((city) => (
                  <span className="tag" key={city}>
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section cta-section" id="kontakt">
          <div className="container">
            <div className="cta-panel">
              <div className="contact-support">
                <h2>Sie suchen eine zuverlässige Reinigungsfirma?</h2>
                <p>
                  Gerne erstellen wir Ihnen ein unverbindliches Angebot für Ihr
                  Objekt. Ob regelmäßige Unterhaltsreinigung,
                  Treppenhausreinigung, Büroreinigung oder eine einmalige
                  Grundreinigung – wir beraten Sie persönlich und finden
                  gemeinsam die passende Lösung.
                </p>

                <div className="button-row contact-cta-row">
                  <ButtonLink
                    href={`mailto:${email}`}
                    label="Angebot anfordern"
                    variant="light"
                  />
                  <ButtonLink
                    href={phoneHref}
                    label="Kontakt aufnehmen"
                    variant="outline-light"
                  />
                </div>
              </div>

              <div className="contact-side">
                <div className="contact-card">
                  <div className="contact-label">
                    <MailIcon width={16} height={16} />
                    E-Mail
                  </div>
                  <a href={`mailto:${email}`}>{email}</a>
                </div>

                <div className="contact-card">
                  <div className="contact-label">
                    <PhoneIcon width={16} height={16} />
                    Telefon
                  </div>
                  <a href={phoneHref}>{phoneDisplay}</a>
                </div>

                <div className="contact-card">
                  <div className="contact-label">
                    <MapPinIcon width={16} height={16} />
                    Einsatzgebiet
                  </div>
                  <span>
                    Langenfeld, Monheim am Rhein, Hilden, Solingen, Leverkusen,
                    Leichlingen, Düsseldorf und Umgebung
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-shell">
          <div className="footer-copy">
            <p className="footer-title">{companyName}</p>
            <p>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
            <p>
              <a href={phoneHref}>{phoneDisplay}</a>
            </p>
            <p>
              Einsatzgebiet: Langenfeld, Monheim am Rhein, Hilden, Solingen,
              Leverkusen, Leichlingen, Düsseldorf und Umgebung
            </p>
            <p>© {year} {companyName}</p>
          </div>

          <div className="footer-links">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
