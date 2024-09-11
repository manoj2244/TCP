import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Team | Tech Consulting Partners',
  description:"Team behind the idea of Tech Consulting Partners."
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'John Doe',
    role: 'CEO',
    bio: 'John is the visionary behind our startup with over 10 years of experience in the tech industry.',
    image: '/team/john_doe.jpg'
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    bio: 'Jane leads our technology development with a passion for innovation and a strong background in software engineering.',
    image: '/team/jane_smith.jpg'
  },
];

const TeamPage: React.FC = () => {
  return (
      <main className="flex-1">
        <section id="team" className="w-full h-screen py-6 md:py-10 lg:py-16 bg-white flex justify-around">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-900">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="border border-gray-300 rounded-lg p-4 text-center">
                  <Image src={member.image} alt={member.name} width={150} height={150} className="rounded-full mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <h4 className="text-lg text-gray-600">{member.role}</h4>
                  <p className="mt-2 text-gray-800">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
  );
};

export default TeamPage;
