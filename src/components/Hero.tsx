import React, { useState, useEffect } from 'react'
import { ArrowRight, ChevronDown, Sparkles, Star, Play } from 'lucide-react'
import { cn } from '@/lib/utils'

type HeroVariation = 'minimalist' | 'bold' | 'experimental'

const Hero = () => {
  const [variation, setVariation] = useState<HeroVariation>('minimalist')
  const [isScrolled, setIsScrolled] = useState(false)

  // Change variation every 8 seconds for demo purposes
  useEffect(() => {
    const interval = setInterval(() => {
      setVariation(prev => {
        const variations: HeroVariation[] = ['minimalist', 'bold', 'experimental']
        const currentIndex = variations.indexOf(prev)
        return variations[(currentIndex + 1) % variations.length]
      })
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  // Track scroll position for animations
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {variation === 'minimalist' && <MinimalistHero isScrolled={isScrolled} />}
      {variation === 'bold' && <BoldHero isScrolled={isScrolled} />}
      {variation === 'experimental' && <ExperimentalHero isScrolled={isScrolled} />}

      {/* Variation selector for demo purposes */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setVariation('minimalist')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
              variation === 'minimalist'
                ? 'bg-primary-500 text-white'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            Minimalist
          </button>
          <button
            onClick={() => setVariation('bold')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
              variation === 'bold'
                ? 'bg-primary-500 text-white'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            Bold
          </button>
          <button
            onClick={() => setVariation('experimental')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
              variation === 'experimental'
                ? 'bg-primary-500 text-white'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            Experimental
          </button>
        </div>
      </div>
    </>
  )
}

// Minimalist Hero Variation - Clean, elegant, and sophisticated
const MinimalistHero = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-white via-gray-50 to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/20 overflow-hidden">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100/50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-200 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Premium Home Decor
              </span>
            </div>

            <h1
              className={cn(
                "font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight",
                "bg-gradient-to-r from-gray-900 to-primary-700 dark:from-white dark:to-primary-300 bg-clip-text text-transparent",
                "animate-text-reveal"
              )}
            >
              Transform Your Space with Luxury
            </h1>

            <p className="max-w-xl text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Discover handcrafted pieces that blend timeless elegance with modern sophistication. Each item is curated to elevate your home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button className="group h-14 px-8 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0">
                Shop Collection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group h-14 px-8 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md transform hover:-translate-y-1 active:translate-y-0">
                Explore Designs
                <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">4.9 (12k+ reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary-200 dark:bg-primary-700 border-2 border-white dark:border-gray-800"></div>
                  <div className="w-8 h-8 rounded-full bg-secondary-200 dark:bg-secondary-700 border-2 border-white dark:border-gray-800"></div>
                  <div className="w-8 h-8 rounded-full bg-accent-200 dark:bg-accent-700 border-2 border-white dark:border-gray-800"></div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Trusted by 50k+ customers</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 lg:h-[500px] flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 via-transparent to-accent-100/20 dark:from-primary-900/20 dark:to-accent-900/20 rounded-3xl" />

            {/* Floating decorative elements */}
            <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-primary-200 to-accent-200 dark:from-primary-700 dark:to-accent-700 rounded-2xl transform rotate-12 shadow-lg animate-float-gentle" />
            <div className="absolute bottom-10 left-10 w-20 h-20 bg-gradient-to-br from-secondary-200 to-primary-200 dark:from-secondary-700 dark:to-primary-700 rounded-full shadow-lg animate-float-gentle" style={{ animationDelay: '2s' }} />

            {/* Main product image placeholder */}
            <div className="relative z-10 w-80 h-80 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-800 dark:to-secondary-800 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="w-64 h-48 bg-gradient-to-r from-primary-200 via-white to-secondary-200 dark:from-primary-700 dark:via-gray-800 dark:to-secondary-700 rounded-2xl shadow-inner transform rotate-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`fixed bottom-8 right-8 z-40 transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
        <button className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-lg hover:shadow-xl transition-all animate-bounce-gentle">
          <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </section>
  )
}

// Experimental Hero Variation - Ultra-modern, immersive, and futuristic
const ExperimentalHero = ({ isScrolled }: { isScrolled: boolean }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  // Track mouse movement for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
          transition: 'background 0.3s ease-out'
        }}
      />

      {/* Floating geometric elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen py-20">
          {/* Left content - Asymmetrical, bold typography */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Next-Gen Home Decor
              </span>
            </div>

            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight">
              <span className="block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-gradient-shift">
                REDEFINE
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                YOUR SPACE
              </span>
            </h1>

            <p className="max-w-2xl text-xl md:text-2xl text-gray-300 leading-relaxed">
              Experience the future of luxury home decor with AI-curated collections that adapt to your lifestyle. 
              Transform your space in minutes, not months.
            </p>

            {/* Interactive CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative h-16 px-8 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105">
                <span>Start Free Trial</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity -z-10" />
              </button>
              
              <button className="group h-16 px-8 rounded-2xl border-2 border-white/30 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3">
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Enhanced social proof */}
            <div className="flex flex-wrap items-center gap-8 pt-8">
              <div className="flex items-center gap-3">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-gray-300">
                  <span className="font-bold text-white">4.9/5</span> from 25,000+ reviews
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div 
                      key={i}
                      className={`w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br ${
                        i % 3 === 0 ? 'from-purple-400 to-pink-400' : 
                        i % 3 === 1 ? 'from-blue-400 to-purple-400' : 
                        'from-pink-400 to-red-400'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-300">
                  Trusted by <span className="font-bold text-white">500k+</span> homeowners
                </span>
              </div>
            </div>
          </div>

          {/* Right visual - 3D immersive experience */}
          <div className="lg:col-span-5 relative h-96 lg:h-[600px] flex items-center justify-center">
            {/* Main product showcase with 3D effect */}
            <div className="relative w-full h-full">
              {/* Floating UI elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl border border-white/10 animate-float-gentle" />
              <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-full border border-white/10 animate-float-gentle" style={{ animationDelay: '2s' }} />
              
              {/* Central product display */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80 transform perspective-1000 rotate-y-12 rotate-x-6">
                  <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-red-500/20 flex items-center justify-center">
                      <div className="w-60 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl shadow-inner transform rotate-3 opacity-80" />
                    </div>
                  </div>
                  
                  {/* 3D reflection */}
                  <div className="absolute -bottom-10 left-4 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl transform rotate-x-12 blur-xl" />
                </div>
              </div>

              {/* Interactive hotspots */}
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-400 rounded-full animate-ping" />
              <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll progress indicator */}
      <div className={`fixed top-0 left-0 right-0 z-40 h-1 bg-gradient-to-r from-purple-600 to-pink-600 transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
        <div 
          className="h-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300"
          style={{ width: `${Math.min(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100, 100)}%` }}
        />
      </div>

      {/* Scroll indicator */}
      <div className={`fixed bottom-8 right-8 z-40 transition-all duration-500 ${isScrolled ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <button className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl hover:bg-white/20 transition-all group">
          <ChevronDown className="w-8 h-8 text-white group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  )
}

export default Hero

// Bold Hero Variation - High contrast, dramatic, and impactful
const BoldHero = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-black dark:bg-gray-900 text-white overflow-hidden">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Asymmetrical layout */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Luxury Redefined
              </span>
            </div>

            <h1
              className={cn(
                "font-display text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none",
                "bg-gradient-to-r from-white via-primary-300 to-accent-300 bg-clip-text text-transparent",
                "animate-text-reveal"
              )}
            >
              ELEVATE<br />EVERY<br />MOMENT
            </h1>

            <p className="max-w-md text-xl text-gray-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Experience the extraordinary with our exclusive collection of premium home decor. Designed for those who demand excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button className="group h-14 px-8 rounded-lg bg-white text-black font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0">
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group h-14 px-8 rounded-lg border border-white/30 bg-black hover:bg-white/10 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md transform hover:-translate-y-1 active:translate-y-0">
                View Catalog
                <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-300">4.9/5 from 12,482 reviews</span>
              </div>
            </div>
          </div>

          {/* Right Visual - Dramatic composition */}
          <div className="relative h-96 lg:h-[600px] flex items-center justify-center">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-transparent to-accent-900/30" />

            {/* Floating elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl transform rotate-45 shadow-2xl animate-float-gentle" />
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-full shadow-2xl animate-float-gentle" style={{ animationDelay: '2s' }} />

            {/* Main product showcase */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="w-80 h-96 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 rounded-3xl shadow-2xl transform rotate-3 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-400/20 via-transparent to-accent-400/20 flex items-center justify-center">
                  <div className="w-64 h-64 bg-black rounded-2xl shadow-inner flex items-center justify-center">
                    <div className="w-48 h-32 bg-gradient-to-r from-primary-300 to-accent-300 rounded-xl transform -rotate-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`fixed bottom-8 right-8 z-40 transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
        <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg hover:shadow-xl transition-all animate-bounce-gentle">
          <ChevronDown className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  )
}