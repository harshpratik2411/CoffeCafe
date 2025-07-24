import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; 
import HeroImage from '../../assets/Hero.jpg'; 
import CoffeImage from '../../assets/coffeCup.png';  
import { IoMenu } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      delay: 200, // Delay for animation
    });
  }, []);

  const scrollToCoffeeSection = () => {
    const coffeeSection = document.getElementById('coffee-section');
    coffeeSection.scrollIntoView({ behavior: 'smooth' });
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative w-full  h-screen bg-cover bg-center" style={{ backgroundImage: `url(${HeroImage})` }}>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
        {/* Hero Title */}
        <h1 
          className="text-6xl mb-4 mt-16 sm:text-2xl md:text-4xl font-bold leading-tight text-lightOrange cursor-pointer tracking-wide text-shadow-md"
          data-aos="fade-up"
        >
          Black Tumbler
        </h1>

        {/* Hero Description */}
        <p 
          className="mt-6 text-lg sm:text-l max-w-xl mx-auto opacity-80"
          data-aos="fade-up"
        >
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
        <p className='lg:text-xl md: text-l sm:text-lg text-lightOrange'  data-aos="fade-up ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis temporibus id enim obcaecati? Mollitia officia recusandae <br />
          qui laudantium quos Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque consequuntur modi <br /> molestiae explicabo! 
          Maxime doloremque ipsa ad nemo, consequatur delectus!
        </p>

        {/* Dropdown Menu */}
        <div className="absolute right-10 top-20 z-20">
          <button
            onClick={toggleDropdown}
            className="bg-white text-black px-4 py-2 mr-2 mb-2 rounded-full font-semibold text-lg transition duration-300"
          >  
            <IoMenu className='text-2xl'/>
          </button>
          {isOpen && (
            <div className="absolute bg-white text-black rounded-md shadow-lg mt-2 p-4 transform transition-transform duration-300 ease-in-out hover:scale-110">
              <ul className="space-y-2">
                <li className="py-2 px-4 mr-6 hover:bg-lightOrange cursor-pointer transition-colors duration-300 ease-in-out transform hover:scale-110">
                  About us
                </li>
                <li className="py-2 px-4 mr-6 hover:bg-lightOrange cursor-pointer transition-colors duration-200 ease-in-out transform hover:scale-110">
                 Coffees
                </li>
                <li className="py-2 px-4 mr-6 hover:bg-lightOrange cursor-pointer transition-colors duration-300 ease-in-out transform hover:scale-110">
                 snacks
                </li>
                <li className="py-2 px-4 mr-6 hover:bg-lightOrange cursor-pointer transition-colors duration-300 ease-in-out transform hover:scale-110">
                  coffee powder
                </li>
                <li className="py-2 px-4 mr-6 hover:bg-lightOrange cursor-pointer transition-colors duration-300 ease-in-out transform hover:scale-110">
                 Contact us 
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Call-to-Action Button */}
        <button
          onClick={scrollToCoffeeSection}
          className="mt-8 px-8 py-3 bg-brown-700 text-lightOrange font-semibold text-lg rounded-full hover:bg-brown-800 transition duration-300"
        >
          Explore Our Coffees
        </button>
      </div>
    </div>
  );
};

export default Hero; 

