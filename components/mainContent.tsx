import React from "react";
import Image from "next/image";

export const MainContent = () => {
  const Data = [
    {
      id: 1,
      upperheading: "Lorem Ipsum is simply dummy text",
      lowerHeading: "Lorem Ipsum is simply dummy text",
      icon: "/happy.png",
      background: "#08D3BB",
      mainHeading: "Lorem Ipsum is simply dummy text of the printing.",
      content:
        "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & iOS.",
      image: "/recent.png",
    },
    {
      id: 2,
      upperheading: "Another Heading Example",
      lowerHeading: "Another Subheading Example",
      icon: "/happy.png",
      background: "#1090CB",
      mainHeading: "Another Main Heading for Reverse Layout.",
      content:
        "This is another example of alternating layout design where the image appears on the left and the text appears on the right.",
      image: "/recent.png",
    },
    {
      id: 3,
      upperheading: "Yet Another Heading",
      lowerHeading: "Yet Another Subheading",
      icon: "/happy.png",
      background: "#9208D3",
      mainHeading: "Final Main Heading for Default Layout.",
      content:
        "This layout example is similar to the first one, maintaining the same structure for consistency in design.",
      image: "/recent.png",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-12 px-6 md:px-44">
      {Data.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-col ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } justify-between items-center gap-8 w-full`}
        >
          {/* Content 1: Text and Icon */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            {/* Icon and Headings */}
            <div className="flex items-center gap-4">
              <div
                className="w-[58px] h-[58px] flex justify-center items-center rounded-full"
                style={{ backgroundColor: item.background }}
              >
                <Image src={item.icon} width={30} height={30} alt="icon" />
              </div>
              <div>
                <div className="font-medium text-[17px] font-poppins">
                  {item.upperheading}
                </div>
                <div className="text-[#868686] text-[14px] font-poppins">
                  {item.lowerHeading}
                </div>
              </div>
            </div>

            {/* Main Heading and Content */}
            <div className="flex flex-col gap-4">
              <div className="font-semibold text-[30px] text-gray-800 font-poppins">
                {/* Split mainHeading and style first two words */}
                {item.mainHeading.split(" ").map((word, index) => {
                  if (index < 2) {
                    return (
                      <span key={index} className="text-logo-600 font-semibold">
                        {word}{" "}
                      </span>
                    );
                  }
                  return <span key={index}>{word} </span>;
                })}
              </div>
              <div className="text-[17px] text-[#545454] font-poppins leading-[34.16px]">
                {item.content}
              </div>
            </div>
          </div>

          {/* Content 2: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={item.image}
              width={700}
              height={700}
              alt="mainImage"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
