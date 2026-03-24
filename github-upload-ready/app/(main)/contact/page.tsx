'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export default function ContactPage() {
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema)
  });

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('service');
    const packageParam = params.get('package');

    if (serviceParam) {
      const serviceMap: Record<string, string> = {
        'Tour Packages': 'tour',
        'Visa Assistance': 'visa',
        'Study Abroad': 'study',
        'Corporate Travel': 'corporate',
      };
      setValue('service', serviceMap[serviceParam] || 'other');
    }

    if (packageParam) {
      setValue('message', `Interested package: ${packageParam}. Please share full itinerary, payment plan, and next steps.`);
    }
  }, [setValue]);

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (res.ok) {
        setSuccess(true);
      } else {
        alert("Failed to send message. Please verify network limits.");
      }
    } catch (err) {
      alert("An error occurred while establishing connection to dispatch server.");
    }
  };

  return (
    <main className="bg-brand-black text-brand-white pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader 
          label="GET IN TOUCH"
          title="Start Your Journey"
          subtitle="Reach out to our consultants to begin planning your next trip, study abroad application, or corporate retreat."
        />
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-brand-surface p-8 md:p-12 rounded-2xl border border-brand-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm text-brand-silver">Full Name</label>
              <input 
                {...register("name")}
                className="w-full bg-brand-black border border-brand-border rounded-md px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors text-brand-white"
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-brand-silver">Email Address</label>
              <input 
                {...register("email")}
                className="w-full bg-brand-black border border-brand-border rounded-md px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors text-brand-white"
                placeholder="hello@example.com"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-brand-silver">Phone Number</label>
              <input 
                {...register("phone")}
                className="w-full bg-brand-black border border-brand-border rounded-md px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors text-brand-white"
                placeholder="+234..."
              />
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm text-brand-silver">Interested Service</label>
              <select 
                {...register("service")}
                className="w-full bg-brand-black border border-brand-border rounded-md px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors text-brand-white appearance-none"
              >
                 <option value="">Select a service...</option>
                 <option value="tour">Tour Packages</option>
                 <option value="visa">Visa Assistance</option>
                 <option value="study">Study Abroad</option>
                 <option value="corporate">Corporate Travel</option>
                 <option value="other">Other</option>
              </select>
              {errors.service && <p className="text-red-500 text-xs">{errors.service.message}</p>}
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm text-brand-silver">Your Message</label>
            <textarea 
              {...register("message")}
              rows={5}
              className="w-full bg-brand-black border border-brand-border rounded-md px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors text-brand-white resize-none"
              placeholder="Tell us about your travel plans..."
            />
            {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
          </div>
          
          <Button type="submit" variant="gold" size="lg" className="w-full md:w-auto px-12 tracking-wider" disabled={isSubmitting || success}>
            {isSubmitting ? 'Transmitting...' : success ? 'Message Delivered' : 'Send Message'}
          </Button>
          
          {success && (
            <p className="text-[#01afd1] text-sm mt-4 text-center md:text-left drop-shadow-md">
              Thank you for reaching out! A dedicated consultant will contact you shortly.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
