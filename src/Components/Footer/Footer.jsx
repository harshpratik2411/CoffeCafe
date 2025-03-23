import React from 'react';
import Footerlogo from '../../assets/Foot.jpg'; // Ensure path is correct
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, FaGithub, FaApple } from 'react-icons/fa';
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa'; // Add payment methods icons
import { FaGooglePlay, FaAppStore } from 'react-icons/fa'; // Add App Store and Google Play icons

// Inline style for the footer background
const BannerImg = {
  backgroundImage: `url(${Footerlogo})`, // Correct syntax for string interpolation
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
};

const FooterLinks = [
  { title: 'Home', link: '/#' },
  { title: 'Coffees', link: '/#coffees' },
  { title: 'Snacks', link: '/#snacks' },
  { title: 'Flavours', link: '/#flavours' },
  { title: 'About us', link: '/#about us' },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-black">
      <div data-aos="fade-up" data-aos-duration="1000" className="py-16 mx-auto max-w-screen-xl">
        {/* Main Footer Layout */}
        <div className="grid md:grid-cols-3 gap-12 px-6">

          {/* Company Details */}
          <div data-aos="fade-up" data-aos-duration="1500" className="flex flex-col items-center md:items-start space-y-6">
            <h1 className="text-5xl font-bold text-white">CoffeCafe</h1>
            <p className="text-sm lg:text-lg text-black font-semibold text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, error eos rerum accusamus cupiditate recusandae.
            </p>
          </div>

          {/* Footer Links */}
          <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-col items-center md:items-start space-y-4">
            <h2 className="text-xl font-bold text-white mb-4">Important Links</h2>
            <ul className="flex flex-wrap justify-center md:justify-start gap-6">
              {FooterLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="text-white hover:text-primary cursor-pointer hover:translate-x-1 duration-300 text-xl font-semibold"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Links */}
          <div data-aos="fade-up" data-aos-duration="2500" className="flex flex-col items-center md:items-start space-y-6">
            {/* Social Media Links */}
            <div className="flex gap-6 justify-center md:justify-start">
              <a href="https://www.instagram.com" className="text-4xl text-[#f02e6f] hover:text-[#db2476] duration-300">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com" className="text-4xl text-[#1d559f] hover:text-[#0a4287] duration-300">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com" className="text-4xl text-[#36a7e4] hover:text-[#2a90c8] duration-300">
                <FaLinkedin />
              </a>
              <a href="https://github.com" className="text-4xl text-black hover:text-[#333] duration-300">
                <FaGithub />
              </a>
              <a href="https://www.apple.com" className="text-4xl text-[#A2AAAD] hover:text-[#8f9599] duration-300">
                <FaApple />
              </a>
            </div>

            {/* Location & Contact Info */}
            <div className="flex items-center justify-center md:justify-start gap-2 text-white">
              <FaLocationArrow className="text-2xl" />
              <p>Varanasi, Uttar Pradesh</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-white">
              <FaMobileAlt className="text-2xl" />
              <p>+91 1234567890</p>
            </div>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div data-aos="fade-up" data-aos-duration="3000" className="flex justify-center gap-8 mt-12">
          <FaCcVisa className="text-3xl text-white hover:text-[#005cbf] duration-300" />
          <FaCcMastercard className="text-3xl text-white hover:text-[#d23434] duration-300" />
          <FaCcPaypal className="text-3xl text-white hover:text-[#003b6b] duration-300" />
        </div>

        {/* App Download Links Section */}
        <div data-aos="fade-up" data-aos-duration="3500" className="mt-12 flex justify-center gap-8">
          <a href="https://apps.apple.com/us/app" className="text-white mx-4 text-xl flex items-center justify-center hover:text-[#279eff] duration-300">
            <FaAppStore className="mr-2 text-[#279eff] text-4xl" />
            Download from <span className="font-bold">App Store</span>
          </a>
          <a href="https://play.google.com/store" className="text-white mx-4 text-xl flex items-center justify-center hover:text-[#2cd659] duration-300">
            <FaGooglePlay className="mr-2 text-[#2cd659] text-4xl" />
            Get it on <span className="font-bold">Google Play</span>
          </a>
        </div>

        {/* Copyright Section */}
        <div data-aos="fade-up" data-aos-duration="4000" className="mt-12 text-center text-lg font-bold text-white">
          <p>© 2025 CoffeCafe. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
