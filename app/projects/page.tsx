import React from 'react';
import { Briefcase, TrendingUp } from 'lucide-react'; // Using Lucide React for icons
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
    impact: 'Enabled companies to easily integrate customizable AI chatbots on their websites.',
    liveLink: 'https://convers-ai-test.vercell.app',
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
    impact: 'Increased user engagement by providing an interactive shopping experience.',
    liveLink: 'https://jewelmirror.ai',
  },
];

const ProjectsPage = () => {
  return (
    <div className="container mx-auto py-10 px-5 text-black">
      <h1 className="sm:text-5xl font-bold text-center mb-10 text-indigo-600">Our Projects</h1>
      <p className="text-lg text-center mb-12">
        Explore the cutting-edge solutions we&apos;ve delivered for our clients, spanning AI, NLP, and Computer Vision.
      </p>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-semibold mb-4 flex items-center">
                  <Briefcase className="mr-2 text-indigo-600" />
                  {project.title}
                </h2>
                <p className="mb-6">{project.overview}</p>

                <div className="mb-6">
                  <h3 className="text-xl font-medium mb-3">Key Features:</h3>
                  <ul className="list-disc ml-5 space-y-2">
                    {project.keyFeatures.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-medium mb-3">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3">Impact:</h3>
                  <p>
                    <TrendingUp className="inline-block mr-2 text-indigo-600" />
                    {project.impact}
                  </p>
                </div>

                {/* Live Project Link */}
                <div className="mt-6">
                  <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
                    <Link href={project.liveLink} target="_blank">
                      View Live Project
                    </Link>
                  </Button>
                </div>
              </div>

              <div>
                <img
                  src={project.visuals}
                  alt={`${project.title} screenshot`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        ))}
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
              <Button type="submit" className="bg-indigo-600 text-white hover:bg-indigo-700">
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
