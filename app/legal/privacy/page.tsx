import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ContactButton from "@/components/contact-button"
import MobileNav from "@/components/mobile-nav"
import { 
  Shield, 
  Lock, 
  Clock, 
  ArrowRight,
  Rocket,
  CheckCircle,
  Eye,
  Database,
  UserCheck
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy - Mindscape Global Formations",
  description: "Learn how we protect your privacy and personal information. Our commitment to data security and transparency.",
}

export default function PrivacyPage() {
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
                context="privacy-header"
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
          <Badge className="mb-6 bg-accent text-white">Privacy & Security</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-[family-name:var(--font-dm-sans)]">
            Your privacy is our priority. Learn how we collect, use, and protect your personal information.
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

      {/* Privacy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <Card className="trust-shadow border-0 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)]">
                  <Shield className="w-6 h-6 text-accent" />
                  Our Commitment to Privacy
                </CardTitle>
              </CardHeader>
              <CardContent className="font-[family-name:var(--font-dm-sans)]">
                <p className="text-muted-foreground leading-relaxed">
                  At Mindscape Global Formations, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                </p>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)]">
                  <Database className="w-6 h-6 text-accent" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="font-[family-name:var(--font-dm-sans)]">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Create an account or use our services
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Fill out forms for LLC formation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Contact us for support or consultation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Subscribe to our newsletter or updates
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This information may include your name, email address, phone number, business information, and payment details.
                </p>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)]">
                  <Eye className="w-6 h-6 text-accent" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="font-[family-name:var(--font-dm-sans)]">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Provide and improve our LLC formation services
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Process your business formation applications
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Communicate with you about your account and services
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Send you important updates and notifications
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Provide customer support and respond to inquiries
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Comply with legal obligations and regulatory requirements
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)]">
                  <Lock className="w-6 h-6 text-accent" />
                  Information Sharing and Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent className="font-[family-name:var(--font-dm-sans)]">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    With government agencies for business formation purposes
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    With trusted service providers who assist in our operations
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    When required by law or to protect our rights
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    With your explicit consent
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)]">
                  <Shield className="w-6 h-6 text-accent" />
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent className="font-[family-name:var(--font-dm-sans)]">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    256-bit SSL encryption for all data transmission
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Secure servers with regular security updates
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Access controls and authentication protocols
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Regular security audits and monitoring
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Employee training on data protection
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)]">
                  <UserCheck className="w-6 h-6 text-accent" />
                  Your Rights and Choices
                </CardTitle>
              </CardHeader>
              <CardContent className="font-[family-name:var(--font-dm-sans)]">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Access and review your personal information
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Request corrections to inaccurate information
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Request deletion of your personal information
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Opt-out of marketing communications
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Withdraw consent for data processing
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)]">
                  <Clock className="w-6 h-6 text-accent" />
                  Data Retention
                </CardTitle>
              </CardHeader>
              <CardContent className="font-[family-name:var(--font-dm-sans)]">
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information only as long as necessary to provide our services and comply with legal obligations. Business formation records are typically retained for 7 years as required by law. You may request deletion of your information at any time, subject to legal requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)]">
                  <Shield className="w-6 h-6 text-accent" />
                  Cookies and Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="font-[family-name:var(--font-dm-sans)]">
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar technologies to improve your experience on our website, analyze usage patterns, and provide personalized content. You can control cookie settings through your browser preferences. Some features may not function properly if cookies are disabled.
                </p>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)]">
                  <Shield className="w-6 h-6 text-accent" />
                  Changes to This Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="font-[family-name:var(--font-dm-sans)]">
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)]">
                  <Shield className="w-6 h-6 text-accent" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="font-[family-name:var(--font-dm-sans)]">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> privacy@mindscapeanalytics.com</p>
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
            Questions About Your Privacy?
          </h2>
          <p className="text-xl mb-8 text-white/90 font-[family-name:var(--font-dm-sans)]">
            Our privacy team is here to help with any questions about how we protect your information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactButton
              variant="whatsapp"
              message="general"
              context="privacy-cta"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3"
            >
              Contact Privacy Team
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
