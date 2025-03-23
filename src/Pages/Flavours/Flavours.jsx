import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Coffee1 from '../../assets/Middle/Coffee1.jpg'
import Coffee2 from '../../assets/Middle/Coffee2.jpg'
import Coffee4 from '../../assets/Middle/Coffee4.jpg'
import Coffee5 from '../../assets/Middle/Coffee5.jpg'
import Coffee6 from '../../assets/Middle/Coffee6.jpg'

// Array of imported images
const coffeeImages = [Coffee1, Coffee2, Coffee4, Coffee5, Coffee6 ];

const Flavours = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleOrderClick = () => {
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000); // Popup will disappear after 3 seconds
  };

  const coffeeData = [
    {
      name: "Espresso",
      description:
        "A strong and bold coffee made from finely ground beans. Perfect for those who love a robust, no-nonsense coffee experience.",
      calories: 2,
      flavours: ["Vanilla", "Caramel", "Hazelnut", "Mocha", "Almond"],
      segments: ["Black", "Double", "Single"],
    },
    {
      name: "Latte",
      description:
        "A creamy coffee with a strong espresso base topped with steamed milk. Smooth and velvety with a light foam finish.",
      calories: 150,
      flavours: ["Vanilla", "Chocolate", "Strawberry", "Maple", "Lavender"],
      segments: ["Hot", "Iced"],
    },
    {
      name: "Cappuccino",
      description:
        "A balanced coffee with equal parts espresso, steamed milk, and foam. It's the perfect combination of bold and creamy.",
      calories: 120,
      flavours: ["Hazelnut", "Caramel", "Cinnamon", "Irish Cream", "Coconut"],
      segments: ["Hot", "Iced"],
    },
    {
      name: "Frappe",
      description:
        "A cold, frothy iced coffee blended with ice and your choice of flavors. A refreshing and energizing drink for any time of day.",
      calories: 200,
      flavours: ["Chocolate", "Mint", "Coffee", "Matcha", "Peanut Butter"],
      segments: ["Frozen", "Blended"],
    },
    {
      name: "Flat White",
      description:
        "A velvety smooth coffee with a silky texture and a perfect ratio of espresso to steamed milk. The perfect combination of strong and creamy.",
      calories: 180,
      flavours: ["Caramel", "Honey", "Cinnamon", "Vanilla", "Salted Caramel"],
      segments: ["Hot"],
    },
  ];

  // Function to get a random coffee image
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * coffeeImages.length);
    return coffeeImages[randomIndex];
  };

  return ( 
    <> 
    <Navbar/>
    <div className="min-h-screen bg-gray-50 p-8">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
        <h1 className="text-5xl font-bold text-yellow-300 mb-4">Our Flavours</h1>
        <p className="text-lg text-gray-600">Explore our wide variety of coffees and flavours, each with its own unique experience!</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {coffeeData.map((coffee, index) => (
          <motion.div
          key={index}
          className="bg-white p-6 rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 * index }}
          >
            {/* Random image for each coffee */}
            <div className="mb-4">
              <motion.img
                src={getRandomImage()}
                alt={coffee.name}
                className="w-full h-64 object-cover rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                />
            </div>

            <h2 className="text-3xl font-semibold text-gray-800">{coffee.name}</h2>
            <p className="text-gray-600 mt-2">{coffee.description}</p>
            <p className="text-gray-500 mt-4">Calories: {coffee.calories}</p>
            <p className="text-gray-500 mt-2">Flavors: {coffee.flavours.join(", ")}</p>
            <p className="text-gray-500 mt-2">Segments: {coffee.segments.join(", ")}</p>

            <button
              onClick={handleOrderClick}
              className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
              >
              Order Now
            </button>
          </motion.div>
        ))}
      </div>

      {showThankYou && (
        <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-green-500">Thank You!</h2>
            <p className="text-black font-bold text-xl mt-2">Your order has been placed successfully. We will notify you soon!</p>
          </div>
        </motion.div>
      )}
    </div> 
    <Footer/>
      </> 
  );
};

export default Flavours;
