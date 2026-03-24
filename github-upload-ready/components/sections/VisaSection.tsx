'use client';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const CHECKLIST = [
  "Free Initial Consultation",
  "Document Checklist & Review",
  "Application Submission Support",
  "Interview Preparation",
  "Post-Approval Travel Arrangements",
  "University Offer Letter Support",
];

export default function VisaSection() {
  return (
    <section className="py-32 bg-brand-surface border-t border-brand-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center bg-brand-black border border-brand-border rounded-2xl relative overflow-hidden aspect-square lg:aspect-auto h-full min-h-[400px]"
          >
            <Image 
              src="/visa-graphics.png" 
              alt="Magener Synergy Visa Premium Services" 
              fill 
              className="object-cover opacity-70" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-black/90 via-transparent to-brand-charcoal/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
          </motion.div>
          
          <div>
            <span className="text-brand-gold tracking-[0.25em] text-xs uppercase mb-4 block">
              VISA & STUDY ABROAD
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-brand-white mb-6 leading-tight">
              Your Documents.<br />Our Expertise.
            </h2>
            <p className="text-brand-silver text-lg leading-relaxed mb-6 font-light">
              Securing a visa can feel overwhelming. With Magener Synergy, it doesn&apos;t have to.
              Our team has successfully processed applications for thousands of travelers to the UK,
              Canada, Schengen Zone, USA, Malaysia, and beyond — with a <strong className="text-brand-white font-medium">98% success rate</strong>.
            </p>
            <p className="text-brand-silver text-lg leading-relaxed mb-10 font-light">
              Whether you&apos;re travelling for tourism, relocating for studies, or joining a corporate
              delegation, we guide you from document checklist to embassy appointment and beyond.
            </p>
            
            <div className="space-y-4 mb-12">
              {CHECKLIST.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  <span className="text-brand-white text-base md:text-lg font-light">{item}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="gold" size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/contact">Start Your Application &rarr;</Link>
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
