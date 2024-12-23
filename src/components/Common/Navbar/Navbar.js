"use client";

import Link from "next/link";
import React, { useState } from "react";
import ModalWrapper from "../Modal/ModalWrapper";
import Signup from "../SignUp/SignUp";
import { useAuth } from "@/Context/UserContext";
import Login from "../Login/Login";
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
      <Link href={"/"}>Blog</Link>
    </li>
    <li>
      <Link href={"/"}>About Us</Link>
    </li>
    <li>
      <Link href={"/"}>Contact US</Link>
    </li>
  </>
);
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);
  const { user, logout } = useAuth();

  console.log(user);
  return (
    <>
      <div className="navbar bg-base-100">
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
          <a className="btn btn-ghost text-xl">Dentist DNA</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        {user ? (
          <div className="navbar-end gap-5">
            <h2>{user.displayName}</h2>
            <button className="btn btn-accent btn-sm" onClick={() => logout()}>
              Sign Out
            </button>
          </div>
        ) : (
          <div className="navbar-end  gap-5">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => setIsModalOpen(true)}
            >
              Sign Up
            </button>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => setIsLogInModalOpen(true)}
            >
              Log In
            </button>
          </div>
        )}
      </div>

      <ModalWrapper
        isVisible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <Signup setIsModalOpen={setIsModalOpen} />
      </ModalWrapper>
      <ModalWrapper
        isVisible={isLogInModalOpen}
        onClose={() => setIsLogInModalOpen(false)}
      >
        <Login setIsLogInModalOpen={setIsLogInModalOpen} />
      </ModalWrapper>
    </>
  );
};

export default Navbar;
