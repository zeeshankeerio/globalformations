"use client"

import { useEffect, useRef } from "react"

export default function PerformanceOptimizer() {
  const imageObserverRef = useRef<IntersectionObserver | null>(null)
  const motionQueryRef = useRef<MediaQueryList | null>(null)

  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts - Disabled: font files not present
      // const fontLink = document.createElement("link")
      // fontLink.rel = "preload"
      // fontLink.href = "/fonts/inter.woff2"
      // fontLink.as = "font"
      // fontLink.type = "font/woff2"
      // fontLink.crossOrigin = "anonymous"
      // document.head.appendChild(fontLink)

      // Preload critical images - Disabled: image files not present
      // const heroImage = new Image()
      // heroImage.src = "/hero-bg.webp"
    }

    // Optimize images with lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll("img[data-src]")
      
      if (images.length === 0) return

      imageObserverRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement
              img.src = img.dataset.src || ""
              img.classList.remove("blur-sm")
              imageObserverRef.current?.unobserve(img)
            }
          })
        },
        {
          rootMargin: "50px 0px",
          threshold: 0.1
        }
      )

      images.forEach((img) => imageObserverRef.current?.observe(img))
    }

    // Smooth scroll behavior
    const enableSmoothScroll = () => {
      document.documentElement.style.scrollBehavior = "smooth"
    }

    // Reduce motion for users who prefer it
    const respectMotionPreferences = () => {
      motionQueryRef.current = window.matchMedia("(prefers-reduced-motion: reduce)")
      
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.style.setProperty("--animation-duration", "0.01ms")
          document.documentElement.style.setProperty("--transition-duration", "0.01ms")
        } else {
          document.documentElement.style.removeProperty("--animation-duration")
          document.documentElement.style.removeProperty("--transition-duration")
        }
      }

      motionQueryRef.current.addEventListener("change", handleMotionChange)
      
      // Apply initial state
      if (motionQueryRef.current.matches) {
        document.documentElement.style.setProperty("--animation-duration", "0.01ms")
        document.documentElement.style.setProperty("--transition-duration", "0.01ms")
      }
    }

    // Initialize optimizations
    preloadCriticalResources()
    optimizeImages()
    enableSmoothScroll()
    respectMotionPreferences()

    // Cleanup function
    return () => {
      // Restore scroll behavior
      document.documentElement.style.scrollBehavior = "auto"
      
      // Clean up intersection observer
      if (imageObserverRef.current) {
        imageObserverRef.current.disconnect()
        imageObserverRef.current = null
      }
      
      // Clean up motion query listener
      if (motionQueryRef.current) {
        motionQueryRef.current.removeEventListener("change", () => {})
        motionQueryRef.current = null
      }
    }
  }, [])

  return null
}