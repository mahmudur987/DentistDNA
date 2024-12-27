"use client";

import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "@/Context/UserContext";
import { GoogleAuthProvider } from "firebase/auth";
const Signup = ({ setIsModalOpen, setIsLogInModalOpen }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signUp, updateUserProfile, googleLogIn, SetUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const from = "/";

  const handleSignUp = (data) => {
    setLoading(true);

    const image = data.photo[0];
    const imageData = new FormData();
    imageData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${"8dfd689dd9ec2d7fbe4d40cbf66cfb37"}`;
    fetch(url, {
      method: "POST",
      body: imageData,
    })
      .then((res) => res.json())
      .then((imagedata) => {
        // console.log(imagedata.data)
        if (imagedata.success) {
          const photoURL = imagedata.data.display_url;
          signUp(data.email, data.password)
            .then((result) => {
              // const user = result.use
              updateProfile(data.name, photoURL, data.email, data.userType);
            })
            .catch((error) => {
              toast.error(error.message);
              console.error(error);
            });
        }
      });
  };

  const updateProfile = (displayName, photoURL, email, userType) => {
    const fullprofile = { displayName, photoURL, email, userType };
    const profile = { displayName, photoURL };
    updateUserProfile(profile)
      .then(() => {
        setIsModalOpen(false);
      })
      .catch((err) => {
        toast.error(err.message);
        console.error(err);
      });
  };
  const handleGoogleSignUp = () => {
    const provider = new GoogleAuthProvider();
    googleLogIn(provider)
      .then((result) => {
        const user = result.user;
        SetUser(user);
        setIsModalOpen(false);
      })
      .catch((error) => {
        toast.error(error.message.slice(22, 100));
        console.error("Error", error.message);
      });
  };
  //   const saveUser = (fullprofile) => {
  //     // console.log(fullprofile);
  //     fetch(`${process.env.REACT_APP_databaseurl}/users`, {
  //       method: "POST", // or 'PUT'
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(fullprofile),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("Save user", data);
  //         if (data.acknowledged) {
  //           toast.success("user signup successfully");
  //           fetch(
  //             `${process.env.REACT_APP_databaseurl}/jwt?email=${fullprofile.email}`
  //           )
  //             .then((res) => res.json())
  //             .then((data) => {
  //               console.log(data);
  //               localStorage.setItem("accessToken", data.accessToken);
  //             });
  //         }
  //       })
  //       .catch((error) => {
  //         toast.error(error.message);

  //         console.error("Error:", error);
  //       });
  //     toast.success("user signup successfully");
  //     setLoading(false);
  //     navigate(from, { replace: true });
  //   };

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4 uppercase">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
        {/* Name */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-sm font-semibold">Name</span>
          </label>
          <input
            {...register("name", {
              required: "Name is required",
            })}
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full"
          />
          {errors.name && (
            <p className="text-red-600 mt-1 text-xs" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>

        {/* Photo */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-sm font-semibold">
              Choose Photo
            </span>
          </label>
          <input
            {...register("photo", {
              required: "Please select a photo",
            })}
            type="file"
            className="file-input file-input-bordered w-full"
          />
          {errors.photo && (
            <p className="text-red-600 mt-1 text-xs" role="alert">
              {errors.photo?.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-sm font-semibold">Email</span>
          </label>
          <input
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
          />
          {errors.email && (
            <p className="text-red-600 mt-1 text-xs" role="alert">
              {errors.email?.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-sm font-semibold">Password</span>
          </label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              pattern: {
                value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                message:
                  "Password must include one uppercase letter, one symbol, and one number",
              },
            })}
            type="password"
            placeholder="Create a password"
            className="input input-bordered w-full"
          />
          {errors.password && (
            <p className="text-red-600 mt-1 text-xs" role="alert">
              {errors.password?.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <input
            className="btn btn-primary w-full transition-transform hover:scale-105"
            type="submit"
            value="Sign Up"
          />
        </div>
      </form>

      <p className="text-center mt-4">
        already have an account?{" "}
        <button
          onClick={() => {
            setIsModalOpen(false);
            setIsLogInModalOpen(true);
          }}
          className="text-blue-600"
        >
          Log In
        </button>
      </p>

      <div className="text-center">
        <button
          type="button"
          className="btn btn-outline btn-accent w-full flex items-center justify-center space-x-2 transition-transform hover:scale-105 my-5"
          onClick={handleGoogleSignUp} // Replace with your Google sign-up logic
        >
          <FcGoogle className="text-2xl" />
          <span>Sign Up with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Signup;
