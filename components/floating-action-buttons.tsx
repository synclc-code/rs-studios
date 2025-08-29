"use client"

import { useEffect, useState } from "react"
import { ArrowUp, Phone } from "lucide-react"

export default function FloatingActionButtons() {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    // Function to check scroll position
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowScrollButton(scrollY > 300)
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Initial check
    handleScroll()

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  // Handle call button click
  const handleCall = () => {
    window.location.href = "tel:+16162133067"
  }

  return (
    <>
      {/* Scroll to Top Button - Visible on all screens when scrolled down */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-studio-teal text-studio-dark shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-studio-blue hover:text-white transform ${
          showScrollButton
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-95 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Call Now Button - Only visible on mobile */}
      <button
        onClick={handleCall}
        className="fixed bottom-6 left-6 z-50 md:hidden w-12 h-12 rounded-full bg-studio-blue text-white shadow-lg flex items-center justify-center hover:bg-studio-teal hover:text-studio-dark transition-all duration-300 transform hover:scale-105"
        aria-label="Call now"
      >
        <Phone className="w-5 h-5" />
      </button>
    </>
  )
}
