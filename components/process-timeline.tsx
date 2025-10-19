"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle, 
  Clock, 
  FileText, 
  CreditCard, 
  Shield, 
  Mail,
  Phone,
  Building,
  ArrowRight,
} from "lucide-react"
import ContactButton from "@/components/contact-button"

interface ProcessTimelineProps {
  onGetStarted?: () => void
}

interface ProcessStep {
  id: number
  title: string
  description: string
  icon: any
  duration: string
  status: "completed" | "current" | "upcoming"
  details: string[]
  documents?: string[]
}

export default function ProcessTimeline({ onGetStarted }: ProcessTimelineProps = {}) {
  const [currentStep] = useState(1)

  const steps: ProcessStep[] = [
    {
      id: 1,
      title: "Initial Consultation",
      description: "Free consultation to understand your needs",
      icon: Phone,
      duration: "15-30 minutes",
      status: currentStep >= 1 ? "completed" : "upcoming",
      details: [
        "Discuss your business goals",
        "Choose the right LLC package",
        "Select your preferred state",
        "Answer any questions you have"
      ]
    },
    {
      id: 2,
      title: "Information Collection",
      description: "Gather all required business information",
      icon: FileText,
      duration: "1-2 hours",
      status: currentStep >= 2 ? "completed" : currentStep === 1 ? "current" : "upcoming",
      details: [
        "Business name and purpose",
        "Registered agent information",
        "Member/manager details",
        "Business address and contact info"
      ],
      documents: [
        "Business Name Reservation",
        "Member Information Form",
        "Operating Agreement Template"
      ]
    },
    {
      id: 3,
      title: "Document Preparation",
      description: "Our experts prepare all required documents",
      icon: Building,
      duration: "2-4 hours",
      status: currentStep >= 3 ? "completed" : currentStep === 2 ? "current" : "upcoming",
      details: [
        "Articles of Organization",
        "Operating Agreement",
        "EIN Application (if included)",
        "Registered Agent Setup"
      ],
      documents: [
        "Articles of Organization",
        "Operating Agreement",
        "EIN Application (SS-4)",
        "Registered Agent Acceptance"
      ]
    },
    {
      id: 4,
      title: "State Filing",
      description: "Submit documents to state authorities",
      icon: Shield,
      duration: "1-5 business days",
      status: currentStep >= 4 ? "completed" : currentStep === 3 ? "current" : "upcoming",
      details: [
        "Electronic filing with state",
        "Payment of state fees",
        "Tracking of filing status",
        "Receipt of confirmation"
      ]
    },
    {
      id: 5,
      title: "EIN Processing",
      description: "Federal Tax ID application and processing",
      icon: CreditCard,
      duration: "Same day",
      status: currentStep >= 5 ? "completed" : currentStep === 4 ? "current" : "upcoming",
      details: [
        "IRS Form SS-4 submission",
        "EIN assignment",
        "IRS confirmation letter",
        "Tax filing guidance"
      ],
      documents: [
        "IRS Form SS-4",
        "EIN Confirmation Letter",
        "Tax Filing Instructions"
      ]
    },
    {
      id: 6,
      title: "Document Delivery",
      description: "Receive your complete LLC package",
      icon: Mail,
      duration: "1-2 days",
      status: currentStep >= 6 ? "completed" : currentStep === 5 ? "current" : "upcoming",
      details: [
        "Certificate of Formation",
        "Operating Agreement",
        "EIN Letter",
        "Business banking guide"
      ],
      documents: [
        "Certificate of Formation",
        "Operating Agreement",
        "EIN Confirmation",
        "Banking Setup Guide"
      ]
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-600" />
      case "current":
        return <Clock className="w-6 h-6 text-accent animate-pulse" />
      default:
        return <Clock className="w-6 h-6 text-muted-foreground" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-emerald-200 bg-emerald-50"
      case "current":
        return "border-blue-200 bg-blue-50"
      default:
        return "border-slate-200 bg-white"
    }
  }

  return (
    <div className="py-20 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">Process Overview</Badge>
          <h2 className="text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)] text-slate-900">
            Your LLC Formation Journey
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-[family-name:var(--font-dm-sans)]">
            From consultation to completion, we guide you through every step of forming your LLC.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-emerald-600"></div>
          
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.id} className="relative">
                {/* Step Connector */}
                <div className="absolute left-6 w-4 h-4 bg-white border-2 border-blue-600 rounded-full z-10 flex items-center justify-center">
                  {getStatusIcon(step.status)}
                </div>
                
                <Card className={`ml-16 shadow-xl transition-all duration-500 bg-white border border-slate-200 hover:border-blue-200 ${getStatusColor(step.status)}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-600 rounded-xl flex items-center justify-center text-white ring-1 ring-slate-200">
                          <step.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-slate-900 font-[family-name:var(--font-space-grotesk)]">
                            {step.title}
                          </CardTitle>
                          <CardDescription className="text-slate-600 font-[family-name:var(--font-dm-sans)]">
                            {step.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-2 border-slate-200 text-slate-700">
                          {step.duration}
                        </Badge>
                        <div className="text-sm text-slate-500">
                          Step {step.id} of {steps.length}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Details */}
                      <div>
                        <h4 className="font-semibold mb-3 text-slate-900">What happens in this step:</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-2 text-sm text-slate-700">
                              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Documents */}
                      {step.documents && (
                        <div>
                          <h4 className="font-semibold mb-3 text-slate-900">Documents you'll receive:</h4>
                          <div className="space-y-2">
                            {step.documents.map((doc, docIndex) => (
                              <div key={docIndex} className="flex items-center gap-2 text-sm text-slate-700">
                                <FileText className="w-4 h-4 text-slate-500" />
                                <span>{doc}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Action Buttons */}
                    {step.status === "current" && (
                      <div className="mt-6 pt-6 border-t border-slate-200">
                        <div className="flex gap-3">
                          <Button 
                            onClick={onGetStarted}
                            className="bg-slate-900 hover:bg-slate-800 text-white group relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            <span className="relative z-10">Continue Process</span>
                            <ArrowRight className="w-4 h-4 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
                          </Button>
                          <ContactButton
                            variant="whatsapp"
                            message="services"
                            context="process-timeline"
                            className="border-2 border-slate-300 text-slate-900 hover:bg-slate-900 hover:text-white"
                          >
                            Get Help
                          </ContactButton>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Removed duplicated stats and CTA to avoid redundancy; kept core timeline only */}
      </div>
    </div>
  )
}
