import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="px-6 py-12 md:px-44">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Logo and About Section */}
          <div className="md:col-span-4 flex flex-col gap-y-6">
            <Link className="flex items-center" href="/">
              <Image src="/logo.png" width={50} height={50} alt="logo" />
              <span className="ml-2 text-lg md:text-2xl font-bold text-gray-900">
                Tech Consulting Partners
              </span>
            </Link>
            <div className="text-[#515151] text-[14px] md:text-[16px] font-poppins font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="text-[#515151] text-[14px] md:text-[16px] font-poppins font-normal">
              @Tech Consulting Partners
            </div>
          </div>

          {/* About Us Links Section */}
          <div className="md:col-span-2">
            <ul className="flex flex-col gap-y-3">
              <li className="text-[16px] text-[#000] font-poppins font-medium mb-4">
                <Link href="/why-us">About Us</Link>
              </li>
              <li className="text-[14px] md:text-[16px] text-[#515151] font-poppins font-normal">
                <Link href="/why-us">Our Team</Link>
              </li>
              <li className="text-[14px] md:text-[16px] text-[#515151] font-poppins font-normal">
                <Link href="/why-us">Blog</Link>
              </li>
              <li className="text-[14px] md:text-[16px] text-[#515151] font-poppins font-normal">
                <Link href="/why-us">Careers</Link>
              </li>
              <li className="text-[14px] md:text-[16px] text-[#515151] font-poppins font-normal">
                <Link href="/why-us">Our Work</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="md:col-span-4 flex flex-col gap-y-6">
            <div className="text-[16px] md:text-[18px] text-[#000] font-poppins font-medium">
              Contact Us
            </div>
            <div className="text-[14px] md:text-[16px] text-[#515151] font-poppins leading-[28px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="text-[14px] md:text-[16px]">+908 89097 890</div>
          </div>

          {/* Social Icons Section */}
          <div className="md:col-span-2 flex gap-4 justify-start items-end md:justify-end">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
              <Linkedin size={20} />
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
              <Facebook size={20} />
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
              <Instagram size={20} />
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
              <Twitter size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <footer className="flex flex-col md:flex-row gap-2 md:gap-0 py-6 w-full shrink-0 items-center px-6 md:px-44 border-t border-gray-200 bg-white">
        <p className="text-xs text-gray-600">
          © 2024 Tech Consulting Partners. All rights reserved.
        </p>
        <nav className="md:ml-auto flex gap-4">
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
