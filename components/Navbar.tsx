import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Brain, Menu } from "lucide-react";
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
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b border-gray-200 bg-white sticky top-0 z-50">
      <Link className="flex items-center justify-center" href="/">
        <Brain className="h-6 w-6 text-indigo-600" />
        <span className="ml-2 text-lg md:text-2xl font-bold text-gray-900">Tech Consulting Partners</span>
      </Link>
      <nav className="hidden md:flex items-center">
        <Link href="/" className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:underline hover:bg-gray-100 rounded-md underline-offset-4 px-4 py-2">
          Home
        </Link>

        {/* Dropdown for About */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:underline underline-offset-4">
                About
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/team">Our Team</Link>
                </NavigationMenuLink>
                {/* <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/history">History</Link>
                </NavigationMenuLink> */}
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/vision">Vision</Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Dropdown for Services */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:underline underline-offset-4">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/services/ai-development">AI Development</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/services/nlp-solutions">NLP Solutions</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/services/computer-vision">Computer Vision</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/services/web-development">Web Development</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/services/automation">Automations</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/services/recommendation-systems">Recommendation Systems</Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Link href="/why-us" className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:underline hover:bg-gray-100 rounded-md underline-offset-4 pl-3 pr-4 py-2">
          Why Us
        </Link>
        <Link href="/projects" className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:underline hover:bg-gray-100 rounded-md underline-offset-4 pl-3 pr-4 py-2">
          Our Work
        </Link>
        <Link href="/blogs" className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:underline hover:bg-gray-100 rounded-md underline-offset-4 px-4 py-2" >
          Blog
        </Link>
        <Link href="/careers" className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:underline hover:bg-gray-100 rounded-md underline-offset-4 px-4 py-2">
          Careers
        </Link>
        <Link href="https://calendly.com/techconsultingpartners/30min" className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:underline hover:bg-gray-100 rounded-md underline-offset-4 px-4 py-2">
          Contact Us
        </Link>
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
            <Link href="https://calendly.com/techconsultingpartners/30min">Contact Us</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

export default Navbar;
