"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import PopupContactForm from "@/components/popup-contact-form"

export default function BlogContactCTA() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        size="lg"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        Contact Us
      </Button>

      <PopupContactForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
