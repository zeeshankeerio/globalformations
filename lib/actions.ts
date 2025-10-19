"use server"

import { type CookieOptions } from "@supabase/ssr"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// Type definitions
type ActionResponse = { error?: string; success?: string }
type CookieStore = Awaited<ReturnType<typeof cookies>>

// Create Supabase client with cookie handling
function createSupabaseClient(cookieStore: CookieStore) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          try {
            return cookieStore.get(name)?.value
          } catch (error) {
            console.error('Cookie get error:', error)
            return undefined
          }
        },
        set(name: string, value: string, options: CookieOptions = {}) {
          try {
            cookieStore.set(name, value, {
              ...options,
              path: options.path ?? '/',
              sameSite: options.sameSite ?? 'lax',
              secure: true
            })
          } catch (error) {
            console.error('Cookie set error:', error)
          }
        },
        remove(name: string) {
          try {
            cookieStore.delete(name)
          } catch (error) {
            console.error('Cookie remove error:', error)
          }
        }
      }
    }
  )
}

// Auth actions
export async function signIn(
  _prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  if (!formData) {
    return { error: 'Form data is missing' }
  }

  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()
  
  if (!email || !password) {
    return { error: 'Email and password are required' }
  }

  try {
    const cookieStore = await cookies()
    const supabase = createSupabaseClient(cookieStore)
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      return { error: error.message }
    }

    redirect('/dashboard')
  } catch (error) {
    console.error('Sign in error:', error)
    return { error: 'An unexpected error occurred' }
  }
}

export async function signUp(
  _prevState: ActionResponse | null, 
  formData: FormData
): Promise<ActionResponse> {
  if (!formData) {
    return { error: 'Form data is missing' }
  }

  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()
  const fullName = formData.get('fullName')?.toString() || ''
  
  if (!email || !password) {
    return { error: 'Email and password are required' }
  }

  try {
    const cookieStore = await cookies()
    const supabase = createSupabaseClient(cookieStore)
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ||
          `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/callback`,
        data: { full_name: fullName }
      }
    })

    if (error) {
      return { error: error.message }
    }

    if (data.user) {
      await supabase.from('profiles').insert({
        id: data.user.id,
        email,
        full_name: fullName
      })
    }

    return { success: 'Check your email to confirm your account' }
  } catch (error) {
    console.error('Sign up error:', error)
    return { error: 'An unexpected error occurred' }
  }
}

export async function signOut(): Promise<void> {
  try {
    const cookieStore = await cookies()
    const supabase = createSupabaseClient(cookieStore)
    await supabase.auth.signOut()
    redirect('/auth/login')
  } catch (error) {
    console.error('Sign out error:', error)
    redirect('/error')
  }
}
