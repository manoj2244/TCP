'use client';

import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from '@supabase/supabase-js';
import toast from 'react-hot-toast';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface ApplicationFormProps {
  jobId: string;
  jobTitle: string;
}

export function ApplicationForm({ jobId, jobTitle }: ApplicationFormProps) {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get('email') as string;
      const githubProfile = formData.get('github') as string;

      // Check for existing applications
      const { data: existingApplications } = await supabase
        .from('job_applications')
        .select('id')
        .eq('job_id', jobId)
        .or(`email.eq.${email},github_profile.eq.${githubProfile}`);

      if (existingApplications && existingApplications.length > 0) {
        throw new Error('You have already applied for this position');
      }

      const resume = formData.get('resume') as File;

      // Validate file type and size
      if (!resume.type.includes('pdf')) {
        throw new Error('Please upload a PDF file');
      }

      if (resume.size > 5 * 1024 * 1024) { // 5MB limit
        throw new Error('File size should be less than 5MB');
      }

      // Create a unique filename
      const timestamp = Date.now();
      const fileName = `${timestamp}-${resume.name.replace(/\s+/g, '_')}`;

      // Upload resume to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('jobs')
        .upload(fileName, resume, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) throw uploadError;

      // Get the public URL of the uploaded file
      const { data: { publicUrl } } = supabase.storage
        .from('jobs')
        .getPublicUrl(fileName);

      // Store application data in Supabase table
      const { error: insertError } = await supabase
        .from('job_applications')
        .insert([
          {
            job_id: jobId,
            job_title: jobTitle,
            full_name: formData.get('fullName'),
            email: formData.get('email'),
            experience: parseInt(formData.get('experience') as string),
            github_profile: formData.get('github'),
            linkedin_profile: formData.get('linkedin'),
            resume_url: publicUrl
          }
        ]);

      if (insertError) throw insertError;

      toast.success("Your application has been successfully submitted.");
      formRef.current?.reset();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Failed to submit application. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form 
      ref={formRef}
      onSubmit={handleSubmit} 
      className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-gray-100"
    >
      <div>
        <Label htmlFor="fullName" className="text-gray-700 font-medium">Full Name</Label>
        <Input 
          id="fullName" 
          name="fullName" 
          required 
          className="mt-1 bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
        <Input 
          type="email" 
          id="email" 
          name="email" 
          required 
          className="mt-1 bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <Label htmlFor="experience" className="text-gray-700 font-medium">Years of Experience</Label>
        <Input 
          type="number" 
          id="experience" 
          name="experience" 
          min="0" 
          step="1"
          required 
          className="mt-1 bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <Label htmlFor="github" className="text-gray-700 font-medium">GitHub Profile</Label>
        <Input 
          id="github" 
          name="github" 
          placeholder="https://github.com/username" 
          pattern="https?:\/\/github\.com\/.*"
          title="Please enter a valid GitHub profile URL"
          required 
          className="mt-1 bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <Label htmlFor="linkedin" className="text-gray-700 font-medium">LinkedIn Profile</Label>
        <Input 
          id="linkedin" 
          name="linkedin" 
          placeholder="https://linkedin.com/in/username" 
          title="Please enter a valid LinkedIn profile URL"
          required 
          className="mt-1 bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <Label htmlFor="resume" className="text-gray-700 font-medium">Resume (PDF only, max 5MB)</Label>
        <Input 
          type="file" 
          id="resume" 
          name="resume" 
          accept=".pdf"
          required 
          className="mt-1 bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit Application'}
      </Button>
    </form>
  );
}
