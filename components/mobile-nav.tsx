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
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={toggleMenu} />
      )}

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed top-0 right-0 z-40 h-full w-full max-w-sm bg-white/96 backdrop-blur-lg border-l border-slate-200/60 shadow-2xl transform transition-transform duration-300 ease-in-out safe-area-padding",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header - Better mobile spacing */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200/60 bg-white/80 backdrop-blur-sm">
            <ProfessionalLogo size="sm" variant="light" href="/" />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="h-12 w-12 p-3 hover:bg-slate-100 active:bg-slate-200 transition-all duration-200"
              aria-label="Close mobile menu"
            >
              <X className="h-5 w-5 text-slate-700" />
            </Button>
          </div>

          {/* Navigation items - Improved mobile layout */}
          <nav className="flex-1 px-4 sm:px-6 py-6 overflow-y-auto">
            <ul className="space-y-4">
              {/* Services Dropdown - Enhanced mobile */}
              <li>
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full text-lg font-semibold text-slate-800 hover:text-blue-600 transition-colors py-3 px-2 rounded-lg hover:bg-slate-50 active:bg-slate-100"
                >
                  <span className="flex items-center gap-2">
                    Services
                  </span>
                  <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", isServicesOpen && "rotate-180")} />
                </button>
                {isServicesOpen && (
                  <ul className="mt-3 space-y-3 animate-in slide-in-from-top-2 duration-300">
                    <li>
                      <a
                        href="/services"
                        onClick={toggleMenu}
                        className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 group border border-blue-100/50"
                      >
                        <div className="mt-1 p-2.5 rounded-lg bg-blue-500 group-hover:bg-blue-600 transition-colors duration-200 shadow-sm">
                          <Building2 className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 font-bold text-slate-900 mb-1 text-base">
                            Business Formation
                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
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
                        className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 transition-all duration-200 group border border-purple-100/50"
                      >
                        <div className="mt-1 p-2.5 rounded-lg bg-purple-500 group-hover:bg-purple-600 transition-colors duration-200 shadow-sm">
                          <Code2 className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 font-bold text-slate-900 mb-1 text-base">
                            Software Services
                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
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
                    className="block text-lg font-medium text-slate-700 hover:text-blue-600 transition-colors py-3 px-2 rounded-lg hover:bg-slate-50 active:bg-slate-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Section - Better mobile spacing */}
            <div className="mt-8 pt-6 border-t border-slate-200/60">
              <ContactButton
                variant="whatsapp"
                message="consultation"
                context="mobile-nav"
                className="w-full justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-blue-500/25 py-4 px-6 text-base font-semibold rounded-xl transition-all duration-200"
                size="lg"
              >
                Free Consultation
              </ContactButton>
            </div>
          </nav>

          {/* Footer - Better mobile */}
          <div className="p-4 sm:p-6 border-t border-slate-200/60 bg-slate-50/80">
            <p className="text-sm text-slate-600 text-center font-medium">
              Start your LLC in 1 day
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
