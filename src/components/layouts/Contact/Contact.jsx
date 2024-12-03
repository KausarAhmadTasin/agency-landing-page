"use client";
import { useState, useEffect } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact-section");
      const bounding = contactSection.getBoundingClientRect();
      if (bounding.top <= window.innerHeight && bounding.bottom >= 0) {
        setIsVisible(true); // Set visibility to true when the section is in view
      }
    };

    // Set up the scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Trigger the check when the component first mounts
    handleScroll();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="contact-section"
      className={`relative bg-[#111827] text-white py-24 transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-20 translate-y-10"
      }`}
    >
      <div className="md:container md:mx-auto mx-4 flex flex-col justify-center items-center relative z-10">
        {/* Section Heading */}
        <h2
          className={`text-4xl md:text-5xl text-center font-semibold transition-opacity duration-1000 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="font-thin">Let’s</span> Connect
        </h2>

        {/* Subheading */}
        <p
          className={`mt-6 text-lg md:text-xl text-gray-300 transition-opacity duration-1000 ease-in-out delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          We’re here to help! Reach out for any inquiries or support.
        </p>

        {/* Contact Form */}
        <div
          className={`mt-12 w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-1000 ease-in-out delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="md:col-span-2">
            <textarea
              placeholder="Your Message"
              className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"
            ></textarea>
          </div>

          <div className="md:col-span-2 text-center">
            <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-lime-700 text-white text-lg rounded-lg shadow-md hover:opacity-90 transition-opacity duration-500 ease-in-out">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
