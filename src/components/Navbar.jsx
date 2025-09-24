import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { Globe, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const navItems = [
    { name: 'HOME', path: '/' },
    { 
      name: 'OUR ASSORTMENT', 
      path: '/assortment', 
      dropdown: [
        { name: 'Food Ingredients', path: '/assortment/food-ingredients' },
        { name: 'Private Label', path: '/assortment/private-label' }
      ] 
    },
    { name: 'WHAT WE DO', path: '/what-we-do' },
    { 
      name: 'OUR QUALITY', 
      path: '/quality', 
      dropdown: [
        { name: 'Certifications', path: '/quality/certifications' },
        { name: 'Services', path: '/quality/process' }
      ] 
    },
    { name: 'SHOP', path: '/shop' },
    { name: 'CONTACT', path: '/contact' }
  ]

  const linkClass = ({ isActive }) =>
    `relative font-bold text-sm after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-[#039be6] after:transition-all after:duration-300 ${
      isActive ? 'text-[#039be6] after:w-full' : 'text-gray-800 hover:text-[#039be6] hover:after:w-full'
    }`

  return (
    <div className="h-[70px] bg-white px-6 md:px-[40px] flex items-center justify-between border-b border-gray-200 relative">
      {/* Logo */}
      <NavLink to="/" className="flex items-center gap-2">
        <img src={logo} alt="logo" className="object-fit h-[40px] w-[40px]" />
        <div className="flex flex-col">
          <h1 className="text-sm font-bold bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
            PUREGROWTH AGRIBUSINESS LIMITED
          </h1>
          <p className="text-[10px] text-gray-500">Trusted manufacturer . Sourcing Partner</p>
        </div>
      </NavLink>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6">
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.name} className={`relative ${item.dropdown ? 'group' : ''}`}>
              <NavLink to={item.path} className={linkClass}>
                {item.name}
              </NavLink>
              {item.dropdown && (
                <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48 z-20">
                  {item.dropdown.map((sub) => (
                    <NavLink 
                      key={sub.name} 
                      to={sub.path} 
                      className={({ isActive }) => `block px-4 py-2 text-sm ${isActive ? 'text-[#039be6]' : 'text-gray-700'} hover:bg-blue-200`}
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Language selector */}
        <div className="relative">
          <button onClick={() => setLangOpen(!langOpen)}>
            <Globe className="text-gray-500 cursor-pointer" />
          </button>
          {langOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md py-2 w-32 z-30">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Français</a>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Hamburger */}
      <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md flex flex-col md:hidden z-40">
          {navItems.map((item) => (
            <div key={item.name}>
              <NavLink to={item.path} className="px-6 py-3 text-sm font-bold text-gray-800 hover:bg-gray-100 block">
                {item.name}
              </NavLink>
              {item.dropdown && (
                <div className="flex flex-col pl-6">
                  {item.dropdown.map((sub) => (
                    <NavLink 
                      key={sub.name} 
                      to={sub.path} 
                      className="py-2 text-sm text-gray-600 hover:bg-blue-200 block"
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Language Selector */}
          <div className="border-t border-gray-200 mt-2">
            <button
              className="px-6 py-3 text-sm font-bold text-gray-800 flex items-center gap-2 hover:bg-gray-100"
              onClick={() => setLangOpen(!langOpen)}
            >
              <Globe className="text-gray-500" />
              Language
            </button>
            {langOpen && (
              <div className="flex flex-col pl-6 pb-2">
                <a href="#" className="py-2 text-sm text-gray-600 hover:bg-gray-100">English</a>
                <a href="#" className="py-2 text-sm text-gray-600 hover:bg-gray-100">Français</a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
