"use client";
import { useEffect, useState } from "react";

const Services = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleCards([]);
      servicesData.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, index]);
        }, index * 1000);
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="services" className="bg-gray-900 text-white py-20 select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`p-6 bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-1000 ease-in-out 
                ${
                  visibleCards.includes(index)
                    ? "translate-x-0 opacity-100"
                    : index % 2 === 0
                    ? "-translate-x-20 opacity-0"
                    : "translate-x-20 opacity-0"
                }
              `}
            >
              <h3
                className={`text-2xl font-semibold mb-4 ${getCardTitleColor(
                  index
                )}`}
              >
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getCardTitleColor = (index) => {
  const colors = [
    "text-green-400", // Green
    "text-teal-400", // Teal
    "text-yellow-400", // Yellow
    "text-purple-400", // Purple
    "text-pink-400", // Pink
    "text-indigo-400", // Indigo
  ];

  return colors[index % colors.length];
};

const servicesData = [
  {
    title: "Web Development",
    description:
      "Build responsive and high-performance websites tailored to your needs.",
  },
  {
    title: "UI/UX Design",
    description: "Craft user-friendly interfaces with captivating designs.",
  },
  {
    title: "Digital Marketing",
    description: "Optimize your online presence with our marketing strategies.",
  },
  {
    title: "SEO Services",
    description: "Improve search engine rankings and drive organic traffic.",
  },
  {
    title: "Brand Strategy",
    description: "Establish and grow your brand identity with expert guidance.",
  },
  {
    title: "E-Commerce Solutions",
    description: "Create and manage online stores to scale your business.",
  },
];

export default Services;
