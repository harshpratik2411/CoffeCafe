import React from 'react';
import Banner1 from '../../assets/Banner/Banner1.jpg';
import Banner2 from '../../assets/Banner/Banner2.jpg';
import Banner3 from '../../assets/Banner/Banner3.jpg';
import Banner4 from '../../assets/Banner/Banner4.jpg';
import Banner5 from '../../assets/Banner/Banner5.jpg';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const BannerList = [
  { id: 1, img: Banner1, title: 'Most Demanding' },
  { id: 2, img: Banner2, title: 'Winter Special' },
  { id: 3, img: Banner3, title: 'Buy One Get One Free - Limited Time' },
  { id: 4, img: Banner4, title: 'Exclusive Discounts for Couples' },
  { id: 5, img: Banner5, title: 'New Flavours - Up to 30% Off' },
];

const Banner = () => {
  const settings = {
    dots: true, 
    arrows: false, 
    infinite: true,
    speed: 800, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    pauseOnHover: false, 
    pauseOnFocus: true, 
    cssEase: 'ease-in-out',
  };

  return (  
    <div data-aos="fade-up" className="flex items-center justify-center py-12">
      <div className="w-full sm:w-4/5 flex items-center justify-between space-x-6">
        {/* Text Section */}
        <div data-aos="fade-up"  className="w-1/2 text-center sm:text-left">
          <h1 className='text-5xl  text-primary font-bold leading-tight mb-2'>60% Discount</h1>
          <p className="text-xl font-serif  text-gray-600 mb-4">
          Coffee isn't just a drink—it's an experience that awakens the senses. Whether you savor it black, with a splash of milk, or as a frothy cappuccino, coffee offers a diverse range of flavors to explore. It's the perfect companion for early mornings or late-night study sessions, giving you a boost of energy and clarity. Each cup holds a story, a ritual that transforms an ordinary moment into something extraordinary. Take a sip, take a breath, and enjoy the comfort in every drop. </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-xl transition duration-300 transform hover:scale-105">
         Order now
          </button>
        </div>
        
        {/* Image Carousel */}
        <div className="w-[700px] bg-lightOrange p-4 rounded-lg">
          <Slider {...settings}>
            {BannerList.map((banner) => (
              <div key={banner.id} className="relative">
                {/* Banner Image Container (Box) */}
                <div className="w-full h-[600px] sm:h-[500px] overflow-hidden relative">
                  {/* Banner Image */}
                  <img
                    src={banner.img} 
                    alt={banner.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                  />
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-white p-4 text-center">
                    <h3 className="text-3xl font-bold">{banner.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const SectioBanner = () => {
  return (
    <div className="min-h-[550px] py-12 sm:py-0 flex justify-center items-center">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Left side text section */}
          <div className="w-full sm:w-full text-center sm:text-left px-4">
            <h2 className="text-3xl font-semibold mb-4">Special Offers and Discounts</h2>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
