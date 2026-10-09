export function AboutMandala() {
  return (
    <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 z-0 size-44 text-gold/40 md:size-60">
      {[28, 44, 72, 80, 128, 136, 180, 188].map(radius => <circle key={radius} cx="200" cy="200" r={radius} />)}
      {Array.from({ length: 16 }, (_, i) => (
        <g key={i} transform={`rotate(${i * 22.5} 200 200)`}>
          <path d="M200 172 Q178 153 200 128 Q222 153 200 172Z" />
          <path d="M200 128 C165 106 171 73 200 56 C222 81 233 112 200 128Z" />
          <path d="M200 117 C183 100 183 80 200 68 C207 88 219 104 200 117Z" />
          <path d="M200 128 C222 107 227 88 211 84 C197 82 199 99 209 97" />
          <path d="M200 64 Q177 38 200 12 Q223 38 200 64Z" />
          <path d="M200 52 Q187 36 200 24 Q213 36 200 52Z" />
          <path d="M181 67 Q162 52 172 34 Q187 42 181 67Z" />
          <path d="M219 67 Q238 52 228 34 Q213 42 219 67Z" />
          <circle cx="200" cy="143" r="2.5" />
          <circle cx="183" cy="22" r="2" />
          <circle cx="217" cy="22" r="2" />
        </g>
      ))}
      {Array.from({ length: 8 }, (_, i) => <path key={i} transform={`rotate(${i * 45} 200 200)`} d="M200 200 Q184 178 200 156 Q216 178 200 200Z" />)}
    </svg>
  );
}