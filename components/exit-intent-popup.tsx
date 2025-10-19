"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Clock, Gift, ArrowRight, Users } from "lucide-react"
import ContactButton from "@/components/contact-button"

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if popup has been shown in this session
    const shown = sessionStorage.getItem('exit-intent-shown')
    if (shown) {
      setHasShown(true)
      return
    }

    // Track mouse movement for exit intent
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true)
        setHasShown(true)
        sessionStorage.setItem('exit-intent-shown', 'true')
        
        // Auto-close after 4 seconds
        setTimeout(() => {
          setIsOpen(false)
        }, 4000)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShown])


  const handleClaimOffer = () => {
    setIsOpen(false)
    // Track conversion
    if (typeof window !== 'undefined') {
      window.gtag?.('event', 'exit_intent_offer_claimed', {
        event_category: 'engagement',
        event_label: 'free_consultation'
      })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md border-0 bg-gradient-to-br from-white via-slate-50/80 to-blue-50/60 shadow-2xl backdrop-blur-lg overflow-hidden p-0">
        <div className="relative">
          {/* USA Flag Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 via-white to-blue-600 shadow-sm"></div>
          
          {/* Glossy overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/20 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/30 to-transparent pointer-events-none"></div>

          {/* Content */}
          <div className="p-6 relative z-10">
            <DialogHeader className="text-center mb-4">
              <div className="mx-auto w-14 h-14 bg-gradient-to-br from-black to-blue-700 rounded-xl flex items-center justify-center mb-3 shadow-xl border-2 border-white/60 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-blue-600/30 animate-pulse"></div>
                <Gift className="w-7 h-7 text-white relative z-10 drop-shadow-lg" />
                <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gradient-to-r from-red-500 via-white to-blue-600 rounded-full border border-white shadow-md"></div>
              </div>
              
              <DialogTitle className="text-xl font-bold text-black mb-2 font-heading bg-gradient-to-r from-black to-blue-800 bg-clip-text">
                🇺🇸 Expert LLC Consultation
              </DialogTitle>
              
              <DialogDescription className="text-slate-700 text-sm font-body leading-snug">
                Get a <strong className="text-blue-700 font-bold">FREE consultation</strong> worth <span className="text-black font-bold">$200</span> to ensure your LLC formation is done right.
              </DialogDescription>
            </DialogHeader>

            {/* Compact Benefits */}
            <div className="bg-gradient-to-br from-white/80 via-blue-50/60 to-slate-50/60 rounded-xl p-4 border border-white/70 shadow-lg backdrop-blur-sm relative overflow-hidden mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"></div>
              
              <div className="flex items-center gap-2 mb-3 relative z-10">
                <div className="w-8 h-8 bg-gradient-to-br from-black to-blue-700 rounded-lg flex items-center justify-center shadow-md">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-black font-heading text-sm">What You'll Get</span>
              </div>
              
              <ul className="space-y-2 text-xs relative z-10">
                <li className="flex items-center gap-2 text-slate-800 font-medium">
                  <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>30-minute expert business consultation</span>
                </li>
                <li className="flex items-center gap-2 text-slate-800 font-medium">
                  <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Personalized LLC formation strategy</span>
                </li>
                <li className="flex items-center gap-2 text-slate-800 font-medium">
                  <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Best state selection & banking guidance</span>
                </li>
              </ul>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center justify-center gap-2 text-xs bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-2 border border-blue-200/60 shadow-md backdrop-blur-sm mb-4">
              <div className="w-5 h-5 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-sm">
                <Users className="w-3 h-3 text-white" />
              </div>
              <span className="text-slate-800 font-semibold">Trusted by 10,000+ entrepreneurs</span>
            </div>

            {/* CTA Buttons - Compact */}
            <div className="space-y-2">
              <Button
                onClick={handleClaimOffer}
                className="w-full bg-gradient-to-r from-black via-slate-800 to-blue-700 text-white hover:from-slate-800 hover:to-blue-600 text-sm py-3 font-bold shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10">🚀 Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2 relative z-10" />
              </Button>
              
              <div onClick={handleClaimOffer}>
                <ContactButton
                  variant="whatsapp"
                  message="consultation"
                  context="exit-intent"
                  className="w-full border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white text-sm py-3 font-bold bg-white/90 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-[1.02]"
                >
                  💬 Chat on WhatsApp
                </ContactButton>
              </div>
            </div>

            {/* Trust Indicators - Compact */}
            <div className="mt-4 pt-3 border-t border-slate-200/60">
              <div className="flex items-center justify-center gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="font-medium">No obligation</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="font-medium">100% free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

