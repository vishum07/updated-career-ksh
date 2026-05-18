import ServiceChapter from '../components/services/ServiceChapter'
import ServicePageShell from '../components/services/ServicePageShell'
import { mechanicalChapters } from '../data/mechanicalSolutionsPage'

export default function MechanicalSolutionsPage() {
  return (
    <ServicePageShell>
      {mechanicalChapters.map((ch, i) => {
        const { slug, ...chapter } = ch
        return (
          <ServiceChapter
            key={slug}
            {...chapter}
            HeadingTag={i === 0 ? 'h1' : 'h2'}
            topDivider={i > 0}
          />
        )
      })}
    </ServicePageShell>
  )
}
