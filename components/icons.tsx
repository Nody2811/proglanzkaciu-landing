import type { SVGProps } from "react";

function IconBase(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </IconBase>
  );
}

export function CheckCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </IconBase>
  );
}

export function SparkleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" />
      <path d="m19 15 .8 1.8L21.6 18l-1.8.8L19 20.6l-.8-1.8L16.4 18l1.8-.8L19 15Z" />
      <path d="m5 15 .8 1.8L7.6 18l-1.8.8L5 20.6l-.8-1.8L2.4 18l1.8-.8L5 15Z" />
    </IconBase>
  );
}

export function OfficeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 20V6.5A1.5 1.5 0 0 1 5.5 5H14v15" />
      <path d="M14 9h4.5A1.5 1.5 0 0 1 20 10.5V20" />
      <path d="M8 9h2" />
      <path d="M8 13h2" />
      <path d="M8 17h2" />
      <path d="M14 20v-4h3v4" />
    </IconBase>
  );
}

export function StairsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 19h4v-4h4v-4h4V7h4" />
      <path d="M4 19h16" />
    </IconBase>
  );
}

export function WindowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M12 4v16" />
      <path d="M4 12h16" />
    </IconBase>
  );
}

export function DeepCleanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M7 20h10" />
      <path d="M9 20v-7.5a3 3 0 0 1 6 0V20" />
      <path d="M12 3v4" />
      <path d="M8 7h8" />
    </IconBase>
  );
}

export function ConstructionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 19h16" />
      <path d="M7 19v-5l5-3 5 3v5" />
      <path d="m9 9 3-5 3 5" />
    </IconBase>
  );
}

export function ClinicIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M5 20V8.5A1.5 1.5 0 0 1 6.5 7H10v13" />
      <path d="M10 7V5.5A1.5 1.5 0 0 1 11.5 4h6A1.5 1.5 0 0 1 19 5.5V20" />
      <path d="M13 8.5h3" />
      <path d="M14.5 7v3" />
      <path d="M7.5 11h1" />
      <path d="M7.5 14h1" />
    </IconBase>
  );
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </IconBase>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 3 5 6v5c0 4.4 2.6 7.9 7 10 4.4-2.1 7-5.6 7-10V6l-7-3Z" />
      <path d="m9.2 12 1.9 1.9 3.7-3.7" />
    </IconBase>
  );
}

export function FlexIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 8c2.5 0 4.5-2 4.5-4.5" />
      <path d="M20 8c-2.5 0-4.5-2-4.5-4.5" />
      <path d="M4 16c2.5 0 4.5 2 4.5 4.5" />
      <path d="M20 16c-2.5 0-4.5 2-4.5 4.5" />
      <path d="M8.5 4.5h7" />
      <path d="M8.5 19.5h7" />
      <path d="M12 8v8" />
    </IconBase>
  );
}

export function HandshakeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="m8 11 2.5 2.5a2 2 0 0 0 2.8 0L17 10" />
      <path d="M4 10.5 7.5 7a2 2 0 0 1 2.8 0l1.7 1.7" />
      <path d="m20 10.5-3.5-3.5a2 2 0 0 0-2.8 0L12 8.7" />
      <path d="M6 17.5 4 15.5" />
      <path d="M18 17.5l2-2" />
    </IconBase>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </IconBase>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M5.5 4.5h3l1.2 4.1-1.8 1.8a15.2 15.2 0 0 0 5.7 5.7l1.8-1.8 4.1 1.2v3a1.5 1.5 0 0 1-1.7 1.5c-7.6-.8-13.5-6.7-14.3-14.3A1.5 1.5 0 0 1 5.5 4.5Z" />
    </IconBase>
  );
}

export function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 20s6-5.6 6-10a6 6 0 1 0-12 0c0 4.4 6 10 6 10Z" />
      <circle cx="12" cy="10" r="2.2" />
    </IconBase>
  );
}
