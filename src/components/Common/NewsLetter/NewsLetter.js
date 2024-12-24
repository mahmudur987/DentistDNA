"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope } from "react-icons/fa";

const Newsletter = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Newsletter Subscription:", data);
    // Add your API call or logic here
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-10 rounded-lg shadow-lg">
      {/* Left Side - Text */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fadeIn">
          Stay Updated!
        </h2>
        <p className="text-lg md:text-xl text-gray-200 animate-fadeIn">
          Subscribe to our newsletter for the latest updates, special offers,
          and exclusive content tailored for dental professionals.
        </p>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 animate-fadeIn">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center space-y-4"
        >
          <div className="relative w-full max-w-lg">
            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
              className="input input-bordered w-full pl-10 py-3 rounded-md text-black"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full md:w-auto px-6 py-3 text-lg font-semibold rounded-md shadow-md hover:scale-105 transition-transform"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
