"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

// Google Analytics 4 Configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Common conversion events
export const trackConversion = (conversionType: string, value?: number) => {
  event({
    action: 'conversion',
    category: 'engagement',
    label: conversionType,
    ...(value !== undefined && { value })
  })
}

// Track form submissions
export const trackFormSubmission = (formName: string, context?: string) => {
  event({
    action: 'form_submit',
    category: 'engagement',
    label: `${formName}_${context || 'unknown'}`
  })
}

// Track button clicks
export const trackButtonClick = (buttonName: string, context?: string) => {
  event({
    action: 'click',
    category: 'engagement',
    label: `${buttonName}_${context || 'unknown'}`
  })
}

// Track time on page
export const trackTimeOnPage = (pageName: string, timeSpent: number) => {
  event({
    action: 'time_on_page',
    category: 'engagement',
    label: pageName,
    value: Math.round(timeSpent)
  })
}

// Track scroll depth
export const trackScrollDepth = (pageName: string, depth: number) => {
  event({
    action: 'scroll_depth',
    category: 'engagement',
    label: pageName,
    value: depth
  })
}

// Track exit intent
export const trackExitIntent = (pageName: string) => {
  event({
    action: 'exit_intent',
    category: 'engagement',
    label: pageName
  })
}

// Track package selection
export const trackPackageSelection = (packageName: string, price: number) => {
  event({
    action: 'package_selection',
    category: 'conversion',
    label: packageName,
    value: price
  })
}

// Track state selection
export const trackStateSelection = (stateName: string, filingFee: number) => {
  event({
    action: 'state_selection',
    category: 'conversion',
    label: stateName,
    value: filingFee
  })
}

// Track consultation request
export const trackConsultationRequest = (source: string) => {
  event({
    action: 'consultation_request',
    category: 'conversion',
    label: source
  })
}

// Track resource download
export const trackResourceDownload = (resourceName: string, value?: number) => {
  event({
    action: 'resource_download',
    category: 'engagement',
    label: resourceName,
    ...(value !== undefined && { value })
  })
}

// Track FAQ interaction
export const trackFAQInteraction = (questionId: string, action: 'view' | 'expand' | 'contact') => {
  event({
    action: `faq_${action}`,
    category: 'engagement',
    label: questionId
  })
}

// Track cost calculator usage
export const trackCostCalculatorUsage = (totalCost: number, packageType: string) => {
  event({
    action: 'cost_calculator_usage',
    category: 'engagement',
    label: packageType,
    value: totalCost
  })
}

// Track live chat interaction
export const trackLiveChatInteraction = (action: 'open' | 'close' | 'message_sent' | 'quick_reply') => {
  event({
    action: `live_chat_${action}`,
    category: 'engagement',
    label: 'live_chat'
  })
}

// Track testimonial interaction
export const trackTestimonialInteraction = (action: 'view' | 'next' | 'previous' | 'video_play') => {
  event({
    action: `testimonial_${action}`,
    category: 'engagement',
    label: 'testimonials'
  })
}

// Track trust signal interaction
export const trackTrustSignalInteraction = (signalType: string) => {
  event({
    action: 'trust_signal_view',
    category: 'engagement',
    label: signalType
  })
}

// Track security compliance view
export const trackSecurityComplianceView = (section: string) => {
  event({
    action: 'security_compliance_view',
    category: 'engagement',
    label: section
  })
}

// Track process timeline interaction
export const trackProcessTimelineInteraction = (step: number, action: 'view' | 'expand') => {
  event({
    action: `process_timeline_${action}`,
    category: 'engagement',
    label: `step_${step}`
  })
}

// Enhanced ecommerce tracking for package purchases
export const trackPurchase = (packageName: string, price: number, _state?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Generate a stable transaction ID that doesn't change on hydration
    const transactionId = `llc_${packageName}_${Math.floor(Math.random() * 1000000)}`
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: price,
      currency: 'USD',
      items: [{
        item_id: packageName,
        item_name: `${packageName} LLC Formation`,
        category: 'LLC Formation',
        quantity: 1,
        price: price
      }]
    })
  }
}

// Track lead generation
export const trackLeadGeneration = (source: string, leadType: string) => {
  event({
    action: 'lead_generation',
    category: 'conversion',
    label: `${source}_${leadType}`
  })
}

// Track user engagement score
export const trackEngagementScore = (score: number, pageName: string) => {
  event({
    action: 'engagement_score',
    category: 'engagement',
    label: pageName,
    value: score
  })
}

// Auto-tracking component for page views
export default function AnalyticsTracking() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      pageview(pathname)
    }
  }, [pathname, searchParams])

  return null
}

// Custom hook for tracking user interactions
export const useAnalytics = () => {
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    event({ 
      action, 
      category, 
      ...(label !== undefined && { label }),
      ...(value !== undefined && { value })
    })
  }

  const trackConversion = (conversionType: string, value?: number) => {
    event({
      action: 'conversion',
      category: 'engagement',
      label: conversionType,
      ...(value !== undefined && { value })
    })
  }

  const trackPageView = (pageName: string) => {
    event({
      action: 'page_view',
      category: 'navigation',
      label: pageName
    })
  }

  return {
    trackEvent,
    trackConversion,
    trackPageView,
    trackFormSubmission,
    trackButtonClick,
    trackPackageSelection,
    trackStateSelection,
    trackConsultationRequest,
    trackResourceDownload,
    trackFAQInteraction,
    trackCostCalculatorUsage,
    trackLiveChatInteraction,
    trackTestimonialInteraction,
    trackTrustSignalInteraction,
    trackSecurityComplianceView,
    trackProcessTimelineInteraction,
    trackPurchase,
    trackLeadGeneration,
    trackEngagementScore
  }
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void
  }
}
