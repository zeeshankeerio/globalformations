'use client'

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import StandardNavigation from "@/components/standard-navigation"
import StandardFooter from "@/components/standard-footer"
import { 
  CheckCircle, 
  Users, 
  Award, 
  Shield, 
  Clock, 
  Target,
  Rocket,
  HeartHandshake,
  Globe,
  Star,
  Building,
  MessageCircle
} from "lucide-react"

export default function AboutPage() {
  const achievements = [
    {
      icon: Users,
      number: "1,500+",
      label: "Businesses Formed",
      description: "Successfully helped entrepreneurs in 2025"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Customer Rating",
      description: "Based on verified customer reviews"
    },
    {
      icon: Clock,
      number: "24hrs",
      label: "Average Processing",
      description: "Fastest LLC formation in the industry"
    },
    {
      icon: Globe,
      number: "30+",
      label: "Countries Served",
      description: "Global reach with expert support"
    }
  ]

  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We prioritize the security of your information and maintain the highest standards of data protection, privacy, and confidentiality throughout the formation process."
    },
    {
      icon: HeartHandshake,
      title: "Client Success",
      description: "Your success is our mission. We're committed to providing personalized support, expert guidance, and comprehensive solutions throughout your entrepreneurial journey."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We maintain exceptional standards in everything we do, from document preparation to customer service, ensuring accurate and compliant business formations."
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Leveraging our AI and technology expertise from Mindscape Analytics, we continuously improve our processes to provide faster, more efficient services."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* USA Flag Accent */}
      <div className="usa-flag-accent"></div>
      
      {/* Standardized Navigation */}
      <StandardNavigation currentPage="/about" />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-[#0A2540] to-[#1E40AF] text-white border-0 shadow-md">About Our Company</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)] bg-gradient-to-r from-[#0A2540] to-[#1E40AF] bg-clip-text text-transparent">
              Your Trusted Partner in Business Formation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-[family-name:var(--font-dm-sans)]">
              Founded in 2025 by Zeeshan Keerio, Mindscape Global Formations brings AI-powered innovation and enterprise-grade expertise to LLC formation, helping entrepreneurs worldwide establish their U.S. businesses with confidence and speed.
            </p>
          </div>
          {/* Hero Image */}
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=600&fit=crop&q=80" 
              alt="Team collaborating on business strategy"
              width={1200}
              height={400}
              className="w-full h-[400px] object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)] bg-gradient-to-r from-[#0A2540] to-[#1E40AF] bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground font-[family-name:var(--font-dm-sans)] text-lg leading-relaxed">
                <p>
                  Mindscape Global Formations emerged from the success of Mindscape Analytics, our parent company founded in 2018 by visionary entrepreneur Zeeshan Keerio. After building a global leader in AI solutions serving clients across finance, healthcare, retail, and manufacturing, we recognized a critical gap in the market: entrepreneurs worldwide needed a better way to access U.S. business opportunities.
                </p>
                <p>
                  In 2025, we launched Mindscape Global Formations to democratize LLC formation by combining our proven expertise in technology, automation, and enterprise-grade service delivery. What sets us apart is our unique blend of AI-powered efficiency and personalized human support—ensuring every client receives both speed and expertise throughout their formation journey.
                </p>
                <p>
                  Today, we're proud to have helped over 1,500 entrepreneurs establish their U.S. presence in our first year. We've built strategic partnerships with major banks, payment processors (including Stripe and PayPal), and business service providers to offer comprehensive end-to-end solutions. Our mission remains clear: to empower entrepreneurs with the tools, guidance, and support they need to succeed in the global marketplace.
                </p>
                <p>
                  Building on our parent company's core values of innovation, integrity, and impact, we're committed to making business formation accessible, affordable, and anxiety-free for aspiring entrepreneurs worldwide.
                </p>
              </div>
            </div>
            <div className="relative">
              {/* Professional office image */}
              <div className="mb-8 rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80" 
                  alt="Modern professional office workspace"
                  width={800}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <achievement.icon className="w-8 h-8 text-accent" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                      <div className="font-semibold mb-1 font-[family-name:var(--font-space-grotesk)]">{achievement.label}</div>
                      <div className="text-sm text-muted-foreground font-[family-name:var(--font-dm-sans)]">{achievement.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)] bg-gradient-to-r from-[#0A2540] to-[#1E40AF] bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground font-[family-name:var(--font-dm-sans)]">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="trust-shadow border-0 text-center hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0A2540]/10 to-[#1E40AF]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-[#1E40AF]" />
                  </div>
                  <CardTitle className="font-[family-name:var(--font-space-grotesk)]">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-[family-name:var(--font-dm-sans)] text-professional-muted">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)] bg-gradient-to-r from-[#0A2540] to-[#1E40AF] bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground font-[family-name:var(--font-dm-sans)]">
              From AI innovation to business formation excellence
            </p>
          </div>

          <div className="space-y-8">
            <Card className="trust-shadow border-l-4 border-l-[#1E40AF]">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Badge className="bg-gradient-to-r from-[#0A2540] to-[#1E40AF] text-white border-0">2018</Badge>
                  <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Mindscape Analytics Founded</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[family-name:var(--font-dm-sans)] text-professional-muted text-base">
                  Zeeshan Keerio founded Mindscape Analytics with a mission to democratize artificial intelligence. Built a global team and began serving enterprise clients across multiple industries.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-l-4 border-l-[#1E40AF]">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Badge className="bg-gradient-to-r from-[#0A2540] to-[#1E40AF] text-white border-0">2019-2023</Badge>
                  <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Enterprise Growth & Innovation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[family-name:var(--font-dm-sans)] text-professional-muted text-base">
                  Secured Series A and B funding ($57M total), expanded globally with offices in London, Singapore, and Tokyo. Launched flagship AI platform serving clients in finance, healthcare, retail, and manufacturing.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-l-4 border-l-[#1E40AF]">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Badge className="bg-gradient-to-r from-[#0A2540] to-[#1E40AF] text-white border-0">2024</Badge>
                  <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Identifying Market Opportunity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[family-name:var(--font-dm-sans)] text-professional-muted text-base">
                  Recognized that entrepreneurs worldwide needed simpler access to U.S. business opportunities. Began research and development for LLC formation services leveraging our AI and automation expertise.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-l-4 border-l-[#1E40AF] bg-gradient-to-br from-blue-50 to-slate-50">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Badge className="bg-gradient-to-r from-[#0A2540] to-[#1E40AF] text-white border-0 shadow-md">2025</Badge>
                  <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-[#0A2540]">Mindscape Global Formations Launched</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[family-name:var(--font-dm-sans)] text-slate-700 text-base font-medium">
                  Officially launched LLC formation services combining AI-powered automation with personalized support. Formed strategic partnerships with banks, Stripe, PayPal, and Mercury. Successfully helped 1,500+ entrepreneurs establish U.S. businesses in our first year.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Software Services Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A2540] to-[#1E3A8A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* AI & Tech development image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl mb-8 lg:mb-0">
                <Image 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80" 
                  alt="Software development team working on AI solutions"
                  width={800}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
            <div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">Our Parent Company</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)] text-white">
                Mindscape Analytics
              </h2>
              <p className="text-lg mb-6 text-blue-100 font-[family-name:var(--font-dm-sans)] leading-relaxed">
                Founded in 2018, Mindscape Analytics is a global leader in AI solutions and enterprise software development. We serve clients across finance, healthcare, retail, and manufacturing industries, delivering cutting-edge technology solutions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-white">AI Solutions & Machine Learning</h3>
                    <p className="text-blue-100">Custom AI models, natural language processing, and predictive analytics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-white">Full-Stack Web Development</h3>
                    <p className="text-blue-100">Enterprise-grade web applications, SaaS platforms, and custom software</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-white">Cloud Architecture & DevOps</h3>
                    <p className="text-blue-100">Scalable cloud infrastructure, automation, and system optimization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-white">Business Automation Solutions</h3>
                    <p className="text-blue-100">Process automation, workflow optimization, and digital transformation</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.mindscapeanalytics.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#0A2540] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Globe className="w-5 h-5" />
                  Visit Mindscape Analytics
                </a>
                <button
                  onClick={() => {
                    const event = new CustomEvent('openContactPopup', { 
                      detail: { 
                        source: 'software-services',
                        subject: 'Software Development Inquiry',
                        message: "I'm interested in your software development and AI solutions services. Please provide more information."
                      } 
                    });
                    window.dispatchEvent(event);
                  }}
                  className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contact for Software Services
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">7+</div>
                    <div className="text-sm text-blue-100">Years in Business</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">$57M</div>
                    <div className="text-sm text-blue-100">Series A & B Funding</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">200+</div>
                    <div className="text-sm text-blue-100">Enterprise Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">3</div>
                    <div className="text-sm text-blue-100">Global Offices</div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <h3 className="font-semibold mb-4 text-center text-white">Global Presence</h3>
                  <div className="flex justify-center gap-4 text-sm text-blue-100">
                    <span>🇬🇧 London</span>
                    <span>•</span>
                    <span>🇸🇬 Singapore</span>
                    <span>•</span>
                    <span>🇯🇵 Tokyo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Trust */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)] bg-gradient-to-r from-[#0A2540] to-[#1E40AF] bg-clip-text text-transparent">
              Trusted & Certified
            </h2>
            <p className="text-xl text-muted-foreground font-[family-name:var(--font-dm-sans)]">
              We maintain the highest standards of security, compliance, and customer satisfaction
            </p>
          </div>

          {/* Trust & Security Image */}
          <div className="mb-12 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&h=400&fit=crop&q=80" 
              alt="Business documentation and compliance"
              width={1000}
              height={300}
              className="w-full h-[300px] object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="trust-shadow border-0 text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#1E40AF]" />
                </div>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-[#0A2540]">SSL Secured</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[family-name:var(--font-dm-sans)] text-professional-muted">
                  256-bit encryption protects all your sensitive business data
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0 text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#1E40AF]" />
                </div>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-[#0A2540]">BBB Accredited</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[family-name:var(--font-dm-sans)] text-professional-muted">
                  A+ rating with Better Business Bureau for excellence
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0 text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-[#0A2540]">Licensed & Bonded</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[family-name:var(--font-dm-sans)] text-professional-muted">
                  Fully licensed business formation service provider
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="trust-shadow border-0 text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-[#0A2540]">Money-Back Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[family-name:var(--font-dm-sans)] text-professional-muted">
                  100% satisfaction guarantee on all formation services
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Standardized Footer */}
      <StandardFooter />
    </div>
  )
}