import React from 'react';
import { MessageSquare, Mic, Bot, Cpu, BarChart, Code, Calendar, Cloud, Layers, FileText, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceItem } from '@/components/ServiceItem';
import Link from 'next/link';

const NLPDevelopment = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-logo-600 text-white pb-3 pt-6">
        <div className="container mx-auto flex justify-center">
          <MessageSquare className="h-12 w-12 text-blue-300 mr-2" />
          <div>
            <h1 className="text-5xl font-bold mb-2 text-center">NLP Development Services</h1>
            <p className="text-xl text-blue-200 mb-4 max-w-3xl text-center">
              We bring language to life. From speech recognition to text analysis, <br /> we create intelligent systems that understand and interpret human language.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        {/* Our NLP Expertise */}
        <section className="mb-10">
          <h2 className="text-4xl text-center font-semibold text-logo-600 mb-8">Our NLP Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceItem
              icon={<Mic className="h-8 w-8 text-logo-600" />}
              title="Speech-to-Text Solutions"
              description="Convert spoken language into text with high accuracy, enabling voice commands and transcription systems for businesses."
            />
            <ServiceItem
              icon={<Cpu className="h-8 w-8 text-logo-600" />}
              title="Natural Language Understanding (NLU)"
              description="We build systems that comprehend intent, sentiment, and context, creating meaningful interactions between humans and machines."
            />
            <ServiceItem
              icon={<Bot className="h-8 w-8 text-logo-600" />}
              title="AI-Powered Chatbots"
              description="Develop intelligent chatbots that provide personalized responses using advanced NLP models like GPT and BERT."
            />
            <ServiceItem
              icon={<BarChart className="h-8 w-8 text-logo-600" />}
              title="Text Classification & Sentiment Analysis"
              description="Analyze and classify text for applications such as customer feedback, reviews, and social media monitoring."
            />
          </div>
        </section>

        {/* NLP Solutions Tailored for You */}
        <section className="mb-10">
          <h2 className="text-4xl text-center font-semibold text-logo-600 mb-8">NLP Solutions Tailored for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceItem
              icon={<Code className="h-8 w-8 text-logo-600" />}
              title="Custom Text Processing Pipelines"
              description="Design efficient text-processing pipelines for tasks like document classification, keyword extraction, and summarization."
            />
            <ServiceItem
              icon={<Bot className="h-8 w-8 text-logo-600" />}
              title="Named Entity Recognition (NER)"
              description="Identify key information like names, dates, and locations from large datasets for data-driven decision-making."
            />
            <ServiceItem
              icon={<Layers className="h-8 w-8 text-logo-600" />}
              title="Sentiment Analysis"
              description="Automatically detect sentiment in customer feedback, product reviews, and social media, helping businesses understand user opinions."
            />
            <ServiceItem
              icon={<Cloud className="h-8 w-8 text-logo-600" />}
              title="Cloud-based NLP Deployments"
              description="Deploy NLP solutions on cloud platforms like AWS, GCP, and Azure for scalable, real-time processing of language data."
            />
          </div>
        </section>

        {/* Use Cases & Technologies */}
        <section className="mb-10">
          <h2 className="text-4xl text-center font-semibold text-logo-600 mb-8">Use Cases & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceItem
              icon={<Bot className="h-8 w-8 text-logo-600" />}
              title="NLP-Powered Chatbots"
              description="Using Langchain, Transformers, and SpaCy, we build custom chatbots tailored to businesses for customer service, FAQs, or lead generation."
            />
            <ServiceItem
              icon={<FileText className="h-8 w-8 text-logo-600" />}
              title="Document and PDF Processing"
              description="Leverage Langchain and NLP tools like NLTK and HuggingFace to extract, summarize, or classify text from documents, PDFs, and contracts for legal or financial institutions."
            />
            <ServiceItem
              icon={<ThumbsUp className="h-8 w-8 text-logo-600" />}
              title="Sentiment Analysis & Text Summarization"
              description="Provide services for social media monitoring, market research, or product reviews using SpaCy, PandasAI, and NLP models."
            />
            <ServiceItem
              icon={<Mic className="h-8 w-8 text-logo-600" />}
              title="Speech-to-Text Systems"
              description="Enhance voice command systems and transcription services with reliable, accurate speech-to-text models."
            />
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="flex justify-center border-t-2 pt-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-8 text-center w-full max-w-lg">
            <Calendar className="h-16 w-16 text-logo-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Innovate with NLP?</h2>
            <p className="text-xl text-gray-600 mb-6">
              Let&apos;s explore how NLP can transform your business. Our experts are ready to craft intelligent language solutions tailored to your needs.
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

export default NLPDevelopment;