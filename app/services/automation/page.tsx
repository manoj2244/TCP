import React from 'react';
import { Bot, Cog, Zap, BarChart, Repeat, Code, Calendar, Cloud, Layers, Workflow, Lock, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceItem } from '@/components/ServiceItem';
import Link from 'next/link';

const AutomationServices = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Hero Section */}
      <section className="bg-logo-600 text-white pb-3 pt-6">
        <div className="container mx-auto px-4 flex justify-center">
          <Bot className="h-12 w-12 text-blue-300 mr-2" />
          <div>
            <h1 className="text-5xl font-bold mb-2 text-center">Automation Services</h1>
            <p className="text-xl text-blue-200 mb-4 max-w-2xl mx-auto text-center">
              Streamline your operations, boost productivity, and unlock new efficiencies with our cutting-edge automation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        {/* Our Automation Expertise */}
        <section className="mb-10">
          <h2 className="text-4xl text-center font-semibold text-logo-600 mb-8">Our Automation Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceItem
              icon={<Cog className="h-8 w-8 text-logo-600" />}
              title="Process Automation"
              description="Streamline your workflows and eliminate repetitive tasks with our intelligent process automation solutions."
            />
            <ServiceItem
              icon={<Zap className="h-8 w-8 text-logo-600" />}
              title="Robotic Process Automation (RPA)"
              description="Leverage software robots to handle high-volume, repeatable tasks with speed and precision."
            />
            <ServiceItem
              icon={<BarChart className="h-8 w-8 text-logo-600" />}
              title="Intelligent Automation"
              description="Combine RPA with machine learning and AI to create smart, adaptive automation systems that learn and improve over time."
            />
            <ServiceItem
              icon={<Repeat className="h-8 w-8 text-logo-600" />}
              title="Continuous Integration/Continuous Deployment"
              description="Automate your software delivery pipeline for faster, more reliable releases and updates."
            />
          </div>
        </section>

        {/* Automation Solutions */}
        <section className="mb-10">
          <h2 className="text-4xl text-center font-semibold text-logo-600 mb-8">Automation Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceItem
              icon={<Workflow className="h-8 w-8 text-logo-600" />}
              title="Workflow Automation"
              description="Optimize your business processes with custom workflow automation tailored to your unique needs and goals."
            />
            <ServiceItem
              icon={<Lock className="h-8 w-8 text-logo-600" />}
              title="Security Automation"
              description="Enhance your cybersecurity posture with automated threat detection, response, and compliance management."
            />
            <ServiceItem
              icon={<Cloud className="h-8 w-8 text-logo-600" />}
              title="Cloud Automation"
              description="Simplify cloud management and optimize resource utilization with our cloud automation solutions."
            />
            <ServiceItem
              icon={<Code className="h-8 w-8 text-logo-600" />}
              title="Test Automation"
              description="Improve software quality and accelerate development cycles with comprehensive test automation strategies."
            />
          </div>
        </section>

        {/* Technologies & Platforms */}
        <section className="mb-10">
          <h2 className="text-4xl text-center font-semibold text-logo-600 mb-8">Technologies & Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceItem
              icon={<Layers className="h-8 w-8 text-logo-600" />}
              title="Automation Frameworks"
              description="Leverage powerful frameworks like UiPath, logo Prism, and Automation Anywhere for robust, scalable automation solutions."
            />
            <ServiceItem
              icon={<Bot className="h-8 w-8 text-logo-600" />}
              title="AI-Powered Automation"
              description="Integrate machine learning and AI technologies to create intelligent, adaptive automation systems."
            />
            <ServiceItem
              icon={<Cpu className="h-8 w-8 text-logo-600" />}
              title="IoT Automation"
              description="Connect and automate your IoT devices for smarter, more efficient operations and data collection."
            />
            <ServiceItem
              icon={<Cloud className="h-8 w-8 text-logo-600" />}
              title="Cloud-Native Automation"
              description="Build and deploy cloud-native automation solutions using platforms like AWS, Azure, and Google Cloud for maximum scalability and flexibility."
            />
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="flex justify-center border-t-2 pt-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-8 text-center w-full max-w-lg">
            <Calendar className="h-16 w-16 text-logo-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Automate Your Success?</h2>
            <p className="text-xl text-gray-600 mb-6">
              Let&apos;s discuss how our automation solutions can transform your business operations, boost efficiency, and drive growth.
            </p>
            <Button size="lg" className="bg-logo-600 text-white hover:bg-logo-600">
              <Link href='/contact'>Schedule a consultation</Link>
            </Button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default AutomationServices;