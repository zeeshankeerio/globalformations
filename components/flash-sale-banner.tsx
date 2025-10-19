"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Zap, Users, AlertTriangle, ArrowRight } from "lucide-react"

export default function FlashSaleBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0,
  })

  const [spotsRemaining] = useState(15)
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

  return (
    <Card className="relative overflow-hidden bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 border-2 border-red-200 shadow-2xl hover:shadow-red-200/25 transition-all duration-300">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(239,68,68,0.05)_50%,transparent_70%)] animate-pulse"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/10 rounded-full blur-xl animate-bounce delay-1000"></div>

      <CardContent className="relative p-8">
        {/* Header with flash sale badge */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-red-500 animate-pulse" />
            <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-lg px-6 py-3 shadow-lg animate-pulse">
              ⚡ FLASH SALE - {timeLeft.hours}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)} LEFT
            </Badge>
          </div>
        </div>

        {/* Main content */}
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-red-700 font-[family-name:var(--font-space-grotesk)]">
              Only {spotsRemaining} Spots Left This Month!
            </h3>
            <p className="text-lg text-gray-700 font-[family-name:var(--font-dm-sans)] max-w-2xl mx-auto">
              Due to high demand and personalized setup, we only accept {totalSpots} new clients per month.
              <span className="font-bold text-red-600"> {spotsTaken} spots already taken!</span>
            </p>
          </div>

          {/* Progress bar */}
          <div className="bg-white rounded-lg p-6 border border-red-200 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-red-500" />
                <span className="font-semibold text-gray-700">Spots Remaining:</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-red-500">{spotsRemaining}</span>
                <span className="text-gray-500">/{totalSpots}</span>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-red-500 to-orange-500 h-4 rounded-full transition-all duration-1000 ease-out relative"
                style={{ width: `${progressPercentage}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
            
            <div className="flex justify-between text-sm text-gray-600">
              <span>Available</span>
              <span className="font-semibold">{Math.round(progressPercentage)}% Full</span>
            </div>
          </div>

          {/* Urgency indicators */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full">
              <Clock className="w-4 h-4" />
              <span className="font-semibold">Limited Time Offer</span>
            </div>
            <div className="flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full">
              <AlertTriangle className="w-4 h-4" />
              <span className="font-semibold">High Demand</span>
            </div>
            <div className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">
              <Zap className="w-4 h-4" />
              <span className="font-semibold">Same Day Processing</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white text-xl px-12 py-6 h-auto rounded-2xl shadow-2xl hover:shadow-red-500/25 hover:scale-105 transition-all duration-300 font-bold group"
            >
              <Zap className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              Secure My Spot Now - Limited Time
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>SSL Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>No Hidden Fees</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
