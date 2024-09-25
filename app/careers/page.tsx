import { Briefcase, Smile, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Careeers | Tech Consulting Partners',
  description:"Job openings by Tech Consulting Partners."
}

const jobOpenings = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    description: "Develop cutting-edge AI solutions and contribute to large-scale projects. Experience with Python, TensorFlow, and cloud platforms required.",
    location: "Remote",
    type: "Full-time"
  },
  {
    id: "ml-engineer",
    title: "Machine Learning Engineer",
    description: "Design and implement machine learning algorithms for NLP and computer vision. Experience with deep learning frameworks is a must.",
    location: "Remote",
    type: "Full-time"
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    description: "Create interactive and responsive UIs for AI-powered applications. Strong knowledge of React, Next.js, and Tailwind CSS required.",
    location: "Remote",
    type: "Contract"
  }
];

const benefits = [
  {
    icon: Shield,
    title: "Health and Wellness",
    description: "We offer comprehensive health insurance to keep you and your family safe."
  },
  {
    icon: Smile,
    title: "Work-Life Balance",
    description: "Flexible hours and remote work options to ensure a balanced life."
  },
  {
    icon: Briefcase,
    title: "Career Growth",
    description: "Join a team that fosters professional development and offers mentorship opportunities."
  },
  {
    icon: Users,
    title: "Collaborative Environment",
    description: "Work with talented individuals in a supportive and innovative space."
  }
];

export default function CareersPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-14 md:py-24 lg:py-32 bg-logo-600">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-White">
            Join Our Team
          </h1>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-blue-200">
              At Tech Consulting Partners, we’re always looking for passionate and talented people to help us build innovative AI solutions. Explore our open positions and become part of a forward-thinking team.
            </p>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="w-full py-14 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-gray-900">Current Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                <p className="text-gray-600">{job.description}</p>
                <p className="text-gray-500 mt-2">
                  <strong>Location:</strong> {job.location}
                </p>
                <p className="text-gray-500">
                  <strong>Type:</strong> {job.type}
                </p>
                <Button className="mt-4 w-full bg-logo-600 text-white hover:bg-logo-600">
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-14 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-gray-900">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
                  <Icon className="h-12 w-12 text-logo-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
