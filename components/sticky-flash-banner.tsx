"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Zap, Users, ArrowRight, X } from "lucide-react"

export default function StickyFlashBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0,
  })

    const [spotsRemaining] = useState(15)
  const [isVisible, setIsVisible] = useState(true)
  const totalSpots = 50
  const spotsTaken = totalSpots - spotsRemaining
  const progressPercentage = (spotsTaken / totalSpots) * 100

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (value: number) => value.toString().padStart(2, "0")

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full h-16 bg-gradient-to-r from-white via-slate-50 to-blue-50 text-slate-900 shadow-lg border-b border-slate-200">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.08),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.06),transparent_70%)]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-2 left-4 w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-2 right-8 w-1 h-1 bg-emerald-400/30 rounded-full animate-bounce delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Left side - Flash sale info */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-600 animate-pulse" />
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 text-sm px-3 py-1 font-semibold">
              ⚡ FLASH SALE
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <Clock className="w-4 h-4" />
            <span className="font-medium text-sm">
              {timeLeft.hours}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)} LEFT
            </span>
          </div>
        </div>

        {/* Center - Spots remaining */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-slate-700">
              Only <span className="text-emerald-700 font-bold">{spotsRemaining}</span> spots left
            </span>
          </div>
          <div className="w-24 bg-slate-200 rounded-full h-2">
            <div 
              className="bg-emerald-600 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Right side - CTA and close */}
        <div className="flex items-center gap-3">
          <Button 
            size="sm" 
            className="bg-blue-600 text-white hover:bg-blue-700 text-sm px-6 py-2 h-8 rounded-lg shadow-lg hover:shadow-blue-600/25 hover:scale-105 transition-all duration-300 font-semibold"
          >
            <Zap className="w-4 h-4 mr-2" />
            Secure Spot
            <ArrowRight className="w-3 h-3 ml-2" />
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-slate-500 hover:text-slate-700 transition-colors p-1"
            aria-label="Close banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
