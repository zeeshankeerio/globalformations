"use client"

import ContactForm from "@/components/contact-form"
import StandardNavigation from "@/components/standard-navigation"
import StandardFooter from "@/components/standard-footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Clock, MessageCircle, Star, Shield, CheckCircle, Headphones } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* USA Flag Accent */}
      <div className="usa-flag-accent"></div>
      
      {/* Standardized Navigation */}
      <StandardNavigation currentPage="/contact" />

      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Enhanced Header */}
        <div className="relative z-10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6 bg-blue-600 text-white border-0 shadow-lg">
              <Headphones className="w-4 h-4 mr-2" />
              Expert Support Team
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Contact Our Team</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get personalized LLC formation guidance from our expert team. We're here to help you succeed.
            </p>
          </div>
        </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-blue-600 text-white border-0 shadow-lg">
                <MessageCircle className="w-4 h-4 mr-2" />
                Multiple Ways to Connect
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's Start Your Business Journey</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Ready to form your LLC? Our expert team is here to guide you through every step of the process. 
                Choose your preferred way to connect with us.
              </p>
            </div>

            <div className="grid gap-6">
              {/* WhatsApp Contact - Primary */}
              <div className="group p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl hover:shadow-green-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-slate-900">WhatsApp Support</h3>
                      <Badge className="bg-green-100 text-green-700 text-xs border-green-200">Instant Response</Badge>
                    </div>
                    <p className="text-slate-600 mb-2">Get immediate assistance via WhatsApp</p>
                    <p className="text-sm text-slate-500 mb-3">Available 24/7 for urgent inquiries</p>
                    <Button
                      onClick={() => window.open('https://wa.me/13072106155?text=Hi! I need help with LLC formation. Can you assist me?', '_blank')}
                      className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </div>

              {/* Email Contact */}
              <div className="group p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:shadow-blue-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-slate-900">Email Support</h3>
                      <Badge className="bg-blue-100 text-blue-700 text-xs border-blue-200">2 Hour Response</Badge>
                    </div>
                    <p className="text-slate-600 mb-2">Email</p>
                    <p className="text-sm text-slate-500 mb-3">Detailed responses during business hours</p>
                    <Button
                      onClick={() => window.location.href = 'mailto:info@mindscapeanalytics.com?subject=LLC Formation Inquiry'}
                      variant="outline"
                      className="border-blue-300 text-blue-700 hover:bg-blue-50"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                  </div>
                </div>
              </div>

              {/* Office Information */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Office Address</h3>
                    <p className="text-slate-600">30 N Gould St Ste N</p>
                    <p className="text-slate-600">Sheridan, WY 82801</p>
                    <p className="text-sm text-slate-500 mt-2">United States</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Business Hours</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Monday - Friday:</span>
                        <span className="text-slate-500">9:00 AM - 6:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Saturday:</span>
                        <span className="text-slate-500">10:00 AM - 4:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Sunday:</span>
                        <span className="text-slate-500">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Free Consultation CTA */}
            <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Free Expert Consultation</h3>
                    <Badge className="bg-blue-100 text-blue-700 text-xs border-blue-200">15 Minutes • No Obligation</Badge>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Get personalized guidance on LLC formation, state selection, and business structure. 
                  Our experts will help you make the right decisions for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => window.open('https://wa.me/13072106155?text=Hi! I\'d like to schedule a free consultation for LLC formation. When would be a good time?', '_blank')}
                    className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Schedule via WhatsApp
                  </Button>
                  <Button
                    onClick={() => window.location.href = 'mailto:info@mindscapeanalytics.com?subject=Free Consultation Request'}
                    variant="outline"
                    className="border-slate-300 text-slate-700 hover:bg-slate-50"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email to Schedule
                  </Button>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl border border-slate-200 shadow-lg">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div className="text-xs font-semibold text-slate-900">Fast Response</div>
                <div className="text-xs text-slate-500">Within 2 Hours</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-slate-200 shadow-lg">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div className="text-xs font-semibold text-slate-900">Secure & Private</div>
                <div className="text-xs text-slate-500">SSL Protected</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-slate-200 shadow-lg">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <div className="text-xs font-semibold text-slate-900">Expert Team</div>
                <div className="text-xs text-slate-500">LLC Specialists</div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-200">
            <ContactForm />
          </div>
        </div>
      </div>
      </div>

      {/* Standardized Footer */}
      <StandardFooter />
    </div>
  )
}
