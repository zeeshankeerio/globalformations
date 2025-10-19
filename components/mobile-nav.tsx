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
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="relative z-50"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={toggleMenu} />
      )}

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed top-0 right-0 z-40 h-full w-80 max-w-[85vw] bg-background/95 backdrop-blur-md border-l border-border/50 shadow-2xl transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/50">
            <ProfessionalLogo size="sm" variant="light" href="/" />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Close mobile menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation items */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-6">
              {/* Services Dropdown */}
              <li>
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full text-lg font-medium text-slate-700 hover:text-primary transition-colors py-2"
                >
                  <span className="flex items-center gap-2">
                    Services
                  </span>
                  <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", isServicesOpen && "rotate-180")} />
                </button>
                {isServicesOpen && (
                  <ul className="mt-3 space-y-2 animate-in slide-in-from-top-2 duration-300">
                    <li>
                      <a
                        href="/services"
                        onClick={toggleMenu}
                        className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 group"
                      >
                        <div className="mt-0.5 p-2 rounded-lg bg-blue-500 group-hover:bg-blue-600 transition-colors duration-200">
                          <Building2 className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 font-semibold text-slate-900 mb-0.5">
                            Business Formation
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                          </div>
                          <span className="text-xs text-slate-600">LLC & Business Setup Services</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://mindscapeanalytics.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={toggleMenu}
                        className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 transition-all duration-200 group"
                      >
                        <div className="mt-0.5 p-2 rounded-lg bg-purple-500 group-hover:bg-purple-600 transition-colors duration-200">
                          <Code2 className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 font-semibold text-slate-900 mb-0.5">
                            Software Services
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                          </div>
                          <span className="text-xs text-slate-600">AI & Web Development Solutions</span>
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
                    className="block text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Section */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <ContactButton
                variant="whatsapp"
                message="consultation"
                context="mobile-nav"
                className="w-full justify-center bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-primary/25 button-primary"
                size="lg"
              >
                Free Consultation
              </ContactButton>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-border/50">
            <p className="text-sm text-muted-foreground text-center">
              Start your LLC in 1 day
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
