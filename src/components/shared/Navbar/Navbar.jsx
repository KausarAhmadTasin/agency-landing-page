"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 backdrop-blur-md bg-gradient-to-r from-blue-900 via-black to-blue/60 py-4 text-white custom-navbar-shadow">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-blue-800 opacity-30 backdrop-blur-lg"></div>
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent hover:text-blue-400 transition duration-300 ease-in-out">
          <a href="#">
            Agency<span className="font-thin text-pink-300">Name</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="#portfolio" className="hover:text-gray-400">
            Portfolio
          </a>
          <a href="#about" className="hover:text-gray-400">
            About Us
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-black via-black to-blue-800/70 shadow-lg">
          <a
            href="#services"
            className="block px-4 py-2 hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="block px-4 py-2 hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </a>
          <a
            href="#about"
            className="block px-4 py-2 hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
