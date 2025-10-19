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
    <div className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">Customer Stories</Badge>
          <h2 className="text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)] text-slate-900">
            What Our Clients Say
          </h2>
          <p className="text-xl text-professional-muted max-w-3xl mx-auto font-[family-name:var(--font-dm-sans)]">
            Don't just take our word for it. Here's what real entrepreneurs say about their experience with us.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative">
          <Card className="border border-slate-200 shadow-xl max-w-4xl mx-auto bg-white">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-blue-600 flex-shrink-0 mt-2" />
                
                <div className="flex-1">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    {renderStars(currentTestimonial.rating)}
                    <Badge variant="outline" className="ml-2 border-slate-200 text-slate-700">
                      {currentTestimonial.package}
                    </Badge>
                    {currentTestimonial.verified && (
                      <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                        Verified
                      </Badge>
                    )}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg text-professional-muted mb-6 leading-relaxed font-[family-name:var(--font-dm-sans)]">
                    "{currentTestimonial.text}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={currentTestimonial.image} alt={currentTestimonial.name} loading="lazy" />
                      <AvatarFallback>{currentTestimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-slate-900">{currentTestimonial.name}</h4>
                      <p className="text-sm text-professional-muted">{currentTestimonial.role}</p>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{currentTestimonial.location}</span>
                        <Building className="w-3 h-3 ml-2" />
                        <span>{currentTestimonial.business}</span>
                      </div>
                    </div>
                    {currentTestimonial.video && (
                      <div className="ml-auto">
                        <Button variant="outline" size="sm" className="flex items-center gap-2 border-slate-200 text-slate-700 hover:bg-slate-50">
                          <Play className="w-4 h-4" />
                          Watch Video
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-accent" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
            <p className="text-sm text-professional-muted">Average Rating</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <p className="text-sm text-slate-600">Would Recommend</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">24hrs</div>
            <p className="text-sm text-slate-600">Avg Response Time</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <p className="text-sm text-slate-600">Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  )
}

