import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url('/Images/Home/dentist.jpeg')", // Direct path to the image in the public folder
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Dentist DNA</h1>
          <p className="mb-5">
            At Dentist DNA, we provide cutting-edge solutions for dental
            practices to grow their business and reach more patients. Let us
            help you transform your online presence today!
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
