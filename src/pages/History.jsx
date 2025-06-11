import { ArrowLeft, Bike, Car, Truck } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const History = () => {
  const historyList = [
    {
      id: 1,
      progress: "In Transit",
      svgg: "Bike",
      location: "Delivery to Festac Town, Lagos",
      date: "15th Mar, 2025",
    },
    {
      id: 2,
      progress: "Completed",
      svgg: "Car",
      location: "Delivery to Festac Town, Lagos",
      date: "6th Mar, 2025",
    },
    {
      id: 3,
      progress: "Completed",
      svgg: "Van",
      location: "Delivery to NO. 20 Felix Estate, Ogun State",
      date: "16th Dec, 2024",
    },
  ];

  return (
    <div className="flex flex-col w-full h-dvh overflow-y-scroll">
      <div className="mx-width flex flex-col w-full my-8 md:my-14 mx-auto h-dvh max-w-11/12">
        <div className="flex items-center gap-4 md:gap-8 mb-8 md:mb-14">
          <Link to="/dashboard" ><ArrowLeft /></Link>
          <p className="text-black text-base md:text-xl font-medium">
            Back To Dashboard
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 md:gap-6 w-full">
        {historyList.map((history) => (
            <div
              key={history.id}
              className="flex justify-between items-center w-full rounded-2xl border border-[#F8F2F2] px-2 py-5"
            >
              <div className="flex items-center gap-2">
                {history.svgg == "Bike" && <Bike color="#0857FF" />}
                {history.svgg == "Car" && <Car color="#0857FF" />}
                {history.svgg == "Van" && <Truck color="#0857FF" />}
                <div className="flex flex-col items-start justify-center gap-1">
                  <p className="text-[0.9em] md:text-xl text-black">
                    {history.progress}
                  </p>
                  <p className="text-[0.5em] md:text-[0.9em] text-[#575757] font-medium">
                    {history.location}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                <p className="text-[0.6em] md:text-xs text-[#212121]">
                  {history.date}
                </p>
                <p className="text-[0.6em] md:text-xs text-[#3C74ED] underline">
                  View Details
                </p>
              </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default History;
