import { contactFormSchema, sanitizeInput } from '@/lib/validation'

describe('Input Sanitization', () => {
  it('removes HTML tags', () => {
    expect(sanitizeInput('<script>alert("xss")</script>')).toBe('alert("xss")')
  })

  it('removes javascript: protocol', () => {
    expect(sanitizeInput('javascript:alert("xss")')).toBe('alert("xss")')
  })

  it('removes event handlers', () => {
    expect(sanitizeInput('onclick="alert(1)"')).toBe('')
  })

  it('limits input length', () => {
    const longInput = 'a'.repeat(2000)
    expect(sanitizeInput(longInput)).toHaveLength(1000)
  })

  it('trims whitespace', () => {
    expect(sanitizeInput('  test  ')).toBe('test')
  })
})

describe('Contact Form Validation', () => {
  const validData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    service: 'LLC Formation',
    message: 'I would like to form an LLC'
  }

  it('validates correct data', () => {
    expect(() => contactFormSchema.parse(validData)).not.toThrow()
  })

  it('rejects empty first name', () => {
    expect(() => contactFormSchema.parse({ ...validData, firstName: '' }))
      .toThrow('First name is required')
  })

  it('rejects invalid email', () => {
    expect(() => contactFormSchema.parse({ ...validData, email: 'invalid-email' }))
      .toThrow('Please enter a valid email address')
  })

  it('rejects invalid phone number', () => {
    expect(() => contactFormSchema.parse({ ...validData, phone: 'invalid-phone' }))
      .toThrow('Please enter a valid phone number')
  })

  it('rejects short message', () => {
    expect(() => contactFormSchema.parse({ ...validData, message: 'Short' }))
      .toThrow('Message must be at least 10 characters')
  })

  it('rejects message with invalid characters', () => {
    expect(() => contactFormSchema.parse({ ...validData, firstName: 'John<script>' }))
      .toThrow('First name contains invalid characters')
  })

  it('accepts optional phone', () => {
    const dataWithoutPhone = { ...validData }
    delete dataWithoutPhone.phone
    
    expect(() => contactFormSchema.parse(dataWithoutPhone)).not.toThrow()
  })

  it('transforms and sanitizes input', () => {
    const result = contactFormSchema.parse({
      ...validData,
      firstName: '  John<script>  ',
      message: '  Valid message with extra spaces  '
    })
    
    expect(result.firstName).toBe('John')
    expect(result.message).toBe('Valid message with extra spaces')
  })
})


