import { jobOpenings } from '../data';
import { ApplicationForm } from '@/components/ApplicationForm';
import { notFound } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';

type Props = {
  params: Promise<{
    id: string;
  }>;
}

export default async function JobDetailsPage({ params }: Props) {
  const { id } = await params;
  const job = jobOpenings.find(job => job.id === id);

  if (!job) {
    notFound();
  }

  return (
    <main className="flex-1 py-12 lg:py-20 bg-gray-50">
      <section className="w-full py-14 md:py-24 lg:py-32 bg-logo-600">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-white">
            {job.title}
          </h1>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-blue-100 mb-8">
              Join our team and work on cutting-edge technology solutions that make a difference.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Job Details */}
          <div className="space-y-8">
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                {job.description}
              </p>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
              <ul className="space-y-3">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column - Application Form */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-semibold">Apply Now</h2>
                <p className="text-gray-600 mt-2">
                  Submit your application for the {job.title} position
                </p>
              </div>
              <div className="p-6">
                <ApplicationForm jobId={job.id} jobTitle={job.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return jobOpenings.map((job) => ({
    id: job.id,
  }));
}
