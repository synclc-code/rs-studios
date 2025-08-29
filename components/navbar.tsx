"use client"

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { MobileMenu } from '@/components/mobile-menu'
import { 
  Menu, 
  X, 
  Music, 
  Phone, 
  Mail,
  MapPin,
  Headphones,
  Mic,
  Settings,
  Award,
  ChevronDown
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface NavLink {
  name: string
  href: string
  icon?: React.ReactNode
  hasDropdown?: boolean
  dropdownItems?: { name: string; href: string }[]
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services', icon: <Headphones className="h-4 w-4" /> },
  { 
    name: 'Studios', 
    href: '#studios', 
    icon: <Mic className="h-4 w-4" />,
    hasDropdown: true,
    dropdownItems: [
      { name: 'Studio A', href: '#studio-a' },
      { name: 'Studio B', href: '#studio-b' }
    ]
  },
  { name: 'Portfolio', href: '#portfolio', icon: <Award className="h-4 w-4" /> },
  { name: 'About', href: '#about', icon: <Music className="h-4 w-4" /> },
  { name: 'Contact', href: '#contact', icon: <Phone className="h-4 w-4" /> },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "glass-effect backdrop-blur-xl border-b border-studio-teal/20" 
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-studio-teal rounded-full flex items-center justify-center">
                  <Music className="h-6 w-6 lg:h-7 lg:w-7 text-studio-dark" />
                </div>
                <div className="absolute inset-0 bg-studio-teal rounded-full animate-ping opacity-20"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-display font-bold text-xl lg:text-2xl text-white">
                  River City
                  <span className="text-studio-teal"> Studios</span>
                </h1>
                <p className="text-xs lg:text-sm text-gray-400 font-light">
                  Professional Recording
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(link.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <motion.button
                        className="group flex items-center space-x-2 text-gray-300 hover:text-studio-teal transition-colors duration-300 relative"
                        whileHover={{ y: -2 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {link.icon && (
                          <span className="group-hover:text-studio-teal transition-colors duration-300">
                            {link.icon}
                          </span>
                        )}
                        <span className="font-medium">{link.name}</span>
                        <ChevronDown className="h-4 w-4 group-hover:text-studio-teal transition-colors duration-300" />
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-studio-teal group-hover:w-full transition-all duration-300"></div>
                      </motion.button>
                      
                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-48 glass-effect rounded-lg border border-studio-teal/20 overflow-hidden"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {link.dropdownItems?.map((item, idx) => (
                              <button
                                key={idx}
                                onClick={() => {
                                  scrollToSection(item.href)
                                  setActiveDropdown(null)
                                }}
                                className="w-full px-4 py-3 text-left text-gray-300 hover:text-studio-teal hover:bg-studio-teal/10 transition-colors duration-300"
                              >
                                {item.name}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      className="group flex items-center space-x-2 text-gray-300 hover:text-studio-teal transition-colors duration-300 relative"
                      whileHover={{ y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.icon && (
                        <span className="group-hover:text-studio-teal transition-colors duration-300">
                          {link.icon}
                        </span>
                      )}
                      <span className="font-medium">{link.name}</span>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-studio-teal group-hover:w-full transition-all duration-300"></div>
                    </motion.button>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                className="border-studio-teal/30 text-studio-teal hover:bg-studio-teal hover:text-studio-dark"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
              <Button 
                variant="teal" 
                size="sm"
                className="glow-effect"
              >
                <Mic className="h-4 w-4 mr-2" />
                Book Studio
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-300 hover:text-studio-teal hover:bg-studio-teal/10 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  )
}
