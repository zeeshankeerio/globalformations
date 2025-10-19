import { z } from "zod"

// Enhanced validation with proper sanitization for contact form
export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  message: string
}

export interface ValidationError {
  field: keyof ContactFormData
  message: string
}

// Input sanitization function
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .substring(0, 1000) // Limit length
}

// Enhanced validation schema with Zod
export const contactFormSchema = z.object({
  firstName: z.string()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'First name contains invalid characters')
    .transform(sanitizeInput),
  lastName: z.string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Last name contains invalid characters')
    .transform(sanitizeInput),
  email: z.string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters')
    .transform(sanitizeInput),
  phone: z.string()
    .refine((val) => val === '' || /^[\+]?[1-9][\d]{0,15}$/.test(val.replace(/[\s\-\(\)]/g, '')), {
      message: 'Please enter a valid phone number'
    })
    .transform(sanitizeInput),
  service: z.string()
    .min(1, 'Please select a service')
    .max(100, 'Service selection is invalid')
    .transform(sanitizeInput),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters')
    .transform(sanitizeInput)
})

// Legacy parse function for backward compatibility
export const legacyContactFormSchema = {
  parse: (data: ContactFormData): ContactFormData => {
    try {
      return contactFormSchema.parse(data)
    } catch (error) {
      if (error instanceof z.ZodError) {
        const zodError = new Error('Validation failed') as any
        zodError.name = 'ZodError'
        zodError.errors = error.errors.map(e => ({ 
          path: e.path, 
          message: e.message 
        }))
        throw zodError
      }
      throw error
    }
  }
}