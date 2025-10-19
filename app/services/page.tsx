import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactButton from "@/components/contact-button"
import StandardNavigation from "@/components/standard-navigation"
import StandardFooter from "@/components/standard-footer"
import {
  CheckCircle,
  Clock,
  Shield,
  Users,
  FileText,
  CreditCard,
  Phone,
  MapPin,
  BookOpen,
  Star,
  Building,
  DollarSign,
  Rocket,
} from "lucide-react"
import Link from "next/link"
import MobileNav from "@/components/mobile-nav"

export default function ServicesPage() {
  const services = [
    {
      icon: Building,
      title: "LLC Formation",
      description: "Complete LLC formation with all required documentation",
      features: [
        "Articles of Organization filing",
        "Operating Agreement preparation",
        "Registered Agent service (1 year free)",
        "Certificate of Formation",
        "Member certificates",
        "Corporate seal and binder",
      ],
      timeline: "1-2 business days",
      price: "Starting at $50 + state fee",
    },
    {
      icon: FileText,
      title: "EIN Application",
      description: "Federal Tax ID number for your business",
      features: [
        "IRS Form SS-4 preparation and filing",
        "Federal Tax ID assignment",
        "IRS confirmation letter",
        "Tax filing guidance",
        "Business banking requirements met",
        "Payroll setup capability",
      ],
      timeline: "Same day",
      price: "Included in Standard & Premium",
    },
    {
      icon: CreditCard,
      title: "U.S. Bank Account Setup",
      description: "Business banking account with major U.S. banks",
      features: [
        "Bank account application assistance",
        "Required documentation preparation",
        "Bank appointment scheduling",
        "Account opening guidance",
        "Online banking setup",
        "Debit card and checks ordering",
      ],
      timeline: "3-5 business days",
      price: "Included in Premium package",
    },
    {
      icon: DollarSign,
      title: "PayPal & Stripe Setup",
      description: "Payment processing for your online business",
      features: [
        "PayPal business account creation",
        "Stripe merchant account setup",
        "Payment gateway configuration",
        "Integration guidance",
        "Fee structure optimization",
        "Fraud protection setup",
      ],
      timeline: "1-2 business days",
      price: "Included in Premium package",
    },
    {
      icon: Phone,
      title: "Business Phone & Address",
      description: "Professional business presence setup",
      features: [
        "Virtual business address",
        "Mail forwarding service",
        "Business phone number",
        "Professional voicemail setup",
        "Call forwarding options",
        "Business directory listings",
      ],
      timeline: "Same day",
      price: "Available as add-on",
    },
    {
      icon: BookOpen,
      title: "Business Launch Training",
      description: "Comprehensive guides and training for online business",
      features: [
        "Amazon FBA seller guide",
        "eBay selling masterclass",
        "Freelancing business setup",
        "Shopify store creation",
        "Digital marketing basics",
        "Business growth strategies",
      ],
      timeline: "Immediate access",
      price: "Included in Premium package",
    },
  ]

  const processSteps = [
    {
      step: "1",
      title: "Choose Your Package",
      description: "Select the package that best fits your business needs and budget.",
    },
    {
      step: "2",
      title: "Provide Information",
      description: "Fill out our simple form with your business details and preferences.",
    },
    {
      step: "3",
      title: "Document Preparation",
      description: "Our experts prepare and review all required documents for accuracy.",
    },
    {
      step: "4",
      title: "State Filing",
      description: "We file your LLC formation documents with the appropriate state agency.",
    },
    {
      step: "5",
      title: "Confirmation & Delivery",
      description: "Receive your official LLC documents and additional services as selected.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* USA Flag Accent */}
      <div className="usa-flag-accent"></div>
      
      {/* Standardized Navigation */}
      <StandardNavigation currentPage="/services" />
      
      {/* Old Navigation - Remove this section */}
      <nav className="hidden bg-background border-b border-border sticky top-0 z-50">
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
              <Link href="/services" className="text-foreground font-medium">
                Services
              </Link>
              <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="/#guide" className="text-muted-foreground hover:text-foreground transition-colors">
                Free Guide
              </Link>
              <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <ContactButton
                variant="whatsapp"
                message="services"
                context="services-header"
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
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-accent text-white">Complete Business Solutions</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
            Everything You Need to Start Your Business
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-[family-name:var(--font-dm-sans)]">
            From LLC formation to payment processing, we provide all the services you need to launch and grow your
            business successfully.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground font-[family-name:var(--font-dm-sans)]">
              Comprehensive business formation and launch services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="trust-shadow border-0 h-full">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-accent mb-4" />
                  <CardTitle className="font-[family-name:var(--font-space-grotesk)]">{service.title}</CardTitle>
                  <CardDescription className="font-[family-name:var(--font-dm-sans)] text-professional-muted">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-[family-name:var(--font-dm-sans)]">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground font-[family-name:var(--font-dm-sans)]">
                        Timeline: {service.timeline}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground font-[family-name:var(--font-dm-sans)]">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Our Simple Process
            </h2>
            <p className="text-xl text-muted-foreground font-[family-name:var(--font-dm-sans)]">
              From start to finish in 5 easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 font-[family-name:var(--font-space-grotesk)]">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-[family-name:var(--font-dm-sans)]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Why Choose LLC Pro?
            </h2>
            <p className="text-xl text-muted-foreground font-[family-name:var(--font-dm-sans)]">
              The advantages of working with business formation experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="trust-shadow border-0 text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Fast Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[family-name:var(--font-dm-sans)] text-professional-muted">
                  Most LLCs formed within 24 hours. No waiting weeks for paperwork.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0 text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[family-name:var(--font-dm-sans)] text-professional-muted">
                  Business formation specialists guide you through every step.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0 text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Ongoing Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[family-name:var(--font-dm-sans)] text-professional-muted">
                  Free consultation and support even after your LLC is formed.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0 text-center">
              <CardHeader>
                <Star className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[family-name:var(--font-dm-sans)] text-professional-muted">
                  10,000+ successful LLC formations with 4.9/5 customer rating.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground font-[family-name:var(--font-dm-sans)]">
              Optional services to enhance your business setup
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="trust-shadow border-0">
              <CardHeader>
                <MapPin className="w-8 h-8 text-accent mb-2" />
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Registered Agent Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 font-[family-name:var(--font-dm-sans)] text-professional-muted">
                  Professional registered agent service to receive legal documents on behalf of your LLC. Required in
                  all states.
                </CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="font-[family-name:var(--font-dm-sans)]">First year included free</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="font-[family-name:var(--font-dm-sans)]">Professional business address</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="font-[family-name:var(--font-dm-sans)]">Document scanning and forwarding</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-accent mb-2" />
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Business Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 font-[family-name:var(--font-dm-sans)] text-professional-muted">
                  Stay compliant with ongoing business requirements and annual filings.
                </CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="font-[family-name:var(--font-dm-sans)]">Annual report filing reminders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="font-[family-name:var(--font-dm-sans)]">State compliance monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="font-[family-name:var(--font-dm-sans)]">Document management system</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Standardized Footer */}
      <StandardFooter />
      
      {/* Old Footer - Remove this section */}
      <footer className="hidden bg-primary text-white py-12">
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
              <h4 className="font-semibold mb-4 font-[family-name:var(--font-space-grotesk)] text-xl text-white">Services</h4>
              <ul className="space-y-2 text-white font-[family-name:var(--font-dm-sans)]">
                <li className="text-lg hover:text-accent transition-colors cursor-pointer">LLC Formation</li>
                <li className="text-lg hover:text-accent transition-colors cursor-pointer">EIN Application</li>
                <li className="text-lg hover:text-accent transition-colors cursor-pointer">Bank Account Setup</li>
                <li className="text-lg hover:text-accent transition-colors cursor-pointer">Business Consultation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-[family-name:var(--font-space-grotesk)] text-xl text-white">Resources</h4>
              <ul className="space-y-2 text-white font-[family-name:var(--font-dm-sans)]">
                <li className="text-lg hover:text-accent transition-colors cursor-pointer">Free Business Guide</li>
                <li className="text-lg hover:text-accent transition-colors cursor-pointer">Amazon Seller Guide</li>
                <li className="text-lg hover:text-accent transition-colors cursor-pointer">eBay Guide</li>
                <li className="text-lg hover:text-accent transition-colors cursor-pointer">Freelancing 101</li>
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
