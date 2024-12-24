"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import contactImage from "../../../Assets/images/Home/img (8).jpg"; // Replace with your actual image path
import { useForm } from "react-hook-form";
import Image from "next/image";

const ContactUs = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <section className="min-h-screen bg-base-200 flex flex-col md:flex-row items-center justify-center px-5 py-10">
      {/* Form Section */}
      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium">Phone</span>
            </label>
            <input
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              placeholder="Enter your phone number"
              className="input input-bordered w-full"
            />
            {errors.phone && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.phone?.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium">Message</span>
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Your message"
              className="textarea textarea-bordered w-full"
            ></textarea>
            {errors.message && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.message?.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary flex items-center justify-center w-full py-2"
            >
              <FaPaperPlane className="mr-2" />
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Image Section */}
      <div className="hidden md:block w-full md:w-1/2 p-5">
        <Image
          src={contactImage}
          alt="Contact Us"
          width={400}
          height={400}
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default ContactUs;
