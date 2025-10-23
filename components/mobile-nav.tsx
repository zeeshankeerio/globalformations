"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import ContactButton from "@/components/contact-button"
import ProfessionalLogo from "@/components/professional-logo"
import { Menu, X, ChevronDown, Building2, Code2 } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface MobileNavProps {
  className?: string
}

export default function MobileNav({ className }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setIsServicesOpen(false) // Reset services dropdown when closing
  }
  
  const toggleServices = () => setIsServicesOpen(!isServicesOpen)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navItems = [
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  const handleNavClick = () => {
    setIsOpen(false)
    setIsServicesOpen(false)
  }

  return (
    <div className={cn("md:hidden", className)}>
      {/* Mobile menu toggle button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="relative z-50 h-11 w-11 p-2.5 hover:bg-slate-100 active:bg-slate-200 transition-all duration-200 rounded-lg"
        aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="h-5 w-5 text-slate-700" />
        ) : (
          <Menu className="h-5 w-5 text-slate-700" />
        )}
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" 
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={cn(
          "fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        style={{ height: '100vh', minHeight: '100dvh' }}
      >
        {/* Menu content container - Full width on mobile */}
        <div className="h-full w-full bg-white shadow-2xl">
          <div className="flex h-full flex-col">
            
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-slate-200 bg-white shrink-0">
              <ProfessionalLogo size="md" variant="light" href="/" />
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="h-12 w-12 p-3 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-slate-600" />
              </Button>
            </div>

            {/* Scrollable navigation content */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <nav>
                <ul className="space-y-0.5">
                  
                  {/* Services dropdown */}
                  <li>
                    <button
                      onClick={toggleServices}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-slate-800 hover:bg-slate-100 hover:text-blue-600 transition-colors"
                    >
                      <span>Services</span>
                      <ChevronDown 
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          isServicesOpen && "rotate-180"
                        )} 
                      />
                    </button>
                    
                    {/* Services submenu */}
                    {isServicesOpen && (
                      <div className="mt-1 space-y-1 pl-3">
                        <Link
                          href="/services"
                          onClick={handleNavClick}
                          className="flex items-center gap-3 rounded-lg bg-blue-50 p-3 hover:bg-blue-100 transition-colors border border-blue-100"
                        >
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500">
                            <Building2 className="h-3.5 w-3.5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-slate-900 text-xs">Business Formation</div>
                            <div className="text-xs text-slate-600">LLC & Business Setup</div>
                          </div>
                        </Link>
                        
                        <Link
                          href="https://mindscapeanalytics.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleNavClick}
                          className="flex items-center gap-3 rounded-lg bg-purple-50 p-3 hover:bg-purple-100 transition-colors border border-purple-100"
                        >
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-500">
                            <Code2 className="h-3.5 w-3.5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-slate-900 text-xs">Software Services</div>
                            <div className="text-xs text-slate-600">AI & Web Development</div>
                          </div>
                        </Link>
                      </div>
                    )}
                  </li>

                  {/* Regular navigation items */}
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={handleNavClick}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* CTA Section */}
                <div className="mt-6 space-y-4">
                  <div className="rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
                    <ContactButton
                      variant="whatsapp"
                      message="consultation"
                      context="mobile-nav"
                      className="w-full justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-sm text-sm"
                      size="lg"
                    >
                      Free Consultation
                    </ContactButton>
                    <p className="mt-2 text-center text-xs text-slate-600">
                      Get expert guidance for your business
                    </p>
                  </div>
                </div>
              </nav>
            </div>

            {/* Footer */}
            <div className="border-t border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-6 shrink-0">
              <div className="text-center">
                <p className="text-base font-bold text-slate-800">Start your LLC in 1 day</p>
                <p className="text-sm text-slate-600 mt-1">Professional • Fast • Reliable</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
