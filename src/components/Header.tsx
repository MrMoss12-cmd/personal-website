import { FC, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActiveLink = (path: string) => {
    return location.pathname === path ? "text-blue-400" : "text-gray-300"
  }

  return (
    <header className="bg-gray-900 py-4 sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <Link 
            to="/" 
            className="text-white text-2xl font-bold hover:text-blue-400 transition-colors"
          >
            <span className="text-blue-400">!</span>MrMoss12
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <div className={`md:flex items-center space-x-8 ${isMenuOpen ? 'absolute top-full left-0 right-0 flex flex-col space-y-4 space-x-0 bg-gray-900 p-4 md:relative md:flex-row md:space-y-0 md:p-0' : 'hidden md:flex'}`}>
            <Link to="/" className={`${isActiveLink('/')} hover:text-blue-400 transition-colors font-medium`}>
              Home
            </Link>
            <Link to="/about" className={`${isActiveLink('/about')} hover:text-blue-400 transition-colors font-medium`}>
              About
            </Link>
            <Link to="/portfolio" className={`${isActiveLink('/portfolio')} hover:text-blue-400 transition-colors font-medium`}>
              Portfolio
            </Link>
            <Link to="/contact" className={`${isActiveLink('/contact')} hover:text-blue-400 transition-colors font-medium`}>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header