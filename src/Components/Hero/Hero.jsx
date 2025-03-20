
import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import HeroImage from '../../assets/Hero.jpg'; 
import CoffeImage from '../../assets/coffeCup.png'; 

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToCoffeeSection = () => {
    const coffeeSection = document.getElementById('coffee-section');
    coffeeSection.scrollIntoView({ behavior: 'smooth' });
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${HeroImage})` }}>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
        {/* Hero Title */}
        <h1 className="text-5xl mb-4 sm:text-6xl md:text-7xl font-bold leading-tight text-lightOrange tracking-wide text-shadow-md">
          Black Tumbler
        </h1>

        {/* Hero Description */}
        <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto opacity-80">
          Experience the rich, bold flavors of freshly brewed coffee with the Black Tumbler—your perfect companion.
        </p>

        {/* Coffee Image with Framer Motion Spin Effect */}
        <motion.img
          src={CoffeImage}
          alt="Coffee"
          className="mt-8 w-78 h-auto mx-auto rounded-lg shadow-lg overflow-hidden"
          style={{ objectFit: 'cover' }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
        />

        {/* Dropdown Menu */}
        <div className="absolute right-10 top-20 z-20">
          <button
            onClick={toggleDropdown}
            className="bg-white text-black px-6 py-2 rounded-full font-semibold text-lg transition duration-300"
          >
            More
          </button>
          {isOpen && (
            <div className="absolute bg-white text-black rounded-md shadow-lg mt-2 p-4">
              <ul>
                <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">About Us</li>
                <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Our Coffees</li>
                <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Contact</li>
              </ul>
            </div>
          )}
        </div>

        {/* Call-to-Action Button */}
        <button
          onClick={scrollToCoffeeSection}
          className="mt-8 px-8 py-3 bg-brown-700 text-white font-semibold text-lg rounded-full hover:bg-brown-800 transition duration-300"
        >
          Explore Our Coffees
        </button>
      </div>
    </div>
  );
};

export default Hero;
