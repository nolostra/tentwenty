import React from "react";
import image from "../assets/smallBlock.jpg";
const Banner: React.FC = () => (
  <div className="w-full h-screen font-sans">
    <div className="h-1/4" />
    <div className="flex flex-col items-start justify-center  text-white p-6 px-24">
      <p className=" text-xs mb-6 mt-1">Welcome To TenTwenty Farms</p>
      <p className=" text-5xl text-left  w-full max-w-screen-lg space-y-1  tracking-wider ">
        <span className="block space-x-8 ">From Our Farms</span>
        <span className="block ">To Your Hands</span>
      </p>
    </div>
    <div className="h-20" />
    <div className="flex">
      <div className="w-1/12 p-10  flex justify-center items-center h-40 mt-1 ml-24">
        <div className="border ">
          {" "}
          <div
            className="absolute  h-[65px] w-[65px] "
            style={{
              borderTop: "6px solid white",
              borderRight: "6px solid white",
              transform: "translate(70%, -5%)",
            }}
          />
          <div className="border-8 border-transparent">
            <div className=" border-8 border-transparent">
              <div
                className="h-[75px] w-[75px] bg-white border"
                style={{
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row ml-10 items-center mt-2">
        <span>01</span>
        <div className="border-t border-gray-400 w-20"></div>
        <span>04</span>
      </div>
    </div>
  </div>
);

export default Banner;
