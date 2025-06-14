import React from "react";
import userImg from "../assets/UserImg.png";
import map from "../assets/web-map.png";
import dottedLine from "../assets/Dotted-line.svg";
import dottedLineBlue from "../assets/Dotted-line-blue.svg";
import { CircleDot, MessageCircle, PhoneCall } from "lucide-react";

const Track = () => {
  return (
    <div className="flex justify-center md:justify-end items-center h-dvh w-full overflow-y-scroll">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-14 h-full w-full md:max-w-[98%]">
        <div className="flex flex-col justify-center items-start w-full max-w-[90%] md:max-w-none">
          <p className="text-black text-[0.9em] md:text-xl font-medium">Contact Rider</p>
          <div className="flex items-center justify-between w-full mt-6 mb-8 md:mb-16">
            <div className="flex items-center justify-center gap-6">
              <img src={userImg} alt="Username" />
              <div className="flex flex-col items-start justify-center gap-1">
                <p className="flex items-center justify-center gap-0.5 text-black text-[0.9em] md:text-xl">
                  Femi
                </p>
                <p className="text-[#444444] text-xs md:text-base">+23435765767</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5">
              <PhoneCall color="#3C74ED" className="cursor-pointer"/>
              <MessageCircle color="#3C74ED" className="cursor-pointer"/>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-full bg-[#F5F5F5] rounded-4xl px-4 py-6">
            <div className="flex justify-start items-start gap-5 w-full">
              <div className="flex flex-col items-center justify-center gap-1">
                <CircleDot color="#F5F5F5" fill="#3c74ed"/>
                <img src={dottedLineBlue} alt="" className="max-h-15 md:max-h-22" />
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <p className="text-black text-[0.9em] md:text-xl text-medium">
                  Pickup Confirmed
                </p>
                <p className="text-[#757575] text-xs md:text-lg font-medium">
                  Package has been picked up by rider
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start gap-5 w-full">
              <div className="flex flex-col items-center justify-center gap-1">
                <CircleDot color="#F5F5F5" fill="#3c74ed" />
                <img src={dottedLineBlue} alt="" className="max-h-15 md:max-h-22" />
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <p className="text-black text-[0.9em] md:text-xl text-medium">
                  En Route
                </p>
                <p className="text-[#757575] text-xs md:text-lg font-medium">
                  Rider is on his way
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start gap-5 w-full">
              <div className="flex flex-col items-center justify-center gap-1">
                <CircleDot color="#F0EDED" fill="#fff"/>
                <img src={dottedLine} alt="" className="max-h-15 md:max-h-22" />
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <p className="text-black text-[0.9em] md:text-xl text-medium">
                  Delivered
                </p>
                <p className="text-[#757575] text-xs md:text-lg font-medium">
                  Package has been delivered
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          {/* replace with a function map */}
          <img src={map} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Track;
