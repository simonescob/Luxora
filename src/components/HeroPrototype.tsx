import React, { useState, useEffect } from 'react'
import { ArrowRight, ChevronDown, Sparkles, Star, Play, Zap, Shield, Award } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useScrollAnimation, useParallax, useMouseParallax, useScrollDirection, useTypewriter } from '@/hooks/useScrollAnimations'

type HeroVariation = 'minimalist' | 'bold' | 'experimental' | 'interactive'

const HeroPrototype = () => {
  const [variation, setVariation] = useState<HeroVariation>('interactive')
  const [isLoaded, setIsLoaded] = useState(false)
  const [showContent, setShowContent] = useState(false)
  
  // Enhanced scroll tracking
  const { elementRef: heroRef, isVisible, scrollProgress } = useScrollAnimation({ threshold: 0.1 })
  const scrollDirection = useScrollDirection()
  const parallaxOffset = useParallax(0.3)
  const mouseParallax = useMouseParallax(15)

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)
    
    const contentTimer = setTimeout(() => {
      setShowContent(true)
    }, 800)
    
    return () => {
      clearTimeout(timer)
      clearTimeout(contentTimer)
    }
  }, [])

  // Auto-change variation for demo
  useEffect(() => {
    const interval = setInterval(() => {
      setVariation(prev => {
        const variations: HeroVariation[] = ['minimalist', 'bold', 'experimental', 'interactive']
        const currentIndex = variations.indexOf(prev)
        return variations[(currentIndex + 1) % variations.length]
      })
    }, 12000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {variation === 'minimalist' && <MinimalistHero isVisible={isVisible} scrollProgress={scrollProgress} />}
      {variation === 'bold' && <BoldHero isVisible={isVisible} scrollProgress={scrollProgress} />}
      {variation === 'experimental' && <ExperimentalHero isVisible={isVisible} scrollProgress={scrollProgress} />}
      {variation === 'interactive' && <InteractiveHero isVisible={isVisible} scrollProgress={scrollProgress} mouseParallax={mouseParallax} />}

      {/* Enhanced variation selector */}
      <div className={cn(
        "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500",
        scrollDirection === 'up' ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-70'
      )}>
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl px-6 py-4 shadow-2xl border border-white/20">
          <div className="flex items-center gap-3">
            {(['minimalist', 'bold', 'experimental', 'interactive'] as HeroVariation[]).map((v) => (
              <button
                key={v}
                onClick={() => setVariation(v)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 capitalize",
                  variation === v
                    ? 'bg-primary-500 text-white shadow-lg scale-105'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105'
                )}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

// Interactive Hero - Full-featured prototype
const InteractiveHero = ({ 
  isVisible, 
  scrollProgress, 
  mouseParallax 
}: { 
  isVisible: boolean
  scrollProgress: number
  mouseParallax: { x: number; y: number }
}) => {
  const { displayText: typewriterText, isComplete: typewriterComplete } = useTypewriter(
    "Transform Your Space with AI-Powered Design", 
    80
  )

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background with mouse tracking */}
      <div 
        className="absolute inset-0 opacity-20 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${50 + mouseParallax.x}% ${50 + mouseParallax.y}%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)`,
        }}
      />

      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 right-0 z-40 h-1 bg-black/20">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <div className="relative z-10 container px-4 md:px-6 max-w-7xl mx-auto">
        <div 
          ref={useScrollAnimation({}).elementRef}
          className="grid lg:grid-cols-12 gap-8 items-center min-h-screen py-20"
        >
          {/* Enhanced left content with progressive reveal */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge with animation */}
            <div className={cn(
              "inline-block transition-all duration-1000 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}>
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/20 animate-pulse">
                <Zap className="w-4 h-4 text-yellow-400" />
                AI-Powered Design Assistant
              </span>
            </div>

            {/* Typewriter headline */}
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight">
              <span className={cn(
                "block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent transition-all duration-2000",
                isVisible ? "opacity-100" : "opacity-0"
              )}>
                {typewriterText}
                {!typewriterComplete && <span className="animate-pulse">|</span>}
              </span>
            </h1>

            {/* Subtitle with stagger animation */}
            <p className={cn(
              "max-w-2xl text-xl md:text-2xl text-gray-300 leading-relaxed transition-all duration-1000 delay-500",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}>
              Experience the future of luxury home decor with intelligent design recommendations 
              that adapt to your lifestyle and preferences in real-time.
            </p>

            {/* Enhanced CTA buttons with micro-interactions */}
            <div className={cn(
              "flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}>
              <button className="group relative h-16 px-8 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-purple-500/25 hover:scale-105 active:scale-95">
                <span>Start Free Trial</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity -z-10" />
                
                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 scale-0 group-active:scale-100 transition-transform duration-300 rounded-2xl" />
                </div>
              </button>
              
              <button className="group h-16 px-8 rounded-2xl border-2 border-white/30 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 active:scale-95">
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Trust indicators with count-up animation */}
            <div className={cn(
              "flex flex-wrap items-center gap-8 pt-8 transition-all duration-1000 delay-1000",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}>
              <div className="flex items-center gap-3">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current animate-pulse" style={{ animationDelay: `${star * 0.1}s` }} />
                  ))}
                </div>
                <div className="text-sm text-gray-300">
                  <span className="font-bold text-white text-lg">4.9/5</span> from 50,000+ reviews
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div 
                      key={i}
                      className={cn(
                        "w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br",
                        i % 3 === 0 ? 'from-purple-400 to-pink-400' : 
                        i % 3 === 1 ? 'from-blue-400 to-purple-400' : 
                        'from-pink-400 to-red-400',
                        "animate-float-gentle"
                      )}
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-300">
                  Trusted by <span className="font-bold text-white text-lg">1M+</span> homeowners
                </span>
              </div>
            </div>
          </div>

          {/* Right visual - 3D interactive showcase */}
          <div className="lg:col-span-5 relative h-96 lg:h-[600px] flex items-center justify-center">
            <div 
              className="relative w-full h-full transition-transform duration-300"
              style={{
                transform: `translate(${mouseParallax.x}px, ${mouseParallax.y}px)`,
              }}
            >
              {/* Floating UI elements with parallax */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl border border-white/10 animate-float-gentle" />
              <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-full border border-white/10 animate-float-gentle" style={{ animationDelay: '2s' }} />
              
              {/* Central product display with 3D effects */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80 transform perspective-1000 rotate-y-12 rotate-x-6 transition-transform duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-red-500/20 flex items-center justify-center relative">
                      {/* Interactive hotspots */}
                      <div className="absolute top-6 left-6 w-3 h-3 bg-green-400 rounded-full animate-ping" />
                      <div className="absolute top-6 right-6 w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                      <div className="absolute bottom-6 left-6 w-3 h-3 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                      <div className="absolute bottom-6 right-6 w-3 h-3 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
                      
                      {/* Product preview */}
                      <div className="w-60 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl shadow-inner transform rotate-3 opacity-80 animate-pulse-slow" />
                    </div>
                  </div>
                  
                  {/* 3D reflection */}
                  <div className="absolute -bottom-10 left-4 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl transform rotate-x-12 blur-xl" />
                </div>
              </div>

              {/* Feature badges with hover effects */}
              <div className="absolute top-1/4 -left-4 transform -translate-y-1/2">
                <div className="bg-white/90 backdrop-blur-md rounded-lg p-3 shadow-lg hover:scale-110 transition-transform cursor-pointer">
                  <Shield className="w-6 h-6 text-green-500" />
                </div>
              </div>
              
              <div className="absolute top-3/4 -right-4 transform -translate-y-1/2">
                <div className="bg-white/90 backdrop-blur-md rounded-lg p-3 shadow-lg hover:scale-110 transition-transform cursor-pointer">
                  <Award className="w-6 h-6 text-purple-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with enhanced animation */}
      <div className={cn(
        "fixed bottom-8 right-8 z-40 transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}>
        <button 
          className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl hover:bg-white/20 transition-all group animate-bounce-gentle"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ChevronDown className="w-8 h-8 text-white group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Loading overlay */}
      {!isVisible && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
            <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-white font-medium">Loading Experience...</p>
          </div>
        </div>
      )}
    </section>
  )
}

// Enhanced Minimalist Hero
const MinimalistHero = ({ isVisible, scrollProgress }: { isVisible: boolean; scrollProgress: number }) => {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-white via-gray-50 to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/20 overflow-hidden">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className={cn(
              "inline-block transition-all duration-1000 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100/50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-200 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Premium Home Decor
              </span>
            </div>

            <h1 className={cn(
              "font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight",
              "bg-gradient-to-r from-gray-900 to-primary-700 dark:from-white dark:to-primary-300 bg-clip-text text-transparent",
              "transition-all duration-1000 delay-300",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}>
              Transform Your Space with Luxury
            </h1>

            <p className={cn(
              "max-w-xl text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed transition-all duration-1000 delay-500",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}>
              Discover handcrafted pieces that blend timeless elegance with modern sophistication.
            </p>

            <div className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-700",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}>
              <button className="group h-14 px-8 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Shop Collection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group h-14 px-8 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                Explore Designs
                <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className={cn(
            "relative h-96 lg:h-[500px] flex items-center justify-center transition-all duration-1000 delay-300",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 via-transparent to-accent-100/20 dark:from-primary-900/20 dark:to-accent-900/20 rounded-3xl" />
            <div className="relative z-10 w-80 h-80 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-800 dark:to-secondary-800 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="w-64 h-48 bg-gradient-to-r from-primary-200 via-white to-secondary-200 dark:from-primary-700 dark:via-gray-800 dark:to-secondary-700 rounded-2xl shadow-inner transform rotate-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Enhanced Bold Hero
const BoldHero = ({ isVisible, scrollProgress }: { isVisible: boolean; scrollProgress: number }) => {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-black dark:bg-gray-900 text-white overflow-hidden">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className={cn(
              "inline-block transition-all duration-1000 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Luxury Redefined
              </span>
            </div>

            <h1 className={cn(
              "font-display text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none",
              "bg-gradient-to-r from-white via-primary-300 to-accent-300 bg-clip-text text-transparent",
              "transition-all duration-1000 delay-300",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}>
              ELEVATE<br />EVERY<br />MOMENT
            </h1>

            <p className={cn(
              "max-w-md text-xl text-gray-300 leading-relaxed transition-all duration-1000 delay-500",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}>
              Experience the extraordinary with our exclusive collection of premium home decor.
            </p>

            <div className={cn(
              "flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}>
              <button className="group h-14 px-8 rounded-lg bg-white text-black font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group h-14 px-8 rounded-lg border border-white/30 bg-black hover:bg-white/10 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                View Catalog
                <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative h-96 lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-transparent to-accent-900/30" />
            <div className="relative z-10 w-80 h-96 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 rounded-3xl shadow-2xl transform rotate-3 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary-400/20 via-transparent to-accent-400/20 flex items-center justify-center">
                <div className="w-64 h-64 bg-black rounded-2xl shadow-inner flex items-center justify-center">
                  <div className="w-48 h-32 bg-gradient-to-r from-primary-300 to-accent-300 rounded-xl transform -rotate-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Enhanced Experimental Hero
const ExperimentalHero = ({ isVisible, scrollProgress }: { isVisible: boolean; scrollProgress: number }) => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="relative z-10 container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen py-20">
          <div className="lg:col-span-7 space-y-8">
            <div className={cn(
              "inline-block transition-all duration-1000 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}>
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Next-Gen Home Decor
              </span>
            </div>

            <h1 className={cn(
              "font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight",
              "transition-all duration-1000 delay-300",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}>
              <span className="block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                REDEFINE
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                YOUR SPACE
              </span>
            </h1>

            <p className={cn(
              "max-w-2xl text-xl md:text-2xl text-gray-300 leading-relaxed transition-all duration-1000 delay-500",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}>
              Experience the future of luxury home decor with AI-curated collections that adapt to your lifestyle.
            </p>

            <div className={cn(
              "flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}>
              <button className="group relative h-16 px-8 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105">
                <span>Start Free Trial</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <button className="group h-16 px-8 rounded-2xl border-2 border-white/30 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3">
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-96 lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80 transform perspective-1000 rotate-y-12 rotate-x-6">
                  <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-red-500/20 flex items-center justify-center">
                      <div className="w-60 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl shadow-inner transform rotate-3 opacity-80" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroPrototype