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
    description: "Join our inclusive team to build and optimize modern web applications using cutting-edge technologies.",
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
      'Remote work flexibility',
      'Flexible working hours to fit your schedule',
      'Engaging and supportive learning environment',
      'Opportunity to work on innovative projects',
      'Professional Development Opportunities'
    ],
    icon: Code,
    location: "Remote",
    experience: "1+ years"
  },
  
   {
    id: "digital-marketing",
    title: "Digital Marketer",
    type: "full-time",
    description: "Drive growth through innovative digital strategies for SaaS products and services.",
    overview: "We are seeking a creative and results-driven Digital Marketer, an experienced professional to join our team. In this role, you will develop and manage digital marketing strategies to increase brand awareness, generate leads, and drive engagement for our SaaS products and services. You will take charge of content marketing, social media strategy, and influencer collaborations to amplify our reach and impact.",
    responsibilities: [
      "Content Marketing: Develop and execute a content strategy, including blogs, whitepapers, and case studies, to educate and engage target audiences",
      "Social Media Strategy: Plan, implement, and manage social media campaigns across various platforms to build brand awareness and foster community engagement",
      "Lead Generation: Create and optimize campaigns to capture and nurture leads using tools like email marketing, landing pages, and paid ads",
      "Influencer Marketing: Identify and collaborate with influencers to promote our products and services effectively",
      "Email Marketing: Design and execute email campaigns to engage prospects and drive conversions",
      "SEO Optimization: Optimize website and content to improve search engine rankings and organic traffic",
      "Data Analysis: Monitor, analyze, and report on marketing campaign performance to refine strategies",
      "Graphic Design: Create visually appealing assets for social media, ads, and other marketing materials",
      "Copywriting: Craft compelling copy for ads, social media, emails, and web content to resonate with target audiences"
    ],
    requirements: [
      "Proven experience in digital marketing for SaaS products and services",
      "Expertise in content marketing and lead generation strategies",
      "Proficiency in developing social media strategies and managing campaigns",
      "Familiarity with influencer marketing and collaboration techniques",
      "Basic graphic design skills (e.g., Canva, Adobe Creative Suite)",
      "Strong understanding of SEO principles and best practices",
      "Proficiency with email marketing platforms (e.g., Mailchimp, HubSpot)",
      "Analytical skills to interpret marketing data and adjust strategies",
      "A creative mindset and strong communication skills"
    ],
    benefits: [
      'Flexible remote work options',
      'Adjustable working hours for work-life balance',
      'Collaborative learning environment',
      'Growth opportunities in SaaS industry',
      'Professional development support'
    ],
    icon: Megaphone,
    location: "Remote",
    experience: "1+ years"
  },
  {
    id: "ai-engineer",
    title: "AI Engineer",
    type: "full-time",
    description: "Work on cutting-edge Computer Vision and NLP tasks using state-of-the-art ML models.",
    overview: "Join our team as a AI Engineer, an Intern or experienced professional contribute to advancing product features through cutting-edge Computer Vision (CV) and Natural Language Processing (NLP) tasks. You'll work with state-of-the-art machine learning models and large language models (LLMs), integrating tools like LangChain to deliver innovative solutions.",
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
      'Remote work flexibility',
      'Flexible working hours to accommodate your schedule',
      'Supportive learning environment to grow your skills',
      'Hands-on experience with cutting-edge technologies in AI',
      'Professional Development Opportunities'
    ],
    icon: Brain,
    location: "Remote",
    experience: "1+ years"
  },
  {
    id: "fullstack-developer-intern",
    title: "Full Stack Developer (Intern)",
    type: "internship",
    description: "Join our inclusive team to learn and contribute to modern web applications using cutting-edge technologies.",
    overview: "We are seeking a motivated Full Stack Developer Intern to join our team. You will gain hands-on experience in building and optimizing modern frontend interfaces using Next.js and React.js, while also developing and maintaining efficient backend systems. This is an excellent opportunity to enhance your skills in a collaborative and innovative environment.",
    responsibilities: [
      "Learn and assist in developing user-facing features using Next.js and React.js",
      "Support building and maintaining backend APIs and server-side logic",
      "Collaborate with team members to design, test, and debug software applications",
      "Learn to manage and query databases effectively",
      "Contribute to system performance optimization",
      "Use Git for version control and code collaboration",
      "Assist with integrating AI/ML features into web applications",
      "Learn to use Generative AI tools to accelerate development",
      "Learn and apply web security best practices"
    ],
    requirements: [
      "Basic knowledge of frontend frameworks like Next.js and React.js",
      "Interest in backend development (Node.js, Express, or similar)",
      "Basic understanding of database systems",
      "Eagerness to learn cloud infrastructure concepts",
      "Strong problem-solving skills",
      "Willingness to learn web security principles",
      "Interest in AI/ML technologies is a plus"
    ],
    benefits: [
      'Remote Work',
      'Flexible Hours',
      'Structured mentorship program',
      'Hands-on experience with cutting-edge technologies',
      'Learning and growth opportunities'
    ],
    icon: Code,
    location: "Remote",
    experience: "0-1 years"
  },
  {
    id: "ai-engineer-intern",
    title: "AI Engineer (Intern)",
    type: "internship",
    description: "Learn and contribute to cutting-edge Computer Vision and NLP tasks using state-of-the-art ML models.",
    overview: "We are seeking an enthusiastic AI Engineer Intern with a passion for machine learning and artificial intelligence. You'll gain hands-on experience working with cutting-edge technologies while learning from experienced professionals. This role offers an excellent opportunity to develop practical skills in CV, NLP, and modern AI frameworks.",
    responsibilities: [
      "Learn and assist in developing machine learning models for CV and NLP applications",
      "Gain experience working with Large Language Models (LLMs) and tools like LangChain",
      "Study and implement various model architectures under guidance",
      "Support the team in integrating AI solutions into product features",
      "Help conduct experiments and analyze results",
      "Version control with Git through practical application",
      "Assist in maintaining and testing AI applications",
      "Containerization basics with Docker",
      "Support MLOps tasks under supervision",
      "Gain exposure to cloud platforms and their AI services (AWS, GCP, or Azure)"
    ],
    requirements: [
      "Currently pursuing Computer Science, AI, or related degree",
      "Basic Python programming skills",
      "Understanding of fundamental ML/AI concepts",
      "Basic knowledge of mathematics (linear algebra, calculus, statistics)",
      "Eager to learn about CV, NLP, and modern AI frameworks",
      "Interest in working with LLMs and generative AI",
      "Willingness to learn DevOps tools and practices",
      "Basic Git knowledge",
      "Strong problem-solving skills and attention to detail"
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
    experience: "0-1 year"
  },
 
  {
    id: "digital-marketing-intern",
    title: "Digital Marketer (Intern)",
    type: "internship",
    description: "Learn and contribute to digital marketing strategies for SaaS products and services.",
    overview: "We are seeking an enthusiastic Digital Marketing Intern with a passion for digital marketing to join our team. You'll gain hands-on experience in content creation, social media management, and campaign execution while learning modern marketing techniques. This role offers an excellent opportunity to develop practical skills while contributing to real projects in the SaaS industry.",
    responsibilities: [
      "Content Creation: Help develop engaging content for blogs, social media, and marketing materials",
      "Social Media: Assist in managing and monitoring various social media platforms",
      "Email Marketing: Support the execution of email marketing campaigns",
      "SEO: Learn and contribute to website and content optimization efforts",
      "Analytics: Help create and maintain marketing performance reports",
      "Design: Assist in creating visual assets for marketing materials using tools like Canva",
      "Lead Generation: Support campaign execution and lead nurturing processes",
      "Market Research: Conduct competitor analysis and industry research",
      "Marketing Tools: Learn and apply various marketing automation platforms"
    ],
    requirements: [
      "Currently pursuing Marketing, Business, or related degree",
      "Strong interest in digital marketing and SaaS industry",
      "Proficiency with social media platforms",
      "Basic content writing and editing skills",
      "Strong written and verbal communication abilities",
      "Eagerness to learn marketing technologies and tools",
      "Basic analytical and problem-solving skills",
      "Creativity and attention to detail",
      "Ability to work independently and as part of a team"
    ],
    benefits: [
      'Remote Work',
      'Flexible Hours',
      'Mentorship Program',
      'Hands-on Marketing Experience',
      'Professional Development Opportunities'
    ],
    icon: Megaphone,
    location: "Remote",
    experience: "0-1 years"
  }
];