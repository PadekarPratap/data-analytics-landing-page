import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="text-white container mx-auto text-center mt-10 md:mt-28 px-3">
      <div>
        <p className="text-parrotGreen font-bold text-lg uppercase">
          Growing with Data Analytics
        </p>
      </div>
      <h2 className="md:text-6xl lg:text-7xl text-5xl font-bold">
        Grow with data.
      </h2>
      <div className="flex items-center justify-center py-5">
        <p className="text-lg md:text-xl lg:text-2xl">
          Fact, flexible financing for
        </p>
        <TypeAnimation
          sequence={[
            "BTB",
            2000, // Waits 1s
            "BTC",
            2000, // Waits 2s
            "SASS",
            2000,
          ]}
          wrapper="p"
          speed={10}
          cursor={true}
          repeat={Infinity}
          className="text-lg md:text-xl lg:text-2xl pl-2 text-gray-500 font-bold"
        />
      </div>
      <div className="text-gray-500 font-bold text-lg md:text-2xl">
        <p>Monitor your data analytics to increase revenue fot BTB, BTC</p>
        <p> & SASS platforms</p>
        <button className="text-black bg-parrotGreen py-2 px-7 rounded-lg mt-6 hover:border-2 hover:border-parrotGreen hover:bg-[#000300] hover:text-white">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
