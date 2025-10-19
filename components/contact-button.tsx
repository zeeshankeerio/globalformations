"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail, Users } from "lucide-react"
import { handleContactClick, trackContactInteraction, type WHATSAPP_MESSAGES, CONTACT_CONFIG } from "@/lib/contact"

interface ContactButtonProps {
  variant?: 'whatsapp' | 'phone' | 'email' | 'whatsappChannel'
  message?: keyof typeof WHATSAPP_MESSAGES
  context?: string
  children?: React.ReactNode
  className?: string
  size?: 'sm' | 'default' | 'lg'
  showIcon?: boolean
  showNumber?: boolean // Only show phone number on contact page
}

export default function ContactButton({
  variant = 'whatsapp',
  message = 'general',
  context = 'button',
  children,
  className = '',
  size = 'default',
  showIcon = true,
  showNumber = false
}: ContactButtonProps) {
  const handleClick = () => {
    trackContactInteraction(variant, context)
    handleContactClick(variant, message)
  }

  const getIcon = () => {
    if (!showIcon) return null
    
    switch (variant) {
      case 'whatsapp':
        return <MessageCircle className="w-4 h-4 mr-2" />
      case 'whatsappChannel':
        return <Users className="w-4 h-4 mr-2" />
      case 'phone':
        return <Phone className="w-4 h-4 mr-2" />
      case 'email':
        return <Mail className="w-4 h-4 mr-2" />
      default:
        return <MessageCircle className="w-4 h-4 mr-2" />
    }
  }

  const getDefaultText = () => {
    switch (variant) {
      case 'whatsapp':
        return 'WhatsApp Us'
      case 'whatsappChannel':
        return 'Join Channel'
      case 'phone':
        return showNumber ? `Call ${CONTACT_CONFIG.phone.display}` : 'Call Us'
      case 'email':
        return 'Email Us'
      default:
        return 'Contact Us'
    }
  }

  return (
    <Button
      onClick={handleClick}
      className={className}
      size={size}
    >
      {getIcon()}
      {children || getDefaultText()}
    </Button>
  )
}
