import { Navigate, useParams } from 'react-router-dom'
import ServiceChapter from '../components/services/ServiceChapter'
import ServicePageShell from '../components/services/ServicePageShell'
import { itSolutionBySlug } from '../data/itSolutions/index.js'

export default function ITSolutionDetailPage() {
  const { slug } = useParams()
  const data = itSolutionBySlug[slug]
  console.log('🔍 [DEBUG] ITSolutionDetailPage rendering, slug:', slug, 'data:', !!data);

  if (!data) {
    return <Navigate to="/services/it" replace />
  }

  return (
    <ServicePageShell
      backTo={{ pathname: '/services/it' }}
      backLabel="← Back to Information Technology solutions"
    >
      <ServiceChapter {...data} />
    </ServicePageShell>
  )
}
