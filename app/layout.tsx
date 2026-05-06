import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ProGlanz Kaciu Gebäudereinigung",
    template: "%s | ProGlanz Kaciu Gebäudereinigung",
  },
  description:
    "Professionelle Gebäudereinigung für Unternehmen und Privathaushalte in Langenfeld, Monheim am Rhein, Leverkusen und Umgebung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
