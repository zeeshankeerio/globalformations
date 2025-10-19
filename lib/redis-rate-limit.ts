import { NextRequest } from "next/server"

interface RateLimitOptions {
  windowMs: number // Time window in milliseconds
  max: number // Maximum number of requests
  message?: string
  keyGenerator?: (request: NextRequest) => string
}

interface RateLimitResult {
  success: boolean
  message?: string
  resetTime?: number
  remaining?: number
}

// Redis-based rate limiting (for production)
export class RedisRateLimit {
  private redis: any
  private isConnected: boolean = false

  constructor() {
    // Initialize Redis connection only if REDIS_URL is available
    if (process.env.REDIS_URL) {
      this.initializeRedis()
    }
  }

  private async initializeRedis() {
    try {
      // Dynamic import to avoid bundling Redis in client
      const { createClient } = await import('redis')
      if (!process.env.REDIS_URL) {
        throw new Error('REDIS_URL environment variable is not set')
      }
      this.redis = createClient({ url: process.env.REDIS_URL })
      await this.redis.connect()
      this.isConnected = true
    } catch (error) {
      console.warn('Redis connection failed, falling back to in-memory rate limiting:', error)
      this.isConnected = false
    }
  }

  async checkLimit(request: NextRequest, options: RateLimitOptions): Promise<RateLimitResult> {
    const key = options.keyGenerator 
      ? options.keyGenerator(request)
      : this.getDefaultKey(request)
    
  const windowMs = options.windowMs
  const max = options.max
  const now = Date.now()

    if (this.isConnected && this.redis) {
      return this.checkRedisLimit(key, windowMs, max, now)
    } else {
      return this.checkMemoryLimit(key, windowMs, max, now)
    }
  }

  private async checkRedisLimit(key: string, windowMs: number, max: number, now: number): Promise<RateLimitResult> {
    try {
      const pipeline = this.redis.multi()
      
      // Remove expired entries
      pipeline.zRemRangeByScore(key, 0, now - windowMs)
      
      // Count current requests
      pipeline.zCard(key)
      
      // Add current request
      pipeline.zAdd(key, { score: now, value: `${now}-${Math.random()}` })
      
      // Set expiration
      pipeline.expire(key, Math.ceil(windowMs / 1000))
      
      const results = await pipeline.exec()
      const currentCount = results[1] as number
      
      if (currentCount >= max) {
        return {
          success: false,
          message: 'Too many requests. Please try again later.',
          resetTime: now + windowMs,
          remaining: 0
        }
      }
      
      return {
        success: true,
        remaining: max - currentCount - 1
      }
    } catch (error) {
      console.error('Redis rate limit error:', error)
      // Fallback to allowing the request
      return { success: true }
    }
  }

  private static memoryFallback = new Map<string, { count: number; resetTime: number }>()

  private checkMemoryLimit(key: string, windowMs: number, max: number, now: number): RateLimitResult {
    // Fallback to module-level in-memory rate limiting
    const rateLimitMap = RedisRateLimit.memoryFallback

    // Clean up old entries
    for (const [k, value] of rateLimitMap.entries()) {
      if (value.resetTime < now) {
        rateLimitMap.delete(k)
      }
    }

    const current = rateLimitMap.get(key)

    if (!current) {
      rateLimitMap.set(key, { count: 1, resetTime: now + windowMs })
      return { success: true, remaining: max - 1 }
    }

    if (current.count >= max) {
      return {
        success: false,
        message: 'Too many requests. Please try again later.',
        resetTime: current.resetTime,
        remaining: 0
      }
    }

    current.count++
    return { success: true, remaining: max - current.count }
  }

  private getDefaultKey(request: NextRequest): string {
    const forwarded = request.headers.get('x-forwarded-for')
    const ipString = typeof forwarded === 'string' ? forwarded : ''
    const ip = (ipString.split(',')[0] ?? '').trim() || (request.headers.get('x-real-ip') ?? 'unknown')
    return `rate_limit:${ip}`
  }

  async close() {
    if (this.redis && this.isConnected) {
      await this.redis.quit()
    }
  }
}

// Singleton instance
const redisRateLimit = new RedisRateLimit()

// Export rate limiting functions
export const rateLimit = (options: RateLimitOptions) => {
  return async (request: NextRequest): Promise<RateLimitResult> => {
    return redisRateLimit.checkLimit(request, options)
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

// Cleanup on process exit
process.on('SIGINT', async () => {
  await redisRateLimit.close()
})

process.on('SIGTERM', async () => {
  await redisRateLimit.close()
})


