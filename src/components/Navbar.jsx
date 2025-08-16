import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/logo.svg'

const Navbar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [message, setMessage] = useState(
    "Hi Wiibi Energy, I'm interested in your solar energy solutions and would like to discuss the best package for me."
  )

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

  const handleSendMessage = () => {
    const phoneNumber = "2348161554409" // Nigeria country code +234
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setIsModalOpen(false)
  }

  return (
    <div className='fixed top-0 left-0 right-0 bg-white z-50'>
      <div className='flex items-center justify-between px-4 md:px-6 lg:px-20 py-6'>
        <div className='flex gap-2 items-center'>
          <img src={Logo} alt="Wiibi Energy Logo" className='h-8 w-8' />
          <span className='text-lg font-semibold whitespace-nowrap'>Wiibi Energy</span>
        </div>

        {/* Desktop Nav Links */}
        <div className='hidden md:flex gap-4 items-center'>
          {[
            { to: "/", label: "Home" },
            { to: "/packages", label: "Packages" },
            { to: "/projects", label: "Projects" },
            { to: "/services", label: "Services" },
            { to: "/about", label: "About Us" },
            { to: "/contact", label: "Contact Us" }
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`pb-1 border-b-2 whitespace-nowrap transition-colors ${
                isActive(to)
                  ? 'text-[#fcb139] border-[#fcb139]'
                  : 'text-black border-transparent hover:text-yellow-400'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <div className='hidden md:block'>
          <button
            className="bg-[#fcb139] text-white px-4 py-2 rounded whitespace-nowrap hover:bg-yellow-500 transition-colors min-w-fit"
            onClick={() => setIsModalOpen(true)}
          >
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
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/packages", label: "Packages" },
                { to: "/projects", label: "Projects" },
                { to: "/contact", label: "Contact Us" }
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={closeMenu}
                  className={`px-6 py-3 font-medium hover:bg-yellow-500 transition-colors whitespace-nowrap ${
                    isActive(to)
                      ? 'bg-yellow-500 text-white'
                      : 'text-black'
                  }`}
                >
                  {label}
                </Link>
              ))}

              {/* Mobile "Get a Quote" button */}
              <div className="px-6 mt-4">
                <button
                  className="w-full bg-[#fcb139] text-white px-4 py-2 rounded whitespace-nowrap hover:bg-yellow-500 transition-colors"
                  onClick={() => {
                    closeMenu()
                    setIsModalOpen(true)
                  }}
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full relative">
            <h2 className="text-lg font-semibold mb-4">Message Wiibi Energy</h2>

            <textarea
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-[#fcb139] text-white hover:bg-yellow-500"
                onClick={handleSendMessage}
              >
                Send via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
