import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "../assets/Logo-white.png";
import LogoBlue from "../assets/Cargo-connect.png";
import UserImg from "../assets/User-img.png";
import banner from "../assets/ad-banner.png";
import {
  Bike,
  Car,
  Truck,
  BellDot,
  ChevronDown,
} from "lucide-react";


  //   "predeploy": "npm run build",
  //   "deploy": "gh-pages -d dist"
  // "homepage": "https://WilsonAdedamola.github.io/cargoconnect",

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full h-dvh overflow-y-scroll">
      <div className="flex w-full max-h-16 shadow">
        <div className="flex items-center justify-between w-full max-w-11/12 py-5 mx-auto">
          <p className="text-[#262525] text-[0.9rem] font-medium hidden md:block">
            Dashboard
          </p>
          <img src={LogoBlue} alt="Cargo Connect" className="md:hidden" />
          <div className="flex items-center gap-2">
            <BellDot
              color="#0857FF"
              fill="#0857FF"
              className="cursor-pointer"
            />
            <p className="text-[#262525] text-[0.9em] font-medium ml-2 cursor-pointer hidden md:block">
              David Adams
            </p>
            <img
              src={UserImg}
              alt="User's Image"
              className="cursor-pointer hidden md:block"
            />
            <ChevronDown className="cursor-pointer hidden md:block" />
          </div>
        </div>
      </div>
      <div className="mx-width flex flex-col w-full my-8 md:my-14 mx-auto h-dvh max-w-11/12">
        <p className="text-base md:text-xl text-[#262525] font-medium self-start">
          Hi David, Ready to make a delivery?
        </p>
        <p className="text-xs md:text-[1rem] text-[#666666] font-medium mt-4.5 mb-3 self-start">
          Select delivery type
        </p>
        <div className="flex items-center justify-center gap-3 self-start w-full md:w-auto">
          <div className="flex flex-col items-center justify-center bg-[#FBFBFB] gap-2.5 border border-[#0857FF] hover:border-[#0857FF] rounded-xl w-full md:min-w-48 min-h-28 md:min-h-40 cursor-pointer">
            <p className="text-xs md:text-[1em] text-black font-medium">
              Motorcycle
            </p>
            <p className="text-[0.6em] md:text-xs text-black font-light">
              Small packages
            </p>
            <Bike />
          </div>
          <div className="flex flex-col items-center justify-center bg-[#FBFBFB] gap-2.5 border border-[#D4D5D7] hover:border-[#0857FF] rounded-xl w-full md:min-w-48 min-h-28 md:min-h-40 cursor-pointer">
            <p className="text-xs md:text-[1em] text-black font-medium">Car</p>
            <p className="text-[0.6em] md:text-xs text-black font-light">
              Medium packages
            </p>
            <Car />
          </div>
          <div className="flex flex-col items-center justify-center bg-[#FBFBFB] gap-2.5 border border-[#D4D5D7] hover:border-[#0857FF] rounded-xl w-full md:min-w-48 min-h-28 md:min-h-40 cursor-pointer">
            <p className="text-xs md:text-[1em] text-black font-medium">Van</p>
            <p className="text-[0.6em] md:text-xs text-black font-light">
              Large packages
            </p>
            <Truck />
          </div>
        </div>
        <img src={banner} alt="bonus" className="my-10 md:my-15" />
        <div className="flex flex-col justify-center gap-5 w-full">
          <div className="flex justify-between items-center w-full">
            <p className="text-black text-base md:text-2xl font-medium">
              Delivery History
            </p>
            <Link
              to="/history"
              className="cursor-pointer text-[#0857FF] text-xs md:text-xl underline font-medium"
            >
              View All
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 w-full">
            <div className="flex justify-between items-center w-full rounded-2xl border border-[#F8F2F2] px-2 py-5">
              <div className="flex items-center gap-2">
                <Bike color="#0857FF" />
                <div className="flex flex-col items-start justify-center gap-1">
                  <p className="text-[0.9em] md:text-xl text-black">
                    In Transit
                  </p>
                  <p className="text-[0.5em] md:text-[0.9em] text-[#575757] font-medium">
                    Delivery to Lekki Phase 1, Lagos
                  </p>
                </div>
              </div>
              <div className="text-[0.6em] md:text-xs text-[#212121]">
                15th Mar, 2025
              </div>
            </div>
            <div className="flex justify-between items-center w-full rounded-2xl border border-[#F8F2F2] px-2 py-5">
              <div className="flex items-center gap-2">
                <Bike color="#0857FF" />
                <div className="flex flex-col items-start justify-center gap-1">
                  <p className="text-[0.9em] md:text-xl text-black">
                    Completed
                  </p>
                  <p className="text-[0.5em] md:text-[0.9em] text-[#575757] font-medium">
                    Delivery to NO. 45 ABC Road, Port Harcourt
                  </p>
                </div>
              </div>
              <div className="text-[0.6em] md:text-xs text-[#212121]">
                15th Mar, 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
