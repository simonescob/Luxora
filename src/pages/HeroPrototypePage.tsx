import React, { useState, useEffect } from 'react'
import HeroPrototype from '@/components/HeroPrototype'
import { ArrowLeft, Download, Share2, Settings, Play, Pause } from 'lucide-react'

const HeroPrototypePage = () => {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [showControls, setShowControls] = useState(true)
  const [performanceMode, setPerformanceMode] = useState<'high' | 'balanced' | 'low'>('balanced')

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        window.history.back()
      }
      if (e.key === ' ') {
        e.preventDefault()
        setIsAutoPlaying(prev => !prev)
      }
      if (e.key === 'c' || e.key === 'C') {
        setShowControls(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Luxora Hero Prototype',
          text: 'Check out this amazing hero section prototype!',
          url: window.location.href
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div className="min-h-screen bg-black relative">
      {/* Header Controls */}
      {showControls && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Left side - Navigation */}
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => window.history.back()}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to App
                </button>
                
                <div className="text-white">
                  <h1 className="font-semibold">Hero Section Prototype</h1>
                  <p className="text-sm text-gray-400">Interactive Demo with Scroll Behaviors</p>
                </div>
              </div>

              {/* Right side - Controls */}
              <div className="flex items-center gap-3">
                {/* Performance Mode */}
                <select 
                  value={performanceMode}
                  onChange={(e) => setPerformanceMode(e.target.value as 'high' | 'balanced' | 'low')}
                  className="bg-white/10 text-white border border-white/20 rounded-lg px-3 py-2 text-sm"
                >
                  <option value="high" className="bg-gray-800">High Quality</option>
                  <option value="balanced" className="bg-gray-800">Balanced</option>
                  <option value="low" className="bg-gray-800">Performance</option>
                </select>

                {/* Auto-play toggle */}
                <button
                  onClick={() => setIsAutoPlaying(prev => !prev)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isAutoPlaying 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span className="text-sm">
                    {isAutoPlaying ? 'Pause' : 'Play'}
                  </span>
                </button>

                {/* Share button */}
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>

                {/* Settings */}
                <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Prototype Component */}
      <div className="pt-20">
        <HeroPrototype />
      </div>

      {/* Floating Controls Panel */}
      {showControls && (
        <div className="fixed bottom-8 left-8 z-50">
          <div className="bg-black/80 backdrop-blur-md rounded-2xl p-6 text-white border border-white/10 max-w-sm">
            <h3 className="font-semibold mb-4">Demo Controls</h3>
            
            <div className="space-y-4">
              {/* Keyboard Shortcuts */}
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-2">Keyboard Shortcuts</h4>
                <div className="space-y-1 text-xs text-gray-400">
                  <div className="flex justify-between">
                    <span>Toggle auto-play:</span>
                    <kbd className="bg-white/10 px-2 py-1 rounded">Space</kbd>
                  </div>
                  <div className="flex justify-between">
                    <span>Toggle controls:</span>
                    <kbd className="bg-white/10 px-2 py-1 rounded">C</kbd>
                  </div>
                  <div className="flex justify-between">
                    <span>Go back:</span>
                    <kbd className="bg-white/10 px-2 py-1 rounded">Esc</kbd>
                  </div>
                </div>
              </div>

              {/* Performance Info */}
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-2">Performance</h4>
                <div className="space-y-1 text-xs text-gray-400">
                  <div className="flex justify-between">
                    <span>Current mode:</span>
                    <span className="capitalize text-white">{performanceMode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Animations:</span>
                    <span className="text-green-400">Enabled</span>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-2">Features</h4>
                <div className="space-y-1 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Scroll-triggered animations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Mouse parallax effects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Progressive content reveal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>3D transforms</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <button className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
              <Download className="w-4 h-4" />
              <span>Download Assets</span>
            </button>
          </div>
        </div>
      )}

      {/* Toggle Controls Button */}
      {!showControls && (
        <button
          onClick={() => setShowControls(true)}
          className="fixed top-8 right-8 z-50 w-12 h-12 bg-black/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-colors"
        >
          <Settings className="w-5 h-5" />
        </button>
      )}

      {/* Instructions Overlay */}
      {showControls && (
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-40">
          <div className="bg-black/80 backdrop-blur-md rounded-2xl p-4 text-white border border-white/10 max-w-xs">
            <h4 className="font-semibold mb-2 text-center">How to Interact</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>• Scroll to see animations trigger</p>
              <p>• Move mouse for parallax effects</p>
              <p>• Try different variations</p>
              <p>• Toggle auto-play with spacebar</p>
            </div>
          </div>
        </div>
      )}

      {/* Version Info */}
      <div className="fixed bottom-8 right-8 z-30">
        <div className="text-right text-white/50 text-xs">
          <div>Prototype v2.0</div>
          <div>Build: {new Date().toISOString().split('T')[0]}</div>
        </div>
      </div>

      {/* Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
    </div>
  )
}

export default HeroPrototypePage