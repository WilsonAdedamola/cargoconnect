import React from "react";
import Logo from "../assets/Logo-white.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="mx-auto h-[100vh]">
      <div className="flex flex-row-reverse justify-center items-center w-full h-full md:gap-8 lg:gap-15">
        <div className="hidden md:relative blue-bg rounded-tl-[170px] rounded-bl-[170px] lg:rounded-tl-[250px] lg:rounded-bl-[250px] xl:rounded-tl-[250px] xl:rounded-bl-[250px] h-full w-full md:flex flex-col items-center justify-center">
          <div className="flex w-full">
            <img
              src={Logo}
              alt="Cargo Connect"
              className="right-0 absolute mt-10 mr-5 xl:mr-15 w-50 xl:w-80"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full h-full">
            <h1 className="text-[#F0F0F0] text-3xl lg:text-4xl font-bold justify-self-center">
              Get Started
            </h1>
            <p className="text-[#F0F0F0] text-xl font-medium mt-2.5 mb-10 max-w-96 text-center">
              Get started with cargo connect with these few steps
            </p>
            <p className="text-xs text-[#F0F0F0] font-medium mb-2">
              Already a user?
            </p>
            <Link to="/login" className="text-[#3C74ED] text-center rounded-4xl text-[1rem] py-2 max-w-48 w-full bg-white cursor-pointer">
              Login
            </Link>
          </div>
        </div>

        {/* Sign up Form */}
        <div className="h-full w-full flex flex-col items-center justify-start md:justify-center pt-10 md:pt-0 max-w-[90%] md:max-w-full">
          <h1 className="md:hidden text-black font-semibold text-lg self-start">
            Get Started
          </h1>
          <p className="md:hidden text-[#666666] text-xs font-medium self-start mt-1.5">
            Get started with cargo connect with these few steps
          </p>
          <form
            action=""
            className="my-6.5 w-full md:max-w-[85%] 2xl:max-w-[70%] flex flex-col justify-start md:justify-center items-center"
          >
            <p className="text-[#1E1E1E] text-lg font-medium mb-1 self-start">
              Fullname
            </p>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full placeholder:text-xs text-[14px] outline-[#D9D9D9] font-medium text-[#B3B3B3] p-1.5 border border-[#D9D9D9] rounded-lg"
            />
            <p className="text-[#1E1E1E] text-lg font-medium mb-1 mt-4 self-start">
              Email
            </p>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full placeholder:text-xs text-[14px] outline-[#D9D9D9] font-medium text-[#B3B3B3] p-1.5 border border-[#D9D9D9] rounded-lg"
            />
            <p className="text-xs text-amber-800 mt-1.5 mb-1 hidden">Error</p>
            <p className="text-[#1E1E1E] text-lg font-medium mb-1 mt-4 self-start">
              Phone Number
            </p>
            <input
              type="number"
              placeholder="Enter your phone number"
              className="w-full placeholder:text-xs text-[14px] outline-[#D9D9D9] font-medium text-[#B3B3B3] p-1.5 border border-[#D9D9D9] rounded-lg"
            />
            <p className="text-[#1E1E1E] text-lg font-medium mt-4 mb-1 self-start">
              Password
            </p>
            <input
              type="password"
              placeholder="At least 8 characters"
              className="w-full placeholder:text-xs text-[14px] outline-[#D9D9D9] font-medium text-[#B3B3B3] p-1.5 border border-[#D9D9D9] rounded-lg"
            />
            <p className="text-xs text-amber-800 mt-1.5 mb-1 hidden">Error</p>
            <p className="text-[#3C74ED] text-lg mt-1 self-end cursor-pointer">
              Forgot Password?
            </p>
            <Link to="/dashboard" className="button-bg text-center cursor-pointer w-full text-white text-lg font-semibold py-2 mt-7.5 rounded-4xl">
              Sign Up
            </Link>
          </form>
          <p className="text-[16px] text-[#1E1E1E] ">
            Already a user?
            <Link to="/login" className="text-[#6390F1] ml-1 cursor-pointer">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
