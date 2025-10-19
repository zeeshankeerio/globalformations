"use client"

import { useState } from "react"
import { QrCode, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONTACT_CONFIG } from "@/lib/contact"

interface WhatsAppQRProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function WhatsAppQR({ className = "", size = "md" }: WhatsAppQRProps) {
  const [copied, setCopied] = useState(false)
  const [showQR, setShowQR] = useState(false)

  const qrSizes = {
    sm: "w-32 h-32",
    md: "w-48 h-48", 
    lg: "w-64 h-64"
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_CONFIG.whatsappChannel.url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  return (
    <div className={`flex flex-col items-center space-y-4 ${className}`}>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Join Our WhatsApp Channel</h3>
        <p className="text-sm text-gray-600 mb-4">
          Get updates, tips, and exclusive offers for LLC formation
        </p>
      </div>

      {showQR ? (
        <div className="flex flex-col items-center space-y-4">
          {/* QR Code Placeholder - In production, you'd use a QR code library */}
          <div className={`${qrSizes[size]} bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center`}>
            <div className="text-center p-4">
              <QrCode className="w-16 h-16 text-gray-400 mx-auto mb-2" />
              <p className="text-xs text-gray-500">QR Code</p>
              <p className="text-xs text-gray-400 mt-1">Scan with WhatsApp</p>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyLink}
              className="flex items-center"
            >
              {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
              {copied ? "Copied!" : "Copy Link"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowQR(false)}
            >
              Hide QR
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-3">
          <Button
            onClick={() => setShowQR(true)}
            className="flex items-center bg-blue-700 hover:bg-blue-800 text-white"
          >
            <QrCode className="w-4 h-4 mr-2" />
            Show QR Code
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopyLink}
            className="flex items-center"
          >
            {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
            {copied ? "Copied!" : "Copy Channel Link"}
          </Button>
        </div>
      )}

      <div className="text-center">
        <p className="text-xs text-gray-500">
          Channel: Mindscape Global Formations
        </p>
      </div>
    </div>
  )
}
