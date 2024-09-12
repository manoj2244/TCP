import { Brain, MessageCircle, Eye, Globe, Zap, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Services | Tech Consulting Partners',
  description:"Services offered by Tech Consulting Partners."
}

const services = [
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

const Services = () => {
  return (
    <main className="h-screen bg-gray-100">
      <section className="w-full py-6 md:py-10 lg:py-16 bg-white flex justify-around">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 mb-12 text-center">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon; // Assign the icon component to render dynamically
              return (
                <Card key={service.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <CardHeader className="p-6 flex items-center space-x-4">
                    <Icon className="h-8 w-8 text-indigo-600" /> {/* Use the icon dynamically */}
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="px-6">
                    <p className="text-gray-600 text-center">{service.description}</p>
                  </CardContent>
                  <CardContent className="px-6 text-center">
                    <Link href='/${service.id}' className="text-indigo-600 underline">More details</Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
