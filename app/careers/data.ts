import { Code, Brain, Megaphone } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from 'lucide-react';

export type Job = {
  id: string;
  title: string;
  type: 'internship' | 'full-time';
  description: string;
  overview?: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  location: string;
  experience: string;
};

export const jobOpenings: Job[] = [
  {
    id: "fullstack-developer",
    title: "Full Stack Developer",
    type: "full-time",
    description: "Join our team to build and optimize modern web applications using cutting-edge technologies.",
    overview: "We are looking for a motivated Full Stack Developer, an Intern or experienced professional to join our team. You will gain hands-on experience in building and optimizing modern frontend interfaces using Next.js and React.js, while also developing and maintaining efficient backend systems. This is an excellent opportunity to enhance your skills in a collaborative and innovative environment.",
    responsibilities: [
      "Develop and optimize user-facing features using Next.js and React.js",
      "Build and maintain backend APIs and server-side logic",
      "Collaborate with team members to design, test, and debug software applications",
      "Manage and query databases effectively",
      "Contribute to system performance optimization and ensure application scalability",
      "Use Git for version control, code collaboration, and project management",
      "Assist with integrating AI/ML features into web applications",
      "Use Generative AI tools (e.g., GitHub Copilot, ChatGPT, or similar) to accelerate development and testing processes",
      "Adhere to best practices for web security and ensure data integrity"
    ],
    requirements: [
      "Proficiency in frontend frameworks like Next.js and React.js",
      "Basic experience with backend development (Node.js, Express, or similar)",
      "Familiarity with database systems (e.g., MySQL, PostgreSQL, MongoDB)",
      "Understanding of cloud infrastructure (e.g., AWS, Azure, or similar)",
      "Strong debugging and problem-solving skills",
      "Awareness of basic web security principles",
      "Basic knowledge or interest in AI/ML technologies is a plus"
    ],
    benefits: [
      'Remote Work',
      'Flexible Hours',
      'Learning Environment',
      'Opportunity to work on innovative projects',
      'Professional Development Opportunities'
    ],
    icon: Code,
    location: "Remote",
    experience: "2+ years"
  },
  {
    id: "fullstack-developer-intern",
    title: "Full Stack Developer (Intern)",
    type: "internship",
    description: "Join our team to learn and contribute to modern web applications using cutting-edge technologies.",
    overview: "We are seeking a motivated Full Stack Developer Intern to join our team. You will gain hands-on experience in building and optimizing modern frontend interfaces using Next.js and React.js, while also developing and maintaining efficient backend systems. This is an excellent opportunity to enhance your skills in a collaborative and innovative environment.",
    responsibilities: [
      "Develop and optimize user-facing features using Next.js and React.js",
      "Build and maintain backend APIs and server-side logic",
      "Collaborate with team members to design, test, and debug software applications",
      "Manage and query databases effectively",
      "Contribute to system performance optimization and ensure application scalability",
      "Use Git for version control, code collaboration, and project management",
      "Assist with integrating AI/ML features into web applications",
      "Use Generative AI tools (e.g., GitHub Copilot, ChatGPT, or similar) to accelerate development and testing processes",
      "Adhere to best practices for web security and ensure data integrity"
    ],
    requirements: [
      "Proficiency in frontend frameworks like Next.js and React.js",
      "Basic experience with backend development (Node.js, Express, or similar)",
      "Familiarity with database systems (e.g., MySQL, PostgreSQL, MongoDB)",
      "Understanding of cloud infrastructure (e.g., AWS, Azure, or similar)",
      "Strong debugging and problem-solving skills",
      "Awareness of basic web security principles",
      "Basic knowledge or interest in AI/ML technologies is a plus"
    ],
    benefits: [
      'Remote Work',
      'Flexible Hours',
      'Learning Environment',
      'Hands-on experience with cutting-edge technologies',
      'Professional Development Opportunities'
    ],
    icon: Code,
    location: "Remote",
    experience: "0-2 years"
  },
  {
    id: "ai-engineer",
    title: "AI Engineer",
    type: "full-time",
    description: "Work on cutting-edge Computer Vision and NLP tasks using state-of-the-art ML models.",
    overview: "Join our team as an AI Engineer, an Intern or experienced professional to contribute to advancing product features through cutting-edge Computer Vision (CV) and Natural Language Processing (NLP) tasks. You'll work with state-of-the-art machine learning models and large language models (LLMs), integrating tools like LangChain to deliver innovative solutions.",
    responsibilities: [
      "Develop and fine-tune machine learning models for Computer Vision (CV) and Natural Language Processing (NLP) applications",
      "Work with Large Language Models (LLMs) and tools like LangChain to design and implement generative AI solutions",
      "Explore and implement state-of-the-art model architectures (e.g., Transformers, CNNs, GANs)",
      "Collaborate with the team to integrate AI solutions into product features",
      "Conduct experiments, analyze results, and optimize model performance",
      "Utilize Git for version control and collaborative development",
      "Implement and maintain CI/CD pipelines for automated testing and deployment",
      "Work with Docker to containerize applications and streamline development workflows",
      "Contribute to MLOps tasks, including model deployment, monitoring, and scaling",
      "Leverage cloud platforms like AWS, GCP, or Azure for scalable training and deployment"
    ],
    requirements: [
      "Strong foundation in Python programming",
      "Understanding of basic Machine Learning (ML) and Deep Learning (DL) concepts",
      "Solid grasp of fundamental mathematical concepts (linear algebra, calculus, statistics)",
      "Familiarity with Computer Vision (CV) or Natural Language Processing (NLP) techniques",
      "Experience working with LLMs and frameworks like LangChain is a plus",
      "Knowledge of popular model architectures (e.g., Transformers, CNNs)",
      "Basic understanding of MLOps, including CI/CD and Docker",
      "Experience with Git for version control and collaboration",
      "Knowledge of cloud platforms like AWS, GCP, or Azure is a plus"
    ],
    benefits: [
      'Remote Work',
      'Flexible Hours',
      'Learning Environment',
      'Hands-on experience with cutting-edge technologies',
      'Professional Development Opportunities'
    ],
    icon: Brain,
    location: "Remote",
    experience: "2+ years"
  },
  {
    id: "ai-engineer-intern",
    title: "AI Engineer (Intern)",
    type: "internship",
    description: "Learn and contribute to cutting-edge Computer Vision and NLP tasks using state-of-the-art ML models.",
    overview: "We are seeking a motivated AI Engineer Intern to join our team. You will gain hands-on experience in developing and fine-tuning machine learning models for Computer Vision (CV) and Natural Language Processing (NLP) applications. This is an excellent opportunity to enhance your skills in a collaborative and innovative environment.",
    responsibilities: [
      "Develop and fine-tune machine learning models for Computer Vision (CV) and Natural Language Processing (NLP) applications",
      "Work with Large Language Models (LLMs) and tools like LangChain to design and implement generative AI solutions",
      "Explore and implement state-of-the-art model architectures (e.g., Transformers, CNNs, GANs)",
      "Collaborate with the team to integrate AI solutions into product features",
      "Conduct experiments, analyze results, and optimize model performance",
      "Utilize Git for version control and collaborative development",
      "Implement and maintain CI/CD pipelines for automated testing and deployment",
      "Work with Docker to containerize applications and streamline development workflows",
      "Contribute to MLOps tasks, including model deployment, monitoring, and scaling",
      "Leverage cloud platforms like AWS, GCP, or Azure for scalable training and deployment"
    ],
    requirements: [
      "Strong foundation in Python programming",
      "Understanding of basic Machine Learning (ML) and Deep Learning (DL) concepts",
      "Solid grasp of fundamental mathematical concepts (linear algebra, calculus, statistics)",
      "Familiarity with Computer Vision (CV) or Natural Language Processing (NLP) techniques",
      "Experience working with LLMs and frameworks like LangChain is a plus",
      "Knowledge of popular model architectures (e.g., Transformers, CNNs)",
      "Basic understanding of MLOps, including CI/CD and Docker",
      "Experience with Git for version control and collaboration",
      "Knowledge of cloud platforms like AWS, GCP, or Azure is a plus"
    ],
    benefits: [
      'Remote Work',
      'Flexible Hours',
      'Learning Environment',
      'Hands-on experience with cutting-edge technologies',
      'Professional Development Opportunities'
    ],
    icon: Brain,
    location: "Remote",
    experience: "0-2 years"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Specialist",
    type: "full-time",
    description: "Drive growth through innovative digital strategies and AI-powered marketing solutions.",
    overview: "We are seeking a Digital Marketing professional, either an Intern or experienced specialist, to support our marketing initiatives. You'll gain hands-on experience in digital marketing strategies, content creation, and leveraging AI tools for marketing automation. This role offers an excellent opportunity to learn and grow in a tech-focused marketing environment.",
    responsibilities: [
      "Create and manage social media content",
      "Develop and implement digital marketing campaigns",
      "Use marketing analytics tools and prepare reports",
      "Create content for blogs, newsletters, and social media",
      "Manage SEO optimization and website content",
      "Utilize AI tools for marketing automation",
      "Execute email marketing campaigns",
      "Conduct market research and competitor analysis",
      "Manage marketing databases",
      "Work with various marketing tools and platforms"
    ],
    requirements: [
      "Background in Marketing, Business, or related field",
      "Understanding of digital marketing concepts",
      "Proficiency with social media platforms",
      "Content creation and management skills",
      "Strong written and verbal communication skills",
      "Interest in AI and marketing technology",
      "Analytical skills",
      "Adaptability to new technologies"
    ],
    benefits: [
      'Remote Work',
      'Flexible Hours',
      'Learning Environment',
      'Hands-on experience with AI-powered marketing tools',
      'Professional Development Opportunities'
    ],
    icon: Megaphone,
    location: "Remote",
    experience: "2+ years"
  },
  {
    id: "digital-marketing-intern",
    title: "Digital Marketing Specialist (Intern)",
    type: "internship",
    description: "Learn and contribute to digital marketing strategies and AI-powered marketing solutions.",
    overview: "We are seeking a motivated Digital Marketing Specialist Intern to join our team. You will gain hands-on experience in digital marketing strategies, content creation, and leveraging AI tools for marketing automation. This is an excellent opportunity to learn and grow in a tech-focused marketing environment.",
    responsibilities: [
      "Create and manage social media content",
      "Develop and implement digital marketing campaigns",
      "Use marketing analytics tools and prepare reports",
      "Create content for blogs, newsletters, and social media",
      "Manage SEO optimization and website content",
      "Utilize AI tools for marketing automation",
      "Execute email marketing campaigns",
      "Conduct market research and competitor analysis",
      "Manage marketing databases",
      "Work with various marketing tools and platforms"
    ],
    requirements: [
      "Background in Marketing, Business, or related field",
      "Understanding of digital marketing concepts",
      "Proficiency with social media platforms",
      "Content creation and management skills",
      "Strong written and verbal communication skills",
      "Interest in AI and marketing technology",
      "Analytical skills",
      "Adaptability to new technologies"
    ],
    benefits: [
      'Remote Work',
      'Flexible Hours',
      'Learning Environment',
      'Hands-on experience with AI-powered marketing tools',
      'Professional Development Opportunities'
    ],
    icon: Megaphone,
    location: "Remote",
    experience: "0-2 years"
  }
];