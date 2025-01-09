import Link from "next/link";
// import Image from "next/image"
import { Button } from "@/components/ui/button";

import { Zap, Brain, MessageCircle, Eye, Globe, Star } from "lucide-react";
import Image from "next/image";
import { MainContent } from "@/components/mainContent";
import { ViewMoreCard } from "@/components/viewMore";
import { NewsLetter } from "@/components/newsLetter";

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
    color: "#4628A4",
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description:
      "Enhance visual data analysis with cutting-edge computer vision.",
    icon: Eye,
    bgColor: "#ECFFDA",
    color: "#5FC300",
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Create fast, secure, and responsive websites and apps.",
    icon: Globe,
    bgColor: "#FFE5DA",
    color: "#BB3800",
  },
  {
    id: "automations",
    title: "Automations",
    description:
      "Streamline workflows and increase efficiency with smart automation.",
    icon: Zap,
    bgColor: "#EFEAFF",
    color: "#4628A4",
  },
  {
    id: "recommendation-systems",
    title: "Recommendation Systems",
    description:
      "Provide personalized recommendations with advanced algorithms.",
    icon: Star,
    bgColor: "#FFE5DA",
    color: "#BB3800",
  },
];

export default function LandingPage() {
  return (
    <main className="flex-1 overflow-hidden !bg-white">
  <section
  className="w-full h-[743px] py-4 md:py-6 lg:py-8 flex justify-around relative"
  style={{
    backgroundImage: "url('/Rectangle 4.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Left image */}
  <div className="absolute top-[5%] left-[-15px] md:left-[-60px] z-[10] overflow-visible">
    <div className="w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px]">
      <Image
        src="/left.png"
        alt="Left decorative image"
        width={50}
        height={50}
        className="w-full h-auto"
      />
    </div>
  </div>

  {/* Right image */}
  <div className="absolute top-[5%] right-[-20px] z-10">
    <div className="w-[40px] sm:w-[60px] md:w-[78px] lg:w-[100px]">
      <Image
        src="/right.png"
        alt="Right decorative image"
        width={50}
        height={50}
        className="w-full h-auto"
      />
    </div>
  </div>

  {/* Main Content */}
{/* Main Content */}
<div className="container px-4 md:px-6">
  <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-4 lg:items-center">
    {/* Text Section */}
    <div className="flex flex-col justify-center space-y-4">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#000] font-poppins text-center lg:text-left">
          Revolutionize Your Business{" "}
          <span className="text-[#1090CB]">with AI</span>
        </h1>
        <p className="max-w-[600px] text-[#5C5C5C] md:text-xl leading-[32.69px] text-[16px] font-medium font-poppins text-center lg:text-left">
          Harness the power of Generative AI to transform your products,
          services, and customer experiences.
        </p>
      </div>

      {/* Main Image - Only visible on small screens */}
      <div className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:hidden mx-auto">
        <Image
          src="/main.png"
          width={500}
          height={500}
          alt="Main image"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <Button className="bg-[#1090CB] text-white font-poppins font-normal text-[16px] p-5">
          Get Started
        </Button>
        <Button
          variant="outline"
          className="text-[#1090CB] border-[#1090CB] hover:text-[gray] p-5"
        >
          <Link href="/services">View More</Link>
        </Button>
      </div>
    </div>

    {/* Main Image - Visible on larger screens */}
    <div className="relative hidden lg:block w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto">
      <Image
        src="/main.png"
        width={600}
        height={600}
        alt="Main image"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</div>

</section>


      <section
        id="features"
        className="w-full py-4 md:py-6 lg:py-8 flex justify-around bg-white"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const bgColor = feature.bgColor;
              return (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-x-4 items-center"
                >
                  <div
                    className={`w-16 h-16 sm:w-[83px] sm:h-[83px] rounded-lg flex justify-center items-center`}
                    style={{
                      backgroundColor: bgColor,
                    }}
                  >
                    <Icon
                      className="h-8 w-8 sm:h-10 sm:w-10"
                      style={{
                        color: feature.color,
                      }}
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="font-medium font-poppins text-lg sm:text-xl leading-6 text-[#000000]">
                      {feature.title}
                    </div>
                    <div className="text-sm leading-5 font-poppins font-normal text-[#969696] max-w-full sm:max-w-[350px]">
                      {feature.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="border-t-1 border-[#C7C7C7] my-4" />
      <section className="flex justify-center items-center flex-col py-10 px-4">
        <div className="text-[24px] md:text-[30px]  font-poppins font-semibold text-center">
          Lorem Ipsum is simply dummy text of the printing.
        </div>
        <div className="text-[#868686] font-poppins font-normal text-sm md:text-[18px] leading-6 md:leading-8 w-full md:w-[670px] text-center mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry
        </div>
      </section>

      {/* <section
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
             
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-white">
        <MainContent />
      </section>
      <hr className="border-t-1 border-[#C7C7C7] mt-12 !bg-white" />

      <section className="bg-white">
        <ViewMoreCard />
      </section>
      <section>
        <NewsLetter />
      </section>
    </main>
  );
}
