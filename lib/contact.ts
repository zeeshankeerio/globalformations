// Contact configuration and utilities
export const CONTACT_CONFIG = {
  whatsapp: {
    url: "https://wa.link/6f9du7",
    display: "WhatsApp",
    label: "WhatsApp"
  },
  whatsappChannel: {
    url: "https://whatsapp.com/channel/0029Vb77sub5fM5b8NJKup12",
    display: "WhatsApp Channel",
    label: "WhatsApp Channel"
  },
  phone: {
    url: "tel:+13072106155",
    display: "+1-307-210-6155",
    label: "Phone"
  },
  email: {
    url: "mailto:llc@mindscapeanalytics.com",
    display: "llc@mindscapeanalytics.com",
    label: "Email"
  },
  address: {
    display: "30 N Gould St Ste N, Sheridan, WY 82801",
    label: "Address"
  }
}

// Pre-written WhatsApp messages for different contexts
export const WHATSAPP_MESSAGES = {
  consultation: "Hi! I'm interested in a free consultation for LLC formation. Can you help me get started?",
  pricing: "Hi! I'd like to learn more about your LLC formation packages and pricing. What options do you have?",
  services: "Hi! I'm looking for LLC formation services. Can you tell me more about what you offer?",
  general: "Hi! I'm interested in your LLC formation services. How can you help me?",
  urgent: "Hi! I need urgent help with LLC formation. Can you assist me today?",
  existing: "Hi! I'm an existing client and need assistance with my LLC formation process.",
  "amazon-course": "Hi! I'm interested in learning more about your Amazon seller LLC setup course.",
  "ebay-course": "Hi! I'd like information about your eBay business setup course.",
  "freelancing-course": "Hi! I'm interested in your freelancing course for LLC owners.",
  faq: "Hi! I have a question that's not answered in your FAQ section."
}

// Generate WhatsApp URL with pre-filled message
export function getWhatsAppUrl(message: keyof typeof WHATSAPP_MESSAGES = 'general'): string {
  const baseUrl = CONTACT_CONFIG.whatsapp.url
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGES[message])
  return `${baseUrl}?text=${encodedMessage}`
}

// Contact button click handler
export function handleContactClick(type: 'whatsapp' | 'phone' | 'email' | 'whatsappChannel', message?: keyof typeof WHATSAPP_MESSAGES) {
  let url: string
  
  switch (type) {
    case 'whatsapp':
      url = message ? getWhatsAppUrl(message) : CONTACT_CONFIG.whatsapp.url
      break
    case 'whatsappChannel':
      url = CONTACT_CONFIG.whatsappChannel.url
      break
    case 'phone':
      url = CONTACT_CONFIG.phone.url
      break
    case 'email':
      url = CONTACT_CONFIG.email.url
      break
    default:
      url = CONTACT_CONFIG.whatsapp.url
  }
  
  // Open in new tab for better UX
  window.open(url, '_blank', 'noopener,noreferrer')
}

// Analytics tracking for contact interactions
export function trackContactInteraction(type: string, context: string) {
  // This would integrate with your analytics service
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact_interaction', {
      event_category: 'engagement',
      event_label: `${type}_${context}`,
      value: 1
    })
  }
}
