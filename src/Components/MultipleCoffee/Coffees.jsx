import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import images from the assets folder
import Coffee1 from '../../assets/Middle/Coffee1.jpg';
import Coffee2 from '../../assets/Middle/Coffee2.jpg';
import Coffee4 from '../../assets/Middle/Coffee4.jpg';
import Coffee5 from '../../assets/Middle/Coffee5.jpg';
import Coffee6 from '../../assets/Middle/Coffee6.jpg';

const Middle = () => {
  // State to handle popup visibility
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle image click (trigger popup)
  const handleOrderSelect = () => {
    setShowPopup(true);

    // Automatically close the popup after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center py-10 space-y-6">
      {/* Product Images with smaller size */}
      <motion.img
        src={Coffee1}
        alt="Coffee 1"
        className="w-4/5 cursor-pointer transform transition-transform duration-300 hover:scale-105"
        onClick={handleOrderSelect}
        whileHover={{ scale: 1.05 }}
      />
      <motion.img
        src={Coffee2}
        alt="Coffee 2"
        className="w-3/5 cursor-pointer transform transition-transform duration-300 hover:scale-105"
        onClick={handleOrderSelect}
        whileHover={{ scale: 1.05 }}
      />
      
      <motion.img
        src={Coffee4}
        alt="Coffee 4"
        className="w-3/5 cursor-pointer transform transition-transform duration-300 hover:scale-105"
        onClick={handleOrderSelect}
        whileHover={{ scale: 1.05 }}
      />
      <motion.img
        src={Coffee5}
        alt="Coffee 5"
        className="w-3/5 cursor-pointer transform transition-transform duration-300 hover:scale-105"
        onClick={handleOrderSelect}
        whileHover={{ scale: 1.05 }}
      />
      <motion.img
        src={Coffee6}
        alt="Coffee 6"
        className="w-3/5 cursor-pointer transform transition-transform duration-300 hover:scale-105"
        onClick={handleOrderSelect}
        whileHover={{ scale: 1.05 }}
      />

      {/* Popup Modal */}
      {showPopup && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white text-center p-6 rounded-lg shadow-lg"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-lg font-semibold text-gray-700">Your order has been selected!</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Middle;
