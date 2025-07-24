import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, FileText, Phone, AlertTriangle, Building, Users, TrendingUp, Calculator, Calendar } from 'lucide-react'
import Breadcrumbs from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'EIN for Business Acquisition: Asset vs Stock Purchase Tax Strategy | EIN National Filing',
  description: 'Learn when you need an EIN for business acquisitions, asset purchases, and stock deals. Expert guidance on M&A tax implications and EIN requirements.',
  keywords: 'business acquisition EIN, asset purchase EIN, stock purchase EIN, M&A tax ID, business acquisition tax',
  alternates: {
    canonical: 'https://einnationalfiling.com/blog/ein-for-business-acquisition',
  },
  openGraph: {
    title: 'EIN for Business Acquisition: Asset vs Stock Purchase Tax Strategy',
    description: 'Professional guidance on EIN requirements for business acquisitions and M&A transactions.',
    url: 'https://einnationalfiling.com/blog/ein-for-business-acquisition',
    type: 'article',
    publishedTime: '2024-12-15T13:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    authors: ['EIN Filing Experts'],
    section: 'Business Guides',
    tags: ['Business Acquisition', 'M&A', 'Asset Purchase', 'Stock Purchase'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EIN for Business Acquisition: Asset vs Stock Purchase Tax Strategy',
    description: 'Professional guidance on EIN requirements for business acquisitions and M&A transactions.',
  },
}

