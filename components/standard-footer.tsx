import Link from "next/link"
import { Button } from "@/components/ui/button"
import ContactButton from "@/components/contact-button"
import ProfessionalLogo from "@/components/professional-logo"
import { 
  Shield, 
  Award, 
  Mail, 
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Star,
  CheckCircle
} from "lucide-react"

export default function StandardFooter() {
  const currentYear = new Date().getFullYear()

  const footerSections = {
    services: [
      { label: "LLC Formation", href: "/services#llc-formation" },
      { label: "EIN Application", href: "/services#ein-application" },
      { label: "Bank Account Setup", href: "/services#bank-setup" },
      { label: "Business Consultation", href: "/services#consultation" },
      { label: "Registered Agent", href: "/services#registered-agent" },
      { label: "Operating Agreement", href: "/services#operating-agreement" }
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about#team" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Success Stories", href: "/testimonials#success-stories" },
      { label: "Press & Media", href: "/about#press" },
      { label: "Careers", href: "/careers" }
    ],
    resources: [
      { label: "Free Business Guide", href: "/resources/business-guide" },
      { label: "LLC Formation Guide", href: "/resources/llc-guide" },
      { label: "State Comparison", href: "/resources/state-comparison" },
      { label: "Tax Information", href: "/resources/tax-info" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" }
    ],
    legal: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Refund Policy", href: "/legal/refunds" },
      { label: "Disclaimer", href: "/legal/disclaimer" },
      { label: "Compliance", href: "/legal/compliance" },
      { label: "Security", href: "/legal/security" }
    ]
  }

  const trustBadges = [
    { icon: Shield, text: "SSL Secured" },
    { icon: Award, text: "BBB A+ Rating" },
    { icon: CheckCircle, text: "Money-Back Guarantee" },
    { icon: Star, text: "4.9/5 Rating" }
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/mindscapeanalytics", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/mindscapeanalytics", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/mindscapeanalytics", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/mindscapeanalytics", label: "Instagram" }
  ]

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section - Company Info & CTA */}
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-4 sm:mb-6">
                <ProfessionalLogo size="lg" variant="dark" showTagline={true} href="/" />
              </div>
              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 font-body">
                Professional LLC formation services by Mindscape Global Formations, a division of Mindscape Analytics. Fast, affordable, and reliable business formation with expert guidance.
              </p>
              
              {/* Contact Info - Mobile responsive */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-start gap-2 sm:gap-3 text-white/80">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-xs sm:text-sm lg:text-base break-all">info@mindscapeanalytics.com</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-white/80">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-xs sm:text-sm lg:text-base leading-relaxed">30 N Gould St Ste N, Sheridan, WY 82801</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-white/80">
                  <span className="text-xs sm:text-sm">💬 WhatsApp Support Available</span>
                </div>
              </div>

              {/* Social Links - Mobile optimized */}
              <div className="flex gap-2 sm:gap-3 lg:gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors touch-manipulation"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Section - Mobile responsive */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20">
                <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 font-heading text-white">
                    Ready to Start Your Business?
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 font-body">
                    Join thousands of entrepreneurs who trust Mindscape Global Formations
                  </p>
                  <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 justify-center">
                    <Link href="/pricing" className="w-full sm:w-auto">
                      <Button 
                        size="lg" 
                        className="w-full sm:w-auto bg-secondary text-white hover:bg-secondary/90 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 font-semibold shadow-lg min-h-[44px]"
                      >
                        Start Your LLC Today
                      </Button>
                    </Link>
                    <ContactButton
                      variant="whatsapp"
                      message="consultation"
                      context="footer-cta"
                      size="lg"
                      className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 bg-transparent font-semibold min-h-[44px]"
                    >
                      Free Consultation
                    </ContactButton>
                  </div>
                </div>

                {/* Trust Badges - Mobile responsive */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
                  {trustBadges.map((badge, index) => (
                    <div key={index} className="text-center p-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2">
                        <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-secondary" />
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-white">{badge.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Links Section - Mobile responsive */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
            {/* Services */}
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 lg:mb-6 font-heading text-base sm:text-lg lg:text-xl text-white">Services</h4>
              <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                {footerSections.services.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="text-white/80 hover:text-secondary transition-colors font-body text-xs sm:text-sm lg:text-base py-0.5 sm:py-1 block leading-relaxed"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 lg:mb-6 font-heading text-base sm:text-lg lg:text-xl text-white">Company</h4>
              <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                {footerSections.company.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="text-white/80 hover:text-secondary transition-colors font-body text-xs sm:text-sm lg:text-base py-0.5 sm:py-1 block leading-relaxed"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 lg:mb-6 font-heading text-base sm:text-lg lg:text-xl text-white">Resources</h4>
              <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                {footerSections.resources.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="text-white/80 hover:text-secondary transition-colors font-body text-xs sm:text-sm lg:text-base py-0.5 sm:py-1 block leading-relaxed"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 lg:mb-6 font-heading text-base sm:text-lg lg:text-xl text-white">Legal</h4>
              <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                {footerSections.legal.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="text-white/80 hover:text-secondary transition-colors font-body text-xs sm:text-sm lg:text-base py-0.5 sm:py-1 block leading-relaxed"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Mobile responsive */}
      <div className="border-t border-white/20 py-4 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
            <div className="text-white/80 text-center font-body">
              <p className="text-xs sm:text-sm lg:text-base">&copy; {currentYear} Mindscape Analytics LLC. All rights reserved.</p>
              <p className="text-xs sm:text-sm mt-1 leading-relaxed">
                Mindscape Global Formations • Professional LLC Formation Services • SSL Secure • Money-Back Guarantee
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm text-white/60">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-secondary flex-shrink-0" />
                <span>256-bit SSL</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-secondary flex-shrink-0" />
                <span>BBB A+</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-secondary flex-shrink-0" />
                <span>Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}