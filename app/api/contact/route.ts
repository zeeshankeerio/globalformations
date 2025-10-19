import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema, type ContactFormData } from '@/lib/validation'
import { rateLimit } from '@/lib/rate-limit'

interface EmailServiceResponse {
  success: boolean
  service: string
}

type EmailService = () => Promise<EmailServiceResponse>

// CSRF token validation
function validateCSRFToken(request: NextRequest): boolean {
  const origin = request.headers.get('origin')
  const referer = request.headers.get('referer')
  const allowedOrigins = [
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    'https://ll.mindscapeanalytics.com'
  ]
  
  return origin ? allowedOrigins.includes(origin) : 
         referer ? allowedOrigins.some(allowed => referer.startsWith(allowed)) : false
}

export async function POST(request: NextRequest) {
  try {
    // CSRF Protection
    if (!validateCSRFToken(request)) {
      return NextResponse.json(
        { success: false, error: 'Invalid request origin' },
        { status: 403 }
      )
    }

    // Rate limiting
    const rateLimitResult = await rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 5, // 5 requests per 15 minutes
      message: 'Too many requests. Please try again later.'
    })(request)

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { success: false, error: rateLimitResult.message },
        { status: 429 }
      )
    }

    const body = await request.json()
    
    // Validate the form data with enhanced sanitization
    const validatedData = contactFormSchema.parse(body)
    
    // Send email using multiple reliable services
    const emailResponse = await sendEmailWithFallbacks(validatedData)

    if (!emailResponse.success) {
      throw new Error('All email services failed')
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Contact form submitted successfully',
      service: emailResponse.service
    })

  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { success: false, error: 'Invalid form data', details: error },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    )
  }
}

async function sendEmailWithFallbacks(data: ContactFormData): Promise<EmailServiceResponse> {
  const services: EmailService[] = [
    () => sendViaFormspree(data),
    () => sendViaEmailJS(data),
    () => sendViaNetlify(data)
  ]

  for (let i = 0; i < services.length; i++) {
    const service = services[i]
    if (!service) continue
    
    try {
      const result = await service()
      if (result.success) {
        return { success: true, service: result.service }
      }
    } catch (error) {
      console.error(`Email service ${i + 1} failed:`, error)
      continue
    }
  }

  return { success: false, service: 'All services failed' }
}

async function sendViaFormspree(data: ContactFormData): Promise<EmailServiceResponse> {
  try {
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT
    const recipientEmail = process.env.CONTACT_EMAIL || 'zeeshan.keerio@mindscapeanalytics.com'
    
    if (!formspreeEndpoint) {
      console.warn('FORMSPREE_ENDPOINT not configured')
      return { success: false, service: 'Formspree' }
    }

    const message = `
🔔 NEW CONTACT FORM SUBMISSION

👤 Name: ${data.firstName} ${data.lastName}
📧 Email: ${data.email}
📱 Phone: ${data.phone || 'Not provided'}
🎯 Service: ${data.service}

💬 Message:
${data.message}

---
📅 Submitted: ${new Date().toLocaleString()}
🌐 Source: ${process.env.NEXT_PUBLIC_SITE_URL || 'll.mindscapeanalytics.com'}
🏢 Mindscape Global Formations
    `

    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: message,
        _replyto: data.email,
        _subject: `New Contact: ${data.service} - ${data.firstName} ${data.lastName}`,
        _to: recipientEmail
      })
    })

    return { success: response.ok, service: 'Formspree' }
  } catch (error) {
    console.error('Formspree failed:', error)
    return { success: false, service: 'Formspree' }
  }
}

async function sendViaEmailJS(data: ContactFormData): Promise<EmailServiceResponse> {
  try {
    // Using EmailJS public API (no server-side API key needed)
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'default_service',
        template_id: 'template_contact',
        user_id: 'public_key_here',
        template_params: {
          to_email: 'zeeshan.keerio@mindscapeanalytics.com',
          from_name: `${data.firstName} ${data.lastName}`,
          from_email: data.email,
          phone: data.phone || 'Not provided',
          service: data.service,
          message: data.message,
          subject: `New Contact: ${data.service}`
        }
      })
    })

    return { success: response.ok, service: 'EmailJS' }
  } catch (error) {
    console.error('EmailJS failed:', error)
    return { success: false, service: 'EmailJS' }
  }
}

async function sendViaNetlify(data: ContactFormData): Promise<EmailServiceResponse> {
  try {
    // Using Netlify Forms
    const formData = new FormData()
    formData.append('form-name', 'contact')
    formData.append('name', `${data.firstName} ${data.lastName}`)
    formData.append('email', data.email)
    formData.append('phone', data.phone || '')
    formData.append('service', data.service)
    formData.append('message', data.message)

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString()
    })

    return { success: response.ok, service: 'Netlify' }
  } catch (error) {
    console.error('Netlify failed:', error)
    return { success: false, service: 'Netlify' }
  }
}