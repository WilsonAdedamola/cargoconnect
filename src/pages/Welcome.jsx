import welcomeImage from "../assets/welcome-page.png";
import welcomeSvg from "../assets/Welcomepage-Vector.svg";
import smallLogo from "../assets/small-logo.png";
import "../App.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="container mx-auto h-dvh">
      {/* Visible on screens greater than or equals to 768px */}
      <div className="hidden md:flex items-center justify-center gap-8 xl:gap-16">
        <div className="flex flex-col gap-5 xl:gap-10 w-full items-start justify-center">
          <p className="py-1 px-5 xl:py-1.5 xl:px-7 xl:text-xl text-[#313030] font-medium rounded-[50px] border border-[#B5B2B2]">
            Your trusted delivery platform
          </p>
          <h1 className="text-3xl xl:text-5xl font-bold text-black">
            Deliveries Made Easy, Anytime, Anywhere
            <span>
              <img src={welcomeSvg} alt="path" className="mt-1 xl:mt-3" />
            </span>
          </h1>
          <p className="text-[#4B4A4A] text-xl xl:text-2xl ">
            Need something picked up or dropped off? Choose from bikes, cars, or
            van, we’ve got you covered. Our platform connects you with trusted
            couriers so your package gets where they need to go, fast and
            hassle-free.
          </p>
          <div className="flex justify-between w-full gap-4 mt-4 xl:mt-12">
            <Link to="/signup" className="py-2 xl:py-4 xl:text-xl blue-bg text-white cursor-pointer rounded xl:rounded-xl w-full text-center">
              Book a Delivery
            </Link>
            <Link to="/signup" className="py-2 xl:py-4 xl:text-xl text-[#0857FF] bg-[#DDE8FF] cursor-pointer rounded xl:rounded-xl w-full text-center">
              Become a Courier
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <img src={welcomeImage} alt="A delivery man" />
        </div>
      </div>

      {/* Visible on screens less than or equals to 767px*/}
      <div className="h-full flex md:hidden flex-col items-center justify-center max-w-[90%] mx-auto">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <img src={welcomeImage} alt="A delivery man" />
          <h1 className="text-xl text-[#3C74ED] font-medium my-2.5 flex">
            Welcome to Cargo Connect
            <span>
                <img src={smallLogo} alt="Cargo Connect" />
            </span>
          </h1>
          <p className="text-[#575757] text-center">
            Discover a seamless delivery experience at your finger tips.
          </p>
        </div>
        <div className="flex justify-between items-center w-full gap-2 mb-5">
          <Link to="/signup" className="py-2 blue-bg text-white rounded-4xl cursor-pointer w-full text-center">
            Sign Up
          </Link>
          <Link to="/login" className="py-2 text-[#3C74ED] rounded-4xl cursor-pointer border border-[#3C74ED] w-full text-center">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
