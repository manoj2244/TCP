import React from 'react';
import { Brain, Cpu, Database, Network, Zap, BarChart, Bot, Code, Calendar, Layers, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceItem } from '@/components/ServiceItem';
import Link from 'next/link';

const AIDevelopment = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Brain className="h-20 w-20 text-indigo-300 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">AI Development Services</h1>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            We&apos;re not just building AI - we&apos;re crafting the future of your business. Let&apos;s transform your ideas into intelligent, scalable solutions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        {/* Our AI Expertise */}
        <section className="mb-20">
          <h2 className="text-5xl text-center font-semibold text-indigo-600 mb-8">Our AI Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceItem
              icon={<Cpu className="h-8 w-8 text-indigo-600" />}
              title="Cutting-Edge Machine Learning"
              description="We don't just use AI - we push its boundaries. Our ML models evolve with your business, ensuring you're always ahead of the curve."
            />
            <ServiceItem
              icon={<Network className="h-8 w-8 text-indigo-600" />}
              title="Deep Learning Mastery"
              description="Unlock the full potential of your data. Our deep learning solutions find patterns and insights that others miss."
            />
            <ServiceItem
              icon={<Database className="h-8 w-8 text-indigo-600" />}
              title="Data Science That Delivers"
              description="Turn your data into your biggest asset. We transform complex information into clear, actionable strategies for your business."
            />
            <ServiceItem
              icon={<Zap className="h-8 w-8 text-indigo-600" />}
              title="Neural Networks, Simplified"
              description="Harness the power of AI that thinks like you do. Our neural networks solve your most complex problems with ease."
            />
          </div>
        </section>

        {/* AI Solutions Tailored for You */}
        <section className="mb-20">
          <h2 className="text-5xl text-center font-semibold text-indigo-600 mb-8">AI Solutions Tailored for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceItem
              icon={<Bot className="h-8 w-8 text-indigo-600" />}
              title="Smart Automation Systems"
              description="Imagine your business running smoothly 24/7. Our AI automation makes it possible, boosting efficiency and freeing your team to focus on growth."
            />
            <ServiceItem
              icon={<BarChart className="h-8 w-8 text-indigo-600" />}
              title="Predictive Powerhouses"
              description="See the future of your market. Our predictive models give you the insights to make bold, data-driven decisions with confidence."
            />
            <ServiceItem
              icon={<Brain className="h-8 w-8 text-indigo-600" />}
              title="AI-Powered Analytics"
              description="Uncover hidden opportunities in your data. Our analytics tools don't just crunch numbers - they reveal game-changing insights for your business."
            />
            <ServiceItem
              icon={<Code className="h-8 w-8 text-indigo-600" />}
              title="Bespoke AI Algorithms"
              description="One-size-fits-all? Not here. We craft custom AI algorithms that align perfectly with your unique business challenges and goals."
            />
          </div>
        </section>

        {/* Use Cases & Technologies */}
        <section className="mb-20">
          <h2 className="text-5xl text-center font-semibold text-indigo-600 mb-8">Use Cases & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceItem
              icon={<Layers className="h-8 w-8 text-indigo-600" />}
              title="ML/AI Model Development & Deployment"
              description="Develop custom AI models using TensorFlow, PyTorch, and MLFlow for predictive analytics, healthcare, or finance. We provide full MLOps solutions with MLFlow, DagsHub, and Docker for model training, deployment, and monitoring in cloud environments."
            />
            <ServiceItem
              icon={<Bot className="h-8 w-8 text-indigo-600" />}
              title="AI/ML Consulting"
              description="Offer expert consulting for companies looking to integrate AI in their workflows, from model selection to deployment. We leverage services like Groq and LangSmith for building efficient AI pipelines."
            />
            <ServiceItem
              icon={<BarChart className="h-8 w-8 text-indigo-600" />}
              title="AI-Enhanced Data Analytics"
              description="Build data analytics dashboards using Pandas, Numpy, and PandasAI that provide automated insights and data processing for businesses in finance, marketing, or e-commerce sectors."
            />
            <ServiceItem
              icon={<TrendingUp className="h-8 w-8 text-indigo-600" />}
              title="Predictive Analytics"
              description="Develop predictive models for customer behavior, financial forecasting, or demand prediction using TensorFlow, PyTorch, and HuggingFace."
            />
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="flex justify-center border-t-2 pt-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-8 text-center w-full max-w-lg">
            <Calendar className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Lead with AI?</h2>
            <p className="text-xl text-gray-600 mb-6">
              Let&apos;s chat about your vision. Our AI experts are ready to show you how we can turn your challenges into opportunities for innovation and growth.
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

export default AIDevelopment;