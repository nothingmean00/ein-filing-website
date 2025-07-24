"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
// AlertTriangle import is no longer needed
// import { AlertTriangle } from 'lucide-react'

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <>
      {/* Disclaimer Bar - Homepage Only, Above Header */}
      {isHomePage && (
        <div className="bg-gray-50 text-black text-xs py-1 px-3 border-b border-gray-100">
          <div className="irs-container flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-xs text-black font-light">You can obtain an EIN directly from the IRS at no cost</span>
            </div>
            <div className="text-xs text-black font-light hidden lg:block">
              Independent service provider
            </div>
          </div>
        </div>
      )}

      {/* Original Header Content */}
      <header className="sticky top-0 z-50 bg-primary text-white py-4 shadow-md">
        <div className="irs-container">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold flex items-center" aria-label="EIN National Filing Home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7 mr-2"
                aria-hidden="true"
              >
                <path d="M2 3h20" />
                <path d="M2 8h20" />
                <path d="M6 13h14" />
                <path d="M10 18h10" />
              </svg>
              <span>EIN National Filing</span>
            </Link>
            <nav className="hidden md:flex space-x-6 text-base font-medium" aria-label="Main Navigation">
              <Link href="/" className="hover:underline py-1">
                Home
              </Link>
              <Link href="/form-ss4" className="hover:underline py-1">
                Form SS-4 Reference
              </Link>
              <Link href="/#entity-definitions" className="hover:underline py-1">
                Entity Types
              </Link>
              <Link href="/#faq" className="hover:underline py-1">
                FAQ
              </Link>
              <Link href="/contact" className="hover:underline py-1">
                Contact
              </Link>
            </nav>
            <button
              className="md:hidden flex items-center"
              aria-label="Open mobile menu"
              aria-expanded="false"
              aria-controls="mobile-menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
