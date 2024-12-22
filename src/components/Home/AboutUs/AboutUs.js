import Image from "next/image";
import React from "react";
import img from "../../../Assets/images/Home/img (5).jpg";
const AboutUs = () => {
  const aboutUsData = {
    title: "About Us",
    description: [
      "At Dentist DNA, we specialize in creating modern digital solutions for dental practices. Our mission is to empower dentists by enhancing their online presence, optimizing patient outreach, and streamlining practice management.",
      "With a team of dedicated professionals and years of experience in the tech and dental industries, we provide custom-tailored services that cater specifically to the needs of dental clinics. From responsive websites to robust marketing strategies, we’ve got you covered.",
    ],
    buttonText: "Contact Us",
    imageUrl: img, // Replace with the path to your actual image
  };

  return (
    <section className="bg-base-200 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Side - Image */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <Image
              src={aboutUsData.imageUrl}
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              {aboutUsData.title}
            </h2>
            {aboutUsData.description.map((paragraph, index) => (
              <p key={index} className="text-lg mb-4">
                {paragraph}
              </p>
            ))}
            <button className="btn btn-primary">
              {aboutUsData.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
