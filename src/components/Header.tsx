import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, User, Menu, X, Settings, LogOut, Shield } from 'lucide-react'
import { cn } from '../lib/utils'
import { useAuth, LoginModal } from '../contexts/AuthContext'
import NavLink from './NavLink'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const { user, logout, isAuthenticated } = useAuth()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/#products', label: 'Products' },
    { to: '/about', label: 'About' },
  ]

  const handleDashboardAccess = () => {
    if (isAuthenticated && user?.role === 'admin') {
      window.location.href = '/admin'
    } else {
      setLoginModalOpen(true)
    }
  }

  const handleLogout = () => {
    logout()
    setUserMenuOpen(false)
  }

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-500 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      <header className="bg-white dark:bg-secondary-800 shadow-sm border-b border-secondary-200 dark:border-secondary-700 sticky top-0 z-50" role="banner">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link 
              to="/" 
              className="font-bold text-2xl text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg px-2 py-1"
              aria-label="Luxora Home"
            >
              Luxora
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="mx-auto flex items-baseline space-x-8" role="menubar">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    label={link.label}
                    activeClassName="text-primary-500"
                  />
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Dashboard Access Button */}
              <button
                onClick={handleDashboardAccess}
                className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-secondary-100 dark:bg-secondary-700 hover:bg-primary-500 hover:text-white focus:bg-primary-500 focus:text-white text-secondary-700 dark:text-secondary-300 dark:hover:text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                title="Access Dashboard"
                aria-label="Access admin dashboard"
              >
                <Settings size={16} aria-hidden="true" />
                <span>Dashboard</span>
              </button>

              {/* Shopping Cart */}
              <Link 
                to="/cart" 
                className="group relative p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-700 focus:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200"
                aria-label={`Shopping cart with ${2} items`}
              >
                <ShoppingCart size={20} className="text-secondary-600 dark:text-secondary-400 group-hover:text-primary-500 transition-colors duration-200" aria-hidden="true" />
                <span 
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary-500 text-primary-foreground text-xs font-bold flex items-center justify-center"
                  aria-label="2 items in cart"
                >
                  2
                </span>
              </Link>

              {/* User Menu */}
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center space-x-2 p-2 rounded-lg text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 focus:text-primary-500 hover:bg-secondary-100 dark:hover:bg-secondary-700 focus:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
                    aria-expanded={userMenuOpen}
                    aria-haspopup="true"
                    aria-label={`User menu for ${user?.name}`}
                  >
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium" aria-hidden="true">
                        {user?.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="hidden sm:block text-sm font-medium">
                      {user?.name}
                    </span>
                  </button>

                  {/* User Dropdown */}
                  {userMenuOpen && (
                    <div 
                      className="absolute right-0 mt-2 w-48 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700 py-2 z-50"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                    >
                      <div className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                        <p className="text-sm font-medium text-secondary-900 dark:text-white">
                          {user?.name}
                        </p>
                        <p className="text-xs text-secondary-500 dark:text-secondary-400">
                          {user?.email}
                        </p>
                        <p className="text-xs text-primary-600 dark:text-primary-400 capitalize">
                          {user?.role}
                        </p>
                      </div>
                      
                      {user?.role === 'admin' && (
                        <Link
                          to="/admin"
                          className="flex items-center space-x-2 px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-700 focus:bg-secondary-100 focus:outline-none transition-colors duration-200"
                          role="menuitem"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <Shield size={16} aria-hidden="true" />
                          <span>Admin Dashboard</span>
                        </Link>
                      )}
                      
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-700 focus:bg-secondary-100 focus:outline-none transition-colors duration-200 text-left"
                        role="menuitem"
                      >
                        <LogOut size={16} aria-hidden="true" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setLoginModalOpen(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  aria-label="Sign in to your account"
                >
                  <User size={16} aria-hidden="true" />
                  <span className="hidden sm:block">Sign In</span>
                </button>
              )}

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 focus:text-primary-500 hover:bg-secondary-100 dark:hover:bg-secondary-700 focus:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors duration-200"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-expanded={mobileOpen}
                  aria-label={mobileOpen ? "Close mobile menu" : "Open mobile menu"}
                  aria-controls="mobile-menu"
                >
                  {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileOpen && (
            <div 
              id="mobile-menu"
              className="md:hidden border-t border-secondary-200 dark:border-secondary-700 pt-4 pb-3 space-y-3"
              role="menu"
              aria-label="Mobile navigation menu"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  label={link.label}
                  activeClassName="text-primary-500"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-base"
                />
              ))}
              
              {/* Mobile Dashboard Button */}
              <button
                onClick={() => {
                  handleDashboardAccess()
                  setMobileOpen(false)
                }}
                className="flex items-center space-x-2 w-full px-3 py-2 text-secondary-700 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400 focus:text-primary-500 hover:bg-secondary-100 dark:hover:bg-secondary-700 focus:bg-secondary-100 rounded-md text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-left"
                role="menuitem"
                aria-label="Access admin dashboard"
              >
                <Settings size={20} aria-hidden="true" />
                <span>Dashboard</span>
              </button>
              
              {/* Mobile Auth */}
              {!isAuthenticated && (
                <button
                  onClick={() => {
                    setLoginModalOpen(true)
                    setMobileOpen(false)
                  }}
                  className="flex items-center space-x-2 w-full px-3 py-2 bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-left"
                  role="menuitem"
                  aria-label="Sign in to your account"
                >
                  <User size={20} aria-hidden="true" />
                  <span>Sign In</span>
                </button>
              )}
            </div>
          )}
        </nav>
      </header>

      {/* Login Modal */}
      <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />

      {/* Click outside to close user menu */}
      {userMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setUserMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Header