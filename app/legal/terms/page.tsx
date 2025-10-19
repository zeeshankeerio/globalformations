import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ContactButton from "@/components/contact-button"
import MobileNav from "@/components/mobile-nav"
import { 
  FileText, 
  Shield, 
  Clock, 
  ArrowRight,
  Rocket,
  CheckCircle
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Terms of Service - Mindscape Global Formations",
  description: "Read our terms of service for LLC formation and business services. Clear, transparent terms for all our clients.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-[family-name:var(--font-space-grotesk)]">
                  Mindscape Global Formations
                </h1>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <ContactButton
                variant="whatsapp"
                message="consultation"
                context="terms-header"
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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-accent text-white">Legal Documents</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-[family-name:var(--font-dm-sans)]">
            Clear, transparent terms for all our LLC formation and business services.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Last updated: December 15, 2024
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              SSL Secured
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <Card className="trust-shadow border-0 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)]">
                  <FileText className="w-6 h-6 text-accent" />
                  1. Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="font-[family-name:var(--font-dm-sans)]">
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using Mindscape Global Formations services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)]">
                  <FileText className="w-6 h-6 text-accent" />
                  2. Service Description
                </CardTitle>
              </CardHeader>
              <CardContent className="font-[family-name:var(--font-dm-sans)]">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mindscape Global Formations provides business formation services including but not limited to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    LLC formation and registration
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    EIN (Employer Identification Number) application
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Business bank account setup assistance
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Payment processor setup (PayPal, Stripe)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Business consultation and guidance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)]">
                  <FileText className="w-6 h-6 text-accent" />
                  3. Client Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent className="font-[family-name:var(--font-dm-sans)]">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a client, you agree to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Provide accurate and complete information for business formation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Pay all required fees including state filing fees
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Comply with all applicable laws and regulations
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Maintain accurate business records and compliance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)]">
                  <FileText className="w-6 h-6 text-accent" />
                  4. Fees and Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="font-[family-name:var(--font-dm-sans)]">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our service fees are clearly displayed and include:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Service fees for LLC formation and related services
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    State filing fees (paid directly to state agencies)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    No hidden fees or surprise charges
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  All payments are processed securely through our payment partners. State fees are non-refundable as they are paid directly to government agencies.
                </p>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)]">
                  <FileText className="w-6 h-6 text-accent" />
                  5. Refund Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="font-[family-name:var(--font-dm-sans)]">
                <p className="text-muted-foreground leading-relaxed">
                  We offer a 100% money-back guarantee on our service fees if we cannot successfully form your LLC due to our error. State fees are non-refundable as they are paid directly to government agencies. Refund requests must be made within 30 days of service completion.
                </p>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)]">
                  <FileText className="w-6 h-6 text-accent" />
                  6. Privacy and Data Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="font-[family-name:var(--font-dm-sans)]">
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to protecting your privacy and personal information. All data is encrypted and stored securely. We only use your information for business formation purposes and do not sell or share your data with third parties except as required for service delivery. Please review our Privacy Policy for detailed information.
                </p>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)]">
                  <FileText className="w-6 h-6 text-accent" />
                  7. Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="font-[family-name:var(--font-dm-sans)]">
                <p className="text-muted-foreground leading-relaxed">
                  Mindscape Global Formations shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                </p>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)]">
                  <FileText className="w-6 h-6 text-accent" />
                  8. Governing Law
                </CardTitle>
              </CardHeader>
              <CardContent className="font-[family-name:var(--font-dm-sans)]">
                <p className="text-muted-foreground leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of Wyoming, United States, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Sheridan County, Wyoming.
                </p>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)]">
                  <FileText className="w-6 h-6 text-accent" />
                  9. Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="font-[family-name:var(--font-dm-sans)]">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> legal@mindscapeanalytics.com</p>
                  <p><strong>Phone:</strong> +1-307-210-6155</p>
                  <p><strong>Address:</strong> 30 N Gould St Ste N, Sheridan, WY 82801</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
            Questions About Our Terms?
          </h2>
          <p className="text-xl mb-8 text-white/90 font-[family-name:var(--font-dm-sans)]">
            Our legal team is here to help clarify any questions you may have about our terms of service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactButton
              variant="whatsapp"
              message="general"
              context="terms-cta"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3"
            >
              Contact Legal Team
            </ContactButton>
            <Link href="/contact">
              <Button size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3 bg-transparent">
                General Contact
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                  Mindscape Global Formations
                </h3>
              </div>
              <p className="text-white font-[family-name:var(--font-dm-sans)] text-lg">
                Fast, affordable, and reliable LLC formation service.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-[family-name:var(--font-space-grotesk)] text-xl text-white">Legal</h4>
              <ul className="space-y-2 text-white font-[family-name:var(--font-dm-sans)]">
                <li className="text-lg hover:text-accent transition-colors cursor-pointer">Terms of Service</li>
                <li className="text-lg hover:text-accent transition-colors cursor-pointer">Privacy Policy</li>
                <li className="text-lg hover:text-accent transition-colors cursor-pointer">Refund Policy</li>
                <li className="text-lg hover:text-accent transition-colors cursor-pointer">Compliance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-[family-name:var(--font-space-grotesk)] text-xl text-white">Services</h4>
              <ul className="space-y-2 text-white font-[family-name:var(--font-dm-sans)]">
                <li className="text-lg hover:text-accent transition-colors cursor-pointer">LLC Formation</li>
                <li className="text-lg hover:text-accent transition-colors cursor-pointer">EIN Application</li>
                <li className="text-lg hover:text-accent transition-colors cursor-pointer">Bank Account Setup</li>
                <li className="text-lg hover:text-accent transition-colors cursor-pointer">Business Consultation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-[family-name:var(--font-space-grotesk)] text-xl text-white">Contact</h4>
              <ul className="space-y-2 text-white font-[family-name:var(--font-dm-sans)]">
                <li className="text-lg hover:text-accent transition-colors cursor-pointer">Free Consultation</li>
                <li className="text-lg hover:text-accent transition-colors cursor-pointer">WhatsApp Support</li>
                <li className="text-lg hover:text-accent transition-colors cursor-pointer">Email Support</li>
                <li className="text-lg hover:text-accent transition-colors cursor-pointer">Live Chat</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/30 mt-8 pt-8 text-center text-white font-[family-name:var(--font-dm-sans)]">
            <p className="text-lg">&copy; 2024 Mindscape Analytics LLC. All rights reserved. SSL Secure • Money-Back Guarantee • No Hidden Charges</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
