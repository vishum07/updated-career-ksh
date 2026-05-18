import ServiceChapter from '../components/services/ServiceChapter'
import ServicePageShell from '../components/services/ServicePageShell'
import { civilChapter } from '../data/civilSolutionsPage'

export default function CivilSolutionsPage() {
  return (
    <ServicePageShell>
      <ServiceChapter {...civilChapter} HeadingTag="h1" />
    </ServicePageShell>
  )
}
