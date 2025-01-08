"use client"; // Marking the file as a client component

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation"; // Using usePathname from next/navigation

const Navbar = () => {
  const pathname = usePathname(); // Accessing current pathname

  // Helper function to check if a route is active
  const isActive = (path: string): boolean => pathname === path;

  return (
    <header className="px-4 lg:px-6 h-24 flex items-center justify-between border-b border-gray-200 bg-white sticky top-0 z-50">
      <Link className="flex items-center justify-center" href="/">
        <Image src="/logo.png" width={50} height={50} alt="logo" />
        <span className="ml-2 text-lg md:text-2xl font-bold text-gray-900">
          Tech Consulting Partners
        </span>
      </Link>
      <nav className="hidden md:flex items-center">
        {/* Home Link */}
        <Link
          href="/"
          className={`relative text-[16px] font-poppins font-medium text-gray-700 hover:text-logo-600  hover:bg-gray-100 rounded-md underline-offset-4 px-4 py-2
            ${isActive("/") ? "!text-blue-600 active-link" : ""}`}
        >
          Home
          {isActive("/") && (
            <span className="absolute left-[5px] top-[5px] mx-auto w-2 h-2 rounded-full bg-[#08D3BB]"></span>
          )}

        </Link>

        {/* About Dropdown */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={`text-[16px] font-poppins font-medium text-gray-700 hover:text-logo-600  underline-offset-4 ${
                    (isActive("/team") ||isActive("/vision") ) ? "!text-blue-600 active-link" : ""
                  }` }>
                About
                {(isActive("/team") ||isActive("/vision") )&& (
                    <span className="absolute left-[5px] top-[5px] mx-auto w-2 h-2 rounded-full bg-[#08D3BB]"></span>
                  )}
             
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink
                  asChild
                  className={`${
                    isActive("/team") ? "text-blue-600 active-link" : ""
                  } ${navigationMenuTriggerStyle()}`}
                >
                  <Link href="/team">Our Team</Link>
                
                </NavigationMenuLink>

                <NavigationMenuLink
                  asChild
                  className={`${
                    isActive("/vision") ? "text-blue-600 active-link" : ""
                  } ${navigationMenuTriggerStyle()}`}
                >
                  <Link href="/vision">Vision</Link>
                 
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Services Dropdown */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={`text-[16px] font-poppins font-medium text-gray-700 hover:text-logo-600  underline-offset-4 ${
                    (isActive("/services/ai-development") ||isActive("/services/nlp-solutions") || isActive("/services/computer-vision")||isActive("/services/web-development")||isActive("/services/automation")||isActive("/services/recommendation-systems")) ? "!text-blue-600 active-link" : ""
                  }`}>
                Services
                {(isActive("/services/ai-development") ||isActive("/services/nlp-solutions") || isActive("/services/computer-vision")||isActive("/services/web-development")||isActive("/services/automation")||isActive("/services/recommendation-systems"))&& (
                    <span className="absolute left-[5px] top-[5px] mx-auto w-2 h-2 rounded-full bg-[#08D3BB]"></span>
                  )}
             
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink
                  asChild
                  className={`${
                    isActive("/services/ai-development")
                      ? "text-blue-600 active-link"
                      : ""
                  } ${navigationMenuTriggerStyle()}`}
                >
                  <Link href="/services/ai-development">AI Development</Link>
                </NavigationMenuLink>

                <NavigationMenuLink
                  asChild
                  className={`${
                    isActive("/services/nlp-solutions")
                      ? "text-blue-600 active-link"
                      : ""
                  } ${navigationMenuTriggerStyle()}`}
                >
                  <Link href="/services/nlp-solutions">NLP Solutions</Link>
                </NavigationMenuLink>

                <NavigationMenuLink
                  asChild
                  className={`${
                    isActive("/services/computer-vision")
                      ? "text-blue-600 active-link"
                      : ""
                  } ${navigationMenuTriggerStyle()}`}
                >
                  <Link href="/services/computer-vision">Computer Vision</Link>
                </NavigationMenuLink>

                <NavigationMenuLink
                  asChild
                  className={`${
                    isActive("/services/web-development")
                      ? "text-blue-600 active-link"
                      : ""
                  } ${navigationMenuTriggerStyle()}`}
                >
                  <Link href="/services/web-development">Web Development</Link>
                </NavigationMenuLink>

                <NavigationMenuLink
                  asChild
                  className={`${
                    isActive("/services/automation")
                      ? "text-blue-600 active-link"
                      : ""
                  } ${navigationMenuTriggerStyle()}`}
                >
                  <Link href="/services/automation">Automations</Link>
                </NavigationMenuLink>

                <NavigationMenuLink
                  asChild
                  className={`${
                    isActive("/services/recommendation-systems")
                      ? "text-blue-600 active-link"
                      : ""
                  } ${navigationMenuTriggerStyle()}`}
                >
                  <Link href="/services/recommendation-systems">
                    Recommendation Systems
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Other Links */}
        {/* <Link
          href="/why-us"
          className={`relative text-[16px] font-poppins font-medium text-gray-700 hover:text-logo-600  hover:bg-gray-100 rounded-md underline-offset-4 pl-3 pr-4 py-2 ${
            isActive("/why-us") ? "!text-blue-600 active-link" : ""
          }`}
        >
          Why Us
          {isActive("/why-us" )&& (
                    <span className="absolute left-[3px] top-[3px] mx-auto w-2 h-2 rounded-full bg-[#08D3BB]"></span>
                  )}
        </Link> */}
        <Link
          href="/projects"
          className={`relative text-[16px] font-poppins font-medium text-gray-700 hover:text-logo-600  hover:bg-gray-100 rounded-md underline-offset-4 pl-3 pr-4 py-2 ${
            isActive("/projects") ? "!text-blue-600 active-link" : ""
          }`}
        >
          Our Work
          {isActive("/projects" )&& (
                    <span className="absolute left-[5px] top-[5px] mx-auto w-2 h-2 rounded-full bg-[#08D3BB]"></span>
                  )}
        </Link>
        <Link
          href="/blogs"
          className={` relative text-[16px] font-poppins font-medium text-gray-700 hover:text-logo-600  hover:bg-gray-100 rounded-md underline-offset-4 px-4 py-2 ${
            isActive("/blogs") ? "!text-blue-600 active-link" : ""
          }`}
        >
          Blog
          {isActive("/blogs" )&& (
                    <span className="absolute left-[5px] top-[5px] mx-auto w-2 h-2 rounded-full bg-[#08D3BB]"></span>
                  )}
        </Link>
        <Link
          href="/careers"
          className={` relative text-[16px] font-poppins font-medium text-gray-700 hover:text-logo-600  hover:bg-gray-100 rounded-md underline-offset-4 px-4 py-2 ${
            isActive("/careers") ? "!text-blue-600 active-link" : ""
          }`}
        >
          Careers
          {isActive("/careers" )&& (
                    <span className="absolute left-[5px] top-[5px] mx-auto w-2 h-2 rounded-full bg-[#08D3BB]"></span>
                  )}
        </Link>

        {/* Contact Us Button */}
        <div className="">
          <Button
            type="submit"
            className="bg-[#1090CB] text-white hover:bg-blue-600/80"
          >
            <Link href="/contact" className="">
              Contact Us
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Link href="/">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/about">About</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/services">Services</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/why-us">Why Us</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/projects">Our Work</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/blog">Blog</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/careers">Careers</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="https://calendly.com/techconsultingpartners/30min">
              Contact Us
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Navbar;
