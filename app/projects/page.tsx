import React from 'react';
import Image from 'next/image';
import { Briefcase, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const projects = [
  {
    title: 'ConversAI',
    overview: 'An advanced platform designed to create highly personalized AI chatbots, utilizing your unique data from PDFs, OCR-scanned documents, websites, text files, and YouTube videos. With its wide-ranging capabilities, ConversAI seamlessly integrates into any website to deliver intelligent, real-time responses, driven by cutting-edge AI models.',
    keyFeatures: [
      'AI-powered chatbot creation',
      'Supports multiple data sources: PDFs, OCR PDFs, websites, and videos',
      'Uses Llama 3.1, Llama 3, and Gemma2 with Groq inference',
      'Embed chatbots directly to websites'
    ],
    technologies: ['Next.js', 'Groq', 'Llama 3', 'Gemma2', 'Langchain', 'FastAPI', 'Supabase', 'qdrant'],
    challenges: 'Seamlessly integrating multiple AI models to handle diverse data formats.',
    solutions: 'Implemented Groq inference to streamline chatbot responses and enhance processing speed.',
    visuals: '/conversai.png',
    dimensions: { width: 800, height: 600 },
    impact: 'Enabled companies to easily integrate customizable AI chatbots on their websites.',
    liveLink: 'https://convers-ai-test.vercel.app',
  },
  {
    title: 'Magical Mirror',
    overview: 'Magical Mirror is an advanced virtual try-on (VTO) system tailored for asymmetrical clothing, such as sarees. Magical Mirror enables users to swap and visualize different clothing options based on images user upload. The system delivers highly realistic and accurate representations, transforming the online shopping experience for traditional and unique garments.',
    keyFeatures: [
      'Magical Mirror enables users to swap and visualize different clothing options based on images they upload.',
      'User-friendly interface and personalization options'
    ],
    technologies: ['ControlNet', 'IP Adapter', 'FastAPI', 'Stable Diffusion', 'Loras'],
    challenges: 'Creating an accurate virtual try-on experience.',
    solutions: 'Leveraged Computer Vision realistic quality and accuracy of clothing.',
    visuals: '/magical-mirror.png',
    dimensions: { width: 800, height: 600 },
    impact: 'Increased user engagement by providing an interactive shopping experience.',
    liveLink: 'https://magicalmirror.ai',
  },
  {
    title: 'Jewel Mirror',
    overview: 'An innovative virtual try-on platform that enables users to visualize how different jewelry, such as necklaces, would look on them.',
    keyFeatures: [
      'Supports all types of necklaces',
      'User-friendly interface and personalization options'
    ],
    technologies: ['Next.js', 'Computer Vision', 'TensorFlow'],
    challenges: 'Creating an accurate virtual try-on experience.',
    solutions: 'Leveraged Computer Vision for realistic quality of jewelry.',
    visuals: '/jewel-mirror.png',
    dimensions: { width: 800, height: 600 },
    impact: 'Increased user engagement by providing an interactive shopping experience.',
    liveLink: 'https://jewelmirror.ai',
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <section className="w-full py-14 md:py-24 lg:py-32 bg-logo-600">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-white">
            Our Projects
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Explore the cutting-edge solutions we&apos;ve delivered for our clients, spanning AI, NLP, and Computer Vision.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-xl rounded-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 flex items-center gap-3">
                    <Briefcase className="h-8 w-8 text-logo-600" />
                    {project.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{project.overview}</p>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Key Features</h3>
                    <ul className="list-disc ml-5 space-y-2 text-gray-600">
                      {project.keyFeatures.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-blue-50 text-logo-600 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Impact</h3>
                    <p className="text-gray-600 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-logo-600" />
                      {project.impact}
                    </p>
                  </div>

                  <Button className="bg-logo-600 text-white hover:bg-logo-600/90">
                    <Link href={project.liveLink} target="_blank">
                      View Live Project
                    </Link>
                  </Button>
                </div>

                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src={project.visuals}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section id="cta" className="w-full py-12 md:py-24 flex justify-around">
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
              <Button type="submit" className="bg-logo-600 text-white hover:bg-logo-600">
                <Link href='https://calendly.com/techconsultingpartners/30min'>
                  Get in touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
