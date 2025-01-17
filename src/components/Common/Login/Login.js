import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { set, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "@/Context/UserContext";
import { FaFacebook } from "react-icons/fa";

const Login = ({ setIsLogInModalOpen, setIsModalOpen = () => {} }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const from = "/";
  const { login, googleLogIn, user, SetUser, facebookLogIn } = useAuth();

  const handleLogin = (data) => {
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;

        SetUser(user);
      })
      .catch((error) => {
        toast.error(error.message.slice(22, 100));
        console.error("Error", error.message);
      });
  };
  const handleGoogleLogIn = () => {
    const provider = new GoogleAuthProvider();
    if (user?.email) {
      return toast.error("please logout first");
    }

    googleLogIn(provider)
      .then((result) => {
        const user = result.user;
        setIsLogInModalOpen(false);
        SetUser(user);
      })
      .catch((error) => {
        toast.error(error.message.slice(22, 100));
        console.error("Error", error.message);
      });
  };
  // handle facebook logion
  const handleFacebookLogIn = () => {
    const provider = new FacebookAuthProvider();
    if (user?.email) {
      return toast.error("please logout first");
    }

    facebookLogIn(provider)
      .then((result) => {
        const user = result.user;
        setIsLogInModalOpen(false);
        SetUser(user);
      })
      .catch((error) => {
        toast.error(error.message.slice(22, 100));
        console.error("Error", error.message);
      });
  };
  return (
    <section className="bg-base-200  md:flex justify-center items-center max-w-md ">
      <div className="w-96 mx-auto  shadow-lg rounded-lg p-2">
        <h1 className="text-4xl text-center font-bold mb-8">LOG IN</h1>

        <form
          className="space-y-1 w-full "
          onSubmit={handleSubmit(handleLogin)}
        >
          <div className="form-control w-full">
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

          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>

          <div className="text-right">
            <button className="link text-sm text-blue-600 hover:underline">
              Forgot password?
            </button>
          </div>

          <div className="text-center">
            <button className="btn btn-primary w-full py-2" type="submit">
              Log In
            </button>
          </div>
        </form>
        <p className="my-3">
          Don t have an account{" "}
          <button>
            {" "}
            <button
              onClick={() => {
                setIsModalOpen(true);
                setIsLogInModalOpen(false);
              }}
              className="link text-sm text-blue-600 hover:underline"
            >
              Sign Up
            </button>
          </button>
        </p>
        <div className="divider my-8">OR</div>

        <div className="text-center">
          <button
            onClick={handleGoogleLogIn}
            className="btn btn-outline btn-accent flex items-center justify-center w-full py-2"
          >
            <FcGoogle className="mr-2 text-2xl" />
            Log In with Google
          </button>
        </div>

        <div className="text-center mt-4">
          <button
            onClick={handleFacebookLogIn}
            className="btn btn-outline btn-accent flex items-center justify-center w-full py-2"
          >
            <FaFacebook className="mr-2 text-2xl" />
            Log In with Facebook
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
