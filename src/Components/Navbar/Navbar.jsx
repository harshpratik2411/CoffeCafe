import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-darkGray text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold transition-transform duration-300 transform hover:scale-105">
            <Link to="/" className="hover:text-lightOrange">
              CoffeCafe
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-lightOrange transition-colors duration-300">Home</Link>
            <Link to="/coffees" className="hover:text-lightOrange transition-colors duration-300">Coffees</Link>
            <Link to="/snacks" className="hover:text-lightOrange transition-colors duration-300">Snacks</Link>
            <Link to="/flavours" className="hover:text-lightOrange transition-colors duration-300">Flavours</Link>
            <Link to="/aboutus" className="hover:text-lightOrange transition-colors duration-300">About us</Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-3xl text-lightOrange transition-transform duration-300 hover:scale-110">
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <div className="flex flex-col items-center  text-xl space-y-4 py-6 bg-gray-800">
          <Link to="/" className="hover:text-lightOranger hover:scale-110 text-xl transition-colors duration-300">Home</Link>
          <Link to="/coffees" className="hover:text-lightOrange  transform hover:scale-110 text-xl transition-colors duration-300">Coffees</Link>
          <Link to="/snacks" className="hover:text-lightOrange  transform hover:scale-110 text-xl transition-colors duration-300">Snacks</Link>
          <Link to="/aboutus" className="hover:text-lightOrange  transform hover:scale-110 text-xl transition-colors duration-300">About us</Link>
          <Link to="/flavours" className="hover:text-lightOrange transform hover:scale-110 text-xl transition-colors duration-300">Flavours</Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
