import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-darkGray text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-semibold">
            <a href="/" className="hover:text-lightOrange">
              CoffeCafe
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover: text-lightOrange">Home</a>
            <a href="#coffees" className="hover: text-lightOrange">Coffees</a>
            <a href="#snacks" className="hover: text-lightOrange">Snacks</a>
            <a href="#flavours" className="hover: text-lightOrange">Flavours</a>
            <a href="#about us" className="hover: text-lightOrange">About us</a>
            
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-2xl">
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="flex flex-col items-center space-y-4 py-4 bg-gray-700">
          <a href="#home" className="hover:text-primary text-lg">Home</a>
          <a href="#coffees" className="hover:text-primary text-lg">Coffees</a>
          <a href="#about" className="hover:text-primary text-lg">About</a>
          <a href="#contact" className="hover:text-primary text-lg">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
