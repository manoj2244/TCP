import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Zap, Brain, MessageCircle, Eye, Globe, Star } from "lucide-react"


const features = [
  {
    id: "ai-development",
    title: "AI Development",
    description: "Harness the power of AI to build intelligent, scalable solutions tailored to your business needs.",
    icon: Brain
  },
  {
    id: "nlp-solutions",
    title: "NLP Solutions",
    description: "Extract meaningful insights from text data with our advanced Natural Language Processing solutions.",
    icon: MessageCircle
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description: "Leverage cutting-edge computer vision technology to automate and enhance visual data analysis.",
    icon: Eye
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Build fast, secure, and responsive websites and web applications customized to your business.",
    icon: Globe
  },
  {
    id: "automations",
    title: "Automations",
    description: "Streamline workflows and boost efficiency through smart automation tailored to your processes.",
    icon: Zap
  },
  {
    id: "recommendation-systems",
    title: "Recommendation Systems",
    description: "Offer personalized recommendations to your users using our advanced recommendation engine.",
    icon: Star
  }
]

export default function LandingPage() {
  return (
      <main className="flex-1">
        <section className="w-full py-4 md:py-6 lg:py-8 flex justify-around bg-logo-600">
          <div className="container px-4 md:px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">  {/* lg:grid-cols-3 */}
               <div className="flex flex-col justify-center space-y-4">   {/*  col-span-2 */}
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Revolutionize Your Business with AI
                  </h1>
                  <p className="max-w-[600px] text-blue-100 md:text-xl">
                    Harness the power of Generative AI to transform your products, services, and customer experiences.
                  </p>
                </div>
                {/* <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-logo-600 hover:bg-blue-100">Get Started</Button>
                  <Button variant='outline' className="text-white border-white hover:bg-blue-900/20 hover:text-white">
                    <Link href='/services'>
                      Our Services
                    </Link>
                  </Button>
                </div> */}
              </div>
              <div className=" flex justify-center">
                {/* <Image
                  src="/home.png"
                  alt="AI-powered solutions"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover"
                  priority
                /> */}
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-4 md:py-6 lg:py-8 flex justify-around bg-white">
          <div className="container px-4 md:px-6 mx-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-gray-900">Our AI Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => {
                const Icon = feature.icon; // Assign the icon component dynamically
                return (
                  <div key={feature.id} className="flex flex-col items-center text-center">
                    <Icon className="h-12 w-12 text-logo-600 mb-4" /> {/* Dynamically render the icon */}
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        <section id="cta" className="w-full py-4 md:py-6 lg:py-8 flex justify-around bg-gray-100">
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
                  <Button type="submit" className="bg-logo-600 text-white hover:bg-blue-600/80">
                    <Link href='https://calendly.com/techconsultingpartners/30min'>
                      Get in touch
                    </Link>
                  </Button>
                {/* <p className="text-xs text-gray-600">
                  By subscribing, you agree to our{" "}
                  <Link className="underline underline-offset-2 hover:text-logo-600" href="#">
                    Terms & Conditions
                  </Link>
                  .
                </p> */}
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}
