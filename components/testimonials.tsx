"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, ChevronLeft, ChevronRight, Play, MapPin, Building } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "E-commerce Entrepreneur",
      location: "Miami, FL",
      business: "Sarah's Boutique LLC",
      rating: 5,
      text: "Mindscape Global Formations made starting my LLC incredibly easy. They handled everything from formation to bank account setup in just 2 days. Their team was professional and always available to answer questions.",
      image: "/placeholder-user.jpg",
      video: false,
      verified: true,
      package: "Premium Package"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Amazon Seller",
      location: "Los Angeles, CA",
      business: "TechGear Solutions LLC",
      rating: 5,
      text: "As an international entrepreneur, I was worried about the complexity of US business formation. These guys made it seamless. Got my LLC, EIN, and PayPal account all set up perfectly. Highly recommend!",
      image: "/placeholder-user.jpg",
      video: true,
      verified: true,
      package: "Standard Package"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Freelance Consultant",
      location: "Austin, TX",
      business: "Creative Consulting LLC",
      rating: 5,
      text: "The consultation was incredibly helpful. They walked me through all my options and helped me choose the right package for my needs. The process was transparent with no hidden fees.",
      image: "/placeholder-user.jpg",
      video: false,
      verified: true,
      package: "Starter Package"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Software Developer",
      location: "Seattle, WA",
      business: "CloudTech Innovations LLC",
      rating: 5,
      text: "Fast, reliable, and professional. They handled my Wyoming LLC formation and even helped me understand the tax implications. The ongoing support has been excellent.",
      image: "/placeholder-user.jpg",
      video: false,
      verified: true,
      package: "Premium Package"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Digital Marketing Agency",
      location: "Denver, CO",
      business: "Digital Growth LLC",
      rating: 5,
      text: "I've used other formation services before, but Mindscape is by far the best. They actually care about your success and provide ongoing guidance. Worth every penny!",
      image: "/placeholder-user.jpg",
      video: true,
      verified: true,
      package: "Standard Package"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = (testimonials[currentIndex] ?? testimonials[0]) as typeof testimonials[number]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ))
  }

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge className="mb-3 sm:mb-4 bg-blue-50 text-blue-700 border-blue-200 text-xs sm:text-sm">Customer Stories</Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 font-[family-name:var(--font-space-grotesk)] text-slate-900">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-professional-muted max-w-3xl mx-auto font-[family-name:var(--font-dm-sans)] px-4 sm:px-0">
            Don't just take our word for it. Here's what real entrepreneurs say about their experience with us.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative">
          <Card className="border border-slate-200 shadow-xl max-w-4xl mx-auto bg-white">
            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                {/* Quote Icon */}
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0 mt-1 sm:mt-2" />
                
                <div className="flex-1 w-full">
                  {/* Rating */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {renderStars(currentTestimonial.rating)}
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className="border-slate-200 text-slate-700 text-xs sm:text-sm">
                        {currentTestimonial.package}
                      </Badge>
                      {currentTestimonial.verified && (
                        <Badge className="bg-blue-50 text-blue-700 border-blue-200 text-xs sm:text-sm">
                          Verified
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-base sm:text-lg text-professional-muted mb-4 sm:mb-6 leading-relaxed font-[family-name:var(--font-dm-sans)]">
                    "{currentTestimonial.text}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex items-center gap-3 flex-1">
                      <Avatar className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                        <AvatarImage src={currentTestimonial.image} alt={currentTestimonial.name} loading="lazy" />
                        <AvatarFallback>{currentTestimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-slate-900 text-sm sm:text-base">{currentTestimonial.name}</h4>
                        <p className="text-xs sm:text-sm text-professional-muted">{currentTestimonial.role}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs text-slate-500 mt-1">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">{currentTestimonial.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Building className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">{currentTestimonial.business}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {currentTestimonial.video && (
                      <div className="w-full sm:w-auto">
                        <Button variant="outline" size="sm" className="w-full sm:w-auto flex items-center justify-center gap-2 border-slate-200 text-slate-700 hover:bg-slate-50 min-h-[44px] px-4">
                          <Play className="w-4 h-4" />
                          <span className="hidden sm:inline">Watch Video</span>
                          <span className="sm:hidden">Video</span>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-11 h-11 sm:w-12 sm:h-12 p-0 border-slate-200 hover:bg-slate-50 touch-manipulation"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex items-center gap-1.5 sm:gap-2 px-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${
                    index === currentIndex ? "bg-accent scale-110" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-11 h-11 sm:w-12 sm:h-12 p-0 border-slate-200 hover:bg-slate-50 touch-manipulation"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className="text-center p-3 sm:p-4">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">4.9/5</div>
            <p className="text-xs sm:text-sm text-professional-muted">Average Rating</p>
          </div>
          <div className="text-center p-3 sm:p-4">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">98%</div>
            <p className="text-xs sm:text-sm text-slate-600">Would Recommend</p>
          </div>
          <div className="text-center p-3 sm:p-4">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">24hrs</div>
            <p className="text-xs sm:text-sm text-slate-600">Avg Response Time</p>
          </div>
          <div className="text-center p-3 sm:p-4">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">100%</div>
            <p className="text-xs sm:text-sm text-slate-600">Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  )
}

