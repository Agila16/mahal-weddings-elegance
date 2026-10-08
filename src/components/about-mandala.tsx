export function AboutMandala() {
  return <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true" className="pointer-events-none absolute bottom-1 left-1 z-0 size-32 text-gold/30 md:size-44">
    <circle cx="200" cy="200" r="44"/>
    <circle cx="200" cy="200" r="78"/>
    <circle cx="200" cy="200" r="130"/>
    <circle cx="200" cy="200" r="178"/>
    {Array.from({length:16},(_,i)=><g key={i} transform={`rotate(${i*22.5} 200 200)`}>
      <path d="M200 156 Q169 120 200 80 Q231 120 200 156Z"/>
      <path d="M200 120 Q163 75 200 22 Q237 75 200 120Z"/>
      <path d="M200 80 Q187 53 200 36 Q213 53 200 80Z"/>
      <circle cx="200" cy="15" r="3"/>
    </g>)}
  </svg>;
}