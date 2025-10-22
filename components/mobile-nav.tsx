"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import ContactButton from "@/components/contact-button"
import ProfessionalLogo from "@/components/professional-logo"
import { Menu, X, ChevronDown, Building2, Code2, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  className?: string
}

export default function MobileNav({ className }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleServices = () => setIsServicesOpen(!isServicesOpen)

  const navItems = [
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <div className={cn("md:hidden", className)}>
      {/* Mobile menu button - Enhanced touch target */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="relative z-50 h-12 w-12 p-3 hover:bg-slate-100 active:bg-slate-200 transition-all duration-200"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-slate-700" />
        ) : (
          <Menu className="h-6 w-6 text-slate-700" />
        )}
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm" 
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ height: '100dvh' }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full min-h-screen">
          {/* Header - Full width and attractive */}
          <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-indigo-50">
            <ProfessionalLogo size="sm" variant="light" href="/" />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="h-10 w-10 p-2 hover:bg-white/80 active:bg-white transition-all duration-200 rounded-full"
              aria-label="Close mobile menu"
            >
              <X className="h-5 w-5 text-slate-700" />
            </Button>
          </div>

          {/* Navigation items - Full height and attractive */}
          <nav className="flex-1 px-6 py-8 overflow-y-auto bg-white">
            <ul className="space-y-6">
              {/* Services Dropdown - Enhanced mobile */}
              <li>
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 active:bg-blue-100"
                >
                  <span className="flex items-center gap-3">
                    Services
                  </span>
                  <ChevronDown className={cn("w-6 h-6 transition-transform duration-300", isServicesOpen && "rotate-180")} />
                </button>
                {isServicesOpen && (
                  <ul className="mt-4 space-y-4 animate-in slide-in-from-top-2 duration-300">
                    <li>
                      <a
                        href="/services"
                        onClick={toggleMenu}
                        className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 group border border-blue-100/50 shadow-sm"
                      >
                        <div className="mt-1 p-3 rounded-xl bg-blue-500 group-hover:bg-blue-600 transition-colors duration-200 shadow-md">
                          <Building2 className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 font-bold text-slate-900 mb-2 text-lg">
                            Business Formation
                            <ArrowRight className="w-5 h-5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                          </div>
                          <span className="text-sm text-slate-600 leading-relaxed">LLC & Business Setup Services</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://mindscapeanalytics.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={toggleMenu}
                        className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 transition-all duration-200 group border border-purple-100/50 shadow-sm"
                      >
                        <div className="mt-1 p-3 rounded-xl bg-purple-500 group-hover:bg-purple-600 transition-colors duration-200 shadow-md">
                          <Code2 className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 font-bold text-slate-900 mb-2 text-lg">
                            Software Services
                            <ArrowRight className="w-5 h-5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                          </div>
                          <span className="text-sm text-slate-600 leading-relaxed">AI & Web Development Solutions</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={toggleMenu}
                    className="block text-xl font-semibold text-slate-700 hover:text-blue-600 transition-colors py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50 active:bg-slate-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Section - Enhanced design */}
            <div className="mt-10 pt-8 border-t border-slate-100">
              <ContactButton
                variant="whatsapp"
                message="consultation"
                context="mobile-nav"
                className="w-full justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-xl hover:shadow-blue-500/30 py-5 px-8 text-lg font-bold rounded-2xl transition-all duration-200 transform hover:scale-105"
                size="lg"
              >
                Free Consultation
              </ContactButton>
              <p className="text-center text-sm text-slate-500 mt-4 font-medium">
                Get expert guidance for your business
              </p>
            </div>
          </nav>

          {/* Footer - Attractive design */}
          <div className="p-6 border-t border-slate-100 bg-gradient-to-r from-slate-50 to-blue-50">
            <div className="text-center">
              <p className="text-lg font-bold text-slate-800 mb-1">
                Start your LLC in 1 day
              </p>
              <p className="text-sm text-slate-600">
                Professional • Fast • Reliable
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
