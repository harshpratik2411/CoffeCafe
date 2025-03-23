import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';  
import 'aos/dist/aos.css';   
import Navbar from './Components/Navbar/Navbar'; 
import Footer from './Components/Footer/Footer';
import Layout from './Components/Layout/Layout';
import Coffees from './Pages/Coffees/Coffees';
import Snacks from './Pages/Snacks/Snacks';
import Flavours from './Pages/Flavours/Flavours';
import ContactUs from './Pages/ContactUs/ContactUs';
import AboutUs from './Pages/About/AboutUs';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      delay: 200, // Set the animation delay
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/coffees" element={<Coffees />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/flavours" element={<Flavours />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* Additional Routes */}
      </Routes>
    </Router>
  );
};

export default App;
