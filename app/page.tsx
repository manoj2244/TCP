import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Brain, Code, Zap, Sparkles, Menu } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b border-gray-200 bg-white">
        <Link className="flex items-center justify-center" href="#">
          <Brain className="h-6 w-6 text-indigo-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">Tech Consulting Partners</span>
        </Link>
        <nav className="hidden md:flex items-center ">
          <Link className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:underline hover:bg-gray-100 rounded-md underline-offset-4 px-4 py-2" href="#">
            Home
          </Link>

          {/* Dropdown for About */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:underline underline-offset-4 ">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent >
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="#about">Our Team</Link>
                  </NavigationMenuLink>
                  <br />
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="#history">History</Link>
                  </NavigationMenuLink>
                  <br />
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="#vision">Vision</Link>
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
                    <Link href="#ai-development">AI Development</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="#nlp-solutions">NLP Solutions</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="#creative-ai">Creative AI</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

            <Link className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:underline hover:bg-gray-100 rounded-md underline-offset-4 pl-3 pr-4 py-2" href="#why-us">
              Why Us
            </Link>

          
          <Link className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:underline hover:bg-gray-100 rounded-md underline-offset-4 px-4 py-2" href="#blog">
            Blog
          </Link>
          <Link className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:underline hover:bg-gray-100 rounded-md underline-offset-4 px-4 py-2" href="#careers">
            Careers
          </Link>
          <Link className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:underline hover:bg-gray-100 rounded-md underline-offset-4 px-4 py-2" href="#contact">
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
              <Link href="#">Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#about">About</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#services">Services</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#why-us">Why Us</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#blog">Blog</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#careers">Careers</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#contact">Contact Us</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-indigo-600">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Revolutionize Your Business with AI
                  </h1>
                  <p className="max-w-[600px] text-indigo-100 md:text-xl">
                    Harness the power of Generative AI to transform your products, services, and customer experiences.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-indigo-600 hover:bg-indigo-100">Get Started</Button>
                  <Button variant="outline" className="text-white border-white hover:bg-indigo-700 hover:text-white">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="AI-powered solutions"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-900">Our AI Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Code className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">AI-Powered Code Generation</h3>
                <p className="text-gray-600">Generate high-quality code snippets and automate repetitive coding tasks.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">Natural Language Processing</h3>
                <p className="text-gray-600">Analyze and understand human language for chatbots and content generation.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Sparkles className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">Creative AI Solutions</h3>
                <p className="text-gray-600">Generate unique designs, music, and art with our advanced AI models.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Ready to Transform Your Business?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join the AI revolution today and stay ahead of the competition.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                    required
                  />
                  <Button type="submit" className="bg-indigo-600 text-white hover:bg-indigo-700">Subscribe</Button>
                </form>
                <p className="text-xs text-gray-600">
                  By subscribing, you agree to our{" "}
                  <Link className="underline underline-offset-2 hover:text-indigo-600" href="#">
                    Terms & Conditions
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 bg-white">
        <p className="text-xs text-gray-600">© 2023 AI Innovate. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-gray-600 hover:text-indigo-600 hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-gray-600 hover:text-indigo-600 hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
