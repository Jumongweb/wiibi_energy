import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/logo.svg'

const Navbar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => {
    if (path === '/packages') {
      return location.pathname.startsWith('/packages')
    }
    return location.pathname === path
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className='fixed top-0 left-0 right-0 bg-white z-50'>
      {/* Main Navbar */}
      <div className='flex items-center justify-between px-4 md:px-8 lg:px-20 py-6'>
        {/* Logo */}
        <div className='flex gap-2 items-center'>
          <img src={Logo} alt="Wiibi Energy Logo" className='h-8 w-8' />
          <span className='text-lg font-semibold'>Wiibi Energy</span>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex gap-6'>
          <Link
            to="/"
            className={`pb-1 border-b-2 transition-colors ${
              isActive('/')
                ? 'text-yellow-400 border-yellow-400'
                : 'text-black border-transparent hover:text-yellow-400'
            }`}
          >
            Home
          </Link>
          <Link
            to="/packages"
            className={`pb-1 border-b-2 transition-colors ${
              isActive('/packages')
                ? 'text-yellow-400 border-yellow-400'
                : 'text-black border-transparent hover:text-yellow-400'
            }`}
          >
            Packages
          </Link>
          <Link
            to="/projects"
            className={`pb-1 border-b-2 transition-colors ${
              isActive('/projects')
                ? 'text-yellow-400 border-yellow-400'
                : 'text-black border-transparent hover:text-yellow-400'
            }`}
          >
            Projects
          </Link>
          <Link
            to="/services"
            className={`pb-1 border-b-2 transition-colors ${
              isActive('/services')
                ? 'text-yellow-400 border-yellow-400'
                : 'text-black border-transparent hover:text-yellow-400'
            }`}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`pb-1 border-b-2 transition-colors ${
              isActive('/about')
                ? 'text-yellow-400 border-yellow-400'
                : 'text-black border-transparent hover:text-yellow-400'
            }`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`pb-1 border-b-2 transition-colors ${
              isActive('/contact')
                ? 'text-yellow-400 border-yellow-400'
                : 'text-black border-transparent hover:text-yellow-400'
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Desktop Button */}
        <div className='hidden md:block'>
          <button className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition-colors">
            Get a Quote
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='p-2 focus:outline-none'
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              </svg>
            ) : (
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden fixed inset-0 bg-yellow-400 z-50 overflow-y-auto'>
          <div>
            <div className='flex justify-end relative top-2'>
              <button
                onClick={toggleMenu}
                className='p-2 focus:outline-none text-white'
                aria-label="Toggle menu"
              >
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
            <div className='flex flex-col py-4'>
              <Link
                to="/"
                onClick={closeMenu}
                className={`px-6 py-3 font-medium hover:bg-yellow-500 transition-colors ${
                  isActive('/')
                    ? 'bg-yellow-500 text-white'
                    : 'text-black'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={closeMenu}
                className={`px-6 py-3 font-medium hover:bg-yellow-500 transition-colors ${
                  isActive('/about')
                    ? 'bg-yellow-500 text-white'
                    : 'text-black'
                }`}
              >
                About Us
              </Link>
              <Link
                to="/services"
                onClick={closeMenu}
                className={`px-6 py-3 font-medium hover:bg-yellow-500 transition-colors ${
                  isActive('/services')
                    ? 'bg-yellow-500 text-white'
                    : 'text-black'
                }`}
              >
                Services
              </Link>
              <Link
                to="/packages"
                onClick={closeMenu}
                className={`px-6 py-3 font-medium hover:bg-yellow-500 transition-colors ${
                  isActive('/packages')
                    ? 'bg-yellow-500 text-white'
                    : 'text-black'
                }`}
              >
                Packages
              </Link>
              <Link
                to="/projects"
                onClick={closeMenu}
                className={`px-6 py-3 font-medium hover:bg-yellow-500 transition-colors ${
                  isActive('/projects')
                    ? 'bg-yellow-500 text-white'
                    : 'text-black'
                }`}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className={`px-6 py-3 font-medium hover:bg-yellow-500 transition-colors ${
                  isActive('/contact')
                    ? 'bg-yellow-500 text-white'
                    : 'text-black'
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
