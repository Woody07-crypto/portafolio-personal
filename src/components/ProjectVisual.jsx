export default function ProjectVisual({ type, accent }) {
  if (type === 'maya') {
    return (
      <div className="visual visual--maya" style={{ '--accent': accent }}>
        <svg viewBox="0 0 420 280" role="img" aria-label="Ilustración de Cloud Maya">
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F3E2CC" />
              <stop offset="100%" stopColor="#E8C9A8" />
            </linearGradient>
          </defs>
          <rect width="420" height="280" rx="28" fill="url(#sky)" />
          <ellipse cx="118" cy="86" rx="54" ry="24" fill="#FFF9F0" opacity="0.9" />
          <ellipse cx="154" cy="78" rx="36" ry="20" fill="#FFF9F0" />
          <ellipse cx="302" cy="70" rx="48" ry="20" fill="#FFF9F0" opacity="0.85" />
          <polygon points="210,74 278,210 142,210" fill={accent} />
          <polygon points="210,74 210,210 142,210" fill="#8B5E3C" opacity="0.55" />
          <rect x="198" y="148" width="24" height="28" fill="#FFF9F0" opacity="0.35" />
          <circle cx="210" cy="54" r="10" fill="#C9A36A" />
        </svg>
      </div>
    )
  }

  if (type === 'ticket') {
    return (
      <div className="visual visual--ticket" style={{ '--accent': accent }}>
        <svg viewBox="0 0 420 280" role="img" aria-label="Ilustración de Utcket">
          <rect width="420" height="280" rx="28" fill="#DCE8E1" />
          <rect x="78" y="68" width="264" height="144" rx="18" fill="#FFF9F0" />
          <circle cx="78" cy="140" r="16" fill="#DCE8E1" />
          <circle cx="342" cy="140" r="16" fill="#DCE8E1" />
          <line x1="168" y1="84" x2="168" y2="196" stroke={accent} strokeDasharray="6 8" strokeWidth="2" />
          <rect x="188" y="92" width="128" height="14" rx="7" fill="#1F1A14" opacity="0.85" />
          <rect x="188" y="118" width="88" height="10" rx="5" fill="#5C5348" opacity="0.35" />
          <rect x="96" y="98" width="52" height="52" rx="8" fill={accent} />
          <rect x="104" y="106" width="36" height="36" rx="4" fill="#FFF9F0" />
          <text x="188" y="168" fill={accent} fontSize="22" fontFamily="Fraunces, serif">
            UTCKET
          </text>
        </svg>
      </div>
    )
  }

  return (
    <div className="visual visual--coupon" style={{ '--accent': accent }}>
      <svg viewBox="0 0 420 280" role="img" aria-label="Ilustración de La Cuponera">
        <rect width="420" height="280" rx="28" fill="#F3D7C6" />
        <rect x="86" y="72" width="248" height="136" rx="16" fill="#FFF9F0" />
        <circle cx="86" cy="140" r="14" fill="#F3D7C6" />
        <circle cx="334" cy="140" r="14" fill="#F3D7C6" />
        <text
          x="210"
          y="128"
          textAnchor="middle"
          fill={accent}
          fontSize="42"
          fontFamily="Fraunces, serif"
          fontWeight="600"
        >
          -40%
        </text>
        <text
          x="210"
          y="164"
          textAnchor="middle"
          fill="#5C5348"
          fontSize="14"
          fontFamily="Outfit, sans-serif"
          letterSpacing="3"
        >
          LA CUPONERA
        </text>
      </svg>
    </div>
  )
}
