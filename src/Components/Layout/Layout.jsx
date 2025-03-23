import React from 'react';
import { Outlet } from 'react-router-dom';
import Hero from  '../Hero/Hero'
import Services from '../services/Services'
import WhereToBuy from '../WhereToBuy/WhereToBuy';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner/Banner2'; 

const Layout = () => {
  return (
    <>
      <Navbar />
       <Hero/>
       <Services/>
       <WhereToBuy/>
       <Banner/>
       <Banner2/>
      <Footer />
    </>
  );
};

export default Layout;
