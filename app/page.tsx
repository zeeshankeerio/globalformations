"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactButton from "@/components/contact-button"
import StandardNavigation from "@/components/standard-navigation"
import StandardFooter from "@/components/standard-footer"
import TrustSignals from "@/components/trust-signals"
import Testimonials from "@/components/testimonials"
import StateSelector from "@/components/state-selector"
import ProcessTimeline from "@/components/process-timeline"
import SecurityCompliance from "@/components/security-compliance"
import ExitIntentPopup from "@/components/exit-intent-popup"
import UnifiedChatbot from "@/components/unified-chatbot"
import CostCalculator from "@/components/cost-calculator"
import FAQSection from "@/components/faq-section"
import LeadMagnet from "@/components/lead-magnet"
import AnalyticsTracking from "@/components/analytics-tracking"
import ClientOnly from "@/components/client-only"
import FloatingNotifications from "@/components/floating-notifications"
import StickyCTABar from "@/components/sticky-cta-bar"
import PerformanceOptimizer from "@/components/performance-optimizer"
import PopupContactForm from "@/components/popup-contact-form"
import {
  CheckCircle,
  DollarSign,
  Users,
  Shield,
  Star,
  Phone,
  BookOpen,
  TrendingUp,
  Award,
  Zap,
  Globe,
  CreditCard,
  ArrowRight,
  Target,
  Rocket,
} from "lucide-react"

