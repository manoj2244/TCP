import React from 'react';
import { Globe, Code, Zap, Layout, Server, Shield, Layers, Database, Repeat, Calendar, Bot, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceItem } from '@/components/ServiceItem';
import Link from 'next/link';

const WebDevelopmentServices = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-indigo-100">
      {/* Hero Section */}
      <section className="bg-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Globe className="h-20 w-20 text-indigo-300 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Web Development Services</h1>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            Transform your digital presence with our cutting-edge web development solutions. From responsive designs to AI-powered web applications, we bring your vision to life.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        {/* Our Web Development Expertise */}
        <section className="mb-20">
          <h2 className="text-5xl text-center font-semibold text-indigo-600 mb-8">Our Web Development Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceItem
              icon={<Layout className="h-8 w-8 text-indigo-600" />}
              title="Responsive Web Design"
              description="Create stunning, mobile-friendly websites that look great on all devices and screen sizes."
            />
            <ServiceItem
              icon={<Code className="h-8 w-8 text-indigo-600" />}
              title="Full-Stack Development"
              description="Build powerful web applications using Next.js and React for the frontend, combined with robust backend solutions."
            />
            <ServiceItem
              icon={<Server className="h-8 w-8 text-indigo-600" />}
              title="API Development"
              description="Develop scalable and efficient APIs using FastAPI and Express, facilitating seamless integration of AI models and existing applications."
            />
            <ServiceItem
              icon={<Database className="h-8 w-8 text-indigo-600" />}
              title="Database Integration"
              description="Implement and optimize database solutions using Supabase for efficient data management and real-time capabilities."
            />
          </div>
        </section>

        {/* Web Development Solutions */}
        <section className="mb-20">
          <h2 className="text-5xl text-center font-semibold text-indigo-600 mb-8">Web Development Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceItem
              icon={<Zap className="h-8 w-8 text-indigo-600" />}
              title="Next.js + React Applications"
              description="Develop high-performance, SEO-friendly web applications using Next.js and React, providing seamless user experiences and optimal load times."
            />
            <ServiceItem
              icon={<Bot className="h-8 w-8 text-indigo-600" />}
              title="AI-Powered SaaS Platforms"
              description="Create innovative SaaS solutions that leverage AI capabilities, such as content generation tools, intelligent chatbots, or personalized recommendation systems."
            />
            <ServiceItem
              icon={<Shield className="h-8 w-8 text-indigo-600" />}
              title="Secure E-commerce Platforms"
              description="Build robust and secure online stores with features like payment integration, inventory management, and AI-driven product recommendations."
            />
            <ServiceItem
              icon={<Repeat className="h-8 w-8 text-indigo-600" />}
              title="Scalable Microservices"
              description="Design and implement microservices architecture using FastAPI and Express for flexible, maintainable, and scalable web solutions."
            />
          </div>
        </section>

        {/* Technologies & Tools */}
        <section className="mb-20">
          <h2 className="text-5xl text-center font-semibold text-indigo-600 mb-8">Use cases & Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceItem
              icon={<Layers className="h-8 w-8 text-indigo-600" />}
              title="Modern JavaScript Frameworks"
              description="We leverage the power of Next.js and React to build scalable, efficient, and maintainable front-end applications with server-side rendering capabilities."
            />
            <ServiceItem
              icon={<Server className="h-8 w-8 text-indigo-600" />}
              title="Backend Technologies"
              description="We utilize FastAPI for Python-based microservices and Express for Node.js applications, ensuring high-performance and scalable backend solutions."
            />
            <ServiceItem
              icon={<Database className="h-8 w-8 text-indigo-600" />}
              title="Database Management"
              description="We implement and optimize databases using Supabase, providing real-time capabilities, authentication, and seamless integration with modern web applications."
            />
            <ServiceItem
              icon={<Cpu className="h-8 w-8 text-indigo-600" />}
              title="AI Integration"
              description="We seamlessly integrate AI models and capabilities into web applications, creating intelligent features like natural language processing, image recognition, and predictive analytics."
            />
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="flex justify-center border-t-2 pt-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-8 text-center w-full max-w-lg">
            <Calendar className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Elevate Your Web Presence?</h2>
            <p className="text-xl text-gray-600 mb-6">
              Let&apos;s discuss how our web development expertise can help you create impactful, high-performing digital experiences enhanced with cutting-edge AI capabilities.
            </p>
            <Button size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700">
              <Link href='/contact'>Schedule a consultation</Link>
            </Button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default WebDevelopmentServices;