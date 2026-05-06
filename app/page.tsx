import type { Metadata } from "next";
import { LandingPage } from "../components/landing-page";

export const metadata: Metadata = {
  title:
    "ProGlanz Kaciu Gebäudereinigung | Gebäudereinigung in Langenfeld, Monheim, Leverkusen & Umgebung",
  description:
    "ProGlanz Kaciu Gebäudereinigung bietet professionelle Büroreinigung, Treppenhausreinigung, Unterhaltsreinigung und Grundreinigung in Langenfeld, Monheim am Rhein, Hilden, Solingen, Leverkusen, Leichlingen, Düsseldorf und Umgebung.",
};

export default function HomePage() {
  return <LandingPage />;
}
