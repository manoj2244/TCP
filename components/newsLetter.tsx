import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const NewsLetter = () => {
  return (
    <div className="bg-[#E8F4FA] text-center py-16 md:py-32 relative">
      {/* Decorative Star on the Left */}
      <div className="absolute left-4 md:left-40 top-[-20px] md:top-[-35px]">
        <Image src={"/star.png"} width={40} height={40} alt="star" className="md:w-[70px] md:h-[70px]" />
      </div>

      {/* Main Heading and Decorative Chart */}
      <div className="relative">
        <div className="font-poppins text-[20px] md:text-[30px] font-semibold pb-4 md:pb-8">
          Lorem Ipsum is simply dummy
        </div>
        <div className="absolute right-[10%] md:right-[30%] top-[-40px] md:top-[-70px]">
          <Image src={"/chart.png"} width={40} height={40} alt="chart" className="md:w-[70px] md:h-[70px]" />
        </div>
      </div>

      {/* Input and Button Section */}
      <div className="text-center flex justify-center items-center">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-[90%] md:w-[40%]">
          <Input
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 py-4 md:py-6"
          />
          <Button className="w-full md:w-auto bg-[#000000] text-white font-poppins font-normal text-[16px] py-4 md:py-6">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};
