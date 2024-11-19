import { Code, Brain, Megaphone } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from 'lucide-react';

export type Job = {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  benefits: string[];
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  location: string;
  type: string;
};

export const jobOpenings: Job[] =[
    {
      id: "fullstack-intern",
      title: "Full Stack Developer Intern",
      description: "Join our team to build and optimize frontend interfaces using Next.js and React.js while developing robust backend systems.",
      requirements: [
        "Proficiency in frontend frameworks (Next.js, React.js)",
        "Backend development experience",
        "Familiarity with database management",
        "Basic knowledge of cloud infrastructure",
        "Debugging and problem-solving skills",
        "Basic knowledge of web security",
        "Basic knowledge of AI/ML"
      ],
      benefits: ['Remote Work', 'Flexible Hours', 'Learning Environment'],
      icon: Code,
      location: "Remote",
      type: "Internship"
    },
    {
      id: "ai-engineer-intern",
      title: "AI Engineer Intern",
      description: "Work on cutting-edge Computer Vision and NLP tasks to enhance our product features using state-of-the-art ML models.",
      requirements: [
        "Strong foundation in Python",
        "Basic ML/DL concepts",
        "Knowledge of mathematical concepts",
        "Familiarity with CV or NLP",
        "Knowledge of model architectures",
        "Basic MLOps understanding",
        "Knowledge of cloud platforms"
  
      ],
      benefits: ['Remote Work', 'Flexible Hours', 'Learning Environment'],
      icon: Brain,
      location: "Remote",
      type: "Internship"
    },
    {
      id: "digital-marketing-intern",
      title: "Digital Marketing Intern",
      description: "Create and manage engaging content across social media while optimizing our digital marketing strategies.",
      requirements: [
        "Social media content creation skills",
        "Graphic design skills",
        "Basic SEO knowledge",
        "Email marketing experience",
        "Data analysis capabilities",
        "Creative mindset",
        "Basic copywriting skills",
      ],
      benefits: ['Remote Work', 'Flexible Hours', 'Learning Environment'],
      icon: Megaphone,
      location: "Remote",
      type: "Internship"
    }
  ];