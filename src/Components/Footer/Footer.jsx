import React from 'react';
import Footerlogo from '../../assets/Foot.jpg'; // Ensure path is correct
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaGithub,
  FaApple,
} from 'react-icons/fa';
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
      <div data-aos="zoom-in" className="py-10 mx-auto">
        <div className="flex h-[300px] justify-between items-center space-x-10">
          {/* Company details */}
          <div className="text-center md:text-left px-4 flex-shrink-0">
            <h1 className="text-4xl font-bold text-white">CoffeCafe</h1>
            <p className="text-sm lg:text-xl text-black font-semibold mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, <br /> error eos rerum accusamus cupiditate recusandae.
            </p>
          </div>

          {/* Footer links */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold ml-24 text-black mb-3">Important Links</h1>
            <ul className="flex gap-4">
              {FooterLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="text-black hover:text-primary cursor-pointer hover:translate-x-1 duration-300 text-xl font-semibold"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex-shrink-0">
            <div className="flex gap-6">
              {/* Social Media Links with Colors */}
              <a href="https://www.instagram.com" className="text-3xl text-[#f02e6f]">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com" className="text-3xl text-[#1d559f]">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com" className="text-3xl text-[#36a7e4]">
                <FaLinkedin />
              </a>
              <a href="https://github.com" className="text-3xl text-black">
                <FaGithub />
              </a>
              <a href="https://www.apple.com" className="text-3xl text-[#A2AAAD]">
                <FaApple />
              </a>
            </div>

            <div className="mt-4 flex items-center gap-2 text-black">
              <FaLocationArrow className="text-3xl" />
              <p>Varanasi, Uttar Pradesh</p>
            </div>
            <div className="mt-3 flex items-center gap-2 text-black">
              <FaMobileAlt className="text-3xl" />
              <p>+91 1234567890</p>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex justify-center gap-8 mt-6">
          <FaCcVisa className="text-2xl text-black" />
          <FaCcMastercard className="text-2xl text-black" />
          <FaCcPaypal className="text-2xl text-black" />
        </div>

        {/* App Download Links */}
        <div className="mt-8 flex justify-center">
          <a href="https://apps.apple.com/us/app" className="text-black mx-4 text-xl flex items-center justify-center">
            <FaAppStore className="mr-2 text-[#279eff] mb-4 text-4xl" />
            Download from <span className="font-bold">App Store</span>
          </a>
          <a href="https://play.google.com/store" className="text-black mx-4 text-xl flex items-center justify-center">
            <FaGooglePlay className="mr-2 text-[#2cd659] text-4xl" />
            Get it on <span className="font-bold">Google Play</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-l font-bold text-black">
          <p>© 2025 CoffeCafe. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
