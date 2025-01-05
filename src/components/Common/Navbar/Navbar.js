"use client";

import Link from "next/link";
import React, { useState } from "react";
import ModalWrapper from "../Modal/ModalWrapper";
import Signup from "../SignUp/SignUp";
import { useAuth } from "@/Context/UserContext";
import Login from "../Login/Login";
import Image from "next/image";
import { FaSignOutAlt } from "react-icons/fa";
import img1 from "../../../Assets/dummy 1.jpg";
import img2 from "../../../Assets/dummy 2.jpeg";
export const profilePlaceHolder = img1;
export const PlaceHolder = img2;
export const menuIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h8m-8 6h16"
    />
  </svg>
);
const menuItems = (
  <>
    <li>
      <Link href={"/"}>Home</Link>
    </li>
    <li>
      <Link href={"/Blog"}>Blog</Link>
    </li>
    <li>
      <Link href={"/AboutUs"}>About Us</Link>
    </li>
    <li>
      <Link href={"/OrderUs"}>Order US</Link>
    </li>
    <li>
      <Link href={"/OurTeam"}>Our Team</Link>
    </li>
  </>
);
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="navbar bg-base-100 fixed z-[999]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {menuIcon}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menuItems}
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost text-xl">
            Dentist DNA
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        {user ? (
          <div className="navbar-end gap-5  relative">
            <div
              className="avatar online"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-12 rounded-full">
                <Image
                  src={user.photoURL ?? profilePlaceHolder}
                  alt="Avatar"
                  width={50}
                  height={50}
                />
              </div>
            </div>

            {isMenuOpen && (
              <div className="absolute top-full right-3 w-72 shadow-2xl bg-base-100 p-5  rounded-lg flex flex-col items-center  gap-5">
                <div
                  className="avatar"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <div className="w-24 rounded-full">
                    <Image
                      src={user.photoURL ?? profilePlaceHolder}
                      alt="Avatar"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div>
                  <h2
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="cursor-pointer font-bold text-lg text-center"
                  >
                    {user.displayName}
                  </h2>
                  <p className="text-sm text-center">{user.email}</p>
                </div>
                <button
                  className="btn btn-accent btn-sm"
                  onClick={() => {
                    logout();
                    setIsMenuOpen(!isMenuOpen);
                  }}
                >
                  <FaSignOutAlt /> Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="navbar-end  gap-5">
            <button
              className="btn  btn-sm  "
              onClick={() => setIsLogInModalOpen(true)}
            >
              Sign In
            </button>
          </div>
        )}
      </div>

      <ModalWrapper
        isVisible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <Signup
          setIsLogInModalOpen={setIsLogInModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </ModalWrapper>
      <ModalWrapper
        isVisible={isLogInModalOpen}
        onClose={() => setIsLogInModalOpen(false)}
      >
        <Login
          setIsLogInModalOpen={setIsLogInModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </ModalWrapper>
    </>
  );
};

export default Navbar;
