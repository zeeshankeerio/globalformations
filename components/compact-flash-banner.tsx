"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Zap, Users } from "lucide-react"

interface CompactFlashBannerProps {
  className?: string
  showProgress?: boolean
}

export default function CompactFlashBanner({ 
  className = "", 
  showProgress = true 
}: CompactFlashBannerProps) {
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
    <div className={`bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 border-2 border-red-200 rounded-xl p-4 shadow-lg hover:shadow-red-200/25 transition-all duration-300 ${className}`}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left side - Flash sale info */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-red-500 animate-pulse" />
            <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm px-3 py-1">
              ⚡ FLASH SALE
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-red-600">
            <Clock className="w-4 h-4" />
            <span className="font-semibold text-sm">
              {timeLeft.hours}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)} LEFT
            </span>
          </div>
        </div>

        {/* Center - Spots remaining */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-red-500" />
            <span className="text-sm font-semibold text-gray-700">
              Only <span className="text-red-500 font-bold">{spotsRemaining}</span> spots left
            </span>
          </div>
          {showProgress && (
            <div className="w-20 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          )}
        </div>

        {/* Right side - CTA */}
        <Button 
          size="sm" 
          className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-6 py-2 h-auto rounded-lg shadow-lg hover:shadow-red-500/25 hover:scale-105 transition-all duration-300 font-semibold"
        >
          <Zap className="w-4 h-4 mr-2" />
          Secure Spot
        </Button>
      </div>
    </div>
  )
}
