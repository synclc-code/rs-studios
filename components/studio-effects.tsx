"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface AudioVisualizerProps {
  bars?: number
  height?: number
  className?: string
  isPlaying?: boolean
}

export function AudioVisualizer({ 
  bars = 20, 
  height = 40, 
  className = '',
  isPlaying = true 
}: AudioVisualizerProps) {
  return (
    <div className={`flex items-end justify-center space-x-1 ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="bg-studio-gold rounded-t"
          style={{ 
            width: '2px',
            height: `${Math.random() * height + 10}px`
          }}
          animate={isPlaying ? {
            scaleY: [1, Math.random() * 2 + 0.5, 1],
          } : {}}
          transition={{
            duration: 0.5 + Math.random() * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.05
          }}
        />
      ))}
    </div>
  )
}

interface VinylRecordProps {
  size?: number
  spinning?: boolean
  className?: string
}

export function VinylRecord({ 
  size = 100, 
  spinning = true, 
  className = '' 
}: VinylRecordProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={spinning ? { rotate: 360 } : {}}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {/* Outer record */}
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 to-black border-2 border-studio-gold/30"
        style={{ width: size, height: size }}
      >
        {/* Record grooves */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-gray-700/30"
            style={{
              top: `${10 + i * 10}%`,
              left: `${10 + i * 10}%`,
              width: `${80 - i * 20}%`,
              height: `${80 - i * 20}%`,
            }}
          />
        ))}
        
        {/* Center label */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-studio-gold flex items-center justify-center"
          style={{ width: size * 0.3, height: size * 0.3 }}
        >
          <div className="text-studio-dark font-bold text-xs">RCS</div>
        </div>
      </div>
    </motion.div>
  )
}

interface StudioLightingProps {
  intensity?: number
  color?: string
  className?: string
}

export function StudioLighting({ 
  intensity = 1, 
  color = '#D4AF37', 
  className = '' 
}: StudioLightingProps) {
  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: intensity }}
      transition={{ duration: 2 }}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: `linear-gradient(45deg, transparent 30%, ${color}20 50%, transparent 70%)`
        }}
        animate={{
          transform: [
            'translateX(-100%) translateY(-100%)',
            'translateX(100%) translateY(100%)'
          ]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  )
}
