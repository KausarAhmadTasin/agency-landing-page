"use client";
import { useEffect, useState } from "react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative bg-black text-white h-fit pb-10 pt-40 select-none overflow-hidden">
      {/* Blurry Elements Behind */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-lg"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-600 to-blue-800 opacity-25 backdrop-blur-xl"></div>
      <div className="absolute inset-0 bg-gray-900 opacity-40 backdrop-blur-3xl"></div>

      <div className="md:container md:mx-auto mx-2 flex flex-col justify-center items-center relative z-10">
        {/* Heading */}
        <h1
          className={`text-5xl md:text-6xl text-center font-bold transition-opacity duration-1000 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="font-thin">Welcome to</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            TheChAgency
          </span>
        </h1>

        {/* Subheading */}
        <p
          className={`mt-6 text-lg md:text-xl text-gray-400 transition-opacity duration-1000 ease-in-out delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Your Partner in Digital Transformation
        </p>

        {/* Button */}
        <button
          className={`mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg rounded-lg shadow-md hover:opacity-90 transition-opacity duration-1000 ease-in-out delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Get Started
        </button>

        {/* Additional Content Sections */}
        <div
          className={`mt-12 max-w-4xl text-center transition-opacity duration-1000 ease-in-out delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-600">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-gray-400">
            We combine innovative strategies, creative designs, and advanced
            technologies to help your business thrive in the digital world.
          </p>
        </div>

        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-opacity duration-1000 ease-in-out delay-900 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-purple-400">
              Custom Solutions
            </h3>
            <p className="mt-2 text-gray-400">
              Tailored digital strategies designed to meet your unique business
              needs.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-pink-400">Creative Design</h3>
            <p className="mt-2 text-gray-400">
              Stunning visuals and user-friendly interfaces that captivate your
              audience.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-blue-400">Expert Support</h3>
            <p className="mt-2 text-gray-400">
              Dedicated assistance from our team of experienced professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
