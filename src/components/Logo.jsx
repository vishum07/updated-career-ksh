/** Kshetrapati Industries logo — WhatsApp upload in \`public\` */
export default function Logo({ className = '' }) {
  return (
    <span className={`relative inline-flex shrink-0 overflow-hidden h-14 sm:h-16 ${className}`}>
      <img
        src="/Sleek%20Kshetrapati%20Industries%20logo%20design.png"
        alt="Kshetrapati Industries"
        className="h-full w-auto object-contain object-left"
        width={210}
        height={48}
        decoding="async"
      />
    </span>
  )
}
