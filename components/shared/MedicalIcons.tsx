import type React from "react"
type IconProps = { className?: string; style?: React.CSSProperties }

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

/* ── Therapeutic Area Icons ─────────────────────────────── */

export function CardioIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} {...base}>
      {/* ECG waveform */}
      <path d="M2 12h3.5l2-5 3.5 10 2-6.5 1.5 3.5H22" />
      {/* Small heart above line */}
      <path d="M12 7c.4-1.2 1.6-1.6 2.4-.8.8.8.8 2.2-.2 3L12 11l-2.2-1.8c-1-1-.8-2.2.2-3C10.8 5.4 11.6 5.8 12 7z" />
    </svg>
  )
}

export function LungsIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} {...base}>
      {/* Trachea */}
      <path d="M12 3v5.5" />
      {/* Left bronchus + lung */}
      <path d="M12 8.5l-2 .5c-2.5 1-4 3-4 5.5 0 3 1.5 4.5 3.5 4.5 1.5 0 2.5-1 2.5-1V8.5" />
      {/* Right bronchus + lung */}
      <path d="M12 8.5l2 .5c2.5 1 4 3 4 5.5 0 3-1.5 4.5-3.5 4.5-1.5 0-2.5-1-2.5-1V8.5" />
      {/* Left airway detail */}
      <path d="M8.5 12c0 1.5.5 3 2 3.5" />
    </svg>
  )
}

export function StomachIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} {...base}>
      {/* Stomach body */}
      <path d="M8.5 4c-2.5.5-5 2.5-5 6.5 0 4.5 2.5 8 8.5 9 6-1 8-4.5 8-9 0-4-2.5-5.5-4-6" />
      {/* Esophagus connection */}
      <path d="M8.5 4c1.5-1 3.5-1 5 0" />
      {/* Rugae hint */}
      <path d="M8 10.5c.5 1.5 1.5 3 4 3.5" />
    </svg>
  )
}

export function DNAIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} {...base}>
      {/* Left strand */}
      <path d="M8 3c3.5 2.5 3.5 5.5 0 8S4.5 17 8 21" />
      {/* Right strand */}
      <path d="M16 3c-3.5 2.5-3.5 5.5 0 8s3.5 6 0 10" />
      {/* Rungs */}
      <path d="M8.5 6.5h7" />
      <path d="M7.5 12h9" />
      <path d="M8.5 17.5h7" />
    </svg>
  )
}

export function CapsuleIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} {...base}>
      {/* Capsule shell */}
      <path d="M16.5 9A4.5 4.5 0 0 0 8 9v6a4.5 4.5 0 0 0 9 0V9z" />
      {/* Dividing line */}
      <path d="M8 12h8.5" />
      {/* Pill dots (texture) */}
      <circle cx="12.25" cy="9.75" r=".5" />
      <circle cx="12.25" cy="14.25" r=".5" />
    </svg>
  )
}

export function MoleculeIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} {...base}>
      {/* Central atom */}
      <circle cx="12" cy="12" r="2.5" />
      {/* Satellite atoms */}
      <circle cx="12" cy="4.5" r="1.75" />
      <circle cx="19" cy="16" r="1.75" />
      <circle cx="5" cy="16" r="1.75" />
      {/* Bonds */}
      <line x1="12" y1="6.25" x2="12" y2="9.5" />
      <line x1="17.5" y1="14.5" x2="14.2" y2="13.1" />
      <line x1="6.5" y1="14.5" x2="9.8" y2="13.1" />
    </svg>
  )
}

/* ── About / Pillar Icons ────────────────────────────────── */

export function PatientIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} {...base}>
      {/* Person */}
      <circle cx="12" cy="6.5" r="3" />
      <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      {/* Heart on chest */}
      <path d="M12 13.5c.3-.8 1.1-1.1 1.7-.5.5.5.5 1.4-.1 2L12 16l-1.6-1c-.6-.6-.6-1.5-.1-2 .6-.6 1.4-.3 1.7.5z" />
    </svg>
  )
}

export function PrecisionShieldIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} {...base}>
      {/* Shield */}
      <path d="M12 3L4 7v5c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V7L12 3z" />
      {/* Checkmark */}
      <path d="M8.5 12l2.5 2.5 5-5" />
    </svg>
  )
}

export function AtomIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} {...base}>
      {/* Nucleus */}
      <circle cx="12" cy="12" r="2" />
      {/* Orbits */}
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  )
}
