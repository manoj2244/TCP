import React from 'react';
import { ContactForm } from '@/components/ContactForm';
import type { Metadata } from 'next'
import { MessageCircle } from 'lucide-react';
import { Banner } from '../components/Banner';

export const metadata: Metadata = {
  title: 'Contact | Tech Consulting Partners',
  description:"Contact Tech Consulting Partners."
}


const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <Banner 
        title="Contact Us"
        description="Get in touch with our team to discuss how we can help transform your business with AI-powered solutions."
        Icon={MessageCircle}
      />

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
