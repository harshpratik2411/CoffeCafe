import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer';

// Import images from the assets folder
import Coffee1 from '../../assets/Middle/Coffee1.jpg'
import Coffee2 from '../../assets/Middle/Coffee2.jpg'
import Coffee4 from '../../assets/Middle/Coffee4.jpg'
import Coffee5 from '../../assets/Middle/Coffee5.jpg'
import Coffee6 from '../../assets/Middle/Coffee6.jpg'

// Original coffee data
const originalCoffees = [
  { name: 'Coffee1', price: 250, discountPrice: 225, description: 'Espresso is a concentrated form of coffee...', image: Coffee1 },
  { name: 'Coffee2', price: 250, discountPrice: 225, description: 'Espresso is a concentrated form of coffee...', image: Coffee2 },
  { name: 'Coffee4', price: 250, discountPrice: 225, description: 'Espresso is a concentrated form of coffee...', image: Coffee4 },
  { name: 'Coffee5', price: 250, discountPrice: 225, description: 'Espresso is a concentrated form of coffee...', image: Coffee5 },
  { name: 'Coffee6', price: 250, discountPrice: 225, description: 'Espresso is a concentrated form of coffee...', image: Coffee6 },
];

// Function to generate more coffee items
const generateCoffees = (numItems) => {
  const expandedCoffees = [];
  
  for (let i = 0; i < numItems; i++) {
    const randomCoffee = originalCoffees[i % originalCoffees.length]; // Repeat the items in cycle
    expandedCoffees.push(randomCoffee);
  }

  return expandedCoffees;
};

const Coffees = () => {
  const [orderComplete, setOrderComplete] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);

  const addToCart = (coffee) => {
    setCart([...cart, coffee]);
  };

  const handleOrder = () => {
    setOrderComplete(true);
    setTimeout(() => {
      setOrderComplete(false);
      setCart([]);
    }, 5000); // Reset the cart and hide the popup after 5 seconds
  };

  const handleCartClose = () => {
    setShowCartModal(false);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, coffee) => total + coffee.discountPrice, 0);
  };

  // Generate a total of 20 coffee items (5 images repeated)
  const coffees = generateCoffees(20);

  return ( 
  <>  
  <Navbar/>
    <div className="p-6 bg-gray-100  min-h-screen">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold text-yellow-300"> CoffeeCafe</h1>
        <p className="mt-4 text-xl text-gray-400">Indulge in a cup of perfection. Choose your coffee below.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 mt-8">
        {coffees.map((coffee, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-110 transition-all duration-500 ease-in-out"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <img
              src={coffee.image}
              alt={coffee.name}
              className="w-full  transform hover:scale-110 transition-all duration-500 ease-in-out h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold  text-gray-800">{coffee.name}</h3>
              <p className="mt-2 text-gray-500">{coffee.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-red-500 line-through">₹{coffee.price}</span>
                  <span className="text-lg font-bold text-green-500">₹{coffee.discountPrice}</span>
                </div>
                <button
                  onClick={() => addToCart(coffee)}
                  className="px-6 py-2 bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cart Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => setShowCartModal(true)}
          className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700"
        >
          View Cart ({cart.length})
        </button>
      </div>

      {/* Order Completion Pop-up */}
      {orderComplete && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-xl text-center text-gray-800">
            <motion.h2
              className="text-2xl font-semibold"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              Your order has been completed!
            </motion.h2>
            <motion.p
              className="mt-2 text-xl"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              Thank you for choosing CoffeeCafe! We hope you enjoy your coffee!
            </motion.p>
          </div>
        </motion.div>
      )}

      {/* Cart Modal */}
      {showCartModal && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl text-center text-white w-96">
            <h2 className="text-3xl font-semibold mb-6">Your Cart</h2>
            {cart.length > 0 ? (
              <div>
                <ul className="space-y-4 text-left">
                  {cart.map((coffee, index) => (
                    <li key={index} className="border-b border-gray-600 pb-2">
                      <h3 className="font-semibold">{coffee.name}</h3>
                      <p className="text-gray-400">{coffee.description}</p>
                      <p className="mt-2 text-lg font-bold text-green-500">₹{coffee.discountPrice}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex justify-between items-center">
                  <div className="text-lg font-semibold text-white">
                    Total: ₹{calculateTotalPrice()}
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={handleOrder}
                      className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500"
                    >
                      Complete Order
                    </button>
                    <button
                      onClick={handleCartClose}
                      className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-xl text-gray-400">Your cart is empty.</p>
            )}
          </div>
        </motion.div>
      )}
    </div>  
<Footer/>
    </> 
  );
};

export default Coffees;
