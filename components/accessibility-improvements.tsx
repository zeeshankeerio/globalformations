"use client"

import { useEffect } from "react"

export default function AccessibilityImprovements() {
  useEffect(() => {
    // Add skip to main content link
    const skipLink = document.createElement("a")
    skipLink.href = "#main-content"
    skipLink.textContent = "Skip to main content"
    skipLink.className = "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
    skipLink.setAttribute("aria-label", "Skip to main content")
    document.body.insertBefore(skipLink, document.body.firstChild)

    // Add focus management for modals and dropdowns
    const handleFocusTrap = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const activeElement = document.activeElement as HTMLElement
        if (activeElement?.closest("[data-modal]") || activeElement?.closest("[data-dropdown]")) {
          activeElement.blur()
        }
      }
    }

    document.addEventListener("keydown", handleFocusTrap)

    return () => {
      document.removeEventListener("keydown", handleFocusTrap)
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink)
      }
    }
  }, [])

  return null
}
