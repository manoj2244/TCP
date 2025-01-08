import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const NewsLetter = () => {
  return (
    <div className="bg-[#E8F4FA] text-center py-32 relative">
        <div className="absolute left-40 top-[-35px]">
        <Image
                      src={"/star.png"}
                      width={70}
                      height={70}
                      alt="star"
                    />
        </div>
        <div className="relative">
        <div className="font-poppins text-[30px] font-semibold pb-8 ">
        Lorem Ipsum is simply dummy 
      </div>
      <div className="absolute right-[30%] top-[-70px]">
        <Image
                      src={"/chart.png"}
                      width={70}
                      height={70}
                      alt="star"
                    />
        </div>
        </div>
        
    
      <div className="text-center flex justify-center items-center">
        <div className="flex gap-x-4 justify-center items-center w-[40%]">
          <Input
            id="email"
            name="emali"
            placeholder="Enter your email"
            className=" bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 py-6 "
          />
          <Button className="bg-[#000000]   text-white font-poppins font-normal text-[16px] py-6 ">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};
