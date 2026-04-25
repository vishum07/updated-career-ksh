import ParticleCanvas from './ui//ParticleCanvas'

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, #14121c 0%, #111827 38%, #0f2433 72%, #0c1018 100%)
          `,
        }}
      />

      <ParticleCanvas />

      <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-violet-900/28 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-sky-900/26 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '5s' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-slate-800/22 rounded-full blur-[100px]" />

      <div className="absolute inset-0 bg-black/14" />
    </div>
  )
}
