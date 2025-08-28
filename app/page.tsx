"use client"

import React, { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { 
  Music, 
  Mic, 
  Radio, 
  Film, 
  Award, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  Play,
  Pause,
  Volume2,
  Settings,
  Star,
  Users,
  Headphones,
  Zap
} from 'lucide-react'

// Hero Section Component
function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden studio-gradient">\
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-studio-gold/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-studio-silver/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-studio-gold/5 to-studio-silver/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Studio lighting effect */}
      <div className="studio-lighting absolute inset-0"></div>
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="hero-text mb-6">
            RIVER CITY
            <br />
            <span className="text-studio-silver">STUDIOS</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Michigan's longest-running recording and production studio
            <br />
            <span className="text-studio-gold font-semibold">47+ years of excellence</span> • 
            <span className="text-studio-silver font-semibold"> From local to label</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button variant="gold" size="xl" className="animate-scale-in">
              <Music className="mr-2 h-6 w-6" />
              Book Studio Time
            </Button>
            <Button variant="outline" size="xl" className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <Play className="mr-2 h-6 w-6" />
              Listen to Our Work
            </Button>
          </div>
          
          {/* Audio waveform visualization */}
          <div className="flex justify-center items-end space-x-1 mb-8">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className={`wave-bar bg-studio-gold w-2 h-4 rounded-t`}
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                  height: `${Math.random() * 40 + 10}px`
                }}
              ></div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
}

// Services Section Component
function ServicesSection() {
  const services = [
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Recording",
      description: "Professional multi-track recording with vintage and modern equipment",
      features: ["24-bit, 96KHz sampling", "Focusrite class-A mic pre-amps", "Large format capabilities"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Mixing & Mastering",
      description: "Advanced mixing with automated mixing system and surround monitoring",
      features: ["Control 24 Digital Mixer", "Total recall automation", "DTS/DVD audio ready"]
    },
    {
      icon: <Film className="h-8 w-8" />,
      title: "ADR & Voice Over",
      description: "Post-production dialogue work and professional voice recording",
      features: ["Film & TV sync", "Commercial voice work", "Podcast recording"]
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Custom Music Production",
      description: "Songwriting and original music composition for all media",
      features: ["Original compositions", "Jingle creation", "Music licensing"]
    }
  ]

  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From pre-production to final mastering, we offer comprehensive audio services 
            for musicians, filmmakers, and commercial clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="studio-card group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-studio-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-1 h-1 bg-studio-gold rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Legacy Section Component
function LegacySection() {
  const achievements = [
    { number: "47+", label: "Years in Business", icon: <Clock className="h-6 w-6" /> },
    { number: "1000+", label: "Artists Recorded", icon: <Users className="h-6 w-6" /> },
    { number: "50+", label: "Major Label Credits", icon: <Award className="h-6 w-6" /> },
    { number: "24/7", label: "Studio Access", icon: <Headphones className="h-6 w-6" /> }
  ]

  const clients = [
    "AC/DC", "Aerosmith", "Emmylou Harris", "Rascal Flatts", "Weird Al Yankovic",
    "The Accidentals", "Meijer Inc.", "West Michigan Whitecaps", "Lucasfilm"
  ]

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-r from-studio-charcoal to-studio-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title mb-8">
              A Legacy of
              <br />
              <span className="text-studio-silver">Excellence</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Since 1977, River City Studios has been the premier destination for recording 
              in West Michigan. From our humble beginnings downtown to our current 
              state-of-the-art facility, we've maintained our commitment to quality and innovation.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-studio-gold mb-2 flex justify-center">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-display font-bold text-studio-gold mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-400">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="silver" size="lg">
              <Award className="mr-2 h-5 w-5" />
              View Our Portfolio
            </Button>
          </div>
          
          <div className="space-y-8">
            <div className="studio-card">
              <h3 className="text-xl font-display font-semibold text-studio-gold mb-4">
                Notable Clients
              </h3>
              <div className="flex flex-wrap gap-2">
                {clients.map((client, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-studio-gold/10 border border-studio-gold/20 rounded-full text-sm text-gray-300"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="studio-card">
              <h3 className="text-xl font-display font-semibold text-studio-silver mb-4">
                Equipment Highlights
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Zap className="h-4 w-4 text-studio-gold mr-2" />
                  Digidesign ProTools HD V.8
                </li>
                <li className="flex items-center">
                  <Zap className="h-4 w-4 text-studio-gold mr-2" />
                  16 Focusrite™ class-A mic pre-amps
                </li>
                <li className="flex items-center">
                  <Zap className="h-4 w-4 text-studio-gold mr-2" />
                  Vintage analog tape equipment
                </li>
                <li className="flex items-center">
                  <Zap className="h-4 w-4 text-studio-gold mr-2" />
                  Surround monitoring capabilities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Section Component
function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 studio-gradient relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title mb-8">Ready to Create?</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Whether you're a solo artist, full band, or commercial client, 
          River City Studios is ready to bring your vision to life.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="studio-card text-center">
            <MapPin className="h-8 w-8 text-studio-gold mb-4 mx-auto" />
            <h3 className="font-display font-semibold text-white mb-2">Location</h3>
            <p className="text-gray-300">
              1935 Monroe Ave NW<br />
              Grand Rapids, MI 49505
            </p>
          </div>
          
          <div className="studio-card text-center">
            <Phone className="h-8 w-8 text-studio-gold mb-4 mx-auto" />
            <h3 className="font-display font-semibold text-white mb-2">Phone</h3>
            <p className="text-gray-300">
              (616) 454-7600
            </p>
          </div>
          
          <div className="studio-card text-center">
            <Mail className="h-8 w-8 text-studio-gold mb-4 mx-auto" />
            <h3 className="font-display font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-300">
              info@rivercitystudios.com
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button variant="gold" size="xl">
            <Phone className="mr-2 h-6 w-6" />
            Schedule a Tour
          </Button>
          <Button variant="outline" size="xl">
            <Phone className="mr-2 h-6 w-6" />
            Call Now
          </Button>
        </div>
      </div>
    </section>
  )
}

// Main Page Component
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-studio-dark text-white">
        <HeroSection />
        <ServicesSection />
        <LegacySection />
        <ContactSection />
      </main>
    </>
  )
}
