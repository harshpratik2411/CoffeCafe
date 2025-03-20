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
          <h1 className='text-4xl mb-2'>60% Discount</h1>
          <p className="text-xl font-serif  text-gray-600 mb-4">
            Coffee is more than just a morning pick-me-up; it's a ritual that energizes
            and connects people. Whether you enjoy a bold espresso, a creamy latte, or a
            frothy cappuccino, each cup offers a unique experience. Packed with antioxidants
            and natural stimulants, coffee can enhance focus, improve mood, and boost your
            energy levels throughout the day. Embrace your favorite brew and savor the moment!
          </p>
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
