import { LucideIcon } from 'lucide-react';

interface BannerProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const Banner = ({ title, description, Icon }: BannerProps) => {
  return (
    <section className="bg-logo-600 text-white pb-3 pt-6">
      <div className="container mx-auto flex justify-center">
        <Icon className="h-12 w-12 text-blue-300 mr-2" />
        <div>
          <h1 className="text-5xl font-bold mb-2 text-center">{title}</h1>
          <p className="text-xl text-blue-200 mb-4 max-w-3xl text-center">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}; 