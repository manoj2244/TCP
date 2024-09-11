import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import Link from "next/link" 
import { Code, Zap, Sparkles, Brain, MessageCircle, Eye, Globe, Star } from "lucide-react"


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
        <section className="w-full py-14 md:py-24 lg:py-32 flex justify-around bg-indigo-600">
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
                  <Button variant='outline' className="text-white border-white hover:bg-indigo-700 hover:text-white">
                    <Link href='/services'>
                      Our Services
                    </Link>
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
        <section id="features" className="w-full py-14 md:py-24 lg:py-32 flex justify-around bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-900">Our AI Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => {
                const Icon = feature.icon; // Assign the icon component dynamically
                return (
                  <div key={feature.id} className="flex flex-col items-center text-center">
                    <Icon className="h-12 w-12 text-indigo-600 mb-4" /> {/* Dynamically render the icon */}
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 flex justify-around bg-gray-100">
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
  )
}
