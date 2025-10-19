"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  Plus,
  Clock,
  DollarSign,
  Shield,
  MessageCircle
} from "lucide-react"
import ContactButton from "@/components/contact-button"

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
  popular?: boolean
}

export default function FAQSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("popular")
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const faqItems: FAQItem[] = [
    {
      id: "1",
      question: "How much does LLC formation cost?",
      answer: "Our LLC formation starts at $50 + state filing fees. State fees range from $50-$500 depending on the state. We offer transparent pricing with no hidden fees.",
      category: "pricing",
      popular: true
    },
    {
      id: "2",
      question: "How long does it take to form an LLC?",
      answer: "Most LLC formations are completed within 24-48 hours. We offer same-day processing for urgent cases.",
      category: "process",
      popular: true
    },
    {
      id: "3",
      question: "Which state should I choose for my LLC?",
      answer: "Popular choices include Wyoming (no state tax), Delaware (business-friendly laws), and Nevada (privacy protection). We'll help you choose during consultation.",
      category: "process",
      popular: true
    },
    {
      id: "4",
      question: "Do you offer refunds?",
      answer: "We offer a 100% money-back guarantee if we cannot successfully form your LLC. State filing fees are non-refundable.",
      category: "pricing",
      popular: true
    },
    {
      id: "5",
      question: "What documents do I need?",
      answer: "You need: business name, business address, member information, and registered agent details. We handle all paperwork.",
      category: "process"
    },
    {
      id: "6",
      question: "Do you help with EIN (Federal Tax ID)?",
      answer: "Yes! EIN application is included in our Standard and Premium packages. We get your Federal Tax ID same day.",
      category: "services"
    }
  ]

  const categories = [
    { id: "popular", name: "Popular", icon: MessageCircle },
    { id: "pricing", name: "Pricing", icon: DollarSign },
    { id: "process", name: "Process", icon: Clock },
    { id: "services", name: "Services", icon: Shield }
  ]

  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "popular" 
      ? item.popular 
      : item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedItems(newExpanded)
  }

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50/30 via-white/20 to-blue-50/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 px-4 py-2 shadow-lg">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-professional-muted max-w-2xl mx-auto font-[family-name:var(--font-dm-sans)]">
            Get instant answers to common LLC formation questions
          </p>
        </div>

        {/* Search and Filter - Compact */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-slate-200"
              />
            </div>
            
            {/* Category Pills */}
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 ${
                    selectedCategory === category.id 
                      ? "bg-blue-600 text-white" 
                      : "border-slate-200 text-professional-muted hover:bg-slate-50"
                  }`}
                >
                  <category.icon className="w-3 h-3" />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Grid - Compact */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {filteredFAQs.length === 0 ? (
            <div className="md:col-span-2">
              <Card className="border border-slate-200 bg-white">
                <CardContent className="p-8 text-center">
                  <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-slate-900">No questions found</h3>
                  <p className="text-professional-muted mb-4">
                    Try adjusting your search or contact our experts directly.
                  </p>
                  <ContactButton
                    variant="whatsapp"
                    message="faq"
                    context="faq-not-found"
                    className="bg-gradient-to-r from-black/80 to-blue-700/90 backdrop-blur-md border border-white/20 hover:from-black/90 hover:to-blue-600/90 text-white shadow-lg hover:shadow-blue-500/25"
                  >
                    Ask Our Experts
                  </ContactButton>
                </CardContent>
              </Card>
            </div>
          ) : (
            filteredFAQs.map((faq) => (
              <Card key={faq.id} className="border border-slate-200 bg-white hover:shadow-lg transition-all duration-200">
                <CardContent className="p-0">
                  <button
                    className="w-full p-4 text-left hover:bg-slate-50 transition-colors"
                    onClick={() => toggleExpanded(faq.id)}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-slate-900 text-sm leading-tight">
                            {faq.question}
                          </h3>
                          {faq.popular && (
                            <Badge className="bg-blue-100 text-blue-700 text-xs">Popular</Badge>
                          )}
                        </div>
                        {!expandedItems.has(faq.id) && (
                          <p className="text-xs text-professional-muted overflow-hidden">
                            {faq.answer.substring(0, 80)}...
                          </p>
                        )}
                      </div>
                      <div className="flex-shrink-0 mt-1">
                        {expandedItems.has(faq.id) ? (
                          <ChevronDown className="w-4 h-4 text-slate-400 rotate-180 transition-transform" />
                        ) : (
                          <Plus className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {expandedItems.has(faq.id) && (
                    <div className="px-4 pb-4 border-t border-slate-100">
                      <p className="text-sm text-professional-body leading-relaxed mb-3 mt-3">
                        {faq.answer}
                      </p>
                      <div className="flex gap-2">
                        <ContactButton
                          variant="whatsapp"
                          message="consultation"
                          context="faq-follow-up"
                          size="sm"
                          className="text-xs bg-gradient-to-r from-black/80 to-blue-700/90 backdrop-blur-md border border-white/20 hover:from-black/90 hover:to-blue-600/90 text-white shadow-lg hover:shadow-blue-500/25"
                        >
                          Get More Info
                        </ContactButton>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* CTA - Compact */}
        <Card className="border border-blue-200 bg-gradient-to-r from-blue-50 to-slate-50">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-slate-900">Still have questions?</h3>
                <p className="text-sm text-professional-muted">Get expert guidance from our LLC specialists</p>
              </div>
              <ContactButton
                variant="whatsapp"
                message="consultation"
                context="faq-cta"
                className="bg-gradient-to-r from-black/80 to-blue-700/90 backdrop-blur-md border border-white/20 hover:from-black/90 hover:to-blue-600/90 text-white shadow-lg hover:shadow-blue-500/25"
              >
                Chat with Expert
              </ContactButton>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

