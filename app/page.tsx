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
  Play,
  Pause,
  Volume2,
  SkipBack,
  SkipForward,
  MoreHorizontal, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  Settings,
  Star,
  Users,
  Headphones,
  Zap
} from 'lucide-react'

// Hero Section Component
function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/stu.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-studio-teal/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-studio-blue/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-studio-teal/5 to-studio-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Studio lighting effect */}
      <div className="studio-lighting absolute inset-0"></div>
      
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <div className="animate-fade-in">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight mb-6">
                <span className="inline-block animate-elegant-fade-up text-white" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                  Where
                </span>
                <br />
                <span className="inline-block animate-elegant-fade-up text-studio-teal" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                  Sound
                </span>
                <span className="inline-block animate-elegant-fade-up text-white ml-4" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                  Comes
                </span>
                <br />
                <span className="inline-block animate-elegant-fade-up text-studio-blue" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                  Alive
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-light max-w-2xl mx-auto">
                Professional audio production and recording services for businesses, 
                content creators, and media professionals seeking exceptional quality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button variant="teal" size="xl" className="animate-scale-in">
                  <Music className="mr-2 h-6 w-6" />
                  Book Studio Time
                </Button>
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="animate-scale-in border-studio-teal/30 text-studio-teal hover:bg-studio-teal hover:text-studio-dark" 
                  style={{ animationDelay: '0.2s' }}
                >
                  <Play className="mr-2 h-6 w-6" />
                  View Portfolio
                </Button>
              </div>
              
              {/* Audio waveform visualization */}
              <div className="flex items-end space-x-1 justify-center">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i}
                    className={`wave-bar bg-studio-teal w-2 h-4 rounded-t`}
                    style={{ 
                      animationDelay: `${i * 0.1}s`,
                      height: `${Math.random() * 30 + 10}px`
                    }}
                  ></div>
                ))}
              </div>
            </div>
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
      title: "Audio Production",
      description: "Professional recording services for corporate media and content",
      features: ["High-quality digital recording", "Multi-track capabilities", "Professional editing"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Post-Production",
      description: "Complete audio post-production and mastering services",
      features: ["Audio mixing and mastering", "Sound design", "Audio restoration"]
    },
    {
      icon: <Film className="h-8 w-8" />,
      title: "Voice Over & ADR",
      description: "Professional voice recording for corporate videos and advertisements",
      features: ["Corporate narration", "Commercial voice work", "Podcast production"]
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Custom Audio Solutions",
      description: "Tailored audio production for your specific business needs",
      features: ["Brand audio identity", "Custom soundtracks", "Audio branding"]
    }
  ]

  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive audio production services for businesses, organizations, 
            and content creators seeking professional quality results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="studio-card group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-studio-teal mb-4 group-hover:scale-110 transition-transform duration-300">
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
                    <div className="w-1 h-1 bg-studio-teal rounded-full mr-2"></div>
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

