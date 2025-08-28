"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

export function AnimatedCounter({ 
  end, 
  duration = 2, 
  suffix = '', 
  className = '' 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      
      setCount(Math.floor(end * progress))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)
    
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span className={className}>
      {count}{suffix}
    </span>
  )
}

interface FloatingElementProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function FloatingElement({ 
  children, 
  delay = 0, 
  className = '' 
}: FloatingElementProps) {
  return (
    <motion.div
      className={`floating-element ${className}`}
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      {children}
    </motion.div>
  )
}

interface PulseGlowProps {
  children: React.ReactNode
  intensity?: number
  className?: string
}

export function PulseGlow({ 
  children, 
  intensity = 1, 
  className = '' 
}: PulseGlowProps) {
  return (
    <motion.div
      className={className}
      animate={{
        boxShadow: [
          `0 0 ${20 * intensity}px rgba(212, 175, 55, 0.3)`,
          `0 0 ${40 * intensity}px rgba(212, 175, 55, 0.6)`,
          `0 0 ${20 * intensity}px rgba(212, 175, 55, 0.3)`
        ]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}
