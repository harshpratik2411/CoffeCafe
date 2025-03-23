import React, { useState } from "react";
import { motion } from "framer-motion";  
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Snacks1 from '../../assets/Snacks/Snacks1.jpg';
import Snacks2 from '../../assets/Snacks/Snacks2.jpg';
import Snacks3 from '../../assets/Snacks/Snacks3.jpg';
import Snacks4 from '../../assets/Snacks/Snacks4.jpg';
import Snacks5 from '../../assets/Snacks/Snacks5.jpg';

const snackImages = [Snacks1, Snacks2, Snacks3, Snacks4, Snacks5];

const snacksMenu = [
  { id: 1, name: "Chocolate Chip Cookies", description: "Freshly baked and gooey, served with love.", price: "$2.99", category: "Sweet" },
  { id: 2, name: "Donut Holes", description: "Light and fluffy, coated with powdered sugar.", price: "$1.99", category: "Sweet" },
  { id: 3, name: "Chips & Salsa", description: "Crispy chips served with tangy salsa. A perfect pairing.", price: "$3.49", category: "Savory" },
  { id: 4, name: "Brownie Bites", description: "Rich, fudgy chocolate bites for your sweet tooth.", price: "$2.49", category: "Sweet" },
  { id: 5, name: "Fruit Salad", description: "A refreshing mix of seasonal fruits to keep you refreshed.", price: "$4.99", category: "Healthy" },
  { id: 6, name: "Veg Sandwich", description: "Crispy bread stuffed with fresh veggies and creamy mayo.", price: "$5.49", category: "Savory" },
  { id: 7, name: "Cheese Toast", description: "Golden crispy toast topped with melted cheese.", price: "$3.99", category: "Savory" },
  { id: 8, name: "Paneer Tikka", description: "Crispy grilled paneer with a smoky flavor.", price: "$6.99", category: "Savory" },
  { id: 9, name: "Chocolate Brownie", description: "Delicious chocolate brownie with a warm, gooey center.", price: "$3.29", category: "Sweet" },
  { id: 10, name: "Mango Smoothie", description: "Creamy and chilled mango smoothie to refresh your day.", price: "$3.99", category: "Drinks" },
];

const Snacks = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (snack) => {
    setCart((prevCart) => [...prevCart, snack]);
  };

  const placeOrder = () => {
    setOrderPlaced(true); 
    setCart([]); // Clear the cart after order is placed
  };

  const filteredSnacks = selectedCategory === "All" ? snacksMenu : snacksMenu.filter(snack => snack.category === selectedCategory);
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * snackImages.length);
    return snackImages[randomIndex];
  };

  return (  
    <> 
   <Navbar/>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <motion.div
        className="bg-white shadow-xl rounded-lg p-8 max-w-7xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
        <h2 className="text-5xl font-bold text-center text-[#FFBC00] mb-8">
          CoffeeCafe Day Snack Menu
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center space-x-6 mb-8">
          <button
            className={`px-6 py-3 rounded-full text-lg font-semibold ${selectedCategory === "All" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"} transition duration-300`}
            onClick={() => setSelectedCategory("All")}
            >
            All
          </button>
          <button
            className={`px-6 py-3 rounded-full text-lg font-semibold ${selectedCategory === "Sweet" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"} transition duration-300`}
            onClick={() => setSelectedCategory("Sweet")}
            >
            Sweet
          </button>
          <button
            className={`px-6 py-3 rounded-full text-lg font-semibold ${selectedCategory === "Savory" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"} transition duration-300`}
            onClick={() => setSelectedCategory("Savory")}
            >
            Savory
          </button>
          <button
            className={`px-6 py-3 rounded-full text-lg font-semibold ${selectedCategory === "Healthy" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"} transition duration-300`}
            onClick={() => setSelectedCategory("Healthy")}
            >
            Healthy
          </button>
        </div>

        {/* Snacks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {filteredSnacks.map((snack) => (
            <motion.div
            key={snack.id}
            className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center">
                <img
                  src={getRandomImage()}
                  alt={snack.name}
                  className="w-full h-48 object-cover rounded-lg mb-6 shadow-lg"
                  />
                <h3 className="text-xl font-semibold text-gray-700 text-center">{snack.name}</h3>
                <motion.span
                  className="text-lg text-green-600 mt-2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  >
                  {snack.price}
                </motion.span>
              </div>
              <p className="text-gray-600 mt-2 text-center">{snack.description}</p>

              {/* Add to Cart Button */}
              <button
                className="mt-4 bg-[#FFBC00] hover:bg-[#ff9e00] text-white font-bold py-2 px-4 rounded-full w-full transition duration-300"
                onClick={() => addToCart(snack)}
                >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>

        {/* Order Now Button & Cart */}
        {cart.length > 0 && !orderPlaced && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={placeOrder}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
              >
              Order Now
            </button>
          </div>
        )}

        {/* After Order Confirmation */}
        {orderPlaced && (
          <div className="mt-12 text-center">
            <h3 className="text-3xl font-semibold text-green-600">Thank You for Your Order!</h3>
            <p className="text-lg text-gray-600 mt-4">Your order has been placed successfully. We'll get it ready for you soon!</p>
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-700">Your Cart:</h4>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-lg">
                <ul>
                  {cart.map((item, index) => (
                    <li key={index} className="text-gray-700 flex justify-between py-2">
                      <span>{item.name}</span>
                      <span>{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div> 
    <Footer/>
        </>
  );
};

export default Snacks;
