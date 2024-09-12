import React from 'react';
import { Eye, Camera, Scan, Image, Layers, Cpu, BarChart, Video, Calendar, Search, Heart, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceItem } from '@/components/ServiceItem';

const ComputerVisionServices = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-indigo-100">
      {/* Hero Section */}
      <section className="bg-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Eye className="h-20 w-20 text-indigo-300 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Computer Vision Services</h1>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            Empower your business with cutting-edge computer vision solutions. From image recognition to real-time video analysis, we bring your visual data to life.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        {/* Our Computer Vision Expertise */}
        <section className="mb-20">
          <h2 className="text-5xl text-center font-semibold text-indigo-600 mb-8">Our Computer Vision Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceItem
              icon={<Image className="h-8 w-8 text-indigo-600" />}
              title="Image Recognition & Classification"
              description="Accurately identify and categorize objects, scenes, and patterns in images using state-of-the-art deep learning models."
            />
            <ServiceItem
              icon={<Scan className="h-8 w-8 text-indigo-600" />}
              title="Object Detection & Tracking"
              description="Detect and track multiple objects in real-time, perfect for surveillance, autonomous vehicles, and robotics applications."
            />
            <ServiceItem
              icon={<Layers className="h-8 w-8 text-indigo-600" />}
              title="Semantic Segmentation"
              description="Precisely segment images into different regions, enabling detailed analysis and understanding of complex scenes."
            />
            <ServiceItem
              icon={<Cpu className="h-8 w-8 text-indigo-600" />}
              title="Deep Learning for Vision"
              description="Leverage cutting-edge neural network architectures to solve complex visual recognition and analysis tasks."
            />
          </div>
        </section>

        {/* Computer Vision Solutions */}
        <section className="mb-20">
          <h2 className="text-5xl text-center font-semibold text-indigo-600 mb-8">Computer Vision Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceItem
              icon={<Camera className="h-8 w-8 text-indigo-600" />}
              title="Facial Recognition Systems"
              description="Implement secure and accurate facial recognition for authentication, security, and personalized user experiences."
            />
            <ServiceItem
              icon={<BarChart className="h-8 w-8 text-indigo-600" />}
              title="Visual Quality Inspection"
              description="Automate quality control processes with high-precision defect detection and analysis in manufacturing environments."
            />
            <ServiceItem
              icon={<Video className="h-8 w-8 text-indigo-600" />}
              title="Video Analytics"
              description="Extract valuable insights from video streams with advanced motion detection, behavior analysis, and event recognition."
            />
            <ServiceItem
              icon={<Search className="h-8 w-8 text-indigo-600" />}
              title="Content-Based Image Retrieval"
              description="Develop powerful visual search engines to find similar images or products based on visual features and attributes."
            />
          </div>
        </section>

        {/* Technologies & Applications */}
        <section className="mb-20">
          <h2 className="text-5xl text-center font-semibold text-indigo-600 mb-8">Use Cases & Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceItem
              icon={<Layers className="h-8 w-8 text-indigo-600" />}
              title="AI-Powered Image and Video Processing"
              description="We utilize YOLO, SAM, and OpenCV for real-time object detection and tracking in surveillance, retail analytics, and autonomous vehicles. Implement YOLOFace and MediaPipe for facial recognition and emotion detection in security and marketing applications."
            />
            <ServiceItem
              icon={<Image className="h-8 w-8 text-indigo-600" />}
              title="AI Art and Content Generation"
              description="Leverage Diffusers, Stable Diffusion, and Comfy UI to create stunning AI-generated art, animations, and marketing visuals that push the boundaries of creativity."
            />
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
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="flex justify-center border-t-2 pt-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-8 text-center w-full max-w-lg">
            <Calendar className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Unlock the Power of Visual Data?</h2>
            <p className="text-xl text-gray-600 mb-6">
              Let&apos;s explore how our advanced computer vision solutions can transform your business, enhance decision-making, and drive innovation across industries.
            </p>
            <Button size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700">
              Schedule a consultation
            </Button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default ComputerVisionServices;