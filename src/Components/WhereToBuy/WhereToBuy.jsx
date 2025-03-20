import React, { useState } from 'react';
import { motion } from 'framer-motion';
import World from '../../assets/World.png';

const WhereToBuy = () => {
  // List of available countries
  const availableCountries = [
    'USA', 'Canada', 'Germany', 'UK', 'France', 'Italy', 'Spain', 'Australia', 
    'Brazil', 'Mexico', 'India', 'Japan', 'South Korea', 'China', 'South Africa',
    'Colombia', 'Ethiopia', 'Argentina', 'Chile', 'Portugal'
  ];

  // List of all countries (30 countries in total)
  const allCountries = [
    'USA', 'Canada', 'Germany', 'UK', 'France', 'Italy', 'Spain', 'Australia', 
    'Brazil', 'Mexico', 'India', 'Japan', 'South Korea', 'China', 'South Africa',
    'Colombia', 'Ethiopia', 'Argentina', 'Chile', 'Portugal', 'Russia', 'Egypt', 
    'Greece', 'Turkey', 'Saudi Arabia', 'New Zealand', 'Singapore', 'Thailand', 
    'Malaysia', 'Vietnam', 'Indonesia'
  ];

  // State for selected country, flavor, availability check, and popup visibility
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedFlavor, setSelectedFlavor] = useState('');
  const [isAvailable, setIsAvailable] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  
  // Handle country selection
  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);

    // Check if the selected country is available
    if (availableCountries.includes(country)) {
      setIsAvailable(true);
    } else {
      setIsAvailable(false);
    }
  };

  // Handle flavor selection
  const handleFlavorChange = (event) => {
    setSelectedFlavor(event.target.value);
  };

  // Place the order and show the popup
  const handlePlaceOrder = () => {
    if (selectedCountry && selectedFlavor) {
      setShowPopup(true);
    } else {
      alert("Please select both a country and a flavor.");
    }
  };

  return (
    <div className="text-center py-12 px-6 bg-gradient-to-r from-gray-600 via-gray-800 to-gray-400 rounded-lg shadow-lg">
      <motion.h1 
        className="text-4xl font-bold text-lightOrange mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Where to Buy
      </motion.h1>

      <motion.p 
        className="text-lg text-white mb-12 font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        See where you can buy our coffee globally:
      </motion.p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        <motion.div 
          className="text-left max-w-lg text-white"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <h3 className="text-xl text-lightOrange font-semibold mb-6">
            Our coffee is sourced from the finest plantations around the world. We partner with local farmers in regions like Colombia, Ethiopia, and Brazil, bringing you the freshest, high-quality beans available. Whether you're looking for a light roast or a bold dark roast, our coffee is carefully crafted to suit every taste and preference.
          </h3>

          <h3 className="font-semibold text-lightOrange text-xl">
            Our global network ensures that you can find our coffee at many locations. From local shops to online retailers, our coffee is ready to be enjoyed wherever you are. Check the map to find the nearest store or delivery option to satisfy your cravings.
          </h3>
        </motion.div>

        <motion.img 
          src={World} 
          alt="Where to Buy Map"
          className="w-[400px] h-[300px] md:w-[600px] md:h-[400px] bg-slate-100 rounded-lg shadow-xl hover:scale-105 transform transition duration-300 ease-in-out"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        />
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-lightOrange mb-4">Select Your Country</h3>
        <select 
          className="px-4 py-2 bg-gray-700 text-white rounded-lg"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="">Select a Country</option>
          {allCountries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>

        {isAvailable !== null && (
          <div className="mt-4">
            {isAvailable ? (
              <>
                <h4 className="text-xl text-lightOrange">Our coffee is available in {selectedCountry}. Now, choose your favorite flavor:</h4>
                <select 
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg mt-2"
                  value={selectedFlavor}
                  onChange={handleFlavorChange}
                >
                  <option value="">Select a Flavor</option>
                  <option value="Light Roast">Light Roast</option>
                  <option value="Medium Roast">Medium Roast</option>
                  <option value="Dark Roast">Dark Roast</option>
                  <option value="Espresso">Espresso</option>
                </select>
                
                <button 
                  className="mt-4 px-6 py-2 bg-white text-black rounded-lg"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
              </>
            ) : (
              <h4 className="text-xl text-red-500">Sorry, we don't serve coffee in {selectedCountry} yet. We will be there soon!</h4>
            )}
          </div>
        )}
      </div>

      {/* Popup for Order Confirmation */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Thank you for your order!</h2>
            <p className="text-lg font-semibold text-gray-800 mb-4">Your order has been placed successfully.</p>
            <p className="text-md font-semibold text-gray-600">Country: {selectedCountry}</p>
            <p className="text-md font-semibold text-gray-600">Flavor: {selectedFlavor}</p>
            <button 
              className="mt-4 px-6 py-2 bg-primary text-white rounded-lg"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhereToBuy;
