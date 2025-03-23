import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link

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
            <Link to="/" className="hover:text-lightOrange">
              CoffeCafe
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-lightOrange">Home</Link>
            <Link to="/coffees" className="hover:text-lightOrange">Coffees</Link>
            <Link to="/snacks" className="hover:text-lightOrange">Snacks</Link>
            <Link to="/flavours" className="hover:text-lightOrange">Flavours</Link>
            <Link to="/about-us" className="hover:text-lightOrange">About us</Link>
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
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center space-y-4 py-4 bg-gray-700">
          <Link to="/" className="hover:text-primary text-lg">Home</Link>
          <Link to="/coffees" className="hover:text-primary text-lg">Coffees</Link>
          <Link to="/about-us" className="hover:text-primary text-lg">About</Link>
          <Link to="/contact" className="hover:text-primary text-lg">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
