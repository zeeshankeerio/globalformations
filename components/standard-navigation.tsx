import Link from "next/link"
import ContactButton from "@/components/contact-button"
import MobileNav from "@/components/mobile-nav"
import ProfessionalLogo from "@/components/professional-logo"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Building2, Code2, ArrowRight } from "lucide-react"

interface NavigationProps {
  currentPage?: string
}

export default function StandardNavigation({ currentPage }: NavigationProps) {
  const navItems = [
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50 shadow-lg shadow-slate-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <ProfessionalLogo size="md" variant="light" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`transition-colors duration-200 font-medium flex items-center gap-1 outline-none ${
                currentPage === "/services"
                  ? "text-primary font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}>
                Services
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72 p-2 shadow-xl border-slate-200">
                <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
                  <Link href="/services" className="cursor-pointer w-full group">
                    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200">
                      <div className="mt-0.5 p-2 rounded-lg bg-blue-100 group-hover:bg-blue-600 transition-colors duration-200">
                        <Building2 className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-200" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors duration-200 flex items-center gap-2">
                          Business Formation
                          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">LLC & Business Setup Services</p>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                
                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-1" />
                
                <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
                  <a 
                    href="https://mindscapeanalytics.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cursor-pointer w-full group"
                  >
                    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-200">
                      <div className="mt-0.5 p-2 rounded-lg bg-purple-100 group-hover:bg-purple-600 transition-colors duration-200">
                        <Code2 className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors duration-200" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900 group-hover:text-purple-700 transition-colors duration-200 flex items-center gap-2">
                          Software Services
                          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">AI & Web Development Solutions</p>
                      </div>
                    </div>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 font-medium ${
                  currentPage === item.href
                    ? "text-primary font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ContactButton
              variant="whatsapp"
              message="consultation"
              context="header"
              className="bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all duration-200 border-0"
              size="sm"
            >
              Free Consultation
            </ContactButton>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </nav>
  )
}