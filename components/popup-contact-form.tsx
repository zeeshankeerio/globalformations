"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Loader2, CheckCircle, AlertCircle, Mail, MessageCircle, Phone, User, Building, Star, X, Sparkles, Rocket, Zap, Shield, Clock, Send } from "lucide-react"
import { legacyContactFormSchema, type ContactFormData } from "@/lib/validation"

interface PopupContactFormProps {
  isOpen: boolean
  onClose?: () => void
  selectedPackage?: string
  packagePrice?: string
  serviceType?: 'llc' | 'software'
  initialMessage?: string
}

export default function PopupContactForm({ isOpen, onClose, selectedPackage, packagePrice, serviceType = 'llc', initialMessage }: PopupContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [submitError, setSubmitError] = useState<string>("")
  const [currentServiceType, setCurrentServiceType] = useState<'llc' | 'software'>(serviceType)
  const [currentMessage, setCurrentMessage] = useState(initialMessage || '')

  // Lock body scroll when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Update service type and message when props change
  useEffect(() => {
    setCurrentServiceType(serviceType)
    setCurrentMessage(initialMessage || '')
  }, [serviceType, initialMessage])

  // Debug logging removed for production

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
      service: selectedPackage || (formData.get("service") as string),
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
        const zodError = error as unknown as { errors: Array<{ path: string[]; message: string }> }
        const fieldErrors: Partial<ContactFormData> = {}

        zodError.errors.forEach((err) => {
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
            message: selectedPackage ? `
🚀 PACKAGE INQUIRY - ${selectedPackage?.toUpperCase()} ${packagePrice || ''}

👤 Name: ${data.firstName} ${data.lastName}
📧 Email: ${data.email}
📱 Phone: ${data.phone || 'Not provided'}
🎯 Package: ${data.service}
💰 Price: ${packagePrice || 'See pricing page'}

💬 Message:
${data.message}

---
📅 Submitted: ${new Date().toLocaleString()}
🌐 Source: ll.mindscapeanalytics.com (Popup Form)
🏢 Mindscape Global Formations
            ` : `
🔔 NEW CONTACT FORM SUBMISSION

👤 Name: ${data.firstName} ${data.lastName}
📧 Email: ${data.email}
📱 Phone: ${data.phone || 'Not provided'}
🎯 Service: ${data.service}

💬 Message:
${data.message}

---
📅 Submitted: ${new Date().toLocaleString()}
🌐 Source: ll.mindscapeanalytics.com (Popup Form)
🏢 Mindscape Global Formations
            `,
            _replyto: data.email,
            _subject: selectedPackage
              ? `🚀 ${selectedPackage?.toUpperCase()} Package Inquiry - ${data.firstName} ${data.lastName}`
              : `🚀 New Contact: ${data.service} - ${data.firstName} ${data.lastName}`
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
        const emailSubject = selectedPackage
          ? `🚀 ${selectedPackage?.toUpperCase()} Package Inquiry - ${data.firstName} ${data.lastName}`
          : `🚀 New Contact: ${data.service} - ${data.firstName} ${data.lastName}`

        const emailBody = selectedPackage ? `
🚀 PACKAGE INQUIRY - ${selectedPackage?.toUpperCase()} ${packagePrice || ''}

👤 Name: ${data.firstName} ${data.lastName}
📧 Email: ${data.email}
📱 Phone: ${data.phone || 'Not provided'}
🎯 Package: ${data.service}
💰 Price: ${packagePrice || 'See pricing page'}

� Message:
${data.message}

---
📅 Submitted: ${new Date().toLocaleString()}
🌐 Source: ll.mindscapeanalytics.com (Popup Form)
🏢 Mindscape Global Formations
        ` : `
🔔 NEW CONTACT FORM SUBMISSION

👤 Name: ${data.firstName} ${data.lastName}
📧 Email: ${data.email}
📱 Phone: ${data.phone || 'Not provided'}
🎯 Service: ${data.service}

💬 Message:
${data.message}

---
📅 Submitted: ${new Date().toLocaleString()}
🌐 Source: ll.mindscapeanalytics.com (Popup Form)
🏢 Mindscape Global Formations
        `

        const mailtoLink = `mailto:zeeshan.keerio@mindscapeanalytics.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
        window.open(mailtoLink, '_blank')

        return { success: true, service: 'Mailto Fallback' }
      }
    }
  }

  const sendWhatsAppMessage = (data: ContactFormData) => {
    const whatsappMessage = selectedPackage ? `
🚀 ${selectedPackage?.toUpperCase()} Package Inquiry

👤 Name: ${data.firstName} ${data.lastName}
📧 Email: ${data.email}
📱 Phone: ${data.phone}
🎯 Package: ${data.service}
💰 Price: ${packagePrice || 'See pricing page'}

💬 Message: ${data.message}

From: ll.mindscapeanalytics.com (Popup Form)
    ` : `
🔔 New Contact Form Submission

👤 Name: ${data.firstName} ${data.lastName}
📧 Email: ${data.email}
📱 Phone: ${data.phone}
🎯 Service: ${data.service}

💬 Message: ${data.message}

From: ll.mindscapeanalytics.com (Popup Form)
    `

    const whatsappUrl = `https://wa.me/13072106155?text=${encodeURIComponent(whatsappMessage)}`

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
    }, 2000)
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setErrors({})
    setSubmitError("")
  }

  const handleClose = () => {
    resetForm()
    if (onClose) {
      onClose()
    }
  }

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-sm bg-white border-0 shadow-2xl rounded-2xl p-0 overflow-hidden relative !fixed !top-[50%] !left-[50%] !-translate-x-1/2 !-translate-y-1/2 !m-0" aria-describedby="success-description">
          <DialogTitle className="sr-only">Contact Form Success</DialogTitle>
          <div id="success-description" className="sr-only">
            Your {selectedPackage || 'LLC formation'} inquiry has been sent successfully. We'll contact you within 2 hours.
          </div>

          {/* Animated Success Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-blue-100/30 to-slate-50/20"></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-[#1E40AF]/20 to-[#1E3A8A]/20 rounded-full blur-xl animate-pulse"></div>

          {/* Compact Success Header */}
          <div className="bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#1E3A8A] px-4 py-4 text-center relative overflow-hidden">
            {/* Header Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10"></div>
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>

            {/* Success Icon with Animation */}
            <div className="relative mb-2">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>

              {/* Floating Sparkles */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-white/30 rounded-full flex items-center justify-center animate-ping">
                <Star className="w-1.5 h-1.5 text-white" />
              </div>
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-white/30 rounded-full flex items-center justify-center animate-pulse">
                <Sparkles className="w-1 h-1 text-white" />
              </div>
            </div>

            <h3 className="text-lg font-bold text-white mb-1">🎉 Thank You!</h3>
            <p className="text-blue-100 text-sm">
              Your {selectedPackage || 'LLC formation'} inquiry sent successfully.
            </p>
          </div>

          {/* Compact Success Content */}
          <div className="relative z-10 p-4 text-center">
            <p className="text-slate-600 mb-3 text-sm leading-relaxed">
              We'll contact you within <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">2 hours</span> with next steps.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="px-4 pb-4">
            <div className="space-y-2">
              <Button
                onClick={() => window.open('https://wa.me/13072106155', '_blank')}
                className="w-full bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#1E3A8A] hover:opacity-90 text-white py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden text-sm"
                aria-label="Chat on WhatsApp"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <MessageCircle className="w-4 h-4 mr-2 relative z-10" />
                <span className="relative z-10 font-semibold">Chat on WhatsApp</span>
              </Button>

              <Button
                onClick={handleClose}
                variant="outline"
                className="w-full border-2 border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 py-2.5 rounded-lg transition-all duration-200 text-sm"
                aria-label="Close success dialog"
              >
                Close
              </Button>
            </div>

            {/* Compact Trust Indicators */}
            <div className="bg-gradient-to-r from-slate-50/80 to-blue-50/80 backdrop-blur-sm rounded-lg p-2.5 mt-3 border border-slate-100/50 shadow-sm">
              <div className="flex items-center justify-center gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-1">
                  <div className="w-3.5 h-3.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                    <Clock className="w-1.5 h-1.5 text-white" />
                  </div>
                  <span className="font-medium">2hr Response</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3.5 h-3.5 bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] rounded-full flex items-center justify-center">
                    <Shield className="w-1.5 h-1.5 text-white" />
                  </div>
                  <span className="font-medium">Secure</span>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent 
        className="sm:max-w-md bg-white border-0 shadow-2xl rounded-2xl p-0 overflow-hidden relative !fixed !top-[50%] !left-[50%] !-translate-x-1/2 !-translate-y-1/2 !m-0" 
        aria-describedby="popup-form-description"
      >
        <DialogTitle className="sr-only">
          {currentServiceType === 'software' 
            ? 'Software Development & AI Solutions Contact Form'
            : selectedPackage 
              ? `${selectedPackage} Package Contact Form` 
              : 'LLC Formation Contact Form'
          }
        </DialogTitle>
        <div id="popup-form-description" className="sr-only">
          Contact form for {currentServiceType === 'software' ? 'software development and AI solutions' : (selectedPackage || 'LLC formation')} services. Fill out your details to get started.
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 via-white to-blue-50/20"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-blue-700/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-slate-600/10 to-slate-700/10 rounded-full blur-xl"></div>

        {/* Compact Header */}
        <div className="bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#1E3A8A] px-4 py-3 relative overflow-hidden">
          {/* Header Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>

          {/* Close Button */}
          <Button
            onClick={handleClose}
            variant="ghost"
            size="sm"
            className="absolute top-1 right-1 text-white/80 hover:text-white hover:bg-white/20 rounded-full w-7 h-7 p-0 backdrop-blur-sm transition-all duration-200 hover:scale-110"
            aria-label="Close contact form"
          >
            <X className="w-3.5 h-3.5" />
          </Button>

          {/* Service Type Badge */}
          {currentServiceType === 'software' ? (
            <Badge className="mb-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 text-xs px-2 py-0.5 rounded-full shadow-lg">
              <Rocket className="w-3 h-3 mr-1" />
              Software Development & AI Solutions
            </Badge>
          ) : selectedPackage && (
            <Badge className="mb-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 text-xs px-2 py-0.5 rounded-full shadow-lg">
              <Rocket className="w-3 h-3 mr-1" />
              {selectedPackage} {packagePrice && `- ${packagePrice}`}
            </Badge>
          )}

          {/* Compact Title */}
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <h2 className="text-lg font-bold text-white">
              {currentServiceType === 'software' ? 'Get in Touch' : 'Get Started Today'}
            </h2>
          </div>

          {/* Compact Subtitle */}
          <div className="flex items-center gap-3 text-blue-100 text-xs">
            <div className="flex items-center gap-1">
              <Zap className="w-2.5 h-2.5" />
              <span>Quick</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-2.5 h-2.5" />
              <span>2hr response</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="w-2.5 h-2.5" />
              <span>Secure</span>
            </div>
          </div>
        </div>

        {/* Compact Form */}
        <form onSubmit={handleSubmit} className="relative z-10 p-4 space-y-3" noValidate>
          {submitError && (
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg flex items-center gap-2 text-sm shadow-sm" role="alert">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{submitError}</span>
            </div>
          )}

          {/* Compact Name Fields */}
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <label htmlFor="popup-firstName" className="sr-only">First Name</label>
              <div className="relative group">
                <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center opacity-60 group-focus-within:opacity-100 transition-opacity duration-200">
                  <User className="w-2 h-2 text-white" />
                </div>
                <Input
                  id="popup-firstName"
                  name="firstName"
                  required
                  autoFocus
                  className={`pl-8 bg-white border-slate-200 text-slate-900 placeholder:text-slate-500 rounded-lg h-9 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-200 shadow-sm hover:shadow-md ${errors.firstName ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : ""
                    }`}
                  placeholder="First Name *"
                  aria-invalid={!!errors.firstName}
                  aria-describedby={errors.firstName ? "firstName-error" : undefined}
                />
              </div>
              {errors.firstName && (
                <p id="firstName-error" className="text-red-500 text-xs flex items-center gap-1" role="alert">
                  <AlertCircle className="w-3 h-3 flex-shrink-0" />
                  <span>{errors.firstName}</span>
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label htmlFor="popup-lastName" className="sr-only">Last Name</label>
              <div className="relative group">
                <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center opacity-60 group-focus-within:opacity-100 transition-opacity duration-200">
                  <User className="w-2 h-2 text-white" />
                </div>
                <Input
                  id="popup-lastName"
                  name="lastName"
                  required
                  className={`pl-8 bg-white border-slate-200 text-slate-900 placeholder:text-slate-500 rounded-lg h-9 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-200 shadow-sm hover:shadow-md ${errors.lastName ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : ""
                    }`}
                  placeholder="Last Name *"
                  aria-invalid={!!errors.lastName}
                  aria-describedby={errors.lastName ? "lastName-error" : undefined}
                />
              </div>
              {errors.lastName && (
                <p id="lastName-error" className="text-red-500 text-xs flex items-center gap-1" role="alert">
                  <AlertCircle className="w-3 h-3 flex-shrink-0" />
                  <span>{errors.lastName}</span>
                </p>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <label htmlFor="popup-email" className="sr-only">Email Address</label>
            <div className="relative group">
              <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center opacity-60 group-focus-within:opacity-100 transition-opacity duration-200">
                <Mail className="w-2 h-2 text-white" />
              </div>
              <Input
                id="popup-email"
                type="email"
                name="email"
                required
                className={`pl-8 bg-white border-slate-200 text-slate-900 placeholder:text-slate-500 rounded-lg h-9 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-200 shadow-sm hover:shadow-md ${errors.email ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : ""
                  }`}
                placeholder="Email Address *"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
            </div>
            {errors.email && (
              <p id="email-error" className="text-red-500 text-xs flex items-center gap-1" role="alert">
                <AlertCircle className="w-3 h-3 flex-shrink-0" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-1">
            <label htmlFor="popup-phone" className="sr-only">Phone Number (Optional)</label>
            <div className="relative group">
              <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center opacity-60 group-focus-within:opacity-100 transition-opacity duration-200">
                <Phone className="w-2 h-2 text-white" />
              </div>
              <Input
                id="popup-phone"
                name="phone"
                type="tel"
                className={`pl-8 pr-16 bg-white border-slate-200 text-slate-900 placeholder:text-slate-500 rounded-lg h-9 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-200 shadow-sm hover:shadow-md ${errors.phone ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : ""
                  }`}
                placeholder="Phone Number"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              <Badge className="absolute right-1.5 top-1/2 -translate-y-1/2 text-xs bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 border-0 px-1.5 py-0.5 rounded-full shadow-sm">
                <MessageCircle className="w-2.5 h-2.5 mr-0.5" />
                <span className="text-xs">WhatsApp</span>
              </Badge>
            </div>
            {errors.phone && (
              <p id="phone-error" className="text-red-500 text-xs flex items-center gap-1" role="alert">
                <AlertCircle className="w-3 h-3 flex-shrink-0" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          {/* Package Selection - Only if not pre-selected and LLC service */}
          {!selectedPackage && currentServiceType === 'llc' && (
            <div className="space-y-1">
              <label htmlFor="popup-service" className="sr-only">Service Package</label>
              <div className="relative group">
                <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center opacity-60 group-focus-within:opacity-100 transition-opacity duration-200 z-10">
                  <Building className="w-2 h-2 text-white" />
                </div>
                <Select name="service" required>
                  <SelectTrigger
                    id="popup-service"
                    className={`pl-8 bg-white border-slate-200 text-slate-900 rounded-lg h-9 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-200 shadow-sm hover:shadow-md ${errors.service ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : ""
                      }`}
                    aria-invalid={!!errors.service}
                    aria-describedby={errors.service ? "service-error" : undefined}
                  >
                    <SelectValue placeholder="Select Package *" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-200 rounded-lg shadow-2xl">
                    <SelectItem value="starter" className="text-slate-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 rounded-md m-1">
                      <div className="flex items-center justify-between w-full">
                        <span className="font-medium text-sm">Starter Package</span>
                        <Badge className="ml-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 border-0 text-xs">$50</Badge>
                      </div>
                    </SelectItem>
                    <SelectItem value="standard" className="text-slate-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-md m-1">
                      <div className="flex items-center justify-between w-full">
                        <span className="font-medium text-sm">Standard Package</span>
                        <Badge className="ml-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-0 text-xs">$150</Badge>
                      </div>
                    </SelectItem>
                    <SelectItem value="premium" className="text-slate-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 rounded-md m-1">
                      <div className="flex items-center justify-between w-full">
                        <span className="font-medium text-sm">Premium Package</span>
                        <Badge className="ml-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 border-0 text-xs">$250</Badge>
                      </div>
                    </SelectItem>
                    <SelectItem value="amazon" className="text-slate-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-md m-1">
                      <div className="flex items-center justify-between w-full">
                        <span className="font-medium text-sm">LLC + Amazon</span>
                        <Badge className="ml-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-0 text-xs">$800</Badge>
                      </div>
                    </SelectItem>
                    <SelectItem value="amazon-ebay" className="text-slate-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 rounded-md m-1">
                      <div className="flex items-center justify-between w-full">
                        <span className="font-medium text-sm">LLC + Amazon + eBay</span>
                        <Badge className="ml-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 border-0 text-xs">$1000</Badge>
                      </div>
                    </SelectItem>
                    <SelectItem value="consultation" className="text-slate-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 rounded-md m-1">
                      <div className="flex items-center justify-between w-full">
                        <span className="font-medium text-sm">Free Consultation</span>
                        <Badge className="ml-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 border-0 text-xs">FREE</Badge>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {errors.service && (
                <p id="service-error" className="text-red-500 text-xs flex items-center gap-1" role="alert">
                  <AlertCircle className="w-3 h-3 flex-shrink-0" />
                  <span>{errors.service}</span>
                </p>
              )}
            </div>
          )}

          {/* Message Field */}
          <div className="space-y-1">
            <label htmlFor="popup-message" className="sr-only">Message</label>
            <div className="relative group">
              <div className="absolute left-2.5 top-2.5 w-3.5 h-3.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center opacity-60 group-focus-within:opacity-100 transition-opacity duration-200">
                <MessageCircle className="w-2 h-2 text-white" />
              </div>
              <Textarea
                id="popup-message"
                name="message"
                required
                rows={2}
                defaultValue={currentMessage}
                className={`pl-8 bg-white border-slate-200 text-slate-900 placeholder:text-slate-500 rounded-lg text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-200 resize-none shadow-sm hover:shadow-md ${errors.message ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : ""
                  }`}
                placeholder={
                  currentServiceType === 'software'
                    ? "Tell us about your software development or AI solution needs..."
                    : selectedPackage
                      ? `I'm interested in the ${selectedPackage} package. Please provide details...`
                      : "Tell us about your business formation needs..."
                }
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
            </div>
            {errors.message && (
              <p id="message-error" className="text-red-500 text-xs flex items-center gap-1" role="alert">
                <AlertCircle className="w-3 h-3 flex-shrink-0" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Compact Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#1E3A8A] hover:from-[#1E3A8A] hover:via-[#1E40AF] hover:to-[#0A2540] text-white py-2.5 font-bold rounded-lg shadow-lg hover:shadow-xl disabled:opacity-50 transition-all duration-300 group relative overflow-hidden text-sm"
          >
            {/* Enhanced Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-blue-500/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin relative z-10" />
                <span className="relative z-10">Sending...</span>
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4 relative z-10" />
                <span className="relative z-10">Get Started Now</span>
                <Sparkles className="ml-2 h-3.5 w-3.5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </>
            )}
          </Button>

          {/* Compact Trust Indicators */}
          <div className="bg-gradient-to-r from-slate-50/80 to-blue-50/80 backdrop-blur-sm rounded-lg p-2.5 border border-slate-100/50 shadow-sm">
            <div className="flex items-center justify-center gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] rounded-full flex items-center justify-center shadow-sm">
                  <Shield className="w-2 h-2 text-white" />
                </div>
                <span className="font-medium">Secure</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-sm">
                  <Clock className="w-2 h-2 text-white" />
                </div>
                <span className="font-medium">2hr Response</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-sm">
                  <MessageCircle className="w-2 h-2 text-white" />
                </div>
                <span className="font-medium">WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Privacy Notice */}
          <p className="text-xs text-slate-500 text-center leading-relaxed">
            By submitting, you agree to our{" "}
            <a href="/privacy" className="text-blue-700 hover:text-blue-800 underline font-medium">
              privacy policy
            </a>{" "}
            and{" "}
            <a href="/terms" className="text-blue-700 hover:text-blue-800 underline font-medium">
              terms
            </a>
            .
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
