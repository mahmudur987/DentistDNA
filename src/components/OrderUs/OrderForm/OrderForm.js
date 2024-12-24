"use client";

import React from "react";
import { useForm } from "react-hook-form";

const OrderForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleSubmitOrder = (data) => {
    console.log(data);
  };

  return (
    <section className="bg-base-200 py-10 px-5 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl text-center font-bold mb-8">Order Form</h1>

        <form className="space-y-6" onSubmit={handleSubmit(handleSubmitOrder)}>
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium">Full Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your full name"
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
              <span className="label-text text-lg font-medium">
                Phone Number
              </span>
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

          {/* Address */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium">Address</span>
            </label>
            <textarea
              {...register("address", { required: "Address is required" })}
              placeholder="Enter your address"
              className="textarea textarea-bordered w-full"
            />
            {errors.address && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.address?.message}
              </p>
            )}
          </div>

          {/* Working Hospital */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium">
                Working Hospital
              </span>
            </label>
            <input
              type="text"
              {...register("workingHospital", {
                required: "Working hospital is required",
              })}
              placeholder="Enter your working hospital"
              className="input input-bordered w-full"
            />
            {errors.workingHospital && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.workingHospital?.message}
              </p>
            )}
          </div>

          {/* Passing University */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium">
                Passing University
              </span>
            </label>
            <input
              type="text"
              {...register("university", {
                required: "Passing university is required",
              })}
              placeholder="Enter your passing university"
              className="input input-bordered w-full"
            />
            {errors.university && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.university?.message}
              </p>
            )}
          </div>

          {/* Religion */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium">Religion</span>
            </label>
            <input
              type="text"
              {...register("religion", { required: "Religion is required" })}
              placeholder="Enter your religion"
              className="input input-bordered w-full"
            />
            {errors.religion && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.religion?.message}
              </p>
            )}
          </div>

          {/* Nationality */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium">
                Nationality
              </span>
            </label>
            <input
              type="text"
              {...register("nationality", {
                required: "Nationality is required",
              })}
              placeholder="Enter your nationality"
              className="input input-bordered w-full"
            />
            {errors.nationality && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.nationality?.message}
              </p>
            )}
          </div>

          {/* Service Details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium">
                Service Details
              </span>
            </label>
            <textarea
              {...register("serviceDetails", {
                required: "Service details are required",
              })}
              placeholder="Provide details about the services you need"
              className="textarea textarea-bordered w-full"
            />
            {errors.serviceDetails && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.serviceDetails?.message}
              </p>
            )}
          </div>

          {/* Additional Notes */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium">
                Additional Notes
              </span>
            </label>
            <textarea
              {...register("notes")}
              placeholder="Any additional notes or requests"
              className="textarea textarea-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button className="btn btn-primary w-full py-2" type="submit">
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
