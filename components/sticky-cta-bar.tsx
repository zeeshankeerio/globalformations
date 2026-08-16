"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import ContactButton from "@/components/contact-button"
import { ArrowRight, X, Code2, Building2 } from "lucide-react"
import Link from "next/link"

export default function StickyCTABar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [currentService, setCurrentService] = useState<'llc' | 'software'>('llc')

  // Service messages
  const services = {
    llc: {
      icon: Building2,
      title: "Ready to start your LLC?",
      subtitle: "From $180 + state fee • Same-day processing",
      buttonText: "Start Now",
      buttonLink: "/pricing",
      ctaButton: "Free Call",
      gradient: "from-[#0A2540] via-[#1E40AF] to-[#1E3A8A]"
    },
    software: {
      icon: Code2,
      title: "Need custom software development?",
      subtitle: "AI Solutions • Web Apps • Enterprise Software",
      buttonText: "View Services",
      buttonLink: "https://mindscapeanalytics.com",
      ctaButton: "Contact Us",
      gradient: "from-purple-900 via-purple-700 to-blue-800"
    }
  }

  const currentServiceData = services[currentService]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Rotate services every 5 seconds when visible
  useEffect(() => {
    if (!isMounted || !isVisible) return

    const interval = setInterval(() => {
      setCurrentService(prev => prev === 'llc' ? 'software' : 'llc')
    }, 5000) // 5 seconds

    return () => clearInterval(interval)
  }, [isMounted, isVisible])

  // Show banner for 5 seconds every 1 minute
  useEffect(() => {
    if (!isMounted || isDismissed) return

    let cycleInterval: NodeJS.Timeout

    // Show immediately on mount after scrolling
    const showCycle = () => {
      setIsVisible(true)
      
      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false)
      }, 5000)
    }

    // Check scroll position first
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      // Only show if scrolled past 50% of viewport
      if (scrollPosition > windowHeight * 0.5) {
        showCycle()
        // Set up interval to repeat every 1 minute
        cycleInterval = setInterval(showCycle, 60000) // 60 seconds
        
        // Remove scroll listener after first trigger
        window.removeEventListener("scroll", handleScroll)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (cycleInterval) clearInterval(cycleInterval)
    }
  }, [isMounted, isDismissed])

  if (!isMounted || !isVisible) return null

  const ServiceIcon = currentServiceData.icon

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-[90] bg-gradient-to-r ${currentServiceData.gradient} text-white shadow-2xl border-t border-blue-500/20 backdrop-blur-md transition-all duration-700 safe-area-padding`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 transition-all duration-500 min-w-0 flex-1">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <ServiceIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-semibold text-xs sm:text-sm truncate">{currentServiceData.title}</div>
              <div className="text-xs text-blue-100 hidden sm:block">{currentServiceData.subtitle}</div>
              <div className="text-xs text-blue-100 sm:hidden truncate">
                {currentService === 'llc' ? 'From $180' : 'Custom Solutions'}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            {currentService === 'llc' ? (
              <Link href={currentServiceData.buttonLink}>
                <Button 
                  size="sm" 
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group text-xs sm:text-sm px-2 sm:px-3 h-8 sm:h-9"
                >
                  <span className="hidden sm:inline">{currentServiceData.buttonText}</span>
                  <span className="sm:hidden">Start</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            ) : (
              <a href={currentServiceData.buttonLink} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="sm" 
                  className="bg-white text-purple-600 hover:bg-purple-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group text-xs sm:text-sm px-2 sm:px-3 h-8 sm:h-9"
                >
                  <span className="hidden sm:inline">{currentServiceData.buttonText}</span>
                  <span className="sm:hidden">Services</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            )}
            
            <ContactButton
              variant="whatsapp"
              message={currentService === 'llc' ? "consultation" : "general"}
              context="sticky-bar"
              size="sm"
              className="border border-white/30 text-white hover:bg-white/10 bg-transparent text-xs sm:text-sm px-2 sm:px-3 h-8 sm:h-9"
            >
              <span className="hidden sm:inline">{currentServiceData.ctaButton}</span>
              <span className="sm:hidden">Call</span>
            </ContactButton>
            
            <button
              onClick={() => setIsDismissed(true)}
              className="text-white/70 hover:text-white transition-colors p-1 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto flex items-center justify-center"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}