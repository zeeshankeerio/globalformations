"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Calculator, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  Zap,
  Star,
  ArrowRight
} from "lucide-react"
import ContactButton from "@/components/contact-button"

interface CostCalculatorProps {
  onGetStarted?: () => void
}

interface ServicePackage {
  id: string
  name: string
  basePrice: number
  description: string
  features: string[]
  popular?: boolean
  savings?: number
}

interface StateInfo {
  name: string
  code: string
  filingFee: number
  processingTime: string
  businessFriendly: number
}

export default function CostCalculator({ onGetStarted }: CostCalculatorProps = {}) {
  const packages: ServicePackage[] = [
    {
      id: "starter",
      name: "Starter",
      basePrice: 50,
      description: "Basic LLC formation",
      features: ["LLC Formation", "Operating Agreement", "Free Consultation"]
    },
    {
      id: "standard",
      name: "Standard",
      basePrice: 199,
      description: "Most popular package",
      features: ["Everything in Starter", "EIN Application", "Priority Support"],
      popular: true
    },
    {
      id: "premium",
      name: "Premium",
      basePrice: 399,
      description: "Complete business setup",
      features: ["Everything in Standard", "Bank Account Setup", "Payment Processing"],
      savings: 299
    }
  ]

  const states: StateInfo[] = [
    { name: "Wyoming", code: "WY", filingFee: 100, processingTime: "1-2 days", businessFriendly: 5 },
    { name: "Delaware", code: "DE", filingFee: 90, processingTime: "1-3 days", businessFriendly: 5 },
    { name: "Nevada", code: "NV", filingFee: 75, processingTime: "1-2 days", businessFriendly: 4 },
    { name: "Florida", code: "FL", filingFee: 125, processingTime: "3-5 days", businessFriendly: 4 },
    { name: "Texas", code: "TX", filingFee: 300, processingTime: "5-7 days", businessFriendly: 4 },
    { name: "California", code: "CA", filingFee: 70, processingTime: "5-10 days", businessFriendly: 2 }
  ]

  const addOns = [
    { id: "rush", name: "Rush Processing", price: 99, description: "Same-day filing", icon: Zap },
    { id: "registered_agent", name: "Registered Agent", price: 199, description: "2 years included", icon: CheckCircle },
    { id: "annual_report", name: "Annual Report", price: 149, description: "Compliance filing", icon: Clock },
    { id: "business_license", name: "License Research", price: 79, description: "Find requirements", icon: Star }
  ]

  const [selectedPackage, setSelectedPackage] = useState<ServicePackage>(packages[1]!)
  const [selectedState, setSelectedState] = useState<StateInfo>(states[0]!)
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])

  const calculateTotal = () => {
    let total = selectedPackage.basePrice + selectedState.filingFee
    
    selectedAddOns.forEach(addOnId => {
      const addOn = addOns.find(a => a.id === addOnId)
      if (addOn) total += addOn.price
    })
    
    return total
  }

  const handleAddOnChange = (addOnId: string, checked: boolean) => {
    if (checked) {
      setSelectedAddOns(prev => [...prev, addOnId])
    } else {
      setSelectedAddOns(prev => prev.filter(id => id !== addOnId))
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
      />
    ))
  }

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200 shadow-sm">
            <Calculator className="w-4 h-4 mr-2" />
            Cost Calculator
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)] bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#1E3A8A] bg-clip-text text-transparent">
            Calculate Your LLC Formation Cost
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-[family-name:var(--font-dm-sans)]">
            Get an instant, transparent estimate for your LLC formation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Package Selection - Compact */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Package Cards - Horizontal Layout */}
            <Card className="border border-slate-200 bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-slate-900 flex items-center gap-2">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                  </span>
                  Choose Your Package
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                        selectedPackage.id === pkg.id
                          ? "border-blue-600 bg-gradient-to-br from-blue-50 to-blue-100/50 shadow-lg shadow-blue-600/20"
                          : "border-slate-200 hover:border-blue-300 hover:shadow-md"
                      }`}
                      onClick={() => setSelectedPackage(pkg)}
                    >
                      <div className="text-center">
                        {pkg.popular && (
                          <Badge className="mb-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs shadow-md">Most Popular</Badge>
                        )}
                        <h4 className="font-semibold text-slate-900 mb-1">{pkg.name}</h4>
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">${pkg.basePrice}</div>
                        <p className="text-sm text-slate-600 mb-3">{pkg.description}</p>
                        <div className="space-y-1">
                          {pkg.features.slice(0, 2).map((feature, index) => (
                            <div key={index} className="flex items-center gap-1 text-xs text-slate-700">
                              <CheckCircle className="w-3 h-3 text-blue-600 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                          {pkg.features.length > 2 && (
                            <div className="text-xs text-slate-500">+{pkg.features.length - 2} more</div>
                          )}
                        </div>
                        {pkg.savings && (
                          <div className="mt-2 text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full inline-block">
                            Save ${pkg.savings}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* State & Add-ons - Side by Side */}
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* State Selection */}
              <Card className="border border-slate-200 bg-white shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-slate-900 flex items-center gap-2">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <DollarSign className="w-3 h-3 text-blue-600" />
                    </span>
                    Select State
                  </h3>
                  <Select 
                    value={selectedState.code}
                    onValueChange={(value) => {
                      const state = states.find(s => s.code === value)
                      if (state) setSelectedState(state)
                    }}
                  >
                    <SelectTrigger className="mb-4 h-11 border-slate-300 hover:border-blue-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all">
                      <SelectValue placeholder="Choose your state">
                        {selectedState.name} - ${selectedState.filingFee}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="bg-white border-slate-200 shadow-xl">
                      {states.map((state) => (
                        <SelectItem 
                          key={state.code} 
                          value={state.code}
                          className="cursor-pointer hover:bg-blue-50 focus:bg-blue-50 py-3"
                        >
                          <div className="flex items-center justify-between gap-4 w-full pr-8">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-slate-900">{state.name}</span>
                              <span className="text-xs text-slate-500">({state.code})</span>
                            </div>
                            <span className="text-sm font-semibold text-blue-600">
                              ${state.filingFee}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <div className="p-4 bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-slate-900">{selectedState.name}</span>
                      <div className="flex items-center gap-1">
                        {renderStars(selectedState.businessFriendly)}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex flex-col">
                        <span className="text-slate-500 text-xs mb-1">Filing Fee</span>
                        <span className="font-bold text-blue-600 text-lg">${selectedState.filingFee}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-slate-500 text-xs mb-1">Processing</span>
                        <span className="font-semibold text-slate-900">{selectedState.processingTime}</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-200/50">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-xs text-slate-600">
                          Business-friendly rating: {selectedState.businessFriendly}/5
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Add-ons */}
              <Card className="border border-slate-200 bg-white shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-slate-900 flex items-center gap-2">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 text-blue-600" />
                    </span>
                    Add-ons
                  </h3>
                  <div className="space-y-3">
                    {addOns.map((addOn) => (
                      <div key={addOn.id} className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                        selectedAddOns.includes(addOn.id) 
                          ? 'bg-blue-50 border-blue-200' 
                          : 'border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                      }`}>
                        <Checkbox
                          id={addOn.id}
                          checked={selectedAddOns.includes(addOn.id)}
                          onCheckedChange={(checked) => handleAddOnChange(addOn.id, checked as boolean)}
                          className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                        />
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          selectedAddOns.includes(addOn.id)
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          <addOn.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <label htmlFor={addOn.id} className="cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium text-slate-900 text-sm">{addOn.name}</div>
                                <div className="text-xs text-slate-600">{addOn.description}</div>
                              </div>
                              <span className="font-semibold text-slate-900 text-sm">${addOn.price}</span>
                            </div>
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Cost Summary - Sticky */}
          <div className="lg:sticky lg:top-8 h-fit">
            <Card className="border border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-xl">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Your Total</h3>
                </div>

                {/* Cost Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">{selectedPackage.name} Package</span>
                    <span className="font-semibold">${selectedPackage.basePrice}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">{selectedState.name} State Fee</span>
                    <span className="font-semibold">${selectedState.filingFee}</span>
                  </div>
                  
                  {selectedAddOns.map((addOnId) => {
                    const addOn = addOns.find(a => a.id === addOnId)
                    return addOn ? (
                      <div key={addOnId} className="flex justify-between items-center text-sm">
                        <span className="text-slate-600">{addOn.name}</span>
                        <span className="font-semibold">${addOn.price}</span>
                      </div>
                    ) : null
                  })}
                </div>

                {/* Total */}
                <div className="border-t border-slate-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-slate-900">Total Cost</span>
                    <span className="text-3xl font-bold bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#1E3A8A] bg-clip-text text-transparent">
                      ${calculateTotal()}
                    </span>
                  </div>
                  
                  {selectedPackage.savings && (
                    <div className="flex items-center gap-2 text-blue-600 mt-2">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">You save ${selectedPackage.savings}!</span>
                    </div>
                  )}
                </div>

                {/* What's Included */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-slate-900">What's Included:</h4>
                  <div className="space-y-2">
                    {selectedPackage.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-3 h-3 text-blue-600 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button 
                    onClick={onGetStarted}
                    className="w-full bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#1E3A8A] hover:opacity-90 text-white shadow-md shadow-blue-600/20 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative z-10">Get Started Now</span>
                    <ArrowRight className="w-4 h-4 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                  <ContactButton
                    variant="whatsapp"
                    message="pricing"
                    context="cost-calculator"
                    className="w-full border-2 border-blue-600 text-blue-700 hover:bg-blue-50"
                  >
                    Free Consultation
                  </ContactButton>
                </div>

                {/* Trust Indicators */}
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <div className="grid grid-cols-1 gap-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-blue-600" />
                      <span>No hidden fees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-blue-600" />
                      <span>Fast processing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-3 h-3 text-blue-600" />
                      <span>Money-back guarantee</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

