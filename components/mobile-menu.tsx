"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { 
  X, 
  Music, 
  Phone, 
  Mail,
  MapPin,
  Headphones,
  Mic,
  Settings,
  Award,
  ChevronRight,
  Home,
  User,
  Briefcase
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavLink {
  name: string
  href: string
  icon?: React.ReactNode
  hasDropdown?: boolean
  dropdownItems?: { name: string; href: string }[]
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navLinks: NavLink[]
}

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const [activeSubmenu, setActiveSubmenu] = React.useState<string | null>(null)

  // Close menu when clicking on a link
  const handleLinkClick = (href: string) => {
    if (!href.startsWith('#')) return
    
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    onClose()
  }

  // Handle submenu toggle
  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name)
  }

  // Reset submenu when menu closes
  React.useEffect(() => {
    if (!isOpen) {
      setActiveSubmenu(null)
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Mobile Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ 
              type: 'spring', 
              damping: 25, 
              stiffness: 200,
              duration: 0.5
            }}
            className="fixed right-0 top-0 h-full w-full max-w-sm bg-gradient-to-b from-black via-studio-dark to-black border-l border-studio-teal/20 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-studio-teal/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-studio-teal to-studio-blue rounded-lg flex items-center justify-center">
                  <Music className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">River City</h2>
                  <p className="text-sm text-studio-teal">Studios</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="px-6 py-8">
              <nav className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => toggleSubmenu(link.name)}
                          className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-900/30 border border-gray-800/50 text-white hover:bg-studio-teal/10 hover:border-studio-teal/30 transition-all duration-200 group"
                        >
                          <div className="flex items-center space-x-3">
                            {link.icon && (
                              <div className="text-studio-teal group-hover:text-studio-teal">
                                {link.icon}
                              </div>
                            )}
                            <span className="font-medium">{link.name}</span>
                          </div>
                          <ChevronRight className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                            activeSubmenu === link.name ? 'rotate-90' : ''
                          }`} />
                        </button>
                        
                        {/* Submenu */}
                        <AnimatePresence>
                          {activeSubmenu === link.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-2 ml-4 space-y-1 overflow-hidden"
                            >
                              {link.dropdownItems?.map((item) => (
                                <button
                                  key={item.name}
                                  onClick={() => handleLinkClick(item.href)}
                                  className="w-full text-left p-3 rounded-lg text-gray-300 hover:text-white hover:bg-studio-teal/10 transition-all duration-200 flex items-center space-x-2"
                                >
                                  <div className="w-1.5 h-1.5 bg-studio-teal rounded-full" />
                                  <span>{item.name}</span>
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleLinkClick(link.href)}
                        className="w-full flex items-center space-x-3 p-4 rounded-xl bg-gray-900/30 border border-gray-800/50 text-white hover:bg-studio-teal/10 hover:border-studio-teal/30 transition-all duration-200 group"
                      >
                        {link.icon && (
                          <div className="text-studio-teal group-hover:text-studio-teal">
                            {link.icon}
                          </div>
                        )}
                        <span className="font-medium">{link.name}</span>
                      </button>
                    )}
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Contact Info Section */}
            <div className="px-6 py-6 border-t border-studio-teal/20">
              <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-4 w-4 text-studio-teal" />
                  <span className="text-sm">(616) 555-0100</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-4 w-4 text-studio-teal" />
                  <span className="text-sm">info@rivercitystudios.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-4 w-4 text-studio-teal" />
                  <span className="text-sm">Grand Rapids, MI</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="px-6 py-6 border-t border-studio-teal/20">
              <div className="space-y-3">
                <Button 
                  variant="teal" 
                  className="w-full"
                  onClick={() => handleLinkClick('#contact')}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Book Studio Time
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleLinkClick('#portfolio')}
                >
                  <Award className="mr-2 h-4 w-4" />
                  View Portfolio
                </Button>
              </div>
            </div>

            {/* Studio Branding Footer */}
            <div className="px-6 py-4 border-t border-studio-teal/20">
              <div className="text-center">
                <p className="text-xs text-gray-400">Professional Audio Production</p>
                <p className="text-xs text-studio-teal font-medium">Where Sound Comes Alive</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