export default function EINForBusinessAcquisition() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'EIN for Business Acquisition', href: '/blog/ein-for-business-acquisition', current: true },
  ]

  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <Breadcrumbs items={breadcrumbItems} />
        
        <article className="irs-section">
          <div className="irs-container">
            {/* Header */}
            <header className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-primary mr-3" />
                <span className="text-primary font-semibold text-lg">Business Acquisition Guide</span>
              </div>
              <h1 className="irs-heading text-4xl md:text-5xl mb-6">
                EIN for Business Acquisition
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Asset vs Stock Purchase Tax Strategy & EIN Requirements
              </p>
            </header>
            
                         {/* Main Content */}
             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-12">
              {/* Overview */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">
                  Business Acquisition EIN Requirements Overview
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h3 className="text-xl font-semibold text-purple-900 mb-4">When EIN is Required</h3>
                    <ul className="space-y-3 text-purple-800">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Asset Purchases:</strong> New EIN typically required for acquired business operations
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Entity Formation:</strong> Creating new acquisition entities requires EINs
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Holding Companies:</strong> New EINs for acquisition holding structures
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">M&A Transaction Types</h3>
                    <ul className="space-y-3 text-blue-800">
                      <li className="flex items-start">
                        <Building className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Stock Purchase:</strong> Acquiring shares of existing entity
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FileText className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Asset Purchase:</strong> Acquiring specific business assets and operations
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Users className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Merger & Consolidation:</strong> Combining entities under new or existing structure
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Asset vs Stock Purchase */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">
                  Asset Purchase vs Stock Purchase EIN Strategy
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Asset Purchase Structure</h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded border border-green-300">
                        <h4 className="font-semibold text-green-800 mb-2">EIN Requirements:</h4>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• New EIN required for acquired business operations</li>
                          <li>• Acquiring entity may need additional EIN for division</li>
                          <li>• Seller retains original EIN for remaining operations</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border border-green-300">
                        <h4 className="font-semibold text-green-800 mb-2">Tax Benefits:</h4>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• Step-up basis on acquired assets</li>
                          <li>• Selective liability assumption</li>
                          <li>• Depreciation restart opportunities</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                    <h3 className="text-xl font-semibold text-orange-900 mb-4">Stock Purchase Structure</h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded border border-orange-300">
                        <h4 className="font-semibold text-orange-800 mb-2">EIN Requirements:</h4>
                        <ul className="text-sm text-orange-700 space-y-1">
                          <li>• Target company retains existing EIN</li>
                          <li>• Acquiring entity may need new EIN for holding structure</li>
                          <li>• No new EIN for target's business operations</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border border-orange-300">
                        <h4 className="font-semibold text-orange-800 mb-2">Tax Considerations:</h4>
                        <ul className="text-sm text-orange-700 space-y-1">
                          <li>• Carryover basis in target assets</li>
                          <li>• Assumption of all target liabilities</li>
                          <li>• Potential for NOL carryforwards</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Timeline & Process */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">
                  M&A EIN Timeline & Process
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <Calendar className="mr-2 h-5 w-5 text-gray-600" />
                        Pre-Closing Phase
                      </h3>
                      <p className="text-gray-700 text-sm mb-3">
                        Plan EIN requirements during due diligence and structure negotiations.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Analyze target's current EIN structure</li>
                        <li>• Determine post-acquisition entity needs</li>
                        <li>• Plan holding company structures</li>
                        <li>• Coordinate with tax advisors</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-gray-600" />
                        Closing Phase
                      </h3>
                      <p className="text-gray-700 text-sm mb-3">
                        Execute EIN applications and transfers at closing.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Submit new EIN applications</li>
                        <li>• Update target entity information</li>
                        <li>• Transfer asset-related EINs</li>
                        <li>• Document entity ownership changes</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <FileText className="mr-2 h-5 w-5 text-gray-600" />
                        Post-Closing Integration
                      </h3>
                      <p className="text-gray-700 text-sm mb-3">
                        Integrate acquired operations under proper EIN structure.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Update banking and vendor records</li>
                        <li>• Transfer licenses and permits</li>
                        <li>• Consolidate payroll systems</li>
                        <li>• File necessary tax elections</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <Calculator className="mr-2 h-5 w-5 text-gray-600" />
                        Ongoing Compliance
                      </h3>
                      <p className="text-gray-700 text-sm mb-3">
                        Maintain proper EIN compliance for integrated entities.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• File consolidated or separate returns</li>
                        <li>• Maintain subsidiary EIN records</li>
                        <li>• Monitor state registration requirements</li>
                        <li>• Plan for future restructuring</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Complex Structures */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">
                  Complex Acquisition Structures
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Holding Company Acquisitions</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Structure Benefits:</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Liability isolation between entities</li>
                          <li>• Simplified future divestitures</li>
                          <li>• Flexible financing arrangements</li>
                          <li>• Tax planning opportunities</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">EIN Requirements:</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Separate EIN for holding company</li>
                          <li>• Target retains operating EIN</li>
                          <li>• Additional EINs for new subsidiaries</li>
                          <li>• Consolidated group election considerations</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h3 className="text-xl font-semibold text-purple-900 mb-4">Multi-Entity Acquisitions</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-2">Coordination Challenges:</h4>
                        <ul className="text-sm text-purple-700 space-y-1">
                          <li>• Multiple target EINs to manage</li>
                          <li>• Varying state registration requirements</li>
                          <li>• Complex integration timelines</li>
                          <li>• Regulatory approval considerations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-2">Professional Solutions:</h4>
                        <ul className="text-sm text-purple-700 space-y-1">
                          <li>• Centralized EIN application processing</li>
                          <li>• State registration coordination</li>
                          <li>• Integration timeline management</li>
                          <li>• Compliance monitoring systems</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Common Mistakes */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">
                  Common M&A EIN Mistakes
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border-l-4 border-red-500 p-6">
                    <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                      <AlertTriangle className="mr-2 h-5 w-5" />
                      Mistake: Delayed EIN Applications
                    </h3>
                    <p className="text-red-700 text-sm mb-3">
                      Waiting until after closing to apply for required EINs delays business integration and banking setup.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="text-green-800 text-sm">
                        <strong>Solution:</strong> Apply for EINs during due diligence phase with professional coordination to ensure closing readiness.
                      </p>
                    </div>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-500 p-6">
                    <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                      <AlertTriangle className="mr-2 h-5 w-5" />
                      Mistake: Incorrect Structure Planning
                    </h3>
                    <p className="text-red-700 text-sm mb-3">
                      Poor entity structure planning leads to tax inefficiencies and compliance complications.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="text-green-800 text-sm">
                        <strong>Solution:</strong> Engage tax and legal professionals early to optimize entity structure and EIN requirements.
                      </p>
                    </div>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-500 p-6">
                    <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                      <AlertTriangle className="mr-2 h-5 w-5" />
                      Mistake: Mishandling Target EINs
                    </h3>
                    <p className="text-red-700 text-sm mb-3">
                      Incorrectly managing target company EINs during acquisition creates tax and compliance issues.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="text-green-800 text-sm">
                        <strong>Solution:</strong> Properly document EIN transfers and updates with professional guidance to maintain compliance.
                      </p>
                    </div>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-500 p-6">
                    <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                      <AlertTriangle className="mr-2 h-5 w-5" />
                      Mistake: Inadequate Documentation
                    </h3>
                    <p className="text-red-700 text-sm mb-3">
                      Poor documentation of EIN changes and entity relationships complicates future audits and transactions.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="text-green-800 text-sm">
                        <strong>Solution:</strong> Maintain comprehensive records of all EIN applications, transfers, and entity structure changes.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Professional Benefits */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">
                  Professional M&A EIN Services
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Expert M&A Support</h3>
                    <ul className="space-y-3 text-green-800">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Transaction Expertise:</strong> Specialized knowledge of acquisition EIN requirements
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Structure Optimization:</strong> Tax-efficient entity structure planning
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Timeline Coordination:</strong> Synchronized with closing schedules
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h3 className="text-xl font-semibold text-purple-900 mb-4">Strategic Benefits</h3>
                    <ul className="space-y-3 text-purple-800">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Risk Mitigation:</strong> Avoid costly EIN-related transaction delays
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Compliance Assurance:</strong> Meet all federal and state requirements
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Integration Support:</strong> Smooth post-acquisition entity management
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Final CTA */}
              <section className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-lg border border-purple-200 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for Your Business Acquisition?</h2>
              <p className="text-gray-700 mb-6 text-lg">
                Don't let EIN processing delays compromise your M&A transaction. Our specialists ensure proper EIN handling for complex business acquisitions.
              </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/apply"
                    className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    Start Your M&A EIN Process
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 border border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold rounded-lg transition-colors"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Consult M&A Specialists
              </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>
    </>
  )
} 