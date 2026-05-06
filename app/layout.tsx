import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ProGlanz Kaciu Geb\u00e4udereinigung",
    template: "%s | ProGlanz Kaciu Geb\u00e4udereinigung",
  },
  description:
    "Professionelle Geb\u00e4udereinigung f\u00fcr Unternehmen und Privathaushalte in Langenfeld, Monheim am Rhein, Leverkusen und Umgebung.",
  icons: {
    icon: [{ url: "/proglanz-logo.png", type: "image/png" }],
    shortcut: ["/proglanz-logo.png"],
    apple: [{ url: "/proglanz-logo.png", type: "image/png" }],
  },
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
