"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Loader2, CheckCircle, AlertCircle, Mail, MessageCircle, Phone, User, Building, Send, Star } from "lucide-react"
import { legacyContactFormSchema, type ContactFormData } from "@/lib/validation"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [submitError, setSubmitError] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})
    setSubmitError("")

    const formData = new FormData(e.currentTarget)
    const data: ContactFormData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    }

    try {
      // Validate form data
      const validatedData = legacyContactFormSchema.parse(data)
      
      // Send email to zeeshan.keerio@mindscapeanalytics.com
      await sendContactEmail(validatedData)
      
      // Also send WhatsApp message if phone is provided
      if (validatedData.phone) {
        sendWhatsAppMessage(validatedData)
      }

      setIsSubmitting(false)
      setIsSubmitted(true)
    } catch (error) {
      setIsSubmitting(false)
      
      if (error instanceof Error && error.name === "ZodError") {
        const zodError = error as any
        const fieldErrors: Partial<ContactFormData> = {}
        
        zodError.errors.forEach((err: any) => {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message
        })
        
        setErrors(fieldErrors)
      } else {
        setSubmitError("Failed to send message. Please try again.")
      }
    }
  }

  const sendContactEmail = async (data: ContactFormData) => {
    try {
      // Try the API route first
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const result = await response.json()
        return result
      } else {
        throw new Error('API route failed')
      }
    } catch (error) {
      console.error('API route failed, trying direct Formspree:', error)
      
      // Direct Formspree fallback
      try {
        const formspreeResponse = await fetch('https://formspree.io/f/xkgqqkpl', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
            phone: data.phone || 'Not provided',
            service: data.service,
            message: `
🔔 NEW CONTACT FORM SUBMISSION

👤 Name: ${data.firstName} ${data.lastName}
📧 Email: ${data.email}
📱 Phone: ${data.phone || 'Not provided'}
🎯 Service: ${data.service}

💬 Message:
${data.message}

---
📅 Submitted: ${new Date().toLocaleString()}
🌐 Source: ll.mindscapeanalytics.com
            `,
            _replyto: data.email,
            _subject: `🚀 New Contact: ${data.service} - ${data.firstName} ${data.lastName}`
          })
        })

        if (formspreeResponse.ok) {
          return { success: true, service: 'Formspree Direct' }
        } else {
          throw new Error('Formspree failed')
        }
      } catch (formspreeError) {
        console.error('Formspree direct failed:', formspreeError)
        
        // Final fallback to mailto
        const emailSubject = `🚀 New Contact: ${data.service} - ${data.firstName} ${data.lastName}`
        const emailBody = `
🔔 NEW CONTACT FORM SUBMISSION

👤 Name: ${data.firstName} ${data.lastName}
📧 Email: ${data.email}
📱 Phone: ${data.phone || 'Not provided'}
🎯 Service: ${data.service}

💬 Message:
${data.message}

---
📅 Submitted: ${new Date().toLocaleString()}
🌐 Source: ll.mindscapeanalytics.com
🏢 Mindscape Global Formations
        `

        const mailtoLink = `mailto:zeeshan.keerio@mindscapeanalytics.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
        window.open(mailtoLink, '_blank')
        
        return { success: true, service: 'Mailto Fallback' }
      }
    }
  }

  const sendWhatsAppMessage = (data: ContactFormData) => {
    const whatsappMessage = `
🔔 New Contact Form Submission

👤 Name: ${data.firstName} ${data.lastName}
📧 Email: ${data.email}
📱 Phone: ${data.phone}
🎯 Service: ${data.service}

💬 Message: ${data.message}

From: ll.mindscapeanalytics.com
    `
    
    const whatsappUrl = `https://wa.me/13072106155?text=${encodeURIComponent(whatsappMessage)}`
    
    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="relative mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <Star className="w-4 h-4 text-white" />
          </div>
        </div>
        
        <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
          <MessageCircle className="w-4 h-4 mr-2" />
          Message Delivered
        </Badge>
        
        <h3 className="text-2xl font-bold text-slate-900 mb-3">Thank You!</h3>
        <p className="text-slate-600 mb-6 max-w-md mx-auto leading-relaxed">
          Your message has been sent successfully. We'll get back to you within 2 hours during business hours.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => window.open('https://wa.me/13072106155', '_blank')}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Chat on WhatsApp
          </Button>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Enhanced Header */}
      <div className="text-center">
        <Badge className="mb-4 bg-blue-600 text-white border-0 shadow-lg">
          <Phone className="w-4 h-4 mr-2" />
          Get Expert Guidance
        </Badge>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
          Ready to Start Your LLC?
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Get personalized guidance from our LLC formation experts. We'll help you choose the right package and state for your business.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {submitError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            {submitError}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label htmlFor="firstName" className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <User className="w-4 h-4 text-blue-600" />
              First Name *
            </label>
            <Input
              id="firstName"
              name="firstName"
              required
              className={`bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 rounded-xl h-12 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 ${
                errors.firstName ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
              }`}
              placeholder="John"
              aria-invalid={!!errors.firstName}
              aria-describedby={errors.firstName ? "firstName-error" : undefined}
            />
            {errors.firstName && (
              <p id="firstName-error" className="text-red-600 text-sm flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.firstName}
              </p>
            )}
          </div>
          <div className="space-y-3">
            <label htmlFor="lastName" className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <User className="w-4 h-4 text-blue-600" />
              Last Name *
            </label>
            <Input
              id="lastName"
              name="lastName"
              required
              className={`bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 rounded-xl h-12 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 ${
                errors.lastName ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
              }`}
              placeholder="Doe"
              aria-invalid={!!errors.lastName}
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
            />
            {errors.lastName && (
              <p id="lastName-error" className="text-red-600 text-sm flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Mail className="w-4 h-4 text-blue-600" />
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className={`bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 rounded-xl h-12 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 ${
                errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
              }`}
              placeholder="john@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-red-600 text-sm flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-3">
            <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Phone className="w-4 h-4 text-blue-600" />
              Phone Number
              <Badge className="text-xs bg-green-100 text-green-700 border-green-200">
                WhatsApp Ready
              </Badge>
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              className={`bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 rounded-xl h-12 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 ${
                errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
              }`}
              placeholder="+1 (555) 123-4567"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="text-red-600 text-sm flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <label htmlFor="service" className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <Building className="w-4 h-4 text-blue-600" />
            Service Interest *
          </label>
          <Select name="service" required>
            <SelectTrigger className={`bg-white border-slate-300 text-slate-900 rounded-xl h-12 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 ${
              errors.service ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
            }`}>
              <SelectValue placeholder="Select a service package" />
            </SelectTrigger>
            <SelectContent className="bg-white border-slate-200">
              <SelectItem value="starter" className="text-slate-900 hover:bg-slate-50">
                <div className="flex items-center justify-between w-full">
                  <span>Starter Package</span>
                  <Badge className="ml-2 bg-green-100 text-green-700">$50</Badge>
                </div>
              </SelectItem>
              <SelectItem value="standard" className="text-slate-900 hover:bg-slate-50">
                <div className="flex items-center justify-between w-full">
                  <span>Standard Package</span>
                  <Badge className="ml-2 bg-blue-100 text-blue-700">$150</Badge>
                </div>
              </SelectItem>
              <SelectItem value="premium" className="text-slate-900 hover:bg-slate-50">
                <div className="flex items-center justify-between w-full">
                  <span>Premium Package</span>
                  <Badge className="ml-2 bg-purple-100 text-purple-700">$250</Badge>
                </div>
              </SelectItem>
              <SelectItem value="amazon" className="text-slate-900 hover:bg-slate-50">
                <div className="flex items-center justify-between w-full">
                  <span>LLC + Amazon Package</span>
                  <Badge className="ml-2 bg-orange-100 text-orange-700">$800</Badge>
                </div>
              </SelectItem>
              <SelectItem value="amazon-ebay" className="text-slate-900 hover:bg-slate-50">
                <div className="flex items-center justify-between w-full">
                  <span>LLC + Amazon + eBay Package</span>
                  <Badge className="ml-2 bg-red-100 text-red-700">$1000</Badge>
                </div>
              </SelectItem>
              <SelectItem value="consultation" className="text-slate-900 hover:bg-slate-50">
                <div className="flex items-center justify-between w-full">
                  <span>Free Consultation</span>
                  <Badge className="ml-2 bg-emerald-100 text-emerald-700">FREE</Badge>
                </div>
              </SelectItem>
              <SelectItem value="other" className="text-slate-900 hover:bg-slate-50">Other Services</SelectItem>
            </SelectContent>
          </Select>
          {errors.service && (
            <p className="text-red-600 text-sm flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.service}
            </p>
          )}
        </div>

        <div className="space-y-3">
          <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <MessageCircle className="w-4 h-4 text-blue-600" />
            Message *
          </label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none ${
              errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
            }`}
            placeholder="Tell us about your business formation needs, preferred state, timeline, or any specific questions you have..."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-red-600 text-sm flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.message}
            </p>
          )}
        </div>

        <div className="space-y-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl disabled:opacity-50 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin relative z-10" />
                <span className="relative z-10">Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">Send Message</span>
              </>
            )}
          </Button>

          <div className="flex items-center justify-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4 text-blue-600" />
              <span>WhatsApp Integration</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4 text-purple-600" />
              <span>Email Notification</span>
            </div>
          </div>

          <p className="text-sm text-slate-500 text-center leading-relaxed">
            By submitting this form, you agree to our{" "}
            <a href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
              privacy policy
            </a>{" "}
            and{" "}
            <a href="/terms" className="text-blue-600 hover:text-blue-700 underline">
              terms of service
            </a>
            .
          </p>
        </div>
      </form>

      {/* Quick Contact Options */}
      <div className="mt-8 pt-8 border-t border-slate-200">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Prefer Direct Contact?</h3>
          <p className="text-slate-600 text-sm">Get immediate assistance through our preferred channels</p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <Button
            onClick={() => window.open('https://wa.me/13072106155?text=Hi! I\'m interested in LLC formation services. Can you help me get started?', '_blank')}
            className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp Chat
          </Button>
          <Button
            onClick={() => window.location.href = 'mailto:zeeshan.keerio@mindscapeanalytics.com?subject=LLC Formation Inquiry'}
            variant="outline"
            className="border-slate-300 text-slate-700 hover:bg-slate-50 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Mail className="w-5 h-5 mr-2" />
            Direct Email
          </Button>
        </div>
      </div>
    </div>
  )
}
