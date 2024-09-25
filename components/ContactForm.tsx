'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('submitting');

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-logo-500 focus:ring focus:ring-logo-500 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-logo-500 focus:ring focus:ring-logo-500 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 text-black mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-logo-500 focus:ring focus:ring-logo-500 focus:ring-opacity-50"
          rows={4}
          required
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="bg-logo-600 text-white hover:bg-logo-700"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
      {status === 'success' && <p className="text-green-500">Your message has been sent!</p>}
      {status === 'error' && <p className="text-red-500">There was an error sending your message.</p>}
    </form>
  );
};
