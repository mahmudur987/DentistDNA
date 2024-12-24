"use client";

import aboutUsData from "@/constant/AboutUsData";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-base-200 p-6 md:p-12">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">{aboutUsData.title}</h1>
        <p className="text-lg md:text-xl text-gray-600">
          {aboutUsData.description}
        </p>
      </div>

      {/* Sections */}
      {aboutUsData.sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? "" : "md:flex-row-reverse"
          } items-center mb-12`}
        >
          {/* Content */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-3xl font-semibold mb-4">{section.heading}</h2>
            <p className="text-lg text-gray-600">{section.description}</p>
          </div>

          {/* Media */}
          <div className="md:w-1/2 p-6">
            {section.image && (
              <Image
                width={500}
                height={500}
                src={section.image}
                alt={section.heading}
                className="w-full rounded-lg shadow-lg"
              />
            )}
            {section.video && (
              <div className="relative group">
                <Image
                  width={500}
                  height={500}
                  src={section.video.thumbnail}
                  alt="Video Thumbnail"
                  className="w-full rounded-lg shadow-lg cursor-pointer"
                />
                <a
                  href={section.video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ▶ Watch Video
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
