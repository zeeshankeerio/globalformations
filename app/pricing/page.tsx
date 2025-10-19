"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import StandardNavigation from "@/components/standard-navigation"
import StandardFooter from "@/components/standard-footer"
import PopupContactForm from "@/components/popup-contact-form"
import { CheckCircle, X, Clock, Shield, Users, ArrowRight, Star } from "lucide-react"

interface PackageFeature {
  name: string
  included: boolean
}

interface Package {
  name: string
  price: string
  subtitle: string
  description: string
  popular: boolean
  features: PackageFeature[]
}

export default function PricingPage() {
  const [selectedPackage, setSelectedPackage] = useState<string>("")
  const [selectedPrice, setSelectedPrice] = useState<string>("")
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  // Debug logging removed for production

  const handleGetStarted = (packageName: string, price: string) => {
    setSelectedPackage(packageName)
    setSelectedPrice(price)
    setIsPopupOpen(true)
  }
  const packages: Package[] = [
    {
      name: "Starter",
      price: "$50",
      subtitle: "+ State Fee",
      description: "Perfect for getting started with basic LLC formation",
      popular: false,
      features: [
        { name: "LLC Formation", included: true },
        { name: "Operating Agreement", included: true },
        { name: "Free Consultation", included: true },
        { name: "Email Support", included: true },
        { name: "EIN Application", included: false },
        { name: "Ownership Letter", included: false },
        { name: "U.S. Bank Account Setup", included: false },
        { name: "PayPal/Stripe Setup", included: false },
        { name: "Business Launch Guide", included: false },
        { name: "Amazon/eBay Setup Guide", included: false },
        { name: "Free Business Classes", included: false },
        { name: "Priority Support", included: false },
      ],
    },
    {
      name: "Standard",
      price: "$199",
      subtitle: "Complete Package",
      description: "Most popular choice with essential business tools",
      popular: true,
      features: [
        { name: "LLC Formation", included: true },
        { name: "Operating Agreement", included: true },
        { name: "Free Consultation", included: true },
        { name: "Email Support", included: true },
        { name: "EIN Application", included: true },
        { name: "Ownership Letter", included: true },
        { name: "U.S. Bank Account Setup", included: false },
        { name: "PayPal/Stripe Setup", included: false },
        { name: "Business Launch Guide", included: false },
        { name: "Amazon/eBay Setup Guide", included: false },
        { name: "Free Business Classes", included: false },
        { name: "Priority Support", included: true },
      ],
    },
    {
      name: "Premium",
      price: "$399",
      subtitle: "All-Inclusive",
      description: "Everything you need to launch and scale your business",
      popular: false,
      features: [
        { name: "LLC Formation", included: true },
        { name: "Operating Agreement", included: true },
        { name: "Free Consultation", included: true },
        { name: "Email Support", included: true },
        { name: "EIN Application", included: true },
        { name: "Ownership Letter", included: true },
        { name: "U.S. Bank Account Setup", included: true },
        { name: "PayPal/Stripe Setup", included: true },
        { name: "Business Launch Guide", included: true },
        { name: "Amazon/eBay Setup Guide", included: true },
        { name: "Free Business Classes", included: true },
        { name: "Priority Support", included: true },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* USA Flag Accent */}
      <div className="usa-flag-accent"></div>

      {/* Standardized Navigation */}
      <StandardNavigation currentPage="/pricing" />



      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-accent text-white">Transparent Pricing</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
            Choose Your LLC Formation Package
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-[family-name:var(--font-dm-sans)]">
            Simple, transparent pricing with no hidden fees. Choose the package that best fits your business needs and
            budget.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`trust-shadow border-0 relative ${pkg.popular ? "ring-2 ring-accent scale-105" : ""}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent">Most Popular</Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-[family-name:var(--font-space-grotesk)]">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mt-4">
                    {pkg.price}
                    <span className="text-lg text-muted-foreground font-normal ml-1">{pkg.subtitle}</span>
                  </div>
                  <CardDescription className="mt-4 font-[family-name:var(--font-dm-sans)] text-professional-muted">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      {feature.included ? (
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      )}
                      <span
                        className={`font-[family-name:var(--font-dm-sans)] ${feature.included ? "text-foreground" : "text-muted-foreground"
                          }`}
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                  <Button 
                    onClick={() => handleGetStarted(pkg.name, pkg.price)}
                    className={`w-full mt-8 ${pkg.popular ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-blue-500/25" : "bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-700 hover:to-blue-700 shadow-lg hover:shadow-blue-400/25"} text-white transition-all duration-300 group relative overflow-hidden`} 
                    size="lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative z-10">Get Started</span>
                    <ArrowRight className="w-4 h-4 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Compare All Features
            </h2>
            <p className="text-xl text-muted-foreground font-[family-name:var(--font-dm-sans)]">
              See exactly what's included in each package
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-background rounded-lg shadow-lg">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 font-semibold font-[family-name:var(--font-space-grotesk)]">Features</th>
                  {packages.map((pkg) => (
                    <th key={pkg.name} className={`text-center p-6 font-semibold font-[family-name:var(--font-space-grotesk)] ${pkg.popular ? "bg-accent/10" : ""}`}>
                      {pkg.name}
                      {pkg.popular && <Badge className="ml-2 bg-accent text-white">Popular</Badge>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {packages.length > 0 && packages[0]?.features?.map((feature, featureIndex) => (
                  <tr key={featureIndex} className="border-b border-border/50">
                    <td className="p-6 font-medium font-[family-name:var(--font-dm-sans)]">{feature.name}</td>
                    {packages.map((pkg) => (
                      <td key={pkg.name} className={`text-center p-6 ${pkg.popular ? "bg-accent/5" : ""}`}>
                        {pkg.features[featureIndex]?.included ? (
                          <CheckCircle className="w-6 h-6 text-accent mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-muted-foreground mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-border">
                  <td className="p-6 font-bold font-[family-name:var(--font-space-grotesk)]">Price</td>
                  {packages.map((pkg) => (
                    <td key={pkg.name} className={`text-center p-6 font-bold text-primary ${pkg.popular ? "bg-accent/10" : ""}`}>
                      {pkg.price}
                      <div className="text-sm text-muted-foreground font-normal">{pkg.subtitle}</div>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* Value Calculator */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Calculate Your Savings
            </h2>
            <p className="text-xl text-muted-foreground font-[family-name:var(--font-dm-sans)]">
              See how much time and money you save with our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
                DIY vs. Our Service
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <span className="font-medium font-[family-name:var(--font-dm-sans)]">Time Investment</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-500">40+ hours</div>
                    <div className="text-sm text-muted-foreground">vs. 2 hours with us</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <span className="font-medium font-[family-name:var(--font-dm-sans)]">Research Time</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-500">20+ hours</div>
                    <div className="text-sm text-muted-foreground">vs. 0 hours with us</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <span className="font-medium font-[family-name:var(--font-dm-sans)]">Error Risk</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-500">High</div>
                    <div className="text-sm text-muted-foreground">vs. 0% with us</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <span className="font-medium font-[family-name:var(--font-dm-sans)]">Support</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-500">None</div>
                    <div className="text-sm text-muted-foreground">vs. 24/7 with us</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 border border-accent/20">
              <h3 className="text-2xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)] text-center">
                Your Total Savings
              </h3>
              <div className="text-center space-y-4">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">$2,000+</div>
                  <div className="text-muted-foreground font-[family-name:var(--font-dm-sans)]">Time Value Saved</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">38+ Hours</div>
                  <div className="text-muted-foreground font-[family-name:var(--font-dm-sans)]">Time Saved</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-muted-foreground font-[family-name:var(--font-dm-sans)]">Error-Free Guarantee</div>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="text-lg font-semibold text-primary font-[family-name:var(--font-dm-sans)]">
                    ROI: 4,000%+
                  </div>
                  <div className="text-sm text-muted-foreground font-[family-name:var(--font-dm-sans)]">
                    Return on investment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Why Our Pricing Makes Sense
            </h2>
            <p className="text-xl text-muted-foreground font-[family-name:var(--font-dm-sans)]">
              Compare what you get vs. doing it yourself or using other services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="trust-shadow border-0">
              <CardHeader className="text-center">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Save Time</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="font-[family-name:var(--font-dm-sans)] text-professional-muted">
                  DIY LLC formation can take weeks of research and paperwork. We handle everything in 1 day, so you can
                  focus on building your business.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Avoid Mistakes</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="font-[family-name:var(--font-dm-sans)] text-professional-muted">
                  Filing errors can be costly and time-consuming to fix. Our experts ensure everything is done correctly
                  the first time.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Expert Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="font-[family-name:var(--font-dm-sans)] text-professional-muted">
                  Get personalized guidance from business formation experts who understand your specific needs and
                  goals.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Pricing Questions?
            </h2>
            <p className="text-xl text-muted-foreground font-[family-name:var(--font-dm-sans)]">
              Get answers to common pricing and package questions
            </p>
          </div>

          <div className="space-y-8">
            <Card className="trust-shadow border-0">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">
                  What are state fees and why aren't they included?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[family-name:var(--font-dm-sans)] text-professional-muted">
                  State fees are mandatory government charges that vary by state (typically $50-$500). We keep our
                  pricing transparent by separating our service fee from required state fees, so you know exactly what
                  you're paying for.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">
                  Can I upgrade my package later?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[family-name:var(--font-dm-sans)] text-professional-muted">
                  Yes! You can upgrade to a higher package at any time. We'll credit your original payment and you'll
                  only pay the difference.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Do you offer refunds?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[family-name:var(--font-dm-sans)] text-professional-muted">
                  We offer a 100% money-back guarantee if we cannot successfully form your LLC. State fees are
                  non-refundable as they're paid directly to the government.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">
                  Are there any hidden fees?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[family-name:var(--font-dm-sans)] text-professional-muted">
                  No hidden fees, ever. The price you see is exactly what you pay, plus the required state fee. We
                  believe in complete transparency.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Trusted by 10,000+ Entrepreneurs
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">10,000+</div>
              <p className="text-muted-foreground font-[family-name:var(--font-dm-sans)]">LLCs Formed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">4.9/5</div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground font-[family-name:var(--font-dm-sans)]">Customer Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">24hrs</div>
              <p className="text-muted-foreground font-[family-name:var(--font-dm-sans)]">Average Formation Time</p>
            </div>
          </div>
        </div>
      </section>



      {/* Standardized Footer */}
      <StandardFooter />

      {/* Popup Contact Form */}
      <PopupContactForm 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        selectedPackage={selectedPackage}
        packagePrice={selectedPrice}
      />
    </div>
  )
}