// Recent Recordings Section Component
function RecentRecordingsSection() {
  const recordings = [
    {
      id: 1,
      title: "Corporate Brand Voice",
      artist: "Stanley Steemer",
      duration: "2:34",
      category: "Commercial Voice-over",
      waveform: Array.from({length: 40}, () => Math.random() * 100 + 10)
    },
    {
      id: 2,
      title: "Symphony Hall Recording",
      artist: "Grand Rapids Symphony",
      duration: "45:12",
      category: "Classical Performance",
      waveform: Array.from({length: 40}, () => Math.random() * 100 + 20)
    },
    {
      id: 3,
      title: "Product Demo Audio",
      artist: "Haworth Office Solutions",
      duration: "3:28",
      category: "Corporate Production",
      waveform: Array.from({length: 40}, () => Math.random() * 80 + 15)
    },
    {
      id: 4,
      title: "Garden Audio Tour",
      artist: "Frederik Meijer Gardens",
      duration: "12:45",
      category: "Educational Content",
      waveform: Array.from({length: 40}, () => Math.random() * 90 + 25)
    }
  ]

  const [currentlyPlaying, setCurrentlyPlaying] = React.useState<number | null>(null)

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-studio-dark to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Recent Recordings</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Listen to our latest professional audio productions featuring corporate clients and creative projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recordings.map((recording) => (
            <div 
              key={recording.id}
              className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm hover:border-studio-teal/30 transition-all duration-300 group"
            >
              {/* Recording Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-studio-teal transition-colors">
                    {recording.title}
                  </h3>
                  <p className="text-studio-teal font-medium mb-1">{recording.artist}</p>
                  <span className="text-sm text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                    {recording.category}
                  </span>
                </div>
                <div className="text-right text-gray-400">
                  <div className="text-sm">{recording.duration}</div>
                </div>
              </div>

              {/* Waveform Visualization */}
              <div className="mb-4 bg-black/30 rounded-lg p-4">
                <div className="flex items-end justify-center space-x-1 h-16">
                  {recording.waveform.map((height, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-t from-studio-teal to-studio-blue rounded-sm transition-all duration-200 ${
                        currentlyPlaying === recording.id 
                          ? 'animate-pulse-glow opacity-80' 
                          : 'opacity-60 group-hover:opacity-80'
                      }`}
                      style={{ 
                        height: `${height}%`,
                        width: '6px',
                        minHeight: '8px'
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Player Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setCurrentlyPlaying(
                      currentlyPlaying === recording.id ? null : recording.id
                    )}
                    className="w-12 h-12 bg-gradient-to-r from-studio-teal to-studio-blue rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform shadow-lg hover:shadow-studio-teal/25"
                  >
                    {currentlyPlaying === recording.id ? (
                      <Pause className="h-5 w-5" />
                    ) : (
                      <Play className="h-5 w-5 ml-0.5" />
                    )}
                  </button>
                  
                  <div className="hidden sm:flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-studio-teal transition-colors">
                      <SkipBack className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-studio-teal transition-colors">
                      <SkipForward className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Volume2 className="h-4 w-4 text-gray-400" />
                  <div className="w-20 bg-gray-700 rounded-full h-1">
                    <div className="bg-gradient-to-r from-studio-teal to-studio-blue h-1 rounded-full w-3/4"></div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-studio-teal transition-colors">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 flex items-center space-x-3 text-xs text-gray-400">
                <span>0:00</span>
                <div className="flex-1 bg-gray-700 rounded-full h-1">
                  <div 
                    className={`bg-gradient-to-r from-studio-teal to-studio-blue h-1 rounded-full transition-all duration-300 ${
                      currentlyPlaying === recording.id ? 'w-1/3' : 'w-0'
                    }`}
                  ></div>
                </div>
                <span>{recording.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button variant="teal" size="xl" className="animate-scale-in">
            <Music className="mr-2 h-5 w-5" />
            View All Recordings
          </Button>
        </div>
      </div>
    </section>
  )
}

// Legacy Section Component
function LegacySection() {
  const achievements = [
    { number: "100+", label: "Projects Completed", icon: <Clock className="h-6 w-6" /> },
    { number: "50+", label: "Corporate Clients", icon: <Users className="h-6 w-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <Award className="h-6 w-6" /> },
    { number: "24/7", label: "Studio Access", icon: <Headphones className="h-6 w-6" /> }
  ]

  const capabilities = [
    { title: "Professional Recording", description: "State-of-the-art facilities with industry-standard equipment" },
    { title: "Post-Production", description: "Complete mixing, mastering, and audio enhancement services" },
    { title: "Voice Production", description: "Commercial, corporate, and broadcast voice recording" },
    { title: "Custom Solutions", description: "Tailored audio solutions for unique project requirements" }
  ]

  const equipment = [
    "Pro Tools HD Audio Interface",
    "Premium mic preamps and converters", 
    "Professional monitoring systems",
    "Full range of studio instruments"
  ]

  return (
    <section id="about" className="py-16 px-4 bg-gradient-to-r from-studio-charcoal to-studio-dark relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title mb-6">
            A Legacy of <span className="text-studio-blue">Excellence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Since our founding, River City Studios has been committed to providing exceptional recording 
            and production services. Our professional facilities and experienced team deliver outstanding 
            results for every project.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Stats */}
          <div className="lg:col-span-1">
            <div className="studio-card">
              <h3 className="text-xl font-display font-semibold text-studio-teal mb-6 text-center">
                Our Numbers
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-studio-teal mb-2 flex justify-center">
                      {achievement.icon}
                    </div>
                    <div className="text-2xl font-display font-bold text-studio-teal mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-xs text-gray-400">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column - Capabilities */}
          <div className="lg:col-span-1">
            <div className="studio-card h-full">
              <h3 className="text-xl font-display font-semibold text-studio-blue mb-4">
                Core Capabilities
              </h3>
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="border-l-2 border-studio-teal/30 pl-4">
                    <h4 className="font-semibold text-white text-sm mb-1">
                      {capability.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Equipment */}
          <div className="lg:col-span-1">
            <div className="studio-card h-full">
              <h3 className="text-xl font-display font-semibold text-studio-blue mb-4">
                Equipment Highlights
              </h3>
              <ul className="space-y-3">
                {equipment.map((item, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <Zap className="h-4 w-4 text-studio-teal mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-700/50">
                <Button variant="outline" size="sm" className="w-full">
                  <Settings className="mr-2 h-4 w-4" />
                  View Full Equipment List
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-studio-teal/10 to-studio-blue/10 border border-studio-teal/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            Ready to Experience Professional Audio Production?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join the ranks of satisfied clients who trust River City Studios for their audio needs. 
            Let's discuss how we can bring your project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="teal" size="lg">
              <Award className="mr-2 h-5 w-5" />
              View Our Portfolio
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
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
            <MapPin className="h-8 w-8 text-studio-teal mb-4 mx-auto" />
            <h3 className="font-display font-semibold text-white mb-2">Location</h3>
            <p className="text-gray-300">
              Professional Studios<br />
              Grand Rapids, MI
            </p>
          </div>
          
          <div className="studio-card text-center">
            <Phone className="h-8 w-8 text-studio-teal mb-4 mx-auto" />
            <h3 className="font-display font-semibold text-white mb-2">Phone</h3>
            <p className="text-gray-300">
              (616) 555-0100
            </p>
          </div>
          
          <div className="studio-card text-center">
            <Mail className="h-8 w-8 text-studio-teal mb-4 mx-auto" />
            <h3 className="font-display font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-300">
              info@rivercitystudios.com
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button variant="teal" size="xl">
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

// Notable Clients Section Component
function NotableClientsSection() {
  const clients = [
    {
      name: "Stanley Steemer",
      logo: "SS",
      category: "Commercial Cleaning",
      project: "Brand Voice Campaign"
    },
    {
      name: "Grand Rapids Symphony",
      logo: "GRS",
      category: "Arts & Culture",
      project: "Concert Recording"
    },
    {
      name: "Haworth",
      logo: "H",
      category: "Office Solutions",
      project: "Product Demo Audio"
    },
    {
      name: "Frederik Meijer Gardens",
      logo: "FMG",
      category: "Cultural Institution",
      project: "Audio Tour Guide"
    },
    {
      name: "Iron Gate",
      logo: "IG",
      category: "Real Estate",
      project: "Property Marketing"
    },
    {
      name: "Local Spins",
      logo: "LS",
      category: "Media & Publishing",
      project: "Podcast Production"
    },
    {
      name: "Discovery Channel",
      logo: "DC",
      category: "Television",
      project: "Documentary Audio"
    },
    {
      name: "Steelcase",
      logo: "SC",
      category: "Furniture Design",
      project: "Corporate Training"
    },
    {
      name: "Spectrum Health",
      logo: "SH",
      category: "Healthcare",
      project: "Patient Education"
    },
    {
      name: "NBC",
      logo: "NBC",
      category: "Broadcasting",
      project: "Commercial Production"
    },
    {
      name: "Meijer",
      logo: "M",
      category: "Retail",
      project: "In-Store Audio"
    }
  ]

  const [currentGroup, setCurrentGroup] = React.useState(0)
  const clientsPerGroup = 3
  const totalGroups = Math.ceil(clients.length / clientsPerGroup)

  // Auto-rotate through groups
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % totalGroups)
    }, 3000)

    return () => clearInterval(interval)
  }, [totalGroups])

  // Get current clients to display
  const getCurrentClients = () => {
    const startIndex = currentGroup * clientsPerGroup
    const currentClients = clients.slice(startIndex, startIndex + clientsPerGroup)
    
    // Fill remaining slots if we're at the end
    while (currentClients.length < clientsPerGroup && clients.length > 0) {
      const remainingIndex = currentClients.length % clients.length
      currentClients.push(clients[remainingIndex])
    }
    
    return currentClients
  }

  const visibleClients = getCurrentClients()

  return (
    <section className="py-12 sm:py-16 px-4 bg-gradient-to-b from-black to-studio-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 sm:mb-6">
            Notable <span className="text-studio-teal">Clients</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Trusted by leading brands and organizations across diverse industries
          </p>
        </div>

        {/* Mobile-Optimized Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 min-h-[180px] sm:min-h-[200px]">
          {visibleClients.map((client, index) => (
            <div 
              key={`${client.name}-${currentGroup}-${index}`}
              className="group bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50 rounded-xl p-4 sm:p-6 backdrop-blur-sm hover:border-studio-teal/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-studio-teal to-studio-blue rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm mr-3 sm:mr-4 flex-shrink-0">
                  {client.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-lg font-semibold text-white group-hover:text-studio-teal transition-colors truncate">
                    {client.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 truncate">{client.category}</p>
                  <p className="text-xs sm:text-sm text-studio-teal font-medium truncate">
                    {client.project}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-Friendly Indicators */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-3">
          {Array.from({ length: totalGroups }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentGroup(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 touch-manipulation ${
                currentGroup === index
                  ? 'bg-studio-teal scale-110'
                  : 'bg-gray-600 hover:bg-gray-500 active:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-8 px-4">
          <Button variant="teal" size="lg" className="w-full sm:w-auto">
            <Star className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Become a Client
          </Button>
        </div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-studio-teal">
              River City Studios
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Professional audio production and recording services for businesses, 
              content creators, and media professionals.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-studio-teal/10 border border-studio-teal/20 rounded-lg flex items-center justify-center hover:bg-studio-teal/20 transition-colors cursor-pointer">
                <Music className="h-5 w-5 text-studio-teal" />
              </div>
              <div className="w-10 h-10 bg-studio-teal/10 border border-studio-teal/20 rounded-lg flex items-center justify-center hover:bg-studio-teal/20 transition-colors cursor-pointer">
                <Radio className="h-5 w-5 text-studio-teal" />
              </div>
              <div className="w-10 h-10 bg-studio-teal/10 border border-studio-teal/20 rounded-lg flex items-center justify-center hover:bg-studio-teal/20 transition-colors cursor-pointer">
                <Film className="h-5 w-5 text-studio-teal" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-studio-teal transition-colors">Audio Production</a></li>
              <li><a href="#" className="text-gray-400 hover:text-studio-teal transition-colors">Post-Production</a></li>
              <li><a href="#" className="text-gray-400 hover:text-studio-teal transition-colors">Voice Over & ADR</a></li>
              <li><a href="#" className="text-gray-400 hover:text-studio-teal transition-colors">Custom Audio Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-studio-teal transition-colors">Mixing & Mastering</a></li>
            </ul>
          </div>

          {/* Studios */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Studios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-studio-teal transition-colors">Studio A</a></li>
              <li><a href="#" className="text-gray-400 hover:text-studio-teal transition-colors">Studio B</a></li>
              <li><a href="#" className="text-gray-400 hover:text-studio-teal transition-colors">Equipment List</a></li>
              <li><a href="#" className="text-gray-400 hover:text-studio-teal transition-colors">Studio Tour</a></li>
              <li><a href="#" className="text-gray-400 hover:text-studio-teal transition-colors">Booking</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-studio-teal" />
                <span className="text-gray-400">Grand Rapids, MI</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-studio-teal" />
                <span className="text-gray-400">(616) 555-0100</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-studio-teal" />
                <span className="text-gray-400">info@rivercitystudios.com</span>
              </div>
            </div>
            <Button variant="teal" size="sm" className="w-full">
              <Phone className="mr-2 h-4 w-4" />
              Schedule Consultation
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 River City Studios. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-studio-teal transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-studio-teal transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-studio-teal transition-colors text-sm">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
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
        <RecentRecordingsSection />
        <LegacySection />
        <NotableClientsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
