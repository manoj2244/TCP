import React from 'react';
import { Brain, Cpu, BarChart, Code, Calendar, Cloud, Database, Layers,  Bot, Factory, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceItem } from '@/components/ServiceItem';
import Link from 'next/link';

const RecommendationSystems = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <BarChart className="h-20 w-20 text-indigo-300 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Recommendation System</h1>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            Deliver personalized experiences with state-of-the-art recommendation systems that adapt and learn from your customers&apos; preferences.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        {/* Our Recommendation System Expertise */}
        <section className="mb-20">
          <h2 className="text-5xl text-center font-semibold text-indigo-600 mb-8">Our Expertise in Recommendation Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceItem
              icon={<Brain className="h-8 w-8 text-indigo-600" />}
              title="Collaborative Filtering Models"
              description="Enhance customer engagement by recommending items based on user behavior and preferences. Collaborative filtering offers personalized suggestions."
            />
            <ServiceItem
              icon={<Cpu className="h-8 w-8 text-indigo-600" />}
              title="Content-Based Filtering"
              description="Deliver recommendations based on item characteristics and user profiles, ensuring tailored content and product suggestions."
            />
            <ServiceItem
              icon={<BarChart className="h-8 w-8 text-indigo-600" />}
              title="Hybrid Recommendation Systems"
              description="We combine collaborative and content-based filtering to create hybrid systems that offer more accurate and robust recommendations."
            />
            <ServiceItem
              icon={<Database className="h-8 w-8 text-indigo-600" />}
              title="Data-Driven Insights"
              description="Leverage customer data to drive smarter recommendations, enhancing product discovery and increasing conversion rates."
            />
          </div>
        </section>

        {/* Recommendation System Solutions Tailored for You */}
        <section className="mb-20">
          <h2 className="text-5xl text-center font-semibold text-indigo-600 mb-8">Tailored Recommendation System Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceItem
              icon={<Code className="h-8 w-8 text-indigo-600" />}
              title="Custom Recommendation Algorithms"
              description="We build custom algorithms tailored to your business needs, ensuring that your customers receive the most relevant and timely recommendations."
            />
            <ServiceItem
              icon={<Bot className="h-8 w-8 text-indigo-600" />}
              title="AI-Powered Product Recommendations"
              description="Utilize machine learning to drive personalized product recommendations in real-time, enhancing user experiences across digital platforms."
            />
            <ServiceItem
              icon={<Layers className="h-8 w-8 text-indigo-600" />}
              title="Scalable Systems"
              description="Our recommendation engines are designed to handle large-scale data, making them perfect for businesses with high traffic and data volume."
            />
            <ServiceItem
              icon={<Cloud className="h-8 w-8 text-indigo-600" />}
              title="Cloud-based Deployments"
              description="We deploy recommendation systems in the cloud using platforms like AWS, GCP, and Azure for efficient, scalable, and reliable performance."
            />
          </div>
        </section>


        {/* Technologies & Applications */}
        <section className="mb-20">
          <h2 className="text-5xl text-center font-semibold text-indigo-600 mb-8">Use Cases & Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceItem
              icon={<Heart className="h-8 w-8 text-indigo-600" />}
              title="Medical Image Analysis"
              description="Employ OpenCV, SAM, and PyTorch to build advanced solutions for analyzing medical images like X-rays or MRIs, and tracking patient movements during therapy, enhancing healthcare diagnostics and treatment."
            />
            <ServiceItem
              icon={<Factory className="h-8 w-8 text-indigo-600" />}
              title="Manufacturing Quality Control"
              description="Implement YOLO and OpenCV-based solutions for automating quality control in manufacturing, detecting defects, and monitoring assembly lines with high precision and efficiency."
            />
            <ServiceItem
              icon={<BarChart className="h-8 w-8 text-indigo-600" />}
              title="Personalized Recommendation Systems"
              description="Develop AI-driven recommendation engines for personalized product recommendations using HuggingFace and Transformers, and create content-based and collaborative recommendation engines with TensorFlow and Langchain."
            />
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="flex justify-center border-t-2 pt-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-8 text-center w-full max-w-lg">
            <Calendar className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Personalize with AI?</h2>
            <p className="text-xl text-gray-600 mb-6">
              Let&apos;s discuss how a recommendation system can transform your business. Our AI experts are ready to tailor solutions to your unique needs.
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

export default RecommendationSystems;
