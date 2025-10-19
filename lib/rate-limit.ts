import { NextRequest } from "next/server"

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

interface RateLimitOptions {
  windowMs: number // Time window in milliseconds
  max: number // Maximum number of requests
  message?: string
}

export function rateLimit(options: RateLimitOptions) {
  const { windowMs, max, message = "Too many requests" } = options

  return (request: NextRequest) => {
  // Get IP from x-forwarded-for or fallback to unknown
    const forwarded = request.headers.get("x-forwarded-for");
    const ipString = typeof forwarded === "string" ? forwarded : "";
  const ip = (ipString.split(",")[0] ?? "").trim() || "unknown";
    const now = Date.now();

    // Clean up old entries
    for (const [key, value] of rateLimitMap.entries()) {
      if (value.resetTime < now) {
        rateLimitMap.delete(key)
      }
    }

    const key = `${ip}-${Math.floor(now / windowMs)}`
    const current = rateLimitMap.get(key)

    if (!current) {
      rateLimitMap.set(key, { count: 1, resetTime: now + windowMs })
      return { success: true }
    }

    if (current.count >= max) {
      return {
        success: false,
        message,
        resetTime: current.resetTime,
      }
    }

    current.count++
    return { success: true }
  }
}

// Predefined rate limiters
export const authRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per 15 minutes
  message: "Too many authentication attempts. Please try again later.",
})

export const contactRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // 3 contact form submissions per hour
  message: "Too many contact form submissions. Please try again later.",
})

export const generalRateLimit = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 60, // 60 requests per minute
  message: "Too many requests. Please slow down.",
})
