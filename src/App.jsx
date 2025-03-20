import React, { useEffect } from 'react';
import Hero from './Components/Hero/Hero';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS globally 
import Services from './Components/services/Services'
import WhereToBuy from './Components/WhereToBuy/WhereToBuy';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      delay: 200, // Set the animation delay
    });
  }, []);

  return (
    <div>
      <Hero />  
      <Services/> 
      <WhereToBuy/>
    </div>
  );
};

export default App;
