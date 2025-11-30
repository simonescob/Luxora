import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '../lib/utils'

interface NavLinkProps {
  to: string
  label: string
  className?: string
  activeClassName?: string
  onClick?: () => void
  ariaLabel?: string
  role?: string
}

const NavLink: React.FC<NavLinkProps> = ({
  to,
  label,
  className,
  activeClassName = 'text-primary-500',
  onClick,
  ariaLabel,
  role = 'menuitem'
}) => {
  const location = useLocation()
  const isActive = location.pathname === to || location.hash === to

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (to.startsWith('/#')) {
      e.preventDefault()
      const targetId = to.replace('/#', '')
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
    onClick?.()
  }

  return (
    <Link
      to={to}
      className={cn(
        'text-secondary-700 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400 focus:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
        isActive && activeClassName,
        className
      )}
      role={role}
      aria-label={ariaLabel || `Navigate to ${label} section`}
      aria-current={isActive ? 'page' : undefined}
      onClick={handleClick}
    >
      {label}
    </Link>
  )
}

export default NavLink