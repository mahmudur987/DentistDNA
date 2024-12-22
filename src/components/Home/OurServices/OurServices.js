import React from "react";
import {
  FaGlobe,
  FaMobileAlt,
  FaSearch,
  FaVideo,
  FaBullhorn,
  FaEnvelope,
  FaShareAlt,
  FaHeadset,
} from "react-icons/fa";

const OurServices = () => {
  const servicesData = {
    title: "Our Services",
    description:
      "At Dentist DNA, we offer a wide range of IT services tailored for dental practices to thrive in a digital-first world. Explore our offerings below!",
    services: [
      { name: "Portfolio Websites", icon: <FaGlobe /> },
      { name: "Web Applications", icon: <FaMobileAlt /> },
      { name: "SEO Optimization", icon: <FaSearch /> },
      { name: "Video Marketing", icon: <FaVideo /> },
      { name: "Digital Marketing", icon: <FaBullhorn /> },
      { name: "Email Marketing", icon: <FaEnvelope /> },
      { name: "Social Media Marketing", icon: <FaShareAlt /> },
      { name: "IT Support", icon: <FaHeadset /> },
      { name: "Cloud Services", icon: <FaGlobe /> },
      { name: "Analytics & Reporting", icon: <FaSearch /> },
    ],
  };

  return (
    <section className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500 opacity-30 animate-pulse"></div>
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-primary">
            {servicesData.title}
          </h2>
          <p className="text-lg mt-4">{servicesData.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center text-center opacity-0 animate-fadeIn transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
