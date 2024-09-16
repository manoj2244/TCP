import React from 'react';
import { ContactForm } from '@/components/ContactForm';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Contact | Tech Consulting Partners',
  description:"Contact Tech Consulting Partners."
}


const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to get in touch.
          </p>
        </div>
      </section>

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
