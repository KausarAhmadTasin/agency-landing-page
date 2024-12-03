"use client";
import { useState, useEffect } from "react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about-section");
      const bounding = aboutSection.getBoundingClientRect();
      if (bounding.top <= window.innerHeight && bounding.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="about-section"
      className={`relative bg-black text-white py-24 transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-20 translate-y-10"
      }`}
    >
      {/* Blurry Background */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-lg"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-400 via-green-200 to-sky-300 opacity-25 backdrop-blur-xl"></div>
      <div className="absolute inset-0 bg-gray-900 opacity-40 backdrop-blur-3xl"></div>

      <div className="md:container md:mx-auto mx-4 flex flex-col justify-center items-center relative z-10">
        {/*  Heading */}
        <h2
          className={`text-4xl md:text-5xl text-center font-semibold transition-opacity duration-1000 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="font-thin">Discover</span> Our Vision & Mission
        </h2>

        {/* Subheading */}
        <p
          className={`mt-6 text-lg md:text-xl text-gray-300 transition-opacity duration-1000 ease-in-out delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          We are committed to driving success through creativity and technology.
        </p>

        {/* Content Blocks */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 transition-opacity duration-1000 ease-in-out delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="p-6 bg-gray-800 rounded-lg shadow-xl flex flex-col items-center">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">
              Innovative Strategy
            </h3>
            <p className="text-gray-300 text-center">
              Our strategic approach is designed to provide innovative solutions
              that help your business grow and thrive in the digital world.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-xl flex flex-col items-center">
            <h3 className="text-2xl font-bold text-pink-400 mb-4">
              Creative Excellence
            </h3>
            <p className="text-gray-300 text-center">
              We bring creativity to the forefront, delivering exceptional
              design and user experiences that captivate and engage your
              audience.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-xl flex flex-col items-center">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Expert Guidance
            </h3>
            <p className="text-gray-300 text-center">
              Our team of experts provides continuous support and guidance,
              ensuring that your digital journey is a success from start to
              finish.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-xl flex flex-col items-center">
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              Cutting-edge Technology
            </h3>
            <p className="text-gray-300 text-center">
              We leverage the latest technologies to build solutions that are
              both scalable and sustainable, ensuring long-term success.
            </p>
          </div>
        </div>

        {/* Button */}
        <div
          className={`mt-12 text-center transition-opacity duration-1000 ease-in-out delay-900 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg rounded-lg shadow-lg hover:opacity-90 transition-opacity">
            Join Us Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
