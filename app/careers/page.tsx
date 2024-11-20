import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from 'next'
import { jobOpenings } from './data';
import { Users } from 'lucide-react';
import { Banner } from "../components/Banner";

export const metadata: Metadata = {
  title: 'Careers | Tech Consulting Partners',
  description: "Job openings at Tech Consulting Partners."
}

export default function CareersPage() {
  return (
    <main className="flex-1">
      <Banner 
        title="Join Our Inclusive Team"
        description="Tech Consulting Partners is a UK-based technology company with a branch in India, dedicated to enhancing the shopping experience through AI and machine learning. We're building innovative products like JewelMirror and ConversAI, and we're looking for talented individuals to join our journey."
        Icon={Users}
      />

      <section className="w-full py-14 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-gray-900">
            Current Openings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {jobOpenings.map((job) => {
              const Icon = job.icon;
              return (
                <div key={job.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow w-full">
                  <div className="flex items-center mb-4">
                    <Icon className="h-8 w-8 text-logo-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                      <span className={`text-sm ${job.type === 'internship' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'} px-2 py-1 rounded-full`}>
                        {job.type === 'internship' ? 'Internship' : 'Full-time'}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {job.requirements.slice(0, 4).map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col space-y-2 mb-4">
                    <span className="text-gray-500">📍 {job.location}</span>
                    <span className="text-gray-500">💼 Experience: {job.experience}</span>
                  </div>
                  <Link href={`/careers/${job.id}`}>
                    <Button className="w-full bg-logo-600 text-white hover:bg-logo-600/90">
                      View Details & Apply
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
