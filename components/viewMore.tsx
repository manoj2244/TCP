import React from "react";
import { Button } from "./ui/button";

export const ViewMoreCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 px-4 md:px-[160px] md:gap-36 gap-y-4 py-12 bg-white">
      {/* Left Card */}
      <div className="flex justify-center">
        <div className="bg-[#F4F4F4] w-full sm:w-[650px] h-[450px] rounded-[20px]">
          <div className="p-8 sm:p-12 md:p-20 text-center flex flex-col gap-y-8">
            <div className="font-semibold font-poppins text-[20px] sm:text-[25px]">
              Lorem Ipsum is simply dummy text.
            </div>
            <div className="text-[14px] sm:text-[16px] text-[#545454] font-poppins font-normal leading-[28px] sm:leading-[35px]">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for  several top platforms, including Android & iOS.
            </div>
            <div>
              <Button className="bg-[#1090CB] text-white font-poppins font-normal text-[14px] sm:text-[16px] p-4 sm:p-5">
                View More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Card */}
      <div className="flex justify-center">
        <div className="bg-[#1090CB] w-full sm:w-[650px] h-[450px] rounded-[20px] !text-white">
          <div className="p-8 sm:p-12 md:p-20 text-center flex flex-col gap-y-8">
            <div className="font-semibold font-poppins text-[20px] sm:text-[25px]">
              Lorem Ipsum is simply dummy text.
            </div>
            <div className="text-[14px] sm:text-[16px] font-poppins font-normal leading-[28px] sm:leading-[35px]">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & iOS.
            </div>
            <div>
              <Button className="bg-[#fff] text-[#000] font-poppins font-normal text-[14px] sm:text-[16px] p-4 sm:p-5 hover:bg-[#000] hover:text-white">
                View More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
