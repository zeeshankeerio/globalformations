"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, DollarSign, Clock, TrendingUp, ChevronDown, Star } from "lucide-react"
import ContactButton from "@/components/contact-button"

interface StateSelectorProps {
  onGetStarted?: (state: string, price: number) => void
}

interface StateInfo {
  name: string
  code: string
  filingFee: number
  processingTime: string
  advantages: string[]
  popular: boolean
  businessFriendly: number
  taxAdvantages: string
}

export default function StateSelector({ onGetStarted }: StateSelectorProps = {}) {
  const [selectedState, setSelectedState] = useState<StateInfo | null>(null)
  const [showAllStates, setShowAllStates] = useState(false)

  const states: StateInfo[] = [
    {
      name: "Wyoming",
      code: "WY",
      filingFee: 100,
      processingTime: "1-2 days",
      advantages: ["No state income tax", "Strong privacy protection", "Low annual fees"],
      popular: true,
      businessFriendly: 5,
      taxAdvantages: "No corporate or personal income tax"
    },
    {
      name: "Delaware",
      code: "DE",
      filingFee: 90,
      processingTime: "1-3 days",
      advantages: ["Court of Chancery", "Corporate law expertise", "Investor familiarity"],
      popular: true,
      businessFriendly: 5,
      taxAdvantages: "No sales tax, favorable corporate structure"
    },
    {
      name: "Nevada",
      code: "NV",
      filingFee: 75,
      processingTime: "1-2 days",
      advantages: ["No state income tax", "No franchise tax", "Privacy protection"],
      popular: true,
      businessFriendly: 4,
      taxAdvantages: "No corporate or personal income tax"
    },
    {
      name: "Florida",
      code: "FL",
      filingFee: 125,
      processingTime: "3-5 days",
      advantages: ["No state income tax", "Growing economy", "Business incentives"],
      popular: false,
      businessFriendly: 4,
      taxAdvantages: "No state income tax, business-friendly"
    },
    {
      name: "Texas",
      code: "TX",
      filingFee: 300,
      processingTime: "5-7 days",
      advantages: ["No state income tax", "Large market", "Business-friendly"],
      popular: false,
      businessFriendly: 4,
      taxAdvantages: "No state income tax"
    },
    {
      name: "California",
      code: "CA",
      filingFee: 70,
      processingTime: "5-10 days",
      advantages: ["Large market", "Tech ecosystem", "Access to capital"],
      popular: false,
      businessFriendly: 2,
      taxAdvantages: "Access to largest U.S. market"
    }
  ]

  const popularStates = states.filter(state => state.popular)
  const displayStates = showAllStates ? states : popularStates

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
      />
    ))
  }

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">Choose Your State</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)] text-slate-900">
            Select Your LLC Formation State
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-[family-name:var(--font-dm-sans)]">
            Compare popular states and their benefits for LLC formation
          </p>
        </div>

        {/* Compact State Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {displayStates.map((state) => (
            <Card
              key={state.code}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg border ${
                selectedState?.code === state.code
                  ? "ring-2 ring-blue-500 border-blue-200 bg-blue-50"
                  : "border-slate-200 hover:border-blue-200 bg-white"
              }`}
              onClick={() => setSelectedState(state)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      {state.code}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{state.name}</h3>
                      <div className="flex items-center gap-1">
                        {renderStars(state.businessFriendly)}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    {state.popular && (
                      <Badge className="mb-1 bg-emerald-100 text-emerald-700 text-xs">Popular</Badge>
                    )}
                    <div className="text-lg font-bold text-slate-900">${state.filingFee}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{state.processingTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>{state.businessFriendly}/5 Rating</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center mb-8">
          <Button
            variant="outline"
            onClick={() => setShowAllStates(!showAllStates)}
            className="border-slate-200 text-slate-600 hover:bg-slate-50"
          >
            {showAllStates ? "Show Popular States Only" : "Show All States"}
            <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showAllStates ? "rotate-180" : ""}`} />
          </Button>
        </div>

        {/* Selected State Details - Compact */}
        {selectedState && (
          <Card className="border border-blue-200 bg-gradient-to-r from-blue-50 to-emerald-50">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold">
                      {selectedState.code}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{selectedState.name} LLC</h3>
                      <p className="text-slate-600 text-sm">{selectedState.taxAdvantages}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                      <DollarSign className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                      <div className="text-xl font-bold text-slate-900">${selectedState.filingFee}</div>
                      <div className="text-xs text-slate-600">State Fee</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                      <Clock className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                      <div className="text-xl font-bold text-slate-900">{selectedState.processingTime}</div>
                      <div className="text-xs text-slate-600">Processing</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900 text-sm">Key Benefits:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {selectedState.advantages.slice(0, 3).map((advantage, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                          <span>{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    onClick={() => onGetStarted?.(selectedState.name, selectedState.filingFee + 50)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative z-10">Form LLC in {selectedState.name} - ${selectedState.filingFee + 50}</span>
                  </Button>
                  <ContactButton
                    variant="whatsapp"
                    message="consultation"
                    context="state-selector"
                    className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    Get Free Consultation
                  </ContactButton>
                  <p className="text-xs text-slate-500 text-center">
                    Total: ${selectedState.filingFee} state fee + $50 service fee
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}

