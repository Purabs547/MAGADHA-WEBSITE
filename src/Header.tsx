"use client"

import React, { useState } from "react"
import { Menu, X } from "lucide-react"

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-700/40 bg-transparent">
      <div className="flex items-center justify-between px-6 py-4 lg:px-10 max-w-full mx-auto">
        {/* Left Section: Logo + Nav */}
        <div className="flex items-center gap-8 lg:gap-12">
          {/* Logo */}
          <img
            src="/magadha-logo.png"
            alt="Magadha Logo"
            className="object-contain w-12 h-12 md:w-14 md:h-14"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            <a
              href="/"
              className="flex items-center gap-2 text-sm lg:text-base text-gray-200 hover:text-yellow-400 transition-colors duration-200"
            >
              <img src="/homeicon.svg" className="w-5 h-5" alt="Home" />
              <span>Home</span>
            </a>
            <a
              href="/category"
              className="flex items-center gap-2 text-sm lg:text-base text-gray-200 hover:text-yellow-400 transition-colors duration-200"
            >
              <img src="/Gameicon.svg" className="w-5 h-5" alt="Game" />
              <span>Game</span>
            </a>
            <a
              href="/portfolio"
              className="flex items-center gap-2 text-sm lg:text-base text-gray-200 hover:text-yellow-400 transition-colors duration-200"
            >
              <img src="/portfolioicon.svg" className="w-5 h-5" alt="Portfolio" />
              <span>Portfolio</span>
            </a>
          </nav>
        </div>

        {/* Right Section (Desktop) */}
        <div className="hidden md:flex gap-16">
          {/* Left Block - Steam */}
          <div className="flex flex-col items-center -ml-4">
            <div className="relative group">
              <a
                href="#wishlist"
                className="text-xs lg:text-sm text-gray-100 hover:text-yellow-400 transition-colors duration-200 font-medium mb-2 block"
              >
                <span className="group-hover:opacity-0 transition-opacity duration-200">Wishlist Now</span>
                <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-yellow-400">
                ComingSoon
                </span>
              </a>
            </div>
            <a href="#steam" className="transition-opacity hover:opacity-80">
              <img
                src="/steamheader.svg"
                className="w-12 lg:w-20 h-auto"
                alt="Steam"
              />
            </a>
          </div>

          {/* Right Block - Epic Games Store */}
          <div className="flex flex-col items-center">
            <div className="relative group">
              <a
                href="#wishlist"
                className="text-xs lg:text-sm text-gray-100 hover:text-yellow-400 transition-colors duration-200 font-medium mb-2 block"
              >
                <span className="group-hover:opacity-0 transition-opacity duration-200">Wishlist Now</span>
                <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-yellow-400 ">
                ComingSoon
                </span>
              </a>
            </div>
            <a href="#epic" className="transition-opacity hover:opacity-80 ">
              <img
                src="/storeheader.svg"
                className="w-12 lg:w-20 h-auto"
                alt="Epic Games Store"
              />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-yellow-400 hover:text-yellow-300 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-black/90 backdrop-blur-md border-t border-gray-700/40 transform transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-4 py-6 px-6">
          <a
            href="/"
            className="flex items-center gap-2 text-gray-200 hover:text-yellow-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <img src="/homeicon.svg" className="w-5 h-5" alt="Home" />
            <span>Home</span>
          </a>
          <a
            href="/category"
            className="flex items-center gap-2 text-gray-200 hover:text-yellow-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <img src="/Gameicon.svg" className="w-5 h-5" alt="Game" />
            <span>Game</span>
          </a>
          <a
            href="/portfolio"
            className="flex items-center gap-2 text-gray-200 hover:text-yellow-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <img src="/portfolioicon.svg" className="w-5 h-5" alt="Portfolio" />
            <span>Portfolio</span>
          </a>

          <div className="flex flex-col items-center gap-3 pt-4 border-t border-gray-700/40">
            <div className="relative group">
              <a
                href="#wishlist"
                className="text-sm text-gray-100 hover:text-yellow-400 transition-colors font-medium block"
                onClick={() => setMenuOpen(false)}
              >
                <span className="group-hover:opacity-0 transition-opacity duration-200">Wishlist Now</span>
                <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-yellow-400">
                  Coming Soon
                </span>
              </a>
            </div>
            <div className="flex gap-6">
              <a href="#steam" className="transition-opacity hover:opacity-80">
                <img
                  src="/steamheader.svg"
                  className="w-8 h-auto"
                  alt="Steam"
                />
              </a>
              <a href="#epic" className="transition-opacity hover:opacity-80">
                <img
                  src="/storeheader.svg"
                  className="w-8 h-auto"
                  alt="Epic Games Store"
                />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header