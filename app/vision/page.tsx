import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Vision | Tech Consulting Partners',
  description:"Vision of Tech Consulting Partners."
}

const VisionPage: React.FC = () => {
  return (
      <main className="flex-1">
        <section id="vision" className="w-full h-screen py-6 md:py-10 lg:py-16 bg-white flex justify-around">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-900">Our Vision</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  At Tech Consulting Partners, we envision a world where cutting-edge technology seamlessly integrates with every aspect of our lives. Our goal is to harness the power of artificial intelligence and advanced technology to drive innovation, improve efficiency, and create sustainable solutions for businesses and communities worldwide.
                </p>
                <p className="text-lg text-gray-700">
                  We are committed to pushing the boundaries of what’s possible, leveraging our expertise to deliver transformative solutions that not only meet the needs of today but also anticipate the challenges of tomorrow. Our vision is to be at the forefront of technological advancement, leading the way in AI innovation and shaping the future of technology.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/vision-2.png"
                  alt="Vision"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>
  );
};

export default VisionPage;
