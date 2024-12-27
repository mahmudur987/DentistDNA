"use client";

import Image from "next/image";

import Slider from "react-slick";
import { testimonialData } from "@/constant/BlogData";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary relative">
            {testimonialData.title}
          </h2>
          <p className="text-lg mt-4">{testimonialData.description}</p>
        </div>
        <Slider {...settings}>
          {testimonialData.testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className="p-6 m-6   bg-white rounded-lg shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover shadow-md"
                  width={96}
                  height={96}
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="mt-4 text-gray-700">{`"${testimonial.feedback}"`}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
