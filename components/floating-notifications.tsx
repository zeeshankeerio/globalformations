"use client"

import { useState, useEffect } from "react"
import { CheckCircle, X } from "lucide-react"

const notifications = [
  { name: "Jennifer K.", location: "California", action: "completed LLC formation", time: "2 minutes ago" },
  { name: "Marcus T.", location: "Texas", action: "opened business bank account", time: "7 minutes ago" },
  { name: "Priya S.", location: "New York", action: "received EIN number", time: "11 minutes ago" },
  { name: "Carlos M.", location: "Florida", action: "set up Stripe payments", time: "16 minutes ago" },
  { name: "Rachel B.", location: "Wyoming", action: "got operating agreement", time: "23 minutes ago" },
  { name: "Ahmed H.", location: "Delaware", action: "started Amazon seller setup", time: "28 minutes ago" },
  { name: "Sophie L.", location: "Nevada", action: "activated PayPal business", time: "35 minutes ago" },
  { name: "Jason W.", location: "Colorado", action: "completed tax registration", time: "42 minutes ago" },
  { name: "Maria G.", location: "Arizona", action: "filed for registered agent", time: "48 minutes ago" },
  { name: "Kevin P.", location: "Washington", action: "launched online store", time: "54 minutes ago" },
]

export default function FloatingNotifications() {
  const [currentNotification, setCurrentNotification] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isDismissed || !isMounted) return

    const showNotification = () => {
      setIsVisible(true)
      setTimeout(() => setIsVisible(false), 5000)
    }

    const showNextNotification = () => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length)
      showNotification()
    }

    // Show first notification after 60 seconds (1 minute)
    const initialTimeout = setTimeout(showNotification, 60000)
    
    // Then show subsequent notifications every 60 seconds
    const interval = setInterval(showNextNotification, 60000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [isDismissed, isMounted])

  if (!isMounted || isDismissed || !isVisible) return null

  const notification = notifications[currentNotification]

  return (
    <div className="fixed bottom-24 left-6 z-[80] animate-in slide-in-from-left duration-500">
      <div className="bg-white border border-blue-100 rounded-xl shadow-2xl p-4 max-w-sm backdrop-blur-md bg-white/95 hover:shadow-3xl transition-shadow duration-200">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#0A2540] to-[#1E40AF] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900">
              <span className="font-semibold text-[#0A2540]">{notification?.name}</span> in {notification?.location}
            </p>
            <p className="text-sm text-slate-600">
              {notification?.action} • <span className="text-[#1E40AF] font-medium">{notification?.time}</span>
            </p>
          </div>
          <button
            onClick={() => setIsDismissed(true)}
            className="text-slate-400 hover:text-[#1E40AF] transition-colors rounded-full p-1 hover:bg-blue-50"
            aria-label="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}