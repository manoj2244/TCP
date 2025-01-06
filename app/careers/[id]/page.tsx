import { jobOpenings } from '../data';
import { notFound } from 'next/navigation';


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
  <></>
  );
}

export async function generateStaticParams() {
  return jobOpenings.map((job) => ({
    id: job.id,
  }));
}
