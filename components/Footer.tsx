import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-12 px-44 py-12">
          <div className="col-span-4 flex flex-col gap-y-6">
            <Link className="flex items-center" href="/">
              <Image src="/logo.png" width={50} height={50} alt="logo" />
              <span className="ml-2 text-lg md:text-2xl font-bold text-gray-900">
                Tech Consulting Partners
              </span>
            </Link>
            <div className="text-[#515151] text-[16px] font-poppins font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="text-[#515151] text-[16px] font-poppins font-normal">
              @Tech Consulting Partners
            </div>
          </div>
          <div className="col-span-2">
            <ul className="flex flex-col gap-y-1">
              <li className="text-[18px] text-[#000] font-poppins font-medium mt-4 mb-7">
                <Link href="/why-us">About Us</Link>
              </li>
              <li className="text-[16px] text-[#515151] font-poppins font-normal ">
                <Link href="/why-us">Our Team</Link>
              </li>

              <li className="text-[16px] text-[#515151] font-poppins font-normal ">
                {" "}
                <Link href="/why-us">Blog</Link>
              </li>
              <li className="text-[16px] text-[#515151] font-poppins font-normal ">
                {" "}
                <Link href="/why-us">Careers</Link>
              </li>
              <li className="text-[16px] text-[#515151] font-poppins font-normal ">
                {" "}
                <Link href="/why-us">Our Work</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-4 flex flex-col gap-y-6">
            <div className="text-[18px] text-[#000] font-poppins font-medium mt-4 mb-2">
              Contact Us
            </div>
            <div className="text-[16px] text-[#515151] font-poppins leading-[28px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div>+908 89097 890</div>
          </div>
          <div className="col-span-2 flex gap-x-2 items-end">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
          <Linkedin />
            </div>
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <Facebook />
            </div>
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            {" "}
              <Instagram />
            </div>
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            {" "}
              <Twitter />
            </div>
          </div>
        </div>
      </div>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 bg-white">
        <p className="text-xs text-gray-600">
          © 2024 Tech Consulting Partners. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs text-gray-600 hover:text-logo-600 hover:underline underline-offset-4"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs text-gray-600 hover:text-logo-600 hover:underline underline-offset-4"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
