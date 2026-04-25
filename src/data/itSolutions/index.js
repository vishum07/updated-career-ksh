import { ecommercePageData } from './ecommerce'
import { elearningPageData } from './elearning'
import { fintechPageData } from './fintech'
import { hospitalPageData } from './hospital'
import { hrmsPageData } from './hrms'
import { importExportPageData } from './importExport'
import { manufacturingItPageData } from './manufacturingIt'
import { pharmaceuticalPageData } from './pharmaceutical'
import { tourismPageData } from './tourism'

/** slug → page props for ServiceChapter */
export const itSolutionBySlug = {
  ecommerce: ecommercePageData,
  elearning: elearningPageData,
  fintech: fintechPageData,
  'hospital-management': hospitalPageData,
  hrms: hrmsPageData,
  'import-export': importExportPageData,
  manufacturing: manufacturingItPageData,
  pharmaceutical: pharmaceuticalPageData,
  tourism: tourismPageData,
}

export const itSolutionNavItems = [
  { name: 'E-commerce', slug: 'ecommerce' },
  { name: 'eLearning solutions', slug: 'elearning' },
  { name: 'FinTech', slug: 'fintech' },
  { name: 'Hospital Management Solutions', slug: 'hospital-management' },
  { name: 'HRMS solutions', slug: 'hrms' },
  { name: 'Import-export', slug: 'import-export' },
  { name: 'Manufacturing solutions', slug: 'manufacturing' },
  { name: 'Pharmaceutical solutions', slug: 'pharmaceutical' },
  { name: 'Tourism', slug: 'tourism' },
]
