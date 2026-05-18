import { Link } from 'react-router-dom'

export default function ServicePageShell({
  children,
  backTo = { pathname: '/', hash: 'services' },
  backLabel = '← Back to Services',
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white">
      <div className="mx-auto max-w-4xl px-6 pt-8">
        <Link
          to={backTo}
          className="inline-flex text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
        >
          {backLabel}
        </Link>
      </div>
      {children}
    </div>
  )
}
