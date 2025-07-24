import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Apply for EIN | Start Your Federal Tax ID Application',
  description: 'Start your EIN application process. Select your business entity type and get your Federal Tax ID number fast.',
}

export default function ApplyPage() {
  // Redirect to home page with entity selection section
  redirect('/#entity-types')
} 