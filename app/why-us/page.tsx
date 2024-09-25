import React from 'react';
import { Shield, Settings, Award, Star } from 'lucide-react';
import type { Metadata } from 'next'
import Image from 'next/image'; 

export const metadata: Metadata = {
  title: 'Why Us? | Tech Consulting Partners',
  description:"When to choose Tech Consulting Partners."
}


const WhyUsPage: React.FC = () => {
  return (
    <main className="flex-1">
      <section id="why-us" className="w-full h-screen py-6 md:py-10 lg:py-16 flex justify-around bg-white">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-900">Why Choose Us?</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                At Tech Consulting Partners, we stand out for our commitment to delivering exceptional value through innovative technology solutions. Here’s why you should choose us:
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-logo-600" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Expertise in Cutting-Edge Technology</h3>
                    <p className="text-gray-600">
                      Our team of experts is skilled in the latest technologies and methodologies, ensuring that we deliver solutions that are both innovative and effective.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Settings className="h-8 w-8 text-logo-600" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Customized Solutions</h3>
                    <p className="text-gray-600">
                      We tailor our services to meet the unique needs of each client, providing personalized solutions that align with your specific goals and challenges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="h-8 w-8 text-logo-600" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Proven Track Record</h3>
                    <p className="text-gray-600">
                      Our portfolio includes a wide range of successful projects across various industries, demonstrating our capability to deliver results and drive business success.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Star className="h-8 w-8 text-logo-600" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Commitment to Excellence</h3>
                    <p className="text-gray-600">
                      We are dedicated to providing the highest quality of service and ensuring that every project meets our stringent standards for excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/why-us.png"
                alt="Why Choose Us"
                className="w-full max-w-lg rounded-lg object-cover"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhyUsPage;
