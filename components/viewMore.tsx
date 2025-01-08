import React from "react";

import { Button } from "./ui/button";

export const ViewMoreCard = () => {


  return (
    <div className="grid grid-cols-12 px-6 md:px-44 gap-x-[137.5px]">

        <div className="col-span-6">
            <div className="bg-[#F4F4F4] w-[650px] h-[500px] my-20 rounded-[20px]">
                <div className="p-20 text-center flex flex-col gap-y-8 ">
                <div className="font-semibold font-poppins text-[25px] ">
                Lorem Ipsum is simply dummy text.
                </div>
                <div className="text-[16px] text-[#545454] font-poppins font-normal leading-[35px]">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. 
                </div>
                <div>
                <Button className="bg-[#1090CB]   text-white font-poppins font-normal text-[16px] p-5">
                 View More
                </Button>
                </div>
                </div>
              

            </div>
        </div>
        <div className="col-span-6">
        <div className="bg-[#1090CB] w-[650px] h-[500px] my-20 rounded-[20px] !text-white">
                <div className="p-20 text-center flex flex-col gap-y-8 ">
                <div className="font-semibold font-poppins text-[25px] ">
                Lorem Ipsum is simply dummy text.
                </div>
                <div className="text-[16px]  font-poppins font-normal leading-[35px]">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. 
                </div>
                <div>
                <Button className="bg-[#fff]   text-[#000] font-poppins font-normal text-[16px] p-5 hover:bg-[#000] hover:text-white">
                 View More
                </Button>
                </div>
                </div>
              

            </div>
        </div>
  
    </div>
  );
};
