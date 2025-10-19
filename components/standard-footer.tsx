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
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section - Company Info & CTA */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <ProfessionalLogo size="lg" variant="dark" showTagline={true} href="/" />
              </div>
              <p className="text-white/90 text-lg leading-relaxed mb-6 font-body">
                Professional LLC formation services by Mindscape Global Formations, a division of Mindscape Analytics. Fast, affordable, and reliable business formation with expert guidance.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-white/80">
                  <Mail className="w-5 h-5 text-secondary" />
                  <span className="font-medium">info@mindscapeanalytics.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span className="font-medium">30 N Gould St Ste N, Sheridan, WY 82801</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <span className="text-sm">💬 WhatsApp Support Available</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4 font-heading text-white">
                    Ready to Start Your Business?
                  </h3>
                  <p className="text-xl text-white/90 mb-6 font-body">
                    Join thousands of entrepreneurs who trust Mindscape Global Formations
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/pricing">
                      <Button 
                        size="lg" 
                        className="bg-secondary text-white hover:bg-secondary/90 text-lg px-8 py-3 font-semibold shadow-lg"
                      >
                        Start Your LLC Today
                      </Button>
                    </Link>
                    <ContactButton
                      variant="whatsapp"
                      message="consultation"
                      context="footer-cta"
                      size="lg"
                      className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3 bg-transparent font-semibold"
                    >
                      Free Consultation
                    </ContactButton>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {trustBadges.map((badge, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <badge.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="text-sm font-medium text-white">{badge.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Services */}
            <div>
              <h4 className="font-bold mb-6 font-heading text-xl text-white">Services</h4>
              <ul className="space-y-3">
                {footerSections.services.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="text-white/80 hover:text-secondary transition-colors font-body"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-6 font-heading text-xl text-white">Company</h4>
              <ul className="space-y-3">
                {footerSections.company.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="text-white/80 hover:text-secondary transition-colors font-body"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold mb-6 font-heading text-xl text-white">Resources</h4>
              <ul className="space-y-3">
                {footerSections.resources.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="text-white/80 hover:text-secondary transition-colors font-body"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold mb-6 font-heading text-xl text-white">Legal</h4>
              <ul className="space-y-3">
                {footerSections.legal.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="text-white/80 hover:text-secondary transition-colors font-body"
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

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/80 text-center md:text-left font-body">
              <p>&copy; {currentYear} Mindscape Analytics LLC. All rights reserved.</p>
              <p className="text-sm mt-1">
                Mindscape Global Formations • Professional LLC Formation Services • SSL Secure • Money-Back Guarantee
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-secondary" />
                <span>256-bit SSL</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-secondary" />
                <span>BBB A+</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-secondary" />
                <span>Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}