export default function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [popupServiceType, setPopupServiceType] = useState<'llc' | 'software'>('llc')
  const [popupInitialMessage, setPopupInitialMessage] = useState('')

  const handleGetStarted = () => {
    setPopupServiceType('llc')
    setPopupInitialMessage('')
    setIsPopupOpen(true)
  }

  // Listen for custom event to open popup with software services context
  useEffect(() => {
    const handleOpenContactPopup = (event: CustomEvent) => {
      const { source, message } = event.detail || {}
      if (source === 'software-services') {
        setPopupServiceType('software')
        setPopupInitialMessage(message || '')
      } else {
        setPopupServiceType('llc')
        setPopupInitialMessage('')
      }
      setIsPopupOpen(true)
    }

    window.addEventListener('openContactPopup' as any, handleOpenContactPopup as any)
    return () => {
      window.removeEventListener('openContactPopup' as any, handleOpenContactPopup as any)
    }
  }, [])

  return (
    // MODERNIZATION: Changed from dark theme to professional light theme for better U.S. business credibility
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* USA Flag Accent */}
      <div className="usa-flag-accent"></div>

      {/* Standardized Navigation */}
      <StandardNavigation currentPage="/" />

      <main id="main-content" role="main">

        {/* PROFESSIONAL: Clean Hero Section - LLC Formation Platform */}
        <section
          className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20"
          aria-label="Hero section"
        >
          {/* Clean Professional Background */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.04),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(30,58,138,0.03),transparent_60%)]" />
            
            {/* Minimal Professional Pattern */}
            <div className="absolute inset-0 opacity-[0.01]" 
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23334155' fill-opacity='0.4'%3E%3Cpolygon points='30 0 32 16 60 30 32 32 30 60 28 32 0 30 28 16'/%3E%3C/g%3E%3C/svg%3E")`,
                 }}
            />
          </div>

          {/* Main Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center py-8 lg:py-12">

              {/* Left Column - Main Content (7 columns) */}
              <div className="lg:col-span-7 text-center lg:text-left space-y-6">

                {/* Trust Badge & Social Proof */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                  <Badge className="bg-gradient-to-r from-blue-50/90 to-white/90 backdrop-blur-sm text-blue-700 border border-blue-200/60 px-3 py-1.5 shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                    <Shield className="w-3 h-3 mr-1.5" />
                    <span className="font-semibold">Trusted by 10,000+ Entrepreneurs</span>
                  </Badge>
                  
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <div className="flex -space-x-0.5">
                      <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full border border-white shadow-sm"></div>
                      <div className="w-5 h-5 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full border border-white shadow-sm"></div>
                      <div className="w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full border border-white shadow-sm"></div>
                    </div>
                    <span className="font-medium text-slate-700">+47 this week</span>
                  </div>
                </div>

                {/* Professional Main Headlines */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-[0.85] tracking-tight">
                      Form Your
                      <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                        U.S. LLC
                      </span>
                    </h1>

                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 leading-tight">
                      Fast • Accurate • Compliant
                    </div>
                  </div>

                  <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl leading-relaxed font-medium">
                    Expert-prepared filings, EIN, U.S. banking, and payment processing handled by specialists with 
                    <span className="text-blue-700 font-semibold"> transparent pricing</span>.
                  </p>
                </div>

                {/* Key Value Props - Compact Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 max-w-2xl mx-auto lg:mx-0">
                  {[
                    { icon: CreditCard, text: "U.S. Banking", color: "from-blue-500 to-blue-600" },
                    { icon: DollarSign, text: "Payment Setup", color: "from-slate-600 to-slate-700" },
                    { icon: Phone, text: "Free Consult", color: "from-blue-400 to-blue-500" },
                    { icon: BookOpen, text: "Training", color: "from-slate-500 to-slate-600" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group flex flex-col items-center gap-1.5 bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-xl p-3 hover:bg-white hover:border-blue-200 hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                      <div className={`w-8 h-8 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}>
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-900 text-xs font-bold text-center leading-tight">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & Benefits - Horizontal Layout */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  {/* Compact Price Card */}
                  <div className="bg-gradient-to-br from-white via-blue-50/20 to-white backdrop-blur-md border-2 border-blue-200/60 rounded-2xl p-4 shadow-xl relative overflow-hidden group hover:shadow-blue-500/25 transition-all duration-300">
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-0.5 rounded-bl-xl font-bold">
                      LIMITED
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black text-black mb-1">$50</div>
                      <div className="text-slate-600 text-sm font-semibold mb-2">+ State Fee</div>
                      <div className="inline-flex items-center gap-1 text-blue-700 text-xs font-bold bg-blue-50 px-2 py-1 rounded-full border border-blue-200">
                        <CheckCircle className="w-3 h-3" />
                        No Hidden Fees
                      </div>
                      <div className="text-xs text-slate-500 mt-2">
                        <span className="line-through">$199</span>
                        <span className="text-red-600 font-bold ml-1">Save $149</span>
                      </div>
                    </div>
                  </div>

                  {/* Compact Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1">
                    <div className="flex items-center gap-2 text-slate-700">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <Zap className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-sm font-semibold">Same-day processing</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <Shield className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-sm font-semibold">Money-back guarantee</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <Award className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-sm font-semibold">Expert support</span>
                    </div>
                  </div>
                </div>

                {/* Professional CTA Buttons */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleGetStarted}
                      size="lg"
                      className="w-full sm:w-auto btn-mg-primary font-semibold px-8 py-3 rounded-lg group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <Rocket className="w-5 h-5 mr-2 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="relative z-10">Start Your LLC Now</span>
                      <ArrowRight className="w-4 h-4 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>

                    <ContactButton
                      variant="whatsapp"
                      message="consultation"
                      context="hero"
                      size="lg"
                      className="flex-1 sm:flex-initial btn-mg-secondary font-semibold px-8 py-3 rounded-lg"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Free Expert Call
                    </ContactButton>
                  </div>

                  {/* Compact Urgency Bar */}
                  <div className="flex items-center justify-center gap-2 text-xs bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200/60 rounded-lg px-3 py-2 shadow-sm">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="font-bold text-slate-700">⚡ Limited Time: Same-day processing available</span>
                  </div>
                </div>

                {/* Compact Trust Indicators */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-slate-600">
                  <div className="flex items-center gap-1.5 bg-white/60 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-slate-200 text-xs">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                    <span className="font-medium">No hidden fees</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/60 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-slate-200 text-xs">
                    <Shield className="w-3 h-3 text-blue-600" />
                    <span className="font-medium">SSL secured</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/60 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-slate-200 text-xs">
                    <Award className="w-3 h-3 text-blue-600" />
                    <span className="font-medium">Money-back guarantee</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Elements (5 columns) */}
              <div className="lg:col-span-5 relative">
                {/* Main Visual Card */}
                <div className="bg-white/90 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                  {/* Subtle Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/20 to-blue-50/0 group-hover:from-blue-50/30 group-hover:to-blue-50/40 transition-all duration-300"></div>
                  
                  <div className="relative z-10 space-y-5">
                    {/* Clean Header */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 mg-icon group-hover:scale-105 transition-transform duration-200">
                        <span className="text-sm font-black">MG</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">LLC Formation</h3>
                        <p className="text-slate-600 text-sm font-medium">Complete Business Package</p>
                        <div className="flex items-center gap-1 mt-1">
                          <div className="w-3 h-2 bg-gradient-to-r from-red-500 via-white to-blue-600 rounded-sm"></div>
                          <span className="text-xs font-semibold text-slate-500">USA LLC</span>
                        </div>
                      </div>
                    </div>

                    {/* Clean Features List */}
                    <div className="space-y-3">
                      {[
                        { name: "Articles of Organization", status: "included" },
                        { name: "Operating Agreement", status: "included" },
                        { name: "EIN Application", status: "included" },
                        { name: "U.S. Bank Account Setup", status: "premium" },
                        { name: "PayPal & Stripe Integration", status: "premium" },
                        { name: "Expert Business Consultation", status: "included" }
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 group/item hover:bg-blue-50/30 rounded-lg p-2 transition-all duration-200">
                          <div className="w-5 h-5 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-sm group-hover/item:scale-105 transition-transform duration-200">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-slate-700 font-medium flex-1 text-sm">{feature.name}</span>
                          {feature.status === "premium" && (
                            <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs px-2 py-0.5">
                              Premium
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Price Summary */}
                    <div className="border-t border-slate-200 pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600 font-medium">Starting Price</span>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-slate-900">$50</div>
                          <div className="text-slate-500 text-xs">+ State Filing Fee</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. TRUST SIGNALS - Build Credibility */}
        <TrustSignals />

        {/* FIXED: Value Proposition - Consistent spacing and modern U.S. business styling */}
        <section className="section-padding-large gradient-secondary relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_70%)]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200 text-lg px-6 py-3">
                <Target className="w-5 h-5 mr-2" />
                Why Choose Mindscape Global Formations?
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)] text-slate-900">
                The Complete Business Formation Suite
              </h2>
              <p className="text-lg md:text-xl text-professional-muted font-[family-name:var(--font-dm-sans)] max-w-4xl mx-auto leading-relaxed">
                We do more than file paperwork — we deliver a compliant LLC with EIN, banking, payments, and guidance to start operating quickly and confidently.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: Zap,
                  title: "Lightning-Fast Processing",
                  desc: "Same-day processing available. Get your LLC formed faster than anywhere else.",
                  color: "from-yellow-500/10 to-orange-500/10",
                  highlight: "24hrs"
                },
                {
                  icon: Shield,
                  title: "100% Accuracy Guarantee",
                  desc: "Expert review ensures everything is done correctly the first time.",
                  color: "from-blue-500/10 to-blue-600/10",
                  highlight: "0% Errors"
                },
                {
                  icon: Users,
                  title: "Expert Support Team",
                  desc: "Dedicated business formation specialists guide you through every step.",
                  color: "from-blue-500/10 to-cyan-500/10",
                  highlight: "24/7 Help"
                },
                {
                  icon: Award,
                  title: "Proven Results",
                  desc: "10,000+ successful LLC formations with 4.9/5 customer rating.",
                  color: "from-purple-500/10 to-pink-500/10",
                  highlight: "4.9/5 Stars"
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer bg-white backdrop-blur-sm relative overflow-hidden hover:border-blue-200"
                >
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-bold">
                    {feature.highlight}
                  </div>
                  <CardHeader className="text-center pb-4 pt-8">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-all duration-200 shadow-xl border border-slate-100`}
                    >
                      <feature.icon className="w-10 h-10 text-slate-700" />
                    </div>
                    <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-xl text-slate-900 group-hover:text-blue-700 transition-colors duration-200 mb-3">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center font-[family-name:var(--font-dm-sans)] text-base leading-relaxed text-professional-muted">
                      {feature.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Success Stats (tone adjusted to be credible) */}
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-3xl p-8 border border-blue-100">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)] text-slate-900">
                    Join Thousands of Successful Entrepreneurs
                  </h3>
                  <p className="text-professional-muted font-[family-name:var(--font-dm-sans)] text-lg leading-relaxed mb-6">
                    We focus on accuracy, speed, and compliance so you can start operating quickly and confidently.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="font-[family-name:var(--font-dm-sans)] font-medium text-slate-700">Single point of contact for all services</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="font-[family-name:var(--font-dm-sans)] font-medium text-slate-700">Proven track record with 10,000+ successful businesses</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="font-[family-name:var(--font-dm-sans)] font-medium text-slate-700">Ongoing support and business growth guidance</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 bg-white/80 rounded-2xl border border-slate-100">
                    <div className="text-3xl font-bold text-blue-600 mb-2">24–48 hrs</div>
                    <div className="text-sm text-slate-600 font-[family-name:var(--font-dm-sans)]">Typical setup window</div>
                  </div>
                  <div className="text-center p-6 bg-white/80 rounded-2xl border border-slate-100">
                    <div className="text-3xl font-bold text-blue-600 mb-2">50+ states</div>
                    <div className="text-sm text-slate-600 font-[family-name:var(--font-dm-sans)]">Coverage and guidance</div>
                  </div>
                  <div className="text-center p-6 bg-white/80 rounded-2xl border border-slate-100">
                    <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                    <div className="text-sm text-slate-600 font-[family-name:var(--font-dm-sans)]">Client Success Rate</div>
                  </div>
                  <div className="text-center p-6 bg-white/80 rounded-2xl border border-slate-100">
                    <div className="text-3xl font-bold text-blue-600 mb-2">Extended</div>
                    <div className="text-sm text-slate-600 font-[family-name:var(--font-dm-sans)]">Support hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. ENHANCED SERVICES SHOWCASE - Complete Business Solution */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden" id="services">
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03),transparent_70%)]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Enhanced Header Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6">
                <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 px-6 py-3 shadow-xl text-base">
                  <Target className="w-5 h-5 mr-2" />
                  Complete Business Solution
                </Badge>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-blue-600">All-in-One Platform</span>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                Everything You Need to
                <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                  Launch & Scale
                </span>
              </h2>
              
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
                From LLC formation to payment processing - we provide comprehensive end-to-end solutions 
                to transform your business vision into a profitable reality
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 shadow-lg">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-slate-700">10,000+ Businesses Launched</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 shadow-lg">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-semibold text-slate-700">4.9/5 Customer Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 shadow-lg">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-slate-700">100% Money-Back Guarantee</span>
                </div>
              </div>
            </div>

            {/* Enhanced Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Zap,
                  title: "Lightning-Fast LLC Formation",
                  desc: "Same-day processing available. Get your LLC formed faster than anywhere else with expert review and state filing.",
                  features: ["24-hour processing", "Expert review", "State filing", "Operating Agreement"],
                  highlight: "Fastest",
                  color: "from-yellow-500 to-orange-600",
                  bgColor: "from-yellow-50 to-orange-50"
                },
                {
                  icon: CreditCard,
                  title: "U.S. Business Banking",
                  desc: "Complete setup of your U.S. business bank account with major banks including Chase, Bank of America, and Wells Fargo.",
                  features: ["Major bank partnerships", "Online banking", "Business debit card", "Mobile app access"],
                  highlight: "Bank Ready",
                  color: "from-blue-600 to-blue-700",
                  bgColor: "from-blue-50 to-indigo-50"
                },
                {
                  icon: DollarSign,
                  title: "Payment Processing Suite",
                  desc: "Full payment processing setup including PayPal Business, Stripe integration, and merchant account services.",
                  features: ["PayPal Business", "Stripe integration", "Merchant accounts", "Multi-currency support"],
                  highlight: "Accept Payments",
                  color: "from-blue-600 to-[#1E40AF]",
                  bgColor: "from-blue-50 to-blue-100"
                },
                {
                  icon: Phone,
                  title: "Expert Support",
                  desc: "One-on-one expert guidance throughout the entire process with dedicated account managers and priority support.",
                  features: ["24/7 availability", "Dedicated manager", "Multi-channel support", "Priority response"],
                  highlight: "Always Here",
                  color: "from-[#1E40AF] to-[#1E3A8A]",
                  bgColor: "from-blue-50 to-indigo-50"
                },
                {
                  icon: BookOpen,
                  title: "Business Launch Academy",
                  desc: "Comprehensive guides and training for various business models including Amazon FBA, e-commerce, and freelancing.",
                  features: ["Amazon FBA mastery", "E-commerce scaling", "Freelancing empire", "Marketing strategies"],
                  highlight: "Proven Strategies",
                  color: "from-indigo-600 to-blue-600",
                  bgColor: "from-indigo-50 to-blue-50"
                },
                {
                  icon: Users,
                  title: "Live Training Sessions",
                  desc: "Weekly live training sessions with successful entrepreneurs, expert Q&A, and interactive strategy workshops.",
                  features: ["Weekly live sessions", "Expert Q&A", "Strategy workshops", "Networking opportunities"],
                  highlight: "Learn from Winners",
                  color: "from-pink-600 to-rose-600",
                  bgColor: "from-pink-50 to-rose-50"
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden cursor-pointer"
                >
                  {/* Enhanced Background Effects */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 group-hover:from-white/20 group-hover:to-white/30 transition-all duration-500"></div>

                  {/* Enhanced Highlight Badge */}
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${feature.color} text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    {feature.highlight}
                  </div>

                  <div className="relative z-10">
                    {/* Enhanced Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Enhanced Content */}
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                      {feature.title}
                    </h3>

                    <p className="text-slate-600 mb-6 leading-relaxed text-base">
                      {feature.desc}
                    </p>

                    {/* Enhanced Features List */}
                    <div className="space-y-3 mb-6">
                      {feature.features.map((item, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 group/item">
                          <div className="w-5 h-5 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-slate-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Enhanced CTA Button */}
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <Button 
                        onClick={handleGetStarted}
                        className={`w-full bg-gradient-to-r ${feature.color} hover:shadow-xl text-white font-semibold py-3 rounded-xl transition-all duration-300 group/btn relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                        <ArrowRight className="w-4 h-4 mr-2 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        <span className="relative z-10">Get Started</span>
                      </Button>
                    </div>
                  </div>

                  {/* Enhanced Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
                </div>
              ))}
            </div>

            {/* Enhanced Bottom CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-blue-600/20"></div>
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2 text-base">
                  <Rocket className="w-4 h-4 mr-2" />
                  Ready to Launch Your Business?
                </Badge>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Join 10,000+ Successful Entrepreneurs
                </h3>
                
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  Get your complete business setup with LLC formation, banking, payments, and expert guidance. 
                  Everything you need to start operating and generating revenue quickly.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    onClick={handleGetStarted}
                    size="lg" 
                    className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-100/50 to-blue-50/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                    <span className="relative z-10">Start Your LLC Today</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  </Button>
                  
                  <ContactButton
                    variant="whatsapp"
                    message="consultation"
                    context="services"
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:opacity-90 text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Free Expert Consultation
                  </ContactButton>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center gap-6 mt-8 text-blue-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">No Hidden Fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm font-medium">Money-Back Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-medium">4.9/5 Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. PROCESS TIMELINE - How It Works */}
        <ProcessTimeline onGetStarted={handleGetStarted} />

        {/* 6. PRICING PREVIEW - Cost Calculator */}
        <CostCalculator onGetStarted={handleGetStarted} />

        {/* 7. PLATFORM INTEGRATIONS - Where Your LLC Works */}
        <section className="py-12 bg-gradient-to-br from-blue-50/20 via-white/10 to-slate-50/20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.02),transparent_50%)]"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-10">
              <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 px-4 py-2 shadow-lg">
                <Globe className="w-4 h-4 mr-2" />
                Trusted Integrations
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900">
                Connect with Leading Platforms
              </h2>
              <p className="text-base text-slate-600 max-w-2xl mx-auto">
                Your LLC integrates seamlessly with trusted payment processors and marketplaces
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
              {[
                { icon: Shield, name: "IRS", description: "Tax Compliance" },
                { icon: CreditCard, name: "PayPal", description: "Payments" },
                { icon: DollarSign, name: "Stripe", description: "Online Payments" },
                { icon: Star, name: "Amazon", description: "Marketplace" },
                { icon: TrendingUp, name: "eBay", description: "Auctions" },
                { icon: Globe, name: "Shopify", description: "E-commerce" },
              ].map((platform, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group hover:scale-105 transition-all duration-200 p-3 rounded-xl hover:bg-white/60 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 group-hover:shadow-lg transition-all duration-200 border border-slate-200/60">
                    <platform.icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-slate-900">
                      {platform.name}
                    </div>
                    <div className="text-xs text-slate-600">
                      {platform.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg font-[family-name:var(--font-space-grotesk)] text-slate-900">Instant Setup</h3>
                  <p className="text-slate-600 font-[family-name:var(--font-dm-sans)] text-sm">All accounts configured within 24 hours</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg font-[family-name:var(--font-space-grotesk)] text-slate-900">Bank-Level Security</h3>
                  <p className="text-slate-600 font-[family-name:var(--font-dm-sans)] text-sm">256-bit SSL encryption & fraud protection</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg font-[family-name:var(--font-space-grotesk)] text-slate-900">Expert Support</h3>
                  <p className="text-slate-600 font-[family-name:var(--font-dm-sans)] text-sm">Dedicated account managers available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. STATE SELECTOR - Choose Your State */}
        <StateSelector onGetStarted={() => {
          setIsPopupOpen(true)
        }} />

        {/* 9. FAQ SECTION - Address Objections */}
        <FAQSection />

        {/* 10. LEAD MAGNET - Free Guide */}
        <LeadMagnet onGetStarted={handleGetStarted} />

        {/* 11. SECURITY & COMPLIANCE - Build Trust */}
        <SecurityCompliance />

        {/* 12. SOCIAL PROOF - Testimonials & Reviews */}
        <Testimonials />



      </main>

      {/* Standardized Footer */}
      <StandardFooter />

      {/* Interactive Components */}
      <ClientOnly>
        <PerformanceOptimizer />
        <UnifiedChatbot />
        <ExitIntentPopup />
        <FloatingNotifications />
        <StickyCTABar />
        <AnalyticsTracking />
      </ClientOnly>

      {/* Popup Contact Form */}
      <PopupContactForm 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        serviceType={popupServiceType}
        initialMessage={popupInitialMessage}
      />
    </div>
  )
}