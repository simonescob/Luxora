import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
    alert('Thank you for subscribing to our newsletter!')
  }

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Stay in the Loop</h3>
              <p className="text-primary-100 text-lg">
                Get the latest updates on new collections, exclusive offers, and styling tips delivered to your inbox.
              </p>
            </div>
            
            <form onSubmit={handleNewsletterSubmit} className="flex space-x-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-secondary-900 placeholder-secondary-500 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-primary-500 font-semibold rounded-xl hover:bg-secondary-50 transition-colors duration-200 flex items-center space-x-2"
              >
                <span>Subscribe</span>
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-bold">Luxora</span>
            </div>
            
            <p className="text-secondary-300 leading-relaxed">
              Transforming living spaces with premium home decor and lifestyle products. 
              Where elegance meets functionality.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-3 bg-secondary-800 hover:bg-primary-500 rounded-lg transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-secondary-800 hover:bg-primary-500 rounded-lg transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-secondary-800 hover:bg-primary-500 rounded-lg transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <div className="space-y-3">
              <Link
                to="/"
                className="block text-secondary-300 hover:text-primary-400 transition-colors duration-200"
              >
                Home
              </Link>
              <a
                href="#products"
                className="block text-secondary-300 hover:text-primary-400 transition-colors duration-200"
              >
                Featured Products
              </a>
              <a
                href="#about"
                className="block text-secondary-300 hover:text-primary-400 transition-colors duration-200"
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-secondary-300 hover:text-primary-400 transition-colors duration-200"
              >
                All Products
              </a>
              <a
                href="#"
                className="block text-secondary-300 hover:text-primary-400 transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Categories</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-secondary-300 hover:text-primary-400 transition-colors duration-200"
              >
                Lighting
              </a>
              <a
                href="#"
                className="block text-secondary-300 hover:text-primary-400 transition-colors duration-200"
              >
                Textiles
              </a>
              <a
                href="#"
                className="block text-secondary-300 hover:text-primary-400 transition-colors duration-200"
              >
                Decor
              </a>
              <a
                href="#"
                className="block text-secondary-300 hover:text-primary-400 transition-colors duration-200"
              >
                Kitchen
              </a>
              <a
                href="#"
                className="block text-secondary-300 hover:text-primary-400 transition-colors duration-200"
              >
                Garden
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-400" />
                <span className="text-secondary-300">hello@luxora.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-400" />
                <span className="text-secondary-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-primary-400" />
                <span className="text-secondary-300">
                  123 Design Street<br />
                  New York, NY 10001
                </span>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-2">
              <h5 className="font-medium">Business Hours</h5>
              <div className="text-sm text-secondary-300 space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-400 text-sm">
              © 2024 Luxora. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-secondary-400 hover:text-primary-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-secondary-400 hover:text-primary-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-secondary-400 hover:text-primary-400 transition-colors duration-200"
              >
                Return Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer