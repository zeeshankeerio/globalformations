"use client"

import { useState, useEffect } from "react"
import { CheckCircle, X } from "lucide-react"

const notifications = [
  { name: "Sarah M.", location: "Delaware", action: "formed LLC", time: "2 minutes ago" },
  { name: "Mike R.", location: "Wyoming", action: "opened bank account", time: "5 minutes ago" },
  { name: "Lisa K.", location: "Nevada", action: "got EIN approved", time: "8 minutes ago" },
  { name: "David L.", location: "Florida", action: "started PayPal setup", time: "12 minutes ago" },
  { name: "Emma S.", location: "Texas", action: "completed formation", time: "15 minutes ago" },
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

    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length)
      showNotification()
    }, 10000)

    // Show first notification after 4 seconds
    const initialTimeout = setTimeout(showNotification, 4000)

    return () => {
      clearInterval(interval)
      clearTimeout(initialTimeout)
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