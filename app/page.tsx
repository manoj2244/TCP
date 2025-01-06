import Link from "next/link";
// import Image from "next/image"
import { Button } from "@/components/ui/button";

import { Zap, Brain, MessageCircle, Eye, Globe, Star } from "lucide-react";
import { url } from "inspector";
import Image from "next/image";

const features = [
  {
    id: "ai-development",
    title: "AI Development",
    description: "Build scalable AI solutions tailored to your business.",
    icon: Brain,
    bgColor: "#DAE6FF",
    color: "#00329B",
  },
  {
    id: "nlp-solutions",
    title: "NLP Solutions",
    description:
      "Extract insights from text data using advanced NLP techniques.",
    icon: MessageCircle,
    bgColor: "#EFEAFF",
    color:"#4628A4"
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description:
      "Enhance visual data analysis with cutting-edge computer vision.",
    icon: Eye,
    bgColor: "#ECFFDA",
    color:"#5FC300"
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Create fast, secure, and responsive websites and apps.",
    icon: Globe,
    bgColor: "#FFE5DA",
    color:"#BB3800"

  },
  {
    id: "automations",
    title: "Automations",
    description:
      "Streamline workflows and increase efficiency with smart automation.",
    icon: Zap,
    bgColor: "#EFEAFF",
    color:"#4628A4"

  },
  {
    id: "recommendation-systems",
    title: "Recommendation Systems",
    description:
      "Provide personalized recommendations with advanced algorithms.",
    icon: Star,
    bgColor: "#FFE5DA",
    color:"#BB3800"
  },
];

export default function LandingPage() {
  return (
    <main className="flex-1">
      <section
        className="w-full h-[743px] py-4 md:py-6 lg:py-8 flex justify-around  relative"
        style={{
          backgroundImage: "url('/Rectangle 4.png')", // Make sure the path is correct
          backgroundSize: "cover", // Optional: scales the image to cover the section
          backgroundPosition: "center", // Optional: aligns the image in the center
          backgroundRepeat: "no-repeat", // Optional: prevents the image from repeating
        }}
      >
        <div className="absolute left-[-28px] top-[15%]  z-10 w-[80px] md:w-[100px">
          <Image src="/left.png" width={100} height={100} alt="Before image" />
        </div>
        <div className="absolute top-[10%] right-[-0px]  z-10 ">
          <Image src="/right.png" width={78} height={75} alt="After image" />
        </div>
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            {" "}
            {/* lg:grid-cols-3 */}
            <div className="flex flex-col justify-center space-y-4">
              {" "}
              {/*  col-span-2 */}
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#000] font-poppins">
                  Revolutionize Your Business{" "}
                  <span className="text-[#1090CB]">with AI</span>
                </h1>
                <p className="max-w-[600px] text-[#5C5C5C] md:text-xl leading-[32.69px] text-[16px] font-medium font-poppins !mt-2 !mb-4">
                  Harness the power of Generative AI to transform your products,
                  services, and customer experiences.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 ">
                <Button className="bg-[#1090CB]   text-white font-poppins font-normal text-[16px] p-5">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="text-[#1090CB] border-[#1090CB]  hover:text-[gray] p-5"
                >
                  <Link href="/services">View More</Link>
                </Button>
              </div>
            </div>
            <div className="relative w-[500px] h-[500px]">
              {/* Main background image */}
              <Image
                src="/main.png"
                width={500}
                height={500}
                alt="Main image"
                className="relative z-1"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="w-full py-4 md:py-6 lg:py-8 flex justify-around bg-white"
      >
        <div className="container px-4 md:px-6 mx-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              const bgColor = feature.bgColor;
              return (
             

                <div className="flex w-full gap-x-2 ">
                  <div
                    className={`w-[83px] h-[83px] !max-w-[100px] rounded-[20px] flex justify-center`}
                    style={{
                      backgroundColor: bgColor,
                    }}
                  >
                    <Icon
                      className="flex justify-center items-center h-full w-[50px]  "
                      style={{
                        color: feature.color,
                      }}
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="">
                      <div className=" font-medium font-poppins text-[20px] leading-[35px] text-[#000000]">
                        {feature.title}
                      </div>
                      <div className="text-[15px] leading-[26.56px] font-poppins font-normal text-[#969696] w-[350px]">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <hr className="border-t-1 border-[#C7C7C7] my-4" />

      <section
        id="cta"
        className="w-full py-4 md:py-6 lg:py-8 flex justify-around bg-gray-100"
      >
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
              <Button
                type="submit"
                className="bg-logo-600 text-white hover:bg-blue-600/80"
              >
                <Link href="/contact">Get in touch</Link>
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
  );
}
