import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import CareersPage from './pages/CareersPage'
import CareersApplyPage from './pages/CareersApplyPage'
import PrivacyPage from './pages/PrivacyPage'
import AboutPage from './pages/AboutPage'
import MechanicalSolutionsPage from './pages/MechanicalSolutionsPage'
import CivilSolutionsPage from './pages/CivilSolutionsPage'
import ITSolutionsPage from './pages/ITSolutionsPage'
import ITSolutionDetailPage from './pages/ITSolutionDetailPage'
import ResourcesPage from './pages/ResourcesPage'
import ServicesPage from './pages/ServicesPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/services/mechanical" element={<MechanicalSolutionsPage />} />
          <Route path="/services/civil" element={<CivilSolutionsPage />} />
          <Route path="/services/it/:slug" element={<ITSolutionDetailPage />} />
          <Route path="/services/it" element={<ITSolutionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/apply" element={<CareersApplyPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
