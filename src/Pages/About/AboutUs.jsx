import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 min-h-screen flex flex-col items-center py-12">
        <div className="max-w-4xl w-full px-6 text-center">
          <h1
            data-aos="fade-up"
            className="text-5xl font-bold text-gray-800 mb-6 tracking-wide"
          >
            Welcome to Our Coffee Cafe
          </h1>

          <p
            data-aos="fade-up"
            className="text-lg text-gray-700 mb-8 leading-relaxed"
          >
            At our Coffee Cafe, we believe in serving not just great coffee, but an
            experience. Whether you're looking for a cozy corner to relax with your
            favorite brew, or a lively spot to catch up with friends, we’ve got you
            covered. Our cafe is designed to be a warm, welcoming space for everyone.
          </p>

          <h2
            data-aos="fade-up"
            className="text-3xl font-semibold text-gray-800 mb-4"
          >
            Our Story
          </h2>
          <p
            data-aos="fade-up"
            className="text-lg text-gray-700 mb-8 leading-relaxed"
          >
            We started our journey with one goal in mind — to craft the finest
            coffee and snacks that elevate your everyday moments. From carefully
            selecting our beans to handcrafting each cup, we take pride in delivering
            a delicious, quality experience every time. Our passion for coffee and good
            company drives everything we do.
          </p>

          <h2
            data-aos="fade-up"
            className="text-3xl font-semibold text-gray-800 mb-4"
          >
            Our Offerings
          </h2>
          <p
            data-aos="fade-up"
            className="text-lg text-gray-700 mb-6 leading-relaxed"
          >
            We offer a wide range of freshly brewed coffee options, including classic
            espresso, cappuccinos, lattes, and seasonal specials. Every cup is brewed
            with love and care to bring you the perfect blend of flavor and aroma.
          </p>
          <p
            data-aos="fade-up"
            className="text-lg text-gray-700 mb-6 leading-relaxed"
          >
            Along with our signature coffees, we offer a variety of tasty snacks to
            pair with your drink. From freshly baked pastries, sandwiches, and light
            bites, there's something for everyone to enjoy.
          </p>

          <h2
            data-aos="fade-up"
            className="text-3xl font-semibold text-gray-800 mb-4"
          >
            Why Choose Us?
          </h2>
          <ul
            data-aos="fade-up"
            className="list-disc text-lg text-gray-700 mb-8 pl-6 leading-relaxed"
          >
            <li>Locally sourced, high-quality coffee beans</li>
            <li>Wide variety of hot and cold beverages</li>
            <li>Freshly made snacks and pastries</li>
            <li>Cozy and inviting atmosphere</li>
            <li>Friendly and knowledgeable staff</li>
          </ul>

          {/* New Section: Future Goals */}
          <h2
            data-aos="fade-up"
            className="text-3xl font-semibold text-gray-800 mb-4"
          >
            Our Future Goals
          </h2>
          <p
            data-aos="fade-up"
            className="text-lg text-gray-700 mb-6 leading-relaxed"
          >
            We are constantly growing and innovating. Our vision is to become the
            community's go-to destination for coffee lovers, where each visit feels
            like a new adventure. We're expanding our menu with new and exciting options
            to cater to every taste, and looking into sustainable practices to ensure
            our impact on the planet remains positive.
          </p>
          <p
            data-aos="fade-up"
            className="text-lg text-gray-700 mb-6 leading-relaxed"
          >
            As we look to the future, we're also excited to expand our reach to new
            locations, bringing our passion for coffee to more people. Additionally,
            we're working on collaborations with local artisans and businesses to offer
            unique experiences and products that make every visit something special.
          </p>
          <p
            data-aos="fade-up"
            className="text-lg text-gray-700 mb-8 leading-relaxed"
          >
            Stay tuned for new and exciting updates. Together, we'll create a vibrant
            space where great coffee, creativity, and community come together in perfect
            harmony.
          </p>

          <h2
            data-aos="fade-up"
            className="text-3xl font-semibold text-gray-800 mb-4"
          >
            Visit Us
          </h2>
          <p
            data-aos="fade-up"
            className="text-lg text-gray-700 leading-relaxed"
          >
            Come visit us at our cafe and enjoy the best coffee in town! Whether
            you're here for a quick caffeine fix or to relax with a snack, we're
            excited to welcome you. We look forward to sharing our love for coffee
            with you.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
