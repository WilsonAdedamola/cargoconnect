import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo-white.png";

const Login = () => {
  return (
    <div className="mx-auto h-[100vh]">
      <div className="flex justify-center items-center w-full h-full md:gap-8 lg:gap-15">
        <div className="hidden md:relative blue-bg rounded-tr-[170px] rounded-br-[170px] lg:rounded-tr-[250px] lg:rounded-br-[250px] xl:rounded-tr-[250px] xl:rounded-br-[250px] h-full w-full md:flex flex-col items-center justify-center">
          <div className="flex w-full">
            <img
              src={Logo}
              alt="Cargo Connect"
              className="absolute mt-10 ml-5 xl:ml-15 w-50 xl:w-80"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full h-full">
            <h1 className="text-[#F0F0F0] text-3xl lg:text-4xl font-bold justify-self-center">
              Welcome Back!
            </h1>
            <p className="text-[#F0F0F0] text-xl font-medium mt-2.5 mb-10 max-w-96 text-center">
              Login your account by entering your details
            </p>
            <p className="text-xs text-[#F0F0F0] font-medium mb-2">
              Don’t have an account?
            </p>
            <Link to="/signup" className="text-[#3C74ED] text-center rounded-4xl text-[1rem] py-2 max-w-48 w-full bg-white cursor-pointer">
              Sign Up
            </Link>
          </div>
        </div>

        {/* Login Form */}
        <div className="h-full w-full flex flex-col items-center justify-start md:justify-center pt-10 md:pt-0 max-w-[90%] md:max-w-full">
          <h1 className="md:hidden text-black font-semibold text-lg self-start">
            Welcome Back!
          </h1>
          <p className="md:hidden text-[#666666] text-xs font-medium self-start mt-1.5">
            Login your account by entering your details
          </p>
          <form
            action=""
            className="my-6.5 w-full md:max-w-[85%] 2xl:max-w-[70%] flex flex-col justify-start md:justify-center items-center"
          >
            <p className="text-[#1E1E1E] text-lg font-medium mb-1 self-start">
              Email
            </p>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full placeholder:text-xs text-[14px] outline-[#D9D9D9] font-medium text-[#B3B3B3] p-1.5 border border-[#D9D9D9] rounded-lg"
            />
            <p className="text-xs text-amber-800 mt-1.5 mb-1 hidden">Error</p>
            <p className="text-[#1E1E1E] text-lg font-medium mt-4 mb-1 self-start">
              Password
            </p>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full placeholder:text-xs text-[14px] outline-[#D9D9D9] font-medium text-[#B3B3B3] p-1.5 border border-[#D9D9D9] rounded-lg"
            />
            <p className="text-xs text-amber-800 mt-1.5 mb-1 hidden">Error</p>
            <p className="text-[#3C74ED] text-lg mt-1 self-end cursor-pointer">
              Forgot Password?
            </p>
            <Link to="/dashboard" className="button-bg text-center cursor-pointer w-full text-white text-lg font-semibold py-2 mt-7.5 rounded-4xl">
              Log In
            </Link>
          </form>
          <p className="text-[16px] text-[#1E1E1E] ">
            Don’t have an account?
            <Link to="/signup" className="text-[#6390F1] ml-1 cursor-pointer">Sign Up</Link>
          </p>
        </div>
      </div>

      {/* Visible on screens less than or equals to 767px */}
      {/* <div className="h-full w-full hidden flex-col items-center justify-start pt-10 max-w-[90%] mx-auto">
        <h1 className="text-black font-semibold text-lg self-start">
          Hi David, great to see you again!
        </h1>
        <p className="text-[#666666] text-xs font-medium self-start mt-1.5">
          Log in now to get started.
        </p>
        //Login form
        <form action="" className="my-6.5 w-full flex flex-col">
          <p className="text-[#1E1E1E] text-lg font-medium mb-1">Email</p>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full placeholder:text-xs text-[14px] outline-[#D9D9D9] font-medium text-[#B3B3B3] p-1.5 border border-[#D9D9D9] rounded-lg"
          />
          <p className="text-xs text-amber-800 mt-1.5 mb-1 hidden">Error</p>
          <p className="text-[#1E1E1E] text-lg font-medium mt-4 mb-1">
            Password
          </p>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full placeholder:text-xs text-[14px] outline-[#D9D9D9] font-medium text-[#B3B3B3] p-1.5 border border-[#D9D9D9] rounded-lg"
          />
          <p className="text-xs text-amber-800 mt-1.5 mb-1 hidden">Error</p>
          <p className="text-[#3C74ED] text-lg mt-1 self-end cursor-pointer">
            Forgot Password?
          </p>
          <button className="button-bg cursor-pointer w-full text-white text-lg font-semibold py-2 mt-7.5 rounded-4xl">
            Log In
          </button>
        </form>
        <p className="text-[16px] text-[#1E1E1E] ">
          Don’t have an account?
          <span className="text-[#6390F1] ml-1 cursor-pointer">Sign Up</span>
        </p>
      </div> */}
    </div>
  );
};

export default Login;
